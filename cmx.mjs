// -*- coding: utf-8, tab-width: 2 -*-

import CountMap from 'count-map';

const PT = new CountMap();
const protoClone = PT.clone;

const negInf = Number.NEGATIVE_INFINITY;
const posInf = Number.POSITIVE_INFINITY;

function isNullUndef(x) { return (x === null) || (x === undefined); }
function ifNullUndef(x, u) { return (isNullUndef(x) ? u : x); }

function fixRangeLimits(orig) {
  return [ifNullUndef(orig[0], negInf), ifNullUndef(orig[1], posInf)];
}


const CF = function CountMapPmb(...args) {
  if (!(this instanceof CF)) { return new CF(...args); }
  CountMap.apply(this, args);
};
CF.prototype = PT;

Object.assign(CF, {

  makeRangeDecider: (function compile() {
    const mrd = function makeRangeDecider(origMin, origMax) {
      const [min, max] = fixRangeLimits([origMin, origMax]);
      return function r(v) { return (min <= v) && (v <= max); };
    };
    return mrd;
  }()),


});


Object.assign(PT, {

  clone() { return Object.assign(new CF(), protoClone.call(this)); },

  toDict(opt) {
    const dict = Object.fromEntries(this.entries());
    if (!opt) { return dict; }
    if (opt.empty !== undefined) {
      if (!Object.keys(dict).length) { return opt.empty; }
    }
    return dict;
  },

  filter(decide) {
    const copy = this.clone();
    copy.keys().forEach(function chk(key) {
      if (!decide(copy.get(key), key, copy)) { copy.delete(key); }
    });
    return copy;
  },

  rangeFilter(min, max) { return this.filter(CF.makeRangeDecider(min, max)); },

  rangesFilter(origRanges) {
    const ranges = origRanges.map(fixRangeLimits);
    return this.filter(v => ranges.some(r => ((r[0] <= v) && (v <= r[1]))));
  },






});


export default CF;
