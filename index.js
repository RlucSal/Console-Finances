var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

console.log ("Financial Analisis");
console.log ("-------------------");

//THE TOTAL NUMBER OF MONTH INCLUDED IN THE DATASET//

//finances is an array of arrays where each sub-array contains financial data for a specific month-year.

//finances.map(item => item[0]) is a map operation that iterates through each sub-array in the finances array and extracts the first element of each sub-array (index 0), which is the month-year string. This creates a new array that contains only the month-year values.

//new Set is used to create a JavaScript Set. A Set is a built-in data structure in JavaScript that only stores unique values. It ensures that there are no duplicate values in the set. In this case, it's used to eliminate duplicate month-year values from the array created in the previous step.

//So, the monthYearSet will contain a unique set of month-year strings from the finances array. This can be useful when you want to check for the presence of specific month-year values without duplicate.


var monthYearSet = new Set(finances.map(item => item[0]));

var totalMonths = monthYearSet.size;

console.log("Total months: " + totalMonths);



//THE NET TOTAL AMOUNT OF PROFIT/LOSSES OVER THE ENTIRE PERIOD

//var totalProfitLoss = 0;: This initializes a variable totalProfitLoss to 0. This variable will be used to keep track of the total profit or loss.

//The for loop iterates through the finances array:

//for (var i = 0; i < finances.length; i++): This loop starts with i at 0, and it continues as long as i is less than the length of the finances array.

//totalProfitLoss += finances[i][1];: In each iteration of the loop, it adds the value at index 1 of the current sub-array in finances to the totalProfitLoss variable. The value at index 1 represents the profit or loss for a specific month.


var totalProfitLoss = 0;

for (var i = 0; i < finances.length; i++) {
  totalProfitLoss += finances[i][1];
}

console.log("Total: $" + totalProfitLoss);

// THE AVERAGE OF THE CHANGES IN PROFIT/LOSSES OVER THE ENTIRE PERIOD.

//It initializes two variables, totalChange and count,that initializes at 0, to keep track of the total change and the count of changes, respectively.

//It then loops through the finances array, starting from the second element (index 1), because I need to calculate the change from the second month.

//Inside the loop, it calculates the change in profit/loss for the current month by subtracting the profit/loss of the previous month from the profit/loss of the current month.

//It adds the calculated change to the totalChange and increments the count.

//After the loop, it calculates the average change by dividing totalChange by count.

var totalChange = 0;
var count = 0;

for (let i = 1; i < finances.length; i++) {

  var currentMonthProfit = finances[i][1];
  var previousMonthProfit = finances[i - 1][1];
  var change = currentMonthProfit - previousMonthProfit;

  totalChange += change;
  count++;
}

var averageChange = totalChange / count;

console.log('Average Change: ' + averageChange);


//THE GREATEST INCREASE IN PROFITS (DATE AND AMOUNT) OVER THE ENTIRE PERIOD

//var greatestIncrease = { date: "", amount: 0 };: This line initializes an object called greatestIncrease with two properties: date and amount. These properties will be used to store the date and the amount of the greatest increase in profit/loss. Initially, date is an empty string, and amount is set to 0.

 //used a for loop to iterate through the finances array, starting from the second element (index 1) and moving to following months.

//Inside the loop, it calculates the change in profit/loss for the current month by subtracting the profit/loss of the previous month from the profit/loss of the current month. This calculates how much the profit/loss has changed from the previous month. (I did this operation in the last exercise)

//Then checks whatever the change calculated for the current month is greater than the amount stored in the greatestIncrease object, which represents the greatest increase found.

//If the current change is greater, it updates the greatestIncrease object by setting the date to the date of the current month and the amount to the current change. This keeps track of the greatest increase in profit/loss.

var greatestIncrease = { date: "", amount: 0 };

for (let i = 1; i < finances.length; i++) {
  var currentMonthProfit = finances[i][1];
  var previousMonthProfit = finances[i - 1][1];
  var change = currentMonthProfit - previousMonthProfit;
  
  
  if (change > greatestIncrease.amount) {
    greatestIncrease.amount = change;
    greatestIncrease.date = finances[i][0];
  }
}

console.log('Greatest Increase in profit/losses:');

console.log('Date: ' +  greatestIncrease.date + ' Amount: $' + greatestIncrease.amount);


//THE GREATEST DECREASE IN PROFITS (DATE AND AMOUNT) OVER THE ENTIRE PERIOD

//Initialize Variables: The code begins by initializing two variables:

//greatestDecreaseAmount: This variable is set to 0 and will be used to keep track of the greatest decrease in profit/loss amount.
//greatestDecreaseDate: This variable is initially an empty string and will be used to store the date associated with the greatest decrease.
//Loop through the Dataset: then enters a loop that iterates through the finances array. It starts from the second element (i = 1) to compare each month's profit/loss with the previous month.

//Calculate the Change: Inside the loop, calculates the change in profit/loss for the current month. It does this by subtracting the profit/loss of the current month from the profit/loss of the previous month. The result is stored in the change variable.

//Check for Greatest Decrease:  then checks if the change (the current month's change) is smaller (more negative) than the greatestDecreaseAmount (the greatest decrease found). If it is, theen updates greatestDecreaseAmount to the value of change, and it records the corresponding date in greatestDecreaseDate.


var greatestDecreaseAmount = 0;
var greatestDecreaseDate = '';

for (let i = 1; i < finances.length; i++) {

  var currentMonthProfit = finances[i][1];
  var previousMonthProfit = finances[i - 1][1];
  var change = currentMonthProfit - previousMonthProfit;

  
  if (change < greatestDecreaseAmount) {
    greatestDecreaseAmount = change;
    greatestDecreaseDate = finances[i][0]; // Record the date
  }
}

console.log('Greatest Decrease in Profit/Loss:');

console.log('Date: ' + greatestDecreaseDate + ' Amount: $' + greatestDecreaseAmount);