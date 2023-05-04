// Cambiar el título de la pestaña
let previousTitle = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = `😱 ¡Come back!`
})

window.addEventListener('focus', () => {
  document.title = previousTitle;
})

// Posicionarse en el inicio de la página
const irInicio = () => {
  document.documentElement.scrollTo(0, 0)
}

// Mostrar alerta al hacer clic en el logo AS
const mostrarAlerta = () => {
  const alert = document.getElementById('alert')
  alert.className = "alert alert-success alert-dismissible show" 
  document.documentElement.scrollTo(0, 0)
}

// Iniciar efecto imagen proyectos
const effectProject1 = () => {
  const project1 = document.getElementById('project1');
  project1.className = "project1Effect"     
};

const effectProject2 = () => {
  const project2 = document.getElementById('project2');
  project2.className = "project2Effect"     
};

const effectProject3 = () => {
  const project3 = document.getElementById('project3');
  project3.className = "project3Effect"     
};

// Regresar a la imagen original proyectos
const normalProject = () => {
  const project1 = document.getElementById('project1');
  project1.className = "project1"     
  const project2 = document.getElementById('project2');
  project2.className = "project2"     
  const project3 = document.getElementById('project3');
  project3.className = "project3"     
};

// Cambiar entre dark/light mode
const toggleTheme = document.getElementById('toggleTheme')
const toggleIcon = document.getElementById('toggleIcon')

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (toggleIcon.src.includes("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAfdJREFUWEftl4FNw0AMRX8nASYBJgEmASYBJgEmASYBPSmOHOPkLrlrVCEsVVVPafzz/f3tHHRicTgxPPozgB4k3Uj6lHQ3fHchew1D55LuJd2GzAB67oJGqi7ZlaTXmaS7A6I8MOODUsEYcS3pbS+GnkKJTDOcG6A1ZS/iXroZWiGxBSzABvHhAF3sIWqenqQWiBatWHhAu5TMl8ozY4AQOEInji7qyE5WEi/0R0n87hKZhmqSRRvopqMM0Ld71CV9eB11YykC8uWixXnyufBMci3g+W6KCMi3euysLJFnCfE3z7UIqEY/HpgNWTNJSseDbGaqFRDg4mhpYqq1ZMZWHDGcb2KrFyBjih3JyscZpePzPgxg+41t2HUwOpY4AvL+UuqyTOT83w/emo6b5Ml8qMfgpFtZWTxbc+CKgLweWg0PxvhcJuB8Z46jJ2PoaGNhoCjef4Jhbh/yZcNXYGqzt7haldaa2Z06irO1dNnawtmvoby0MUbD2+Qrjh2/Q3GcDu7SPtzDhSkTjWILnZlmukOVAPHnzIVrdEXr013xPS7bQEciawBl88puYC77NRycuU7KPKi47tYCIg+UY3ae+hon5hqAo8Hi+9saQJbcgMFAyYkp7UsNELv5FkCeFRuSBsy8ajIwa2nkulZAa3JVXfsPqETTD3tmfSXDVhtCAAAAAElFTkSuQmCC")) {
    toggleIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAeNJREFUWEftloFNAzEMRd1JgEmATWASYBLYBJgEmAT0qjMylhPb14JOqJFOapU7++f/b8c72djabQyP/EtA9yJytzD9ICL8X72OwdAJ0I2IPE006DBErBcReR/FyyR7FpErEZl5g30eFsl4omVjccAQ1AwQp3k0kQ8xrILRcLcj1jOGAASwNNBEUn8w2AFQuDJAfKSgkOI6iIJc58uj/vByaIwpGGJXAPEexvX9xZrZ40Re75OsOPYxqoBsQtjgxGrkEfuwhTTDioo+XAPIG5SEJP8QkUsHlD1kLoPqAvIykcyXOdJwlcAkq1WdXUCfhuYIjG574BdVljwgb1zb6Djx25IRCUgyW7yrLFlAtpHaA4Smtgx4ujtXhG0X/LaNMKrOb2I8QzNAtsGl/WRpE9FY0gI0kwyqqTDWqElaCa1k1m8tyRJb7D2kvhjeR0vpK/hWv+tWmac7AmWZ/PWyJ4FlSeV7FZGzhRllkL1KNf5QpcsQH5MQOWziSGp8RlMczUehPaqAoklP77MIWNSdj3a5ZpOeVo3eadG9VZk8w8boaSxPepPybE2enRG20gxHuCrVWWKoMulVh3wFNW2qFVNnZuzccVmsVROjl6UDKLsJToD+hKE0SeeFiqk78Q5+d3OAvgBANYYl1GOAsQAAAABJRU5ErkJggg=="
  } else {
      toggleIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAfdJREFUWEftl4FNw0AMRX8nASYBJgEmASYBJgEmASYBPSmOHOPkLrlrVCEsVVVPafzz/f3tHHRicTgxPPozgB4k3Uj6lHQ3fHchew1D55LuJd2GzAB67oJGqi7ZlaTXmaS7A6I8MOODUsEYcS3pbS+GnkKJTDOcG6A1ZS/iXroZWiGxBSzABvHhAF3sIWqenqQWiBatWHhAu5TMl8ozY4AQOEInji7qyE5WEi/0R0n87hKZhmqSRRvopqMM0Ld71CV9eB11YykC8uWixXnyufBMci3g+W6KCMi3euysLJFnCfE3z7UIqEY/HpgNWTNJSseDbGaqFRDg4mhpYqq1ZMZWHDGcb2KrFyBjih3JyscZpePzPgxg+41t2HUwOpY4AvL+UuqyTOT83w/emo6b5Ml8qMfgpFtZWTxbc+CKgLweWg0PxvhcJuB8Z46jJ2PoaGNhoCjef4Jhbh/yZcNXYGqzt7haldaa2Z06irO1dNnawtmvoby0MUbD2+Qrjh2/Q3GcDu7SPtzDhSkTjWILnZlmukOVAPHnzIVrdEXr013xPS7bQEciawBl88puYC77NRycuU7KPKi47tYCIg+UY3ae+hon5hqAo8Hi+9saQJbcgMFAyYkp7UsNELv5FkCeFRuSBsy8ajIwa2nkulZAa3JVXfsPqETTD3tmfSXDVhtCAAAAAElFTkSuQmCC"
    }
})

// Cambiar idioma inglés/español
const flagsElement = document.getElementById("flags")
const textsToChange = document.querySelectorAll("[data-section]")
const toggleIconLanguage = document.getElementById('toggleIconLanguage')

const changeLanguage = async () => {
  let language = ""
  if (toggleIconLanguage.src.includes("english")) {
     language = 'en'
  } else {
      language = 'es'
    }
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json()

  for(const textToChange of textsToChange) {    
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value
    
    textToChange.innerHTML = texts[section][value]
  }
}

// Cambiar icono español/inglés
flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
  if (toggleIconLanguage.src.includes("english")) {
    toggleIconLanguage.src = "./imagenes/General/spain.svg"
  } else {
      toggleIconLanguage.src = "./imagenes/General/english.svg"
    }
})

