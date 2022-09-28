## Understanding the Problem
- write the problem down in plain English
Need to create a Rock Paper Scissors game that can be played in the browser console. User inputs their choice of rock, paper, or scissors and the computer randomly selects a choice. The two choices will be evaluated to determine a winner. Rock beats Scissors. Paper beats Rock. Scissors beat Paper. If both are the same there is a tie. The console will then return a string that declares the winner of the round.

## Plan
1. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch out the interface on paper.
	1. No user interface yet. This will be played in the console
2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
	1. The user will enter their choice of rock, paper, or scissors
3. What's the desired output?
	1.  The output will show the player's selection, the computer's selection, and declare a winner
4. Given your inputs, what are the steps necessary to return the desired output?
	1. Write out an algorithm to solve the problem
	2. Player inputs their choice of rock, paper, or scissors. The computer will randomly choose between rock, paper, or scissors. The program will evaluate whether the player or computer wins the round. The output will tell both the player's and computer's selections and and declare the winner.


## Pseudocode
- write out the logic for your program in natural language

1. Print "Please pick either rock, paper, or scissors: "
2. Wait for user input
3. Take user input and standardize to upper case
4. Make random choice of rock, paper, or scissors
5. Compare random choice to user input
	1. if random choice = user input, there is a tie
	2. else if user rock and random scissors
		1. user wins
	3. else if user paper versus random rock
		1. user wins
	4. else if user scissors versus random paper
		1. user wins
	2. else computer wins
6. Declare a winner
	1. if user wins
		1. print "You win! (user's choice) beats (random choice)"
	2. else if computer wins
		1. print "You lose! (random's choice) beats (user's choice)"


## Divide and Conquer
- identify subproblems to solve
- each of the steps in the algorithm are subproblems
-  **break the big problem down and solve each of the smaller problems until you've solved the big problem**