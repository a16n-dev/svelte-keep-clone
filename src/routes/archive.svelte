<script lang="ts">
  import { onMount } from 'svelte';
  import Container from '../components/Container.svelte';
  import Masonry from '../components/Masonry.svelte';
  import Note from '../components/Note.svelte';
  import notes, { NoteStatus, updateNoteAtIndex } from '../store/notes';

  let root: HTMLElement;

  let loaded = false;

  onMount(() => (loaded = true));
</script>

<Container>
  <div class="root" bind:this={root}>
    {#if loaded}
      <div class="container">
        <Masonry container={root}>
          {#each $notes as note, index (note.createdAt)}
            {#if note.status === NoteStatus.ARCHIVED}
              <Note updateNote={(note) => updateNoteAtIndex(index, note)} {note} />
            {/if}
          {/each}
        </Masonry>
      </div>
    {/if}
  </div>
</Container>

<style lang="scss">
  .container {
    margin: 0 auto;
    width: min-content;
  }
</style>
