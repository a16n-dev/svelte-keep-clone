<script lang="ts">
  import { onMount } from 'svelte';

  export let spacing = 10;
  export let itemWidth = 200;

  let root: HTMLDivElement;
  let container: HTMLDivElement;

  let colCount: number;

  const positionItems = (columnCount: number) => {
    if (!container) return;
    const columnHeights = new Array(columnCount).fill(0);

    container.childNodes.forEach((child: HTMLElement) => {
      // Choose the column with the lowest height
      const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      const hOffset = columnIndex * (itemWidth + spacing);
      const yOffset = columnHeights[columnIndex] + spacing;

      if (child.style && child.getBoundingClientRect) {
        child.style.transform = `translate(${hOffset}px, ${yOffset}px)`;
        child.style.width = `${itemWidth}px`;
        // Increment the height of that column
        const height = child.getBoundingClientRect().height;
        columnHeights[columnIndex] += height + spacing;
      }
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

<div bind:this={root}>
  <div class="container" bind:this={container}>
    <slot itemClass />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    margin: 0 auto;
  }
</style>
