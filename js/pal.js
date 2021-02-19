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

// /* 2. PAL: testing blocks */
//
//     /* Create timeline variable of image/buttons for testing, two blocks. */
//     var choicesBlock1 = [];
//     for (i = 0; i < 4; i++) {
//       //index
//       index = block1Num[i]
//
//       if (i >= 8) {
//         // ambiguous target --> iconic distractor
//         var targetSym = palDistractors
//       } else {
//         // iconic target --> random distractor
//       }
//       // identify target and symbol
//       var targetSym = testBlock1[i+8]
//       // select random symbol
//       var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
//       // if same as target symbol, repeat
//       if (randomNum = i+8) {
//         var newNum = [8,9,10,11,12,13,14,15];
//         newNum.splice(randomNum-8, 1);
//         var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
//       }
//       // list of target and random symbols
//       var stimSet = [targetSym, testBlock1[randomNum]];
//       var stimSet = jsPsych.randomization.shuffle(stimSet);
//       choicesBlock1[i] = {
//         image: testBlock1[i], set: stimSet, target: targetSym, block: 'sort'}, + "\n";
//     }
//
//     var choicesBlock2 = [];
//     for (i = 0; i < 8; i++) {
//       // identify target symbol
//       var targetSym = testBlock2[i+8]
//       // select random symbol
//       var randomNum = jsPsych.randomization.sampleWithoutReplacement([8,9,10,11,12,13,14,15],1)[0];
//       // if same as target symbol, repeat
//       if (randomNum = i+8) {
//         var newNum = [8,9,10,11,12,13,14,15];
//         newNum.splice(randomNum-8, 1);
//         var randomNum = jsPsych.randomization.sampleWithoutReplacement(newNum)[0];
//       }
//       // list of target and random symbols
//       var stimSet = [targetSym, testBlock2[randomNum]];
//       var stimSet = jsPsych.randomization.shuffle(stimSet);
//       choicesBlock2[i] = {
//         image: testBlock2[i], set: stimSet, target: targetSym, block: 'sort'}, + "\n";
//     }
//
//     /* Image-button trial */
//     var testImageButton = {
//       type: 'image-button-response',
//       stimulus: jsPsych.timelineVariable('image'),
//       choices: jsPsych.timelineVariable('set'),
//       button_html: stimButton,
//       data: {
//         choices: jsPsych.timelineVariable('set'),
//         target: jsPsych.timelineVariable('target'),
//         version: ver,
//         block: 'test',
//         task: 'pal'
//       },
//       on_finish: function(data){
//         var acc = false;
//         var indexNumber = data.button_pressed;
//         if (data.target == data.choices[indexNumber]) {
//           acc = true
//         }
//         data.accuracy = acc;
//       }
//     };
//
//     /* Procedure for iconic pairs sorting */
//     var block1_test_procedure = {
//       timeline: [fixation, testImageButton],
//       timeline_variables: choicesBlock1,
//       randomize_order: true
//     };
//
//
//     /* Procedure for ambiguous pairs sorting */
//     var block2_test_procedure = {
//       timeline: [fixation, testImageButton],
//       timeline_variables: choicesBlock2,
//       randomize_order: true
//     };
//
//   /* 3. Combine for PAL task */
//
//   task1 = [block1_teach_procedure, block1_test_procedure];
//   task2 = [block2_teach_procedure, block2_test_procedure];
//
//
// //temp
//   var pal_procedure = [block1_teach_procedure, block2_teach_procedure, block3_teach_procedure, block4_teach_procedure]
