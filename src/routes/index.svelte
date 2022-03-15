<script lang="ts">
  import Note from '../components/Note/Note.svelte';

  import Masonry from '../components/Masonry/Masonry.svelte';
  import CreatePost from '../components/CreatePost.svelte';
  import notes from '../store/notes';
</script>

<div style="margin: 32px 64px" class="root">
  <CreatePost />
  <Masonry>
    {#each $notes as note (note.createdAt)}
      <Note {note} />
    {/each}
  </Masonry>
</div>
