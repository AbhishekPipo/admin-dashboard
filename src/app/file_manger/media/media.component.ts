import { Component } from '@angular/core';



interface DocumentCard {
  name: string;
  size: string;
  type: 'mpgv4' | 'mp4' | 'mkv'; // Add 'pdf' type
  date?: Date; // Make date property optional
}
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  cards: DocumentCard[] = [
    { name: 'hellonew.mkv', size: '30 KB', date: this.getRandomDate(), type: 'mkv' },
    { name: 'Zee le Zara song.mgpv4', size: '30 KB', date: this.getRandomDate(), type: 'mpgv4' },


    { name: 'hellonew.mkv', size: '30 KB', date: this.getRandomDate(), type: 'mkv' },
    { name: 'hellonew.mkv', size: '30 KB', date: this.getRandomDate(), type: 'mkv' },


    { name: 'Zee le Zara song.mgpv4', size: '30 KB', date: this.getRandomDate(), type: 'mpgv4' },
    { name: 'Zee le Zara song.mgpv4', size: '30 KB', date: this.getRandomDate(), type: 'mpgv4' },


    { name: 'hellonew.mkv', size: '30 KB', date: this.getRandomDate(), type: 'mkv' },
    { name: 'Zee le Zara song.mgpv4', size: '30 KB', date: this.getRandomDate(), type: 'mpgv4' },


   
  ];

  hoveredCard: DocumentCard | null = null;

  getSvgClass(type: 'mkv' | 'mpgv4' | 'mp4', fontSize: string = '40px'): string {
    switch (type) {
      case 'mkv':
        return 'fa fa-image';
      case 'mpgv4':
        return 'fa fa-youtube-square';
      case 'mp4':
        return 'fa fa-file text-success';
      default:
        return '';
    }
  }



  getRandomDate(): Date {
    const start = new Date(2022, 0, 1); // Start date
    const end = new Date(); // Current date
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
  }

  // Handle card hover event
  onCardHover(card: DocumentCard): void {
    this.hoveredCard = card;
  }

  // Handle card mouse leave event
  onCardLeave(): void {
    this.hoveredCard = null;
  }

  // Handle card deletion
  deleteCard(card: DocumentCard): void {
    const index = this.cards.indexOf(card);
    if (index !== -1) {
      this.cards.splice(index, 1);
      this.hoveredCard = null; // Reset hovered card after deletion
    }
  }

}
