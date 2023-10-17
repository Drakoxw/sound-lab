import { Component, OnInit  } from '@angular/core';

const optionsVals = {
  itemStore: 'Crear Item Store',
  tags: 'Crear etiquetas',
}
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html'
})
export class AdminViewComponent implements OnInit {

  optionsValues = optionsVals

  options = Object.values(optionsVals)

  seleted = optionsVals.itemStore;

  ngOnInit(): void {}

  changeOption(option: string) {
    this.seleted = option
  }

}
