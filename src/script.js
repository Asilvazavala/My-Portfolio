// Cambiar el título de la pestaña
let previousTitle = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = `😱 ¡No te vayas!`
})

window.addEventListener('focus', () => {
  document.title = previousTitle;
})

// Posicionarse en el inicio de la página
const irInicio = () => {
  document.documentElement.scrollTo(0, 0)
}

// Mostrar alerta al hacer clic en el logo AS
const logoAS = document.getElementById('logoAS')
logoAS.addEventListener('click', () => {
  const alert = document.getElementById('alert')
  alert.className = "alert alert-success alert-dismissible show" 
  document.documentElement.scrollTo(0, 0)
})

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

const effectProject4 = () => {
  const project4 = document.getElementById('project4');
  project4.className = "project4Effect"     
};

// Regresar a la imagen original proyectos
const normalProject = () => {
  const project1 = document.getElementById('project1');
  project1.className = "project1"     
  const project2 = document.getElementById('project2');
  project2.className = "project2"     
  const project3 = document.getElementById('project3');
  project3.className = "project3"     
  const project4 = document.getElementById('project4');
  project4.className = "project4"     
};

// Cambiar entre dark/light mode
const toggleTheme = document.getElementById('toggleTheme')
const toggleIcon = document.getElementById('toggleIcon')

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (toggleIcon.classList.value.includes("moon")) {
    toggleIcon.classList.value = "bx bxs-sun toggleThemeIcon"
  } else {
      toggleIcon.classList.value = "bx bxs-moon toggleThemeIcon"
    }
})

// Cambiar idioma inglés/español
const flagsElement = document.getElementById("flags")
const textsToChange = document.querySelectorAll("[data-section]")
const toggleIconLanguage = document.getElementById('toggleIconLanguage')

const changeLanguage = async () => {
  let language = ""
  !toggleIconLanguage.src.includes("english")
  ? language = 'en'
  : language = 'es'

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

// Obtener todos los enlaces de la navbar
const navLinks = document.querySelectorAll('.nav-link');

// Agregar evento "click" a cada enlace para cerrar la navbar
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Cerrar la navbar
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  });
});

// Efecto scroll izquierda a derecha
window.addEventListener('scroll', function() {
  let animacionProyecto1 = document.getElementById('pro1')
  let animacionProyecto3 = document.getElementById('pro3')

  let posicionProyecto1 = animacionProyecto1.getBoundingClientRect().top;
  let posicionProyecto3 = animacionProyecto3.getBoundingClientRect().top;

  let tamañoPantalla = window.innerHeight/1.2;

  if (posicionProyecto1 < tamañoPantalla) {
    animacionProyecto1.style.animation = 'slideInLeft 1s ease-out'
    animacionProyecto1.style.opacity = 1
  }

  if (posicionProyecto3 < tamañoPantalla) {
    animacionProyecto3.style.animation = 'slideInLeft 1s ease-out'
    animacionProyecto3.style.opacity = 1
  }
})

// Efecto scroll derecha a izquierda
window.addEventListener('scroll', function() {
  let animacionProyecto2 = document.getElementById('pro2')
  let animacionProyecto4 = document.getElementById('pro4')

  let posicionProyecto2 = animacionProyecto2.getBoundingClientRect().top;
  let posicionProyecto4 = animacionProyecto4.getBoundingClientRect().top;

  let tamañoPantalla = window.innerHeight/1.2;

  if (posicionProyecto2 < tamañoPantalla) {
    animacionProyecto2.style.animation = 'slideInRight 1s ease-out'
    animacionProyecto2.style.opacity = 1
  }

  if (posicionProyecto4 < tamañoPantalla) {
    animacionProyecto4.style.animation = 'slideInRight 1s ease-out'
    animacionProyecto4.style.opacity = 1
  }

})

// Validación formulario de contacto
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', () => {            
  if (nombre.value.trim() === '' || !regexEmail.test(email.value) || message.value.trim() === '') {
    swal('Registro vacío', 'Complete todos los campos por favor', 'error');
  } else {
      swal('Gracias', '¡Mensaje enviado con éxito!', 'success');
      nombre.value = ""
      email.value = ""
      message.value = ""
    }
});

// Hover li items Navbar
const listItem = document.querySelectorAll('nav ul li');
const menuBackDrop = document.querySelector('#menu-backdrop');
const screenWidth = window.innerWidth;  

  if (screenWidth > 770) {
    listItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect()
              
        menuBackDrop.style.setProperty('--left', `${left}px`)
        menuBackDrop.style.setProperty('--top', `${top}px`)
        menuBackDrop.style.setProperty('--width', `${width}px`)
        menuBackDrop.style.setProperty('--height', `${height}px`)
        menuBackDrop.style.opacity = '1'
        menuBackDrop.style.visibility = 'visible'
      })

      item.addEventListener('mouseleave', () => {
        menuBackDrop.style.opacity = '0'
        menuBackDrop.style.visibility = 'hidden'
      })
    })
  }

  // Ver otros proyectos
  const buttonOtherProjects = document.getElementById('buttonOtherProjects');
  const otherProjects = document.getElementById('otherProjects');
  const spanOtherProjects = document.getElementById('spanOtherProjects');
  let isMarginSmall = true;

  buttonOtherProjects.addEventListener('click', () => {
    otherProjects.classList.toggle('hide')
    if (isMarginSmall && toggleIconLanguage.src.includes("english")) {
      buttonOtherProjects.style.marginBottom = '5px';
      spanOtherProjects.textContent = 'Hide other projects';
      isMarginSmall = false;
    } else if (!isMarginSmall && toggleIconLanguage.src.includes("english")) {
        buttonOtherProjects.style.marginBottom = '200px';
        spanOtherProjects.textContent = 'See more projects';
        isMarginSmall = true;
      } else if (isMarginSmall && !toggleIconLanguage.src.includes("english")) {
          buttonOtherProjects.style.marginBottom = '5px';
          spanOtherProjects.textContent = 'Ocultar proyectos';
          isMarginSmall = false;
        } else {
            buttonOtherProjects.style.marginBottom = '200px';
            spanOtherProjects.textContent = 'Ver más proyectos';
            isMarginSmall = true;
          }
  })

  // Descargar CV en inglés/español
  const btnCV = document.getElementById('btnCV')

  btnCV.addEventListener('click', () => {    
    if (toggleIconLanguage.src.includes("english")) {
      btnCV.setAttribute('href', './documents/CV Eng Jose Antonio Silva Zavala.pdf')
    } else {
        btnCV.setAttribute('href', './documents/CV Esp Jose Antonio Silva Zavala.pdf')
      }
  })

/*   Descargar todas las imágenes de una página web
  $$('img').forEach(img => {
    const src = img.src
    const [filename] = src.split('.').reverse()
    const [name] = filename.split('.')

    const a = document.createElement('a')
    a.setAttribute('href', src)
    a.setAttribute('downoload', name)
    a.click()
  }) */