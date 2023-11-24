import { Component } from '@angular/core';
// import { CircleChartComponent } from '../circle-chart/circle-chart.component';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component {
 public barChartOptions: any = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 10
          }
        }
      }
    }
  };

  public barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [37500, 45000, 47500, 50000, 47500, 55000, 60000, 57500, 67500, 65000, 70000, 75000], label: 'Existing' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Upgrades' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'New' }
  ];

  constructor() {
    this.calculateUpgradeAndNewData();
  }

  private calculateUpgradeAndNewData(): void {
    for (let i = 1; i < this.barChartData[0].data.length; i++) {
      this.barChartData[1].data[i] = this.barChartData[0].data[i] - this.barChartData[0].data[i - 1];
      this.barChartData[2].data[i] = this.barChartData[0].data[i - 1] - this.barChartData[0].data[i - 2];
    }
  }
}
