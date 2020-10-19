/* 1. PAL: teaching blocks */

  /* Randomly choose one version of four */
  var version = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4],1)[0];

  if (version <= 2) {
    var conditionStimuli = cond1;
    var testImagesAmb = cond1ImagesA; // these are used in testing blocks
    var testImagesIco = cond1ImagesB;
  }
  else if (version >= 3) {
    var conditionStimuli = cond2;
    var testImagesIco = cond2ImagesA;
    var testImagesAmb = cond2ImagesB;
  }

  /* Create timeline variables of video and audio for ambiguous and iconic pairs. */
  var ambTeachStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = conditionStimuli[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    ambTeachStimuli[i] = {
      video: [conditionStimuli[i]], icoamb: vidPair, obj: vidObject, dir: vidNumber}, + "\n";
  }

  var icoTeachStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = conditionStimuli[i+16];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    icoTeachStimuli[i] = {
      video: [conditionStimuli[i+16]], icoamb: vidPair, obj: vidObject, dir: vidNumber}, + "\n";
  }

  /* Video-keyboard trial for PAL task */
  var palVideoKeyboard = {
      type: 'video-keyboard-response',
      sources: jsPsych.timelineVariable('video'),
      stimulus: 'audio/teachingaudio.mp3',
      width: 640,
      //start: 5000, // video starts at 1 second (after teaching audio) **this doesn't work?
      trial_duration: 3500, // trial duration in ms
      response_ends_trial: false, // trial continues for trial_duration regardless of keyboard response
      data: {
        version: version,
        video: jsPsych.timelineVariable('video'),
        ico_amb: jsPsych.timelineVariable('icoamb'),
        object: jsPsych.timelineVariable('obj'),
        direction: jsPsych.timelineVariable('dir'),
        block: 'teach',
        task: 'pal'
      }
  };

  /* Procedure for ambiguous pairs teaching */
  var amb_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: ambTeachStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs teaching */
  var ico_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: icoTeachStimuli,
    randomize_order: true
  };

/* 2. PAL: testing blocks */

  /* Create timeline variable of image and buttons for ambiguous pairs. */
  var ambTestStimuli = [];
  for (i = 0; i < 8; i++) {
    // identify target symbol
    var targetSym = testImagesAmb[i+8]
    // select random symbol
    var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
    // if same as target symbol, repeat
    if (randomNum = i+8) {
      var newNum = [8,9,10,11,12,13,14,15];
      newNum.splice(randomNum-8, 1);
      var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
    }
    // list of target and random symbols
    var ambSet = [targetSym, testImagesAmb[randomNum]];
    var ambSet = jsPsych.randomization.shuffle(ambSet);
    ambTestStimuli[i] = {
      image: testImagesAmb[i], set: ambSet, target: targetSym, block: 'sort'}, + "\n";
  }

  /* Create timeline variable of image and buttons for iconic pairs. */
  var icoTestStimuli = [];
  for (i = 0; i < 8; i++) {
    // identify target symbol
    var targetSym = testImagesIco[i+8]
    // select random symbol
    var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
    // if same as target symbol, repeat
    if (randomNum = i+8) {
      var newNum = [8,9,10,11,12,13,14,15];
      newNum.splice(randomNum-8, 1);
      var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
    }
    // list of target and random symbols
    var icoSet = [targetSym, testImagesIco[randomNum]];
    var icoSet = jsPsych.randomization.shuffle(icoSet);
    icoTestStimuli[i] = {
      image: testImagesIco[i], set: icoSet, target: targetSym, block: 'sort'}, + "\n";
  }



  var icoTestStimuli = [];
  for (i = 0; i < 8; i++) {
    // id target symbol
    var targetSymbol = testImagesIco[i+8]
    // select random symbol
    var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
    // if same as target symbol, repeat
    if (randomNum = i+8) {
      var newNum = [8,9,10,11,12,13,14,15];
      newNum.splice(randomNum-8, 1);
      var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
    }
    var icoSet = [targetSymbol, testImages2[randomNum]];
    var icoSet = jsPsych.randomization.shuffle(icoSet);
    icoTestStimuli[i] = {
      image: testImages2[i], set: icoSet, target: targetSymbol, block: 'sort'}, + "\n";
  }

  /* Image-button trial */
  var testImageButton = {
    type: 'image-button-response',
    stimulus: jsPsych.timelineVariable('image'),
    choices: jsPsych.timelineVariable('set'),
    button_html: stimButton,
    data: {
      choices: jsPsych.timelineVariable('set'),
      image: jsPsych.timelineVariable('image'),
      target: jsPsych.timelineVariable('target'),
      version: version,
      block: 'sort',
      task: 'pal'
    },
    on_finish: function(data){
      var acc = false;
      var indexNumber = data.button_pressed;
      if (data.target == data.choices[indexNumber]) {
        acc = true
      }
      data.accuracy = acc;
    }
  };

  /* Procedure for ambiguous pairs sorting */
  var amb_sort_procedure = {
    timeline: [fixation, testImageButton],
    timeline_variables: ambTestStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs sorting */
  var ico_sort_procedure = {
    timeline: [fixation, testImageButton],
    timeline_variables: icoTestStimuli,
    randomize_order: true
  };
