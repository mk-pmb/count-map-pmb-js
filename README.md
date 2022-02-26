
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

### CountMapPmb(..args)

Which works the same as the constructor exported from the original
[`count-map` module](https://github.com/czycha/count-map),
except the objects created have some additional methods:


### .rangeFilter(min, max) | .rangeFilter(ranges)

Return a CountMapPmb with only the entries whose count is at least `min`
and at most `max`. If one or both limit is `null` or `undefined`,
it is ignored.

* Example: `.rangeFilter(2)` implies `max = undefined` and thus will report
  all entries that appeared at least twice.

Multiple acceptable `ranges` can be given as an array of `[min, max]` pairs.

* Example: `.rangeFilter([ [null, 1], [3, null] ])` will report
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
