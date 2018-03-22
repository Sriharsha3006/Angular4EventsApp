import { Component } from '@angular/core'

@Component({
  template: `
    <h2>This page doesn't exist</h2>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Componet {
  
}
