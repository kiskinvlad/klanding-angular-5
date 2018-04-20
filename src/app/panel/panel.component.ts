import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

}
