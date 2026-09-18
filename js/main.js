/* ═══════════════ DATA ═══════════════ */
const PAGES = [
  ['home','Home','Start here'],
  ['about','About','Who I am, what I study and how I work'],
  ['experience','Experience','Roles at Helwan University, iSchool and Telecom Egypt'],
  ['projects','Projects','Seven builds across ML, vision, backend and automation'],
  ['achievements','Achievements','Awards, rank and certifications'],
  ['moments','Moments','Competitions, classrooms and demos'],
  ['skills','Skills','Tools and technologies I work with'],
  ['contact','Contact','Email, phone and a message form']
];

const EXPERIENCE = [
  {when:'Jul 2026 – Present', role:'Lead Coding Instructor', org:'iSchool | DEMI & DECI Offline Program (MCIT)', pts:[
    'Instructs <strong>300+ students daily</strong> across 4+ coding sessions in programming and computational thinking.',
    'Manages classrooms of 25–30 students per session with high engagement.',
    'Delivers one-on-one mentoring, code reviews and drives project completion.']},
  {when:'Oct 2025 – Present', role:'Backend & AI Developer', org:'Digital Transformation Center, Helwan University', pts:[
    'Builds and maintains production websites for Helwan University, Helwan National University and Helwan Technological University.',
    'Architects scalable web applications with <strong>Next.js, TypeScript, PostgreSQL and Prisma</strong>.',
    'Develops AI features including <strong>intelligent search and bilingual (Arabic / English)</strong> interfaces.']},
  {when:'Jan 2024 – Feb 2024', role:'AI Training Intern', org:'Telecom Egypt (WE)', pts:[
    'Enhanced AI models for object detection, segmentation and classification.',
    'Raised object tracking accuracy from <strong>80% to 93%</strong> by fine-tuning YOLOv8.',
    'Optimised ML/DL pipelines with TensorFlow for real-time performance.']},
  {when:'Expected 2027', role:'B.Sc. Intelligent Systems Engineering', org:'Helwan National University, Cairo', pts:[
    'Ranked <strong>#1</strong> in the programme with a cumulative GPA of <strong>3.79 / 4.0</strong>.']}
];

const CATS = {all:'All', ml:'AI & ML', cv:'Computer vision', web:'Web & backend', auto:'Automation'};
const PROJECTS = [
  {id:'land', cat:'cv', feature:true, type:'DEPI graduation project · Team lead', title:'Land classification remote sensing pipeline',
   short:'Led a 4-person team building an end-to-end land classification system from satellite imagery — data collection, EDA, NDVI/RGB/NIR modelling and a live demo.',
   tags:['Remote sensing','NDVI','Scikit-learn','Rasterio','Pandas'],
   stats:[['4','Team members led'],['3','Classification models'],['Live','Demo deployed']],
   points:['Collected and explored satellite imagery before modelling.','Modelled land classes from NDVI, RGB and NIR bands.','Deployed a live demo of the final system.'],
   link:['https://github.com/MohamedELHalmoushy/DEPI-Graduation-Project','View code on GitHub']},
  {id:'cyber', cat:'ml', type:'Multi-agent AI · Cybersecurity', title:'Attack If You Can — cyber defence system',
   short:'A collaborative four-agent defence: intrusion detection, anomaly detection, NLP log analysis and a response agent joined by a custom risk fusion engine.',
   tags:['XGBoost','DistilBERT','Isolation Forest','NLP'],
   points:['IDS agent built on XGBoost.','Anomaly detection agent using Isolation Forest.','Log analysis agent using DistilBERT.','Response agent plus a custom Risk Fusion Engine combining the agents\' signals.'],
   link:['https://github.com/MohamedELHalmoushy/Attack-me-if-you-can','View code on GitHub']},
  {id:'filtere', cat:'cv', type:'Deep learning · GANs', title:'Filtere — real face to anime',
   short:'An AnimeGANv2 pipeline converting real photos to anime in Hayao, Paprika and Shinkai styles.',
   tags:['AnimeGANv2','GANs','OpenCV','PyTorch'],
   points:['Trained on CelebA and AnimeFace datasets.','Images normalised to 256×256 for stable adversarial training.','Three art styles: Hayao, Paprika and Shinkai.'],
   link:['https://github.com/MohamedELHalmoushy/Computer-Vision_NTI_Digital-Egypt-Youth-Initiative','View code on GitHub']},
  {id:'tahrir', cat:'cv', type:'Computer vision · Traffic AI', title:'Tahrir Square traffic analytics',
   short:'A YOLOv8 system that detects, segments and counts vehicles in live video footage.',
   tags:['YOLOv8','OpenCV','Video analytics'],
   points:['Counts 200+ cars per minute at 90% accuracy.','Cut false positives by 20%.','Detection, segmentation and counting on live video.']},
  {id:'aang', cat:'ml', type:'Hackathon · 2nd place', title:'Aang — AI avatar for kids',
   short:'An AI avatar that teaches children AI concepts through interactive cartoons with real-time voice and chat.',
   tags:['TTS / STT','Conversational AI','Animation'],
   points:['Real-time text-to-speech and speech-to-text.','Interactive cartoon lessons on AI concepts.','Placed 2nd among 36 universities at Helwan Cyber Arena.']},
  {id:'onco', cat:'auto', type:'Automation · Healthcare', title:'OncoEgypt — cancer monitoring',
   short:'Automated patient monitoring with real-time WhatsApp follow-up, deployed for a real oncology researcher.',
   tags:['n8n','WhatsApp API','Apps Script'],
   points:['n8n workflows with WhatsApp real-time follow-up.','Google Sheets data management.','Google Apps Script automation.'],
   link:['https://www.facebook.com/OncoEgypt/','Visit OncoEgypt']},
  {id:'helwan', cat:'web', type:'Production web · Helwan University', title:'Helwan university platforms',
   short:'Production websites for three universities, with intelligent search and bilingual Arabic / English interfaces.',
   tags:['Next.js','TypeScript','PostgreSQL','Prisma'],
   points:['Helwan University, Helwan National University and Helwan Technological University.','Scalable architecture with Next.js, TypeScript, PostgreSQL and Prisma.','Intelligent search and bilingual interfaces.']}
];

