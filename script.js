// ================================================
// CONFIGURAÇÃO DOS VÍDEOS
// Troque "id" pelo ID do vídeo no YouTube.
// Ex: em https://www.youtube.com/watch?v=dQw4w9WgXcQ
// o ID é "dQw4w9WgXcQ"
// ================================================
const VIDEOS = [
  { id: 'Bhw1Dc1b_Fc', title: 'Shomimi & Minineko React To Memes That Are PURE Good Vibes!'},
  { id: '9Sn-q2G_7es', title: 'MinikoMew reacts to the CUTEST animal memes on the internet!'},
  { id: 'i06h7sbDPrY', title: 'Aquwa Catches Fraiki Lying About Her IRL Photos... (EXPOSED)'},
  { id: 'oWzdklea6h8', title: 'AQUWA AND YUY LOSE IT OVER CHATS UNHINGED MEMES'},
  { id: 'tvvu8zHgsic', title: 'Smol Filian Being Chaotic for 6 minutes'},
];

document.addEventListener('DOMContentLoaded', () => {
  const videoBox = document.querySelector('.carousel__video');
  const thumbImg = document.querySelector('.carousel__thumb');
  const playBtn = document.querySelector('.carousel__play');
  const prevArrow = document.querySelector('.carousel__arrow--prev');
  const nextArrow = document.querySelector('.carousel__arrow--next');
  const peekPrev = document.querySelector('.carousel__peek--prev');
  const peekNext = document.querySelector('.carousel__peek--next');
  const dotsContainer = document.querySelector('.carousel__dots');

  let currentIndex = 0;

  function thumbUrl(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  // Cria as bolinhas de navegação
  VIDEOS.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel__dot');
    dot.setAttribute('aria-label', `Ir para o vídeo ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll('.carousel__dot'));

  function render(animate = true) {
    const current = VIDEOS[currentIndex];
    const prev = VIDEOS[(currentIndex - 1 + VIDEOS.length) % VIDEOS.length];
    const next = VIDEOS[(currentIndex + 1) % VIDEOS.length];

    // Restaura a thumbnail (caso um vídeo estivesse tocando)
    videoBox.innerHTML = `
      <img class="carousel__thumb" src="${thumbUrl(current.id)}" alt="${current.title}">
      <button class="carousel__play" aria-label="Reproduzir vídeo">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg>
      </button>
    `;
    videoBox.querySelector('.carousel__play').addEventListener('click', playCurrentVideo);

    peekPrev.style.backgroundImage = `url('${thumbUrl(prev.id)}')`;
    peekNext.style.backgroundImage = `url('${thumbUrl(next.id)}')`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
    });

    if (animate) {
      // Reinicia a animação de "giro" a cada troca de vídeo
      videoBox.classList.remove('is-changing');
      // Força o navegador a "esquecer" a animação anterior antes de reaplicar
      void videoBox.offsetWidth;
      videoBox.classList.add('is-changing');
    }
  }

  function playCurrentVideo() {
    const current = VIDEOS[currentIndex];
    videoBox.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${current.id}?autoplay=1"
        title="${current.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  }

  function goToSlide(index) {
    currentIndex = index;
    render();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % VIDEOS.length;
    render();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + VIDEOS.length) % VIDEOS.length;
    render();
  }

  nextArrow.addEventListener('click', nextSlide);
  prevArrow.addEventListener('click', prevSlide);
  peekPrev.addEventListener('click', prevSlide);
  peekNext.addEventListener('click', nextSlide);

  render(false); // primeira renderização, sem animação
});
