// ===== THEME =====
const saved = localStorage.getItem('theme');
if (saved && saved !== 'dark-blue') document.body.classList.add(saved);

const themeBtns = document.querySelectorAll('.theme-btn');
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = '';
    const theme = btn.dataset.theme;
    if (theme !== 'dark-blue') document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  });
});

// ===== EMAILJS =====
emailjs.init("LBhFD19D2lfqAZzsN");

document.getElementById('sendBtn').addEventListener('click', function () {
  const from_name  = document.getElementById('from_name').value.trim();
  const from_email = document.getElementById('from_email').value.trim();
  const subject    = document.getElementById('subject').value.trim();
  const message    = document.getElementById('message').value.trim();
  const status     = document.getElementById('formStatus');

  // Validation
  if (!from_name || !from_email || !subject || !message) {
    status.textContent = '⚠️ Please fill in all fields.';
    status.style.color = '#f87171';
    return;
  }

  const btn = document.getElementById('sendBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const templateParams = {
    from_name,
    from_email,
    subject,
    message
  };

  emailjs.send('service_i2q2n1y', 'template_qebcaj6', templateParams)
    .then(() => {
      status.textContent = '✅ Message sent! I will get back to you soon.';
      status.style.color = '#4ade80';
      btn.textContent = 'SEND MESSAGE →';
      btn.disabled = false;
      // Clear form
      document.getElementById('from_name').value = '';
      document.getElementById('from_email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }, (error) => {
      status.textContent = '❌ Failed to send. Please try again.';
      status.style.color = '#f87171';
      btn.textContent = 'SEND MESSAGE →';
      btn.disabled = false;
    });
});