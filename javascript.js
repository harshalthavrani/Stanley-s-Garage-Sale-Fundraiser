//java script Begins

//Declaring Variables
var bot,cr,vd,vg,gt,error,errorcredit,intbot,intcr,intvd,intvf,intgt,inttotal,intdonation,intgrosstotal;

function boxoftoys() //Creating a Function for the product
{
  bot=document.getElementById("bot1").value; //saves the user input in a textbox
  if(isNaN(bot)) //Validates the users input
  {
    error=document.getElementById("errornumber").innerHTML="Please Enter a VALID number eg. 3 or 5"; //Shows error if the user's input was invalid 
    // 
  }
  document.getElementById("bot").innerHTML = "x " + bot + " "; //Shows the input (number of items)
}

function carrims() //Creating a Function for the product
{
  cr=document.getElementById("cr1").value; //saves the user input in a textbox
  if(isNaN(cr)) //Validates the users input
  {
    error=document.getElementById("errornumber").innerHTML="Please Enter a VALID number eg. 3 or 5"; //Shows error if the user's input was invalid 
    // 
  }
  document.getElementById("cr").innerHTML = "x " + cr + " "; //Shows the input (number of items)
}

function vintagedishes()
{
    vd=document.getElementById("vd1").value; //saves the user input in a textbox
  if(isNaN(vd)) //Validates the users input
  {
    error=document.getElementById("errornumber").innerHTML="Please Enter a VALID number eg. 3 or 5"; //Shows error if the user's input was invalid 
    // 
  }
  document.getElementById("vd").innerHTML = "x " + vd + " "; //Shows the input (number of items)
}

function vintageglassware()
{
    vg=document.getElementById("vg1").value; //saves the user input in a textbox
  if(isNaN(vg)) //Validates the users input
  {
    error=document.getElementById("errornumber").innerHTML="Please Enter a VALID number eg. 3 or 5"; //Shows error if the user's input was invalid 
    // 
  }
  document.getElementById("vg").innerHTML = "x " + vg + " "; //Shows the input (number of items)
}

function gardentools()
{
    gt=document.getElementById("gt1").value; //saves the user input in a textbox
  if(isNaN(gt)) //Validates the users input
  {
    error=document.getElementById("errornumber").innerHTML="Please Enter a VALID number eg. 3 or 5"; //Shows error if the user's input was invalid 
    // 
  }
  document.getElementById("gt").innerHTML = "x " + gt + " "; //Shows the input (number of items)
}

