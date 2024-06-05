<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    p(data-aos="fade-right") Los negocios han creado la necesidad de que los desarrollos de las ideas estén fundamentados en la selección de un modelo para abarcar todos los puntos críticos y necesarios para su interrelación con el mercado. 
    p.mb-5(data-aos="fade-right") Por tanto, se hace énfasis en la ambición de estabilizarse en el tiempo, creciendo con eficiencia en todos los aspectos sostenibles, aplicando los modelos de negocios a los diferentes contextos de la empresa con el fin de satisfacer las demandas de la sociedad cambiante a través de ventajas competitivas que la optimicen continuamente, por lo anterior, le invito a revisar el siguiente video: Modelos de negocio y sistema de gestión del riesgo.  

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/V6BNAcVPiLo?si=lTamB6yZXDF42iuJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
