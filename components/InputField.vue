<template>
  <div>
    <label
      :for="name"
      class="block text-xs font-semibold text-gray-600 uppercase"
      ><slot></slot
    ></label>
    <input
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="name"
      class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
      :required="required"
      @input="updateInputValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      validator(value) {
        // The value must match one of these strings
        return (
          [
            'button',
            'checkbox',
            'color',
            'date',
            'datetime-local',
            'email',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
          ].includes(value) !== -1
        )
      },
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateInputValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
