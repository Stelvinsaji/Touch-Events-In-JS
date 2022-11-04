/* Touch Event Basics */

// The way u setup a touch event is just like any other event listener.
// Normally you would say click, but to do a touch Event we wanna say "touchstart". & this is goanna be a start of the touch event
document.addEventListener("touchstart", (e) => {
  console.log(e);
});
// Now, when you console.log the event & go to the browser & touch it, nothing will be logged in.
// The reason is that when ur on the browser just doing normal browsing, u can't trigger touch event. It's only for touch based devices
// If u wanna trigger the touch event on ur PC, just change the view to the mobile device & when u click on the screen, the touch event will be printed on the console

/* 3 things to know about Touch Events */

// 1. touches: It tells u about all the diff places that the screen is being currently touched

// 2. targetTouches: It tells us all about the touch objects for touch points that are still in contact with the touch surface

// 3. changedTouches: It's gonna give us all of the touches that have changed since the last time the event fired

// So we're gonna add a listener for the touchstart event.
// When the user touches the screen, the console will print start.
// If the user moves their finger on the screen, the console will print move with some numbers of the movement.
// If the user releases their finger, the console will print end.

document.addEventListener("touchstart", (e) => {
  console.log("Start");
});

document.addEventListener("touchmove", (e) => {
  console.log("Move");
});

document.addEventListener("touchend", (e) => {
  console.log("End");
});

/* Some Advanced Touch Events Features */

// Adding red dots to the screen when a person touches the screen
document.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pagex}px`;
    dot.id = touch.identifier; // Identifier is a unique id that corresponds to like which index it's in the array. Eg: 0, 1, 2, 3, 4. So if you touch ur phone with 5 diff fingers, each one is gonna have it's own individual identifier.
    document.body.append(dot); // Adding the dot to the screen
  });
});

// Removing the red dots from the screen after touching
document.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove(); // Removing the dot from the screen
  });
});

// This is gonna be used as a way of ensurung that the dot on the screen moves with the touch
document.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pagex}px`;
  });
});

// This is gonna tell me how much total touches I have in a device, how many of them are within the target & how many of them are actually changing each time the event is called
// So if you touch the mobile screen, the console will print "touches 1, targets 1, changed 1". If u press the second time, it will show the number 2
const topHalf = document.getElementById("top-half");
topHalf.addEventListener("touchstart", (e) => {
  console.log("Touches", e.touches.length);
  console.log("Targets", e.targeTouches.length);
  console.log("Changed", e.changedTouches.length);
});

/* Preventing Defaults - It actually blocks events for click */

// If u tap on the screen, the console will print clicked. There will be a number before clicked & that number will show you how many times you have clicked the screen
document.addEventListener("click", (e) => {
  console.log("clicked");
});

// If u prevent default, now it's preventing that click event from firing. So if you touch the screen, nothing will be printed in the console
topHalf.addEventListener("touchstart", (e) => {
  e.preventDefault();
});

/* Touch Cancel */

// Having Touch Cancel means that "touchend" dosen't always fire. Sometimes the cancel event will fire instead.
// Whatever you do in your "touchend", must also declare it in the "touchcancel"
document.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});
