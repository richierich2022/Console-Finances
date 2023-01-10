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

console.log("Finanical Analysis");
console.log("-".repeat(40));

//Display total no. of months within the console
console.log("The total number of months included in the dataset is: " + finances.length);

//The net total amount of Profit/Losses over the entire period
var net_total = 0;
for (let i = 0; i < finances.length; i++)
{
    net_total = net_total + finances[i][1];
}
console.log("The net total amount of Profit/Losses over the entire period: " + net_total);

//The average of the changes in Profit/Losses from month to month to find change over entire period
var Total_change = 0;
for (let i = 0; i < (finances.length - 1); i++)
{
    Total_change = Total_change + (finances[i+1][1] - finances[i][1]);
}
var Total_rate_change = Total_change/(finances.length-1);
console.log("The average of the change in Profit/losses over the entire period is: " + Total_rate_change.toFixed(2));

//The greatest increase in profits (date and amount) over the entire period
//The greatest decrease in losses (date and amount) over the entire period
var array_profits = []; // just defining an array
var array_loss = [];
var c = 0; // index value for profit
var d = 0;// index value for loss
for (let i = 0; i < (finances.length - 1); i++)
{
  var temp = (finances[i+1][1] - finances[i][1]); // this is the difference between two months for example Jan and Feb
  if(finances[i+1][1] > finances[i][1]) // this is a if condition when say Feb values are greater than Jan values
  {
    array_profits[c] = [finances[i+1][0],temp]; //[c] is array number one and array number two
    c += 1;
  }
  else // this is where losses will go 
  {
    array_loss[d] = [finances[i+1][0],temp]; // finance [i+1][0] is actually the date, temp is the difference we calculate
    d += 1;
  }
}

var max_profit = 0;
var max_index = 0;
for(i=0;i<array_profits.length;i++)
{
  if (array_profits[i][1]>max_profit)//max profit stores the current profit when the iteration is running
  {
    max_profit = array_profits[i][1];//store the current max current profit
    max_index = i;//stores the index which is needed later for accessing the profit array  
  }
}

var max_loss = 0;
var max_Loss_index = 0;
for(i=0;i<array_loss.length;i++)// this is the same as profit above but for loss
{
  if (array_loss[i][1]<max_loss)
  {
    max_loss = array_loss[i][1];
    max_Loss_index = i;
  }
}
console.log("max profit month: " + array_profits[max_index][0] + " max profit: " + max_profit);
console.log("max loss  month: " + array_loss[max_Loss_index][0] + " max loss: " + max_loss);