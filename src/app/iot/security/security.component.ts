import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  rooms = [
    { name: 'Kitchen', status: 'ON', color: 'text-green-500' },
    { name: 'Dining Room', status: 'OFF', color: 'text-gray-500' },
    { name: 'Living Room', status: 'OFF', color: 'text-gray-500' },
    { name: 'Bed Room', status: 'Not Connected', color: 'text-red-500' },
    { name: 'Bath Room', status: 'OFF', color: 'text-gray-500' },
    { name: 'Store Room', status: 'ON', color: 'text-green-500' }
  ];
}
