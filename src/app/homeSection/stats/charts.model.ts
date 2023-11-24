export interface ChartScales {
    x?: {
      type?: string; // 'linear', 'logarithmic', 'time', 'category', etc.
      display?: boolean;
      scaleLabel?: {
        display?: boolean;
        labelString?: string;
      };
      ticks?: {
        display?: boolean;
        suggestedMin?: number;
        suggestedMax?: number;
      };
      gridLines?: {
        display?: boolean;
      };
    };
    y?: {
      type?: string; // 'linear', 'logarithmic', 'time', 'category', etc.
      display?: boolean;
      scaleLabel?: {
        display?: boolean;
        labelString?: string;
      };
      ticks?: {
        display?: boolean;
        suggestedMin?: number;
        suggestedMax?: number;
      };
      gridLines?: {
        display?: boolean;
      };
    };
  }
  