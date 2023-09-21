document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Disable right-click context menu
  });
  
  document.onkeydown = function (e) {
    // Disable common keyboard shortcuts (Ctrl+Shift+I, F12, Ctrl+U, Ctrl+Shift+J)
    if (
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
      (e.key === 'F12' || e.keyCode === 123)
    ) {
      e.preventDefault();
    }
  };
  