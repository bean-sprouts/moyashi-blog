<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageEdit />

    <Vssue :title="$title"
           :key="$title"
           class="page-nav"
           style="box-sizing: content-box" />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
