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
  var exposureList1 = [];
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
    // create timeline var for testing (image-button trials)
    choicesBlock1[i] = {
      image: testedObject, set: stimSet, target: targetSym, block: 'sort'}, + "\n";
    // add list for exposure (audio-button trials)
    var exposureList1 = exposureList1.concat(stimSet);
  };

  var choicesBlock2 = [];
  var exposureList2 = [];
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
    // create timeline var for testing (image-button trials)
    choicesBlock2[i] = {
      image: testedObject, set: stimSet, target: targetSym, block: 'sort'}, + "\n";
    // add to list for exposure (audio-button trials)
    var exposureList2 = exposureList2.concat(stimSet);
  };


/* Timeline variable for exposure trials */
  // shuffle all images (targets + distractors)
  var exposureList1 = jsPsych.randomization.shuffle(exposureList1);
  var exposureSet1 = [];
  var exposureBlock1 = [];
  var exposureList2 = jsPsych.randomization.shuffle(exposureList2);
  var exposureSet2 = [];
  var exposureBlock2 = [];

  // shuffle audio
  var palExposureAudio = jsPsych.randomization.shuffle(palExposureAudio);
  // add a fourth audio
  var palExposureAudio = palExposureAudio.concat(palExposureAudio[0]);

  for (i = 0; i < 4; i++) {
    exposureSet1 = [exposureList1[4*i], exposureList1[4*i+1], exposureList1[4*i+2], exposureList1[4*i+3]];
    exposureBlock1[i] = {
      set: exposureSet1,
      audio: palExposureAudio[i]}, + "\n";
    };

  for (i = 0; i < 4; i++) {
    exposureSet2 = [exposureList2[4*i], exposureList2[4*i+1], exposureList2[4*i+2], exposureList2[4*i+3]];
    exposureBlock2[i] = {
      set: exposureSet2,
      audio: palExposureAudio[i]}, + "\n";
    };
