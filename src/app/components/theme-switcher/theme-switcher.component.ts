import { Component, signal, HostListener, ElementRef } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  isOpen = signal(false);

  constructor(public themeService: ThemeService, private elRef: ElementRef) {}

  toggle() {
    this.isOpen.update(v => !v);
  }

  selectTheme(theme: Theme) {
    this.themeService.setTheme(theme.id);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
