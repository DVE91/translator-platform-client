## :black_nib: Tone of Voice :black_nib:

### About the app 

If you want to try it out, check out [this section](#how-to-use-and-intall-this-app) that takes you through the process.

:eyes: [You can find the deployed version of this project here](https://epic-bhaskara-ab623f.netlify.app/) :eyes:

Sometimes you need a translation that takes into account specific culture references, or needs to convey a certain sentiment to its reader.
To avoid embarrassing mistakes, you need someone that can transcreate, not just translate, communications aligned with your brand. 

Tone of Choice is a translation booking platform that celebrate :sparkles: artists of transcreation. :sparkles:
It provides a quick and easy order system for translations, and a nice dashboard with interesting features for translators associated to the platform.

### Table of contents

:ballot_box_with_check: [How to use and install this app](#how-to-use-and-install-this-app)

:ballot_box_with_check: [Demo](#demo)

:ballot_box_with_check: [Technologies](#technologies)

:ballot_box_with_check: [Goals, userstories and wireframe](#goals-userstories-and-wireframe)

:ballot_box_with_check: [Server repo](#server-repo)

#### How to use and install this app 
Use the deployed version to play around, or clone repo (don't forget to install dependancies). 

##### As a translator
- Click "translator sign-up / login" to create a translator account. Your password will be hashed, safety first. 
- Or, use a test account (for example: dee@test.com, pw "dee") to login.
- In your dashboard you can: update your availability, alter your rate, add or delete language skills, work on incoming jobs and submit the work (this will send an email with the finished work to the client).

##### As a customer in need of a translation
- Click "sign-up / login" if you want to make a customer account /login to an existing one.
- You can also book a translation without an account. In any case, click "Let's go!" on the homepage for a new order.
- Translators are selected by language skills and accurate availability, based on the workload of the uploaded document. This website works with a realtime calendar. If no translators are shown in the designated area, it probably means there's no current availability. If you want to test the order process, I'd advise to log in as a translator and make sure there is availability for your desired language options.

#### Demo
##### As a translator
![Translator demo](Translatordemo.gif)

##### As a customer in need of a translation
![Customer demo](Customerdemo.gif)

#### Technologies
Click to see project examples!

:round_pushpin: [React](https://github.com/DVE91/translator-platform-client/blob/development/src/App.js)

:round_pushpin: [Redux](https://github.com/DVE91/translator-platform-client/tree/development/src/store)

:round_pushpin: [Material UI](https://github.com/DVE91/translator-platform-client/blob/development/src/components/Dashboard/MyJobs.js)

:round_pushpin: [Moment and its extension-pack cousin Moment Range](https://github.com/DVE91/translator-platform-client/blob/development/src/components/Order/StepTwo/TranslatorProfiles.js)

:round_pushpin: [EmailJS](https://github.com/DVE91/translator-platform-client/blob/development/src/components/Dashboard/Translation/TranslatedDocument.js)


#### Goals, userstories and wireframe

##### Goals :pencil2:
This project drew its inspiration from a friend, who works as a freelance translator and has a true passion for language.
As a freelancer, she manages her work in two ways:
1. Through a large known translation platform => high traffic, mostly anonymous, "who writes it" is not a priority.
2. Through her personal website => low traffic, very personal, clients seek her for her work and style.

Her experience with both of these media, led to the following userstories.
The goal was to make a platform that is "best of both worlds". Make it easy for a client to book a translation, 
put the translator back in the spotlights where they belong. 

##### Userstories :pencil2:
Below you can find a quick overview of the main userstories of this project. For a complete overview including subtasks, [click here.](https://github.com/DVE91/translator-platform-client/projects/1) 

1. As a customer in need of translation, I want to see which translators are available for my assignment, that match the criteria of the job.
2. As a customer in need of translation, I want to receive a realtime quote, so I can book said job straight away.
3. As a customer, I want to receive my order on or before the assigned deadline by e-mail.
4. As a translator, I want to be able to work on my assignments on the platform, so I can send it back to my client upon completion. 
5. As a translator, I want to have an overview of my jobs, my availability, my personal profile and my finances.
6. As a translator, I want to be able to uphold my own calendar and set my own fee, so I can be in control of my availability and my rates.

##### Wireframe :pencil2:

The wireframe for this project is made with MockFlow and can be found [here](https://wireframepro.mockflow.com/view/Ma7234c7f58983077ccd8406b45afba6d1594996476534).

#### Server repo

[Click here](https://github.com/DVE91/translator-platform-server) to view the server side of this project.









