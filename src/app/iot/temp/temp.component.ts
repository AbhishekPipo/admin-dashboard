import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-temp',
  // templateUrl: './temp.component.html',
  template: `<canvas id="myChart-6" height="50" width="" ></canvas>`,

  styleUrls: ['./temp.component.css']
})
export class TempComponent  implements OnInit, AfterViewInit {
  chart: any;

  ngOnInit(): void {
    const labels = [' ', ' ', ' ', ' ', ' ',' ']; // Your custom labels
    const data = {
      labels: labels,
      datasets: [{
        data: [ 10, 18,14, 15, 25, 20], // Your custom data values
        fill: true, // Fill the area under the line
        borderColor: 'rgb(105,186,207)', // Set line color to red
        backgroundColor: 'rgb(180,221,232)', // Set fill color to light red with opacity
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
    const ctx6: any = document.getElementById('myChart-6'); // Use getElementById to target the specific canvas
    if (ctx6) {
      this.chart = new Chart(ctx6, {
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
