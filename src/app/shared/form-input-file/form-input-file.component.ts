import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { convertFileToBase64 } from '@utils/index';
import { Base64 } from '@interfaces/index';

@Component({
  selector: 'form-input-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-input-file.component.html',
  styleUrls: ['./form-input-file.component.css']
})
export class FormInputFileComponent {
  @Output() changeFile = new EventEmitter<Base64>();
  @Input() placeholder: string = '';
  @Input() basic: boolean = false;

  @Input() label: string = '';

  async onChange(ev: Event) {
    const file = (ev as any).target.files[0];
    const base = await convertFileToBase64(file)
    this.changeFile.emit(base);
  }

}
