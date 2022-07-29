<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <Calendar :id="id" v-bind="{ ...$attrs, class: null }" :label="label" v-model="modelValue" :class="{ error: error }" class="form-input" @date-select="$emit('update:modelValue', modelValue)"/>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${uuid()}`
      },
    },
    error: String,
    label: String,
    modelValue : String,
  },
  emits: ['update:modelValue'],
}
</script>

<style>
.p-inputwrapper {
  padding: 0;
}
.p-inputtext {
  border: 0px
}
</style>
