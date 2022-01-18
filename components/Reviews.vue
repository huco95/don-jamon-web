<template>
  <section class="px-4">
    <h1
      class="mb-4 text-3xl font-bold tracking-wider text-center uppercase text-donjamon"
    >
      Reseñas
    </h1>
    <div
      class="grid items-start max-w-5xl grid-cols-1 gap-6 m-auto md:grid-cols-3"
    >
      <div class="flex flex-col justify-center text-center gap-y-4">
        <div class="flex flex-col justify-center gap-y-2">
          <span class="block m-auto">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
          </span>
          <Stars />
        </div>
        <p class="font-semibold">
          Excelente Rioja servido en las mejores copas de vidrio de todo Burgos.
          El personal es atento y amable. Un buen lugar para tomarse unos vinos
          o para picar algo.
        </p>
        <p class="font-semibold">Javier E.</p>
      </div>

      <div class="flex flex-col justify-center text-center gap-y-4">
        <div class="flex flex-col justify-center gap-y-2">
          <span class="block m-auto">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
          </span>
          <Stars />
        </div>
        <p class="font-semibold">
          Buen sitio para comer, picar, cenar..vamos un acierto,nos lo recomendó
          el dueño de nuestro hotel y nos encantó. Después de comer en muchos
          otros sitios, este nos encantó. A pesar de estar a tope, nos sirvieron
          muy amablemente y rápido. Volveré y lo RECOMIENDO
        </p>
        <p class="font-semibold">Pepe</p>
      </div>

      <div class="flex flex-col justify-center text-center gap-y-4">
        <div class="flex flex-col justify-center gap-y-2">
          <span class="block m-auto">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
          </span>
          <Stars />
        </div>
        <p class="font-semibold">
          Todo buenísimo y con gran atención por parte de su personal . Obligado
          perdiese unos calamares 🦑 , pero cualquier cosa ...tortillas ,
          ensaladas .... y vinos 🍷 GENIALES
        </p>
        <p class="font-semibold">Jose Manuel</p>
      </div>
    </div>

    <div>
      <a
        href="https://www.google.com/search?q=don+jamon+burgos#lrd=0xd45fcd41e3f26d3:0x6d1ff5a728a90417,1,,,"
        target="_blank"
        class="flex items-center justify-center p-2 mt-3 font-semibold text-black hover:underline"
      >
        <span>Ver más</span>
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewsWeb',
}
</script>
