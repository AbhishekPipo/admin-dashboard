import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visits',
  template:`<canvas id="myChart-8" height="50" width="" ></canvas>`
})
export class VisitsComponent  implements OnInit, AfterViewInit {
  chart: any;

  ngOnInit(): void {
    const labels = [' ', ' ', ' ', ' ', ' ',' ']; // Your custom labels
    const data = {
      labels: labels,
      datasets: [{
        data: [ 500, 275,476, 267, 190, 250, ], // Your custom data values
        fill: true, // Fill the area under the line
        borderColor: 'rgb(244,96,120)', // Set line color to red
        backgroundColor: 'rgba(0,0,0,0)', // Set fill color to light red with opacity
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
    const ctx8: any = document.getElementById('myChart-8'); // Use getElementById to target the specific canvas
    if (ctx8) {
      this.chart = new Chart(ctx8, {
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
