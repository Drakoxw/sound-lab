import { Component, OnInit, inject } from '@angular/core';
import { DataListTags } from '@interfaces/index';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';

@Component({
  selector: 'app-create-tags-admin',
  templateUrl: './create-tags-admin.component.html'
})
export class CreateTagsAdminComponent implements OnInit {

  httpService = inject(HttpService)
  toastr = inject(ToastrAlertService)

  list: DataListTags[] = []
  newTag = ''
  load:boolean = false

  ngOnInit(): void {
    this.listTags()
  }

  listTags() {
    this.httpService.listTags().subscribe(res => {
      if (!res.error && res.data) {
        this.list = res.data;
      } else {
        this.toastr.error(res.msg);
      }
    })
  }

  createTag() {
    if (this.newTag.length < 3) { this.toastr.warning('El nombre debe tener al menos 3 caracteres') }
    this.load = true
    this.httpService.createTag(this.newTag).subscribe(res => {
      this.newTag = ''
      this.load = false
      if (!res.error) {
        this.toastr.success(res.msg);
        this.listTags();
      } else {
        this.toastr.error(res.msg);
      }
    })
  }

}
