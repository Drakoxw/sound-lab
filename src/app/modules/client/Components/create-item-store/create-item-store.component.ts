import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IMG_DEFAULT } from '@constants/index';
import { NewItemStoreRequest } from '@interfaces/index';
import { Base64 } from '@interfaces/models';
import {
  HttpService,
  ItemStoreService,
  ToastrAlertService,
} from '@services/index';
import { Subscription } from 'rxjs';

type TypeForm = {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  imagen: FormControl<string | null>;
  value: FormControl<string | null>;
  tags: FormArray;
};

type Checkbox = {
  name: string;
  value: boolean;
};

const imgDefault = `../../../../../${IMG_DEFAULT}`

@Component({
  selector: 'app-create-item-store',
  templateUrl: './create-item-store.component.html',
})
export class CreateItemStoreComponent implements OnInit, OnDestroy {
  form: FormGroup<TypeForm>;
  subs: Subscription[] = [];

  private toastr = inject(ToastrAlertService);
  private httpServ = inject(HttpService);
  private itemStoreServ = inject(ItemStoreService);

  load = this.itemStoreServ.loadingItem();
  imgPrincipal = imgDefault;
  attachedImages: string[] = this.itemStoreServ.attachedImages;
  checkboxes: Checkbox[] = [
    {
      name: 'Cargando...',
      value: false,
    },
  ];

  allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  labelInputImg = 'Subir Imagen Principal';
  tagsVoid = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      imagen: ['', [Validators.required, Validators.minLength(3)]],
      value: [''],
      tags: this.fb.array(this.checkboxes.map((x) => x.value)),
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
    this.itemStoreServ.onDestroy();
  }

  get name() {
    return {
      validateError:
        this.form.get('name')?.errors && this.form.get('name')?.touched
          ? 'Campo requerido'
          : '',
    };
  }

  get description() {
    return {
      validateError:
        this.form.get('description')?.errors &&
        this.form.get('description')?.touched
          ? 'Campo requerido'
          : '',
    };
  }

  get imagen() {
    return {
      validateError:
        this.form.get('imagen')?.errors && this.form.get('imagen')?.touched
          ? 'Imagen requerida'
          : '',
    };
  }

  ngOnInit(): void {
    this.subs[0] = this.itemStoreServ.url.subscribe((url) => {
      if (url !== imgDefault) {
        this.imgPrincipal = url;
        this.labelInputImg = 'Imagen principal actualizada';
        this.form.get('imagen')?.setValue(url);
      }
    })
    this.subs[1] = this.httpServ.listTags().subscribe((res) => {
      if (!res.error && res.data) {
        if (res.data.length) {
          this.checkboxes = res.data.map((el) => {
            return {
              name: el.name,
              value: false,
            };
          });
        }
        this.form.setControl(
          'tags',
          this.fb.array(this.checkboxes.map((x) => x.value))
        );
      } else {
        this.toastr.error(res.msg);
      }
    });
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
    this.updateCheckboxes();
    const tags = this.checkboxes.filter((x) => x.value).map((x) => x.name);

    if (tags.length == 0) this.tagsVoid = true;
    else this.tagsVoid = false;

    if (this.form.invalid) {
      this.toastr.warning('Faltan campos obligatorios!');
      return this.form.markAllAsTouched();
    }

    const payload: NewItemStoreRequest = {
      name: String(this.form.get('name')?.value),
      description: String(this.form.get('description')?.value),
      mainImage: this.imgPrincipal,
      tags,
      otherImages: this.attachedImages
    }
    this.itemStoreServ.createItemStore(payload)
    this.itemStoreServ.resetService()
    this.labelInputImg = 'Subir Imagen Principal';
    this.form.reset()
  }

  async loadBase64(base: Base64) {
    if (this.itemStoreServ.loadingImage()) {
      return this.toastr.warning('Se esta cargando una imagen', 'Espere...!');
    }
    if (this.allowedMimeTypes.includes(base.mimeType)) {
      this.labelInputImg = 'Subiendo nueva imagen...';
      this.itemStoreServ.saveImage(base, true);
    } else { return this.toastr.error('Tipo de archivo no permitido!'); }
  }

  async newImage(base: Base64) {
    if (this.allowedMimeTypes.includes(base.mimeType)) {
      this.itemStoreServ.saveImage(base, false);
    } else { this.toastr.error('Tipo de archivo no permitido!'); }
  }
}
