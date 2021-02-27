# 22.1 - Forms

Create a webpage that has a form (asks the user for its name, age and email
address) and when the user clicks submit, open a text window that writes all the
information and ask for his confirmation. If he clicks on the confirm button,
tell him “congratulations you successfully sent this form” if he clicks on
change information, give him the possibility to change the information and ask
again for his confirmation.

---

# 22.2 - Checkbox

Create a webpage that has a checkbox. If the checkbox is checked, make a photo
appear. If it is not, make it disappear.

---

# 22.3 - Guess My Letter

Lets create a small game that the user needs to guess a random letter. Do not
spend too much time styling the page.

Generate a random letter and create the following logic depending if the user
guessed the right letter or not: User guessed it right • Display a message that
the user was right. • The message should be in the color green. • Show the right
letter to the user. • Display a message if he wants to play again with a confirm
button. • If the user wants to play again reset the DOM as it was in the
beginning.

User guessed wrong • Display a message that the user got it wrong. • The message
should be in the color red. • Display all the letters the user has guessed •
User cannot type the same letter twice. If the user did so, display a message
that he already guessed the letter.

Constraints • A user can only guess a valid alphabetical letter. If the user
types a non alphabetical letter, display a message that this is not allowed. •
When the game is finished, a user cannot guess a letter until he presses the
confirm button to start a new game. • show guesses • If letter already guessed
message to them • If letter is not the guess then display a message wrong guess
• If letter is you are correct message and display the righ right key then show
an option to start the game again. • When asking for a new game, user is not
able to enter anymore keys until he confirms.

---

# 22.4 - Race

We will create a fun game that lets 2 players race against each other.

Things to think about

- We need to update a player’s position by moving the ‘active’ class from one
  ‘td’ to the next one. Of course there are other solutions to implement this
  game. Using a table and a CSS class is one option. But we will stick to this
  one.
- We need a way for JavaScript to update the board state. Create simple
  JavaScript functions that update’s a player’s position.
- To move the car’s do not use the click event. Use the ‘keyup’ event.
- Find a way to announce the winner of the race.
- Find a way to restart the game.

---

# 23.1 - Tickling Clock

Create a webpage that has a ticking clock with the hours, minutes and seconds.

---

# 23.2 - Stop Watch

Create a web page that has a stopwatch with a start and stop button.

- The stop watch should have milliseconds, seconds and minutes.
- When you click on the start button for the first time, the timer will start
  running (from 00:00:00 to 60:00:00 minutes)
- When you click on the stop button, it will freeze the time that elapsed from
  the start.
- When you click start again it will continue counting the time, from where it
  stopped.
