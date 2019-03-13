var pokemonNumber = Math.floor(Math.random() * 807) + 1;
var pokemonTypesColors = [{
    Type: 'normal',
    Color: '#A8A878'
  },
  {
    Type: 'fighting',
    Color: '#C03028'
  },
  {
    Type: 'flying',
    Color: '#A890F0'
  },
  {
    Type: 'poison',
    Color: '#A040A0'
  },
  {
    Type: 'ground',
    Color: '#E0C068'
  },
  {
    Type: 'rock',
    Color: '#B8A038'
  },
  {
    Type: 'bug',
    Color: '#A8B820'
  },
  {
    Type: 'ghost',
    Color: '#705898'
  },
  {
    Type: 'steel',
    Color: '#B8B8D0'
  },
  {
    Type: 'fire',
    Color: '#F08030'
  },
  {
    Type: 'water',
    Color: '#6890F0'
  },
  {
    Type: 'grass',
    Color: '#78C850'
  },
  {
    Type: 'electric',
    Color: '#F8D030'
  },
  {
    Type: 'psychic',
    Color: '#F85888'
  },
  {
    Type: 'ice',
    Color: '#98D8D8'
  },
  {
    Type: 'dragon',
    Color: '#7038F8'
  },
  {
    Type: 'dark',
    Color: '#705848'
  },
  {
    Type: 'fairy',
    Color: '#EE99AC'
  }
];

$.ajax({
  type: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonNumber,
  success: function(data) {
    var name = data.name,
      abilities = data.abilities,
      spriteFront = data.sprites.front_default,
      spriteBack = data.sprites.back_default,
      stats = data.stats,
      height = data.height,
      weight = data.weight,
      type = data.types[0].type.name;
    pokemonTypesColors.forEach(function(item) {
      if (item.Type == type) {
        $('body').css('background-color', item.Color)
      }
    });

    abilities.forEach(function (el) {
      var ability = el.ability.name;
      $('.abilities').append(`<li>${ability}</li>`)
    });

    var template = `<div class="nameBicho">${name}
                        <img src="${spriteFront}">
                        <img src="${spriteBack}">
                        <div class="medicao">
                          <p>Peso do bicho: ${weight}</p>
                          <p>Tamanho do bicho: ${height}</p>
                        </div>
                    </div>`;

    $('.wrapper').prepend(template);


  },
  error: function(xhr, type, exception) {
    // if ajax fails display error alert
    alert("ajax error response type " + type);
  }
});
