/* 1. PAL: teaching blocks */
/* just need to be able to change condition and order across participants!!! */

  /* Randomly choose a version for PAL stimuli condition */
  var version = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4],1)[0];
  console.log(version)
  var conditionStimuli;
  var freeSortImages1;
  var freeSortImages2;

  if (version <= 2) {
    conditionStimuli = cond1;
    freeSortImages1 = imagesA;
    freeSortImages2 = imagesB;
  }
  else if (version >= 3) {
    conditionStimuli = cond2;
    freeSortImages1 = imagesB;
    freeSortImages2 = imagesA;
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
  var amb_sort_procedure = {
      type: 'free-sort',
      stimuli: freeSortImages1,
      data: {
        version: version,
        block: 'sort',
        task: 'pal'
      }
  };

  var ico_sort_procedure = {
      type: 'free-sort',
      stimuli: freeSortImages2,
      data: {
        version: version,
        block: 'sort',
        task: 'pal'
      }
  };

/* Order the iconic and ambiguous procedures based on version */
  var task1;
  var task2;

  if (version == 1 || version == 3) {
    task1 = [amb_teach_procedure, amb_sort_procedure];
    task2 = [ico_teach_procedure, ico_sort_procedure];
  }
  else {
    task1 = [ico_teach_procedure, ico_sort_procedure];
    task2 = [amb_teach_procedure, amb_sort_procedure];
  }
console.log(task1, task2)
