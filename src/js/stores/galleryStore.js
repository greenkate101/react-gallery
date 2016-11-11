//source for gallery items. 
//each gallery item will be represented by an obj 
//{url: 'http://'', likes: 0}
// we need a way to add gallery items
//we need a way to remove and like gallery items
//current state

//we also need a way to update any views that are listening for changes in our data.
//(eventemitter to emit the "update" event)

var EventEmitter = require('eventemitter3');
//actual source of our data


//new event emitter
var galleryStore = Object.create(EventEmitter.prototype);
EventEmitter.call(galleryStore);

var galleryItems= [
	{ id: 1, url: 'http://www.loumacalusoauthor.com/wp-content/uploads/2016/02/real-penquin.jpg', likes: 0 }
];

galleryStore.add = function (url) {
	galleryItems.push({ 
		id: Math.random(),
		url: url, 
		likes: 0,
	});
	galleryStore.emit('update');
};

galleryStore.remove = function (id) {
	var galleryItem;
	for (var i = 0; i < galleryItems.length; i++) {
		if(galleryItems[i].id === id) {
			galleryItem = galleryItems[i];
		}
	}
	var index = galleryItems.indexOf(galleryItem);
	galleryItems.splice(index, 1);
	this.emit('update');
};

galleryStore.like = function (id) {
	var galleryItem;
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].id === id) {
			galleryItem = galleryItems[i]
		} 
	}
	galleryItem.likes += 1
     

	this.emit('update');
};


 window.galleryStore = galleryStore;

module.exports = galleryStore;