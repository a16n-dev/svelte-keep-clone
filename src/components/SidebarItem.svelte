<script lang="ts">
  import { browser } from '$app/env';
  import { base } from '$app/paths';

  export let href: string;
  export let label: string;

  const active = browser && `${base}${href}/` === location.pathname;
</script>

<a class="root" sveltekit:prefetch class:active rel="external" href={`${base}${href}`}>
  <slot />
  <div class="label">{label}</div>
</a>

<style lang="scss">
  .root {
    display: flex;
    align-items: center;
    padding: spacing(0.75) spacing(2);
    font-weight: 600;
    margin: spacing(0.25) 0;
    font-size: 0.875rem;
    border-radius: 0 999px 999px 0;
    color: $text-muted;

    &.active {
      background: $primary-dark;
      color: $primary;
    }
  }

  .label {
    margin-left: spacing(0.5);
    color: $text;
  }
</style>
