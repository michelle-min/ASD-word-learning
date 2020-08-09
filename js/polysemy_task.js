/* 1. Polysemy Task: intro block */

  /* Create timeline variable of target, 3 distractors, and audio for 8 trials;
  shuffle choice order within each trial; record block info for analysis.
  note: delete two distractors from loop for a 2-choice experiment */
  var introStimuli = [];
  for (i = 0; i < introTargets.length; i++) {
    introChoices = [introImages[4*i], introImages[4*i+1], introImages[4*i+2], introImages[4*i+3]];
    introChoices = jsPsych.randomization.shuffle(introChoices);
    introStimuli[i] = {choices: introChoices, audioPre: introAudioPre[i], audioPost: introAudioPost[i], target: introTargets[i], block: 'intro'}, + "\n";
  }

  /* HTML for all image buttons */
  var stimButton = '<div class="grid-container"><div><img src="%choice%" width="250" height="250"/></div></div>';

  /* HTML for transparent images buttons */
  var stimButtonTranslucent = '<div class="grid-container-translucent"><div><img src="%choice%" width="250" height="250"/></div></div>';

  /* Audio-button trial */
  var introAudioButton = {
    timeline: [
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audioPre'),
        choices: jsPsych.timelineVariable('choices'),
        button_html: stimButtonTranslucent,
        response_ends_trial: false, //  trial continues for timing_response time reached so subject must view
        trial_duration: 3000
      },
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audioPost'),
        choices: jsPsych.timelineVariable('choices'),
        button_html: stimButton,
        data: {
          choices: jsPsych.timelineVariable('choices'),
          target: jsPsych.timelineVariable('target'),
          block: jsPsych.timelineVariable('block'),
          task: 'polysemy'
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

  /* Feedback trial */
  var feedback = {
    type: 'audio-keyboard-response',
    stimulus: function() {
        var feedback_audio = 'audio/answer-error.mp3';
        var last_trial_accuracy = jsPsych.data.getLastTrialData().values()[0].accuracy;
        if (last_trial_accuracy == true) {
            feedback_audio = 'audio/answer-correct.mp3'
        }
        return feedback_audio;
    },
    choices: jsPsych.NO_KEYS,
    prompt: function() {
        var feedback_text = '<span style="font-size:30px;color:red;">Incorrect</span>';
        var last_trial_accuracy = jsPsych.data.getLastTrialData().values()[0].accuracy;
        if (last_trial_accuracy == true) {
            feedback_text = '<span style="font-size:30px;color:green;">Correct!</span>'
        }
        return feedback_text;
    },
    response_ends_trial: false,
    trial_duration: 3000
  }

  /* Procedure for an intro block that shuffles trial order */
  var pol_intro_procedure = {
    timeline: [introAudioButton, feedback],
    timeline_variables: introStimuli,
    randomize_order: true
  };

/* 2. Polysemy Task: test block */

  /* Shuffle list of distractors (from polysemy_info.js) */
  var testDistractors = jsPsych.randomization.shuffle(testDistractors);

  /* Create timeline variable of target, 3 distractors, and audio for 18 trials;
  shuffle choice order within each trial; record info for later.
  note: delete two distractors from loop for a 2-choice experiment */
  var testStimuli = [];
  for (i = 0; i < testTargets.length; i++) {
    testChoices = [testTargets[i], testDistractors[3*i], testDistractors[3*i+1], testDistractors[3*i+2]];
    testChoices = jsPsych.randomization.shuffle(testChoices);
    testStimuli[i] = {choices: testChoices, audio: testAudio[i], target: testTargets[i], block: 'test'}, + "\n";
  }

  /* Audio-button trial */
  var testAudiobutton = {
    type: 'audio-button-response',
    stimulus: jsPsych.timelineVariable('audio'),
    choices: jsPsych.timelineVariable('choices'),
    button_html: stimButton,
    data: {
      choices: jsPsych.timelineVariable('choices'),
      target: jsPsych.timelineVariable('target'),
      block: jsPsych.timelineVariable('block'),
      task: 'polysemy'
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

  /* Procedure for target trials in the test block */
  var pol_trial_procedure = {
    timeline: [testAudiobutton],
    timeline_variables: testStimuli,
    randomize_order: true // switch to 'sample:' when there are fillers
  };
