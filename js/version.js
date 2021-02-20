/* Randomly choose one of two conditions */
  var ver = Math.floor((Math.random() * 2) + 1);

  if (ver == 1) {
    var palVideos = cond1Videos; // for teaching
    var palObjects = cond1Objects; // for testing
    var palTargets = cond1Targets; // right answer
    var palDistractors = cond1Distractors; // distractors (for iconic)
  } else if (ver == 2) {
    var palVideos = cond2Videos; // for teaching
    var palObjects = cond2Objects; // for testing
    var palTargets = cond2Targets; // right answer
    var palDistractors = cond2Distractors; // distractors (for iconic)
  }

  // shuffle distractors (for ambiguous)
  var palRandom = cond1Random;
  var palRandom = jsPsych.randomization.shuffle(palRandom);

/* Split numbers into 4 groups */
  var listNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var listNum = jsPsych.randomization.shuffle(listNum);

  var block1Num = [];
  for (i = 0; i < 8; i++) {
    block1Num.push(listNum[i]);
  }

  var block2Num = [];
  for (i = 8; i < 16; i++) {
    block2Num.push(listNum[i]);
  }

/* Split teaching stimuli into 2 groups */
  var videosBlock1 = [];
  for (i = 0; i < 8; i++) {
    index = block1Num[i];
    videosBlock1[i] = {video: [palVideos[index]]}, + "\n";
  }

  var videosBlock2 = [];
  for (i = 0; i < 8; i++) {
    index = block2Num[i];
    videosBlock2[i] = {video: [palVideos[index]]}, + "\n";
  }

/* Split testing stimuli into 4 groups */
  var choicesBlock1 = [];
  for (i = 0; i < 8; i++) {
    index = block1Num[i];
    // object
    var testedObject = palObjects[index];
    // target image
    var targetSym = palTargets[index];
    // nontarget image
    if (index < 8) {
      var nontargetSym = palDistractors[index]; // ambiguous target --> iconic distractor
    } else {
      var nontargetSym = palRandom[index-8]; // iconic target --> random distractor
    };
    // join images into list (random order)
    var stimSet = jsPsych.randomization.shuffle([targetSym, nontargetSym]);
    // create timeline var
    choicesBlock1[i] = {
      image: testedObject, set: stimSet, target: targetSym, block: 'sort'}, + "\n";
  };

  var choicesBlock2 = [];
  for (i = 0; i < 8; i++) {
    index = block2Num[i];
    // object
    var testedObject = palObjects[index];
    // target image
    var targetSym = palTargets[index];
    // nontarget image
    if (index < 8) {
      var nontargetSym = palDistractors[index]; // ambiguous target --> iconic distractor
    } else {
      var nontargetSym = palRandom[index-8]; // iconic target --> random distractor
    };
    // join images into list (random order)
    var stimSet = jsPsych.randomization.shuffle([targetSym, nontargetSym]);
    // create timeline var
    choicesBlock2[i] = {
      image: testedObject, set: stimSet, target: targetSym, block: 'sort'}, + "\n";
  };
