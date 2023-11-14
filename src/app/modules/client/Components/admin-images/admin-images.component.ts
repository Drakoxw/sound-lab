import { Component, OnInit, inject } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { FileAssets, FileAssetsData } from '@interfaces/index';
import { HttpService, ToastrAlertService } from '@services/index';
import { logDev } from '@utils/console';

@Component({
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
})
export class AdminImagesComponent implements OnInit {
  httpServ = inject(HttpService);
  toast = inject(ToastrAlertService);
  clipboard = inject(Clipboard);

  data: FileAssetsData[] = [];
  filter = '';
  openDetail = false;
  itemFile?: FileAssets;
  loadText = 'Cargando Carpetas...'

  ngOnInit(): void {
    this.httpServ.listAssets().subscribe((res) => {
      if (res.error) {
        return this.toast.error(res.msg);
      }
      if (res.data) this.data = res.data
      else this.loadText = 'No hay se encontraron datos ni archivos!'
    });
  }

  changeFilter(val: string) {
    this.filter = val;
  }

  copy(url: string) {
    this.toast.success('Copiado al portapapeles');
    this.clipboard.copy(url);
  }

  open(url: string) {
    window.open(url);
  }

  toggleModal(item?: FileAssets) {
    this.openDetail = !this.openDetail;
    if (item) { this.itemFile = item; }
  }

}
