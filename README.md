# CSCI 445 Javescript Game: Cave Diver 
## The Fullstack Flapjacks: Lindsey Kartvedt, Charly Wollaston, and Salama Sissoko

![1](https://user-images.githubusercontent.com/22900759/131936247-18899576-c37c-4a26-9547-dfa696204412.jpg)
![2](https://user-images.githubusercontent.com/22900759/131936262-bb6a4138-bfc4-4d7a-ac88-f072e31e023c.jpg)
![3](https://user-images.githubusercontent.com/22900759/131936271-8ecf42ee-466f-4fa4-b4e9-55276a3edccd.jpg)
![4](https://user-images.githubusercontent.com/22900759/131936283-ee41c540-885d-48dd-99bb-dbc8ab880568.jpg)

#### Why our game is worth 100 points:
    Our Cave Diver game is worth 100 points because it meets all requirements. We properly structured our index page using HTML5 and the proper doctype 
	and canvas tag. Stylistic features are placed in appropriate external stylesheets. The game logic is complex enough to require a sufficient amount 
	of JavaScript. 
  
	  The game is fun to play as the user is able to move in all directions whilst attempting to avoid cave walls. Timed distance
	motivate the player to win and achieve a higher score and explore more of the cave.

###### What CSS3 features did you use? 
    Our game makes use of animations using the @keyframe rule, border-radius features, opacity, and a gradient. These CSS3 features allow for an animated
	welcome screen and a visually pleasing game.

###### Did you use any cool JavaScript libraries? 
    The JavaScript libraries used were anime.js. These allowed for aimations of our text.

###### What nifty features of your program were a bear to implement?
    One feature of our game is the "auto go" movement of the screen. This was difficult to implement as none of us had much experience with JavaScript functions.
	Manipulating the background walls to randomly generate and leave enough space for the diver to advance was another issue that had to be addressed. Another 
	issue faced was detecting collision between the diver and the cave walls. Initial attempts of checking the pixel color the diver touched failed due to 
	security measures taken by web browsers. In other words it was not allowed to call the function getImageData() on the files used on the canvases. The way 
	around this was to host all of the game images on imgur.
  
  NOTE TO GRADER:
	Images are being hosted on imgur. This compresses the images. The grader will need to have internet connection to play the game.
	Diver2's uper bound is also off by a few pixels.
