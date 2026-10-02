document.addEventListener('DOMContentLoaded', () => {

    const browseDropdown = document.querySelector('.dropdown');
    const browseButton = browseDropdown?.querySelector('.dropbtn');

    if (browseDropdown && browseButton) {
        browseButton.addEventListener('click', () => {
            const isExpanded = browseButton.getAttribute('aria-expanded') === 'true';
            browseButton.setAttribute('aria-expanded', String(!isExpanded));
            browseDropdown.classList.toggle('open', !isExpanded);
        });

        document.addEventListener('click', event => {
            if (!browseDropdown.contains(event.target)) {
                browseDropdown.classList.remove('open');
                browseButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
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