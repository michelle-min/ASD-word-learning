# ASD-word-learning

Code for the ASD and word learning experiment, using jsPsych. There are three tasks: polysemy, iconic PAL, and arbitrary PAL. (These are tagged as 'polysemy', 'ico_pal', and 'amb_pal'.) The polysemy task is always first and the order of the iconic and arbitrary PAL is randomized.

## Polysemy Task

In this task, participants are shown an intro block and a test block. The **intro block** has 8 trials with four randomly ordered images each (8 x 4 = 32 images). The four image sets are fixed but trial order is shuffled. The procedure is `pol_intro_procedure`.

In the **choice block**, there are 18 trials with four randomly ordered images (18 x 4 = 72 images), of which three are distractors and one is the target. The distractors are pulled from a shuffled list. The trials are shuffled, which means that the order that targets are shown changes for every participant. [Additionally, there are 9 filler trials which are made of four distractor images (9 x 4 = 36 images) and these appear after every two target trials.] The procedure is `pol_test_procedure`.

## PAL Tasks

The PAL task has participants learn a pair of images, one a symbol and the other a picture of an object. The pairs are either iconically related or non-iconically related (i.e., ambiguous). There are two blocks of teaching and free sort. In both **teach blocks**, participants watch 9 videos that associate a symbol and object through movement. One train block has only iconic pairs (`ico_teach_procedure`) and the other has only ambiguous pairs (`amb_teach_procedure`). The corresponding **test blocks** display the 9 pairs of symbol-object (18 images total) and ask the participant to move the similar items together. These are saved as `ico_sort_procedure` and `amb_sort_procedure`, respectively.

## Data


# Links

- *https://stackoverflow.com/questions/19235345/javascript-typeerror-cannot-read-property-style-of-null*
