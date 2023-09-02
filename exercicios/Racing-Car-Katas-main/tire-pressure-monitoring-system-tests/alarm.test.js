/* globals describe, it */
var jest = require("jest");
jest.should();

var Alarm = require("../tire-pressure-monitoring-system/alarm.js");

describe("Tyre Pressure Monitoring System", function () {
  describe("Alarm", function () {
    it("foo", function () {
      var alarm = new Alarm();
      alarm.alarmOn().should.equal(false);
    });
  });
});
