import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../consts/icons';

@Injectable()
export class IconLoadService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  load() {
    ICONS.forEach((path) =>
      this.matIconRegistry.addSvgIcon(
        'caret-down',
        this.domSanitizer.bypassSecurityTrustResourceUrl(path)
      )
    );
  }
}