function reciept()
{
intbot=parseInt(bot); //Parses the value into an integer
intcr=parseInt(cr);   //Parses the value into an integer
intvd=parseInt(vd);   //Parses the value into an integer
intvg=parseInt(vg);   //Parses the value into an integer
intgt=parseInt(gt);   //Parses the value into an integer

intbot=bot*1; //Multiplies the number of quantity with the price
intcr=cr*115; //Multiplies the number of quantity with the price
intvd=vd*135; //Multiplies the number of quantity with the price
intvg=vg*125; //Multiplies the number of quantity with the price
intgt=gt*120; //Multiplies the number of quantity with the price

var customer=document.getElementById("name").value; //storing the user input in a variable

var customerregex= /^[a-zA-Z ]+$/; //Declaring Regex Code for the customer name

var email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Declaring Regex Code for the customer email 

var cc=/^\d{4}-\d{4}-\d{4}-\d{4}$/; //Declaring Regex Code for the customer credit card number 

var cm=/^[A-Z]{3}$/; //Declaring Regex Code for the customer credit card expiry month 

var cy=/^\d{4}$/; //Declaring Regex Code for the customer credit card expiry year 

if(customerregex.test(document.getElementById("name").value)==false) //checks if the regex is a match with the user input
{
    error="Please write a valid Customer Name "; //declares the error if it is not a match
    document.getElementById("errorname").innerHTML=error; //shows the error if it is not a match
    return false;
}
else
{
    error=""; //Doesnt shows an error if it is a match
    document.getElementById("errorname").innerHTML=error; //hides the error if it was shown previously
}

if(email.test(document.getElementById("email").value)==false) //checks if the regex is a match with the user input
{
    error="Please write a valid Customer Email "; //declares the error if it is not a match
    document.getElementById("erroremail").innerHTML=error; //shows the error if it is not a match
    return false; //returns to the condition meaning it wont move ahead untill the condition is satisfied
}
else
{
    error=""; //Doesnt shows an error if it is a match
    document.getElementById("erroremail").innerHTML=error; //hides the error if it was shown previously
}
var errormonth = document.getElementById("creditmonth").value; //declares the error 
var errorcredit = document.getElementById("credityear").value; //declares the error 
if(document.getElementById("creditcard").value=="") //checks if the regex is a match with the user input
{
     error=""; //Doesnt shows an error if it is a match
    document.getElementById("errormonth").innerHTML=error; //hides the error if it was shown previously
 
}
else
{
  if(cc.test(document.getElementById("creditcard").value)==false && document.getElementById("creditcard").value!="" ) //checks if the regex is a match with the user input
{
    error="Please write a valid credit card"; //declares the error if it is not a match
    document.getElementById("errorcredit").innerHTML=error; //shows the error if it is not a match
}
else{
  if(document.getElementById("creditmonth").value=="" || cm.test(document.getElementById("creditmonth").value)==false) //checks if the regex is a match with the user input
    {
    error="Credit Card Month Cannot be blanked </br>"; //declares the error if it is not a match
    document.getElementById("errormonth").innerHTML=error; //shows the error if it is not a match
    }
    else
    {       error=""; //Doesnt shows an error if it is a match
            document.getElementById("errormonth").innerHTML=error; //hides the error if it was shown previously
      if(errormonth!="JAN" && errormonth!="FEB" && errormonth!="MAR" && errormonth!="APR" && errormonth!="MAY" && errormonth!="JUN" && 
      errormonth!="JUL" && errormonth!="AUG" && errormonth!="SEP" && errormonth!="OCT" && errormonth!="NOV" && errormonth!="DEC" ) //checks if the regex is a match with the user input
      {
        errorcredit="Please write a valid Month Eg JAN OR DEC"; //declares the error if it is not a match
        document.getElementById("errormonth").innerHTML=errorcredit; //shows the error if it is not a match
        return false; //returns to the condition meaning it wont move ahead untill the condition is satisfied
       } 
    }
}
if(document.getElementById("credityear").value=="" || cy.test(document.getElementById("credityear").value)==false) //checks if the regex is a match with the user input
{
    error="Credit Year Cannot Be Blanked"; //declares the error if it is not a match
    document.getElementById("erroryear").innerHTML=error; //shows the error if it is not a match
}
else
{
    error=""; //Doesnt shows an error if it is a match
    document.getElementById("erroryear").innerHTML=error; //hides the error if it was shown previously
    if(document.getElementById("credityear").value<2020) //checks if the year is not in past
  {
  errorcredit="A past year is not valid please write a future year"; //declares the error if it is not a match
  document.getElementById("erroryear").innerHTML=errorcredit; //shows the error if it is not a match
  return false; //returns to the condition meaning it wont move ahead untill the condition is satisfied
  }
}
}

if(error=="") //checks if the variable error is empty and then only it will show the Invoice!!!! 
    {
        
       document.getElementById("selfcheckout").innerHTML= "Customer Name: " + customer; //Shows the input (Customer' Names)
       document.getElementById("customeremail").innerHTML= "Customer Email: " + document.getElementById("email").value; //Shows the input (Customer' Names)
       if(document.getElementById("creditcard").value!="") //checks if the credit card number is not empty
       {
           var creditcard1 = document.getElementById("creditcard").value; //Stores the user input of credit card number
           creditcard1 = creditcard1.replace(/\d{4}-\d{4}-\d{4}-/,"****-****-****- "); //Shows the credit card number in the Invoice hiding the first 12 numbers
           document.getElementById("customercredit").innerHTML = "Credit Card: " + creditcard1; //Shows the user input for credit card number
           document.getElementById("customermonth").innerHTML = "Expiry Month: " + document.getElementById("creditmonth").value; //Shows the user input for credit card expiry month
           document.getElementById("customeryear").innerHTML = "Expiry Year: " + document.getElementById("credityear").value; //Shows the user input for credit card expiry year
       }
      let table='<table border 2px solid white">'; //Creates a table
      table += '<tr>'; //First Row of the Table
      table += '<td>' + "Product" + '</td>'; //First Column of the Table
      table += '<td>' + "Quantity" + '</td>'; //Second column of the Table
      table += '<td>' + "Price" + '</td>';  //Third Column of the Table
      table += '</tr>';  
      table += '<tr>';
      if(bot != undefined) //it will only show this table if this product is selected
      {
        
        table += '<td >' + "Box Of Toys" + '</td>';
        table += '<td >  ' + bot + '  </td>';
        table += '<td >  ' + intbot + '  </td>';
        
      }
      else if(isNaN(intbot)) //Makes the value zero when not selected so that it helps gst to consider it gst
      {
        intbot = 0;
      }
        table += '</tr>';

        table += '<tr>';
      if(cr != undefined) //it will only show this table if this product is selected
      {
        
        table += '<td >' + "Car Rims" + '</td>';
        table += '<td >' + cr + '</td>';
        table += '<td >  ' + intcr + '   </td>';
        
      }
      else if(isNaN(intcr)) //Makes the value zero when not selected so that it helps gst to consider it gst
      {
        intcr = 0;
      }
      table += '</tr>';

      table += '<tr>'; //it will only show this table if this product is selected
      
      if(vd != undefined) 
      {
        
        table += '<td >' + "Vintage Dishes" + '</td>';
        table += '<td >' + vd + '</td>';
        table += '<td >  ' + intvd + '   </td>';
        
      }
      else if(isNaN(intvd)) //Makes the value zero when not selected so that it helps gst to consider it gst
      {
        intvd = 0;
      }
      table += '</tr>';

      table += '<tr>'; 
      if(vg != undefined) //it will only show this table if this product is selected
      {
        
        table += '<td >' + "Vintage Glassware" + '</td>';
        table += '<td >' + vg + '</td>';
        table += '<td >  ' + intvg + '   </td>';
        
      }
      else if(isNaN(intvg)) //Makes the value zero when not selected so that it helps gst to consider it gst
      {
        intvg = 0;
      }
      table += '</tr>';

      table += '<tr>'; 
      
      if(gt != undefined) //it will only show this table if this product is selected
      {
        
        table += '<td >' + "Garden Tools" + '</td>';
        table += '<td >' + gt + '</td>';
        table += '<td >  ' + intgt + '   </td>';
        
      }
      else if(isNaN(intgt)) //Makes the value zero when not selected so that it helps gst to consider it gst
      {
        intgt = 0;
      }
      table += '</tr>';
      inttotal=intbot+intcr+intvd+intvg+intgt; //Total Value
      intdonation=inttotal*10/100;
       //Formula of GST
      if(intdonation<10)
      {
        intdonation=10;
      }
      
      intgrosstotal=inttotal+intdonation; //Gross Total with GST

      table += '<tr>'; 
      table += '<td colspan="2">' + "Donation Amount" + '</td>';  
      table += '<td>' + intdonation + '</td>'; 
      table += '</tr>'; 

      table += '<tr >'; 
      table += '<td colspan="2">' + " Total  " + '</td>';   
      table += '<td>' + intgrosstotal + '</td>'; 
      table += '</tr>'; 
      table += '</table>'; 
      document.getElementById("table").innerHTML=table; //Replaces the span id table with the table when the button is pressed
    
    }
}
//java script ends 