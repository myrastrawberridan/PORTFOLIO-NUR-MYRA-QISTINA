
// ===== EMAILJS =====
emailjs.init("3fQ0Ps-L_IokpaQiW");

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

  emailjs.send('service_of0eldm', 'template_cmdy94l', templateParams)
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