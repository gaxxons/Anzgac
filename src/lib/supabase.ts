import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient;

if (!supabaseUrl || !supabaseKey) {
  // For development, use mock data if Supabase credentials are not available
  const mockData = {
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          order: () => ({
            data: [
              {
                id: '1',
                page: 'home',
                section: 'hero',
                title: 'Welcome to ANZGAC',
                content: 'Uniting Ghanaian Adventists across Australia and New Zealand through faith, culture, and community.',
                image_url: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&q=80',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              },
              {
                id: '2',
                page: 'about',
                section: 'story',
                title: 'Our Story',
                content: 'ANZGAC began as a small group of Ghanaian Adventists who came together to worship and maintain their cultural identity.',
                image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              }
            ],
            error: null
          })
        })
      }),
      upsert: (content: any) => ({
        select: () => ({
          single: () => ({
            data: { ...content, id: Math.random().toString() },
            error: null
          })
        })
      })
    }),
    storage: {
      from: () => ({
        upload: () => ({ error: null }),
        getPublicUrl: () => ({ data: { publicUrl: 'https://images.unsplash.com/photo-placeholder' } })
      })
    }
  };

  console.warn('Using mock data for development. Please set up Supabase credentials for production.');
  // @ts-ignore
  supabaseClient = mockData;
} else {
  supabaseClient = createClient(supabaseUrl, supabaseKey);
}

export const supabase = supabaseClient;