window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progress = (currentScroll / maxScroll) * 100;
    progressBar.style.width = progress + '%';
});
