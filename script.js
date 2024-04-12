
function showPreloader() {
    document.getElementById('preloader').style.display = 'block';
  }
  
  
  function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
  }
  
  showPreloader(); 
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      hidePreloader(); 
  
      const wrapperElement = document.getElementById('wrapper');
      data.forEach(item => {
        const div = document.createElement('div');
        const nameHeader = document.createElement('h1');
        nameHeader.textContent = `Name: ${item.name}`;
        const usernameHeader = document.createElement('h1');
        usernameHeader.textContent = `Username: ${item.username}`;
        const emailHeader = document.createElement('h2');
        emailHeader.textContent = `Email: ${item.email}`;
        const idHeader = document.createElement('h1');
        idHeader.textContent = `Id: ${item.id}`;
        const hr = document.createElement('hr');
  
        div.appendChild(nameHeader);
        div.appendChild(usernameHeader);
        div.appendChild(emailHeader);
        div.appendChild(idHeader);
        div.appendChild(hr);
        wrapperElement.appendChild(div);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  







// fetch('https://jsonplaceholder.typicode.com/users')
// .then(()=>{
//     return response.json()
// })
// data.forEach((item => {
//     document.getElementById('wrapper').innerHTML += `<h1>${item.id} ${item.name} ${item.Username} ${item.email}</h1>`
// }))


// .then((data)=>{
//     document.getElementById('wrapper').innerHTML += `<h1>${data.id} ${item.name} ${item.Username} ${item.email}</h1>`
// })





