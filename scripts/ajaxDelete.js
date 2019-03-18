getUsers();

function getUsers() {
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function(data) {
      data.forEach(function(item) {
        var name = item.name,
          id = item.id,
          username = item.username,
          email = item.email,
          website = item.website;
        var template = `<div class="user" data-id="${id}">
                            <p class="name">Nome: ${name}</p>
                            <p class="username">Username: ${username}</p>
                            <p class="email">Email: ${email}</p>
                            <p class="website">Website: ${website}</p>

                            <button class="deleteUser">Delete User</button>
                          </div>`;
        console.log(name);
        $('.usersList').append(template);
      });

      //$('.deleteUser').on('click', userDelete);
    },
    error: function(xhr, type, exception) {
      // if ajax fails display error alert
      alert("ajax error response type " + type);
    }
  });
}
