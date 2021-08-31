<template>
  <Vssue :props="{ ...$props }" :options="options" />
</template>

<script>
export default {
  name: "GitVssue",
  data() {
    return {
      options: {
        locale: 'zh'
      }
    }
  },
}
</script>

<style scoped>

</style>