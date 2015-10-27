
$(document).ready(function() {
	$('#question').keypress(function(e){

    	if(this.value.length > 140){
        	return false;
    	}
    	$("#characters-remaining").html("Remaining characters : " +(140 - this.value.length));
    });

});


function validateForm() {
    var validFirst = addErrorClass(
    		$('#registration-form').find('input[name="first-name"]'),
    		$('#registration-form').find('label[for="first-name"]')
    	);

    var validLast = addErrorClass(
    		$('#registration-form').find('input[name="last-name"]'),
    		$('#registration-form').find('label[for="last-name"]')
    	);

    var validBirthday = addErrorClass(
    		$('#registration-form').find('input[name="birthday"]'),
    		$('#registration-form').find('label[for="birthday"]')
    	);

    var validQuestion = addErrorClass(
    		$('#registration-form').find('input[name="question"]'),
    		$('#registration-form').find('label[for="question"]')
    	);

    if(validFirst == false || validLast == false || validBirthday == false || validQuestion == false) {
    	return false;
    }
    else {
    	showThankyou();
    	return false;
    }
    
   
}

function addErrorClass(field, label) {
	 if (field.val() == null || field.val() == "") {
        $(field).addClass("input-error");
        $(label).addClass("label-error");
        return false
    }
    else {
    	return true;
    }
}

function showThankyou() {
	$('#register').fadeOut(500);
	$('#thankyou').delay(500).fadeIn(500);
}
