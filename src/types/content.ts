export interface PageContent {
  id: string;
  page: string;
  section: string;
  title?: string;
  content: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ContentSection {
  id: string;
  name: string;
  description: string;
}