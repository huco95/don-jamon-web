<template>
  <section class="hero">
    <div class="relative p-4 lg:p-44">
      <img
        src="@/assets/images/donjamon-light.png"
        alt="Don Jamón"
        height="87"
        width="512"
        class="w-[32rem]"
      />
      <p class="mt-1 text-2xl font-bold text-center text-white">
        En Burgos desde 1985
      </p>

      <div class="flex justify-center mt-10 gap-x-8">
        <a
          href="tel:947272872"
          class="w-32 py-3 font-semibold tracking-wider text-center text-white uppercase bg-donjamon"
        >
          RESERVAS
        </a>
        <a
          href="https://donjamon.cartasdigitaleszc.com/es/wKiktb2wwZGdl6Gn"
          target="_blank"
          class="w-32 py-3 font-semibold tracking-wider text-center text-black uppercase bg-white lead"
        >
          CARTA
        </a>
      </div>
    </div>

    <a
      href="#about"
      class="absolute bottom-[0.5rem] text-xs font-semibold uppercase text-white opacity-70 cursor-pointer"
    >
      Descubre más
    </a>
    <a
      href="#about"
      class="absolute bottom-[2rem] right-0 left-0 m-auto w-[34px] h-[55px] cursor-pointer"
    >
      <div
        class="w-[3px] px-[13px] py-[10px] h-[30px] border-2 border-white opacity-70 box-content rounded-3xl"
      >
        <div
          class="w-[3px] h-[10px] rounded-[25%] bg-white animate-scroll"
        ></div>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'HeroWeb',
}
</script>
