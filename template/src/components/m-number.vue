<template>
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        v-on:focus="selectAll"
        v-on:blur="formatValue"
      />
</template>

<script>
import knife from 'vendor/knife.js';
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.formatValue();
    },
    methods: {
        updateValue(value) {
            var result = knife.currencyParse(value, this.value);
            if (result.warning) {
                this.$refs.input.value = result.value;
            }
            this.$emit('input', result.value);
        },
        formatValue() {
            this.$refs.input.value = knife.currencyFormat(this.value);
        },
        selectAll(event) {
            setTimeout(function() {
                event.target.select();
            }, 0);
        }
    }
};
</script>
