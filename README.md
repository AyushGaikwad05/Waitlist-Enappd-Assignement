# WaitList Enappd Assignment 
This project demonstrate simple waitlist page built with next.js and tailwind css, the app is frontend only, focusing on validating user input and giving clear feedback. 

# Features 
## 1. Email Validation 
To make sure users only enter business emails, I blocked popular generic email domains such as: 
``` bash
"gmail.com", "yahoo.com", "outlook.com", "icloud.com", "zohomail.com", "protonmail.com", "gmx.com"
```
I used a simple check on the part of the email after @ and compared it with a list of blocked domains. If it matches, an error is shown.



## 2. Text Area 
  I tracked the textarea input using useState and displayed a live character count. A message appears if it is less than 20 characters.
If the input is less than 20 characters, it will show an error message. also i have added a check for that message if the text is empty for that text area, then it will show that message if user type a character then text will disappear. 

## 3. Form Submission 
Handled with onSubmit. When successful, the form state switches to a success message.



# Problem Faced

# 1.  Responsive for mobile 
Initially, I set fixed width and height for the card, which looked fine on desktop but broke the layout on smaller screens. 
to solve this I switched to responsive sizing using Tailwind CSS Used w-full max-w-md for the card width. Let the height adjust automatically instead of fixing it. 

# 2. Deployment Issue 

I faced a deployment issue on netlify, i am  using netlify for deployement first time. i use vercel and render before for my personal projects. 
The error was:-  Deploy failed due to an error in @netlify/plugin-nextjs plugin.
So i install netlify plugin from npm. 

then again it shows second error was regarding node.js version so i updated the Node.js version in the netlify.toml file to match the required version.
