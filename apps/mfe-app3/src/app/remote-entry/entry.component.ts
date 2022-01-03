import { Component } from '@angular/core';

@Component({
  selector: 'basic-ng-mfe-mfe-app3-entry',
  template: `<div class="remote-entry">
    <h2>mfe-app3's Remote Entry Component</h2>    
  </div>
  <basic-ng-mfe-main-content></basic-ng-mfe-main-content>`,
  styles: [
    `
      .remote-entry {
        background-color: #143075;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
