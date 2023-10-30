import { Component, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Base64 } from '@interfaces/models';
import { HttpService, ToastrAlertService } from '@services/index';
import { Subscription } from 'rxjs';

type TypeForm = {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  tags: FormArray
};

type Checkbox = {
  name: string,
  value: boolean,
}

@Component({
  selector: 'app-create-item-store',
  templateUrl: './create-item-store.component.html',
})
export class CreateItemStoreComponent implements OnInit {
  form: FormGroup<TypeForm>;
  subs: Subscription[] = [];
  load = false;

  private toastr = inject(ToastrAlertService);
  private httpServ = inject(HttpService);

  imgPrincipal = '../../../../../assets/img/imagen-default.png'
  attachedImages: string[] = []
  checkboxes: Checkbox[] = [
    {
      name: 'Cargando...',
      value: false,
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      tags: this.fb.array(this.checkboxes.map(x => x.value)),
    });
  }

  ngOnInit(): void {
    this.httpServ.listTags().subscribe(res => {
      if (!res.error && res.data) {
        if (res.data.length) {
          this.checkboxes = res.data.map(el => {
            return {
              name: el.name,
              value: false,
            }
          });
        }
        this.form.setControl('tags', this.fb.array(this.checkboxes.map(x => x.value)));
      } else {
        this.toastr.error(res.msg);
      }
    })
  }

  updateCheckboxes() {
    const formValues = this.form.get('tags')?.value;
    if (formValues) {
      this.checkboxes.forEach((input, index) => {
        input.value = formValues[index];
      });
    }
  }

  onSubmit() {
    this.updateCheckboxes()
    const tags = this.checkboxes.filter(x => x.value).map(x => x.name);
    console.log(tags);
  }

  loadBase64(base: Base64) {
    console.log('base',base);
    // this.imgPrincipal = `data:image/${base.mimeType},${base.base64}`
    this.imgPrincipal = `data:image/png;base64,${base.base64}`
  }

  newImage(base: Base64) {
    this.attachedImages.push(`data:image/png;base64,${base.base64}`)
  }
}
