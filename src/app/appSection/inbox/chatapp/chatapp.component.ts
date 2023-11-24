import { Component } from '@angular/core';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent {

  

  profiles = [
    { name: 'Vincent Porter', lastOnline: 'left 7 min ago', image: '/assets/user1.jpg' },
    { name: 'Alice Johnson', lastOnline: 'left 12 min ago', image: '/assets/user.png' },
    { name: 'Bob Smith', lastOnline: 'left 20 min ago', image: '/assets/user3.jpg' },
    { name: 'Eva Williams', lastOnline: 'left 30 min ago', image: '/assets/user4.jpg' },
    { name: 'Charlie Davis', lastOnline: 'left 45 min ago', image: '/assets/user5.jpg' },
    { name: 'Sophia Taylor', lastOnline: 'left 1 hour ago', image: '/assets/user6.jpg' }
    // Add more profiles if needed
];
}
