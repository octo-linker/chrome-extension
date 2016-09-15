// Saves options to chrome.storage.local.
function save_options() {
  var color = document.getElementById('color').value;
  chrome.storage.local.set({
    favoriteColor: color,
  }, function() {
  });
}

// Restores state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red'
  chrome.storage.local.get({
    favoriteColor: 'red',
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('color').addEventListener('blur',
    save_options);
