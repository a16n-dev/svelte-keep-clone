<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';

  export let spacing = 16;
  export let itemWidth = 240;
  export let container: HTMLElement;

  let root: HTMLDivElement;

  let colCount: number;

  const positionItems = (columnCount: number) => {
    if (!root) return;
    const columnHeights = new Array(columnCount).fill(-spacing);

    root.childNodes.forEach((child: HTMLElement, index) => {
      // Choose the column with the lowest height
      const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      const hOffset = columnIndex * (itemWidth + spacing);
      const yOffset = columnHeights[columnIndex] + spacing;

      if (child.style && child.getBoundingClientRect) {
        child.style.transform = `translate(${hOffset}px, ${yOffset}px)`;
        child.style.width =
          colCount === 1 ? `${container.getBoundingClientRect().width}px` : `${itemWidth}px`;
        // Increment the height of that column
        const height = child.getBoundingClientRect().height;
        columnHeights[columnIndex] += height + spacing;

        root.style.height = `${Math.max(...columnHeights)}px`;
      }
    });
  };

  const handleResize = () => {
    if (container && root) {
      const width = container.getBoundingClientRect().width;
      colCount = Math.floor(width / (itemWidth + spacing));
      if (colCount === 1) {
        root.style.width = `${width}px`;
      } else {
        root.style.width = `${colCount * (itemWidth + spacing) - spacing}px`;
      }
    }
  };

  $: positionItems(colCount);
  $: ((_: HTMLElement) => {
    handleResize();
  })(container);

  onMount(handleResize);

  afterUpdate(() => positionItems(colCount));
</script>

<svelte:window on:resize={handleResize} />
<div class="container" bind:this={root}>
  <slot itemClass />
</div>

<style lang="scss">
  .container {
    position: relative;
    margin-bottom: spacing(2);
  }
</style>
