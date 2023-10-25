
//Function to click navbar to scroll
const clickToScroll = () =>{
 //buttons
const navLinks = document.querySelectorAll('nav ul li');
 //sections
    const sections = document.querySelectorAll('section');
 //navButtons
  const home = navLinks[0];
  const about = navLinks[1];
  const menu = navLinks[2];
  const contact = navLinks[3];

 //Function to scroll to view sections
    const clickScroll = (sec) => {sec.scrollIntoView({behaviour: 'smooth'})}
    
    about.addEventListener('click',() => {clickScroll(sections[0])})
    menu.addEventListener('click',() => {clickScroll(sections[1])})
    contact.addEventListener('click',() => {clickScroll(sections[2])})
}
clickToScroll();









