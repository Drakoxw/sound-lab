import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WHATSAPP_LINK } from '@constants/common';
import { PATHS_FULL_CLIENT } from '@constants/routes';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  linkWhastapp = WHATSAPP_LINK;

  routes = PATHS_FULL_CLIENT;

  showNavbar:boolean = false;

}
