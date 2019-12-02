// Requires height and weight to be passed.

function calculateBmi() 
{
	
	//let weight = document.getElementById("weight").value;
	let weight = $("#weight").val();
	//let height = document.getElementById("height").value;
	let height = $("#height").val();
	
	console.log("weight"+weight+"height"+height);
	
	if(weight > 0 && height > 0){	
		
		let finalBmi = weight/(height/100*height/100)
		$('#bmi').val(finalBmi);
		console.log(finalBmi);
		
		switch(true)
		{
			case(finalBmi < 18.5):
			$('#feedback').html("<strong>This means:</strong>That you are too thin.");
			break;
			case (finalBmi > 25 ):
			$('#feedback').html("<strong>This means:</strong>That you are overweight.");
			break;
			default:
			$('#feedback').html("<strong>This means:</strong>That you are healthy.");
			
		}
		
		
	}
	else{
		$('#feedback').html("<strong>This means:</strong>Please fill in everything correctly");
		//alert("Please Fill in everything correctly")
	}
}