 const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    let menuOpen = false;

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOverlay.classList.add('active');
        body.style.overflow = 'hidden';
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
        menuOpen = false;
      }
    }

    const menuLinks = document.querySelectorAll('.menu-links a, .menu-cta .btn-cta');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
        menuOpen = false;
      });
    });

    // from start
     const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset form feedback
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Validate name
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      } else {
        name.classList.remove('is-invalid');
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
      }

      // Validate message
      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
      } else {
        message.classList.remove('is-invalid');
      }

      // If all valid, save to localStorage
      if (isValid) {
        const formData = {
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim(),
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));

        successMsg.style.display = 'block';
        form.reset();
      }
    });