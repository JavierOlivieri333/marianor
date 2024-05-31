document.addEventListener("keyup", e => {
    // PARA COMPROBAR POR CONSOLA DEL NAVEGADOR
    // e.target.matches("buscador")
    //     console.log(e.target.value)
    if (e.target.matches("#buscador")) {
        console.log(e.target.value)
    
    if (e.key === "Escape") e.target.value = ""
    if (e.key === "Enter") e.target.value = ""
    document.querySelectorAll(".filtrar").forEach(fruta => {
      fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? fruta.classList.remove("filtro")
        : fruta.classList.add("filtro")

   
    // if (e.target.matches("#buscador")) {
    //     document.querySelectorAll(".filtrar").forEach(pelicula => {
    //         pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    //             ? pelicula.classList.remove("filtro")
    //             : pelicula.classList.add("filtro")
    })
    }
})
