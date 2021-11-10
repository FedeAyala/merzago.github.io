document.addEventListener('DOMContentLoaded',function(){
    let imagenes =[
        {img: 'https://i.ibb.co/56cHH41/SEGMENTO-1.png'},
        {img: 'https://i.ibb.co/XxHsByr/SEGMENTO-2.png'},
        {img: 'https://i.ibb.co/qmGZ9qF/SEGMENTO-3.png'},
        {img: 'https://i.ibb.co/ZXc2Ld1/SEGMENTO-4.png'},
        {img: 'https://i.ibb.co/qnNXvpC/SEGMENTO-5.png'},
        {img: 'https://i.ibb.co/8sCF5Cf/SEGMENTO-6.png'},
        {img: 'https://i.ibb.co/T2yPtBY/SEGMENTO-7.png'},
        {img: 'https://i.ibb.co/X27xH31/SEGMENTO-8.png'},
        {img: 'https://i.ibb.co/vx6qfP9/SEGMENTO-9.png'},
        {img: 'https://i.ibb.co/GkS4q1j/SEGMENTO-11.png'},
        {img: 'https://i.ibb.co/KL496NY/SEGMENTO-12.png'},
        {img: 'https://i.ibb.co/ZJts1j7/SEGMENTO-13.png'},
        {img: 'https://i.ibb.co/smtyWvL/SEGMENTO-14.png'}
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