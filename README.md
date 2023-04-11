# video-pauser

### What Is This?

This will look for decorative muted looped videos and adds a styled button on focus or hover which toggles pause/play functionality. This is to meet wcag.

### Can I see an example?

https://stackblitz.com/edit/js-x9wmjv?file=index.js
To test, just tab or hover over videos.

### Usage

```
npm install video-pauser
```

Then...

```
import VideoPauser from 'video-pauser';

// you can use whatever video selector you would like, but it has to be a video element.
VideoPauser('video');
```
