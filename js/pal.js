/* 0. PAL preview of all tested images (8 targets + 8 distractors) */

  /* Audio-keyboard trial */
  var palAudioKeyboard = {
      type: 'audio-button-response',
      stimulus: jsPsych.timelineVariable('audio'),
      choices: jsPsych.timelineVariable('set'),
      button_html: stimButton,
      response_ends_trial: false, //  trial continues for timing_response time reached so subject must view
      trial_duration: 5000,
      data: {
        choices: jsPsych.timelineVariable('set'),
        block: 'preview',
        task: 'pal'
      }
    };

  /* Procedure for 2 blocks preview */
  var block1_preview_procedure = {
    timeline: [fixation, palAudioKeyboard],
    timeline_variables: previewBlock1,
    randomize_order: true
  };

  var block2_preview_procedure = {
    timeline: [fixation, palAudioKeyboard],
    timeline_variables: previewBlock2,
    randomize_order: true
  };

/* 1. PAL Task: teaching block */

  /* Video-keyboard trial */
  var palVideoKeyboard = {
      type: 'video-keyboard-response',
      sources: jsPsych.timelineVariable('video'),
      stimulus: function() {
        trial_num = jsPsych.data.get().count();
        if (trial_num < 92) {
          return 'audio/instructions_gotogether.mp3';
        } else if (trial_num < 101) {
          return 'audio/instructions_alsogotogether.mp3';
        } else if (trial_num < 134) {
          return 'audio/instructions_gotogethertoo.mp3';
        } else {
          return 'audio/instructions_justafewmore.mp3';
        }
      },
      width: 640,
      trial_duration: 3500, // trial duration in ms
      response_ends_trial: false, // trial continues for trial_duration regardless of keyboard response
      data: {
        video: jsPsych.timelineVariable('video'),
        block: 'teach',
        task: 'pal'
      }
  };

  /* Procedure for 2 blocks teaching */
  var block1_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock1,
    randomize_order: true
  };

  var block2_teach_procedure = {
    timeline: [fixation, palVideoKeyboard],
    timeline_variables: videosBlock2,
    randomize_order: true
  };

/* 2. PAL: testing blocks */

  /* Image-button trial */
  var palImageButton = {
    type: 'image-button-response',
    stimulus: jsPsych.timelineVariable('image'),
    choices: jsPsych.timelineVariable('set'),
    button_html: stimButton,
    data: {
      choices: jsPsych.timelineVariable('set'),
      target: jsPsych.timelineVariable('target'),
      condition: ver,
      block: 'test',
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

  /* Procedure for 2 blocks testing */
  var block1_test_procedure = {
    timeline: [fixation, palImageButton],
    timeline_variables: choicesBlock1,
    randomize_order: true
  };

  var block2_test_procedure = {
    timeline: [fixation, palImageButton],
    timeline_variables: choicesBlock2,
    randomize_order: true
  };
