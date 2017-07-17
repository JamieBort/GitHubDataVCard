// 1. First, find our UL Container
let container = document.querySelector('#apiInfo');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayGitHubInfo);
request.open('GET', 'https://api.github.com/users/jamiebort');
request.send();

// Our display function
function displayGitHubInfo() {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  // console.log(data);

  // let name = console.log(data.name);
  // let login = console.log(data.login);
  // let url = console.log(data.url);
  // let email = console.log(data.email);

  // document.getElementById('name');

  document.getElementById('name').innerHTML = data.name;

  document.getElementById('url').innerHTML = data.url;

  document.getElementById('email').innerHTML = data.email;

   document.getElementById('company').innerHTML = data.company;
}


// let list = '';

// data.results.forEach( function (person) {
//   list += `<li>${person.name}</li>`;
// });

// container.innerHTML = list;




// homepageUrl (URI)
// The repository's URL.

// mirrorUrl (URI)
// The repository's original mirror URL.

// url (URI!)
// The HTTP URL for this repository


// nameWithOwner (String!)
// The repository's name with owner.




// name
// github url
// email
// company
// website
