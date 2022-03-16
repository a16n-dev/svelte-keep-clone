<script lang="ts">
  import Trash from '../assets/Trash.svelte';
  import { NoteStatus, type NoteType } from '../store/notes';
  import PinIcon from '../assets/PinIcon.svelte';
  import IconButton from './IconButton.svelte';
  import Color from '../assets/Color.svelte';
  import Archive from '../assets/Archive.svelte';
  import PermanentDelete from '../assets/PermanentDelete.svelte';
  import RestoreDeleted from '../assets/RestoreDeleted.svelte';

  // Props
  export let note: NoteType;
  export let updateNote: (note: NoteType | null) => void;

  const togglePinned = () => {
    updateNote({
      ...note,
      status: note.status === NoteStatus.PINNED ? NoteStatus.DEFAULT : NoteStatus.PINNED,
    });
  };

  const deleteNote = () => {
    updateNote({ ...note, status: NoteStatus.DELETED });
  };

  const archiveNote = () => {
    updateNote({ ...note, status: NoteStatus.ARCHIVED });
  };

  const permanentlyDeleteNote = () => {
    updateNote(null);
  };

  const restoreNote = () => {
    updateNote({ ...note, status: NoteStatus.DEFAULT });
  };

  const setNoteColor = () => {
    updateNote({ ...note, color: '#2F4439' });
  };
</script>

<div class="root" style={note.color ? `--bg-color: ${note.color}` : ''}>
  {#if note.status === NoteStatus.DEFAULT || note.status === NoteStatus.PINNED}
    <button class="pin-button hover-visible" on:click={togglePinned}
      ><PinIcon filled={note.status === NoteStatus.PINNED} size={18} />
    </button>
  {/if}
  {#if note.title}
    <h4 class="title">{note.title}</h4>
  {/if}
  {#if note.content}
    <p class="content">{note.content}</p>
  {/if}
  <div class="icon-bar hover-visible">
    {#if note.status === NoteStatus.DELETED}
      <IconButton on:click={permanentlyDeleteNote}>
        <PermanentDelete size={18} />
      </IconButton>
      <IconButton on:click={restoreNote}>
        <RestoreDeleted size={18} />
      </IconButton>
    {:else if note.status === NoteStatus.ARCHIVED}
      <IconButton on:click={restoreNote}>
        <Archive size={18} />
      </IconButton>
    {:else}
      <IconButton on:click={setNoteColor}>
        <Color size={18} />
      </IconButton>
      <IconButton on:click={archiveNote}>
        <Archive size={18} />
      </IconButton>
      <IconButton on:click={deleteNote}>
        <Trash size={18} />
      </IconButton>
    {/if}
  </div>
</div>

<style lang="scss">
  $x-margin: 0.75;

  .root {
    --bg-color: #{$surface};
    position: absolute;
    background: var(--bg-color);
    flex-grow: 1;
    border: $border-width solid $outline;
    border-radius: $border-radius;
    padding: spacing(1) spacing($x-margin) spacing(0.25) spacing($x-margin);
    padding-right: spacing($x-margin);
    transition: transform 0.3s ease;

    &:focus-visible {
      outline: none;
      border: 3px solid green;
    }

    & > .hover-visible {
      opacity: 0;
      transition: all 0.2s ease;
    }

    &:hover > .hover-visible {
      opacity: 1;
    }
  }

  .content,
  .title {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .title {
    margin-right: spacing(1);
    margin-bottom: spacing(0.5);
    font-size: large;
    font-weight: 500;
  }

  .pin-button {
    position: absolute;
    top: spacing(0.5);
    right: spacing(0.5);
    border-radius: $border-radius;
    width: spacing(1.5);
    height: spacing(1.5);
    cursor: pointer;
    color: $text-muted;
    background: none;

    &:hover {
      color: $text;
      background: none;
    }
  }

  .icon-bar {
    display: flex;
    margin: 0 spacing(-0.5);
    padding-top: spacing(0.25);
  }
</style>
