const avatarInput = document.getElementById('avatarInput');
const navAvatar = document.getElementById('navAvatar');

avatarInput.addEventListener('change', function (event) {
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Updates navbar preview immediately
      navAvatar.src = e.target.result;
    };

    // Reads file as a Base64 URL
    reader.readAsDataURL(file);
  }
});