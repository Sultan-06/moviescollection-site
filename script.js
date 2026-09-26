document.addEventListener('DOMContentLoaded', () => {
    
    // 1. READ MORE / READ LESS LOGIC
    // Select all the 'Read More' buttons inside the cards
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find the corresponding description paragraph right above the button
            const descText = this.previousElementSibling;

            // Toggle the 'expanded' class to override the line-clamp limit
            descText.classList.toggle('expanded');

            // Update the button text accordingly
            if (descText.classList.contains('expanded')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });

    // 2. AVATAR UPLOAD LOGIC
    const avatarInput = document.getElementById('avatarInput');
    const navAvatar = document.getElementById('navAvatar');

    if (avatarInput && navAvatar) {
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
    }
});