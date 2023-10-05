let btn = document.querySelector(".btn");

btn.addEventListener("click", generatedata);

async function generatedata() {
  let ind = Math.floor(Math.random() * 20);
  let url = `https://pokeapi.co/api/v2/pokemon/${ind}`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data) ;

  let hp = data.stats[0].base_stat;
  let imgsrc = data.sprites.other.dream_world.front_default;
  let attack = data.stats[1].base_stat;
  let defence = data.stats[2].base_stat;
  let speed = data.stats[5].base_stat;

  let arr = data.types;
  // console.log(arr);

  arr.forEach(async (item) => {
    let namesOfType = await item.type.name;
    let para = document.createElement("p");
    para.innerHTML = namesOfType;
    //  console.log(para);
    document.querySelector(".type").appendChild(para);
  });

  let card = document.querySelector(".card-container");

  card.innerHTML = `<div>
    <div class="HP">
     <p>HP</p>
     <h3>${hp}</h3>
    </div>


    <div class="img">
     <img src="${imgsrc}" alt="">
     <h2>${data.name}</h2>
    </div>
    

    <div class="type">

    </div>



  <div class="info">
     <div class="stats">
         <h3>${attack}</h3>
         <p>Attack</p>
     </div>

     <div class="stats">
         <h3>${defence}</h3>
         <p>Defence</p>
     </div>

     <div class="stats">
         <h3>${speed}</h3>
         <p>Speed</p>
     </div>
  </div>

 </div>`;
}
