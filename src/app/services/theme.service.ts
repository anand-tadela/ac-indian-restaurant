import { Injectable, signal } from '@angular/core';

export interface Theme {
  id: string;
  name: string;
  icon: string;
  colors: Record<string, string>;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'ac-restaurant-theme';

  readonly themes: Theme[] = [
    {
      id: 'classic-gold',
      name: 'Classic Gold',
      icon: '🪔',
      colors: {
        '--gold': '#d4af37',
        '--gold-light': '#e8c547',
        '--dark-brown': '#2c1810',
        '--dark-brown-light': '#3d2518',
        '--dark-brown-deep': '#1a0a05',
        '--red': '#8b0000',
        '--cream': '#fdf5e6',
        '--cream-dark': '#f5e6c8',
        '--primary': '#b8860b',
        '--primary-dark': '#8b6508',
        '--text-dark': '#1a1a1a',
        '--text-light': '#6b6b6b',
        '--border': '#e0d5c0',
        '--card-bg': '#ffffff',
        '--overlay-accent': 'rgba(184, 134, 11, 0.15)',
        '--overlay-accent-subtle': 'rgba(184, 134, 11, 0.12)',
        '--accent-bg': 'rgba(184, 134, 11, 0.1)',
        '--accent-bg-subtle': 'rgba(184, 134, 11, 0.08)',
        '--nav-scrolled-bg': 'rgba(44, 24, 16, 0.95)',
        '--nav-mobile-bg': 'rgba(44, 24, 16, 0.98)',
        '--footer-bg': '#1a0a05',
        '--focus-shadow': 'rgba(212, 175, 55, 0.1)',
      }
    },
    {
      id: 'royal-purple',
      name: 'Royal Purple',
      icon: '👑',
      colors: {
        '--gold': '#9b59b6',
        '--gold-light': '#b07cc6',
        '--dark-brown': '#1a0a2e',
        '--dark-brown-light': '#2d1b4e',
        '--dark-brown-deep': '#0d0519',
        '--red': '#8e44ad',
        '--cream': '#f5f0ff',
        '--cream-dark': '#e8dff5',
        '--primary': '#7d3c98',
        '--primary-dark': '#6c3483',
        '--text-dark': '#1a1a2e',
        '--text-light': '#6b6b8a',
        '--border': '#d5c8e8',
        '--card-bg': '#ffffff',
        '--overlay-accent': 'rgba(155, 89, 182, 0.15)',
        '--overlay-accent-subtle': 'rgba(155, 89, 182, 0.12)',
        '--accent-bg': 'rgba(155, 89, 182, 0.1)',
        '--accent-bg-subtle': 'rgba(155, 89, 182, 0.08)',
        '--nav-scrolled-bg': 'rgba(26, 10, 46, 0.95)',
        '--nav-mobile-bg': 'rgba(26, 10, 46, 0.98)',
        '--footer-bg': '#0d0519',
        '--focus-shadow': 'rgba(155, 89, 182, 0.15)',
      }
    },
    {
      id: 'ocean-blue',
      name: 'Ocean Blue',
      icon: '🌊',
      colors: {
        '--gold': '#2980b9',
        '--gold-light': '#3498db',
        '--dark-brown': '#0a1628',
        '--dark-brown-light': '#152238',
        '--dark-brown-deep': '#050d18',
        '--red': '#c0392b',
        '--cream': '#f0f6ff',
        '--cream-dark': '#dce8f5',
        '--primary': '#2471a3',
        '--primary-dark': '#1a5276',
        '--text-dark': '#0a1628',
        '--text-light': '#5d6d7e',
        '--border': '#c8d8e8',
        '--card-bg': '#ffffff',
        '--overlay-accent': 'rgba(41, 128, 185, 0.15)',
        '--overlay-accent-subtle': 'rgba(41, 128, 185, 0.12)',
        '--accent-bg': 'rgba(41, 128, 185, 0.1)',
        '--accent-bg-subtle': 'rgba(41, 128, 185, 0.08)',
        '--nav-scrolled-bg': 'rgba(10, 22, 40, 0.95)',
        '--nav-mobile-bg': 'rgba(10, 22, 40, 0.98)',
        '--footer-bg': '#050d18',
        '--focus-shadow': 'rgba(41, 128, 185, 0.15)',
      }
    },
    {
      id: 'forest-green',
      name: 'Forest Green',
      icon: '🌿',
      colors: {
        '--gold': '#27ae60',
        '--gold-light': '#2ecc71',
        '--dark-brown': '#0a2618',
        '--dark-brown-light': '#163d28',
        '--dark-brown-deep': '#051a0d',
        '--red': '#c0392b',
        '--cream': '#f0fff5',
        '--cream-dark': '#d5f5e3',
        '--primary': '#229954',
        '--primary-dark': '#1e8449',
        '--text-dark': '#0a2618',
        '--text-light': '#5d7a6b',
        '--border': '#c8e6d5',
        '--card-bg': '#ffffff',
        '--overlay-accent': 'rgba(39, 174, 96, 0.15)',
        '--overlay-accent-subtle': 'rgba(39, 174, 96, 0.12)',
        '--accent-bg': 'rgba(39, 174, 96, 0.1)',
        '--accent-bg-subtle': 'rgba(39, 174, 96, 0.08)',
        '--nav-scrolled-bg': 'rgba(10, 38, 24, 0.95)',
        '--nav-mobile-bg': 'rgba(10, 38, 24, 0.98)',
        '--footer-bg': '#051a0d',
        '--focus-shadow': 'rgba(39, 174, 96, 0.15)',
      }
    },
    {
      id: 'sunset-red',
      name: 'Sunset Red',
      icon: '🌅',
      colors: {
        '--gold': '#e74c3c',
        '--gold-light': '#ec7063',
        '--dark-brown': '#2c0b0b',
        '--dark-brown-light': '#451212',
        '--dark-brown-deep': '#1a0505',
        '--red': '#c0392b',
        '--cream': '#fff5f5',
        '--cream-dark': '#fce4e4',
        '--primary': '#cb4335',
        '--primary-dark': '#a93226',
        '--text-dark': '#2c0b0b',
        '--text-light': '#7a5d5d',
        '--border': '#e8c8c8',
        '--card-bg': '#ffffff',
        '--overlay-accent': 'rgba(231, 76, 60, 0.15)',
        '--overlay-accent-subtle': 'rgba(231, 76, 60, 0.12)',
        '--accent-bg': 'rgba(231, 76, 60, 0.1)',
        '--accent-bg-subtle': 'rgba(231, 76, 60, 0.08)',
        '--nav-scrolled-bg': 'rgba(44, 11, 11, 0.95)',
        '--nav-mobile-bg': 'rgba(44, 11, 11, 0.98)',
        '--footer-bg': '#1a0505',
        '--focus-shadow': 'rgba(231, 76, 60, 0.15)',
      }
    },
    {
      id: 'dark-mode',
      name: 'Dark Mode',
      icon: '🌙',
      colors: {
        '--gold': '#d4af37',
        '--gold-light': '#e8c547',
        '--dark-brown': '#1e1e2e',
        '--dark-brown-light': '#2a2a3d',
        '--dark-brown-deep': '#12121e',
        '--red': '#e74c3c',
        '--cream': '#1a1a2e',
        '--cream-dark': '#252540',
        '--primary': '#d4af37',
        '--primary-dark': '#b8960b',
        '--text-dark': '#e8e8f0',
        '--text-light': '#a0a0b8',
        '--border': '#3d3d55',
        '--card-bg': '#252540',
        '--overlay-accent': 'rgba(212, 175, 55, 0.15)',
        '--overlay-accent-subtle': 'rgba(212, 175, 55, 0.12)',
        '--accent-bg': 'rgba(212, 175, 55, 0.12)',
        '--accent-bg-subtle': 'rgba(212, 175, 55, 0.08)',
        '--nav-scrolled-bg': 'rgba(18, 18, 30, 0.95)',
        '--nav-mobile-bg': 'rgba(18, 18, 30, 0.98)',
        '--footer-bg': '#12121e',
        '--focus-shadow': 'rgba(212, 175, 55, 0.15)',
      }
    }
  ];

  currentTheme = signal<Theme>(this.themes[0]);

  constructor() {
    this.loadSavedTheme();
  }

  setTheme(themeId: string): void {
    const theme = this.themes.find(t => t.id === themeId);
    if (theme) {
      this.currentTheme.set(theme);
      this.applyTheme(theme);
      localStorage.setItem(this.STORAGE_KEY, themeId);
    }
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }

  private loadSavedTheme(): void {
    const savedId = localStorage.getItem(this.STORAGE_KEY);
    if (savedId) {
      const theme = this.themes.find(t => t.id === savedId);
      if (theme) {
        this.currentTheme.set(theme);
        this.applyTheme(theme);
      }
    }
  }
}
