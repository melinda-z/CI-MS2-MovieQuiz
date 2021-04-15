# CI-MS2-MovieQuiz Testing Documentation

## Table of Contents

- [Testing Devices](#testing-devices)

- [Testing Browsers](#testing-browsers)

- [User Stories Testing](#user-story-testing)

- [Validators](#validators)

- [Features Testing](#features-testing)

  - [Home Page](#home-page)

  - [Game Page](#game-page)

  - [End Page](#end-page)

  - [High Scores Page](#high-scores-page)

- [Site Responsiveness](site-responsiveness)

- [Further Testing](#further-testing)

- [Bugs and Issues](#bugs-and-issues)

## Testing Devices

- MacBook Air

- Dell laptop

- Sumsung Galaxy tab A10.1

- Sumsung Galaxy 5

- Huawei P10

- Sumsung A125F

- Iphone 5

## Testing Browsers

- Google Chrome

- Mozilla Firefox

- Opera

- Microsoft Edge

- Safari

## User Stories Testing

- As a user, when I enter a website, I want to see a clear visual set up, image and buttons and minimum amount of text on front page. Movie Quiz used a full screen background image and head line and 3 buttons as its main feature on the front page, the visual effect is clear and simple.

- The color contrast is critical to users as be able to read the content on the page is the most important requirement. Movie Quiz used yellow over dark red color theme, it's easy to read and also easy on the eyes.

- As a user, I would like to use other senses rather than just sight, it gives me better experience. Movie Quiz uses aduio throughout the site, background music option on the home page, right/wrong answer sound effect on the game page, and congratulation music when the game ends.

- As a user, when I play a quiz game, I expect the format of questions are well set up. Movie Quiz game page consist question heading area indicating how far the user is in the game, a progress bar for visual effect, updated scores tells how many points they have made so far.

- As a user, I need to know where is clickable, and which choice is my mouse on. Moive Quiz choices have a hover over effect, the choice scales bigger, the border changes color and a box shadow appears when the mouse is hovered over.

- AS a user, I need to know if my answer is right or wrong. Movie Quiz has implemented that need by visual and sound effect. The choice changes to green color if the answer is correct, and red if the answer is incorrect. A dedicated sound is also assigned to both scenarios.

- As a user, I expect quiz game is a bit challenging. Movie Quiz has a timer installed in the game, it only gives the user 60 seconds to select an answer.

- As a user, I expect to go back to quit the game if I decided to. The game page has a option of going back to home page anytime.

- As a user, when I finish the game, I would like to know my final scores. The game automaticly go to the end page when a game is finished and a final score displays.

- As a user, images and music are better experience than plain text. The game finishes with a congratulations music auto plays and an images with encourage words.

- As a user, I want to save my name and my high scores. The end page gives the user the option of saving their names and score in the local storage when a new high score is achieved.

- As a user, I would like the option to play again, if I found the game is interesting and want to do better in the next round. The end page has a button of playing the game again or go home.

- As a user, I would like to check the scores leader board. In the home page, there is a button to check the high scores list of top 5.

- As a user, sometimes I could get annoyed by the music/sound so I want to have the option to switch it off anytime. Throughout all pages when there's sound/music, a button is provided to switch it off anytime.

- As a user, it will be nice to know the developer info. The clickable footer provide this option with the name and social link of the developer.

- The favicon gives a clear indication to the users of what the website is about, and it represent a brand image of the website. And made it easy to spot when the user has other tabs open or bookmark the page.

## Validators

- The W3C CSS Validation Service

  No errors was found in the first test. A screenshot can be found [here](assets/documentation/w3c-css-validator.png)

- The W3C HTML Validation Service

  An error was found related to audio file name has a space.

  An error was found related to an unclosed div.

  An error was found related to an illegal attribute.

  I have fixed all errors and run the test again, it came back clear, a screenshot can be found [here](assets/documentation)

## Features Testing

### Home Page

- Navigation Buttons

  Tested all three buttons, make sure it linked correctly and direct to the correct page. Checked the hover effect works when the mouse hover over the button scales and box shadow drops.

- Game Rules Modal

  Made sure the game rules modal opens and close as expected, and click on the X or anywhere else on the page it closes itself.

- Music On/Off Button

  Tested that the music On/Off button toggles when you click and the music is turned on and off accordingly.

- Footer Arrow

  Tested the footer arrow is clickable, and it toggles the footer shown and hidden.

- Footer

  Made sure when the footer shows it doesn't add to the viewport and the height stays the same.

- Footer Social Links

  Check all icons are clickable,changes color when hover and linked to relevant pages. Also opens up a new page.

- Music Auto Play

  Music auto play doesn't work when you first visit due to [autoplay policy](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes), but it works when you go back to the home page.

### Game Page

- Loader

  Tested the loader shows up when the speed of loading is slow, and displayed as expected.

- Question Number Display

  Checked question number is displayed for each question in each game.

- Question Progress Bar

  Checked the question progress bar is updating with each question been answered, and shows up the correct percentage.

- Score Title

  Checked the score title displayed.

- Score Display Update

  Made sure the scores update when an answer is correct, and adds up 10 points each time.

- Main Question Display

  Checked the main question is displayed correctly and randomly with no errors etc by playing the game numerious times.

- Choices Display

  Checked the choices of each questions are displayed correctly without any errors. And made sure the correct answer is displayed in a random place.

- Timer Display

  Check the timer is displayed in the correct format and the icon shows up in the correct style.

- Timer decrement

  Made sure the timer decrease by 1 every second, and goes back to 59 when the next question starts.

- Sound On/Off Button

  Checked the sound on/off button is working, it turns the sound on/off.

- Go Home Button

  Made sure the go home button direct the user to the home page.

- Right/Wrong Answer indication (color)

  Checked the choice turn to green when the answer is the correct answer and red when the answer is a wrong answer.

- Right/Wrong Answer indication (sound)

  Checked the sound is playing accordingly when the question been answered.

- No Repeating Questions in the round

  Double checked there is no repeated question shows up in the same round by playing the game and console.log all 10 questions.

- Move to the next question automaticly

  Made sure the next question is displayed after the user clicked on an answer.

- Move to the next question when the timer is up

  Made sure after the timer is up the next question is displayed.

### End Page

- Final Score Display

  Checked a final score is displayed clearly.

- Music Auto Play

  Congrats music is automaticly played when the game is finished.

- Music On/off Button

  Tested the music on/off button is working.

- Congrats Images

  Tested the congrats images are showing up in the right style and position.

- Congrats Images show up depending on the scenarios

  Checked images are showing accordingly to the different scenarios by playing the game and changed the most recent score in the local storage.

- Username Input

  Tested if the user can type in the input field.

- Save Button

  - Save name and Score in local storage

    Tested if the name and score are saved in the local storage by checking the local storage in application in developer Devtool.

  - Only allow save when a value entered

    Made sure the button is disabled if no value in the input field.

- Play Again Button

  Made sure the play again button direct to the game page and the questions are displayed correctly from the start.

- Go Home Button

  Checked the go home button is working and linked to the home page.

### High Scores Page

- High Scores Title

  Checked the high score title is displayed with an icon following.

- Leader Board

  Checked a leader board is displayed when users save their names and scores.
  And it shows the top 5.

- Leader Board Scale When Hovered Over

  Checked each name and scores scale when hovered.

- Go Home Button

  Checked the go home button worked and linked to the home page.

## Site Responsiveness

- Tested in Google Devtool by switch on the mobile view for different screen size, and by reducing the broswer window sizes.

- Tested by opening up the website on different devices.

- Test on Google Extensions [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)

  The screenshots are the following:

  [Home Page](assets/documentation/homepage.png)

  [Game Page](assets/documentation/gamepage.png)

  [End Page](assets/documentation/endpage.png)

  [High Scores](assets/documentation/highscore.png)

## Further Testing

Futher more I have done a testing with Google Devtool light house, the result is shown below:

![light house](assets/documentation/lighthouse.png)

## Bugs and Issues

- When tested on Sumsung Galaxy 5, after the user click on an answer the hover effect stays on that choice even after the next question is displayed.

- The home page backgroun music doesn't autoplay for first entering the page and an error shows in console as seen below:

  ![error](assets/documentation/error.png)
