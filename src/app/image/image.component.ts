import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface DocumentCard {
  name: string;
  size: string;
  type: 'jpg' | 'mp4' | 'mkv' | 'pdf';
  date?: Date;
  imageUrl?: string; // Add imageUrl property
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  cards: DocumentCard[] = Array.from({ length: 14 }, (_, index) => ({
    name: `Image ${index + 1}.jpg`,
    size: 'Unknown', // You may update this based on the actual image size
    date: this.getRandomDate(),
    type: 'jpg',
    imageUrl: '', // Will be populated in fetchRandomImages
  }));
  hoveredCard: DocumentCard | null = null;

  ngOnInit(): void {
    // Fetch random images from Unsplash API
    this.fetchRandomImages();
  }

  async fetchRandomImages(): Promise<void> {
    const unsplashAccessKey = 'hfrUzmf7Tt2poDVun2V2x7OfFsW8zCKg7JVHAfsEelM'; // Replace with your Unsplash API access key
    const apiUrl = `https://api.unsplash.com/photos/random?count=${this.cards.length}&client_id=${unsplashAccessKey}`;

    try {
      const response = await axios.get(apiUrl);
      const randomImages = response.data;

      // Update card names, URLs, and sizes with Unsplash data
      randomImages.forEach((image: any, index: number) => {
        this.cards[index].imageUrl = image.urls.regular; // Use 'regular' for a medium-sized image, or adjust as needed
      });
    } catch (error) {
      console.error('Error fetching random images from Unsplash:', error);
    }
  }

  getRandomDate(): Date {
    const start = new Date(2022, 0, 1); // Start date
    const end = new Date(); // Current date
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
  }

  onCardHover(card: DocumentCard): void {
    this.hoveredCard = card;
  }

  onCardLeave(): void {
    this.hoveredCard = null;
  }

  deleteCard(card: DocumentCard): void {
    const index = this.cards.indexOf(card);
    if (index !== -1) {
      this.cards.splice(index, 1);
      this.hoveredCard = null; // Reset hovered card after deletion
    }
  }
}
