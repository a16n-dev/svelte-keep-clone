<script lang="ts">
  import notes from '../store/notes';

  import { onMount } from 'svelte';

  let expanded = false;

  let textArea: HTMLTextAreaElement;
  let form: HTMLFormElement;

  const handleTextInputChange = () => {
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  };

  const createPost = () => {
    const data = new FormData(form);

    const title = data.get('title').toString().trim() || undefined;
    const content = data.get('content').toString().trim() || undefined;

    if (content || title) {
      notes.update((notes) => [{ content, title, createdAt: Date.now() }, ...notes]);
    }

    form.reset();
    handleTextInputChange();
  };

  const detectFocus = () => {
    if (form) {
      const isFocused = form.contains(document.activeElement);

      // If the form is losing focus
      if (!isFocused && expanded) createPost();
      expanded = isFocused;
    }
  };

  onMount(handleTextInputChange);
</script>

<svelte:window on:click={detectFocus} />

<form
  class="root"
  bind:this={form}
  tabindex="0"
  on:submit={(e) => {
    e.preventDefault();
    createPost();
  }}
>
  {#if expanded}
    <input class="title-input" name="title" placeholder="Title" />
  {/if}
  <textarea
    rows={1}
    name="content"
    bind:this={textArea}
    on:input={handleTextInputChange}
    class="content-input"
    placeholder="Take note..."
  />
</form>

<style lang="scss">
  .root {
    margin: 0 auto;
    max-width: 600px;
    background: $surface;
    display: flex;
    flex-direction: column;
    border: $border-width solid $outline;
    border-radius: $border-radius;
    margin-bottom: spacing(4);
  }

  .title-input {
    font-weight: 600;
    color: $text;
    padding: spacing(1) spacing(1) spacing(0) spacing(1);
  }

  .content-input {
    resize: none;
    color: $text;
    padding: spacing(1);
    height: 50px;
  }
</style>
