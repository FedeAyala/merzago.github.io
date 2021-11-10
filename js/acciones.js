document.addEventListener('DOMContentLoaded',function(){
    let imagenes =[
        {img: '/imagenes/SEGMENTO 1.png'},
        {img: '/imagenes/SEGMENTO 2.png'},
        {img: '/imagenes/SEGMENTO 3.png'},
        {img: '/imagenes/SEGMENTO 4.png'},
        {img: '/imagenes/SEGMENTO 5.png'},
        {img: '/imagenes/SEGMENTO 6.png'},
        {img: '/imagenes/SEGMENTO 7.png'},
        {img: '/imagenes/SEGMENTO 8.png'},
        {img: '/imagenes/SEGMENTO 9.png'},
        {img: '/imagenes/SEGMENTO 11.png'},
        {img: '/imagenes/SEGMENTO 12.png'},
        {img: '/imagenes/SEGMENTO 13.png'},
        {img: '/imagenes/SEGMENTO 14.png'}
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target
            if(tgt == atras){
                if (contador > 0){
                    img.src = imagenes[contador-1].img
                    contador--
                }else{
                    img.src = imagenes[imagenes.length -1].img
                    contador = imagenes.length -1
                }
            } else if (tgt == adelante){
                if(contador < imagenes.length -1){
                    img.src = imagenes[contador+1].img
                    contador++
                }else{
                    img.src = imagenes[0].img
                    contador= 0
                }
            }
    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', e =>{
            const imagen_seleccionada = +e.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })
    document.querySelector('.btn_cerrar').addEventListener('click', ()=>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})