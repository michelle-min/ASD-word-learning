/* 1. Polysemy Task: intro block */

  /* Create timeline variable of target, 3 distractors, and audio for 8 trials;
  shuffle choice order within each trial; record block info for analysis.
  note: delete two distractors from loop for a 2-choice experiment */
  var introStimuli = [];
  for (i = 0; i < introTargets.length; i++) {
    introChoices = [introImages[4*i], introImages[4*i+1], introImages[4*i+2], introImages[4*i+3]];
    introChoices = jsPsych.randomization.shuffle(introChoices);
    introStimuli[i] = {choices: introChoices, audio: introAudio[i], target: introTargets[i], block: 'intro'}, + "\n";
  }

  /* HTML for all image buttons */
  var stimButton = '<div class="grid-container"><div><img src="%choice%" width="250" height="250"/></div></div>';

  /* HTML for transparent images buttons */
  var stimButtonTranslucent = '<div class="grid-container-translucent"><div><img src="%choice%" width="250" height="250"/></div></div>';

  /* Audio-button trial */
  var introAudiobutton = {
    timeline: [
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audio'),
        choices: jsPsych.timelineVariable('choices'),
        button_html: stimButtonTranslucent,
        trial_duration: 2000
      },
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audio'),
        choices: jsPsych.timelineVariable('choices'),
        button_html: stimButton,
        data: {
          choices: jsPsych.timelineVariable('choices'),
          audio: jsPsych.timelineVariable('audio'),
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

  /* Procedure for an intro block that shuffles trial order */
  var pol_intro_procedure = {
    timeline: [introAudiobutton],
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
      audio: jsPsych.timelineVariable('audio'),
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
