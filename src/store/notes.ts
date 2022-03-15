import { writable } from 'svelte/store';

export interface Note {
  title?: string;
  content: string;
  createdAt: number;
  pinned?: boolean;
}

/**
 * Store for notes
 */

type NotesStore = Note[];

const defaultValue: NotesStore = [];

const notes = writable(defaultValue);
export default notes;
