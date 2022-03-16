<script lang="ts">
  import Trash from '../assets/Trash.svelte';
  import type { Note } from '../store/notes';
  import PinIcon from '../assets/PinIcon.svelte';
  import IconButton from './IconButton.svelte';

  // Props
  export let note: Note;
  export let togglePinned: () => void;

  // let isHovered: boolean = false;
</script>

<div class="root">
  <button class="pin-button hover-visible" on:click={togglePinned}
    ><PinIcon filled={note.pinned} size={18} /></button
  >
  {#if note.title}
    <h4 class="title">{note.title}</h4>
  {/if}
  {#if note.content}
    <p class="content">{note.content}</p>
  {/if}
  <div class="icon-bar">
    <IconButton>
      <Trash size={18} />
    </IconButton>
  </div>
</div>

<style lang="scss">
  $side-margin: 1.25;
  $x-margin: 0.75;

  .root {
    position: absolute;
    background: $surface;
    flex-grow: 1;
    border: $border-width solid $outline;
    border-radius: $border-radius;
    padding: spacing(1) spacing($x-margin) spacing(0.25) spacing($x-margin);
    padding-right: spacing($side-margin + $x-margin);
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
    border-top: $border-width solid $outline;
    margin-top: spacing(1);
    margin-right: spacing(-$side-margin);
    padding-top: spacing(0.25);
  }
</style>
