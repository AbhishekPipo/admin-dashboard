import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  contacts = this.generateRandomContacts(7);

  private generateRandomContacts(count: number): any[] {
    const contacts = [];
    const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Williams', 'Charlie Davis', 'Eva Wilson', 'Mike Brown'];
    const cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston', 'Seattle', 'Miami'];

    for (let i = 0; i < count; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];

      contacts.push({
        name: randomName,
        address: `${Math.floor(Math.random() * 1000)} Random St`,
        city: `${randomCity}, ${Math.floor(Math.random() * 90000) + 10000}`,
        imageUrl: this.getRandomImage()
      });
    }

    return contacts;
  }
getRandomImage(): string {
    const width = 200; // Set the desired width of the image
    const height = 200; // Set the desired height of the image
    return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
  }

}
