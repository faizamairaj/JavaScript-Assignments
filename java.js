                //   Chapter 01
//  Q:1  Write a script to greet your website visitor using JS alert box.            
// alert(" 'Welcome to our website visitor' ");

// Q:2 Write a script to display following message on your webpage:
// alert ("JavaScript Alert \n \n Error! Please  enter a valid password.");

// Q:3 Write a script to display following message on your web page:(Use line breaK)
// alert ("JavaScript Alert \n \n Welcome to JS Land...\n Happy Coding!");

// Q:4 Write a script to display following messages in sequence:
// alert (" JavaScript Alert \n \n Welcome to JS Land...");
// alert ("JavaScript Alert \n \n Happy Coding!\n  Prevent this page from creating additional dialogs.");

//Q:5  Generate the following message throught browser's developer console:
// alert("JavaScript Alert \n \n Hello...! I can run JS through my web browser's console");

// Q:6 Make use of alerts in your new /existing HTML & CSS project.
// function show() {
// alert("This is an alert message!");
// alert("This is a pop up  message..");
// }

// Q:7 Practice placement of <script></script> element in following sections of your project
// in exercise 6:
// a.Head
// b.Body (before your page's HTML)
// c.Body (inside your page's HTML)
//D. Body (after your page's HTML)
// The answer to Question 7 is in the index.html file.


// ============================================================================================//
            //   Chapter 02
// Q:1 Declare a  variable called username.

// let userName = "Faiza";
// console.log(userName);

// Q:2 Declare a  variable called myName & assign to it a string that represents your Full Name.

//  let myName = "Faiza Sheikh";
//  console.log(myName);

// Q3: Write script to 
// a) Declare a variable JS varaible, titled message.
// b) Assign "Hello World" to varaible message
// c) Display the message in alert box.

//  let message;
//  message = "Hello World";
//  alert(message);

// Q:4 Write a script to save student's bio data in JS varaible and show the data in alert boxes.

// let studentName = "Faiza Sheikh";
// let age =  22;
// let course = "Certified Mobile Application Development";

// alert ("Name: " + studentName);
// alert ("age : " + age);
// alert("course: " + course);

// Q:5 Write a script to display the following alert using one JS  variable:

// alert("                                              PIZZA \n                                              PIZZ \n                                              PIZ \n                                              PI \n                                              P");

// Q:6 Declare a  variable called email and assign to it a string that represents your Email
// Address (e.g.example@example.com). Show the below mentional message in an alert box.
// (Hint:Use string concatenation).

// let email = "example@example.com";
// alert("My email address is  " + email);

// Q:7 Declare a  variable called book & give it the value "A smarter way to learn JavaScript".
// Display in an alert box:

// let book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book A smarter\n way to learn JavaScript");

// Q:8 Write a script to display this in browser through JS.

// document.write("Yah! I can write HTML content through JavaScript");

// Q:9 Store following  string in a variable and show in alert and  browser through JS.

// let designOfLine = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designOfLine);

// document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//=============================================================================================//
                   //   Chapter 03
// Q:1 Declare a variable called age & assign to it your age. Show your age in an alert box.

// let age = 22;
// alert("I am 22 years old");

// Q:2 Delare & initialize a variable to keep track of how many times a visitor has visited
// a web page. Show his / her number of visits on your web page . For example:
//  "You have visited this site N times".

// let visitCount = localStorage.getItem('visitCount');

// if (!visitCount) {
//     visitCount = 0;
// }
// visitCount++;

// localStorage.setItem('visitCount', visitCount);
// document.write(`You have visited this site ${visitCount} times.`);
// alert(`You have visited this site ${visitCount} times.`);

// Q:3 Declare a variable called birthyear & assign to it your birthYear.Show the following
 //message in your browser.

//  let birthYear = 1990;
//  document.write ("My birth year is 1990 <br> Data type of my declared variable in number");
 
// Q:4 A visitor visits an online clothing store www.xyzClothing.com. Write a script to
// store in variable the following information:
// a:Vistor's name
// b: Product title
// c: Quantity i.e. how many products a visitor wants to order
// Show the following message in your broswser: "John Doe ordered 5 T-shirt(s) on XYZ Clothing
// store".

// let visitorName = "John Doe";
// let productTitle =  "T-shirt";
// let quantity = 5;

// document.write (visitorName + " ordered " +  quantity  +  "  " +  productTitle + " (s) on XYZ Clothing store");

// =========================================================================================================//
                                 //   Chapter 04
// //  Q: 1. Declare 3 variables in one statement.

    //    let a = 5, b = 10, c = 15;
    //    let p,q,r;

// Q:2. Declare 5 legal & 5 illegal variable names.
// Legal variable names:
// 1-rose
// 2-sunflower
// 3-tulip
// 4-lilyFlower
// 5-daisy_bloom

// // Illegal variable names and reasons:
// 1-rose ('Cannot start with a number')
// 2-sun-flower ('Hyphen - is not allowed')
// 3-tulip ('Reserved keyword in JavaScript')
// 4-lily, Flower ('Spaces are not allowed')
// 5-daisy_bloom ('Special characters like @ are not allowed')
    
// Q:3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________  

// document.write("<h2>Rules for naming JS variables</h2> <br><br>");

// document.write(" Variable names can only contain, numbers,$ and _ .For example: $my_1stVariable <br>");
// document.write("Variables must begin with a letter,$ or _.For example: $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS keyboards");

// ========================================================================================================//
                                //   Chapter 05    
// Q:1  Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.  
// let num1 = 3;
// let num2 = 5;
// let sum = num1 + num2;

// document.write(`The sum of 3 & 5 is ${sum}`);

