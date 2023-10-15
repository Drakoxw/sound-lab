import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS_MODULE_CLIENT } from '@constants/routes';
import { AuthService } from '@services/index';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public authService = inject(AuthService)
  private router = inject(Router)

  ngOnInit(): void {
    if (!this.authService.admin()) {
      this.router.navigate([PATHS_MODULE_CLIENT.root]);
    }
  }

}
