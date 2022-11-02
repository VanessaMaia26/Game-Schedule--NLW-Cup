function createCard(date, day, games) {
    return`
     <div class="card">
      <h2>${date} <span>${day}</span></h2>
       <ul>
          ${games}
       </ul>
     </div>
     `
}

function createGame(player1, hour, player2) {
    return`
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}.svg">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}.svg">
    </li>`
}

document.querySelector("#app").innerHTML = `
 <header>
   <img src="./assets/logo.svg" alt="Logo da NLW">
 </header>

  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
    ${createCard('28/11', 'segunda', createGame())}
    ${createCard('02/12', 'sexta', createGame())}
  </main>
`;