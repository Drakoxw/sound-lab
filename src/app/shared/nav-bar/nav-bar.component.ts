import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WHATSAPP_LINK } from '@constants/common';
import { PATHS_FULL_CLIENT } from '@constants/routes';
import { AuthService, LocalstorageService } from '@services/index';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private localStorage = inject(LocalstorageService)
  public authService = inject(AuthService)

  linkWhastapp = WHATSAPP_LINK;

  routes = PATHS_FULL_CLIENT;

  showNavbar:boolean = false;

  activeNav:boolean = false;

  dev:boolean = false;

  ngOnInit(): void {
    this.activeNav= Boolean(this.localStorage.getItem('_ng5479'))
    if (this.activeNav) {
      this.localStorage.setItem('_ng5479', String(Date.now()))
    }
  }


}
