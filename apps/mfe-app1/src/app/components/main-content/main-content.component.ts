import { Component } from '@angular/core';
import { NavToolbarService } from '@basic-ng-mfe/shared/services';

@Component({
  selector: 'basic-ng-mfe-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  constructor(private sharedService: NavToolbarService) {    
  }

  public addSharedItem(item: string): void {
    this.sharedService.addSharedItem(item);
    console.log('add shared item from mfe1', item)
  }

  public clearSharedItems(): void {
    this.sharedService.clearItems();
  }

}
