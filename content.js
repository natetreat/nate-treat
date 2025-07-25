window.addEventListener('scroll', function() {
  const video = document.getElementById('background-video');
  // Fade out as you scroll down (adjust divisor for speed)
  let fade = 1 - window.scrollY / 400;
  fade = Math.max(fade, 0); // Prevent negative opacity
  video.style.opacity = fade;
});