import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { AvatarImageComponent } from './avatar-image.component';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.css']
})
export class AvatarSelectorComponent implements OnInit {
  private currentSelection = 'avatar-01.png';

  @ViewChildren(AvatarImageComponent)
  images: QueryList<AvatarImageComponent>;

  constructor() { }

  ngOnInit() {
  }

  private newSelection(fileName: string) {
    this.currentSelection = fileName;
    this.images
    .filter(i => i.fileName !== fileName)
    .forEach(i => {
      i.unselect();
    });
  }

}
