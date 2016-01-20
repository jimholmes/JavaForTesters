$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputingWages.feature");
formatter.feature({
  "line": 1,
  "name": "Compute standard and overtime wages for hourly (not salary) workers",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Standard time--between zero and 40 hours a week.",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\u003chours\u003e hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "pay should be \u003cwages\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;",
  "rows": [
    {
      "cells": [
        "hours",
        "wages"
      ],
      "line": 9,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;1"
    },
    {
      "cells": [
        "0",
        "0"
      ],
      "line": 10,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;2"
    },
    {
      "cells": [
        "1",
        "10"
      ],
      "line": 11,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;3"
    },
    {
      "cells": [
        "40",
        "400"
      ],
      "line": 12,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 92057,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Standard time--between zero and 40 hours a week.",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "0 hours are worked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "pay should be 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 69490476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 53641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "HourlyWagesStepDef.pay_should_be(float)"
});
formatter.result({
  "duration": 100909,
  "status": "passed"
});
formatter.before({
  "duration": 23485,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Standard time--between zero and 40 hours a week.",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "1 hours are worked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "pay should be 10",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 83981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 52815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "HourlyWagesStepDef.pay_should_be(float)"
});
formatter.result({
  "duration": 59042,
  "status": "passed"
});
formatter.before({
  "duration": 36072,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Standard time--between zero and 40 hours a week.",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;standard-time--between-zero-and-40-hours-a-week.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "40 hours are worked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "pay should be 400",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 76566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 65978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "HourlyWagesStepDef.pay_should_be(float)"
});
formatter.result({
  "duration": 75838,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Overtime -- over 40 hours. Business rule controls max",
  "description": "per pay period. Tested in seprate scenario.",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\u003chours\u003e hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "pay should be \u003cwages\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;",
  "rows": [
    {
      "cells": [
        "hours",
        "wages"
      ],
      "line": 22,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;;1"
    },
    {
      "cells": [
        "41",
        "415"
      ],
      "line": 23,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;;2"
    },
    {
      "cells": [
        "80",
        "1000"
      ],
      "line": 24,
      "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29184,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Overtime -- over 40 hours. Business rule controls max",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "41 hours are worked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "pay should be 415",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 60111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 68705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "415",
      "offset": 14
    }
  ],
  "location": "HourlyWagesStepDef.pay_should_be(float)"
});
formatter.result({
  "duration": 79033,
  "status": "passed"
});
formatter.before({
  "duration": 30218,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Overtime -- over 40 hours. Business rule controls max",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;overtime----over-40-hours.-business-rule-controls-max;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "80 hours are worked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "pay should be 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 81402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 52302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 14
    }
  ],
  "location": "HourlyWagesStepDef.pay_should_be(float)"
});
formatter.result({
  "duration": 64243,
  "status": "passed"
});
formatter.before({
  "duration": 35924,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Can\u0027t work \u003e 80 hours,",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;can\u0027t-work-\u003e-80-hours,",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "81 hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "an error should happen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 62471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 48235,
  "status": "passed"
});
formatter.match({
  "location": "HourlyWagesStepDef.an_error_should_happen()"
});
formatter.result({
  "duration": 62384,
  "status": "passed"
});
formatter.before({
  "duration": 28093,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Can\u0027t have rate \u003e $500",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;can\u0027t-have-rate-\u003e-$500",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "hourly rate is 501",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "40 hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "an error should happen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "501",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 81960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "location": "HourlyWagesStepDef.an_error_should_happen()"
});
formatter.result({
  "duration": 65842,
  "status": "passed"
});
formatter.before({
  "duration": 41219,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Can\u0027t work negative hours",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;can\u0027t-work-negative-hours",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "hourly rate is 10",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "-1 hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "an error should happen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 67218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 56422,
  "status": "passed"
});
formatter.match({
  "location": "HourlyWagesStepDef.an_error_should_happen()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.before({
  "duration": 19700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Can\u0027t have a negative rate",
  "description": "",
  "id": "compute-standard-and-overtime-wages-for-hourly-(not-salary)-workers;can\u0027t-have-a-negative-rate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "hourly rate is -1",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "1 hours are worked",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "an error should happen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 15
    }
  ],
  "location": "HourlyWagesStepDef.hourly_rate_is(int)"
});
formatter.result({
  "duration": 62683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 0
    }
  ],
  "location": "HourlyWagesStepDef.are_worked(int)"
});
formatter.result({
  "duration": 50050,
  "status": "passed"
});
formatter.match({
  "location": "HourlyWagesStepDef.an_error_should_happen()"
});
formatter.result({
  "duration": 40250,
  "status": "passed"
});
});