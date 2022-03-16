<script>
  import Archive from '../assets/Archive.svelte';
  import Trash from '../assets/Trash.svelte';

  import Logo from '../assets/Logo.svelte';
  import SidebarItem from './SidebarItem.svelte';
</script>

<div class="root">
  <SidebarItem label="Home" href=""><Logo size={24} /></SidebarItem>
  <SidebarItem label="Archive" href="/archive"><Archive size={24} /></SidebarItem>
  <SidebarItem label="Trash" href="/trash"><Trash size={24} /></SidebarItem>
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    width: $sidebar-width;
  }
</style>
