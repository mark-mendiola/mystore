import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() options: any;
  @Output() callbackEmitter = new EventEmitter<any>();

  ngOnInit() {

    if (this.options) {
      this.options.forEach((option: any, index: number) => {
        let classes = '';

        if (option.isPrimary) {
          classes += ' btn-primary';
        }

        if (option.icon) {
          classes += ' has-icon';

          if (option.iconLocation) {
            classes += ' icon-' + option.iconLocation;
          }
        }

        if (option.classes) {
          classes += ' ' + option.classes;
        }

        this.options[index].classes = classes;
      });
    }
  }

  triggerCallback(event: any, callbacks: any) {
    this.callbackEmitter.emit(callbacks[event.type]);
  }
}
