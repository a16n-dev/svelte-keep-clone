<script lang="ts">
  export let content: string;
  export let title: string | undefined;
</script>

<div class="root">
  {#if title}
    <h3>{title}</h3>
  {/if}
  <p>{content}</p>
</div>

<style lang="scss">
  .root {
    border: 1px solid #aaa;
    padding: 12px 8px;
    border-radius: 4px;

    $red: #00f;

    & p {
      color: $red;
    }
  }
</style>
