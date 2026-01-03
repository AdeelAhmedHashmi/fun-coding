# Fun Draw

A lightweight, web-based drawing application built using the HTML5 Canvas API and configured as a Progressive Web App (PWA) for offline capabilities.

## Features

- **Canvas API Rendering**: High-performance drawing with support for various brush sizes and colors.
- **PWA Ready**: Includes a web app manifest and service worker for a native-like experience.
- **Offline Support**: Service worker caches essential assets (HTML, CSS, JS) to allow drawing without an internet connection.
- **Responsive Design**: Optimized for both desktop and mobile touch interactions.

## Getting Started

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/AdeelAhmedHashmi/fun-coding.git
    cd fun-coding/draw
    ```

2.  **Run with a local server**:
    Since Service Workers require a secure context (HTTPS or localhost), use a local server:

    ```bash
    npx serve .
    ```

3.  **Open in Browser**:
    Navigate to `http://localhost:3000` to start drawing.

## Implementation Details

### Canvas API

The core drawing logic is handled in `draw.js`, utilizing `requestAnimationFrame` for smooth strokes and event listeners for `mousedown`, `mousemove`, and `mouseup` (plus touch equivalents).

### Service Worker

The `sw.js` file manages the cache-first strategy:

- **Install**: Pre-caches the UI shell and core logic.
- **Activate**: Cleans up old caches.
- **Fetch**: Intercepts network requests to serve assets from the cache when offline.
