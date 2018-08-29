import { Component, Injector, OnInit } from '@angular/core';
import { DefaultViewer } from '../../viewers/DefaultViewer.class';


@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent extends DefaultViewer{


}
