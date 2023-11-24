export class Utils {
    static months(arg0: { count: number; }) {
      throw new Error('Method not implemented.');
    }
    static numbers({ count, min, max }: { count: number; min: number; max: number }): number[] {
      return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));
    }
  
    static rand(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    static CHART_COLORS = {
      Red: '#FF5733',
      Orange: '#FFC300',
      Yellow: '#FFD700',
      Green: '#4CAF50',
      Blue: '#3498DB',
    };
  }
  