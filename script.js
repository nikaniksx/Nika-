
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
          description: "This photo is very special to me. It’s one of my favorite captures of my cat, who passed away in 2024. This was taken before Christmas (around November 2021). I like the lighting in this picture because the warm glow reminds me of his comforting presence and the joy he gave me. I chose this photo because it keeps his memory alive in a simple but meaningful way.",
          image: "projects/comfort.jpg",
          tags: ["Cat", "Comfort", "Pet"]
        },

        {
          name: "☆CHROMATIC PAUSE",
          description: "I captured this gas station because the colors and light made an ordinary place feel cinematic. It reminded me how beauty can exist in the most unexpected corners.",
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
          description: "My cat’s gaze held a mysterious calm that I couldn’t look away from. Even in stillness, she carried a presence that felt both haunting and beautiful.",
          image: "projects/the_quite_muse.jpg",
          tags: ["Cat"]
        },

        {
          name: "☆CONFIDENCE IN A SUIT",
          description: "I photographed this moment because his smirk carried a mix of playfulness and quiet strength. The red and yellow glow behind him gave the portrait an unexpected edge.",
          image: "projects/confidence_in_a_suit.jpg",
          tags: ["Confidence", 'Suit']
        },

        {
          name: "☆LIGHTED GATHERING",
          description: "A glowing kubo at Plaza, open to everyone under its light. I captured it because even without walls, it felt like a home where people gather and share the night",
          image: "projects/lighted_gathering.jpg",
          tags: ['Kubo', 'Plaza', 'Night', 'Light']
        },

        {
          name: "☆MORNING WALK",
          description: "I captured this moment because the quiet trail showed the beauty of starting the day in motion. The person walking added life to the stillness of the scene.",
          image: "projects/morning_walk.jpg",
          tags: ['Scenery', 'Trails']
        },

        {
          name: "☆PERSPECTIVE",
          description: "I captured this because I liked how the frame felt unplanned yet intentional. Sometimes random angles tell the most honest stories.",
          image: "projects/perspective.jpg",
          tags: ["Perspective", "Stories"]
        },

        {
          name: "☆LINES AND LIGHTS",
          description: "I captured this scene because the clean architecture and sharp lines stood out against the soft daylight. It felt like a balance between structure and calm",
          image: "projects/lines_and_light.jpg",
          tags: ["Lines", "Architecture", "Structure"]
        },

        {
          name: "☆SCENES OF DAILY LIFE",
          description: "I took this picture because it shows the ordinary view I often see, but rarely pay attention to. It reminds me that even simple moments in familiar places are worth noticing.",
          image: "projects/scenes_of_daily_life.jpg",
          tags: ["View", "Scene"]
        },

        {
          name: "☆WHISPER OF THE HILLS",
          description: "I captured this because the bright green felt calming, like the trees were wrapping me in quiet. It made me pause and appreciate how refreshing nature can be.",
          image: "projects/whispers_of_the_hills.jpg",
          tags: ["Hill", "Nature"]
        },

      ];
      
      index = 0;
      renderProject(index, false);
    }

    

  document.addEventListener('DOMContentLoaded', loadProjects);
