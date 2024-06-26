import assert from "node:assert";
import { test } from "node:test";
import { sortBooks } from "./index.js";

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "Animal Farm", author: "George Orwell", year: 1945 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const sortedBooks = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Animal Farm", author: "George Orwell", year: 1945 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

test("sortBooks correctly sorts the books", () => {
  assert.deepStrictEqual(sortBooks(books), sortedBooks);
});

test("sortBooks does not mutate the original array", () => {
  const booksCopy = [...books];
  sortBooks(books);
  assert.deepStrictEqual(books, booksCopy);
});

test("sortBooks correctly sorts books with the same year but different authors", () => {
  const booksSameYear = [
    { title: "Book A", author: "Author Z", year: 2000 },
    { title: "Book B", author: "Author Y", year: 2000 },
    { title: "Book C", author: "Author X", year: 2000 },
  ];

  const sortedBooksSameYear = [
    { title: "Book C", author: "Author X", year: 2000 },
    { title: "Book B", author: "Author Y", year: 2000 },
    { title: "Book A", author: "Author Z", year: 2000 },
  ];

  assert.deepStrictEqual(sortBooks(booksSameYear), sortedBooksSameYear);
});

test("sortBooks correctly sorts books with the same year and author but different titles", () => {
  const booksSameYearAuthor = [
    { title: "Book C", author: "Author A", year: 2000 },
    { title: "Book B", author: "Author A", year: 2000 },
    { title: "Book A", author: "Author A", year: 2000 },
  ];

  const sortedBooksSameYearAuthor = [
    { title: "Book A", author: "Author A", year: 2000 },
    { title: "Book B", author: "Author A", year: 2000 },
    { title: "Book C", author: "Author A", year: 2000 },
  ];

  assert.deepStrictEqual(
    sortBooks(booksSameYearAuthor),
    sortedBooksSameYearAuthor
  );
});

test("sortBooks correctly handles an empty array", () => {
  const emptyBooks = [];
  assert.deepStrictEqual(sortBooks(emptyBooks), []);
});

test("sortBooks correctly handles a single book", () => {
  const singleBook = [
    { title: "The Only Book", author: "The Only Author", year: 2000 },
  ];
  assert.deepStrictEqual(sortBooks(singleBook), singleBook);
});
