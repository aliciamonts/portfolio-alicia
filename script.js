function toggleMode() {
  const html = document.documentElement

  //forma mais complexa
  //// if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else
  // html.classList.add('light')
  //}

  // forma simplificada
  html.classList.toggle("light")

  // passo a passo
  // se tiver light mode , adicionar imagem light
  // se tiver sem light mode, manter a imagem dark
  //pegar a tag img, substituir a imagem

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Profile.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
