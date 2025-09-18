// tests/demo.js
// Intentionally uses OffscreenCanvas and pictureInPicture to trigger the rule
const c = new OffscreenCanvas(300, 150);
console.log(document.pictureInPictureEnabled);
