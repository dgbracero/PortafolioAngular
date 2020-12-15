import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public email: string;
  public telf: string;

  constructor(
    
  ) {
    this.title = "Contacto";
    this.telf = "0985816922";
    this.email = "diegobracero@hotmail.com"; 
  }

  ngOnInit(): void {
  }

}
