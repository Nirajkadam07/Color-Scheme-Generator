const colorPicker = document.getElementById("color-picker");
const colorMode = document.getElementById("color-mode");

function renderColorScheme(colorSchemeArr) {
  let html = "";
  for (let color of colorSchemeArr) {
    html += `
        <div class="color-container">
            <div class="color" style="background-color:${color.hex.value}">
            </div>
            <p class="hex-value">${color.hex.value}</p>
        </div>
        `;
  }
  document.getElementById("color-scheme-container").innerHTML = html;
}

function fetchAndRenderColorScheme() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(
      1
    )}&mode=${colorMode.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      renderColorScheme(data.colors);
    });
}

fetchAndRenderColorScheme();

document.getElementById("get-scheme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  fetchAndRenderColorScheme();
});
