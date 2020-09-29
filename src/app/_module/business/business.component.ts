import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

        title = 'Load script GFG';
         constructor() {
           //this.loadScripts();
         }
         loadScripts() {
           const dynamicScripts = [
           ];
           for (let i = 0; i < dynamicScripts.length; i++) {
             const node = document.createElement('script');
             node.src = dynamicScripts[i];
             node.type = 'text/javascript';
             node.async = false;
             document.getElementsByTagName('head')[0].appendChild(node);
           }
        }

  ngOnInit(): void {
  }

}
