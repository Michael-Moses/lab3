var userNumber = parseInt(prompt("Choose any Whole Number:",""));
var final = userNumber + 9;
//variables are defined userNumber is making the string into an integer 
//Mike Moses 9/4/21
document.write("<ul>");
document.write(
    "<li> I added 9 to " + userNumber + ". Making the new number " + final + ".</li>"
);
//5-8 above you take the number put into the promt then adding 9 to the "userNumber" with the variable "final"
final *=  2;
document.write(
    "<li> I multiplied " + (final / 2) + " by 2. Making the new number " + final + ".</li>"
);
//9-12 "final" is redefined from 5-7 then multiplied by 2 thus redefining it again. to get the previous value of "final" you must divide by 2
final -= 4;
document.write(
    "<li> I subtracted 4 from " + (final + 4) + " . Making the new number " + final + ".</li>"
);
//14-17 add 4 from the current value of "final" showing the previous value of "final" 
final /= 2;
document.write(
    "<li> I divided " + (final * 2) + " by 2. Making the new number " + final + ".</li>"
);
//19-22 multiply the current value of "final" by 2 to get the previous value of final   
final -= userNumber;

document.write(
    "<li> I subtracted the original number (" + userNumber + ") from " + (final + userNumber) + ". Making the final number " + final + ".</li>" 
);
document.write("</ul>");
//userNumber was never redefined so you just use the same number. to get the previous value of "final" you must add the value of "userNumber" since when redefining "final" I added "userNumber" 
alert("Your final number is " + final);