<template>
  <div
    :draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  ></div>
  <slot />
</template>

<script setup>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "../constants";
const props = defineProps({
  transferData: {
    type: Object,
    required: true,
  },
});

function onDrag({ dataTransfer }) {
  dataTransfer.effectAllowerd = MOVE;
  dataTransfer.dropEffect = MOVE;
  dataTransfer.setData(
    DATA_TRANSFER_PAYLOAD,
    JSON.stringify(props.transferData)
  );
}
</script>

<style lang="" scoped></style>
