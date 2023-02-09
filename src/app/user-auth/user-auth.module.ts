import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperComponent } from './helper/helper.component';
import { ValueDisplayComponent } from './value-display/value-display.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FormsModule }   from '@angular/forms';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    HelperComponent,
    ValueDisplayComponent,
    AngularFormComponent,
    MaterialUiComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports:[
    HelperComponent ,
    ValueDisplayComponent,
    AngularFormComponent,
    FormsModule,
    MaterialUiComponent,
    MatButtonModule,
  ]

})
export class UserAuthModule { }
