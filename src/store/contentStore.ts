import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { PageContent } from '../types/content';
import toast from 'react-hot-toast';

interface ContentState {
  contents: PageContent[];
  loading: boolean;
  error: string | null;
  fetchPageContent: (page: string) => Promise<void>;
  updateContent: (content: Partial<PageContent>) => Promise<void>;
  uploadImage: (file: File) => Promise<string>;
}

export const useContentStore = create<ContentState>((set, get) => ({
  contents: [],
  loading: false,
  error: null,

  fetchPageContent: async (page: string) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('page_contents')
        .select('*')
        .eq('page', page)
        .order('created_at', { ascending: true });

      if (error) throw error;
      set({ contents: data || [] });
    } catch (error: any) {
      console.error('Content fetch error:', error);
      set({ error: error.message });
      // Don't show error toast in development when using mock data
      if (import.meta.env.VITE_SUPABASE_URL) {
        toast.error('Failed to fetch content');
      }
    } finally {
      set({ loading: false });
    }
  },

  updateContent: async (content: Partial<PageContent>) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('page_contents')
        .upsert({
          ...content,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      const contents = get().contents;
      const index = contents.findIndex(c => c.id === content.id);
      
      if (index !== -1) {
        contents[index] = { ...contents[index], ...data };
        set({ contents: [...contents] });
      } else {
        set({ contents: [...contents, data] });
      }

      toast.success(content.id ? 'Content updated successfully' : 'Section created successfully');
    } catch (error: any) {
      console.error('Content update error:', error);
      set({ error: error.message });
      toast.error(content.id ? 'Failed to update content' : 'Failed to create section');
    } finally {
      set({ loading: false });
    }
  },

  uploadImage: async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `content-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('public')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('public')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error: any) {
      console.error('Image upload error:', error);
      toast.error('Failed to upload image');
      throw error;
    }
  },
}));