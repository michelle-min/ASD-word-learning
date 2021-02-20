/* Randomly choose one of two conditions */
  var ver = Math.floor((Math.random() * 2) + 1);

  if (ver == 1) {
    var palVideos = cond1Videos; // for teaching
    var palObjects = cond1Objects; // for testing
    var palTarget = cond1Targets; // right answer
    var palDistractors = cond1Distractors; // distractors (for iconic)
  } else if (ver == 2) {
    var palVideos = cond2Videos; // for teaching
    var palObjects = cond2Objects; // for testing
    var palTarget = cond2Targets; // right answer
    var palDistractors = cond2Distractors; // distractors (for iconic)
  }

  // shuffle distractors (for ambiguous)
  var palRandom = cond1Random;
  var palRandom = jsPsych.randomization.shuffle(palRandom);

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

/* Split teaching stimuli into 4 groups */
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

/* Split testing stimuli into 4 groups */
  var choicesBlock1 = [];
  for (i = 0; i < 4; i++) {
    index = block1Num[i];

    // object
    var testedObject = palObjects[index];

    // target image
    var targetSym = palTarget[index];
    // nontarget image
    if (index < 8) {
      var nontargetSym = palDistractors[index]; // ambiguous target --> iconic distractor
    } else {
      var nontargetSym = palRandom[index-8]; // iconic target --> random distractor
    };
    // join into list (random order)
    var stimSet = jsPsych.randomization.shuffle([targetSym, nontargetSym]);

    // create timeline var
    choicesBlock1[i] = {
      image: testedObject, set: stimSet, target: targetSym, block: 'sort'}, + "\n";
  };




  //
  //
  // var choicesBlock1 = [];
  // for (i = 4; i < 8; i++) {
  //   index = block2Num[i];
  //   choicesBlock1[i] = {video: [palVideos[index]]}, + "\n";
  // }
  //
  // var videosBlock3 = [];
  // for (i = 8; i < 12; i++) {
  //   index = block3Num[i];
  //   videosBlock3[i] = {video: [palVideos[index]]}, + "\n";
  // }
  //
  // var videosBlock4 = [];
  // for (i = 12; i < 16; i++) {
  //   index = block4Num[i];
  //   videosBlock4[i] = {video: [palVideos[index]]}, + "\n";
  // }
