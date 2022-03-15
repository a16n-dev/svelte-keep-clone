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

  const detectFocus = () => {
    if (form) {
      const isFocused = form.contains(document.activeElement);

      // If the form is losing focus
      if (!isFocused && expanded) {
        // Create a post then reset
        const data = new FormData(form);

        const title = data.get('title').toString();
        const content = data.get('content').toString();

        if (content || title) {
          notes.update((notes) => [{ content, title, createdAt: Date.now() }, ...notes]);
        }

        form.reset();
        handleTextInputChange();
      }
      expanded = isFocused;
    }
  };

  onMount(handleTextInputChange);
</script>

<svelte:window on:click={detectFocus} />

<form class="root" bind:this={form} tabindex="0">
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
    border: 1px solid $outline;
    border-radius: $rounded;
  }

  .title-input {
    font-weight: 600;
    padding: spacing(4) spacing(4) spacing(0) spacing(4);
  }

  .content-input {
    resize: none;
    padding: spacing(4) spacing(4) spacing(4) spacing(4);
    height: 50px;
  }
</style>