const ACH = [
  ['2nd','Helwan Cyber Arena','Placed 2nd among 36 universities in the Cyshield and EG-CERT national AI hackathon with the Aang AI avatar.'],
  ['#1','Class rank','First-ranked in Intelligent Systems Engineering at Helwan National University with a 3.79 / 4.0 GPA.'],
  ['98%','HCIA-AI score','987 / 1000 on Huawei\'s HCIA Artificial Intelligence certification through the Egyptian Talents Academy programme.'],
  ['300+','Students led','Daily lead instructor across 4+ sessions in iSchool\'s national MCIT coding initiative.'],
  ['3','University platforms','Built and maintains production websites for Helwan University, Helwan National University and Helwan Technological University.'],
  ['93%','Model accuracy','Raised YOLOv8 object tracking accuracy from 80% to 93% during the Telecom Egypt AI internship.']
];

const CERTS = [
  ['NTI / Huawei ETA','Artificial Intelligence (HCIA-AI)','Score: 98% · 987/1000'],
  ['NTI Digital Egypt Youth','Deep Learning for Computer Vision','Score: 98%'],
  ['IBM & Coursera','Intro to Deep Learning & Neural Networks with Keras',''],
  ['IBM & Coursera','Machine Learning with Python',''],
  ['Microsoft / DEPI','Microsoft Machine Learning Engineer','DEPI programme'],
  ['NTI','Internet of Things (IoT) Applications',''],
  ['ITI','IoT Applications Development',''],
  ['AWS Training Center','AWS Managed Services & Cloud Operating Models',''],
  ['Innov Egypt (ITIDA)','Design Thinking & Entrepreneurship','']
];

