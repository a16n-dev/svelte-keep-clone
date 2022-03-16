import { writable } from 'svelte/store';
import { browser } from '$app/env';

export interface NoteType {
  title?: string;
  content: string;
  createdAt: number;
  status: NoteStatus;
  color?: string;
}

export enum NoteStatus {
  DEFAULT,
  PINNED,
  DELETED,
  ARCHIVED,
}

/**
 * Store for notes
 */

type NotesStore = NoteType[];

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

export const updateNoteAtIndex = (index: number, note: NoteType | null) => {
  notes.update((notes) => {
    if (note) {
      return [...notes.slice(0, index), note, ...notes.slice(index + 1)];
    } else {
      return [...notes.slice(0, index), ...notes.slice(index + 1)];
    }
  });
};

export default notes;
