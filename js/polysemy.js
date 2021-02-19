/* 1. Polysemy Task: intro (PPVT) block */

  /* Create timeline variable of target, 3 distractors, and audio for 8 trials;
  shuffle choice order within each trial; record block info for analysis. */
  var introStimuli = [];
  for (i = 0; i < introTargets.length; i++) {
    introSet = [introImages[4*i], introImages[4*i+1], introImages[4*i+2], introImages[4*i+3]];
    introSet = jsPsych.randomization.shuffle(introSet);
    introStimuli[i] = {set: introSet, audioPre: introAudioPre[i], audioPost: introAudioPost[i], target: introTargets[i], block: 'intro'}, + "\n";
  }

  /* HTML for buttons */
  var stimButton = '<button class="jspsych-btn button1"><img src="%choice%" width="250" height="250"/></button>'; // opaque
  var stimButtonTranslucent = '<button class="jspsych-btn button1"><img src="%choice%" width="250" height="250"/></button>'; // translucent

  /* Audio-button trial */
  var introAudioButton = {
    timeline: [
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audioPre'),
        choices: jsPsych.timelineVariable('set'),
        button_html: stimButtonTranslucent,
        response_ends_trial: false, //  trial continues for timing_response time reached so subject must view
        trial_duration: 2000
      },
      {
        type: 'audio-button-response',
        stimulus: jsPsych.timelineVariable('audioPost'),
        choices: jsPsych.timelineVariable('set'),
        button_html: stimButton,
        data: {
          choices: jsPsych.timelineVariable('set'),
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

  /* Fixation cross */
  var fixation = {
      type: 'html-button-response',
      stimulus: [],
      choices: ['pol_images/playbutton.jpg'],
      button_html: '<button class="jspsych-btn"><img src="%choice%" width="100" height="100"/></button>',
  };

  /* Procedure for intro (PPVT) block that shuffles trial order */
  var pol_intro_procedure = {
    timeline: [fixation, introAudioButton, feedback],
    timeline_variables: introStimuli,
    randomize_order: true
  };

/* 2. Polysemy Task: choose block */

  /* Shuffle list of distractors */
  var chooseDistractors = jsPsych.randomization.shuffle(chooseDistractors);

  /* Create timeline variable of target, 3 distractors, and audio for 18 trials;
  shuffle choice order within each trial; record info for later. */
  var chooseStimuli = [];
  for (i = 0; i < chooseTargets.length; i++) {
    chooseSet = [chooseTargets[i], chooseDistractors[3*i], chooseDistractors[3*i+1], chooseDistractors[3*i+2]];
    chooseSet = jsPsych.randomization.shuffle(chooseSet);
    chooseStimuli[i] = {set: chooseSet, audio: chooseAudio[i], target: chooseTargets[i], block: 'choose'}, + "\n";
  }

  /* Audio-button trial */
  var chooseAudioButton = {
    type: 'audio-button-response',
    stimulus: jsPsych.timelineVariable('audio'),
    choices: jsPsych.timelineVariable('set'),
    button_html: stimButton,
    data: {
      choices: jsPsych.timelineVariable('set'),
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

  /* Procedure for target trials in the choose block */
  var pol_choose_procedure = {
    timeline: [fixation, chooseAudioButton],
    timeline_variables: chooseStimuli,
    randomize_order: true
  };

/* Full task procedure */
poltask = [
  {type: 'audio-button-response', stimulus: 'audio/instructions_practice.mp3', choices: ['pol_images/playbutton.jpg'], button_html: '<button class="jspsych-btn"><img src="%choice%" width="100" height="100"/></button>'},
  {type: 'audio-keyboard-response', stimulus: 'audio/instructions_waitpicture.mp3', choices: jsPsych.NO_KEYS, trial_ends_after_audio: true},
  pol_intro_procedure,
  {type: 'audio-keyboard-response', stimulus: 'audio/instructions_keepgoing.wav', response_ends_trial: false, trial_duration: 2500},
  {type: 'audio-keyboard-response', stimulus: 'audio/instructions_waitfull.mp3', choices: jsPsych.NO_KEYS, trial_ends_after_audio: true},
  pol_choose_procedure]
