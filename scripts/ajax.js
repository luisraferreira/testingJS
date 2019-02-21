$.ajax({
  type: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto/',
  success: function(data){
    console.log(data);
    // on success use return data here
  },
  error: function(xhr, type, exception) {
    // if ajax fails display error alert
    alert("ajax error response type "+type);
  }
});