// Q:2 Repeat task1 for subtraction, multiplication, division & modulus.
         //   subtraction:
// let num1 = 5;
// let num2 = 3;
// let difference = num1 - num2;

// document.write(`The difference of 5 & 3 is ${difference}`);

        //  multiplication:
// let num1 = 3;
// let num2 = 5;
// let product = num1 * num2;

// document.write(`The product of 3 & 5 is ${product}`);

        //        division
// let num1 = 3;
// let num2 = 5;
// let quotient = num1 / num2;

// document.write(`The quotient of 3 & 5 is ${quotient}`);

        //    modulus
// let num1 = 3;
// let num2 = 5;
// let remainder = num1 % num2;
        
// document.write(`The remainder of 3 & 5 is ${remainder}`);
 

// Q:3 Do the following using JS Mathematic Expressions.

// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”

// let myToy;
// document.write ("Value after variable declaration is " +  myToy + "<br>");

// myToy = 5;
// document.write ("Initial value: " + myToy + "<br>");

// myToy++;
// document.write ("Value after increment is: " + myToy + "<br>");

// myToy += 7;
// document.write ("Value after addition is: " + myToy + "<br>");

// myToy --;
// document.write ("Value after decrement is: " + myToy + "<br>");

// let remainder = myToy % 3;
// document.write ("The remainder is: " + remainder);

// Q:4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable  &
//  calculate the cost of buying 5 tickets to a movie. Example output. 

// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;

// document.write ("Total cost to buying 5 tickets to a movie is: " + totalCost + "PKR");

// Q:5 Write a script to display multiplication table of any number in your browser. E.g.

// let number = 4;
// document.write("<h2>Table of 4</h2> <br>");

// for (var i = 1; i <=10; i++ ) {
//    document.write (`${number} x ${i} = ${number *i} <br>`);
// }

// Q:6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
// let celsiusTemp = 25; 
// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(`${celsiusTemp}°C is ${fahrenheitTemp}°F<br>`);

// let fahrenheit = 70; 
// let celsius = (fahrenheit - 32) * 5/9;
// document.write(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);

// Q:7 Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let priceOfItem1 = 650;
// let priceOfItem2 = 100;
// let quantityOfItem1 = 3;
// let quantityOfItem2 = 7;
// let shippingCharges = 100;

// let totalCostItem1 = priceOfItem1 * quantityOfItem1;
// let totalCostItem2 = priceOfItem2 * quantityOfItem2;

// let grandTotal = totalCostItem1 + totalCostItem2 + shippingCharges;

// document.write ("<h2>Shopping Chart</h2> <br><br>");
// document.write (`price of item 1 is ${priceOfItem1} <br>`);
// document.write (`quantity of item 1 is ${quantityOfItem1} <br>`);
// document.write (`price of item 2 is ${priceOfItem2}  <br>`);
// document.write (`quantity of item 2 is ${quantityOfItem2} <br>`);
// document.write (`shipping charges is ${shippingCharges}  <br><br>`);
// document.write (`Total cost of your order is ${grandTotal}`);

// Q:8 Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser. 

// let totalMarks = 980;
// let marksObtained = 804;

// let percentage = (marksObtained / totalMarks)*100;

// document.write ("<h2>Marks Sheet</h2> <br> <br> <br>");
// document.write (`Total Marks: ${totalMarks} <br>`)
// document.write (`Marks Obtained: ${marksObtained} <br>`);
// document.write (`percentage: ${percentage.toFixed(13)} % `);

// Q:9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total 
// currency to Pakistani Rupees.Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee).

// let usDollars = 10;
// let saudiRiyals = 25;

// let totalPKR = (usDollars *104.80) + (saudiRiyals *28);

// document.write("<h2>Currency in PKR</h2>");
// document.write (`Total Currency in PKR: ${totalPKR}`);

// Q:10 Write a program to initialize a variable with some number and do  in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

// let number = 15;
// let result  = ((number + 5)* 10)/2
// document.write("<h2>Arithmetic Operator</h2> <br>");
// document.write (`Initial number: ${number} <br>`);
// document.write (`Result after performing arithmetic operations ${result}`);

// Q:11 The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// let currentYear = 2024;
// let birthYear = 1999;
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;

// document.write ("<h2>Age Calculator</h2> <br> <br>");
// document.write (`They are either ${age1} or ${age2} years old`);

// Q:12 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 20;
// let pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi *Math.pow(radius,2);

// document.write ("<h2>The Geometrizer </h2> <br> <br>");
// document.write (`Radius of a circle is: 20 <br>`);
// document.write (`The circumference is: ${circumference.toFixed(14)} <br>`);
// document.write (`The area is: ${area.toFixed(1)}`);

// Q:14 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
//  Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// let favoriteSnack = " chocolate chip";
// let currentAge = 15;
// let EstimatedMaximumAge = 65;
// let  AmountOfsnackPerDay = 3;

// let yearsLeft =  EstimatedMaximumAge - currentAge;
// let totalSnacks = yearsLeft * 1 * AmountOfsnackPerDay;

// document.write ("<h2>The Lifetime Supply Calculator</h2> <br> <br>");

// document.write (`Favorite Snack: ${favoriteSnack} <br> `);
// document.write (`Current age: ${currentAge} <br>`);
// document.write (`Estimated Maximum Age: ${EstimatedMaximumAge} <br>`);
// document.write (`Amount 0f snacks per day: ${AmountOfsnackPerDay} <br>`);
// document.write (`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${ EstimatedMaximumAge}`);

// ============================= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ===================================//

//>>>>>>>>>>>>>>>>>>>>>>    Chapters 1 to 5  Assignments Completed    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//




















              