// -*- coding: utf-8, tab-width: 2 -*-

import CountMap from 'count-map';


const PT = new CountMap;

const CF = function CountMapPmb(...args) {
  if (!(this instanceof CF)) { return new CF(...args); }
  CountMap.apply(this, args);
};






export default CF;
