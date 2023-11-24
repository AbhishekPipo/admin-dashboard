import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homeSection/navbar/navbar.component';
import { StatsComponent } from './homeSection/stats/stats.component';
import { SidebarComponent } from './homeSection/sidebar/sidebar.component';
import { DashboardHeadComponent } from './homeSection/dashboard-head/dashboard-head.component';

import { QuillModule } from 'ngx-quill';

import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './homeSection/chart/chart.component';
import { Chart1Component } from './homeSection/chart1/chart1.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { ChartsStatsComponent } from './homeSection/charts-stats/charts-stats.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './homeSection/home.module';
import { FeedsComponent } from './homeSection/feeds/feeds.component';
import { TimelineComponent } from './homeSection/timeline/timeline.component';
import { InboxComponent } from './appSection/inbox/inbox.component';
import { IotComponent } from './iot/iot.component';
import { EnergyuseChartComponent } from './homeSection/energyuse-chart/energyuse-chart.component';
import { LightsChartComponent } from './homeSection/lights-chart/lights-chart.component';
import { TempComponent } from './iot/temp/temp.component';
import { SecurityComponent } from './iot/security/security.component';
import { VisitorsComponent } from './homeSection/visitors/visitors.component';
import { VisitsComponent } from './visits/visits.component';
// import { CalanderComponent } from './calander/calander.component';
// import { CalendarComponent } from './calander/calander.component';
// import { CalendarComponent } from './calendar/calendar.component';
// import { CalanderComponent } from './calander/calander.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // include FullCalendarModule!
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ChatappComponent } from './appSection/inbox/chatapp/chatapp.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { Calender123Component } from './calender123/calender123.component';
import { DocsComponent } from './file_manger/docs/docs.component';
import { MediaComponent } from './file_manger/media/media.component';
import { ImageComponent } from './image/image.component';



import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatsComponent,
    SidebarComponent,
    DashboardHeadComponent,
    ChartComponent,
    Chart1Component,
    ChartsStatsComponent,
    FeedsComponent,
    TimelineComponent,
    InboxComponent,
    IotComponent,
    EnergyuseChartComponent,
    LightsChartComponent,
    TempComponent,
    SecurityComponent,
    VisitorsComponent,
    VisitsComponent,
    ChatappComponent,
    ContactCardComponent,
    Calender123Component,
    DocsComponent,
    MediaComponent,
    ImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule, // include FullCalendarModule
   
    QuillModule.forRoot(),

    CKEditorModule,
    
    NgChartsModule,
    NgxApexchartsModule,
    FormsModule,
    // HomeModule

    
    
  
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
