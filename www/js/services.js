angular.module('starter.services', [])

.service('Menus', function($http, $q) {

  var menus = []
  var defered = $q.defer();
  var promise = defered.promise;
  var days_of_week = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];

  $http.get('http://scu.ugr.es/').then(function successCallback(response) {
    // Almacenamos html en variable temporal.
    var tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = response.data;
    // Los menus se almacenan como tr de una tabla.
    var items = $(tmp.body.children).find('table tr');

    for (var i = 0; i < items.length; i++) {
      var item = (items[i]);
      //console.log(item);
      var item_date = $(items[i]).children('.centeralign')[0];

      if (item_date != null) {
        item_date = item_date.innerText;
        var date = item_date.split("\n\n");

        for (var di = 0; di < date.length; di++) {
          date[di] = date[di].replace(/\s+/g, '');
        }

        var nid = days_of_week.indexOf(date[0]);
        // Si el tr indica una fecha, creamos una estructura de menu nueva.
        if (nid >= 0) {
          var menu = {
            id: nid,
            date: date,
            food: [],
            img: ''
          };
          menus.push(menu);
        }
      } else {
        // Si el tr corresponde a un elemento del menu lo añadimos a la estructura.
        menu.food.push(item.innerText.replace("\n", '').replace('\n', '').replace('\t', '').replace('\t', '').replace('\t', ''));
      }
    }
    defered.resolve(menus);
  }, function errorCallback(err) {
    defered.reject(err)
    return false;
  });
  return promise;
});
