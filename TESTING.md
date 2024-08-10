# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Link | Screenshot |
| --- | --- | --- | --- |
|  | index.html | [Validate index.html](https://validator.w3.org/nu/?doc=https://apeskinian.github.io/p2_dac/index.html) | ![index validation](documentation/validation/html/dac_validation_html_index.png "index validation") |
|  | game.html | [Validate game.html](https://validator.w3.org/nu/?doc=https://apeskinian.github.io/p2_dac/game.html) | ![game validation](documentation/validation/html/dac_validation_html_game.png "game validation") |
|  | results.html | [Validate results.html](https://validator.w3.org/nu/?doc=https://apeskinian.github.io/p2_dac/results.html) | ![results validation](documentation/validation/html/dac_validation_html_results.png "results validation") |
|  | dac.html | [Validate dac.html](https://validator.w3.org/nu/?doc=https://apeskinian.github.io/p2_dac/dac.html) | ![dac validation](documentation/validation/html/dac_validation_html_dac.png "dac validation") |
|  | 404.html | [Validate 404.html](https://validator.w3.org/nu/?doc=https://apeskinian.github.io/p2_dac/404.html) | ![404 validation](documentation/validation/html/dac_validation_html_404.png "404 validation") |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Link | Screenshot |
| --- | --- | --- | --- |
| assets/css | style.css | [Validate style.css](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fapeskinian.github.io%2Fp2_dac%2F&usermedium=all&vextwarning=&warning=1) | ![css validatiov](documentation/validation/css/dac_validation_css.png "css validation") |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets/js | quiz-length.js | ![quiz-length validation](documentation/validation/js/dac_validation_js_quiz-length.png) | Unused variable is called from index.html |
| assets/js | game-data.js | ![game-data validation](documentation/validation/js/dac_validation_js_game-data.png) | Unused variables are used in game-script.js |
| assets/js | game-script.js | ![game-script validation](documentation/validation/js/dac_validation_js_game-script.png) | Undefined variables are defined in game-data.js and the unused variables are called from game.html |
| assets/js | results.js | ![results validation](documentation/validation/js/dac_validation_js_results.png) |  |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Game | Results | Dac | 404 | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browsers/dac_browser_chrome_index.png) | ![screenshot](documentation/browsers/dac_browser_chrome_game.png) | ![screenshot](documentation/browsers/dac_browser_chrome_results.png) | ![screenshot](documentation/browsers/dac_browser_chrome_dac.png) | ![screenshot](documentation/browsers/dac_browser_chrome_404.png) | Works as expected |
| Firefox | ![screenshot](documentation/browsers/dac_browser_firefox_index.png) | ![screenshot](documentation/browsers/dac_browser_firefox_game.png) | ![screenshot](documentation/browsers/dac_browser_firefox_results.png) | ![screenshot](documentation/browsers/dac_browser_firefox_dac.png) | ![screenshot](documentation/browsers/dac_browser_firefox_404.png) | Works as expected |
| Edge | ![screenshot](documentation/browsers/dac_browser_edge_index.png) | ![screenshot](documentation/browsers/dac_browser_edge_game.png) | ![screenshot](documentation/browsers/dac_browser_edge_results.png) | ![screenshot](documentation/browsers/dac_browser_edge_dac.png) | ![screenshot](documentation/browsers/dac_browser_edge_404.png) | Works as expected |
| Safari | ![screenshot](documentation/browsers/dac_browser_safari_index.png) | ![screenshot](documentation/browsers/dac_browser_safari_game.png) | ![screenshot](documentation/browsers/dac_browser_safari_results.png) | ![screenshot](documentation/browsers/dac_browser_safari_dac.png) | ![screenshot](documentation/browsers/dac_browser_safari_404.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Game | Results | Results DAC | 404 | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive/devtools_mobile_index.png) | ![screenshot](documentation/responsive/devtools_mobile_game.png) | ![screenshot](documentation/responsive/devtools_mobile_results.png) | ![screenshot](documentation/responsive/devtools_mobile_dac.png) | ![screenshot](documentation/responsive/devtools_mobile_404.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive/devtools_tablet_index.png) | ![screenshot](documentation/responsive/devtools_tablet_game.png) | ![screenshot](documentation/responsive/devtools_tablet_results.png) | ![screenshot](documentation/responsive/devtools_tablet_dac.png) | ![screenshot](documentation/responsive/devtools_tablet_404.png) | Works as expected |
| 4k Monitor (DevTools) | ![screenshot](documentation/responsive/devtools_4k_index.png) | ![screenshot](documentation/responsive/devtools_4k_game.png) | ![screenshot](documentation/responsive/devtools_4k_results.png) | ![screenshot](documentation/responsive/devtools_4k_dac.png) | ![screenshot](documentation/responsive/devtools_4k_404.png) | Scaling issues beginning |
| iPhone 15 Pro | ![screenshot](documentation/responsive/mobile_iphone15pro_index.png) | ![screenshot](documentation/responsive/mobile_iphone15pro_game.png) | ![screenshot](documentation/responsive/mobile_iphone15pro_results.png) | ![screenshot](documentation/responsive/mobile_iphone15pro_dac.png) | ![screenshot](documentation/responsive/mobile_iphone15pro_404.png) | Works as expected |
| iPad Mini | ![screenshot](documentation/responsive/mobile_ipadmini_index.png) | ![screenshot](documentation/responsive/mobile_ipadmini_game.png) | ![screenshot](documentation/responsive/mobile_ipadmini_results.png) | ![screenshot](documentation/responsive/mobile_ipadmini_dac.png) | ![screenshot](documentation/responsive/mobile_ipadmini_404.png) | Works as expected |
| MacBook Air M3 | ![screenshot](documentation/responsive/laptop_macbookairm3_index.png) | ![screenshot](documentation/responsive/laptop_macbookairm3_game.png) | ![screenshot](documentation/responsive/laptop_macbookairm3_results.png) | ![screenshot](documentation/responsive/laptop_macbookairm3_dac.png) | ![screenshot](documentation/responsive/laptop_macbookairm3_404.png) | Works as expected |
| 2K Desktop Monitor | ![screenshot](documentation/responsive/desktop_1440p_index.png) | ![screenshot](documentation/responsive/desktop_1440p_game.png) | ![screenshot](documentation/responsive/desktop_1440p_results.png) | ![screenshot](documentation/responsive/desktop_1440p_dac.png) | ![screenshot](documentation/responsive/desktop_1440p_404.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| index.html | ![mobile-index](documentation/lighthouse/dac_lighthouse_mobile_index.png) | ![desktop-index](documentation/lighthouse/dac_lighthouse_desktop_index.png) |  |
| game.html | ![mobile-game](documentation/lighthouse/dac_lighthouse_mobile_game.png) | ![desktop-game](documentation/lighthouse/dac_lighthouse_desktop_game.png) |  |
| results.html | ![mobile-results](documentation/lighthouse/dac_lighthouse_mobile_results.png) | ![desktop-results](documentation/lighthouse/dac_lighthouse_desktop_results.png) |  |
| dac.html | ![mobile-dac](documentation/lighthouse/dac_lighthouse_mobile_dac.png) | ![desktop-dac](documentation/lighthouse/dac_lighthouse_desktop_dac.png) |  |
| 404.html | ![mobile-404](documentation/lighthouse/dac_lighthouse_mobile_404.png) | ![desktop-404](documentation/lighthouse/dac_lighthouse_desktop_404.png) |  |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | | |
| | The help menu should show and hide with the ? button. Quiz length selectors should be highlighted when clicked and when the main action button is clicked the quiz should start. | Tested the feature by clicking the ? and then again to close, clicking on the different quiz length options and then clicking on Valar Morghulis! | The feature behaved as expected, the help menu was shown and hidden. The quiz length selectors were highlighted and the main action button started the quiz. | Test concluded and passed | ![screenshot](documentation/defensive/dac_defensive_index.gif) |
| Game | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/features/feature03.png) |
| Results | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/features/feature05.png) |
| Results DAC | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/features/feature07.png) |
| 404 | | | | | |
| | The help menu should show and hide with the ? button and the Return to King's Landing button should take you back to the home screen | Tested the feature by clicking the ? and then again to close, then clicking on the Return to King's landing button | The feature behaved as expected, the help menu was shown and the page navigated home on clicking of the Return to King's Landing button | Test concluded and passed | ![screenshot](documentation/defensive/dac_defensive_404.gif) |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to play a quiz, so that I can have a bit of fun! | ![main quiz](documentation/features/dac_feature_quiz_area.png) |
| As a new site user, I would like to know if I get a question correct, so that I can feel good about it! | ![correct answer](documentation/features/dac_feature_highlight_correct.png) |
| As a new site user, I would like to know if I get a question wrong and also see the correct answer, so that I can learn from it. | ![incorrect answer](documentation/features/dac_feature_highlight_incorrect.png) |
| As a new site user, I would like to know my final score, so that I can try and beat it next time. | ![results](documentation/features/dac_feature_help_results.png) |
| As a new site user, I would like to control how long the quiz will be, so that I can do more or less depending on how long I want to play. | ![introduction](documentation/features/dac_feature_introduction.png) |
| As a returning site user, I would like to control how long the quiz will be, so that I can do more or less depending on how long I want to play. | ![introduction](documentation/features/dac_feature_introduction.png) |
| As a returning site user, I would like to see if I can figure out why there is always a "Dragons are cool option", so that I can see what happens if maybe I choose that everytime... | ![dac results](documentation/features/dac_feature_results_dac.png) |
| As a returning site user, I would like to have different questions, so that it does not feel repetitive. | ![question pool](documentation/stories/stories_questions.png) |
| As a returning site user, I would like to have different feedback on questions, so that it does not feel repetitive. | ![message pool](documentation/stories/stories_messages.png) |

## Bugs

| Bug | Fix |
| :---: | :---: |
| I was made aware that you could still progress through the quiz when the non selection message was on screen. The screenshot shows an incorrect answer feedback when there should not have been any progress. | To fix this, I wrapped the check for valid selections and the check answer code after that into an if statement. This prevented the game from progressing if there was nothing selected. I also added code to disable answer inputs while the message was on screen. |
| ![screenshot](documentation/bugs/dac_bug_progress_error.png) | ![screenshot](documentation/bugs/dac_bugs_progress_error_fix.png) |
| When playing on mobile devices if you start to tap faster through the game sometimes it activates the double tap to zoom function. I found this hindered the free flow of playing | By adding a class of no-double-tap-zoom to all buttons and then using the CSS "touch-action: manipulation;" this disabled double tapping to zoom while still keeping other gestures useable. |
| ![screenshot](documentation/bugs/dac_bugs_zoom.png) | ![screenshot](documentation/bugs/dac_bugs_zoom_fix.png) |

## Unfixed Bugs

> [!NOTE]  
> There are no remaining bugs that I am aware of.
