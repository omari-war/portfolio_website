  window.addEventListener('scroll', function () {
    const resumeSection = document.getElementById('resume');
    const menuBars = document.querySelectorAll('#men_dis .bar');
    const resumeTop = resumeSection.offsetTop;

    if (window.scrollY <= resumeTop) {
      menuBars.forEach(bar => bar.style.backgroundColor = '#ffffff'); // white
    } else {
      menuBars.forEach(bar => bar.style.backgroundColor = '#000000'); // black or original color
    }
  });