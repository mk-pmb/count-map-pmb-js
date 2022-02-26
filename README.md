
<!--#echo json="package.json" key="name" underline="=" -->
count-map-pmb
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Extended version of the `count-map` module, providing range filter and easy
conversions.
<!--/#echo -->



API
---

This module exports one constructor:

### CountMapPmb(...args)

Which works the same as the constructor exported from the original
[`count-map` module](https://github.com/czycha/count-map),
except the objects created have some additional methods:



### .toDict([opt])

Return the entries as a plain object.
Useful for converting the counts to JSON.

`opt` is an optional options object that supports these optional keys:

* `empty`: If set to something other than `undefined`, and the result would
  be empty, instead return this value.



### .filter(decide)

Make a partial copy with only entries for which function `decide`
invoked with arguments `(val, key, map)` returns a true-y value.



### .rangeFilter(min, max)

Return a CountMapPmb with only the entries whose count is at least `min`
and at most `max`.

* If `min` is `null` or `undefined`, it is treated as negative infinity.
* If `max` is `null` or `undefined`, it is treated as positive infinity.

* Example: `.rangeFilter(2)` implies `max = undefined` and thus will report
  all entries that appeared at least twice.



### .rangesFilter(ranges)

Multiple acceptable `ranges` can be given as an array of `[min, max]` pairs.
Reports entries that match at least one range.

* Example: `.rangesFilter([ [null, 1], [3, null] ])` will report
  all entries except those who appeared exactly twice.









Usage
-----

see [test/usage.js](test/usage.js):


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
