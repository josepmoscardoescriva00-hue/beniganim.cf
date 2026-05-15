/* ============================================================
   BENIGÀNIM C.F. — Escola de Futbol · main.js
   ============================================================ */

// ── UPLOAD COMPROVANT ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('comprovant');
  const fileLabel = document.getElementById('fileLabel');
  if (!fileInput || !fileLabel) return;

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const textEl = fileLabel.querySelector('.file-upload-text');
    const iconEl = fileLabel.querySelector('i');
    if (file) {
      textEl.textContent = file.name;
      iconEl.className = 'fas fa-check-circle';
      fileLabel.classList.add('has-file');
    } else {
      textEl.textContent = 'Fes clic per adjuntar l\'arxiu';
      iconEl.className = 'fas fa-cloud-upload-alt';
      fileLabel.classList.remove('has-file');
    }
  });
});

// ── CALENDARI TEMPORADA 26/27 ───────────────────────────────
const DATES_2627 = [
  '06/09/2026','13/09/2026','19/09/2026','27/09/2026',
  '04/10/2026','10/10/2026','18/10/2026','24/10/2026',
  '01/11/2026','07/11/2026','14/11/2026','22/11/2026',
  '28/11/2026','05/12/2026','13/12/2026','19/12/2026',
  '09/01/2027','16/01/2027','24/01/2027','30/01/2027',
  '06/02/2027','14/02/2027','20/02/2027','28/02/2027'
];

function generaCalendari(rivals, startHome) {
  const p = [];
  for (let i = 0; i < 12; i++) {
    p.push({ d: DATES_2627[i],      r: rivals[i], c: startHome ? (i%2===0) : (i%2!==0) });
  }
  for (let i = 0; i < 12; i++) {
    p.push({ d: DATES_2627[i + 12], r: rivals[i], c: startHome ? (i%2!==0) : (i%2===0) });
  }
  return p;
}

