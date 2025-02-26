    // onmouseover js event
    function mouseOver(){
        submit.style.background = "rgb(190, 29, 45)";
        submit.style.color = "#ffffff";
    }

    // onmouseout js event
    function mouseOut(){
        submit.style.background = "#dc3545";
        submit.style.color = "#ffffff";
    }

    // onchange js event
    document.getElementById("fullname").onchange = function() {changeToCapital()}
    function changeToCapital(){
        var fname = document.getElementById("fullname");
        fname.value = fname.value.toUpperCase();
    }

    // onclick submit info js event
    function info(){
        var fname = document.getElementById("fullname").value;
        window.alert ('Thanks ' +  fname + '! ' + 'Proceed to the next section.');
    }

    // onclick ticket price js event
    function price(){
        var c = document.getElementById("class").value;
		var o = document.getElementById("option").value;

        if (c === "First") {cost = 290000;}
		if (c === "Business") {cost = 115000;}
		if (c === "Economy") {cost = 17400;}

		if (o === "None") {discount = 1;}
		if (o === "Student") {discount = 0.7;}
		if (o === "Senior Citizen") {discount = 0.6;}

        var ans = cost*discount;
        window.alert('Your ticket price is ' + ans + '. ' + 'Proceed to the next section.');
    }

    // onclick print ticket js event
    function receive(){
        window.alert('Check your email for your ticket. Thank you!');
    }

    // onclick buy more tickets js event
    function buy(){
        window.location.reload();
    }