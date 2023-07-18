document.addEventListener("DOMContentLoaded",
  function(e) {
    let img = document.querySelector("img")
    let img1 = "images/thumbnails/1.webp"
    let img2 = "images/thumbnails/2.webp"
    let img3 = "images/thumbnails/3.webp"
    let img4 = "images/thumbnails/4.webp"
    let img5 = "images/thumbnails/5.webp"
    let img6 = "images/thumbnails/6.webp"
    let img7 = "images/thumbnails/7.webp"
    let img8 = "images/thumbnails/8.webp"
    let img9 = "images/thumbnails/9.webp"
    let button = document.querySelector("input")

    button.addEventListener("click",
      function (e) {
        let src = img.getAttribute("src")
        if("src" === "images/thumbnails/1.webp") {
          img.setAttribute("src", img2)
        } else if (src === img2) {
          img.setAttribute("src", img3)
        } else if (src === img3) {
          img.setAttribute("src", img4)
        } else if (src === img4) {
          img.setAttribute("src", img5)
        } else if (src === img5) {
          img.setAttribute("src", img6)
        } else if (src === img6) {
          img.setAttribute("src", img7)
        } else if (src === img7) {
          img.setAttribute("src", img8)
        } else if (src === img8) {
          img.setAttribute("src", img9)
        } else {
          img.setAttribute("src", img1)
        }
      })
  })