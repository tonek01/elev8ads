
function setLanguage(lang) {
  document.querySelectorAll('[data-lang-' + lang + ']').forEach(el => {
    el.innerText = el.getAttribute('data-lang-' + lang);
  });
}
