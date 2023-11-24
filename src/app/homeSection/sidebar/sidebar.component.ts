import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isDropdownVisible1 = false;
  isDropdownVisible2 = false;
  isDropdownVisible3 = false;


  // is btn disabled
  isBtnClicked = false;

  onBtnClicked(){
    
  }
  toggleDropdown(dropdownId: string) {
    this.isBtnClicked = true;
    if (dropdownId === 'dropdown1') {
      this.isDropdownVisible1 = !this.isDropdownVisible1;
      this.isDropdownVisible2 = false; // Close the other dropdown
    } else if (dropdownId === 'dropdown2') {
      this.isDropdownVisible2 = !this.isDropdownVisible2;
      this.isDropdownVisible1 = false; // Close the other dropdown
    } else if (dropdownId === 'dropdown3') {
      this.isDropdownVisible3 = !this.isDropdownVisible3;
      this.isDropdownVisible1 = false;
      this.isDropdownVisible2 = false;

       // Close the other dropdown
    }
  }

  constructor(private router: Router){}
  selectedCity: string = 'London'; // Default selected city

  selectCity(city: string): void {
    this.selectedCity = city;
  }


  gotoInbox(event: Event){
    event.preventDefault(); // Add this line

    this.router.navigate(['inbox'])
  }
  gotoCal(event: Event){
    this.router.navigate(['cal'])
  }
  gotoChat(){
    this.router.navigate(['chat'])
  }
  gotoCont(){
    this.router.navigate(['contact'])
  }
  gotoDocs(event: Event){
    event.preventDefault(); // Add this line

    this.router.navigate(['docs'])
  }
  gotoMedia(event: Event){
    event.preventDefault(); // Add this line

    this.router.navigate(['media'])
  }
  gotoImages(){
    this.router.navigate(['images'])
  }
}

