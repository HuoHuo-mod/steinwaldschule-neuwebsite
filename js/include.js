async function loadPartial(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
  return Promise.resolve(); // optional, just to chain then()
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("header", "partials/header.html");
  await loadPartial("footer", "partials/footer.html");

  // Now header is loaded, initialize theme
  initTheme();
});
