<script lang="ts">
  import Note from '../components/Note.svelte';

  import Masonry from '../components/Masonry.svelte';
  import CreatePost from '../components/CreatePost.svelte';
  import notes, { NoteStatus, updateNoteAtIndex, type NoteType } from '../store/notes';
  import { onMount } from 'svelte';
  import Container from '../components/Container.svelte';

  let root: HTMLElement;

  let loaded = false;

  onMount(() => (loaded = true));
</script>

<svelte:head>
  <title>Notes App</title>
</svelte:head>

<Container>
  <div class="root" bind:this={root}>
    <CreatePost />
    {#if loaded}
      <div class="container">
        <!-- Pinned Notes -->
        {#if $notes.some((n) => n.status === NoteStatus.PINNED)}
          <h2 class="section-header">Pinned</h2>
          <Masonry container={root}>
            {#each $notes as note, index (note.createdAt)}
              {#if note.status === NoteStatus.PINNED}
                <Note updateNote={(note) => updateNoteAtIndex(index, note)} {note} />
              {/if}
            {/each}
          </Masonry>
          <h2 class="section-header">Other</h2>
        {/if}
        <!-- Regular Notes -->
        <Masonry container={root}>
          {#each $notes as note, index (note.createdAt)}
            {#if note.status === NoteStatus.DEFAULT}
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

  .section-header {
    margin-bottom: spacing(1);
    font-size: 0.825rem;
    font-weight: 600;
    color: $text-muted;
    text-transform: uppercase;
  }
</style>
