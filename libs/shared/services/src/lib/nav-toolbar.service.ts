import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavToolbarService {
  public sharedItems: Array<string>;
  public itemsChanged = new EventEmitter();

  constructor() {
    console.log('**** NavToolbarService constructed ****');
    this.sharedItems = [];
  }

  public addSharedItem(item: string): void {
    this.sharedItems.push(item);
    this.itemsChanged.emit();
    console.log('svc sharedItems added: ',this.sharedItems)
  }

  public clearItems(): void {
    this.sharedItems = [];
    this.itemsChanged.emit();
  }
}
