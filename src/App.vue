
<template>
  <div>
    <h1 class="inline-block p-4 text-4xl text-white bg-blue-700 m-4 rounded-lg">
      {{name}}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello World!',
    }
  },
}
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>