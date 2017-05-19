// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'California', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'An Author',			// this is the AUTHOR place in the class
				'hollywood.jpg',	// this is the IMAGE place in the class
				'' // this is the BODY place in the class
				),

			new Post(
				'Fiji',
				'https://vuejs.org',
				'Sammie Author',
				'fiji.jpg', // this is a local image in the same folder as the js script
				''
				),

			new Post(
				'Paris',
				'https://google.com',
				'Bob Author',
				'paris.jpg',
				''
				),

			new Post(
				'Bahamas',
				'https://vuejs.org',
				'Jane Author',
				'bahamas.jpg',
				''
				),

			new Post(
				'New York',
				'https://google.com',
				'Anptoght Author',
				'newyork.jpg',
				''
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



