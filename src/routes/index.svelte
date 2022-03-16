<script lang="ts">
  import Note from '../components/Note.svelte';

  import Masonry from '../components/Masonry.svelte';
  import CreatePost from '../components/CreatePost.svelte';
  import notes from '../store/notes';
  import { onMount } from 'svelte';
  import Container from '../components/Container.svelte';

  let root: HTMLElement;

  let loaded = false;

  const togglePinned = (index: number) => {
    notes.update((notes) => {
      const note = notes[index];
      return [
        ...notes.slice(0, index),
        { ...note, pinned: !note.pinned },
        ...notes.slice(index + 1),
      ];
    });
  };

  onMount(() => (loaded = true));
</script>

<Container>
  <div class="root" bind:this={root}>
    <CreatePost />
    {#if loaded}
      <div class="container">
        <!-- Pinned Notes -->
        {#if $notes.some((n) => n.pinned)}
          <h2 class="section-header">Pinned</h2>
          <Masonry container={root}>
            {#each $notes as note, index (note.createdAt)}
              {#if note.pinned}
                <Note togglePinned={() => togglePinned(index)} {note} />
              {/if}
            {/each}
          </Masonry>
          <h2 class="section-header">Other</h2>
        {/if}
        <!-- Regular Notes -->
        <Masonry container={root}>
          {#each $notes as note, index (note.createdAt)}
            {#if !note.pinned}
              <Note togglePinned={() => togglePinned(index)} {note} />
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
