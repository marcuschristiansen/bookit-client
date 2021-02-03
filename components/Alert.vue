<template>
  <div
    :class="type"
    class="alert rounded-b px-4 py-3 shadow-md my-2"
    :role="type"
  >
    <div class="flex">
      <div class="mr-4">
        <font-awesome-icon v-if="icon" :icon="['fas', icon]" />
      </div>
      <div>
        <slot name="header"></slot>
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    icon: {
      type: [String, Boolean],
      default: false,
    },
  },
}
</script>

<style lang="scss">
.alert {
  border-top-width: 0.25em;
}
.default {
  border-color: #2d3748;
  background-color: #ffffff;
  color: #2d3748;
}
.danger {
  border-color: #e53e3e;
  background-color: #fed7d7;
  color: #e53e3e;
}
.success {
  border-color: #38a169;
  background-color: #c6f6d5;
  color: #38a169;
}
</style>
