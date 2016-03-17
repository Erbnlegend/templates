/*Form Validation*/

/*Name Check*/

function nameCheck() {
    var nameMessage = "";
    if (document.getElementById("fullName").value.length < 1 || document.getElementById("fullName").value.length >= 25) 
    {
        nameMessage = "Please Enter your Full Name";
    }
    else 
    {
        nameMessage = "OK";
    }
        document.getElementById('nameMessage').innerHTML = nameMessage;
}

/*Password Check*/

function passCheck() {
    var passMessage = "";
    if (document.getElementById("pword").value.length < 8 || document.getElementById("pword").value.length >= 25) 
    {
        passMessage = "Passwords must be between 8 and 25 characters long";
    }
    else 
    {
        passMessage = "OK";
    }
        document.getElementById('passMessage').innerHTML = passMessage;
}

/*Radio Check*/

function radioColorCheck() 
{
    var colorItems = document.forms[0].color;
	 var strMsg = "You Forgot to choose a color!";
	 for ( var i=0;i < colorItems.length; i++ )
	 {
		 if ( colorItems[i].checked == true )
		 {
			strMsg = "OK";
			break;
		 }
	 }
	 document.getElementById('radio1Message').innerHTML = strMsg;
	 
}

function radioSizeCheck() 
{
    var colorItems = document.forms[0].size;
	 var strMsg = "You Forgot to choose a size!";
	 for ( var i=0;i < colorItems.length; i++ )
	 {
		 if ( colorItems[i].checked == true )
		 {
			strMsg = "OK";
			break;
		 }
	 }
	 document.getElementById('radio2Message').innerHTML = strMsg;
	 
}

/*Quantity Check*/

function quantCheck() 
{
    var quantMessage = "";
    if (isNaN(document.getElementById("quantity").value)) 
    {
        quantMessage = "Quantity must be a number";
    } 
    else if (document.getElementById("quantity").value.length == 0) 
    {
        quantMessage = "Quantity cannot be empty";
    } 
    else 
    {
        quantMessage = "OK";
    }
        document.getElementById('quantMessage').innerHTML = quantMessage;
}

/*Select Menu Check*/

function selectCheck()
{
    message = "Thanks!"
    document.getElementById("numberMessage").innerHTML = message;
}

/*Text Area Check*/

function textAreaCheck() 
{
    var characters = 500 - document.getElementById("comment").value.length;
    var message = characters + " " + "characters left";
    
    
    document.getElementById("commMessage").innerHTML = message;
}

/*Checkbox Check*/

function checkCheckbox()
{
    if(document.getElementById("checkbox").checked == true) {
        message = "";
        document.getElementById("checkMessage").innerHTML = message;
       }
       else {
        message = "You will no longer receive Special Offers! <br />";
        document.getElementById("checkMessage").innerHTML = message;
}
}

/*Create a New Menu*/

function setupStuff()
{
	/* Creating menus */
	var today = new Date();
	var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
	//Days of Month
	//createMenu(1, lastDay,"Choose a Day",'daymenu');
	//Year Menu
	var thisYear = today.getFullYear();
	var yearRange = thisYear - 125;
	//createMenu(yearRange, thisYear, "Choose your Birth Year", "yearmenu");
	//Month Menu
	//createMenu(1, 12, "Choose your Birth Month", "monthmenu");
	//Number Menu
	createMenu(25, 1000, "Choose a Number", "numbermenu");
}

function createMenu(startNum, endNum, menuMsg, targetId)
{
	var strMsg = '<option value="">' + menuMsg + '</option>';
	var counter = startNum;
	while (counter <= endNum)
	{
		strMsg += '<option value="' + counter + '">' + counter + '</option>';
		counter++;
	}
	document.getElementById(targetId).innerHTML = strMsg;
}
