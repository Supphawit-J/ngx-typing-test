import { NgModule } from '@angular/core';
import { NgxTypingTestComponent } from './ngx-typing-test.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    NgxTypingTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
  ],
  exports: [
    NgxTypingTestComponent
  ]
})
export class NgxTypingTestModule { }
