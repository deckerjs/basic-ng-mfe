import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'basic-ng-mfe-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterContentInit {
  
  @Input() topRowHeight = 50;
  public midRowHeight: number = window.innerHeight - 150;
  @Input() bottomRowHeight = 40;
  @Input() sideNavWidth = 200;
  @Input() mainContentScroll = "auto"

  constructor() {
    // console.log(window.screen.availHeight);
    // console.log(window.innerHeight);
  }

  ngOnInit() {
    console.log("main-layout init")
  }
  
  ngAfterContentInit(): void {
    this.resetSizeValues();
  }
  
  onResize(event: any) {
    // console.log("resize event: " + event.target.innerWidth);
    // console.log("window screen avail height: " + window.screen.availHeight);
    this.resetSizeValues();
  }

  private resetSizeValues() {
    const usedHeight = this.topRowHeight + this.bottomRowHeight;
    const newMidHeight = window.innerHeight - usedHeight;
    this.midRowHeight = newMidHeight-24;
    // console.log("new mid height: " + newMidHeight);
  }

  public closeSideNav(){
    if (this.sideNavWidth===0){
      this.sideNavWidth = 200;
      console.log("open");
    }
    else
    {
      this.sideNavWidth = 0;
      console.log("close");
    }
  }
}
