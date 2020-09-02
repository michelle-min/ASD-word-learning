# ASD-word-learning

Code for the ASD and word learning experiment, using jsPsych. There are three tasks: polysemy, iconic PAL, and arbitrary PAL. (These are tagged as 'polysemy', 'ico_pal', and 'amb_pal'.) The order of these tasks is randomized.

## Polysemy Task

In this task, participants are shown an intro block and a test block. The **intro block** has 8 trials with four randomly ordered images each (8 x 4 = 32 images). The groups of 4 images are fixed but trials are shuffled. The procedure is `pol_intro_procedure`. In the **test block**, there are 18 trials with four randomly ordered images (18 x 4 = 72 images). Order of distractors is shuffled, trials are shuffled, and the procedure is `pol_test_procedure`. Additionally, there are 9 filler trials (9 x 4 = 36 images) which appear after every two target trials.

## PAL Tasks

The PAL task has participants learn a pair of images, one a symbol and the other a picture of an object. The pairs are either iconically related or non-iconically related (i.e., ambiguous). There are two blocks of teaching and free sort. In both **teach blocks**, participants watch 9 videos that associate a symbol and object through movement. One train block has only iconic pairs (`ico_teach_procedure`) and the other has only ambiguous pairs (`amb_teach_procedure`). The corresponding **sort blocks** display the 9 pairs of symbol-object (18 images total) and ask the participant to move the similar items together. These are saved as `ico_sort_procedure` and `amb_sort_procedure`, respectively.

## Data


# Links

- https://www.w3schools.com/css/css_grid.asp
- https://github.com/jspsych/jsPsych/discussions/810
- https://github.com/jspsych/jsPsych/discussions/849
- *https://stackoverflow.com/questions/19235345/javascript-typeerror-cannot-read-property-style-of-null*

# Video playback issue

- Not a problem? https://github.com/jspsych/jsPsych/discussions/606
- Fix on Safari: https://stackoverflow.com/questions/47839947/xmlhttprequest-cannot-load-file-preflight-response-is-not-successful-er
  - Safari > Preferences > Advanced > Show Develop menu in menu bar
  - Develop > Disable Local File Restrictions
