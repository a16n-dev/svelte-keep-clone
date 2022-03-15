<script lang="ts">
  import Note from '../components/Note/index.svelte';
  import Masonry from '../components/Masonry/index.svelte';

  const values = new Array(50)
    .fill(0)
    .map((_, i) => ({ index: i, value: Math.random() * 200 + 50 }));
</script>

<div style="margin: 32px 64px" class="root">
  <Masonry spacing={5} itemWidth={40}>
    {#each values as i}
      <div class="card" tabindex="0" style="height: {i.value}px"><b>{i.index}</b></div>
    {/each}
  </Masonry>
</div>

<style lang="scss">
  .card {
    position: absolute;
    box-sizing: border-box;
    background: #eee;
    flex-grow: 1;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: spacing(4) spacing(3);
    color: $red;
    transition: transform 0.2s ease-in-out;

    &:focus-visible {
      outline: none;
      border: 3px solid green;
    }
  }
</style>
