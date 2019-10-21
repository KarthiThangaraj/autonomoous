import { Component, OnInit } from '@angular/core';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  sampleData = [
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'out' },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch' },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'low'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'out'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'low'  },
    { name: 'Heinz Ketchup 14oz Squeeze', brand: 'Condiments Gravity', aisle: 'ALSLE 3B', segment: 'SEGMENT 2', shelf: 'SHELF 2', color: 'mismatch'  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
