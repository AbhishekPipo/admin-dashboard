import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  public chartData: any[] = [
    { data: [10, 20, 15, 25, 30], backgroundColor: 'rgba(101, 116, 205, 0.1)', borderColor: 'rgba(101, 116, 205, 0.8)', borderWidth: 2 },
    // Add more datasets if needed
  ];

  public chartLabels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

}
