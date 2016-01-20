Feature: Compute standard and overtime wages for hourly (not salary) workers

  Scenario Outline: Standard time--between zero and 40 hours a week.
    Given hourly rate is 10
    When <hours> hours are worked
    Then pay should be <wages>

    Examples: 
      | hours | wages |
      | 0     | 0     |
      | 1     | 10    |
      | 40    | 400   |

  Scenario Outline: Overtime -- over 40 hours. Business rule controls max
    per pay period. Tested in seprate scenario.

    Given hourly rate is 10
    When <hours> hours are worked
    Then pay should be <wages>

    Examples: 
      | hours | wages |
      | 41    | 415   |
      | 80    | 1000  |

  Scenario: Can't work > 80 hours,
    Given hourly rate is 10
    When 81 hours are worked
    Then an error should happen
    
  Scenario: Can't have rate > $500
  	Given hourly rate is 501
  	When 40 hours are worked
  	Then an error should happen
  	
  Scenario: Can't work negative hours
  	Given hourly rate is 10
  	When -1 hours are worked
  	Then an error should happen
  	
  Scenario: Can't have a negative rate
  	Given hourly rate is -1
  	When 1 hours are worked
  	Then an error should happen
