/*tslint:disable*/
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class Material { }
