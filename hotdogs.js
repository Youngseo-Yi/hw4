/*
Youngseo Yi
10/10/23
CS20-Web Programming
HW4: Joe's Hot Dogs
Content: Javascript file for Joe's Hot Dogs; interactive prompts
*/

//Hot Dogs
var numDogs = prompt("How many hot dogs do you want?");

document.write("<div class = 'item'>");
document.write("<div class='name'>Hot dogs ordered: </div>");
document.write("<div class='quantity'>" + numDogs + "</div>");
document.write("<div class='price'>" + printPrice(numDogs*3.75) + "</div>");          
document.write("</div>");

//Fries
var numFries = prompt("How many fries do you want?");

document.write("<div class = 'item'>");
document.write("<div class='name'>Fries ordered: </div>");
document.write("<div class='quantity'>" + numFries + "</div>");
document.write("<div class='price'>" + printPrice(numFries*3) + "</div>");          
document.write("</div>");

//Sodas
var numSodas = prompt("How many sodas do you want?");

document.write("<div class = 'item'>");
document.write("<div class='name'>Sodas ordered: </div>");
document.write("<div class='quantity'>" + numSodas + "</div>");
document.write("<div class='price'>" + printPrice(numSodas*2.5) + "</div>");          
document.write("</div>");


//first subtotal
var subTotal = numDogs*3.75 + numFries*3 + numSodas*2.50;

document.write("<div class = 'endline'>");
document.write("<div class='endlabel'>Subtotal: </div>");
document.write("<div class='endprice'>" + printPrice(subTotal) + "</div>");
document.write("</div>");


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
document.write("<div class='endprice'>" + printPrice(.0625*subTotal) + "</div>");
document.write("</div><hr style='width: 90%'>");

//Total
document.write("<div class = 'endline'>");
document.write("<div class='endlabel'>Total: </div>");
document.write("<div class='endprice'>"+printPrice(1.0625*subTotal) + "</div>");
document.write("</div>");
