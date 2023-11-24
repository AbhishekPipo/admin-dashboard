

import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  charts: any[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initializeCharts();
    this.updateChartDataPeriodically();
  }

  initializeCharts(): void {
    const chartData = [
            {
              labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
              data: [65, 59, 80, 81, 56, 55, 40],
              id: 'myChart'
            },
            {
              labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
              data: [30, 40, 55, 70, 90, 85, 75],
              id: 'myChart-1'
            },
            {
              labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
              data: [10, 20, 30, 40, 50, 60, 70],
              id: 'myChart-2'
            },
            {
              labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
              data: [80, 70, 60, 50, 40, 30, 20],
              id: 'myChart-3'
            }
          ];

   
    chartData.forEach((data) => {
      const ctx: any = document.getElementById(data.id);
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'My Custom Dataset',
              data: data.data,
              fill: true,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              tension: 0.1
            }]
          },
          options: {
            plugins: {
              title: {
                display: false
              },
              legend: {
                display: false
              },
              tooltip: {
                enabled: true // Enable the tooltip
              }
            },
            scales: {
              x: {
                display: false
              },
              y: {
                display: false
              }
            }
          }
          
        });
        this.charts.push(chart);
      }
    });
  }


  updateChartDataPeriodically(): void {
    interval(2000) // Emits a value every 2 seconds
      .pipe(
        takeUntil(this.destroy$) // Unsubscribe when component is destroyed
      )
      .subscribe(() => {
        this.charts.forEach((chart, index) => {
          // Generate new random data for demonstration purposes
          const newData = this.generateRandomData();
          chart.data.datasets[0].data = newData;
          chart.update();
        });
      });
  }
  generateRandomData(): number[] {
    // Generate an array of random numbers (for demonstration purposes)
    const data: number[] = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.floor(Math.random() * 100) + 1); // Random numbers between 1 and 100
    }
    return data;
  }
  ngAfterViewInit(): void {
    this.charts.forEach(chart => chart.update());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
