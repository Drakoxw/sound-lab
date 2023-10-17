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

  checkboxes = [
    {
      name: 'Value Z',
      value: false,
    },
    {
      name: 'Value X',
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
    setTimeout(() => {
      const boxes = [
        {
          name: 'Value 1',
          value: false,
        },
        {
          name: 'Value 2',
          value: false,
        },
        {
          name: 'Value 3',
          value: false,
        },
        {
          name: 'Value 4',
          value: false,
        }
      ]
      this.checkboxes = boxes;
      this.form.setControl('tags', this.fb.array(this.checkboxes.map(x => x.value)));
    }, 3000)
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
    console.log(base);

  }
}
