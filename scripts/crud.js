var addBtn = document.querySelector('.addTask');

addBtn.addEventListener('click', addTask);

getTodos();

function getTodos() {
  $('li').remove();

  $.ajax({
    type: 'GET',
    url: 'https://formacaojsf6.azurewebsites.net/todos',
    success: function(data) {
      data.forEach(function(todo) {
        var name = todo.Nome,
          descricao = todo.Descricao,
          id = todo.id,
          done = todo.Done == 0 ? 'Não Feito' : 'Feito';

        var template = `<li data-id="${id}">
                          <p> Nome: ${name} </p>
                          <p> Descricao: ${descricao} </p>
                          <p> Feito: ${done} </p>
                          <button class="deleteTodo">Apagar</button>
                          <button class="editTodo">Editar</button>
                        </li>`;
        $('.wrapper').append(template);
      });

      var deleteBtn = document.querySelectorAll('.deleteTodo');
      var editBtn = document.querySelectorAll('.editTodo');

      deleteBtn.forEach(function(btn) {
        btn.addEventListener('click', deleteTodo);
      });
      editBtn.forEach(function(btn) {
        btn.addEventListener('click', updateTodo);

      })


    },
    error: function(xhr, type, exception) {
      // if ajax fails display error alert
      alert("ajax error response type " + type);
    }
  });
}

function addTask() {
  var name = document.querySelector('input[name="Nome"]').value,
    descricao = document.querySelector('input[name="Descricao"]').value,
    done = document.querySelector('input[name="feito"]:checked').value;
  var todo = {
    Nome: name,
    Descricao: descricao,
    Done: ~~done
  };


  $.ajax({
    type: 'POST',
    url: 'https://formacaojsf6.azurewebsites.net/todos',
    data: todo,
    success: function(data) {
      getTodos();
    },
    error: function(xhr, type, exception) {
      // if ajax fails display error alert
      alert("ajax error response type " + type);
    }
  });

}

function deleteTodo(el) {
  var id = el.currentTarget.parentElement.dataset.id;

  $.ajax({
    type: 'DELETE',
    url: 'https://formacaojsf6.azurewebsites.net/todos/' + id,
    success: function(data) {
      getTodos();
    }
  });
}

function updateTodo(el) {
  var id = el.currentTarget.parentElement.dataset.id;




}
