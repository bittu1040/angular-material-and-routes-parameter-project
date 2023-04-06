import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
MatToolbarModule,  MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ProductService } from './product.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  {path: '', component: InstructionsComponent},
  {path: 'details/:id/:name', component: DetailsComponent}
  ];


@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,
                MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatInputModule,
                MatOptionModule, MatSelectModule,MatSlideToggleModule,MatCardModule,
                MatChipsModule, MatToolbarModule, MatIconModule,MatListModule,   HttpClientModule,
                RouterModule.forRoot(appRoutes) ],

  declarations: [ AppComponent, MainComponent, DetailsComponent, InstructionsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MatIconRegistry, ProductService]
})
export class AppModule { }
