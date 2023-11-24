import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-lights-chart',
  template: `<canvas id="myChart-5" height="50" width="" ></canvas>`,
  styleUrls: ['./lights-chart.component.css']
})
export class LightsChartComponent  implements OnInit, AfterViewInit {
  chart: any;

  ngOnInit(): void {
    const labels = [' ', ' ', ' ', ' ', ' ',' ']; // Your custom labels
    const data = {
      labels: labels,
      datasets: [{
        data: [ 4, 6,7, 5, 3, 6], // Your custom data values
        fill: true, // Fill the area under the line
        borderColor: 'rgb(101,80,128)', // Set line color to red
        backgroundColor: 'rgb(189,179,200)', // Set fill color to light red with opacity
        tension: 0,
        pointRadius: 0 // Set the point radius to 0 to hide data points
      }]
    };

    this.createChart(labels, data);
  }

  ngAfterViewInit(): void {
    this.chart.update();
  }

  createChart(labels: string[], data: any): void {
    const ctx5: any = document.getElementById('myChart-5'); // Use getElementById to target the specific canvas
    if (ctx5) {
      this.chart = new Chart(ctx5, {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: true // Disable tooltip
            }
          },
          scales: {
            x: {
              display: false,
              type: 'category',
              labels: labels,
              grid: {
                display: false // Remove horizontal grid lines
              }
            },
            y: {
              beginAtZero:true,
              display: false, // Hide Y-axis labels
              grid: {
                display: false // Remove vertical grid lines
              }
            }
          }
        }
      });
    }
  }
}
