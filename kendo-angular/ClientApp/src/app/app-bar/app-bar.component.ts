import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
        <div class="wrap" *ngFor="let themeColor of themeColors">
            <kendo-appbar [themeColor]="themeColor">

                <kendo-appbar-section>
                    <h1 class="title">{{ themeColor }} AppBar</h1>
                </kendo-appbar-section>

                <kendo-appbar-spacer></kendo-appbar-spacer>

                <kendo-appbar-section>
                    <kendo-badge-container>
                        <button #anchor (click)="onToggle()" class="k-button k-button-clear">
                            <kendo-icon [name]="'bell'"></kendo-icon>
                        </button>
                        <kendo-popup [anchor]="anchor" [popupClass]="'content popup'" *ngIf="show">
                          <p style="margin: 30px;">Popup content!</p>
                        </kendo-popup>      
                    </kendo-badge-container>
                </kendo-appbar-section>
                <kendo-appbar-section>
                    <kendo-badge-container>
                        <button #anchor (click)="onToggle()" class="k-button k-button-clear">
                            <kendo-icon [name]="'bell'"></kendo-icon>
                        </button>
                        <kendo-popup [anchor]="anchor" [popupClass]="'content popup'" *ngIf="show">
                          <p style="margin: 30px;">Popup content!</p>
                        </kendo-popup>      
                    </kendo-badge-container>
                </kendo-appbar-section>
            </kendo-appbar>
        </div>
    `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
        .title {
            text-transform: capitalize;
            font-size: 18px;
            margin: 0;
        }
        kendo-badge-container {
            margin-right: 4px;
        }
        kendo-badge-container .k-button {
            padding: 0;
        }
        .k-appbar-dark .k-button-clear {
            color: #FFFFFFFF;
        }
        .k-appbar-dark .k-button-clear:hover {
            color: #FFFFFF99;
        }
        .k-icon {
            font-size: 18px;
        }
        .k-appbar .k-appbar-separator {
            margin: 0 8px;
        }
    `]
})
export class AppBarComponent {
  public themeColors = ['dark'];
  public show = false;
  public toggleText = 'Show';
  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Hide' : 'Show';
  }
}
