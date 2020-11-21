// COND 1, ICONIC
var videosA = [
  "videos/cond1_iconic_boat1.mp4",
  "videos/cond1_iconic_boat2.mp4",
  "videos/cond1_iconic_car1.mp4",
  "videos/cond1_iconic_car2.mp4",
  "videos/cond1_iconic_chair1.mp4",
  "videos/cond1_iconic_chair2.mp4",
  "videos/cond1_iconic_fox1.mp4",
  "videos/cond1_iconic_fox2.mp4",
  "videos/cond1_iconic_sandbox1.mp4",
  "videos/cond1_iconic_sandbox2.mp4",
  "videos/cond1_iconic_snake1.mp4",
  "videos/cond1_iconic_snake2.mp4",
  "videos/cond1_iconic_table1.mp4",
  "videos/cond1_iconic_table2.mp4",
  "videos/cond1_iconic_tub1.mp4",
  "videos/cond1_iconic_tub2.mp4"
]

// COND 1, AMBIGUOUS
var videosB = [
  "videos/cond1_amb_bib1.mp4",
  "videos/cond1_amb_bib2.mp4",
  "videos/cond1_amb_boots1.mp4",
  "videos/cond1_amb_boots2.mp4",
  "videos/cond1_amb_butterfly1.mp4",
  "videos/cond1_amb_butterfly2.mp4",
  "videos/cond1_amb_button1.mp4",
  "videos/cond1_amb_button2.mp4",
  "videos/cond1_amb_eye1.mp4",
  "videos/cond1_amb_eye2.mp4",
  "videos/cond1_amb_flag1.mp4",
  "videos/cond1_amb_flag2.mp4",
  "videos/cond1_amb_lightning1.mp4",
  "videos/cond1_amb_lightning2.mp4",
  "videos/cond1_amb_pizza1.mp4",
  "videos/cond1_amb_pizza2.mp4"]

var ver1_stim = videosA.concat(videosB)
var ver2_stim = videosB.concat(videosA)

// COND 2, ICONIC
var videosC = [
  "videos/cond2_iconic_bib1.mp4",
  "videos/cond2_iconic_bib2.mp4",
  "videos/cond2_iconic_boots1.mp4",
  "videos/cond2_iconic_boots2.mp4",
  "videos/cond2_iconic_butterfly1.mp4",
  "videos/cond2_iconic_butterfly2.mp4",
  "videos/cond2_iconic_button1.mp4",
  "videos/cond2_iconic_button2.mp4",
  "videos/cond2_iconic_eye1.mp4",
  "videos/cond2_iconic_eye2.mp4",
  "videos/cond2_iconic_flag1.mp4",
  "videos/cond2_iconic_flag2.mp4",
  "videos/cond2_iconic_lightning1.mp4",
  "videos/cond2_iconic_lightning2.mp4",
  "videos/cond2_iconic_pizza1.mp4",
  "videos/cond2_iconic_pizza2.mp4"
]

// COND 2, AMBIGUOUS
var videosD = [
  "videos/cond2_amb_boat1.mp4",
  "videos/cond2_amb_boat2.mp4",
  "videos/cond2_amb_car1.mp4",
  "videos/cond2_amb_car2.mp4",
  "videos/cond2_amb_chair1.mp4",
  "videos/cond2_amb_chair2.mp4",
  "videos/cond2_amb_fox1.mp4",
  "videos/cond2_amb_fox2.mp4",
  "videos/cond2_amb_sandbox1.mp4",
  "videos/cond2_amb_sandbox2.mp4",
  "videos/cond2_amb_snake1.mp4",
  "videos/cond2_amb_snake2.mp4",
  "videos/cond2_amb_table1.mp4",
  "videos/cond2_amb_table2.mp4",
  "videos/cond2_amb_tub1.mp4",
  "videos/cond2_amb_tub2.mp4"
]

var ver3_stim = videosC.concat(videosD)
var ver4_stim = videosD.concat(videosC)

var palAudio = ['audio/instructions_gotogether.mp3', 'audio/instructions_keepgoing.wav', 'audio/instructions_waitfull.mp3', 'audio/instructions_whichpictures.wav', 'audio/instructions_newgame.mp3', 'audio/done.mp3']

var imagesA = [
  'pal_images/boat.jpg',
  'pal_images/car.jpg',
  'pal_images/chair.jpg',
  'pal_images/fox.jpg',
  'pal_images/sandbox.jpg',
  'pal_images/snake.jpg',
  'pal_images/table.jpg',
  'pal_images/tub.jpg',
  'pal_images/symbol7.jpg',
  'pal_images/symbol2.jpg',
  'pal_images/symbol3.jpg',
  'pal_images/symbol8.jpg',
  'pal_images/symbol1.jpg',
  'pal_images/symbol4.jpg',
  'pal_images/symbol5.jpg',
  'pal_images/symbol6.jpg'
]

var imagesB = [
  'pal_images/bib.jpg',
  'pal_images/boots.jpg',
  'pal_images/butterfly.jpg',
  'pal_images/button.jpg',
  'pal_images/eye.jpg',
  'pal_images/flag.jpg',
  'pal_images/lightning.jpg',
  'pal_images/pizza.jpg',
  'pal_images/symbol12.jpg',
  'pal_images/symbol9.jpg',
  'pal_images/symbol15.jpg',
  'pal_images/symbol10.jpg',
  'pal_images/symbol13.jpg',
  'pal_images/symbol16.jpg',
  'pal_images/symbol11.jpg',
  'pal_images/symbol14.jpg'
]

var imagesC = [
  'pal_images/bib.jpg',
  'pal_images/boots.jpg',
  'pal_images/butterfly.jpg',
  'pal_images/button.jpg',
  'pal_images/eye.jpg',
  'pal_images/flag.jpg',
  'pal_images/lightning.jpg',
  'pal_images/pizza.jpg',
  'pal_images/symbol16.jpg',
  'pal_images/symbol10.jpg',
  'pal_images/symbol14.jpg',
  'pal_images/symbol15.jpg',
  'pal_images/symbol9.jpg',
  'pal_images/symbol11.jpg',
  'pal_images/symbol13.jpg',
  'pal_images/symbol12.jpg'
]

var imagesD = [
  'pal_images/boat.jpg',
  'pal_images/car.jpg',
  'pal_images/chair.jpg',
  'pal_images/fox.jpg',
  'pal_images/sandbox.jpg',
  'pal_images/snake.jpg',
  'pal_images/table.jpg',
  'pal_images/tub.jpg',
  'pal_images/symbol3.jpg',
  'pal_images/symbol4.jpg',
  'pal_images/symbol6.jpg',
  'pal_images/symbol1.jpg',
  'pal_images/symbol2.jpg',
  'pal_images/symbol5.jpg',
  'pal_images/symbol8.jpg',
  'pal_images/symbol7.jpg'
]
