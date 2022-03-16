<button class="root"><slot /></button>

<style lang="scss">
  .root {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    padding: spacing(0.25);
    height: 32px;
    color: $text;
    border-radius: 9999px;

    &:hover {
      background: rgba(0, 0, 0, 0.12);
    }
  }
</style>
