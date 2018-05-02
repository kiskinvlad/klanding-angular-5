import {Component, ContentChildren, OnInit, QueryList, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {PanelComponent} from '../panel/panel.component';

/**
 * The accordion component.
 */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

/**
 * @class AccordionComponent
 * @implements AfterContenInit
 */
export class AccordionComponent implements AfterContentInit {

  /**
   * The accordion query list panel.
   * @typedef QueryList
   */
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  /**
   * The Accordion component lifecycle hook
   * that is called after a directive's content has been
   * fully initialized.
   * @returns void
   */
  ngAfterContentInit(): void {
    this.cdRef.detectChanges();
    this.panels.toArray().forEach((panel: PanelComponent) => {
      panel.toggle.subscribe(() =>  setTimeout(() => {
        this.openPanel(panel);
      }));
    });

  /**
   * Set first panel open as default.
   */
    setTimeout(() => {
      this.openPanel(this.panels.toArray()[0]);
    });
  }

  /**
   * Set current panel to open state.
   * @param {panel} PanelComponent - current panel
   * @returns void
   */
  public openPanel(panel: PanelComponent): void {
    this.panels.toArray().forEach(p => p.opened = false);
    panel.opened = true;
  }

  /**
   * @constructor
   * @param {cdRef} ChangeDetectorRef - Change detector rerference
   */
  constructor(private cdRef: ChangeDetectorRef) { }

}
