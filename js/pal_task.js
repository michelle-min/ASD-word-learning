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

  /* Timeline variable function */
  function createTeachStimuli(timelineVar, rawStimuli, amb) {
    for (i = 0; i < 16; i++) {
      if (amb == true) {
        index = i
      } else {
        index = i+16
      }
      var vidName = conditionStimuli[index];
      var vidName = vidName.replace("videos/cond1_", "");
      var vidName = vidName.replace(".mp4", "");
      var vidName = vidName.split("_");
      var vidPair = vidName[0];
      var vidObjectNumber = vidName[1];
      var vidObject = vidObjectNumber.slice(0, -1);
      var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
      timelineVar[i] = {
        video: [conditionStimuli[index]], icoamb: vidPair, obj: vidObject, dir: vidNumber}, + "\n";
    }
    return timelineVar;
  }

  /* Create timeline variables of video and audio for ambiguous and iconic pairs. */
  var ambTeachStimuli = [];
  var icoTeachStimuli = [];
  createTeachStimuli(ambTeachStimuli, conditionStimuli, true)
  createTeachStimuli(icoTeachStimuli, conditionStimuli, false)

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
    timeline_variables: ambTeachStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs teaching */
  var ico_teach_procedure = {
    timeline: [fixation, palVideokeyboard],
    timeline_variables: icoTeachStimuli,
    randomize_order: true
  };

/* 2. PAL: free sort */

  /* Timeline variable function */
  function createSortStimuli(timelineVar, imageSet) {
    for (i = 0; i < 8; i++) {
      // id target symbol
      var targetSymbol = imageSet[i+8]
      // select random symbol
      var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
      // if same as target symbol, repeat
      while (randomNum = i+8) {
        var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
        break;
      }
      // combime and shuffle symbol order
      var icoChoices = [targetSymbol, imageSet[randomNum]];
      var icoChoices = jsPsych.randomization.shuffle(icoChoices);
      timelineVar[i] = {
        image: imageSet[i], choices: icoChoices, target: targetSymbol, block: 'sort'}, + "\n";
    }

  }

  /* Create timeline variable of object and 2 symbols for 8 trials; shuffle
  symbol choice order within each trial */
  var icoSortStimuli = [];
  var ambSortStimuli = [];
  createSortStimuli(icoSortStimuli, freeSortImages1)
  createSortStimuli(ambSortStimuli, freeSortImages2)

  /* Image-button trial */
  var palImageButton = {
    timeline: [
      {
        type: 'image-button-response',
        stimulus: jsPsych.timelineVariable('image'),
        choices: jsPsych.timelineVariable('choices'),
        button_html: stimButton,
        data: {
          choices: jsPsych.timelineVariable('choices'),
          image: jsPsych.timelineVariable('image'),
          target: jsPsych.timelineVariable('target'),
          block: jsPsych.timelineVariable('block'),
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
      }
    ]
  };

  /* Procedure for ambiguous pairs sorting */
  var ico_sort_procedure = {
    timeline: [fixation, palImageButton],
    timeline_variables: icoSortStimuli,
    randomize_order: true
  };

/* Procedure for iconic pairs sorting */
  var amb_sort_procedure = {
    timeline: [fixation, palImageButton],
    timeline_variables: ambSortStimuli,
    randomize_order: true
  };
