import { writable } from 'svelte/store';
import { browser } from '$app/env';

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

const storageKey = 'notes';

const defaultValue: NotesStore = browser ? JSON.parse(localStorage.getItem(storageKey)) ?? [] : [];

const notes = writable(defaultValue);

notes.subscribe((value) => {
  if (browser) localStorage.setItem(storageKey, JSON.stringify(value));
});

export const clearNotes = () => {
  notes.set([]);
  localStorage.removeItem('notes');
};

export default notes;
