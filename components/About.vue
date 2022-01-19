<template>
  <section
    class="grid items-center max-w-5xl grid-cols-1 gap-4 px-4 m-auto md:grid-cols-2"
  >
    <div class="flex flex-col justify-center text-center">
      <h1
        class="mb-4 text-3xl font-bold tracking-wider text-center uppercase text-donjamon"
      >
        DESDE 1985...
      </h1>

      <p class="font-semibold">
        Siempre ha sido un referente de la venta y degustación de excelentes
        chacinas ibéricas. Ha sabido acompañarlas de fantásticas ensaladas,
        multidúd de raciones y tapas y maravillosos caldos de nuestra tierra que
        lo hacen , sin duda, uno de los locales de hostelería más conocido y
        reconocido de la ciudad.
      </p>

      <a
        href="https://donjamon.cartasdigitaleszc.com/es/wKiktb2wwZGdl6Gn"
        target="_blank"
        class="p-2 mt-3 font-semibold text-black hover:underline"
      >
        DESCUBRE NUESTRA CARTA
      </a>
    </div>
    <div class="hidden md:block">
      <img
        src="@/assets/images/text-section.webp"
        alt="Don Jamón"
        height="87"
        width="512"
        class="rounded-lg"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutWeb',
}
</script>