const MOMENTS = [
  {type:'Competition',title:'Helwan Cyber Arena',description:'2nd place among 36 universities with Aang',initial:'A',colors:['#B3261E','#2b0808'],ratio:'4/5',images:['assets/Hackathon_1.jpg']},
  {type:'Recognition',title:'Capital University leadership visit',description:'Honoring the President of Capital University, Dr. Sayed Kandeel, and the Dean of the Faculty of Engineering at Capital University, Dr. Mahmoud El-Mallawey.',initial:'C',colors:['#9B1B1B','#210a0a'],ratio:'4/3',images:['assets/PRESIDENT.png','assets/HNU_OFFECIAL WEB SITE.png']},
  {type:'Teaching',title:'DECI classroom',description:'Leading the DECI coding programme for young learners.',initial:'D',colors:['#7a1212','#1b0b0b'],ratio:'4/3',images:['assets/Deci_1.jpeg','assets/Deci_2.jpeg','assets/Deci_3.jpeg']},
  {type:'Teaching',title:'DEMI classroom',description:'Leading the DEMI coding programme and mentoring students.',initial:'M',colors:['#8e1c1c','#180909'],ratio:'4/3',images:['assets/DEMI_1.jpeg','assets/DEMI_2.jpeg','assets/DEMI_3.jpeg','assets/DEMI_4.jpg','assets/DEMI_5.jpg','assets/DEMI_6.jpg','assets/DEMI_7.jpeg','assets/DEMI_8.jpeg']},
  {type:'Internship',title:'Telecom Egypt (WE)',description:'YOLOv8 fine-tuning, 80% to 93% accuracy.',initial:'T',colors:['#9B1B1B','#210a0a'],ratio:'1/1',images:['assets/we_training.jpg']},
  {type:'Work',title:'Digital Transformation Center',description:'Building three university platforms.',initial:'W',colors:['#8e1c1c','#180909'],ratio:'4/5',images:['assets/HNU_OFFECIAL WEB SITE.png']}
];

const SKILLS = {
  'Machine learning & AI':['TensorFlow','Scikit-learn','XGBoost','Isolation Forest','Transfer Learning','GANs / AnimeGANv2','Hyperparameter tuning'],
  'Computer vision & NLP':['YOLOv8','OpenCV','SSD','Mask R-CNN','DistilBERT','Text classification','Image segmentation'],
  'Backend & web':['Next.js','TypeScript','PostgreSQL','Prisma','FastAPI','Flask','RESTful APIs','Bilingual UI'],
  'Languages & tools':['Python','C++','JavaScript','Java','SQL','MATLAB','Git / GitHub','n8n','Power BI','Hugging Face','Kaggle','AWS']
};

/* ═══════════════ RENDER ═══════════════ */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];

$('#dir').innerHTML = PAGES.filter(p=>p[0]!=='home').map(p=>`<a class="panel" href="#/${p[0]}"><b>${p[1]}</b><span>${p[2]}</span></a>`).join('');

$('#timeline').innerHTML = EXPERIENCE.map(e=>`<article class="tl panel"><div class="when">${e.when}</div><h4>${e.role}</h4><div class="org">${e.org}</div><ul>${e.pts.map(p=>`<li>${p}</li>`).join('')}</ul></article>`).join('');

