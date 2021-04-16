import { authors } from '../data/authors';
import { books } from '../data/books';
import { reviews } from '../data/reviews';

export const resolvers = {
	Query: {
		ping() {
			return 'pong';
		},

		books() {
			return books;
		},

		authors() {
			return authors;
		},

		reviews() {
			return reviews;
		},
	},
	Review: {
		book: (review) => books.find((book) => book.id === review.book),
	},
	Author: {
		books: (parent) => books.filter((book) => book.author === parent.id),
	},
	Book: {
		author: (parent /*, args, ctx, info*/) => {
			// console.log('Parent: ', parent);
			// console.log('Arguments: ', args);
			// console.log('Contex: ', ctx);
			// console.log('Information: ', info);

			return authors.find((author) => author.id === parent.author);
		},
		reviews: (parent) =>
			reviews.filter((review) => review.book === parent.id),
	},
};
