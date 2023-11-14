import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { convertFileToBase64 } from '@utils/index';
import { Base64 } from '@interfaces/index';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'form-input-file',
    standalone: true,
    templateUrl: './form-input-file.component.html',
    styleUrls: ['./form-input-file.component.css'],
    imports: [CommonModule, ButtonComponent]
})
export class FormInputFileComponent {
  @Output() changeFile = new EventEmitter<Base64>();
  @Input() placeholder: string = '';
  @Input() basic: boolean = false;
  @Input() typeButton: boolean = false;
  @Input() label: string = '';

  async onChange(ev: Event) {
    const file = (ev as any).target.files[0];
    const base = await convertFileToBase64(file)
    this.changeFile.emit(base);
  }

}
