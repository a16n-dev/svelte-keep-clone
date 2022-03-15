<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div class="root" transition:fade style="height: {Math.random() * 100}px"><slot /></div>

<style lang="scss">
  .root {
    background: red;
    max-width: 300px;
    min-width: 200px;
    flex-grow: 1;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: spacing(4) spacing(3);
    color: $red;
  }
</style>
