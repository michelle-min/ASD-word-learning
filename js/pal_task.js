/* 1. PAL: training blocks */
/* just need to be able to change condition across participants!!! */

  /* Create timeline variable of video and audio for all 18 pairs in two conditions. */
  var ambStimuli = [];
  for (i = 0; i < 8; i++) {
    var vidName = cond1[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mov", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    ambStimuli[i] = {
      video: [cond1[i]], type: 1, icoamb: vidPair, obj: vidObject, num: vidNumber, block: 'train'}, + "\n";
    }
  var icoStimuli = [];
  for (i = 8; i < 16; i++) {
    var vidName = cond1[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mov", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    icoStimuli[i] = {
      video: [cond1[i]], type: 1, icoamb: vidPair, obj: vidObject, num: vidNumber, block: 'train'}, + "\n";
    }

  /* Video-keyboard trial for PAL task */
  var palVideokeyboard = {
      type: 'video-keyboard-response',
      sources: jsPsych.timelineVariable('video'),
      width: 640,
      data: {
        video: jsPsych.timelineVariable('video'),
        type: jsPsych.timelineVariable('type'),
        icoamb: jsPsych.timelineVariable('icoamb'),
        obj: jsPsych.timelineVariable('obj'),
        num: jsPsych.timelineVariable('num'),
        block: jsPsych.timelineVariable('block'),
        task: 'pal'
      }
  };

  /* Audio-button trial for PAL task */
  var palAudiobutton = {
        type: 'audio-button-response',
        stimulus: 'audio/teachingaudio.mp3',
        choices: ['next'],
    };

  /* Procedure for ambiguous pairs training */
  var amb_train_procedure = {
    timeline: [palAudiobutton, palVideokeyboard],
    timeline_variables: ambStimuli,
    randomize_order: true
  };

  /* Procedure for iconic pairs training */
  var ico_train_procedure = {
    timeline: [palAudiobutton, palVideokeyboard],
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
