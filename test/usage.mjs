// -*- coding: utf-8, tab-width: 2 -*-

import eq from 'equal-pmb';

import CountMapPmb from '../cmx.mjs';
// externally: import CountMapPmb from 'count-map-pmb';

const sandwich = new CountMapPmb();
sandwich.add('bun');
sandwich.add('tomato');
sandwich.add('cheese');
sandwich.add('tomato');
sandwich.add('ham');
sandwich.add('salad');
sandwich.add('cheese');
sandwich.add('tomato');

eq(sandwich.entries(), [
  ['bun', 1],
  ['tomato', 3],
  ['cheese', 2],
  ['ham', 1],
  ['salad', 1],
]);


eq(sandwich.toDict(), {
  bun: 1,
  cheese: 2,
  ham: 1,
  salad: 1,
  tomato: 3,
});


const singletons = sandwich.rangeFilter(null, 1);
eq(singletons.toDict(), { bun: 1, ham: 1, salad: 1 });

const multis = sandwich.rangeFilter(2);
eq(multis.toDict(), { cheese: 2, tomato: 3 });

const twice = sandwich.rangeFilter(2, 2);
eq(twice.toDict(), { cheese: 2 });

const rangesNotTwice = [
  [null, 1],
  [3, null],
];

eq(sandwich.rangesFilter(rangesNotTwice).toDict(),
  { bun: 1, ham: 1, salad: 1, tomato: 3 });

eq((new CountMapPmb()).toDict(), {});
eq((new CountMapPmb()).toDict({ empty: false }), false);













console.info('+OK usage tests passed');
