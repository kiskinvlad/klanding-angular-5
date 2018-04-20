import {Component, ContentChildren, OnInit, QueryList, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {PanelComponent} from "../panel/panel.component";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  ngAfterContentInit(): void {
    this.cdRef.detectChanges();
    this.panels.toArray().forEach((panel: PanelComponent) => {
      panel.toggle.subscribe(() =>  setTimeout(() => {
        this.openPanel(panel);
      }));
    });

    setTimeout(() => {
      this.openPanel(this.panels.toArray()[0]);
    })
  }

  public openPanel(panel:PanelComponent): void {
    this.panels.toArray().forEach(p => p.opened = false);
    panel.opened = true;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

}
