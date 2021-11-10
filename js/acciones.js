document.addEventListener('DOMContentLoaded',function(){
    let imagenes =[
        {img: 'https://i.ibb.co/f21kqC3/SEGMENTO-1.jpg',
         car: 'no'},
        {img: 'https://i.ibb.co/brLNV60/SEGMENTO-2.jpg',
         car:'no'},
        {img: 'https://i.ibb.co/721P5Yp/SEGMENTO-3.jpg',
         car:'no'},
        {img: 'https://i.ibb.co/P6HjTvK/SEGMENTO-4.jpg',
         car:'no'},
        {car:'si',
        img :['https://i.ibb.co/c362FCp/SEGMENTO-5.jpg','https://i.ibb.co/cwD4FWc/SEGMENTO-5-CARRUSEL-2.jpg','https://i.ibb.co/QNSrLYP/SEGMENTO-5-CARRUSEL-1.jpg']
         },
        {car:'si',
        img:['https://i.ibb.co/hYtvK81/SEGMENTO-6.jpg', 'https://i.ibb.co/PjSszLm/SEGMENTO-6-CARRUSEL-1.jpg','https://i.ibb.co/c8qBWsP/SEGMENTO-6-CARRUSEL-2.jpg' ]},
        {img: 'https://i.ibb.co/svPxw6x/SEGMENTO-7.jpg',
         car: 'no'},
        {car:'si',
        img:['https://i.ibb.co/4pF134x/SEGMENTO-8.jpg','https://i.ibb.co/nRNPrC9/SEGMENTO-8-CARRUSEL-1.jpg']},
        {img: 'https://i.ibb.co/721P5Yp/SEGMENTO-3.jpg'},
        {img: 'https://i.ibb.co/gdw9nTF/SEGMENTO-11.jpg'},
        {img: 'https://i.ibb.co/1KNC7zD/SEGMENTO-12.jpg',
         car: 'no'},

        {img: 'https://i.ibb.co/wJqBcz1/SEGMENTO-13.jpg'},
        {img: 'https://i.ibb.co/wJqBcz1/SEGMENTO-13.jpg'}
    ]

    let contador = 0
    let actual = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const overlay2 = document.querySelector('.overlay2')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')
    const btnAd = document.querySelector('.botones.adelante')
    const btnAt = document.querySelector('.botones.atras')
            
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target

            if(tgt == atras){
                if (contador > 0){
                    img.src = actual[contador-1]
                    contador--
                    console.log(contador)      
                }else{
                    contador = actual.length-1
                    img.src = actual[contador]
                    console.log(contador)                    
                }
            } else if (tgt == adelante){
                if(contador < actual.length-1){
                    img.src = actual[contador+1]
                    contador++
                    console.log(contador)      
                }else{
                    contador= 0
                    img.src = actual[contador]
                    
                }
            }
    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', e =>{
            const imagen_seleccionada = +e.target.dataset.imgMostrar
            if(imagenes[imagen_seleccionada].car === 'si'){
                btnAd.style.visibility = 'visible'
                btnAt.style.visibility = 'visible'
                img_slideshow.src = imagenes[imagen_seleccionada].img[0]
                actual =imagenes[imagen_seleccionada].img
                
            }else{
                img_slideshow.src = imagenes[imagen_seleccionada].img
                btnAd.style.visibility = 'hidden'
                btnAt.style.visibility = 'hidden'
            }
            
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar2').addEventListener('click', ()=>{
        overlay2.style.opacity = 0
        overlay2.style.visibility = 'hidden'
    })
    
    document.querySelector('.btn_cerrar').addEventListener('click', ()=>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

    document.querySelector('.title').addEventListener('click',() =>{
        overlay2.style.opacity = 1
        overlay2.style.visibility = 'visible'
    })
    

})