let curCat='all';
function renderFilters(){
  $('#filters').innerHTML = Object.entries(CATS).map(([k,v])=>`<button type="button" class="chip ${k===curCat?'on':''}" data-cat="${k}">${v}</button>`).join('');
  $$('#filters .chip').forEach(b=>b.onclick=()=>{curCat=b.dataset.cat;renderFilters();renderProjects();});
}
function renderProjects(){
  const list = PROJECTS.filter(p=>curCat==='all'||p.cat===curCat);
  $('#projGrid').innerHTML = list.map(p=>{
    const tags = `<div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
    if(p.feature && curCat==='all'){
      return `<button type="button" class="card panel feature" data-id="${p.id}"><div class="fl"><div class="type">${p.type}</div><h4>${p.title}</h4><p>${p.short}</p>${tags}<span class="more">View details</span></div><div class="fr">${p.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></button>`;
    }
    return `<button type="button" class="card panel" data-id="${p.id}"><div class="type">${p.type}</div><h4>${p.title}</h4><p>${p.short}</p>${tags}<span class="more">View details</span></button>`;
  }).join('') || '<p class="lead">No projects in this category yet.</p>';
  $$('#projGrid .card').forEach(c=>c.onclick=()=>openProject(c.dataset.id));
}
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id);
  $('#sheet').innerHTML = `<button class="x" type="button" aria-label="Close" id="mx">✕</button><div class="type" style="color:var(--red);font-size:.8rem;font-weight:600">${p.type}</div><h4>${p.title}</h4><p>${p.short}</p><ul>${p.points.map(x=>`<li>${x}</li>`).join('')}</ul><div class="tags" style="margin-bottom:22px">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>${p.link?`<a class="btn" href="${p.link[0]}" target="_blank" rel="noopener">${p.link[1]}</a>`:''}`;
  $('#modal').classList.add('open');
  $('#mx').onclick=closeModal; $('#mx').focus();
}
function closeModal(){ $('#modal').classList.remove('open'); }
$('#modal').addEventListener('click',e=>{ if(e.target.id==='modal') closeModal(); });

$('#ach').innerHTML = ACH.map(a=>`<div class="a panel"><b>${a[0]}</b><h4>${a[1]}</h4><p>${a[2]}</p></div>`).join('');
$('#certs').innerHTML = CERTS.map(c=>`<div class="cert panel"><small>${c[0]}</small><b>${c[1]}</b>${c[2]?`<span>${c[2]}</span>`:''}</div>`).join('');

$('#moments').innerHTML = MOMENTS.map((m,i)=>`<figure class="moment" data-i="${i}" style="--r:${m.ratio};--h1:${m.colors[0]};--h2:${m.colors[1]}"><div class="art${m.images.length===1?' single-image':''}">${m.images.length?m.images.map(src=>`<img src="${src}" alt="${m.title}"/>`).join(''):`<i>${m.initial}</i>`}</div><figcaption class="cap"><small>${m.type}</small><b>${m.title}</b><span>${m.description}</span></figcaption></figure>`).join('');
$$('.moment .art').forEach(art=>art.onclick=()=>{ const images=art.querySelectorAll('img'); if(images.length){ $('#lbImg').src=images[0].src; $('#lightbox').classList.add('open'); } });
$('#lightbox').onclick=()=>$('#lightbox').classList.remove('open');

$('#skills').innerHTML = Object.entries(SKILLS).map(([k,v])=>`<div class="sg panel"><h4>${k}</h4><div class="pills">${v.map(s=>`<span>${s}</span>`).join('')}</div></div>`).join('');

/* contact form → mailto */
$('#cform').addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#fn').value.trim(), em=$('#fe').value.trim(), s=$('#fs').value.trim(), m=$('#fm').value.trim();
  const body = encodeURIComponent(m+'\n\n— '+n+' ('+em+')');
  window.location.href = 'mailto:mohamedaymanelhalmoushy@gmail.com?subject='+encodeURIComponent(s)+'&body='+body;
  $('#fstatus').textContent = 'Your email app should open with the message ready to send.';
});

/* ═══════════════ ROUTER / UI ═══════════════ */
const ROUTES = PAGES.map(p=>p[0]);
function route(){
  let r = (location.hash.replace(/^#\/?/,'')||'home').split('/')[0];
  if(!ROUTES.includes(r)) r='home';
  $$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+r));
  $$('[data-route]').forEach(a=>{ if(a.dataset.route===r) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  const t=$('#page-'+r).dataset.title;
  document.title = (r==='home'?'':t+' | ')+'Mohamed Ayman El-Halmoushy';
  window.scrollTo({top:0,left:0,behavior:'instant'});
  closeDrawer();
  if(window.__turtleRoute) window.__turtleRoute(r);
}
window.addEventListener('hashchange',route);

const nav=$('#nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>30),{passive:true});
function openDrawer(){ $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
$('#burger').onclick=openDrawer; $('#drawerClose').onclick=closeDrawer;
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){closeDrawer();closeModal();$('#lightbox').classList.remove('open');} });

/* theme */
const root=document.documentElement, themeBtn=$('#themeBtn');
function isLight(){
  const t=root.getAttribute('data-theme');
  if(t==='light') return true; if(t==='dark') return false;
  return window.matchMedia('(prefers-color-scheme: light)').matches;
}
function syncThemeBtn(){ themeBtn.textContent = isLight()?'Dark mode':'Light mode'; }
themeBtn.onclick=()=>{ root.setAttribute('data-theme', isLight()?'dark':'light'); syncThemeBtn(); };
syncThemeBtn();

renderFilters(); renderProjects();

/* ═══════════════ TURTLE ═══════════════ */
(function(){
  const canvas=$('#turtle-canvas');
  if(typeof THREE==='undefined'){ return; }
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try{ renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true}); }catch(e){ return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.outputEncoding=THREE.sRGBEncoding;

  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(35,1,.1,100);
  camera.position.set(0,2.8,4.8); camera.lookAt(0,2.8,0);

  scene.add(new THREE.AmbientLight(0xffffff,.75));
  const key=new THREE.DirectionalLight(0xfff1ea,2.2); key.position.set(3,9,5); scene.add(key);
  const rim=new THREE.PointLight(0xff3b30,1.6,20); rim.position.set(-4,4,-3); scene.add(rim);
  const fill=new THREE.DirectionalLight(0xcfe4ff,.7); fill.position.set(-4,3,2); scene.add(fill);

  /* ── procedural turtle ── */
  function buildTurtle(){
    const g=new THREE.Group(), body=new THREE.Group(); g.add(body);
    const shellMat=new THREE.MeshStandardMaterial({color:0xB3261E,roughness:.5,metalness:.15,flatShading:true});
    const skinMat=new THREE.MeshStandardMaterial({color:0x3b2c2c,roughness:.8});
    const bellyMat=new THREE.MeshStandardMaterial({color:0xd8b48a,roughness:.9});
    const shell=new THREE.Mesh(new THREE.SphereGeometry(1,14,10),shellMat);
    shell.scale.set(.95,.5,1.2); shell.position.y=.3; body.add(shell);
    const scutes=new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(1.012,7,5)),new THREE.LineBasicMaterial({color:0x2a0606,transparent:true,opacity:.75}));
    scutes.scale.copy(shell.scale); scutes.position.copy(shell.position); body.add(scutes);
    const belly=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),bellyMat); belly.scale.set(.85,.2,1.1); belly.position.y=.08; body.add(belly);
    const headPivot=new THREE.Group(); headPivot.position.set(0,.22,1.05); body.add(headPivot);
    const neck=new THREE.Mesh(new THREE.SphereGeometry(.26,10,8),skinMat); neck.scale.set(1,.85,1.4); neck.position.z=.12; headPivot.add(neck);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.34,12,10),skinMat); head.scale.set(.95,.8,1.15); head.position.set(0,.02,.5); headPivot.add(head);
    const eyeMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.3}), pupMat=new THREE.MeshBasicMaterial({color:0x000000});
    [-1,1].forEach(s=>{
      const e=new THREE.Mesh(new THREE.SphereGeometry(.07,8,6),eyeMat); e.position.set(s*.2,.12,.68); headPivot.add(e);
      const p=new THREE.Mesh(new THREE.SphereGeometry(.036,6,6),pupMat); p.position.set(s*.23,.13,.73); headPivot.add(p);
    });
    function flipper(x,z,len,wid,side){
      const piv=new THREE.Group(); piv.position.set(x,.2,z); body.add(piv);
      const m=new THREE.Mesh(new THREE.SphereGeometry(1,10,8),skinMat); m.scale.set(len,.08,wid); m.position.x=side*len*.9; piv.add(m);
      return piv;
    }
    const fl=flipper(-.8,.55,.75,.3,-1), fr=flipper(.8,.55,.75,.3,1);
    const rl=flipper(-.6,-.85,.42,.2,-1), rr=flipper(.6,-.85,.42,.2,1);
    const tail=new THREE.Mesh(new THREE.ConeGeometry(.12,.45,6),skinMat); tail.rotation.x=-Math.PI/2; tail.position.set(0,.14,-1.4); body.add(tail);
    return {g,body,headPivot,fl,fr,rl,rr};
  }

  const actor=new THREE.Group(); scene.add(actor);
  const turtle=buildTurtle(); actor.add(turtle.g);
  let custom=null;   // {root}
  const modelFacingOffset=0;

  /* soft shadow + ripples */
  function radialTex(){
    const c=document.createElement('canvas'); c.width=c.height=128; const x=c.getContext('2d');
    const gr=x.createRadialGradient(64,64,4,64,64,62); gr.addColorStop(0,'rgba(0,0,0,.55)'); gr.addColorStop(1,'rgba(0,0,0,0)');
    x.fillStyle=gr; x.fillRect(0,0,128,128); return new THREE.CanvasTexture(c);
  }
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(4.4,5.4),new THREE.MeshBasicMaterial({map:radialTex(),transparent:true,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2; shadow.position.set(.15,-.05,.15); actor.add(shadow);

  const ripples=[]; const ringGeo=new THREE.RingGeometry(.92,1,40);
  for(let i=0;i<9;i++){
    const m=new THREE.Mesh(ringGeo,new THREE.MeshBasicMaterial({color:0xff5a4d,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}));
    m.rotation.x=-Math.PI/2; m.position.y=-.06; m.visible=false; scene.add(m); ripples.push({m,life:0});
  }
  let rippleT=0, rIdx=0;
  function spawnRipple(x,z){
    const r=ripples[rIdx++%ripples.length]; r.life=1; r.m.position.set(x,-.06,z); r.m.visible=true;
  }

  /* ── screen ↔ world ── */
  const ray=new THREE.Raycaster(), plane=new THREE.Plane(new THREE.Vector3(0,1,0),0), tmp=new THREE.Vector3();
  function toWorld(nx,ny){ ray.setFromCamera(new THREE.Vector2(nx*2-1,-(ny*2-1)),camera); ray.ray.intersectPlane(plane,tmp); return {x:tmp.x,z:tmp.z}; }
  let baseScale=.6;
  function resize(){
    const w=innerWidth,h=innerHeight;
    renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix();
    baseScale=.6*Math.min(1,Math.max(.55,Math.min(w,h)/900));
    actor.scale.setScalar(baseScale);
  }
  resize(); addEventListener('resize',resize);

  /* ── behaviour state ── */
  const S={x:0,z:0,vx:0,vz:0,h:0,turn:0,phase:0,wpT:0,wx:0,wz:0,mx:0,mz:0,mT:-99,mouseX:0,mouseZ:0,mouseYaw:0,mouseT:-99,boost:0,bias:[.08,.92]};
  const start=toWorld(.75,.5); S.x=start.x; S.z=start.z; S.wx=S.x; S.wz=S.z;
  const maxCruise=reduce?.9:2.6, maxDash=reduce?1.6:6.5;
  const angDiff=(a,b)=>{let d=b-a; while(d>Math.PI)d-=2*Math.PI; while(d<-Math.PI)d+=2*Math.PI; return d;};
  function pickWaypoint(){
    const nx=S.bias[0]+Math.random()*(S.bias[1]-S.bias[0]), ny=.12+Math.random()*.76;
    const w=toWorld(nx,ny); S.wx=w.x; S.wz=w.z;
  }
  window.__turtleRoute=function(r){
    canvas.style.display=r==='home'?'block':'none';
    S.bias = r==='home'?[.5,.95]:[.06,.94]; S.wpT=0;
  };
  addEventListener('mousemove',e=>{ const w=toWorld(e.clientX/innerWidth,e.clientY/innerHeight); S.mx=w.x; S.mz=w.z; S.mouseX=w.x; S.mouseZ=w.z; S.mouseYaw=(e.clientX/innerWidth-.5)*Math.PI; S.mT=clock.getElapsedTime(); S.mouseT=S.mT; },{passive:true});
  addEventListener('touchstart',e=>{ const t=e.touches[0]; const w=toWorld(t.clientX/innerWidth,t.clientY/innerHeight); S.mx=w.x; S.mz=w.z; S.mT=clock.getElapsedTime(); S.boost=S.mT+1.2; },{passive:true});
  addEventListener('click',e=>{
    if(e.target.closest('a,button,input,textarea,label,.card,.moment,.portrait,#modal,#drawer')) return;
    const w=toWorld(e.clientX/innerWidth,e.clientY/innerHeight); S.mx=w.x; S.mz=w.z; S.mT=clock.getElapsedTime(); S.boost=S.mT+1.2;
  });

  const clock=new THREE.Clock();
  function step(dt,t){
    let tx,tz,follow=false;
    if(t-S.mT<2.6){ tx=S.mx; tz=S.mz; follow=true; }
    else { if(t>S.wpT){ pickWaypoint(); S.wpT=t+4+Math.random()*3; } tx=S.wx; tz=S.wz; }
    const dx=tx-S.x, dz=tz-S.z, d=Math.hypot(dx,dz);
    const cap = t<S.boost?maxDash:maxCruise;
    let want=Math.min(cap,d*1.15);
    if(follow && d<1.6 && t>=S.boost) want=Math.min(want,.35);
    if(d<.25) want=0;
    const ux=d>.001?dx/d:0, uz=d>.001?dz/d:0;
    let sp=0;
    if(custom){
      S.vx=0; S.vz=0; S.turn=0;
    } else {
      const k=Math.min(1,dt*1.9);
      S.vx+=(ux*want-S.vx)*k; S.vz+=(uz*want-S.vz)*k;
      sp=Math.hypot(S.vx,S.vz);
      if(sp>.12){ const th=Math.atan2(S.vx,S.vz), df=angDiff(S.h,th); S.turn+=(df-S.turn)*Math.min(1,dt*6); S.h+=df*Math.min(1,dt*3.2); }
      else S.turn*=.9;
      S.x+=S.vx*dt; S.z+=S.vz*dt;
    }
    actor.position.set(S.x,0,S.z); actor.rotation.y=custom?0:S.h;
    S.phase+=dt*(1.3+sp*2.4);

    if(!custom){
      const T=turtle, a=Math.sin(S.phase), c=Math.cos(S.phase), amp=.28+Math.min(sp,3)*.14;
      T.fl.rotation.z=-a*amp*1.6; T.fr.rotation.z=a*amp*1.6;
      T.fl.rotation.y=c*amp*.9;   T.fr.rotation.y=-c*amp*.9;
      T.rl.rotation.z=a*amp*.9;   T.rr.rotation.z=-a*amp*.9;
      T.headPivot.rotation.y+=(Math.max(-.5,Math.min(.5,S.turn*.9))-T.headPivot.rotation.y)*Math.min(1,dt*5);
      T.headPivot.rotation.x=Math.sin(S.phase*.5)*.06;
      T.body.position.y=Math.sin(t*1.6)*.05+Math.abs(a)*.02*sp;
      T.body.rotation.z=-S.turn*.22;
      T.body.rotation.x=Math.sin(S.phase)*.02*sp;
    } else {
      custom.root.rotation.y=S.mouseYaw;
    }

    if(!reduce){
      rippleT-=dt;
      if(sp>.5 && rippleT<=0){ spawnRipple(S.x-Math.sin(S.h)*.5,S.z-Math.cos(S.h)*.5); rippleT=Math.max(.16,.6-sp*.12); }
    }
    ripples.forEach(r=>{
      if(r.life>0){ r.life-=dt*.55; const p=1-Math.max(r.life,0); r.m.scale.setScalar(.35+p*2.6*baseScale*1.6); r.m.material.opacity=Math.max(r.life,0)*.32; if(r.life<=0) r.m.visible=false; }
    });
  }
  function loop(){ requestAnimationFrame(loop); const dt=Math.min(clock.getDelta(),.05), t=clock.elapsedTime; step(dt,t); renderer.render(scene,camera); }
  loop();

  /* ── bring-your-own GLB ── */
  function clearCustom(){
    if(custom){ actor.remove(custom.root); custom=null; }
    turtle.g.visible=true;
  }
  function applyGLB(gltf){
    clearCustom();
    const m=gltf.scene, box=new THREE.Box3().setFromObject(m), size=box.getSize(new THREE.Vector3()), c=box.getCenter(new THREE.Vector3());
    const s=6/Math.max(size.x,size.y,size.z,.0001);
    const holder=new THREE.Group(); m.scale.setScalar(s); m.position.set(-c.x*s,-box.min.y*s+.05,-c.z*s); holder.add(m);
    const wrap=new THREE.Group(); wrap.add(holder);
    const bones={};
    m.traverse(o=>{ if(o.isBone) bones[o.name.toLowerCase()]=o; });
    const bone=(name)=>bones[name.toLowerCase()];
    const leftArm=bone('leftarm'), rightArm=bone('rightarm');
    const leftForeArm=bone('leftforearm'), rightForeArm=bone('rightforearm');
    if(leftArm) leftArm.rotation.x=1.2;
    if(rightArm) rightArm.rotation.x=1.2;
    if(leftForeArm) leftForeArm.rotation.z=0;
    if(rightForeArm) rightForeArm.rotation.z=0;
    holder.position.set(0,.45,.85);
    m.traverse(o=>{ if(o.isMesh && o.material){ o.frustumCulled=false; } });
    S.x=innerWidth<700?0:2.1; S.z=.55; S.vx=0; S.vz=0; actor.position.set(S.x,0,S.z);
    wrap.rotation.y=modelFacingOffset;
    custom={root:wrap}; actor.add(wrap); turtle.g.visible=false;
    
  }

  /* If assets/model.glb exists (e.g. on GitHub Pages), use it automatically */
  if(THREE.GLTFLoader && location.protocol!=='file:'){
    fetch('assets/model.glb?v='+Date.now())
      .then(r=>r.ok?r.arrayBuffer():Promise.reject())
      .then(b=>new THREE.GLTFLoader().parse(b,'',applyGLB,()=>{}))
      .catch(()=>{});
  }
})();

route();
