/* 3. PAL Task: ambiguous training blocks */

  /* Create timeline variable of video and audio for all 18 pairs in two conditions. */
  var amb_stimuli = [];
  for (i = 0; i < cond1.length/2; i++) {
    var vidName = cond1[i];
    var vidName = vidName.replace("videos/cond1_", "");
    var vidName = vidName.replace(".mov", "");
    var vidName = vidName.split("_");
    var vidPair = vidName[0];
    var vidObjectNumber = vidName[1];
    var vidObject = vidObjectNumber.slice(0, -1);
    var vidNumber = vidObjectNumber.substr(vidObjectNumber.length - 1);
    amb_stimuli[i] = {
      video: [cond1[i]], type: 1, icoamb: vidPair, obj: vidObject, num: vidNumber, block: 'train'}, + "\n";
    }

  /* Split stimuli into iconic and ambiguous conditions */
  // var popHalf = cond1.length/2;
  // var train_stimuli1 = [];
  // var train_stimuli2 = [];
  // for (i = 0; i < popHalf; i += 1) {
  //     var train_stimuli1[i] = trainStimuli[i];
  // };

  /* Video-keyboard trial for PAL task */
  var pal_videokeyboard = {
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
  var pal_audiobutton = {
        type: 'audio-button-response',
        stimulus: 'audio/teachingaudio.mp3',
        choices: ['next'],
    };


  /* Procedure for target trials in the test block */
  var amb_pal_procedure = {
    timeline: [pal_audiobutton, pal_videokeyboard],
    timeline_variables: amb_stimuli,
    randomize_order: true
  };

/* 4: PAL Task: Free sort */
  // var sorting_stimuli = [];
  // for (var i = 1; i <= 12; i++) {
  //   sorting_stimuli.push("img/cell_img_" + i + ".jpg");
  // }
  //
  // var sort_trial = {
  //   type: 'free-sort',
  //   stimuli: sorting_stimuli,
  //   prompt: "<p>Click and drag the images below to sort them so that similar items are close together.</p>"
  // };
