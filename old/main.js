// let container = document.querySelector('#apiInfo'); // Using CSS selectors to assign the #apiInfo attribute to the variable 'container'. // commented out temporarily. Apparently this is not needed.

let request = new XMLHttpRequest();
request.addEventListener("load", displayGitHubInfo);
request.open('GET', 'https://api.github.com/users/jamiebort');
request.send();

function displayGitHubInfo() {

  let data = JSON.parse(this.responseText);


  document.getElementById('name').innerHTML = `Name: ` + data.name;

  document.getElementById('url').innerHTML = `URL: ` + data.url;

  document.getElementById('email').innerHTML = `Email: ` + data.email;

  document.getElementById('company').innerHTML = `Company: ` + data.company;

  document.getElementById('blog').innerHTML = `Website: ` + data.blog;

  document.getElementById('bio').innerHTML = data.bio;
}
