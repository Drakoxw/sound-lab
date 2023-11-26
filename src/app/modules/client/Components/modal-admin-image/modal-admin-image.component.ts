import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Base64, FileAssets } from '@interfaces/index';
import { AssetsService } from '@services/assets.service';
import { ToastrAlertService } from '@services/index';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { logDev } from '@utils/console';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-modal-admin-image',
  templateUrl: './modal-admin-image.component.html',
})
export class ModalAdminImageComponent implements OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() DataFile!: FileAssets;
  @ViewChild('changeSwal') changeSwal!: SwalComponent;
  @ViewChild('deleteSwal') deleteSwal!: SwalComponent;

  assetsServ = inject(AssetsService);
  toast = inject(ToastrAlertService);
  deletePath: string = '';

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

  activateDelete(path: string) {
    this.deletePath = path;
    this.deleteSwal.fire();
  }

  deleteFile() {
    if (this.deletePath) {
      this.assetsServ.deleteAsset(this.deletePath);
      this.close();
    }
  }

  loadBase(base: Base64) {
    this.base = base;
    if (this.DataFile.mimeType !== this.base.mimeType) {
      this.toast.info(
        'Los formatos son diferentes estos puede generar errores!',
        'ATENCION!',
        12000
      );
    }
    this.subs.push(
      timer(300).subscribe({
        complete: () => this.changeSwal.fire(),
      })
    );
  }

  confirmChange() {
    this.assetsServ.changeAsset(this.DataFile.path, this.base);
    this.close();
  }
}
