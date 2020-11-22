# ASD-word-learning

Code for the ASD and word learning experiment, using jsPsych. There are three tasks: polysemy, iconic PAL, and arbitrary PAL. The polysemy task is always first and the order of the iconic and arbitrary PAL is randomized.

## Polysemy Task

In this task, participants are shown an intro block and a test block. The **intro block** has 8 trials with four randomly ordered images each (8 x 4 = 32 images). The four image sets are fixed but trial order is shuffled. The procedure is `pol_intro_procedure`.

In the **choose block**, there are 18 trials with four randomly ordered images (18 x 4 = 72 images), of which three are distractors and one is the target. The distractors are pulled from a shuffled list. The trials are shuffled, which means that the order that targets are shown changes for every participant. [Additionally, there are 9 filler trials which are made of four distractor images (9 x 4 = 36 images) and these appear after every two target trials.] The procedure is `pol_choose_procedure`.

## PAL Tasks

The PAL task has participants learn a pair of images, one a symbol and the other an object. The pairs are either iconically related or non-iconically related (i.e., ambiguous). There are two blocks of teaching and two blocks of testing for a total of four blocks. In both **teach blocks**, participants watch 9 videos that associate the symbol and object through movement. One  block has only iconic pairs and the other has only ambiguous pairs (`block1_teach_procedure` and `block2_teach_procedure`).

The corresponding **test blocks** display the 9 objects in random order and ask participants to select the matching symbol (one correct, one randomly selected). Just like before, one test block has only iconic pairs  and the other has only ambiguous pairs (`block1_test_procedure` and `block2_test_procedure`).

The order of the four blocks is determined by the experiment version, which is randomly assigned to participants. Initially, the 18 symbol-object pairs were all iconic. After being split into two random groups, red and blue, half of the pairings were shuffled to create ambiguous pairings. Condition 1 keeps iconic pairings for group red (A) and shuffles pairings for group blue (B), while condition 2 keeps the iconic pairings for group blue (C) and shuffles pairings for group red (D). Then, when the tasks are shown, the order is again randomized to be either iconic->arbitrary or arbitrary->iconic. With 2 conditions and 2 orders, there are four possible versions:

1) cond 1, order 1 = A iconic, B arbitrary
2) cond 1, order 2 = B arbitrary, A iconic
3) cond 2, order 1 = C iconic, D arbitrary
4) cond 2, order 2 = D arbitrary, C iconic

## Data

#### Trial Info
- trial_type
- trial_index
- time_elapsed
- internal_node_id
- success: did it go into fullscreen mode?

#### Stimulus
- rt
- stimulus: primary audio (usually instructions) or image (in PAL: test) for the trial
- button_pressed: participant's response to buttons (clicking on image) coded as 0-3 (from top left and continuing clockwise)
- key_press: participant's keyboard response coded numerically (*not important*, should just be null because the option is turned off)

#### Polysemy: Intro
- task: `polysemy`
- block: `intro`
- choices: four buttons (images) shown to participant
- target: the correct answer
- accuracy: TRUE if button_pressed = target

#### Polysemy: Choose
- task: `polysemy`
- block: `choose`
- choices: four buttons (images) shown to participant
- target: the correct answer
- accuracy: TRUE if button_pressed = target

#### PAL: Teach
- task: `pal`
- block: `teach`
- version: 1 to 4
- video: name of video that teaches the symbol-object pair

#### PAL: Test
- task: `pal`
- block: `test`
- version: 1 to 4
- stimulus: a picture of an object
- choices: two buttons (symbols) shown to participant
- target: the name of the correct symbol
- accuracy: TRUE if button_pressed = target
