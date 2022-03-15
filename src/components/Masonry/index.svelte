<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';

  const values = new Array(10)
    .fill(0)
    .map((_, i) => ({ index: i, value: Math.random() * 200 + 50 }));

  let root: HTMLDivElement;
  let container: HTMLDivElement;

  const itemWidth = 230;

  let colCount: number;

  const spacing = 10;

  const positionItems = (columnCount: number) => {
    if (!container || !colCount) return;
    console.log('laying out');
    const columnHeights = new Array(columnCount).fill(0);

    container.childNodes.forEach((child: HTMLElement, index) => {
      // Choose the column with the lowest height
      const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      const hOffset = columnIndex * (itemWidth + spacing);
      const yOffset = columnHeights[columnIndex] + spacing;

      child.style.transform = `translate(${hOffset}px, ${yOffset}px)`;
      child.style.width = `${itemWidth}px`;

      // Increment the height of that column
      const height = child.getBoundingClientRect().height;
      columnHeights[columnIndex] += height + spacing;
    });
  };

  const handleResize = () => {
    const width = root.getBoundingClientRect().width;
    colCount = Math.floor(width / (itemWidth + spacing));
    container.style.width = `${colCount * (itemWidth + spacing) - spacing}px`;
  };

  $: positionItems(colCount);

  onMount(handleResize);
</script>

<svelte:window on:resize={handleResize} />

<div bind:this={root} class="root">
  <div class="container" bind:this={container}>
    {#each values as i}
      <div class="card" tabindex="0" style="height: {i.value}px"><b>{i.index}</b></div>
    {/each}
  </div>
</div>

<style lang="scss">
  .root {
    flex-grow: 1;
  }

  .container {
    position: relative;
    margin: 0 auto;
  }

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
