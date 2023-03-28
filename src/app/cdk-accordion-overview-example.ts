import {Component} from '@angular/core';

/**
 * @title Accordion overview
 */
@Component({
  selector: 'cdk-accordion-overview-example',
  templateUrl: 'cdk-accordion-overview-example.html',
  styleUrls: ['cdk-accordion-overview-example.scss'],
})
export class CdkAccordionOverviewExample {
  

  items = [
    {
      icon: 'keyboard_arrow_down',
      label: 'Item 1'
    },
    {
      icon: 'keyboard_arrow_left',
      label: 'Item 2'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Item 3'
    },
    {
      icon: 'keyboard_arrow_up',
      label: 'Item 4'
    },
    {
      icon: 'keyboard_backspace',
      label: 'Item 5'
    }
  ]
  expandedIndex = 0;
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */