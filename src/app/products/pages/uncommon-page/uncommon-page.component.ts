import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Daniela';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = 'Martín';
    this.gender = 'male';
  }

  // i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Jose', 'Melissa']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  };
  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue
  public person = {
    name: 'Daniela',
    age: 35,
    address: 'Santander'
  }

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa')
    }, 3500);
  })
}
