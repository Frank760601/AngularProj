import { Component } from '@angular/core';
import { PanelBarExpandMode } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-nav-menu',
  template: `
    <div class="panelbar-wrapper">
        <kendo-panelbar [expandMode]="expandMode">
            <kendo-panelbar-item [title]="'My Teammates'" expanded="true">
                <ng-template kendoPanelBarContent>
                    <div>
                        <div class="teamMate">
                            <img [src]="imageUrl('andrew')" alt="Andrew Fuller">
                            <span class="mate-info">
                              <h2>Andrew Fuller</h2>
                              <p>Team Lead</p>
                            </span>
                        </div>
                        <div class="teamMate">
                            <img [src]="imageUrl('nancy')" alt="Nancy Leverling">
                            <span class="mate-info">
                              <h2>Nancy Leverling</h2>
                              <p>Sales Associate</p>
                            </span>
                        </div>
                        <div class="teamMate">
                            <img [src]="imageUrl('robert')" alt="Robert King">
                              <span class="mate-info">
                              <h2>Robert King</h2>
                              <p>Business System Analyst</p>
                            </span>
                        </div>
                    </div>
                </ng-template>
            </kendo-panelbar-item>
            <kendo-panelbar-item [title]="'Projects'">
                <kendo-panelbar-item [title]="'New Business Plan'"></kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Sales Forecasts'">
                    <kendo-panelbar-item [title]="'Q1 Forecast'"></kendo-panelbar-item>
                    <kendo-panelbar-item [title]="'Q2 Forecast'"></kendo-panelbar-item>
                    <kendo-panelbar-item [title]="'Q3 Forecast'"></kendo-panelbar-item>
                    <kendo-panelbar-item [title]="'Q4 Forecast'" [routerLink]='["/student"]'></kendo-panelbar-item>
                </kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Sales Reports'"></kendo-panelbar-item>
            </kendo-panelbar-item>
            <kendo-panelbar-item [title]="'Programs'">
                <kendo-panelbar-item [title]="'Monday'"></kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Tuesday'"></kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Wednesday'"></kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Thursday'"></kendo-panelbar-item>
                <kendo-panelbar-item [title]="'Friday'"></kendo-panelbar-item>
            </kendo-panelbar-item>
            <kendo-panelbar-item [title]="'Communication'" [disabled]="true"></kendo-panelbar-item>
        </kendo-panelbar>
    </div>
    `,
  styles: [`
        .teamMate:after {
            content: ".";
            display: block;
            height: 0;
            line-height: 0;
            clear: both;
            visibility: hidden;
        }
        .teamMate h2 {
            font-size: 1.3em;
            font-weight: normal;
            padding-top: 17px;
            margin: 0;
        }
        .teamMate p {
            margin: 0;
            font-size: .8em;
        }
        .teamMate img {
            display: inline-block;
            vertical-align: top;
            width: 50px;
            height: 50px;
            margin: 10px;
            border: 1px solid #ccc;
            border-radius: 50%;
        }
        .mate-info {
            display: inline-block;
            vertical-align: top;
        }
        .panelbar-wrapper {
            max-width: 80%;
            margin: 0 0;
        }
    `]
})
export class NavMenuComponent {
  public expandMode: number = PanelBarExpandMode.Single;
  private baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + '.jpg';
  }
}
