/* 1. INTRO BLOCK */

var introImages = [
  'pol_images/elephant.jpg', 'pol_images/kite.jpg', 'pol_images/broom.jpg', 'pol_images/bus.jpg',
  'pol_images/sandwich.jpg', 'pol_images/shoe.jpg', 'pol_images/teddybear.jpg', 'pol_images/stool.jpg',
  'pol_images/mouth.jpg', 'pol_images/eye.jpg', 'pol_images/ear.jpg', 'pol_images/nose.jpg',
  'pol_images/calf.jpg', 'pol_images/sheep.jpg', 'pol_images/duck.jpg', 'pol_images/horse.jpg',
  'pol_images/rose.jpg', 'pol_images/pumpkin.jpg', 'pol_images/ball.jpg', 'pol_images/parrot.jpg',
  'pol_images/shoulder.jpg', 'pol_images/hand.jpg', 'pol_images/foot.jpg', 'pol_images/neck.jpg',
  'pol_images/toy.jpg', 'pol_images/pizza.jpg', 'pol_images/starfish.jpg', 'pol_images/flower.jpg',
  'pol_images/lamb.jpg', 'pol_images/wheel.jpg', 'pol_images/bib.jpg', 'pol_images/banana.jpg'
]

var introTargets = [
  'pol_images/bus.jpg',
  'pol_images/shoe.jpg',
  'pol_images/mouth.jpg',
  'pol_images/duck.jpg',
  'pol_images/ball.jpg',
  'pol_images/foot.jpg',
  'pol_images/flower.jpg',
  'pol_images/banana.jpg'
]

var introAudioPre = ['audio/busrecording1.mp3','audio/shoerecording1.mp3','audio/mouthrecording1.mp3','audio/duckrecording1.mp3','audio/ballrecording1.mp3','audio/footrecording1.mp3','audio/flowerrecording1.mp3','audio/bananarecording1.mp3']
var introAudioPost = ['audio/busrecording2.mp3','audio/shoerecording2.mp3','audio/mouthrecording2.mp3','audio/duckrecording2.mp3','audio/ballrecording2.mp3','audio/footrecording2.mp3','audio/flowerrecording2.mp3','audio/bananarecording2.mp3']
var introAudioFeedback = ['audio/answer-correct.mp3','audio/answer-error.mp3', 'audio/instructions_practice.mp3', 'audio/instructions_waitpicture.mp3']

/* 2. CHOOSE BLOCK */

/* Paths to 54 distractors */
var chooseDistractors = ['pol_images/distractor1.jpg', 'pol_images/distractor2.jpg', 'pol_images/distractor3.jpg', 'pol_images/distractor4.jpg', 'pol_images/distractor5.jpg', 'pol_images/distractor6.jpg', 'pol_images/distractor7.jpg', 'pol_images/distractor8.jpg', 'pol_images/distractor9.jpg', 'pol_images/distractor10.jpg', 'pol_images/distractor11.jpg', 'pol_images/distractor12.jpg', 'pol_images/distractor13.jpg', 'pol_images/distractor14.jpg', 'pol_images/distractor15.jpg', 'pol_images/distractor16.jpg', 'pol_images/distractor17.jpg', 'pol_images/distractor18.jpg', 'pol_images/distractor19.jpg', 'pol_images/distractor20.jpg', 'pol_images/distractor21.jpg', 'pol_images/distractor22.jpg', 'pol_images/distractor23.jpg', 'pol_images/distractor24.jpg', 'pol_images/distractor25.jpg', 'pol_images/distractor26.jpg', 'pol_images/distractor27.jpg', 'pol_images/distractor28.jpg', 'pol_images/distractor29.jpg', 'pol_images/distractor30.jpg', 'pol_images/distractor31.jpg', 'pol_images/distractor32.jpg', 'pol_images/distractor33.jpg', 'pol_images/distractor34.jpg', 'pol_images/distractor35.jpg', 'pol_images/distractor36.jpg', 'pol_images/distractor37.jpg', 'pol_images/distractor38.jpg', 'pol_images/distractor39.jpg', 'pol_images/distractor40.jpg', 'pol_images/distractor41.jpg', 'pol_images/distractor42.jpg', 'pol_images/distractor43.jpg', 'pol_images/distractor44.jpg', 'pol_images/distractor45.jpg', 'pol_images/distractor46.jpg', 'pol_images/distractor47.jpg', 'pol_images/distractor48.jpg', 'pol_images/distractor49.jpg', 'pol_images/distractor50.jpg', 'pol_images/distractor51.jpg', 'pol_images/distractor52.jpg', 'pol_images/distractor53.jpg', 'pol_images/distractor54.jpg']

/* Paths to 18 targets */
var chooseTargets = ['pol_images/hornA.jpg', 'pol_images/capB.jpg', 'pol_images/hornC.jpg', 'pol_images/sheetC.jpg', 'pol_images/hornB.jpg', 'pol_images/collarC.jpg', 'pol_images/glassesB.jpg', 'pol_images/capA.jpg', 'pol_images/balloonA.jpg', 'pol_images/balloonB.jpg', 'pol_images/sheetA.jpg', 'pol_images/collarB.jpg', 'pol_images/sheetB.jpg', 'pol_images/collarA.jpg', 'pol_images/glassesC.jpg', 'pol_images/glassesA.jpg', 'pol_images/capC.jpg', 'pol_images/balloonC.jpg']

/* Paths to 18 audio recordings */
var chooseAudio = ['audio/hornrecording.mp3', 'audio/caprecording.mp3', 'audio/hornrecording.mp3', 'audio/sheetrecording.mp3', 'audio/hornrecording.mp3', 'audio/collarrecording.mp3', 'audio/glassesrecording-whichis.mp3', 'audio/caprecording.mp3', 'audio/balloonrecording.mp3', 'audio/balloonrecording.mp3', 'audio/sheetrecording.mp3', 'audio/collarrecording.mp3', 'audio/sheetrecording.mp3', 'audio/collarrecording.mp3', 'audio/glassesrecording-whichis.mp3', 'audio/glassesrecording-whichis.mp3', 'audio/caprecording.mp3', 'audio/balloonrecording.mp3']
