import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Mode = 'full' | 'small'
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input() mode: Mode = 'full';
}
