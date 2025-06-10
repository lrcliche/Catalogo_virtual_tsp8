document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el botón de búsqueda y el input de búsqueda
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const content = document.getElementById('products');
  const searchResults = document.getElementById('searchResults');

  // Función para realizar la búsqueda
  function performSearch(query) {
    // Limpiar resultados anteriores
    searchResults.innerHTML = '';

    // Obtener todos los elementos de texto dentro del contenido
    const offerElements = content.getElementsByClassName('offer');

    // Filtrar elementos que contienen la consulta
    Array.from(offerElements).forEach(element => {
      const titleElement = element.querySelector('.offer__tittle');
      if (titleElement && titleElement.textContent.includes(query)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });

    // Mostrar un mensaje si no se encontraron resultados
    if (Array.from(offerElements).every(element => element.style.display === 'none')) {
      searchResults.textContent = 'No se encontraron resultados.';
    } else {
      searchResults.textContent = ''; // Limpiar cualquier mensaje anterior
    }
  }

  // Agregar un evento de escucha para el clic en el botón de búsqueda
  searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) {
      performSearch(query);
    }
  });

  // También puedes agregar un evento de escucha para el evento 'keypress' en el input de búsqueda
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        performSearch(query);
      }
    }
  });
});