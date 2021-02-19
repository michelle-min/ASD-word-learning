/* Randomly choose one of two conditions */
  var ver = Math.floor((Math.random() * 2) + 1);

  if (ver == 1) {
    var palVideos = cond1Videos; // for teaching
    var palDistractors = cond1Distractors; // iconic distractors
    var palRandom = cond1Random; // random distractors
  } else if (ver == 2) {
    var palVideos = cond2Videos; // for teaching
    var palDistractors = cond2Distractors; // iconic distractors
    var palRandom = cond2Random; // random distractors
  }

/* Split numbers into 4 groups */
  var listNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  var listNum = jsPsych.randomization.shuffle(listNum);

  var block1Num = [];
  for (i = 0; i < listNum.length/4; i++) {
    block1Num.append(i);
  }

  var block2Num = [];
  for (i = 0+listNum.length/4; i < listNum.length/2; i++) {
    block2Num.append(i);
  }

  var block3Num = [];
  for (i = 0+(listNum.length/2); i < listNum.length/4*3; i++) {
    block3Num.append(i);
  }

  var block4Num = [];
  for (i = 0+(listNum.length/4*3); i < listNum.length; i++) {
    block4Num.append(i);
  }

/* Split stimuli into 4 groups */
  var videosBlock1 = [];
  for (i = 0; i < 6; i++) {
    videosBlock1[i] = {video: [conditionStimuli[i]]}, + "\n";
  }

  var videosBlock2 = [];
  for (i = 6; i < 12; i++) {
    videosBlock2[i] = {video: [conditionStimuli[i+6]]}, + "\n";
  }

  var videosBlock3 = [];
  for (i = 12; i < 18; i++) {
    videosBlock3[i] = {video: [conditionStimuli[i+12]]}, + "\n";
  }

  var videosBlock4 = [];
  for (i = 18; i < 24; i++) {
    videosBlock4[i] = {video: [conditionStimuli[i+18]]}, + "\n";
  }
