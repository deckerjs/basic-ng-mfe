import { Component } from '@angular/core';

@Component({
  selector: 'basic-ng-mfe-mfe-app2-entry',
  template: `<div class="remote-entry">
    <h2>mfe-app2's Remote Entry Component</h2>    
    </div>
    <basic-ng-mfe-main-content></basic-ng-mfe-main-content>`,
  styles: [
    `
      .remote-entry {
        background-color: #143065;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
