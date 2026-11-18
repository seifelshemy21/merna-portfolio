import { useState, useEffect, useRef } from 'react';

/**
 * Continuous Human-like Typewriter Hook
 *
 * Sequence:
 * 1. Start with empty text.
 * 2. Type characters one by one (120-160ms per char with natural human variance).
 * 3. Add small natural pauses after punctuation (!, ', /, .).
 * 4. Stop when complete text is displayed.
 * 5. Wait 2 seconds (2000ms).
 * 6. Delete character by character until empty (~45-65ms per char).
 * 7. Wait 500ms.
 * 8. Start typing again.
 * 9. Repeat continuously forever.
 */
export function useHeroTypewriter({
    lines = ["Hi!", "I'm Merna", "UI/UX designer"],
    typeSpeed = 135,       // Base ms per character (120-160ms)
    deleteSpeed = 50,      // ms per character during deletion
    linePause = 400,       // Pause between lines during forward typing (ms)
    fullTextPause = 2000,  // Pause after finishing complete sentence (ms)
    restartPause = 500,    // Pause after deleting everything before re-typing (ms)
} = {}) {
    const [displayedLines, setDisplayedLines] = useState(() => lines.map(() => ''));
    const [activeLineIndex, setActiveLineIndex] = useState(0);

    const timerRef = useRef(null);
    const optionsRef = useRef({
        lines,
        typeSpeed,
        deleteSpeed,
        linePause,
        fullTextPause,
        restartPause,
    });
    optionsRef.current = {
        lines,
        typeSpeed,
        deleteSpeed,
        linePause,
        fullTextPause,
        restartPause,
    };

    useEffect(() => {
        let isMounted = true;
        let lineIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        const currentLines = optionsRef.current.lines.map(() => '');

        // Calculate natural human typing delay with punctuation pauses
        const getTypingDelay = (char) => {
            const { typeSpeed: speed } = optionsRef.current;
            // Human variation: speed +/- 20ms
            const base = Math.max(80, speed + (Math.random() - 0.5) * 40);

            if (char === '!' || char === '.') return base + 280;
            if (char === '/' || char === ',') return base + 150;
            if (char === "'") return base + 110;
            if (char === ' ') return base + 70;
            return base;
        };

        const tick = () => {
            if (!isMounted) return;

            const {
                lines: currentTargetLines,
                deleteSpeed: delSpeed,
                linePause: lnPause,
                fullTextPause: ftPause,
                restartPause: rstPause,
            } = optionsRef.current;

            if (!isDeleting) {
                // === FORWARD TYPING PHASE ===
                const targetText = currentTargetLines[lineIdx];

                if (charIdx < targetText.length) {
                    const char = targetText[charIdx];
                    charIdx++;
                    currentLines[lineIdx] = targetText.slice(0, charIdx);

                    if (isMounted) {
                        setDisplayedLines([...currentLines]);
                        setActiveLineIndex(lineIdx);
                    }

                    const delay = getTypingDelay(char);
                    timerRef.current = setTimeout(tick, delay);
                } else {
                    // Line fully typed
                    if (lineIdx < currentTargetLines.length - 1) {
                        // Move to next line after a short natural pause
                        lineIdx++;
                        charIdx = 0;
                        if (isMounted) setActiveLineIndex(lineIdx);
                        timerRef.current = setTimeout(tick, lnPause);
                    } else {
                        // All lines complete! Wait 2 seconds, then begin deleting
                        timerRef.current = setTimeout(() => {
                            if (!isMounted) return;
                            isDeleting = true;
                            timerRef.current = setTimeout(tick, delSpeed);
                        }, ftPause);
                    }
                }
            } else {
                // === DELETING PHASE ===
                if (charIdx > 0) {
                    charIdx--;
                    currentLines[lineIdx] = currentTargetLines[lineIdx].slice(0, charIdx);

                    if (isMounted) {
                        setDisplayedLines([...currentLines]);
                        setActiveLineIndex(lineIdx);
                    }

                    // Human backspacing with slight rhythm variation
                    const delDelay = delSpeed + (Math.random() - 0.5) * 16;
                    timerRef.current = setTimeout(tick, Math.max(30, delDelay));
                } else {
                    // Current line is deleted
                    if (lineIdx > 0) {
                        // Move to previous line
                        lineIdx--;
                        charIdx = currentTargetLines[lineIdx].length;
                        if (isMounted) setActiveLineIndex(lineIdx);
                        timerRef.current = setTimeout(tick, 150);
                    } else {
                        // Everything is deleted! Wait 500ms, then start typing again
                        if (isMounted) setActiveLineIndex(0);
                        timerRef.current = setTimeout(() => {
                            if (!isMounted) return;
                            isDeleting = false;
                            lineIdx = 0;
                            charIdx = 0;
                            timerRef.current = setTimeout(tick, 100);
                        }, rstPause);
                    }
                }
            }
        };

        // Start typing shortly after mount
        timerRef.current = setTimeout(tick, 200);

        return () => {
            isMounted = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return {
        displayedLines,
        activeLineIndex,
    };
}
