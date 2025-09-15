
    const toastEl = document.getElementById('toast');
    function toast(msg, ms = 1600){
      if(!toastEl) return;
      toastEl.textContent = msg;
      toastEl.classList.add('toast--show');
      setTimeout(()=> toastEl.classList.remove('toast--show'), ms);
    }

 
    const projectsOverlay = document.getElementById('projectsOverlay');
    const btnProjects = document.getElementById('btnProjects');
    const btnBack = document.getElementById('btnBack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnContact = document.getElementById('btnContact');
    const contactOverlay = document.getElementById('contactOverlay');
    const btnContactBack = document.getElementById('btnContactBack');


    const imgEl = document.getElementById('projectImage');
    const nameEl = document.getElementById('projectName');
    const descEl = document.getElementById('projectDesc');
    const tagsEl = document.getElementById('projectTags');

    let projects = [];
    let index = 0;


    function showProjects(){
      projectsOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function hideProjects(){
      projectsOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function showContact(){
      contactOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function hideContact(){
      contactOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    btnContact.addEventListener('click', showContact);
    btnContactBack.addEventListener('click', hideContact);

    contactOverlay.addEventListener('click', (e) => {
      if (e.target === contactOverlay) hideContact();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && contactOverlay.classList.contains('active')) {
        hideContact();
      }
    });

    function renderProject(i, tween = true){
      const p = projects[i];
      if(!p) return;

      const media = imgEl.closest('.project-media');
      const info = nameEl.closest('.project-info');

      if(tween){
        media.classList.add('card-exit');
        info.classList.add('card-exit');
        const onEnd = () => {
          media.classList.remove('card-exit');
          info.classList.remove('card-exit');

          imgEl.src = p.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23f1e8ff"/%3E%3Ctext x="160" y="100" text-anchor="middle" font-family="Arial" font-size="16" fill="%23a875ff"%3EProject Preview%3C/text%3E%3C/svg%3E';
          imgEl.alt = p.name ? `Preview of ${p.name}` : 'Project preview';
          nameEl.textContent = p.name || 'Untitled Project';
          descEl.textContent = p.description || '';
          tagsEl.innerHTML = '';
          (p.tags || []).forEach(t=>{
            const li = document.createElement('li'); li.textContent = t; tagsEl.appendChild(li);
          });

          media.classList.add('card-enter');
          info.classList.add('card-enter');
          setTimeout(()=>{
            media.classList.remove('card-enter');
            info.classList.remove('card-enter');
          }, 420);
        };
        setTimeout(onEnd, 20);
      } else {
        imgEl.src = p.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23f1e8ff"/%3E%3Ctext x="160" y="100" text-anchor="middle" font-family="Arial" font-size="16" fill="%23a875ff"%3EProject Preview%3C/text%3E%3C/svg%3E';
        imgEl.alt = p.name ? `Preview of ${p.name}` : 'Project preview';
        nameEl.textContent = p.name || 'Untitled Project';
        descEl.textContent = p.description || '';
        tagsEl.innerHTML = '';
        (p.tags || []).forEach(t=>{
          const li = document.createElement('li'); li.textContent = t; tagsEl.appendChild(li);
        });
      }
    }

    btnProjects.addEventListener('click', showProjects);
    btnBack.addEventListener('click', hideProjects);


    projectsOverlay.addEventListener('click', (e) => {
      if (e.target === projectsOverlay) {
        hideProjects();
      }
    });

 
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectsOverlay.classList.contains('active')) {
        hideProjects();
      }
    });

    btnPrev.addEventListener('click', () => {
      index = (index - 1 + projects.length) % projects.length;
      renderProject(index, true);
    });

    btnNext.addEventListener('click', () => {
      index = (index + 1) % projects.length;
      renderProject(index, true);
    });

    btnContact.addEventListener('click', () => {
      toast('Contact coming soon 💌');
    });


    function loadProjects(){
      // Add project (backend)
      projects = [
        {
          name: "☆COMFORT (2021)",
          description: "He taught me that comfort doesn’t need to be loud. Sometimes, it arrives on soft paws and stays forever in memory.",
          image: "projects/comfort.jpg",
          tags: ["Cat", "Comfort", "Pet"]
        },

        {
          name: "☆CHROMATIC PAUSE",
          description: "Colors bleeding into the night, catching moments unseen. A simple station, yet a spectacle of light.",
          image: "projects/chromatic_pause.jpg",
          tags: ["Night", "Light", "Station"]
        },
        
        {
          name: "☆UNSCRIPTED ELEGANCE",
          description: "No suit, no stage, just a polo, a tie, and a quiet smile. Confidence doesn’t need perfection, only presence.",
          image: "projects/unscripted_elegance.jpg",
          tags: ["Confidence", "Perfection"]
        },

        {
          name: "☆THE QUITE MUSE",
          description: "In her eyes lived a quiet power, unsettling yet captivating. A stare that belongs on a canvas or a runway.",
          image: "projects/the_quite_muse.jpg",
          tags: ["Cat"]
        },

        {
          name: "☆CONFIDENCE IN A SUIT",
          description: "A classic look, carried with quiet strength",
          image: "projects/confidence_in_a_suit.jpg",
          tags: ["Confidence", 'Suit']
        }
      ];
      
      index = 0;
      renderProject(index, false);
    }

    


  document.addEventListener('DOMContentLoaded', loadProjects);
