/* Randomly choose one of two conditions */
  var ver = Math.floor((Math.random() * 2) + 1);

  if (ver == 1) {
    var palVideos = cond1Videos; // for teaching
    var palDistractors = cond1Distractors; // iconic distractors
    var palRandom = cond1Random; // random distractors
  } else if (ver == 2) {
    var palVideos = cond2Videos; // for teaching
    var palDistractors = cond2Distractors; // iconic distractors
    var palRandom = cond1Random; // random distractors
  }

/* Split numbers into 4 groups */
  var listNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var listNum = jsPsych.randomization.shuffle(listNum);

  var block1Num = [];
  for (i = 0; i < listNum.length/4; i++) {
    block1Num.push(i);
  }

  var block2Num = [];
  for (i = 0+listNum.length/4; i < listNum.length/2; i++) {
    block2Num.push(i);
  }

  var block3Num = [];
  for (i = 0+(listNum.length/2); i < listNum.length/4*3; i++) {
    block3Num.push(i);
  }

  var block4Num = [];
  for (i = 0+(listNum.length/4*3); i < listNum.length; i++) {
    block4Num.push(i);
  }

/* Split stimuli into 4 groups */
  var videosBlock1 = [];
  for (i = 0; i < 4; i++) {
    index = block1Num[i];
    videosBlock1[i] = {video: [palVideos[index]]}, + "\n";
  }

  var videosBlock2 = [];
  for (i = 4; i < 8; i++) {
    index = block2Num[i];
    videosBlock2[i] = {video: [palVideos[index]]}, + "\n";
  }

  var videosBlock3 = [];
  for (i = 8; i < 12; i++) {
    index = block3Num[i];
    videosBlock3[i] = {video: [palVideos[index]]}, + "\n";
  }

  var videosBlock4 = [];
  for (i = 12; i < 16; i++) {
    index = block4Num[i];
    videosBlock4[i] = {video: [palVideos[index]]}, + "\n";
  }

/* Split testing into 4 groups */
