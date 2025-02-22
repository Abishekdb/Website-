// Mobile Menu Toggle
document.getElementById('menu-button').addEventListener('click', function() {
  var menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
});

// Navigation Link Scroll Behavior
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  });
});

// Day/Night Toggle
function toggleDayNight() {
  const body = document.body;
  const profileName = document.getElementById('profile-name');
  const profileDescription = document.getElementById('profile-description');
  const toggleButton = document.getElementById('toggle-button');
  const toggleIcon = document.getElementById('toggle-icon');
  const cards = document.querySelectorAll('.card');
  const cardTitles = document.querySelectorAll('.card h1');

  if (body.classList.contains('bg-gray-100')) {
    body.classList.replace('bg-gray-100', 'bg-black');
    profileName.classList.replace('text-black', 'text-white');
    profileDescription.classList.replace('text-gray-600', 'text-gray-300');
    toggleButton.classList.replace('border-yellow-500', 'border-gray-700');
    toggleButton.classList.replace('text-yellow-500', 'text-gray-300');
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    cards.forEach(card => {
      card.classList.replace('bg-white', 'bg-gray-800');
    });
    cardTitles.forEach(title => {
      title.classList.replace('text-black', 'text-white');
    });
  } else {
    body.classList.replace('bg-black', 'bg-gray-100');
    profileName.classList.replace('text-white', 'text-black');
    profileDescription.classList.replace('text-gray-300', 'text-gray-600');
    toggleButton.classList.replace('border-gray-700', 'border-yellow-500');
    toggleButton.classList.replace('text-gray-300', 'text-yellow-500');
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    cards.forEach(card => {
      card.classList.replace('bg-gray-800', 'bg-white');
    });
    cardTitles.forEach(title => {
      title.classList.replace('text-white', 'text-black');
    });
  }
}

// Share Popup Toggle
function toggleSharePopup() {
  const sharePopup = document.getElementById('share-popup');
  if (sharePopup) {
    sharePopup.classList.toggle('hidden');
  } else {
    console.error('Share popup element not found');
  }
}

// Copy Link to Clipboard
function copyLink() {
  const shareLink = document.getElementById('share-link');
  if (shareLink) {
    shareLink.select();
    shareLink.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Link copied to clipboard');
  } else {
    console.error('Share link input not found');
  }
}

// Scroll-to-Top Button
document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
