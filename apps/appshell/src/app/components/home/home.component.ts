import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavToolbarService } from '@basic-ng-mfe/shared/services';
import { MicroFrontEndDefinition } from '../../models/micro-front-end-definition';
import { LookupService } from '../../services/lookup.service';
import { buildRoutes } from '../../services/route-utilities';

@Component({
  selector: 'basic-ng-mfe-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  microfrontends: MicroFrontEndDefinition[] = [];
  public topRowHeight = 100;

  public sharedItems: Array<string> = [];

  constructor(
    private router: Router,
    private lookupService: LookupService,
    private sharedService: NavToolbarService
  ) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);

    this.sharedService.itemsChanged.subscribe(() => {
      this.sharedItems = this.sharedService.sharedItems;      
    });

  }
}
