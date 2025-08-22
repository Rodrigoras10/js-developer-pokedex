async function loadPokemonDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  document.getElementById("name").textContent = data.name.toUpperCase();
  document.getElementById("sprite").src = data.sprites.other['official-artwork'].front_default;
  document.getElementById("type").textContent = "Tipos: " + data.types.map(t => t.type.name).join(", ");
  document.getElementById("weight").textContent = "Peso: " + data.weight;
  document.getElementById("height").textContent = "Altura: " + data.height;


  const attack = data.stats.find(s => s.stat.name === "attack").base_stat;
  const defense = data.stats.find(s => s.stat.name === "defense").base_stat;

  document.getElementById("attack").textContent = "Ataque: " + attack;
  document.getElementById("defense").textContent = "Defesa: " + defense;
}

loadPokemonDetails();
