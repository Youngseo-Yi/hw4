/*
Youngseo Yi
10/10/23
CS20-Web Programming
HW4: Joe's Hot Dogs
Content: Javascript file for Joe's Hot Dogs, extra credit portion with
 associative arrays
*/

/*Associative Arrays*/
const prices = {"Hot Dogs":3.75, "Fries":3.00, "Sodas":2.50};
const quantities = {"Hot Dogs":0.0, "Fries":0.0,"Sodas":0.0};

/*Prompt the user for the quantity of each key in the array*/
for (const key in quantities) {
    var userInput= prompt("How many " + key + " do you want?");
    quantities[key] = parseInt(userInput);
}

/*For each item in the array, print out the name, quantity, and price*/
for (const key in quantities) {
    document.write("<div class = 'item'>");
    document.write("<div class='name'>"+key+" ordered: </div>");
    document.write("<div class='quantity'>" + quantities[key] + "</div>");
    document.write("<div class='price'>");
    document.write(printPrice(quantities[key]*prices[key]) + "</div>");          
    document.write("</div>");
}

/*Using a for-in loop to calculate the subtotal*/
var subTotal = 0.0;

for (const key in quantities) {
    subTotal += prices[key] * quantities[key];
}

/*take in float, convert to string and add decimals if needed; return a string*/
function printPrice(price) {
    var newPrice = Math.round(100*price)/100;

    if (newPrice % 1 != 0) {
        var [integerPart, decimalPart] = newPrice.toString().split(".");
        
        if (!decimalPart) {
            decimalPart = "00";
        } 
        /*If there is only one digit in the decimal part, add a trailing zero*/
        else if (decimalPart.length === 1) {
            decimalPart += "0";
        }
        
        /*Put integer and decimal portion together*/
        return "$" + integerPart + "." + decimalPart;
    } else {
        /*If the price is an integer, add ".00"*/
        return "$" + newPrice + ".00";
    }
}

//if discount is applicable
if (subTotal >= 25) {
    var discount = 0.10*subTotal;
    subTotal = subTotal - discount;

    //writing discount
    document.write("<div class = 'endline'>");
    document.write("<div class='endlabel'>Special Discount: </div>");
    document.write("<div class='endprice'>-" + printPrice(discount) + "</div>");
    document.write("</div>");

    //writing subtotal after discount
    document.write("<div class = 'endline'>");
    document.write("<div class='endlabel'>Subtotal After Discount: </div>");
    document.write("<div class='endprice'>" + printPrice(subTotal) + "</div>");
    document.write("</div>");
}

//Tax
document.write("<div class = 'endline'>");
document.write("<div class='endlabel'>Tax: </div>");
document.write("<div class='endprice'>");
document.write(printPrice(.0625*subTotal) + "</div>");
document.write("</div><hr style='width: 90%'>");

//Total
document.write("<div class = 'endline'>");
document.write("<div class='endlabel'>Total: </div>");
document.write("<div class='endprice'>");
document.write(printPrice(1.0625*subTotal) + "</div>");
document.write("</div>");