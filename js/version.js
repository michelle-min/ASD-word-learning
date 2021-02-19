/* Randomly choose one of four versions */
  var ver = Math.floor((Math.random() * 4) + 1);

  if (ver == 1) {
    var conditionStimuli = ver1_stim; // these are used for teaching
    var testBlock1 = imagesA; // iconic boat
    var testBlock2 = imagesB; // ambiguous bib
  } else if (ver == 2) {
    var conditionStimuli = ver2_stim;
    var testBlock1 = imagesB;
    var testBlock2 = imagesA;
  } else if (ver == 3) {
    var conditionStimuli = ver3_stim;
    var testBlock1 = imagesC;
    var testBlock2 = imagesD;
  } else if (ver == 4) {
    var conditionStimuli = ver4_stim;
    var testBlock1 = imagesD;
    var testBlock2 = imagesC;
  }
