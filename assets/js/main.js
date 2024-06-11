document.addEventListener("DOMContentLoaded", function () {
    fetch("./data/regional.json")
        .then((response) => response.json())
        .then((pokedexData) => {
            const creatureList = document.getElementById("creature-list");

            pokedexData.creatures.forEach((creature) => {
                const creatureItem = document.createElement("div");
                creatureItem.classList.add("creature-item");
                creatureItem.innerHTML = `<strong>${creature.dbSymbol}</strong>: Form ${creature.form}`;
                creatureList.appendChild(creatureItem);
            });
        })
        .catch((error) =>
            console.error("Error fetching the JSON data:", error)
        );
});
