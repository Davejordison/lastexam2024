/*
Problem Description
You are provided with a list of books.
Each book has a title, author, and year of publication.
Your task is to sort this list of books based on a custom sorting criterion:

Primary Sort: Sort books by the year of publication in ascending order.
Secondary Sort: If two books have the same year of publication,
sort them by the author's name in alphabetical order.

Tertiary Sort: If two books have the same year of publication
and the same author's name, sort them by the title in alphabetical order.

Requirements
Implement a function sortBooks(books)
that takes an array of book objects and returns a new array sorted
based on the above criteria.  

Each book object will have the following structure:
{
  title: string,
  author: string,
  year: number
}
*/
export function sortBooks(books) {}

/*
Problem Description
You need to implement a function calculateHandValue(hand) that calculates the value
of a given hand in a game of Blackjack.
The function should take into account that Aces can be worth either 1 or 11 points.

Rules
Number cards (2-10) are worth their face value.
Face cards (Jack, Queen, King) are each worth 10 points.
Aces can be worth either 1 or 11 points.
The function should choose the value that gives the highest score without exceeding 21.

Requirements
Implement the function calculateHandValue(hand)
that takes an array of strings representing the cards in the hand.
Write unit tests to verify the functionality of the calculateHandValue function.
*/
export function calculateHandValue(hand) {}
