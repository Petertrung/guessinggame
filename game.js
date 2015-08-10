
		'Use strict'
		var score = 0;
	

			function resetScore(){
				score = 0;
			}

			function peterGame(){
				var age = prompt('How old are you?');


				if (age >= 18){
					alert('Go ahead and play');
				}else{
					alert('Play at your own risk');
				}


				var name = prompt('Whats your name?');

					alert('Hello ' + name + ' welcome to my game');


					alert('You will answer questions to get to know me better!');
					//Start of the first question with color

				getScore = function(){

			  		 	document.getElementById("t").innerHTML = name + '\'s Score';

			  			document.getElementById("score").innerHTML = score;
				          		};

					getScore();

				var guess, answer, message,playing;//Variables
				playing = true;
				answer  = 'blue';//answer
					console.log(answer);//console Preview
				while(playing) {
					guess = prompt('The first question is what is my favorite color?');//Question


				if 	(guess == answer){
					playing = false;
					message= 'Nice job!';
					++(score)
					document.getElementById("score").innerHTML = score;
				}else{
					message = 'Keep going!';
				}
					alert(message);
					//age question
		}
				var old,playing;
				playing = true;

				while(playing) {
					old = prompt('How old do you think I am?');

				if (old == 18){
				playing = false;
					alert('You are right');
					++(score)
					document.getElementById("score").innerHTML = score;
				} else if ((15 <= old && old <= 17) || (19 <= old && old <= 21)){
					alert('you are close.');
				}else {
					alert('you are way off');

				}

				if(score >= 2){
					alert('You win! Click button to restart')
				}else{
					alert('Good game, press button to restart!')
				}

			}
		}
		