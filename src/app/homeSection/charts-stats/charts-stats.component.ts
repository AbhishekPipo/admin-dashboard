import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataset } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-charts-stats',
  templateUrl: './charts-stats.component.html',
  styleUrls: ['./charts-stats.component.css']
})
export class ChartsStatsComponent implements OnInit {

  ngOnInit() {
    const DATA_COUNT = 7;
    const labels = Array.from({ length: DATA_COUNT }, (_, i) => `Label ${i + 1}`);
    const data: ChartDataset[] = [
      {
        label: 'Dataset 1',
        data: labels.map(() => this.rand(-100, 100)),
        backgroundColor: 'red',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => this.rand(-100, 100)),
        backgroundColor: 'blue',
      },
    ];

    const config: ChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Floating Bar Chart',
        },
        datalabels: {
          display: false,
        },
      },
    };

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
  }

  private rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
