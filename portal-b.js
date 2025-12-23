function onFrameLoad() {
  const loader = document.getElementById('loader');
  
  // Add a small delay to ensure smooth transition
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1000);
}

// Fallback in case iframe load event doesn't fire (e.g. some cross-origin policies)
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader && loader.style.display !== 'none') {
    onFrameLoad();
  }
}, 5000);