'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .factory('calendarTitle', function(moment, calendarConfig, calendarHelper) {

    function day(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.day);
    }

    function week(viewDate) {
      return calendarConfig.titleFormats.week
        .replace('{week}', moment(viewDate).isoWeek())
        .replace('{year}', moment(viewDate).startOf('week').format('YYYY'));
    }

    function month(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.month);
    }

    function year(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.year);
    }

    return {
      day: day,
      week: week,
      month: month,
      year: year
    };

  });