// ── EQUIPS amb jugadors, entrenadors i calendari 26/27 ──────
const equipos = [
  {
    id: 'prebenjami-b', nom: 'PREBENJAMÍ B', categoria: 'prebenjamin', edat: 'Sub-8 (2019)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Fernando Llario'],
    jugadors: ['Aitor Benavent','Enzo Garcia','Enzo Morillo Martínez','Miquel Boluda','Thomas Rincon','Pau Cuquerella','Ion Popa','Alex Lloret López','Sergi Segura','Oliver Part Cabo','Aitor Garcia Valentinov','Pau Alberola'],
    partits: generaCalendari(['Barxeta CF','SD Genovés','Alfarrasí CF','Llutxent CF','Canals CF','CF Montaverner','Aielo CF','Bocairent CF','CD Xàtiva C','CF Ontinyent C','Rotglà CF','Quatretonda CF'], true)
  },
  {
    id: 'prebenjami-a', nom: 'PREBENJAMÍ A', categoria: 'prebenjamin', edat: 'Sub-9 (2018)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Ian Martínez'],
    jugadors: ['Servando Moscardó','Joan Llorens','Dylan Boluda','Blai Navarro','Axel Jorge','Oriol Juan Bellvis','Diego González Maurell','Miquel Senabre','Dylan Fallos Bataller','Xavi Vidal Alborch','Raul Úbeda'],
    partits: generaCalendari(['SD Genovés','CF Montaverner','Barxeta CF','Alfarrasí CF','Llutxent CF','Bocairent CF','Aielo CF','Canals CF','CD Xàtiva C','L\'Olleria CF','Rotglà CF','Simat CF'], false)
  },
  {
    id: 'benjamin-c', nom: 'BENJAMÍ C', categoria: 'benjamin', edat: 'Sub-10/11', format: 'Futbol 8', femeni: false,
    entrenadors: ['Jose Manuel'],
    jugadors: ['Martín Llopis Vila','Rubén Esparza Sansaloni','Iván Lliso Cuquerella','Marco Benavent Morillo','Rubén Martínez','Alexis Martínez','Llorens Descals','Eloy Martínez Pastor','Pablo Alfarrasí'],
    partits: generaCalendari(['Bocairent CF','Aielo CF','Alfarrasí CF','CF Montaverner','SD Genovés','Barxeta CF','Canals CF','Llutxent CF','CD Xàtiva C','CF Ontinyent C','L\'Olleria CF','Rotglà CF'], true)
  },
  {
    id: 'benjamin-b', nom: 'BENJAMÍ B', categoria: 'benjamin', edat: 'Sub-10/11 (2017)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Jorge','Joan'],
    jugadors: ['Ian Benavent','César Llopis','Ami García','Kevin Oliveros Gomar','Hugo Fernández Moscardó','Ander Moscardó Gomar','Joan Sentandreu','Nicolás Ruiz Bohigues','Marco Murillo Sentandreu'],
    partits: generaCalendari(['CD Xàtiva B','Barxeta CF','Llutxent CF','Canals CF','Aielo CF','SD Genovés','CF Montaverner','Bocairent CF','Alfarrasí CF','CF Ontinyent B','L\'Olleria CF','Rotglà CF'], false)
  },
  {
    id: 'benjamin-a', nom: 'BENJAMÍ A', categoria: 'benjamin', edat: 'Sub-10/11 (2016)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Marcos','Josep'],
    jugadors: ['Michel Canton Lliso','Arnau Martí Caballero','Matías González Hidalgo','Marcos Serrano Corral','Joel Moscardó Arteaga','Julen Garcia Moscardó','Edgar Maurell Sempere','Derek Molina','Oscar Llopis Pons','Olivier Gomar Baescu','Alex Vidal','Gerard Peiró Arias','Álex Gandía'],
    partits: generaCalendari(['CD Xàtiva A','CF Ontinyent B','SD Genovés','Barxeta CF','Canals CF','Bocairent CF','Aielo CF','CF Montaverner','Llutxent CF','L\'Olleria CF','Rotglà CF','CD Gandia C'], true)
  },
  {
    id: 'alevin-c', nom: 'ALEVÍ C', categoria: 'alevin', edat: 'Sub-12/13 (2014)', format: 'Futbol 8', femeni: false,
    entrenadors: ['David Espí'],
    jugadors: ['Pepe Pastor Gámez','Ivan Murillo Moscardó','Gabriel Filip Ureña','Pablo Ortiz Cuquerella','Joan Mateu Cortell','Ximo Mompó Mateu','Kiko Fasanar Lara','Uriel Mascarell Segura','Jorge Martí Cuenca','Joel Tudela Moscardó','Gorka Llinares'],
    partits: generaCalendari(['Barxeta CF','Aielo CF','Llutxent CF','CF Montaverner','SD Genovés','Bocairent CF','Alfarrasí CF','Canals CF','CD Xàtiva C','CF Ontinyent C','L\'Olleria CF','Rotglà CF'], true)
  },
  {
    id: 'alevin-b', nom: 'ALEVÍ B', categoria: 'alevin', edat: 'Sub-12/13 (2015)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Tono','Iker'],
    jugadors: ['Aitor Alabort Vergara','Enzo Alabort García','Eros Tormo Soler','Eric Benavent Llopis','David Antolí Tarrazona','Izan Piqueras Fernández','Hugo Esteve Fayos','Diego García Mateu','Gorka Oltra González','Alex Sanz','César García Juan','Vladys Kovalenko','Oles Sychov'],
    partits: generaCalendari(['SD Genovés','CF Ontinyent B','CD Xàtiva B','Canals CF','Bocairent CF','Barxeta CF','Llutxent CF','Aielo CF','Alfarrasí CF','CF Montaverner','L\'Olleria CF','Rotglà CF'], false)
  },
  {
    id: 'alevin-a', nom: 'ALEVÍ A', categoria: 'alevin', edat: 'Sub-12/13 (2014)', format: 'Futbol 8', femeni: false,
    entrenadors: ['Javier'],
    jugadors: ['Héctor Montaner Llario','Bernat Gomar Pla','Iker Herrero Orts','Pablo Ruiz Bohigues','Aleix Fita Sanabre','Asier Benavent Micó','Toni Fernández Moscardó','Marc Miñana Fayos','Lucas Romero','Luca Llopis Vila','Eneas Descals Garcia'],
    partits: generaCalendari(['CF Ontinyent A','CD Xàtiva A','Canals CF','SD Genovés','Bocairent CF','Barxeta CF','Llutxent CF','Aielo CF','CF Montaverner','L\'Olleria CF','CD Gandia B','Rotglà CF'], true)
  },
  {
    id: 'alevin-f', nom: 'ALEVÍ FEMENÍ', categoria: 'alevin', edat: 'Sub-12/13', format: 'Futbol 8', femeni: true,
    entrenadors: ['Joan Benavent'],
    jugadors: ['Marta Tudela Mestre','Júlia Moscardó Català','Andrea Albert Herrero','Nerea Bataller Escrivà','Claudia Lopez Cuquerella','Ainhoa Reig Cuquerella','Clara Lliso Cuquerella','Ainoa Descals Garcia','Andrea Escrivà Pellicer','Andrea Moscardó','Maria Huet','Angela Sanchis'],
    partits: generaCalendari(['SD Genovés F','CF Ontinyent F','CD Xàtiva F','Barxeta CF F','Canals CF F','Bocairent CF F','Aielo CF F','CF Montaverner F','Llutxent CF F','L\'Olleria CF F','Rotglà CF F','CD Gandia F'], false)
  },
  {
    id: 'infantil-b', nom: 'INFANTIL B', categoria: 'infantil', edat: 'Sub-14 (2013)', format: 'Futbol 11', femeni: false,
    entrenadors: ['Sergi'],
    jugadors: ['Ximo Llopis Boluda','Noah Mahiques Mena','Eric Mateu Soler','Daniel Pintado Canton','Pau Benavent Benavent','Patrick Climent Vila','Alex Pellicer Monzó','Hugo Climent Moscardó','Ciro Sanchis','Ander Juan Gomar','Juanjo Oltra','Julen Cuquerella','Miquel Aielo','Bernat Descals'],
    partits: generaCalendari(['CD Xàtiva B','Bocairent CF','Canals CF','Aielo CF','SD Genovés','CF Ontinyent B','CF Montaverner','Barxeta CF','Llutxent CF','L\'Olleria CF','CD Gandia B','Rotglà CF'], true)
  },
  {
    id: 'infantil-a', nom: 'INFANTIL A', categoria: 'infantil', edat: 'Sub-14 (2012)', format: 'Futbol 11', femeni: false,
    entrenadors: ['Alex'],
    jugadors: ['Alex Almenar Navarro','Julen Azañon Giménez','Joan Pons Sabater','Daniel Moscardó Llario','Marcos Sanchez Albert','Marc Oltra González','Miquel Vaya','Erik Gandía','Alejandro Torres','Lluc Pastor','Leo Anwar','Youssef Benali','Pablo Gilabert','Pablo Garcia Masip','Sami Radi','Arnau Pla','Sergi Boluda'],
    partits: generaCalendari(['CF Ontinyent A','CD Xàtiva A','Canals CF','Bocairent CF','Aielo CF','SD Genovés','CF Montaverner','Barxeta CF','Llutxent CF','CD Gandia A','L\'Olleria CF','Rotglà CF'], false)
  },
  {
    id: 'infantil-f', nom: 'INFANTIL FEMENÍ', categoria: 'infantil', edat: 'Sub-14 (2012-13)', format: 'Futbol 11', femeni: true,
    entrenadors: ['Ivan'],
    jugadors: ['Noelia Carbonell Alabort','Beatriz Santamaría Moscardó','Ivanna Elisa Ivanov','Clara Almenar Navarro','Lorena Boluda Pujante','Thalia Herrero Stefan','Laia Cuquerella Margarit','Ainara Sanz Benavent','Amaia Giménez','Kaylee Tormo','Emma Montaner'],
    partits: generaCalendari(['CF Ontinyent F','CD Xàtiva F','SD Genovés F','Canals CF F','CF Montaverner F','Bocairent CF F','Aielo CF F','Barxeta CF F','Llutxent CF F','L\'Olleria CF F','CD Gandia F','Rotglà CF F'], true)
  },
  {
    id: 'cadet-c', nom: 'CADET C', categoria: 'cadet', edat: 'Sub-16 (2011)', format: 'Futbol 11', femeni: false,
    entrenadors: ['Efrén'],
    jugadors: ['Pablo Esteve Fayos','Jose Alejandro Pons','Mateo Úbeda Tormo','Pau Monton Tormo','Biel Pla Moltó','Hugo Sampedro Sampedro','Alex Llácer Tudela','Dídac Santacatalina Ortiz','Leo Gelín Segrelles','Pau Vidal Vidal','Marc Boix Gandía','Noel Alabort','Vicent Marchirant','Mark Rus','David Malonda','Isaac Bermúdez Cardona'],
    partits: generaCalendari(['CD Xàtiva C','Bocairent CF','Aielo CF','CF Montaverner','SD Genovés','Canals CF','CF Ontinyent C','Barxeta CF','Llutxent CF','L\'Olleria CF','CD Gandia C','Rotglà CF'], false)
  },
  {
    id: 'cadet-b', nom: 'CADET B', categoria: 'cadet', edat: 'Sub-16 (2011)', format: 'Futbol 11', femeni: false,
    entrenadors: ['Javi','Naim'],
    jugadors: ['Aitor García','Lluc Ferrer','Joan Vidal Albert','Iker Sanchis Llopis','Izan Blasco Beneyto','Ethan Gomar Sanjuan','Edu Lloret López','Pablo Megías','Aaron Pastor Bataller','Francisco de Asís Tormo Soler','Sergi Mateu','Izan Montero Lafuente','Eric Porter Santandreu','Aleix Juan','Carles Guerrero','Darius Moraru','Vicent Cháfer','Cristian Alberola'],
    partits: generaCalendari(['CD Xàtiva B','CF Ontinyent B','Canals CF','Bocairent CF','SD Genovés','Barxeta CF','Llutxent CF','Aielo CF','CF Montaverner','L\'Olleria CF','CD Gandia B','Rotglà CF'], true)
  },
  {
    id: 'cadet-a', nom: 'CADET A', categoria: 'cadet', edat: 'Sub-16 (2010)', format: 'Futbol 11', femeni: false,
    entrenadors: ['Kevin'],
    jugadors: ['Erik Garcia Carbonell','Marc Mateu Soler','Otto Canet Boluda','Rafa Campillo Mompó','Alex Vilar','Joel Cadiz','Alex Mengual Fernández','David Descals','David Gilavert','Hugo Soler','Josep Pons Moscardó','Waldemar Alejandro Jimenez Ortiz Alves','Bernat Úbeda García','Manel Juan Mira','Joan García Descals','Arnau Llopis','Rubén Montell Durà','Álvaro Benavent','Marco Adrian Chivu','Victor Aznar','Marco Fita'],
    partits: generaCalendari(['CF Ontinyent A','CD Xàtiva A','Canals CF','Bocairent CF','SD Genovés','CF Montaverner','Barxeta CF','Llutxent CF','Aielo CF','CD Gandia A','L\'Olleria CF','Rotglà CF'], false)
  },
  {
    id: 'cadet-f', nom: 'CADET FEMENÍ', categoria: 'cadet', edat: 'Sub-16 (2011-10)', format: 'Futbol 11', femeni: true,
    entrenadors: ['Moisés'],
    jugadors: ['Marta Herrero','Daniela Moscardó','Andrea Badenes','Aroa Martí','Carla Del Val','Lola Benavent','Aitana Borredà Benavent','Marta Carbonell','Belinda Soler','Nayare López','Julia Sanchis','Altea Cuquerella','Nerea Llopis'],
    partits: generaCalendari(['CF Ontinyent F','CD Xàtiva F','SD Genovés F','Canals CF F','CF Montaverner F','Bocairent CF F','Aielo CF F','Barxeta CF F','Llutxent CF F','CD Gandia F','L\'Olleria CF F','Rotglà CF F'], true)
  },
  {
    id: 'juvenil', nom: 'JUVENIL', categoria: 'juvenil', edat: 'Sub-18/19 (2009-07)', format: 'Futbol 11', femeni: false, foto: 'IMAGEN EQUIPO.jpg',
    entrenadors: ['David'],
    jugadors: ['Marc Climent Moscardó','Iker Fernández Llorens','Julen Morillo Lopez','Guillermo Del Val Cuquerella','Pablo Vaya','Alex Monzó','Iker Catalá','Xavi Oltra','Eric Moscardó','Xavi Huguet','Guillem Genovés','Naim El Aaraj','Salva Monzó','Joel Estruch','Ismael Benali','Seguís Albero','Alan Ferrer','Sergi Margarit','Ianis Ionescu','Ilias Bensalem'],
    partits: generaCalendari(['CF Ontinyent B','CD Xàtiva B','Canals CF','SD Genovés','Bocairent CF','CF Montaverner','Barxeta CF','Llutxent CF','Aielo CF','CD Gandia B','L\'Olleria CF','Rotglà CF'], true)
  }
];

