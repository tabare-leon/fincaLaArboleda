

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const dependencies = [
    CommonModule,
    FormsModule,
    IonicModule,
];

@NgModule({
    imports: [...dependencies],
    exports: [...dependencies]
})
export class CoreModule { }