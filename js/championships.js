let championships = [
  {
    name: "Brazil Grand Prix",
    location: "Sao Paulo"
  },{
    name: "Mexico Grand Prix",
    location: "Mexico D.F"
  },{
    name: "Spain Grand Prix",
    location: "Montmello"
  },
];

function showChampionshipList(){
  const CHAMPIONSHIP_LIST = document.getElementById("championship-list");

  let championshipsToShow = "";
  for(let i = 0; i < championships.length; i++){
    championshipsToShow += `
      <div>
        <h2>${championships[i].name}</h2>
        <p>${championships[i].location}</p>
      </div>
    `;
  }
  CHAMPIONSHIP_LIST.innerHTML = championshipsToShow;
}

function listenForUserSubmit(){
  const CHAMPIONSHIP_REGISTER_FORM = document.getElementById("championship-register-form");
  CHAMPIONSHIP_REGISTER_FORM.addEventListener("submit", introduceNewChampionshipAndShowAllChampionships);
}

function introduceNewChampionship(e){
  e.preventDefault();
  const NAME = e.target.name.value.trim(); // Evita espacios adicionales al principio o al final.
  const LOCATION = e.target.location.value.trim(); // Evita espacios adicionales al principio o al final.

  // Verifica que ambos campos no estén vacíos, siempre y cuando eliminemos 
  // el atributo required de los campos name y location (index.html).
  if (NAME && LOCATION) { 
    championships.push({
      name: NAME,
      location: LOCATION
    });
    // Limpia los campos del formulario.
    e.target.reset();
  } else {
    alert("Por favor, completa ambos campos antes de enviar."); 
  }
}

function introduceNewChampionshipAndShowAllChampionships(e){
  introduceNewChampionship(e);
  showChampionshipList();
}

showChampionshipList();
listenForUserSubmit();