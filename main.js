const URL = "https://cs-steam-api.herokuapp.com";
const gamesWrapper = document.getElementById("games-wrapper");

const getGames = async (query, value) => {
    try {
        const response = await fetch(`${URL}/games?${query}=${value}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("err", err);
    }
};

const gameItemHtml = (game, index) => {
    const gameItem = document.createElement("div");
    gameItem.classList.add("col")
    gameItem.innerHTML = `<div class="card h-100 blue-box-shadow border-0" id="game-${index}">
         <img src="${game.header_image}" alt="game" class="card-img-top">
        <div class="card-body dark-blue-bg d-flex align-items-center justify-content-between p-1">
            <b class="card-text blue">${game.name}</b>
            <span class="green">$${game.price}</span>
        </div>
        </div>
        `
    return gameItem;
}

const renderGames = async (query=null, value=null) => {
    try {
        gamesWrapper.innerHTML = "";
        const games = await getGames(query, value);
        console.log(games);
        games.data.forEach((game, index) => {
            gamesWrapper.appendChild(gameItemHtml(game));
        })
    } catch (err) {
        console.log("err", err);
    }
}


const initialize = () => {
    console.log('initializing');
    renderGames();
}

initialize();