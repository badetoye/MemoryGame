
# Memory Card Game

## Table of Contents

* [Instructions](#instructions)
* [Implementation](#implementation)
* [Responsiveness](#responsiveness)
* [Reference](#reference)

## Instructions
* The player flips one card over to reveal its underlying symbol.
* A *timer* will start immediately after the first card is clicked/flipped to capture the total time it takes the player to complete the game.
* While the first card is still flipped, the player then turns over a second card, trying to find the corresponding card with the same symbol.
* A counter  starts to keep the *moves* it takes the player to finish the game.
* If the symbol on the first card is the same as the symbol on the second card, both cards will remain flipped open.
* If the symbols do not match, both cards are flipped face down.
* The player will continue this exercise until all the cards are matched.
* The *rating star* will always reduce at every *5 moves* the player makes.
* This will continue until the player is able to flip all the cards.
* Once all the cards are successfully flipped, a congratulatory message (_modal_) will be displayed  to congratulate the player for a successful completion of the game.
* The modal will contain the summary of the game information like the total time it take the player to complete the game, the number of moves the player made  to complete the game, and finally, the player's remaining star(s) .

## Implementation
The starter files for the project was provided. The given starter files comprises *HTML*, *CSS*, and *JavaScript* 

However, I chose to work on the project from the scratch.

## Responsiveness

The project is responsive in mobile devices and as well as in tablets and computers of different screen sizes.

## Reference
* [Conditional (ternary) Operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [Destructuring assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Arrow functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Array.from() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [CSS Grid - Wes Bos](https://cssgrid.io/)
* [Markdown - Web](https://masteringmarkdown.com/)
* [CSS 2D Transforms - W3school](https://www.w3schools.com/css/css3_2dtransforms.asp)
