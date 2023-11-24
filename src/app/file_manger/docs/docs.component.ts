import { Component } from '@angular/core';

interface DocumentCard {
  name: string;
  size: string;
  type: 'xl' | 'doc' | 'pdf'; // Add 'pdf' type
  date?: Date; // Make date property optional
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {
  cards: DocumentCard[] = [
    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },
    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },
    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },

    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },
    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },

    { name: 'Detailed.pdf', size: '40 KB', date: this.getRandomDate(), type: 'pdf' },
    { name: 'Detailed.pdf', size: '40 KB', date: this.getRandomDate(), type: 'pdf' },
    { name: 'Detailed.pdf', size: '40 KB', date: this.getRandomDate(), type: 'pdf' },
    { name: 'Detailed.pdf', size: '40 KB', date: this.getRandomDate(), type: 'pdf' },

    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },
    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },
    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },

    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },
    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },

    { name: 'abcd_report_2017.xl', size: '20 KB', date: this.getRandomDate(), type: 'xl' },

    { name: 'Document_2017.doc', size: '30 KB', date: this.getRandomDate(), type: 'doc' },
  ];

  hoveredCard: DocumentCard | null = null;

  getSvgClass(type: 'xl' | 'doc' | 'pdf', fontSize: string = '40px'): string {
    switch (type) {
      case 'xl':
        return 'fa fa-bar-chart text-warning';
      case 'doc':
        return 'fa fa-file text-info';
      case 'pdf':
        return 'fa fa-file text-success';
      default:
        return '';
    }
  }

  getStrokeColor(type: 'xl' | 'doc' | 'pdf'): string {
    switch (type) {
      case 'xl':
        return '#FFC107'; // Yellow for xl
      case 'doc':
        return '#17A2B8'; // Blue for doc
      case 'pdf':
        return '#28A745'; // Green for pdf
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
