<script lang="ts">
  import type { Note } from 'src/store/notes';

  export let note: Note;
</script>

<div class="root">
  {#if note.title}
    <h2>{note.title}</h2>
  {/if}
  <p class="content">{note.content}</p>
</div>

<style lang="scss">
  .root {
    position: absolute;
    box-sizing: border-box;
    word-break: break-all;
    background: #eee;
    flex-grow: 1;
    border: 1px solid #ccc;
    border-radius: $rounded;
    padding: spacing(4) spacing(3);
    transition: transform 0.3s ease;

    &:focus-visible {
      outline: none;
      border: 3px solid green;
    }
  }

  .content {
    padding: 0;
    margin: 0;
  }
</style>