// ── HELPERS ─────────────────────────────────────────────────
function jerseyItemHTML(primary, secondary, label, uid) {
  return `<div class="kit-item">
    <svg viewBox="0 0 100 108" xmlns="http://www.w3.org/2000/svg" class="kit-svg">
      <defs>
        <clipPath id="jc-${uid}">
          <path d="M32,18 C28,18 10,34 8,40 L20,46 L20,96 L80,96 L80,46 L92,40 C90,34 72,18 68,18 C61,12 39,12 32,18Z"/>
        </clipPath>
      </defs>
      <path d="M32,18 C28,18 10,34 8,40 L20,46 L20,96 L80,96 L80,46 L92,40 C90,34 72,18 68,18 C61,12 39,12 32,18Z"
            fill="${primary}" stroke="${secondary}" stroke-width="1.5"/>
      <rect x="42" y="0" width="16" height="108" fill="${secondary}" clip-path="url(#jc-${uid})" opacity="0.7"/>
      <path d="M43,19 L50,31 L57,19" fill="${secondary}"/>
    </svg>
    <span class="kit-label">${label}</span>
  </div>`;
}

// ── RENDER CARDS ────────────────────────────────────────────
function renderTeams() {
  const grid   = document.getElementById('teamsGrid');
  const footer = document.getElementById('footerTeams');
  if (!grid) return;

  grid.innerHTML = equipos.map(eq => `
    <div class="team-card" onclick="openModal('${eq.id}')">
      <div class="team-card-top">
        ${eq.femeni ? '<span class="team-femeni-badge"><i class="fas fa-venus"></i></span>' : ''}
        <div class="team-category">${eq.nom}</div>
        <div class="team-format">${eq.format}</div>
      </div>
      ${eq.foto
        ? `<div class="team-photo-wrap"><img src="assets/${eq.foto}" alt="Foto ${eq.nom}" class="team-photo-img"></div>`
        : `<div class="team-photo-placeholder"><i class="fas fa-camera"></i><span>FOTO ${eq.nom}</span></div>`
      }
      <div class="team-card-body">
        <div class="team-age"><i class="fas fa-users"></i> ${eq.edat}</div>
        ${eq.jugadors ? `<div class="team-players-count"><i class="fas fa-list-ol"></i> ${eq.jugadors.length} jugadors</div>` : ''}
      </div>
      <div class="team-card-footer">
        <span>${eq.femeni ? 'Femení' : 'Masculí'}</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  `).join('');

  if (footer) {
    footer.innerHTML = equipos.map(eq =>
      `<li><a href="#equipos">${eq.nom}</a></li>`
    ).join('');
  }
}

