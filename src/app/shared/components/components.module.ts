import { NgModule } from "@angular/core";
import { CardReservationComponent } from "./card/card-reservation/card-reservation.component";
import { CoreModule } from "../core.module";
import { RatesComponent } from "./rates/rates.component";
import { ModalSheetComponent } from "./modal-sheet/modal-sheet.component";
import { ButtonComponent } from "./button/button.component";

const components = [CardReservationComponent, RatesComponent, ModalSheetComponent, ButtonComponent];

@NgModule({
    imports: [CoreModule],
    declarations: [...components],
    exports: [...components],
})
export class ComponentsModule { }