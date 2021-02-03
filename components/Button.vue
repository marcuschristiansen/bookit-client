<template>
  <button
    :disabled="loading"
    :type="type"
    class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
    @click="handleClick"
  >
    <div v-if="loading" class="cssload-container">
      <div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
    </div>

    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
.cssload-container {
  display: block;
  margin: 0 auto;
  width: 97px;
}

.cssload-loading i {
  width: 13px;
  height: 13px;
  display: inline-block;
  border-radius: 50%;
  background: rgba(49, 151, 149, var(--bg-opacity));
}
.cssload-loading i:first-child {
  opacity: 0;
  animation: cssload-loading-ani2 0.58s linear infinite;
  -o-animation: cssload-loading-ani2 0.58s linear infinite;
  -ms-animation: cssload-loading-ani2 0.58s linear infinite;
  -webkit-animation: cssload-loading-ani2 0.58s linear infinite;
  -moz-animation: cssload-loading-ani2 0.58s linear infinite;
  transform: translate(-13px);
  -o-transform: translate(-13px);
  -ms-transform: translate(-13px);
  -webkit-transform: translate(-13px);
  -moz-transform: translate(-13px);
}
.cssload-loading i:nth-child(2),
.cssload-loading i:nth-child(3) {
  animation: cssload-loading-ani3 0.58s linear infinite;
  -o-animation: cssload-loading-ani3 0.58s linear infinite;
  -ms-animation: cssload-loading-ani3 0.58s linear infinite;
  -webkit-animation: cssload-loading-ani3 0.58s linear infinite;
  -moz-animation: cssload-loading-ani3 0.58s linear infinite;
}
.cssload-loading i:last-child {
  animation: cssload-loading-ani1 0.58s linear infinite;
  -o-animation: cssload-loading-ani1 0.58s linear infinite;
  -ms-animation: cssload-loading-ani1 0.58s linear infinite;
  -webkit-animation: cssload-loading-ani1 0.58s linear infinite;
  -moz-animation: cssload-loading-ani1 0.58s linear infinite;
}

@keyframes cssload-loading-ani1 {
  100% {
    transform: translate(39px);
    opacity: 0;
  }
}

@-o-keyframes cssload-loading-ani1 {
  100% {
    -o-transform: translate(39px);
    opacity: 0;
  }
}

@-ms-keyframes cssload-loading-ani1 {
  100% {
    -ms-transform: translate(39px);
    opacity: 0;
  }
}

@-webkit-keyframes cssload-loading-ani1 {
  100% {
    -webkit-transform: translate(39px);
    opacity: 0;
  }
}

@-moz-keyframes cssload-loading-ani1 {
  100% {
    -moz-transform: translate(39px);
    opacity: 0;
  }
}

@keyframes cssload-loading-ani2 {
  100% {
    transform: translate(13px);
    opacity: 1;
  }
}

@-o-keyframes cssload-loading-ani2 {
  100% {
    -o-transform: translate(13px);
    opacity: 1;
  }
}

@-ms-keyframes cssload-loading-ani2 {
  100% {
    -ms-transform: translate(13px);
    opacity: 1;
  }
}

@-webkit-keyframes cssload-loading-ani2 {
  100% {
    -webkit-transform: translate(13px);
    opacity: 1;
  }
}

@-moz-keyframes cssload-loading-ani2 {
  100% {
    -moz-transform: translate(13px);
    opacity: 1;
  }
}

@keyframes cssload-loading-ani3 {
  100% {
    transform: translate(13px);
  }
}

@-o-keyframes cssload-loading-ani3 {
  100% {
    -o-transform: translate(13px);
  }
}

@-ms-keyframes cssload-loading-ani3 {
  100% {
    -ms-transform: translate(13px);
  }
}

@-webkit-keyframes cssload-loading-ani3 {
  100% {
    -webkit-transform: translate(13px);
  }
}

@-moz-keyframes cssload-loading-ani3 {
  100% {
    -moz-transform: translate(13px);
  }
}
</style>
