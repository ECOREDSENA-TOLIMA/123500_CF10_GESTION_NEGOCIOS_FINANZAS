<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Las empresas del siglo XXI deben aprender a identificar su modelo de negocios, por lo que deben implementar la gestión del riesgo con el fin de identificar cuáles aspectos internos o externos les puede afectar para poder hacer frente al cambio y rediseñar su práctica para estar a la vanguardia, por lo anterior le invito a ver el mapa conceptual que sintetiza la información del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene un esquema que muestra de manera resumida la temática tratada en este componente formativo, la cual se destaca que existen dos  factores en procesos de finanzas con aspectos puntuales que son: 1. Modelo de negocio: clasificación, etapas, marcos de referencia, procesos. 2. Sistema de gestión de riesgos: indicadores, normativas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
