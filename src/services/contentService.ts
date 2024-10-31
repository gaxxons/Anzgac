import { supabase } from '../lib/supabase';

export interface ContentSection {
  id?: string;
  page: string;
  section: string;
  title: string;
  content: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const contentService = {
  async getPageContent(page: string): Promise<ContentSection[]> {
    try {
      const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .eq('page', page)
        .order('created_at');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Content fetch error:', error);
      return [];
    }
  },

  async updateContent(content: ContentSection): Promise<ContentSection | null> {
    try {
      const updates = {
        ...content,
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('page_content')
        .upsert(updates)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Content update error:', error);
      return null;
    }
  },

  async uploadImage(file: File, path: string): Promise<string | null> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${path}/${fileName}`;

      const { error } = await supabase.storage
        .from('content-images')
        .upload(filePath, file);

      if (error) throw error;

      const { data } = supabase.storage
        .from('content-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      return null;
    }
  }
};