// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function searchBoxes() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var boxes = document.querySelectorAll('.box');
    var container = document.getElementById('boxContainer');

    // Remover todas as caixas da linha atual
    container.innerHTML = '';

    // Lista de caixas visíveis
    var visibleBoxes = [];

    // Iterar sobre todas as caixas
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var h5 = box.querySelector('h5');
        if (h5.innerText.toUpperCase().indexOf(filter) > -1) {
            // Se o texto corresponder, exibir a caixa
            box.classList.remove('d-none');
            visibleBoxes.push(box.parentElement.cloneNode(true));
        } else {
            // Caso contrário, ocultar a caixa
            box.classList.add('d-none');
        }
    }

    // Organizar as caixas visíveis em ordem alfabética
    visibleBoxes.sort(function(a, b) {
        var aText = a.querySelector('h5').innerText.toUpperCase();
        var bText = b.querySelector('h5').innerText.toUpperCase();
        if (aText < bText) {
            return -1;
        }
        if (aText > bText) {
            return 1;
        }
        return 0;
    });

    // Adicionar de volta apenas as caixas visíveis
    for (var j = 0; j < visibleBoxes.length; j++) {
        container.appendChild(visibleBoxes[j]);
    }

    // Após a pesquisa, exibir as caixas correspondentes uma ao lado da outra
    var visibleBoxesDOM = container.querySelectorAll('.box:not(.d-none)');
    for (var k = 0; k < visibleBoxesDOM.length; k++) {
        visibleBoxesDOM[k].classList.add('d-inline-block');
    }
}
//client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}