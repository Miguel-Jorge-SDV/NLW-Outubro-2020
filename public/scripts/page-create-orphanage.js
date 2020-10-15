// Tipos de dados
// String ""
// Number 01
// Object {}
// Boolean True or false
// Array []

// Create map

const map = L.map("mapid").setView([-27.2114829, -49.6506442], 15);

// Create and add TileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAncor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remove icon
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add o campo de fotos
function addPhotoField() {
    // Pegar o container do fotos #images
    const container = document.querySelector('#images')

    // Pegar o caontainer para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar o clone da útima imagem adicionada
    const cloneFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // Verificar se o campo está vazio, se sim , não adicionar ao container de imagens
    const input = cloneFieldContainer.children[0]
    if (input.value == "") {
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // Adicionar o clone no container de #image
    container.appendChild(cloneFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Selecionar sim ou não
function toggleSelect(event) {

    // Retirar a class .active dos dois botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    // Colocar a class .active nesse botão quando clicado
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name = "open_on_weekends"]')
    
    // Verificar se é sim ou não
    input.value = button.dataset.value

    // Pegar o botão clicado
}