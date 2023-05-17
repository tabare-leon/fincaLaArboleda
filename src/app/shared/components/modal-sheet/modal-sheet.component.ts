import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-modal-sheet',
    templateUrl: './modal-sheet.component.html'
})
export class ModalSheetComponent {
    @Input() isOpen!: boolean;
    @Output() onWillDismiss = new EventEmitter<void>()

}