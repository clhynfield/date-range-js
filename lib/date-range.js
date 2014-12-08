'use strict';

function dateRange(options) {
  if (options === undefined) {
    return new Error('Options missing');
  }

  var start = options.start;
  var end = options.end;
  var incrementDuration = options.incrementDuration;
  var range = [];

  if (!(start instanceof Date && end instanceof Date)) {
    return new Error('Start and end options missing');
  }

  if (!incrementDuration) {
    return new Error('Increment duration option missing');
  }

  for (var d = start; d <= end; d = new Date(d.getTime() + incrementDuration)) {
    range.push(d);
  }

  return range;
}

module.exports = dateRange;
