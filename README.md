CONTENTS

1. Overview
2. Business Problem
3. Suggested Approach

1) OVERVIEW

This project's intended to help non-coding testers get comfortable with Java code. 
It will explicitly NOT make anyone competent or proficient! It's simply a project
that can be used kata-style for getting less intimidated with Java and whatever
IDE you're using.

2) BUSINESS PROBLEM

Your stakeholder needs a way to calculate net/pre-tax wages for hourly workers.

There are a couple business rules to keep in mind as you work through things:

* Work period is one week.
* Hourly workers get paid straight time for work up to 40 hours per week
  * Straight time is their hourly rate times hours worked
* Workers are paid time-and-a-half for hours OVER 40
  * Straight time for the 40 hours, time and a half ONLY for hours
		*over* 40 hours.
		
The above business problem statements leave out some critical details you'd need to resolve in Three Amigos conversations. There may be business rules around maximum number of hours worked per week, or a rate ceiliing. What happens if you get negative hours or rates in? (ALL INPUT IS EVIL!)

Here's what a set of boundary-driven test data might look like:

```
Standard hours
| hours	|	rate	| 	expected	|
|	0		|	10		|	0			|
|	1		|	10		|	10			|
|	40		|	10		|	400			|

Overtime
| hours	|	rate	| 	expected	|
|	41		|	10		|	415			|
|	80		|	10		|	1000		|

Business Rule Limits
| hours	|	rate	| 	expected	|
|	81		|	10		|	ERROR		|
|	1		|	501		|	ERROR		|

Invalid inputs
| hours	|	rate	| 	expected	|
|	-1		|	10		|	ERROR		|
|	1		|	-1		|	ERROR		|
```

3) SUGGESTED APPROACH

* Cover basics of Java
  * Text file -> compiler -> intermediate file -> JIT
  * Run app in JVM
  * Class -> object/instance
  * Can write Java in Notepad. That sucks. Use an IDE.
  
* IDE basics
  * Manages all the goo
  * Huge productivity booster
  * Many shortcuts. Learn top ten you'll use.
    * Avoid using mouse. Learn the keyboard!
  * Eclipse + Maven/Gradle for build and dependency management
    * Dependencies are external libraries/tools so we don't have to write them!
    
