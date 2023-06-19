// Используя ресурс json placeholder получите всех юзеров и отправьте в консоль только 
// 1) username-ы отсортированный по алфавиту
// 2) Количество постов каждого из юзеров в параметре: post_count
// 👉👉👉 Для получения всех юзеров: https://jsonplaceholder.typicode.com/users
// 👉👉👉 Для получения всех постов: https://jsonplaceholder.typicode.com/posts


function sortUserName(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(avtor => {console.log("avtor", avtor)
        let userName = avtor.sort((a, b) => a.username < b.username ? -1 : 1)
        userName.map((element) => console.log(element.username))
    
    });
    } sortUserName();
    
    function userPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(arry => {
            let posts = [];
            arry.map((element) => posts.push(element.userId));
    
            let sumPosts = {};
            posts.forEach(element => { sumPosts[element] = (sumPosts[element]||0) + 1;
            return sumPosts;    
            });
            console.log("sum", sumPosts);
           
            })
           
        }
     userPosts();
    
    
//     // Level 2
//     // Выведите всю информацию в виде таблицы на экран и предоставьте функции сортировки по каждой из двух колонок: 
//     // а) username (default sort by alphabetical) 
//     // b) post_count
//     // 👉👉👉 Название функций, названия переменных, названия самих колонок в HTML выберите так, чтобы было понятно что они из себя представляют! 
    
function ascendingId(){
  arr.sort((a, b) => a.id > b.id ? -1 : 1);
  document.getElementById("ascendingId").style.display = "none";
  document.getElementById("descendingId").style.display = "inherit";
  sortTabl();
} 


function descendingId(){
  arr.sort((a, b) => b.id - a.id ? -1 : 1);
  document.getElementById("descendingId").style.display = "none";
  document.getElementById("ascendingId").style.display = "inherit";
  sortTabl();
} 


function ascendingPosts(){
  arr.sort((a, b) => a.username < b.username ? -1 : 1);
  document.getElementById("ascendingPosts").style.display = "none";
  document.getElementById("descendingPosts").style.display = "inherit";
  sortTabl();
} 


function descendingPosts(){
  arr.sort((a, b) => a.username > b.username ? -1 : 1);
  console.log("ab", arr);
  document.getElementById("descendingPosts").style.display = "none";
  document.getElementById("ascendingPosts").style.display = "inherit";
  sortTabl();
} 




let arr = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
]
function sortTabl(){
  document.getElementById("data").innerHTML = "";
  for( let i = 0; i< arr.length; i++){
  let tr = '<tr>';
  tr += '<td>' + arr[i].id + '</td>';
  tr += '<td>' + arr[i].username + '</td>';
  tr += '</tr>';

  document.getElementById("data").innerHTML += tr;
  }
} 

ascendingId();
descendingId();
ascendingPosts();
descendingPosts();


    
    // Level 3
    // 3.1. Создайте страницу, которая отображает ID, City, Country полученные из запроса по ссылке: https://random-data-api.com/api/address/random_address
    // Создайте функцию, которая каждые полторы секунды проверяет - если в ответе на GET запрос поменялся  ID, то вызываем другую функцию, цель которой получить новые данные и обновить HTML, а если данные не изменились - ничего не делаем.

    let currentId = null;
function getRandomAddress (){
  fetch("https://random-data-api.com/api/address/random_address")
  .then((response) => {
    return response.json();
  })
  .then((randomAddress) => {

    if(currentId !== randomAddress.id){
    // console.log("id:", randomAddress.id);
    // console.log("city:", randomAddress.city);
    // console.log("Country:",randomAddress.country );

    document.getElementById("id").innerText = randomAddress.id;
    document.getElementById("city").innerText = randomAddress.city;
    document.getElementById("country").innerText = randomAddress.country;
    }
    currentId = randomAddress.id;

  })

}
// getRandomAddress();

setInterval(getRandomAddress, 1500);