var cont = 0;

$(function(){

  var $lista = $('#lista');
  var $email = $('#email');
  var $local = $('#local');
  var $contador = $('#contador');

  $.ajax({
    type: 'GET',
    url : 'https://jsonplaceholder.typicode.com/users',
    success: function(lista){
      $.each(lista, function(i, item){
            $lista.append("<li>" + item.website + "</li>");
         if (item.username === "Samantha"){
            $email.append("<p>" + item.email + "<p>");
         }
         if (item.address.geo.lat < 0){
            $local.append("<li>" + item.username + "</li>");
            cont++;
         }
      });
      $contador.append("<p>" + "Total de usuários do hemisfério sul: " + cont + "</p>");
    }
  });
});
