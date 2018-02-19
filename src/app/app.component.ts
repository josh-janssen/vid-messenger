import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('myname') input:ElementRef; 
  @ViewChild('video') video:ElementRef;
  
  @ViewChildren('div1,div2,div3') divs:QueryList<ElementRef>;
  
  ngAfterViewInit() {
    let _video=this.video.nativeElement;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
                            .then(stream => {
                              _video.src = window.URL.createObjectURL(stream);
                              _video.play();
                            })
    }

  }

}
