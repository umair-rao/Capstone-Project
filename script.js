// Get monile menu,hamburger & cross button

const menuButton = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const menu = document.getElementById('mobile-menu-id');

// Function to hide menu

function hideMenu() {
  menu.classList.replace('show', 'hide');
  document.body.style.overflow = 'scroll';
}

// Function to show menu

function showMenu() {
  menu.classList.replace('hide', 'show');
  document.body.style.overflow = 'hidden';
}

// Event Listners to show and hide mobile menu

menuButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);

// Data to dynamically fetch team

const team = [
  {
    image: './images/speaker1.png',
    name: 'Yohai Benkler',
    designation: 'General Manager',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia',
  },
  {
    image: './images/speaker2.png',
    name: 'SohYeong Noh',
    designation: 'Senior Project Enginer',
    description: 'Layla Tretikov is the general secretary of the Cambridges Foundation, a non-profit organization that runs Wikipedia.',
  },
  {
    image: './images/speaker3.png',
    name: 'Project Engineer',
    designation: 'Lila Tretikov',
    description: 'European integration and online youth participation in politics and democracy are major concerns',
  },
  {
    image: './images/speaker4.png',
    name: 'Kilnam Chon',
    designation: 'Construction Manager',
    description: 'As he is professor at Oxford , he opened Art Center Nabi, Korea first digital art institution in 2012, and is currently serving.',
  },
  {
    image: './images/speaker5.png',
    name: 'Julia Leda',
    designation: 'Team Lead Manager',
    description: 'Developed Asias first Internet protocol network SDN and led Koreas first private line Internet connection in 1990, ushering in a full-fledged',
  },
  {
    image: './images/speaker6.png',
    name: 'Ryan Merkley',
    designation: 'Procurement Engieer',
    description: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.',
  },
];

const teamMembers = document.getElementById('team-members-id');

team.forEach((element) => {
  const members = document.createElement('div');
  members.className = 'memeber-detail';
  members.innerHTML = ` 
  <div class='member-detail'>
    <div>
      <img id='member-image' src='${element.image}'>
    </div>
    <div class='member-data'>
      <h4 id='member-name'>${element.name}</h4>
      <h5 class='deignation'>${element.designation}</h5>
      <p id='member-desc'>${element.description}</p>
    </div>   
  </div> 
    `;
    teamMembers.appendChild(members);
});
