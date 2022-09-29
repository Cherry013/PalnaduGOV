import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboraddComponent } from './dashboradd/dashboradd.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { GetvaluesService } from './getvalues.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsCComponent } from './charts-c/charts-c.component';
import { AccumulationAnnotationService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService, PieSeriesService } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    DashboraddComponent,
    SidebarComponent,
    TablesComponent,
    ChartsCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccumulationChartModule
  ],
  providers: [GetvaluesService,FormsModule, PieSeriesService, AccumulationLegendService, 
    AccumulationTooltipService, AccumulationAnnotationService, AccumulationDataLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
