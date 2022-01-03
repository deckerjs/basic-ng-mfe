import { Component, OnInit } from '@angular/core';
import { MicroFrontEndDefinition } from '../../models/micro-front-end-definition';
import { LookupService } from '../../services/lookup.service';

@Component({
  selector: 'basic-ng-mfe-default-content',
  templateUrl: './default-content.component.html',
  styleUrls: ['./default-content.component.scss'],
})
export class DefaultContentComponent implements OnInit {
  microfrontends: MicroFrontEndDefinition[] = [];

  constructor(private lookupService: LookupService) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
  }
}
