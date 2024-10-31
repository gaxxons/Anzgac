import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User, Session } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkUser: () => Promise<void>;
}

// Default admin credentials for development
const DEFAULT_ADMIN = {
  email: 'admin@anzgac.org',
  password: 'admin123'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    // In development, allow default admin login
    if (import.meta.env.DEV && 
        email === DEFAULT_ADMIN.email && 
        password === DEFAULT_ADMIN.password) {
      const mockUser = {
        id: '1',
        email: DEFAULT_ADMIN.email,
        role: 'admin',
        created_at: new Date().toISOString(),
      } as User;
      
      const mockSession = {
        access_token: 'mock_token',
        refresh_token: 'mock_refresh_token',
        expires_in: 3600,
        user: mockUser,
      } as Session;

      set({ user: mockUser, session: mockSession });
      return;
    }

    // Regular Supabase authentication
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signOut: async () => {
    // Clear mock session if in development
    if (import.meta.env.DEV) {
      set({ user: null, session: null });
      return;
    }

    // Regular Supabase sign out
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, session: null });
  },
  checkUser: async () => {
    try {
      const { data: { user, session } } = await supabase.auth.getSession();
      set({ user, session, loading: false });
    } catch (error) {
      set({ user: null, session: null, loading: false });
      console.error('Error checking auth state:', error);
    }
  },
}));