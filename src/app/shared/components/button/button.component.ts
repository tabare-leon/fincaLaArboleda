import { Component, EventEmitter, Input, Output } from "@angular/core";

enum fillButton {
    clear = "clear",
    outline = "outline",
    solid = "solid"
}

@Component({
    selector: 'app-button',
    template: `
    <ion-button shape="round" [fill]="fill" (click)="onTap.emit()">
       <span>{{label}}</span> 
       <ion-icon *ngIf="iconRight" slot="end" [name]="iconRight"></ion-icon>
    </ion-button>
`,
})
export class ButtonComponent {
    @Input() label!: string;
    @Input() fill: string = fillButton.solid;
    @Input() iconRight?: string;
    @Output() onTap = new EventEmitter<void>()
}