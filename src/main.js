// src/main.js
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Crear un formulario para pedir el clima
  const form = document.createElement("form");
  const button = document.createElement("button");
  button.textContent = "Obtener clima de Zaragoza";
  form.appendChild(button);

  const weatherContainer = document.createElement("div");
  app.appendChild(form);
  app.appendChild(weatherContainer);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // URL de tu API desplegada
    const url = "https://api-clima-z9zc.onrender.com/clima"; // Asegúrate de que esta sea la correcta

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      const data = await response.json();
      console.log(data);
      if (data) {
        weatherContainer.innerHTML = `
          <h2>Clima en Zaragoza</h2>
          <p>Temperatura: ${data.temperatura}°C</p>
          <p>Descripción: ${data.descripcion}</p>
        `;
      } else {
        weatherContainer.innerHTML =
          "<p>No he podido obtener el clima, hay pillín que habrás hecho mal, espabila.</p>";
      }
    } catch (error) {
      weatherContainer.innerHTML = `<p>Error al obtener el clima: ${error.message}</p>`;
    }
  });
});
