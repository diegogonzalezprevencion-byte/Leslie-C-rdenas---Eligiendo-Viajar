
const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });

function getDestinations(){ return window.DESTINATIONS || []; }
function destinationCard(d){
  return `<article class="card destination-card" data-zone="${d.zone}">
    <img src="assets/img/destinos/${d.id}.svg" alt="Imagen referencial de ${d.name}" loading="lazy">
    <div class="destination-body">
      <div class="pill-row"><span class="pill">${d.zone}</span><span class="pill">${d.duration}</span><span class="pill">${d.best}</span></div>
      <h3>${d.name}</h3>
      <p>${d.summary}</p>
      <ul class="clean">${d.sites.slice(0,4).map(s=>`<li>${s}</li>`).join('')}</ul>
      <div class="price-box">
        <div class="price"><span>Persona</span><strong>${CLP.format(d.pricePerson)}</strong></div>
        <div class="price"><span>Grupo</span><strong>${CLP.format(d.priceGroup)} c/u</strong></div>
      </div>
      <a class="btn btn-soft" href="cotizar.html?destino=${encodeURIComponent(d.id)}">Cotizar este viaje</a>
    </div>
  </article>`;
}
function renderDestinations(limit){
  const grid = document.querySelector('[data-destinations-grid]');
  if(!grid) return;
  const items = limit ? getDestinations().slice(0, limit) : getDestinations();
  grid.innerHTML = items.map(destinationCard).join('');
}
function setupFilters(){
  const filters = document.querySelectorAll('[data-filter]');
  const grid = document.querySelector('[data-destinations-grid]');
  if(!filters.length || !grid) return;
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    const filtered = value === 'Todos' ? getDestinations() : getDestinations().filter(d=>d.zone === value || (value === 'Sur' && d.zone.includes('Sur')) || (value === 'Patagonia' && d.zone.includes('Patagonia')));
    grid.innerHTML = filtered.map(destinationCard).join('');
  }));
}
function setupQuote(){
  const select = document.querySelector('#destino');
  const travelers = document.querySelector('#personas');
  const type = document.querySelector('#tipo');
  const output = document.querySelector('[data-quote-output]');
  const wsp = document.querySelector('[data-quote-wsp]');
  if(!select || !travelers || !type || !output) return;
  getDestinations().forEach(d=>{
    const opt = document.createElement('option'); opt.value=d.id; opt.textContent=`${d.name} · ${d.duration}`; select.appendChild(opt);
  });
  const params = new URLSearchParams(location.search); const preset = params.get('destino'); if(preset) select.value = preset;
  const update = ()=>{
    const d = getDestinations().find(x=>x.id===select.value) || getDestinations()[0];
    const n = Math.max(1, Number(travelers.value || 1));
    const unit = type.value === 'grupo' || n >= 4 ? d.priceGroup : d.pricePerson;
    const total = unit * n;
    output.innerHTML = `<p class="muted">Estimación referencial para</p><h3>${d.name}</h3><div class="total">${CLP.format(total)}</div><p class="muted">${n} viajero${n>1?'s':''} · ${CLP.format(unit)} por persona · ${d.duration}</p><ul class="clean" style="margin-top:18px">${d.includes.map(i=>`<li>${i}</li>`).join('')}</ul>`;
    if(wsp){
      const msg = `Hola, quiero cotizar el viaje ${d.name} para ${n} persona(s). Estimación referencial: ${CLP.format(total)}.`;
      wsp.href = `https://wa.me/56900000000?text=${encodeURIComponent(msg)}`;
    }
  };
  [select,travelers,type].forEach(el=>el.addEventListener('input',update)); update();
}
function setupYear(){document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());}
renderDestinations(document.body.dataset.page === 'home' ? 6 : undefined);
setupFilters(); setupQuote(); setupYear();
