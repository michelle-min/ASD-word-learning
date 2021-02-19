/* 1. PAL Task: teaching block */

  /* Video-keyboard trial for PAL task */
  var palVideoKeyboard = {
      type: 'video-keyboard-response',
      sources: jsPsych.timelineVariable('video'),
      stimulus: function() {
        trial_num = jsPsych.data.get().count();
        if (trial_num < 84 || (trial_num > 126 && trial_num < 134) ) {
          return 'audio/instructions_gotogether.mp3';
        } else if (trial_num < 92 || (trial_num > 134 && trial_num < 142) ) {
          return 'audio/instructions_alsogotogether.mp3';
        } else if (trial_num < 100 || (trial_num > 142 && trial_num < 150) ) {
          return 'audio/instructions_gotogethertoo.mp3';
        } else {
          return 'audio/instructions_justafewmore.mp3';
        }
      },
      width: 640,
      trial_duration: 3500, // trial duration in ms
      response_ends_trial: false, // trial continues for trial_duration regardless of keyboard response
      data: {
        version: ver,
        video: jsPsych.timelineVariable('video'),
        block: 'teach',
        task: 'pal'
      }
  };

  /* Procedure for block 1 teaching */
  var block1_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock1,
    randomize_order: true
  };

  /* Procedure for ambiguous pairs teaching */
  var block2_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock2,
    randomize_order: true
  };

  /* Procedure for ambiguous pairs teaching */
  var block3_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock3,
    randomize_order: true
  };

  /* Procedure for ambiguous pairs teaching */
  var block4_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock4,
    randomize_order: true
  };

//temp
  var pal_procedure = [block1_teach_procedure, block2_teach_procedure, block3_teach_procedure, block4_teach_procedure]
