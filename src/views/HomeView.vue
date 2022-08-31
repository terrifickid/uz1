<template>
  <div class="min-h-screen min-w-full bg-gg text-white grid grid-cols-12">
    <div class="absolute bottom-3 left-3 right-3 text-center md:text-left">
      <p class="text-xl text-white font-mono uppercase">
        blockchain * web * creative
      </p>
    </div>
    <div class="absolute top-3 left-0 right-0 text-center"></div>
    <div
      class="absolute w-screen h-screen justify-center flex items-center z-50"
    >
      <a
        class="hover:underline text-2xl text-yy font-mono uppercase"
        href="mailto:contact@uz1.co.uk"
      >
        contact<span style="font-family: sans-serif">@</span>uz1.co.uk
      </a>
    </div>

    <div class="col-span-12 md:col-span-6 p-3 text-center md:text-left">
      <span class="font-mono text-white text-6xl">UZ<span>1</span></span>
    </div>
    <div
      class="col-span-6 bg-cover"
      style="background-image: url('8.svg')"
    ></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
