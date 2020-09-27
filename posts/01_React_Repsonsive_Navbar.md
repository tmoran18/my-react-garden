---
title: 'React Responsive Navbar - Using Hooks'
author: 'Tim'
tag: 'React'
datePub: '27/09/2020'
blurb: "Creating a simple responsive Navbar in React using CSS Media Queries and React hooks."
color: "blue"
---
# React Responsive Navbar - Using Hooks

If you want to jump straight to the project, here is the repo or CodeSandbox. Otherwise, you can follow along down below.

 [Github Repo](https://github.com/tmoran18/react-responsive-navbar)<br>
 [CodeSandbox](https://codesandbox.io/s/react-responsive-navbar-ett4z)

There are lot's of way's to build components in React; this is how I like to implement a simple responsive Navbar for my projects.

<p align="center">
  <img src="https://res.cloudinary.com/dsjhcek2q/image/upload/v1601164489/blog/responsive_navbar_z7iao9.gif" alt="respsonsive react navbar">
</p>



Set up and strip back a create react app. Then create the following folder structure, including the images/icons you would like to use for the project.

!["Create React App folder structure"](https://res.cloudinary.com/dsjhcek2q/image/upload/v1601163929/blog/folder_structure_ddwkyi.jpg "Folder Structure")

Your App.js file will have both Navbar and MobileNavbar components in it. I find it so much easier to turn on/off the components with CSS Media queries depending on the screen size, rather than trying to work with state.

```jsx
// App.js

import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
};

export default App;

```

Add you Navbar component, pretty simple here, logo, list. You will probably be wrapping this in some Link tags if you're using React-Router, but we will keep it simple for now.

```jsx
// Navbar.js

import React from "react";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./logo.svg" width="50" alt="a logo" />
      <div>
        <ul className="menu_list">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
```
The MobileNavbar is pretty much the same with some different styling.

```jsx
// MobileNavbar.js

import React from "react";
import "../styles.css";

const MobileNavbar = () => {
  return (
    <nav className="mobileNav_container">
      <img src="./logo.svg" width="50" alt="logo" />
      <img
        className="menu_icon"
        src="./menu_icon.svg"
        alt="hamburger menu icon"
      />
      <div className="mobileNav_menu_container">
        <ul className="mobileNav_menu_list">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
```
We are keeping the styling basic here. We hide the main navbar when the screen gets smaller than 600px and hide the MobileNavbar by default. When the media query fires, we add flex display to the MobileNavbar, which will then show it.

The menu links of the MobileNavbar are currently in the open state. We will change this, further along, the links will be hidden until the user clicks on the Hamburger Icon to open/close the MobileNavbar. We will do this by adding the mobileNav_closed and mobileNav_open classNames depending on the state.


```css
/* Styles.css */


* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}

body {
  padding: 0px;
  margin: 0px;
}
/* Global Styles */
ul {
  list-style-type: none;
  padding: 0px;
}

ul li {
  padding: 15px;
}

/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.menu_list {
  display: flex;
}

/* Mobile Navbar */
.menu_icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
}

.mobileNav_menu_container {
  position: relative;
}

.mobileNav_menu_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  margin: auto;
  background: dodgerblue;
  border-radius: 4px;
  color: white;
  transition: ease all 0.4s;
}

.mobileNav_container {
  display: none;
  padding: 10px;
}

.mobileNav_closed {
  top: -300px;
}

.mobileNav_open {
  top: 10px;
}

/* Media Queries */
@media only screen and (max-width: 600px) {
  /* Navbar Media Queries */
  .navbar {
    display: none;
  }
  /* Mobile Navbar Media Queries */
  .mobileNav_container {
    display: flex;
    flex-direction: column;
  }
}

```
Let's get into the functionality of the MobileNavbar. The MobileNavbar needs to:


 - Have an open and closed state
 - Open and Close when the User clicks on the icon
 - Set to closed state if the window is resized past the media query
 - Set to closed state if the windows is reloaded

Ok, so we have broken down the functionality of the MobileNavbar, let's try and further breakdown how we plan to achieve these functions.

 **1. Have an open and closed state**
 - Add state to the MobileNavbar - A boolean of true or false should suffice.
 

 **2. Open and Close when the User clicks on the icon**
 - Add an OnClick function on the hamburger icon to call a function to set the state of MobileNavIsOpen.
 - The function is basically a toggle, so if mobileNavIsOpen = true, set the state to false, if mobileNavIsOpen = false set the state to true.
 - The className of the MovileNavbars UL can now receive an expression, to set the className of open or closed depending on the state.
 


 **3. Set to closed state if the window is resized past the media query**
 - Add an event listener to listen for window resizing.
 - If then window gets is resized passed a certain size, set the MobileNavIsOpen state to false.

### 1. Add Open / Closed State

In the MobileNavbar.js file import useState hook by adding it to your React import, then add the state.
```jsx
// MobileNavbar.js

import  React,  {  useState  }  from  "react";
// ...

const  MobileNavbar  =  ()  =>  {
	const  [mobileNavIsOpen, setMobileNavIsOpen] =  useState(false);

//...
```
### 2. Open & Close menu when user clicks
Add an onClick handler to your hamburger icon.

```jsx
// MobileNavbar.js

//...
<img
        className="menu_icon"
        src="./menu_icon.svg"
        alt="hamburger menu icon"
        onClick={handleMobileNavClick}
      />
 //...
```

Create the handleMobileNavClick function
```javascript
// MobileNavbar.js

// Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  };
```
Add an expression to set the className on the UL. Using template literals here so we can use an expression inside the ${ } and also keep the mobileNav_menu_list class.
```jsx
// MobileNavbar.js

  <ul
     className={`
	     ${mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"} 
	     mobileNav_menu_list`}>
       <li>Home</li>
       <li>About</li>
       <li>Work</li>
       <li>Services</li>
  </ul>
```
<br>
<hr>

Ok, so the MobileNavbar should be working pretty smoothly now. However, you will notice that if you have the MobileNavbar open, and resize your window then resize it back to mobile; the menu will still be open.

### 3. Set to closed state if the window is resized past the media query

We want to listen for the window resizing past 600px, to do this we can add an event listener on the window. We can use the [resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) and [window innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) to achieve this.

```javascript
// MobileNavbar.js

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });
```

We could abstract the second parameter of the addEventListener out into it's own function, but it's so simple I decided to leave it like this.

If you have not seen this kind of expression before or your not sure how the window.innerWidth > && setMobileNavIsOpen(false) expression works you can read more about inline expressions [here](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) about it. You can think of it as an if statement without an else.

```javascript
// if window width is greater than 600px
  if(window.innerWidth > 600) {
    setMobileNavIsOpen(false);
  }
```

### Extra Functionality

Some other functions that could be added would be, if the links worked, you would most likely want to close the mobile menu when a link is clicked.

Also sometimes I like to add a timer, so the menu closes itself after a certain amount of time.

Thanks for following along if you got this far. If you want to get in contact with me, you can find me on [twitter here](https://twitter.com/Tim__Moran).