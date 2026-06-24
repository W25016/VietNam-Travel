let activeMonth = 1;
let isScrolling = false;

function showDestination(month) {
  const data = travelData.find(d => d.month === month);
  if (!data) return;


  const img = document.getElementById('hero-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = data.img;
    img.style.opacity = '1';
  }, 250);


  document.getElementById('roman').textContent     = data.romanNumeral;
  document.getElementById('coords').textContent    = data.coords;
  document.getElementById('weather').textContent   = data.weather;
  document.getElementById('time').textContent      = data.time;
  document.getElementById('title').textContent     = data.titleJp;
  document.getElementById('subtitle').textContent  = data.titleVi;
  document.getElementById('desc').textContent      = data.descJp;
  document.getElementById('elevation').textContent = `ELV. ${data.elevation}`;
  document.getElementById('caption').textContent   = data.captionVi;


  const content = document.getElementById('content');
  content.style.animation = 'none';
  void content.offsetHeight; // Trick kích hoạt render lại luồng layout css
  content.style.animation = 'fadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards';

 
  const strip = document.getElementById('gallery');
  strip.innerHTML = '';
  (galleryImages[month] || []).forEach(item => {
    const div = document.createElement('div');
    div.className = 'thumb';
    // Đã sửa đổi class thành thumb-caption để ánh xạ chuẩn CSS
    div.innerHTML = `
      <img src="${item.url}" alt="${item.cap}" loading="lazy">
      <div class="thumb-caption">${item.cap}</div>
    `;
    strip.appendChild(div);
  });

  
  document.querySelectorAll('.month-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.month, 10) === month);
  });

  activeMonth = month;
}


function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  travelData.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'month-btn';
    btn.dataset.month = item.month;
    btn.textContent = item.monthLabel;
    btn.onclick = () => showDestination(item.month);
    sidebar.appendChild(btn);
  });
}


document.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;
  
  const next = e.deltaY > 0
    ? (activeMonth < 12 ? activeMonth + 1 : 1)
    : (activeMonth > 1  ? activeMonth - 1 : 12);
    
  showDestination(next);
  
  setTimeout(() => { isScrolling = false; }, 700); // Thao tác trễ để animation chạy mượt
}, { passive: true });


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    showDestination(activeMonth < 12 ? activeMonth + 1 : 1);
  }
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    showDestination(activeMonth > 1 ? activeMonth - 1 : 12);
  }
});


buildSidebar();
showDestination(1);