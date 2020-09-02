/* 1. PAL: teaching blocks */

  /* Randomly choose a version for PAL stimuli condition */
  var version = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4],1)[0];

  if (version <= 2) {
    var conditionStimuli = cond1;
    var freeSortImages1 = imagesA;
    var freeSortImages2 = imagesB;
  }
  else if (version >= 3) {
    var conditionStimuli = cond2;
    var freeSortImages1 = imagesB;
    var freeSortImages2 = imagesA;
  }

  /* Create timeline variables of video and audio for ambiguous and iconic pairs. */
  var ambStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = conditionStimuli[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    ambStimuli[i] = {
      video: [conditionStimuli[i]], icoamb: vidPair, obj: vidObject, dir: vidNumber}, + "\n";
  }

  var icoStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = conditionStimuli[i+16];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    icoStimuli[i] = {
      video: [conditionStimuli[i+16]], icoamb: vidPair, obj: vidObject, dir: vidNumber}, + "\n";
  }

  /* Video-keyboard trial for PAL task */
  var palVideokeyboard = {
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
    timeline: [fixation, palVideokeyboard],
    timeline_variables: ambStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs teaching */
  var ico_teach_procedure = {
    timeline: [fixation, palVideokeyboard],
    timeline_variables: icoStimuli,
    randomize_order: true
  };

/* 2. PAL: free sort */

  /* Create timeline variables of video and audio for ambiguous and iconic pairs. */
  var ambSortStimuli = [];
  for (i = 0; i < 8; i++) {
    // id target symbol
    var targetSymbol = freeSortImages1[i+8]
    // select random symbol
    var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
    // if same as target symbol, repeat
    if (randomNum = i+8) {
      var newNum = [8,9,10,11,12,13,14,15];
      newNum.splice(randomNum-8, 1);
      var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
    }
    var icoChoices = [targetSymbol, freeSortImages1[randomNum]];
    var icoChoices = jsPsych.randomization.shuffle(icoChoices);
    ambSortStimuli[i] = {
      image: freeSortImages1[i], choices: icoChoices, target: targetSymbol, block: 'sort'}, + "\n";
  }

  var icoSortStimuli = [];
  for (i = 0; i < 8; i++) {
    // id target symbol
    var targetSymbol = freeSortImages2[i+8]
    // select random symbol
    var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
    // if same as target symbol, repeat
    if (randomNum = i+8) {
      var newNum = [8,9,10,11,12,13,14,15];
      newNum.splice(randomNum-8, 1);
      var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
    }
    var icoChoices = [targetSymbol, freeSortImages2[randomNum]];
    var icoChoices = jsPsych.randomization.shuffle(icoChoices);
    icoSortStimuli[i] = {
      image: freeSortImages2[i], choices: icoChoices, target: targetSymbol, block: 'sort'}, + "\n";
  }

  /* Image-button trial */
  var palImageButton = {
    type: 'image-button-response',
    stimulus: jsPsych.timelineVariable('image'),
    choices: jsPsych.timelineVariable('choices'),
    button_html: stimButton,
    data: {
      choices: jsPsych.timelineVariable('choices'),
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
    timeline: [fixation, palImageButton],
    timeline_variables: ambSortStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs sorting */
  var ico_sort_procedure = {
    timeline: [fixation, palImageButton],
    timeline_variables: icoSortStimuli,
    randomize_order: true
  };
