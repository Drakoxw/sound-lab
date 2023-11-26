import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { FileAssets } from '@interfaces/index';
import { HttpService, ToastrAlertService } from '@services/index';
import { AssetsService } from '@services/assets.service';

@Component({
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
})
export class AdminImagesComponent implements OnInit, OnDestroy {
  assetsServ = inject(AssetsService);
  httpServ = inject(HttpService);
  toast = inject(ToastrAlertService);
  clipboard = inject(Clipboard);

  data = this.assetsServ.data;
  loadText = this.assetsServ.loadText;
  filter = '';
  openDetail = false;
  itemFile?: FileAssets;

  ngOnDestroy(): void {
    this.assetsServ.onDestroy();
  }

  ngOnInit(): void {
    this.assetsServ.listAssets();
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
    if (item) {
      this.itemFile = item;
    }
  }
}
