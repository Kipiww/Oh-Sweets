//Function to click navbar to scroll
const clickToScroll = () =>{
 //buttons
const buttons = document.querySelectorAll('button');
 //sections
    const sections = document.querySelectorAll('section');
 //navButtons
    const homeBtn = buttons[0];
    const aboutBtn = buttons[1];
    const menuBtn = buttons[2];
    const contactBtn = buttons[3];

 //Function to scroll to view sections
    const clickScroll = (sec) => {sec.scrollIntoView({behaviour: 'smooth'})}
    homeBtn.addEventListener('click',() => {clickScroll(sections[0])})
    aboutBtn.addEventListener('click',() => {clickScroll(sections[1])})
    menuBtn.addEventListener('click',() => {clickScroll(sections[2])})
    contactBtn.addEventListener('click',() => {clickScroll(sections[3])})

}
clickToScroll();
//function to remove the hover when clicked






