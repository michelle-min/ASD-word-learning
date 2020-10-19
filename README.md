# ASD-word-learning

Code for the ASD and word learning experiment, using jsPsych. There are three tasks: polysemy, iconic PAL, and arbitrary PAL. The polysemy task is always first and the order of the iconic and arbitrary PAL is randomized.

## Polysemy Task

In this task, participants are shown an intro block and a test block. The **intro block** has 8 trials with four randomly ordered images each (8 x 4 = 32 images). The four image sets are fixed but trial order is shuffled. The procedure is `pol_intro_procedure`.

In the **choose block**, there are 18 trials with four randomly ordered images (18 x 4 = 72 images), of which three are distractors and one is the target. The distractors are pulled from a shuffled list. The trials are shuffled, which means that the order that targets are shown changes for every participant. [Additionally, there are 9 filler trials which are made of four distractor images (9 x 4 = 36 images) and these appear after every two target trials.] The procedure is `pol_choose_procedure`.

## PAL Tasks

The PAL task has participants learn a pair of images, one a symbol and the other an object. The pairs are either iconically related or non-iconically related (i.e., ambiguous). There are two blocks of teaching and two blocks of testing for a total of four blocks. In both **teach blocks**, participants watch 9 videos that associate the symbol and object through movement. One teach block has only iconic pairs (`ico_teach_procedure`) and the other has only ambiguous pairs (`amb_teach_procedure`).

The corresponding **test blocks** display the 9 objects in random order and ask participants to select the matching symbol (one correct, one randomly selected). Just like before, one test block has only iconic pairs (`ico_test_procedure`) and the other has only ambiguous pairs (`amb_test_procedure`).

The order of the four blocks is determined by the experiment version, which is randomly assigned to participants. Initially, the 18 symbol-object pairs were all iconic. After being split into two random groups, A and B, half of the pairings were shuffled to create ambiguous pairings. Condition 1 keeps the shuffles pairings for group A and keeps the iconic pairings for group B, while condition 2 shuffles pairings for group B and keeps the iconic pairings for group A. Then, when the tasks are shown, the order is again randomized to be either arbitrary->iconic or iconic->arbitrary. With 2 conditions and 2 orders, there are four possible versions:

1) cond 1, order 1 = A arbitrary, B iconic
2) cond 1, order 2 = B iconic, A arbitrary
3) cond 2, order 1 = A iconic, B arbitrary
4) cond 2, order 2 = B arbitrary, A iconic

## Data



# Links

- Error message: https://stackoverflow.com/questions/19235345/javascript-typeerror-cannot-read-property-style-of-null
- Favicon error: https://www.digitalocean.com/community/tutorials/how-to-add-a-favicon-to-your-website-with-html
