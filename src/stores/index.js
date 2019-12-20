import { writable, readable } from 'svelte/store';

let timeLeft = 6;

export const gameInProgress = writable(false);
export const score = writable(0);

export const timer = readable(timeLeft, set => {
    const interval = setInterval(() => {
        set(--timeLeft);
    }, 1000);

    return () => {
        clearInterval(interval);
    };
});
