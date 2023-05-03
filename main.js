let API = "https://jsonplaceholder.typicode.com/users";
// let data = fetch(API).then(objRes => objRes.json())

async function getResponse() {
  let response = await fetch(API);
  let content = await response.text()
  let content2 = JSON.parse(content)
  content2 = content2.splice(0, 5)

  let ul = document.querySelector('.users');

  for(let i in content2){
    console.log(content2[i]);
    ul.innerHTML += `
      <li>${content2[i].name}</li>
      <p>${content2[i].username}</p>
      <p>${content2[i].address.street}</p>
    `
  }
}

// getResponse()


function getResponse(){
  let response = fetch(API).then(data => data.json()).then(data2 => console.log(data2))
  console.log(response);
}

getResponse()