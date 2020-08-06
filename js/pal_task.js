/* 1. PAL: teaching blocks */
/* just need to be able to change condition and order across participants!!! */

  /* Create timeline variables of video and audio for ambiguous and iconic pairs. */
  var ambStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = cond1[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    ambStimuli[i] = {
      video: [cond1[i]], type: 1, icoamb: vidPair, obj: vidObject, dir: vidNumber, block: 'teach'}, + "\n";
  }

  var icoStimuli = [];
  for (i = 0; i < 16; i++) {
    var vidName = cond1[i+16];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mp4", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    icoStimuli[i] = {
      video: [cond1[i+16]], type: 1, icoamb: vidPair, obj: vidObject, dir: vidNumber, block: 'teach'}, + "\n";
  }

  /* Video-keyboard trial for PAL task */
  var palVideokeyboard = {
      type: 'video-keyboard-response',
      sources: jsPsych.timelineVariable('video'),
      stimulus: 'audio/teachingaudio.mp3',
      width: 640,
      //start: 5000, // video starts at 1 second (after teaching audio)
      trial_duration: 3500, // trial duration in ms
      response_ends_trial: false, // trial continues for trial_duration regardless of keyboard response
      data: {
        video: jsPsych.timelineVariable('video'),
        type: jsPsych.timelineVariable('type'),
        ico_amb: jsPsych.timelineVariable('icoamb'),
        object: jsPsych.timelineVariable('obj'),
        direction: jsPsych.timelineVariable('dir'),
        block: jsPsych.timelineVariable('block'),
        task: 'pal'
      }
  };

  /* Html-button trial for PAL task */
  var palHtmlbutton = {
        type: 'html-button-response',
        stimulus: '',
        choices: ['Next'],
  };

  /* Procedure for ambiguous pairs teaching */
  var amb_teach_procedure = {
    timeline: [palHtmlbutton, palVideokeyboard],
    timeline_variables: ambStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs teaching */
  var ico_teach_procedure = {
    timeline: [palHtmlbutton, palVideokeyboard],
    timeline_variables: icoStimuli,
    randomize_order: true
  };

/* 2. PAL: free sort */
  var amb_sort_procedure = {
      type: 'free-sort',
      stimuli: ambImages,
      prompt: "<p>Click and drag the images below to sort them so that similar items are close together.</p>"
  };

  var ico_sort_procedure = {
      type: 'free-sort',
      stimuli: icoImages,
      prompt: "<p>Click and drag the images below to sort them so that similar items are close together.</p>"
  };
