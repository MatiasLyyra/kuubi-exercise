import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent implements AfterViewInit {

  @Input()
  fileName: string;

  @Input()
  selected: boolean;

  @Output()
  selectEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.selected = false;
  }

  ngAfterViewInit() {
    if (this.selected) {
      //this.selectEvent.emit(this.fileName);
    }
  }

  private select() {
    if (!this.selected) {
      this.selected = true;
      this.selectEvent.emit(this.fileName);
    }
  }

  public unselect() {
    this.selected = false;
  }

}
