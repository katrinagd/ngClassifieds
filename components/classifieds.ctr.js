(function(){
	"use strict";
	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope) {

		$scope.classifieds = [
		{
			"id":"1",
			"title":"Bamboo short sleeve dress with blommer",
			"description":"A line shaped dress with matching bloomer is made of soft bamboo rayon fabric. Features: Snaps at the back neck for easy dressing, Contract color and print on the neckline, Matching bloomer to cover the diaper.",
			"price":29.00,
			"posted":"2016-03-01",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Toddler girl",
			"Dress"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2016/01/short-sleeve-dress-pink-365x365.jpg",
			"views": 213             	
		},
		{
			"id":"2",
			"title":"Bamboo Knot Hat",
			"description":"This super soft hat will keep your little ones cool in the summer and warm in the winter-“think” nature’s heating and cooling system. As an eco-friendly and sustainable fabric, bamboo also contains a natural UV protection function.",
			"price":12.00,
			"posted":"2016-02-29",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Baby",
			"Hat"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2016/01/wf3005_hat_peacock_1200-365x365.jpg",
			"views": 105            	
		},
		{
			"id":"3",
			"title":"Bamboo Short Sleeve Triangle Print Tee",
			"description":"Crew neck t-shirt is made of soft bamboo rayon fabric. Perfectly matching with Silkberry baby bamboo shorts.",
			"price":12.00,
			"posted":"2016-02-28",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Baby",
			"Top"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2016/01/wf4078_tee_peacock_1200-365x365.jpg",
			"views": 29             	
		},
		{
			"id":"4",
			"title":"Bamboo Shorts",
			"description":"Fresh and natural colored shorts can be worn everyday in the summer. Theses stretchy, ultra soft jersey knit shorts allow for ease of movement and extra comfort. They can be worn alone or underneath a favorite skirt or dress. ",
			"price":12.00,
			"posted":"2016-02-28",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Baby",
			"Pants"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2013/06/bsh_001-365x365.jpg",
			"views": 45           	
		},
		{
			"id":"5",
			"title":"Bamboo Jersey Pant",
			"description":"This stretchy, ultra soft jersey knit pant allows for ease of movement and extra comfort. High waist with longer back rise allows enough space even for cloth diapers. High quality elastic waistband for easy on and off changing. ",
			"price":12.00,
			"posted":"2016-02-28",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Baby",
			"Pants"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2015/07/bamboo_pants_pistachio-365x365.jpg",
			"views": 40           	
		},
		{
			"id":"6",
			"title":"Bamboo Long Sleeve Tee",
			"description":"Easily mix and match with Silkberry Baby bamboo jersey pant.",
			"price":19.00,
			"posted":"2016-02-28",
			"contact":{
				"name": "John Doe",
				"phone": "(888) 888-8888",
				"email": "johndoe@gmail.com"
			},
			"categories":[
			"Baby",
			"Pants"
			],
			"image": "http://silkberrybaby.com/store/wp-content/uploads/2015/07/bamboo_tee_stripe-365x365.jpg",
			"views": 55           	
		},
		],
		$scope.message = "Hello World!!!"
	});
})();