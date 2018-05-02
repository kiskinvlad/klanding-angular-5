import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * The panel component
 */
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

/**
 * @class PanelComponent
 */
export class PanelComponent {

  /**
   * The panel state.
   * @typedef boolean
   */
  @Input() opened: boolean = false;

  /**
   * The panel title.
   * @typedef string
   */
  @Input() title: string;

  /**
   * The panel toggle handler.
   * @typedef EventEmitter<any>
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  /**
   * @constructor
   */
  constructor() { }

}
