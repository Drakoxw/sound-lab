import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Base64, FileAssets } from '@interfaces/index';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-modal-admin-image',
  templateUrl: './modal-admin-image.component.html',
})
export class ModalAdminImageComponent implements OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() DataFile!: FileAssets;
  @ViewChild('changeSwal') changeSwal!: SwalComponent;

  subs: Subscription[] = [];

  base: Base64 = {
    name: '',
    mimeType: '',
    base64: '',
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  close() {
    this.closeModal.emit(false);
  }

  deleteFile() {
  }

  loadBase(base: Base64) {
    this.base = base;
    this.subs.push(
      timer(300).subscribe({
        complete: () => this.changeSwal.fire(),
      })
    );
  }

  confirmChange() {}
}
