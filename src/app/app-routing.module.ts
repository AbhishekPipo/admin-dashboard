import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './homeSection/stats/stats.component';
import { InboxComponent } from './appSection/inbox/inbox.component';
import { IotComponent } from './iot/iot.component';
import { ChatappComponent } from './appSection/inbox/chatapp/chatapp.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { Calender123Component } from './calender123/calender123.component';
import { DocsComponent } from './file_manger/docs/docs.component';
import { MediaComponent } from './file_manger/media/media.component';
import { ImageComponent } from './image/image.component';
// import { CalanderComponent } from './calander/calander.component';
// // import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path: '',redirectTo: 'stats',pathMatch: 'full'},
  {path: 'stats',component: StatsComponent},
  {path: 'inbox',component: InboxComponent},
  {path: 'iot',component: IotComponent},
  // {path: 'calender',component:CalanderComponent}
  {path: 'chat', component: ChatappComponent},
  {path: 'contact',component: ContactCardComponent},
  
  {path: 'cal', component: Calender123Component},
  {path: 'docs',component: DocsComponent},
  {path: 'media', component: MediaComponent},
  {path: 'images',component: ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

