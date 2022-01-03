import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicroFrontEndDefinition } from './models/micro-front-end-definition';
import { LookupService } from './services/lookup.service';
import { buildRoutes } from './services/route-utilities';

@Component({
  selector: 'basic-ng-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{}

