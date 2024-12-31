const PROGRESS = [' ', '⡀', '⣀', '⣄', '⣤', '⣦', '⣶', '⣷', '⣿'];

/**
 * Generates a text-based progress bar.
 * @param {number} progress - The current progress.
 * @param {number} max - The maximum value.
 * @returns {string} The formatted progress bar.
 */
function ProgressBar(progress, max) {
    if (progress > max) progress = max;
    
    const percent = Math.floor((progress / max) * 100);
    const full = Math.floor(progress / max * PROGRESS.length);
    const remainder = Math.floor((progress / max * PROGRESS.length - full) * 8);
    const bar = `${PROGRESS[PROGRESS.length - 1].repeat(full)}${PROGRESS[remainder]}${' '.repeat(PROGRESS.length - full)}`;
    
    return `[ ${bar}] ${percent}%`;
}

module.exports = ProgressBar;
