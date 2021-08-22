<template>
  <div class="bg-white bg-opacity-90 cursor-pointer" @click="$emit('close')">
    <div class="max-w-3xl mx-auto m-8 p-8 bg-black bg-opacity-75 rounded-lg shadow-2xl flex flex-col justify-between items-center cursor-auto" @click.stop>
      <h1 class="text-3xl font-semibold leading-none text-white text-center">{{ title }}</h1>

      <p class="mt-8 text-white text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <button
        type="button"
        @click="$emit('close')"
        class="mt-16 w-8 h-8 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'The Plagued Man',
    };
  },
};
</script>
