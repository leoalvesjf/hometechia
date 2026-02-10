document.getElementById('newsletter').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Show! O HomeTechIA vai te enviar novidades em: ${email}`);
    this.reset();
});