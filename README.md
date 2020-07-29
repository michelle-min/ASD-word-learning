# ASD-word-learning

Code for the ASD and word learning experiment, using jsPsych. There are three tasks: polysemy, iconic PAL, and arbitrary PAL. (These are tagged as 'polysemy', 'pal', 'ico', and 'arb'.) The order of these tasks is randomized within a welcome page and conclusion page.

## Polysemy Task

In this task, participants are shown an intro block and a test block. The **intro block** has 8 trials with four randomly ordered images each (8x4 = 32 images). Trials are shuffled and output is saved as `intro_stimuli`. In the **test block**, there are 18 trials with four randomly ordered images (18x4 = 72 images). Order of distractors is shuffled, trials are shuffled, and output is saved as `test_stimuli`. Additionally, there are 9 filler trials (9x4 = 36 images) which appear after every two target trials.

## PAL Task

The PAL task has participants learn a pair of images, one a symbol and the other a picture of an object. There are two blocks of training and two blocks of free sort. In both **train blocks**, there are 9 videos that associate a symbol and object through movement. Of the two train block, one is iconic and the other is ambiguous.

# Links

- https://www.w3schools.com/css/css_grid.asp
- https://github.com/jspsych/jsPsych/discussions/810
- https://www.jspsych.org/overview/media-preloading/
- https://github.com/jspsych/jsPsych/discussions/849
- *https://stackoverflow.com/questions/19235345/javascript-typeerror-cannot-read-property-style-of-null*

# Video playback issue

- Not a problem? https://github.com/jspsych/jsPsych/discussions/606
- Fix on Chrome: https://github.com/jspsych/jsPsych/discussions/606
- Fix on Safari: https://stackoverflow.com/questions/47839947/xmlhttprequest-cannot-load-file-preflight-response-is-not-successful-er
  - Safari > Preferences > Advanced > Show Develop menu in menu bar
  - Develop > Disable Local File Restrictions