// ── MODAL ──────────────────────────────────────────────────
function openModal(id) {
  const eq = equipos.find(e => e.id === id);
  if (!eq) return;

  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-cat">${eq.nom}</div>
    <div class="modal-meta">${eq.edat} · ${eq.format} · ${eq.femeni ? 'Femení' : 'Masculí'}</div>
  `;

  // Kits
  const kitsHTML = `
    <div class="modal-section modal-kits">
      <h4 class="modal-section-title"><i class="fas fa-tshirt"></i> Equipació</h4>
      <div class="kits-display">
        ${jerseyItemHTML('#FFFFFF', '#C8102E', 'Kit Local',    'loc-' + eq.id)}
        ${jerseyItemHTML('#003DA5', '#FFFFFF', 'Kit Visitant', 'vis-' + eq.id)}
      </div>
    </div>`;

  // Calendari 26/27 (sense resultats)
  const partitsHTML = eq.partits && eq.partits.length
    ? `<div class="modal-section">
        <h4 class="modal-section-title"><i class="fas fa-calendar-alt"></i> Calendari Temporada 26/27</h4>
        <div class="partits-list">
          ${eq.partits.map(p => `
            <div class="partit-row upcoming">
              <span class="partit-data">${p.d}</span>
              <span class="partit-lloc">${p.c ? '🏠' : '✈️'}</span>
              <span class="partit-rival">${p.r}</span>
              <span class="partit-resultat pendent">Pendent</span>
            </div>`).join('')}
        </div>
       </div>`
    : `<div class="modal-section">
        <h4 class="modal-section-title"><i class="fas fa-calendar-alt"></i> Calendari Temporada 26/27</h4>
        <p class="no-partits">Calendari disponible pròximament</p>
       </div>`;

  // Entrenadors
  const entrenadorHTML = eq.entrenadors && eq.entrenadors.length
    ? `<div class="modal-section">
        <h4 class="modal-section-title"><i class="fas fa-chalkboard-teacher"></i> Entrenador${eq.entrenadors.length > 1 ? 's' : ''}</h4>
        <ul class="modal-coaches-list">
          ${eq.entrenadors.map(e => `<li><i class="fas fa-id-badge"></i> ${e}</li>`).join('')}
        </ul>
       </div>`
    : '';

  // Jugadors
  const jugadorsHTML = eq.jugadors && eq.jugadors.length
    ? `<div class="modal-section">
        <h4 class="modal-section-title"><i class="fas fa-users"></i> Plantilla (${eq.jugadors.length} jugador${eq.jugadors.length !== 1 ? 's' : ''})</h4>
        <ol class="modal-players-list">
          ${eq.jugadors.map(j => `<li>${j}</li>`).join('')}
        </ol>
       </div>`
    : `<div class="modal-players-note"><i class="fas fa-users"></i><p>Plantilla disponible pròximament</p></div>`;

  document.getElementById('modalBody').innerHTML = kitsHTML + entrenadorHTML + jugadorsHTML + partitsHTML;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── MOBILE NAV ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ── NAVBAR SCROLL ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── STATS COUNTER ──────────────────────────────────────────
function animateCounter(el, target, duration) {
  const start  = Date.now();
  const isYear = target > 1000;
  const tick   = () => {
    const p = Math.min((Date.now() - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(isYear ? 1990 + (target - 1990) * e : e * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
      animateCounter(el, parseInt(el.dataset.target), 1800);
      delete el.dataset.target;
    });
  });
}, { threshold: 0.4 }).observe(document.querySelector('.stats-bar') || document.body);

// ── SCROLL ANIMATIONS ──────────────────────────────────────
function initScrollAnimations() {
  const groups = [
    { selector: '.section-header',       anim: 'anim-up'    },
    { selector: '.about-text',           anim: 'anim-left'  },
    { selector: '.about-image',          anim: 'anim-right' },
    { selector: '.value-item',           anim: 'anim-left',  stagger: true },
    { selector: '.facility-card',        anim: 'anim-up',    stagger: true },
    { selector: '.staff-card',           anim: 'anim-up',    stagger: true },
    { selector: '.contact-card',         anim: 'anim-up',    stagger: true },
    { selector: '.sponsor-item',         anim: 'anim-up',    stagger: true },
    { selector: '.join-content',         anim: 'anim-up'    },
    { selector: '#teamsGrid .team-card', anim: 'anim-scale', stagger: true },
    { selector: '.tienda-card',          anim: 'anim-up',    stagger: true },
  ];

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  groups.forEach(({ selector, anim, stagger }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('scroll-anim', anim);
      if (stagger) el.style.transitionDelay = (i % 4) * 0.08 + 's';
      obs.observe(el);
    });
  });

  document.querySelectorAll('.section-header').forEach(el => {
    const line = document.createElement('span');
    line.className = 'header-line';
    el.appendChild(line);
  });
}

// ── SMOOTH SCROLL ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTeams();
  setTimeout(initScrollAnimations, 60);
});
