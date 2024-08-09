# Dragons are Cool

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/apeskinian/p2_dac)](https://github.com/apeskinian/p2_dac/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/apeskinian/p2_dac)](https://github.com/apeskinian/p2_dac/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/apeskinian/p2_dac)](https://github.com/apeskinian/p2_dac)

Dragons are Cool is a web based quiz that challenges the user to answer questions based on the intricate and often confusing family relationships in the tv show 'House of the Dragon'. Players can choose how many questions will be in the quiz ranging from 5 to 50 and the questions for every quiz are randomly generated from a pool of 50 questions. There is also an easter egg within the game that appears if you answer all questions with the "Dragons are cool" option.

![Dragons are Cool Mockups](documentation/mockup/dac_mockup.png)

source: [Techsini Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/?url=https://apeskinian.github.io/p2_dac/)

## UX

The strategy was to create a web based quiz based on a whimsical Instagram post that was shared to me. The idea that as confusing as it can be to follow who is who in the tv show, they have dragons, and dragons are cool.

Inspiration: [Instagram post](https://www.instagram.com/reel/C84vGgdu4kZ/?igsh=NGF3bGh2cTNyeThn)

The scope of features I wanted to include were:
- A broad pool of questions that I can draw from so as not to make the quiz repetitive.
- A way to incoporate an option of answering "Dragons are cool" for each question that leads to an easter egg if you always choose that.
- A progress bar to show the user how far along in the quiz they are.
- An option to choose how many questions you want in the quiz.
- A feedback system that gives you different messages based on your end score.
- A visual indication on how you did on each question as you progress through the quiz.
- A help menu on every page should the user need guidance.

The structure of the site would be linear so as to easily guide the user through the quiz:
1. Introduction page explaining the quiz and also where the user chooses the length.
2. Game page: this is where the quiz will run and most of the users time will be spent here.
3. Results pages. Depending on what their answers were there will be two options:
   - Standard results page where their score is calculated as a percentage and a relevant message given.
   - Easter egg page if they answered "Dragons are cool" for every answer.

In the wireframing process I decided to keep the "action" buttons always in a similar place and have them the same colour. This should allow the user to quickly get used to how to navigate easily. The help menu would be placed at the bottom.

I then used some images from the show to generate my colour scheme for the site so that everything looked nice.

### Colour Scheme

| Colour Ref | Elements |
| --- | --- |
| `#26241E` | Dark text |
| `#F5F5F5` | Light text |
| `#333` | Dark borders & Quiz length option accent |
| `#590202` | Main buttons |
| `rgba(89, 2, 2, 0.5)` | Main logo background |
| `rgba(115, 72, 34, 0.5)` | Shaded background boxes |
| `FDF8E7` | Text and Answer option backgrounds |
| `F9E9B8` | No selection message, Question, Progress bar and Help menu backgrounds |
| `rgba(89, 2, 2, 0.7)` | Progress bar |
| `93C47D` | Correct answer highlight |
| `A65638` | Incorrect answer highlight |
| `#F2CF63` | Selected aswer highlight |

I used [Adobe](https://color.adobe.com/create/image) to generate my colour scheme from the sample images.
I also used [Color Shades Generator](https://mdigi.tools/color-shades/#f2cf63) to help get some different shades from the palette.

| Adobe Palette 1 | Adobe Palette 2 | Color Shades Generator |
| --- | --- | --- |
| ![Adobe Colors 1](documentation/colours/adobe_colours_01.png) | ![Adobe Colors 1](documentation/colours/adobe_colours_02.png) | ![Color Shades Generator](documentation/colours/colour_shades_generator_01.png) |

### Typography

- [Cinzel](https://fonts.google.com/specimen/Cinzel) was used for the primary headers and titles.

- [Playfair](https://fonts.google.com/specimen/Playfair) was used for all other secondary text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the help menu logo and links within the help menus.

## User Stories

### New Site Users

- As a new site user, I would like to play a quiz, so that I can have a bit of fun!
- As a new site user, I would like to know if I get a question correct, so that I can feel good about it!
- As a new site user, I would like to know if I get a question wrong and also see the correct answer, so that I can learn from it.
- As a new site user, I would like to know my final score, so that I can try and beat it next time.
- As a new site user, I would like to control how long the quiz will be, so that I can do more or less depending on how long I want to play.

### Returning Site Users

- As a returning site user, I would like to control how long the quiz will be, so that I can do more or less depending on how long I want to play.
- As a returning site user, I would like to see if I can figure out why there is always a "Dragons are cool option", so that I can see what happens if maybe I choose that everytime...
- As a returning site user, I would like to have different questions, so that it does not feel repetitive.
- As a returning site user, I would like to have different feedback on questions, so that it does not feel repetitive.

## Wireframes

<details>
<summary> Click here to see the Mobile Wireframes </summary>

| Home | Answer selected | Correct answer | Incorrect answer | Help | Results | Results - Dragons are cool |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/mobile-help.png) | ![screenshot](documentation/wireframes/mobile-answer-selected.png) | ![screenshot](documentation/wireframes/mobile-answer-correct.png) | ![screenshot](documentation/wireframes/mobile-answer-wrong.png) | ![screenshot](documentation/wireframes/mobile-help.png) | ![screenshot](documentation/wireframes/mobile-results.png) | ![screenshot](documentation/wireframes/mobile-results-dac.png) |

</details>

### Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

| Home | Answer selected | Correct answer | Incorrect answer | Help | Results | Results - Dragons are cool |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/tablet-intro.png) | ![screenshot](documentation/wireframes/tablet-answer-selected.png) | ![screenshot](documentation/wireframes/tablet-answer-correct.png) | ![screenshot](documentation/wireframes/tablet-answer-wrong.png) | ![screenshot](documentation/wireframes/tablet-help.png) | ![screenshot](documentation/wireframes/tablet-results.png) | ![screenshot](documentation/wireframes/tablet-results-dac.png) |

</details>

### Desktop Wireframes

<details>
<summary> Click here to see the Desktop Wireframes </summary>

| Home | Answer selected | Correct answer | Incorrect answer | Help | Results | Results - Dragons are cool |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![screenshot](documentation/wireframes/browser-intro.png) | ![screenshot](documentation/wireframes/browser-answer-selected.png) | ![screenshot](documentation/wireframes/browser-answer-correct.png) | ![screenshot](documentation/wireframes/browser-answer-wrong.png) | ![screenshot](documentation/wireframes/browser-help.png) | ![screenshot](documentation/wireframes/browser-results.png) | ![screenshot](documentation/wireframes/browser-results-dac.png) |

</details>


## Features



### Future Features

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 START OF NOTES (to be deleted)

Do you have additional ideas that you'd like to include on your project in the future?
Fantastic! List them here!
It's always great to have plans for future improvements!
Consider adding any helpful links or notes to help remind you in the future, if you revisit the project in a couple years.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

- YOUR-TITLE-FOR-FUTURE-FEATURE-#1
    - Any additional notes about this feature.
- YOUR-TITLE-FOR-FUTURE-FEATURE-#2
    - Any additional notes about this feature.
- YOUR-TITLE-FOR-FUTURE-FEATURE-#3
    - Any additional notes about this feature.

## Tools & Technologies Used

- [![Markdown Builder](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://tim.2bn.dev/markdown-builder) used to generate README and TESTING templates.
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![GitHub](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.
- [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) used for hosting the deployed front-end site.
- [![Balsamiq](https://img.shields.io/badge/Balsamiq-grey?logo=barmenia&logoColor=CE0908)](https://balsamiq.com/wireframes) used for creating wireframes.
- [![Font Awesome](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) used for the icons.
- [![ChatGPT](https://img.shields.io/badge/ChatGPT-grey?logo=chromatic&logoColor=75A99C)](https://chat.openai.com) used to create the questions and themed text content for the quiz.

## Testing

> [!NOTE]  
> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/apeskinian/p2_dac), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://apeskinian.github.io/p2_dac)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/apeskinian/p2_dac) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/apeskinian/p2_dac.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/apeskinian/p2_dac)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/apeskinian/p2_dac)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

There are no differences between the local and deployed version of the site.

## Credits

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

### Content

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to provide attribution links to any borrowed code snippets, elements, or resources.
A few examples have been provided below to give you some ideas.

Ideally, you should provide an actual link to every resource used, not just a generic link to the main site!

⚠️⚠️ EXAMPLE LINKS - REPLACE WITH YOUR OWN ⚠️⚠️

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |
| [strftime](https://strftime.org) | CRUD functionality | helpful tool to format date/time from string |
| [WhiteNoise](http://whitenoise.evans.io) | entire site | hosting static files on Heroku temporarily |

### Media

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to provide attribution links to any images, videos, or audio files borrowed from online.
A few examples have been provided below to give you some ideas.

If you're the owner (or a close acquaintance) of all media files, then make sure to specify this.
Let the assessors know that you have explicit rights to use the media files within your project.

Ideally, you should provide an actual link to every media file used, not just a generic link to the main site!
The list below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links
by sending yourself the following command: `!freemedia`.

⚠️⚠️ EXAMPLE LINKS - REPLACE WITH YOUR OWN ⚠️⚠️

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Lorem Picsum](https://picsum.photos) | home page | image | hero image background |
| [Unsplash](https://unsplash.com) | product page | image | sample of fake products |
| [Pixabay](https://pixabay.com) | gallery page | image | group of photos for gallery |
| [Wallhere](https://wallhere.com) | footer | image | background wallpaper image in the footer |
| [This Person Does Not Exist](https://thispersondoesnotexist.com) | testimonials | image | headshots of fake testimonial images |
| [Audio Micro](https://www.audiomicro.com/free-sound-effects) | game page | audio | free audio files to generate the game sounds |
| [Videvo](https://www.videvo.net/) | home page | video | background video on the hero section |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for his support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my daughter Niamh, my sister Natalie and my whole family for believing in me, and supporting me while making this transition into software development.
