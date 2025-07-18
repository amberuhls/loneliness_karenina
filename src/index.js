// src/index.js
import { initJsPsych } from 'jspsych';
import HtmlKeyboardResponsePlugin from '@jspsych/plugin-html-keyboard-response';
import "../styles/main.scss";

// Initialize jsPsych
const jsPsych = initJsPsych({
  on_finish: function() {
    jsPsych.data.displayData('csv');
  }
});

// Create a timeline
const timeline = [];

// Define a welcome trial
const welcome = {
  type: HtmlKeyboardResponsePlugin,
  stimulus: 'Welcome to the experiment. Press any key to begin.'
};
timeline.push(welcome);

// Define a simple instruction trial
const instructions = {
  type: HtmlKeyboardResponsePlugin,
  stimulus: `
    <p>In this experiment, a circle will appear in the center of the screen.</p>
    <p>If the circle is <strong>blue</strong>, press the letter F on the keyboard as fast as you can.</p>
    <p>If the circle is <strong>red</strong>, press the letter J as fast as you can.</p>
    <p>Press any key to begin.</p>
  `,
  post_trial_gap: 1000
};
timeline.push(instructions);

// Run the experiment!
jsPsych.run(timeline);