<template>
  <div>
    <label>
      <slot></slot>
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input',$event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "value"]
};
</script>

<style lang="less" scoped>
label {
  display: block;
  font-size: 0.35rem;
  margin-bottom: 0.5rem;
  input {
    border-radius: 0.1rem;
    border: 1px solid #ddd;
    width: 4.5rem;
    height: 0.7rem;
    margin-left: 0.1rem;
    padding-left: 0.1rem;
    outline: none;
  }
}
</style>