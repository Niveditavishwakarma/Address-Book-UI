import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // ✅ Import HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPersons();
  }
  showForm = false;
  openForm(){
    this.showForm = true;
  
  }
  closeForm(){
    this.showForm = false;
  }
  getPersons() {
    this.persons = [
      {
        id: 1,
        name: 'Varaza Mishra',
        address: 'Marve Road, Next To Maniratna, Malad (west)',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400064',
        phone: '02228017752'
      },
      {
        id: 2,
        name: 'Trishna Bhalla',
        address: '77 ,rd Flr., Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400003',
        phone: '02223420607'
      },
      {
        id: 3,
        name: 'Anish Kaskar',
        address: '473 , Sector , Vardhaman Mkt, Sector , Vashi, Navi Mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400705',
        phone: '02227893390'
      },
      {
        id: 2,
        name: 'Trishna Bhalla',
        address: '77 ,rd Flr., Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400003',
        phone: '02223420607'
      },
    ];
  }
  editPerson(person: any) {
    console.log('Editing:', person);
    // Implement edit functionality here
  }
  addPerson(name: string, phone: string, address: string, city: string, state: string, zipCode: string) {
    if (name && phone && address && city && state && zipCode) {
      const newPerson = {
        id: this.persons.length + 1,
        name,
        phone,
        address,
        city,
        state,
        zipCode
      };
      this.persons.push(newPerson);
      this.closeForm();
    }
  }

  deletePerson(id: number) {
    this.persons = this.persons.filter(person => person.id !== id);
  }
  
  
}