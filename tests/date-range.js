'use strict';

var should = require('should');
var dateRange = require('../lib/date-range');

var startValue = new Date(2014, 6, 1, 0, 0, 0);
var endValue = new Date(2014, 7, 1, 0, 0, 0);
var incrementDurationValue = 2 * 60 * 60 * 1000;

describe('Date range', function () {
  var dateRangeOpts = {};
  describe('given no options', function () {
    it('should fail', function () {
      var range = dateRange();
      Array.isArray(range).should.equal(false);
    });
  });
  describe('given a start time of ' + startValue.toISOString(), function () {
    dateRangeOpts.start = startValue;
    describe('and an end time of ' + endValue.toISOString(), function () {
      dateRangeOpts.end = endValue;
      describe('and an increment of ' + incrementDurationValue, function () {
        dateRangeOpts.incrementDuration = incrementDurationValue;
        it('should return several dates', function () {
          var range = dateRange(dateRangeOpts);
          range[0].should.be.an.instanceof(Date);
          range[3].should.be.an.instanceof(Date);
          range[9].should.be.an.instanceof(Date);
        });
      });
    });
  });
});
