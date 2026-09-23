const currentOperator = 'Смирнов А.С.';
const alarms = [
  {time:'11:04',number:'14933',name:'Магазин Север',address:'Краснодар, ул. Северная, 102',event:'Тревожная кнопка',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',elapsedSec:38,critical:true,note:'Позвонить ответственному лицу',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0402,38.9760'},
  {time:'11:00',number:'14919',name:'Кабинет разработчиков ПО ХБ Нева',address:'Краснодар, ул. Пашковская, 74, кабинет 306',event:'Датчик движения',status:'mine',statusLabel:'В РАБОТЕ',operator:'Смирнов А.С.',elapsedSec:282,critical:false,note:'При тревоге отвечаем и всё',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.032954,38.971944'},
  {time:'10:58',number:'12844',name:'Ритейл Плюс',address:'Краснодар, ул. Красная, 176',event:'Открытие двери',status:'gbr',statusLabel:'ГБР НАПРАВЛЕНА',operator:'Иванов И.И.',elapsedSec:375,critical:true,note:'Главный вход',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0448,38.9764'},
  {time:'10:52',number:'11307',name:'Склад Юг',address:'Краснодар, ул. Уральская, 97',event:'Пожарный шлейф',status:'work',statusLabel:'ЗВОНОК КЛИЕНТУ',operator:'Петров А.В.',elapsedSec:561,critical:true,note:'Проверить пожарный датчик',panel:'Краснодар',section:'Раздел 1',services:'Мониторинг ПС',coords:'45.0196,39.0432'},
  {time:'10:49',number:'10255',name:'Аптека Нева',address:'Краснодар, ул. Ставропольская, 205',event:'Снятие под принуждением',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',elapsedSec:723,critical:true,note:'Связаться с заведующей',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0187,39.0064'},
  {time:'10:31',number:'9921',name:'Бизнес-центр Олимп',address:'Краснодар, ул. Северная, 324',event:'Техническое событие',status:'complete',statusLabel:'ЗАВЕРШЕНА',operator:'Сидорова Е.С.',elapsedSec:1120,critical:false,note:'Событие закрыто',panel:'Краснодар',section:'Раздел 3',services:'Мониторинг ПС',coords:'45.0454,38.9891'},
  {time:'10:24',number:'14802',name:'ЖК Солнечный',address:'Краснодар, ул. Восточная, 18',event:'Датчик движения',status:'work',statusLabel:'В РАБОТЕ',operator:'Кузнецов Д.М.',elapsedSec:916,critical:false,note:'Квартира 42',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0550,39.0200'},
  {time:'10:18',number:'15677',name:'Офис Парус',address:'Краснодар, ул. Одесская, 48',event:'Открытие двери',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',elapsedSec:1045,critical:true,note:'Проверить вход',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0477,38.9877'},
  {time:'10:12',number:'12311',name:'Склад Запад',address:'Краснодар, ул. Калинина, 1',event:'Тревожная кнопка',status:'work',statusLabel:'В РАБОТЕ',operator:'Сидорова Е.С.',elapsedSec:1330,critical:true,note:'Задние ворота',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0520,38.9321'},
  {time:'09:55',number:'9775',name:'Производство 1',address:'Краснодар, ул. Дзержинского, 80',event:'Потеря связи',status:'gbr',statusLabel:'ГБР НАПРАВЛЕНА',operator:'Иванов И.И.',elapsedSec:1716,critical:true,note:'Проверить питание прибора',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.0762,38.9751'}
];
const gbrUnits = [
  {id:'ГБР-2',crew:'Ковалёв П.Н.',distance:'5,8 км',eta:'12 мин',role:'Основная ГБР',state:'Свободен',phone:'+78615550000'},
  {id:'ГБР-7',crew:'Мельников Р.С.',distance:'7,4 км',eta:'16 мин',role:'Резервная',state:'Свободен',phone:'+78615550007'},
  {id:'ГБР-4',crew:'Захаров Д.В.',distance:'11,2 км',eta:'24 мин',role:'Резервная',state:'На задании',phone:'+78615550004'}
];
let selected = alarms[1];
let filter = 'all';
let shiftMode = 'off';
let shiftStartedAt = null;
let history = [
  {tone:'red',time:'11:00:19',event:'Тревога принята оператором',operator:'Смирнов А.С.'},
  {tone:'gray',time:'11:00:05',event:'Сработала зона 1. Датчик движения',operator:'Система'},
  {tone:'gray',time:'10:58:12',event:'Взят под охрану',operator:'Система'},
  {tone:'gray',time:'08:03:21',event:'Снят с охраны',operator:'Система'},
  {tone:'gray',time:'08:00:00',event:'Плановое тестирование связи',operator:'Система'}
];
const $ = id => document.getElementById(id);
const statusClass = a => a.status === 'new' ? 'new' : a.status === 'complete' ? 'complete' : '';
const formatElapsed = seconds => {
  const h = Math.floor(seconds / 3600), m = Math.floor((seconds % 3600) / 60), s = seconds % 60;
  return h ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}` : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};
function sortedAlarms(list) {
  return [...list].sort((a,b) => {
    if (a.status === 'new' && b.status !== 'new') return -1;
    if (a.status !== 'new' && b.status === 'new') return 1;
    return b.elapsedSec - a.elapsedSec;
  });
}
function renderRows() {
  const q = $('alarmSearch').value.trim().toLowerCase();
  const rows = sortedAlarms(alarms.filter(a => filter === 'all' || (filter === 'new' && a.status === 'new') || (filter === 'mine' && a.operator === currentOperator)).filter(a => `${a.number} ${a.name} ${a.address} ${a.event}`.toLowerCase().includes(q)));
  $('alarmRows').innerHTML = rows.map(a => `<tr class="${a.status} ${a.number===selected.number?'selected':''}" data-number="${a.number}" tabindex="0"><td><strong>${a.time}</strong><small>${a.number}</small></td><td>${a.name}</td><td>${a.event}</td><td><span class="status ${statusClass(a)}">${a.statusLabel}</span></td><td>${a.operator}</td><td class="timer ${a.status==='new'&&a.elapsedSec>600?'critical':''}">${formatElapsed(a.elapsedSec)}</td></tr>`).join('');
  document.querySelectorAll('#alarmRows tr').forEach(row => { const choose = () => selectAlarm(row.dataset.number); row.addEventListener('click',choose); row.addEventListener('keydown',e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();choose();} }); });
}
function selectAlarm(number) { selected = alarms.find(a => a.number === number); renderRows(); renderDetail(); }
function mapUrl(a) { const [lat,lon] = a.coords.split(','); return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`; }
function renderDetail() {
  $('bannerNumber').textContent=selected.number; $('objectNumber').textContent=selected.number; $('footerNumber').textContent=selected.number;
  $('objectName').textContent=selected.name; $('objectAddress').textContent=selected.address; $('footerAddress').textContent=selected.address; $('objectNote').textContent=selected.note; $('objectPanel').textContent=selected.panel; $('objectSection').textContent=selected.section; $('objectServices').textContent=selected.services; $('elapsed').textContent=formatElapsed(selected.elapsedSec);
  $('acceptBtn').hidden=selected.status!=='new'; $('takeBtn').hidden=selected.status==='new'||selected.operator===currentOperator||selected.status==='complete'; $('finishBtn').hidden=selected.operator!==currentOperator;
  $('loopsBody').innerHTML=`<tr><td><span class="state-alarm">●</span> 1</td><td>Шлейф 1</td><td>${selected.event}</td><td class="state-alarm">ТРЕВОГА</td><td>${selected.time}:05</td></tr><tr><td><span class="state-ok">●</span> 2</td><td>Шлейф 2</td><td>Датчик открытия двери</td><td class="state-ok">Норма</td><td>—</td></tr><tr><td><span class="state-ok">●</span> 3</td><td>Шлейф 3</td><td>Тревожная кнопка</td><td class="state-ok">Норма</td><td>—</td></tr>`;
  $('photosObjectName').textContent=selected.name; $('mapObjectName').textContent=selected.name; $('mapCoords').textContent=selected.coords.replace(',',', '); $('mapAddress').textContent=selected.address; $('mapLabel').textContent=`Объект ${selected.number}`; $('externalMapLink').href=mapUrl(selected);
  renderGbr();
}
function renderGbr() {
  $('gbrList').innerHTML=gbrUnits.map((unit,index)=>`<article class="gbr-unit ${index===0?'primary':''}"><div class="gbr-unit-head"><div><span class="gbr-role">${unit.role}</span><b>▰ ${unit.id}</b></div><span class="crew-state ${unit.state==='Свободен'?'free':'busy'}">${unit.state}</span></div><div class="gbr-meta"><span>${unit.crew}</span><strong>${unit.distance}</strong><span>≈ ${unit.eta}</span></div><div class="gbr-actions"><button class="dispatch-gbr" data-unit="${unit.id}" ${unit.state!=='Свободен'?'disabled':''}>Отправить</button><a class="icon-button phone" href="tel:${unit.phone}" aria-label="Позвонить ${unit.id}">☎</a></div></article>`).join('');
  document.querySelectorAll('.dispatch-gbr').forEach(button=>button.addEventListener('click',()=>dispatchGbr(button.dataset.unit)));
}
function dispatchGbr(unitId) {
  selected.status='gbr'; selected.statusLabel='ГБР НАПРАВЛЕНА'; selected.operator=currentOperator;
  const unit=gbrUnits.find(item=>item.id===unitId); unit.state='Направлена'; addHistory(`${unitId} направлена на объект`); renderRows(); renderGbr(); toast(`${unitId} направлена на объект`);
}
function renderContacts(){const contacts=[['Иванов И.И.','Администратор','+79181234567','+7 (918) 123-45-67'],['Петров А.В.','Технический специалист','+79182345678','+7 (918) 234-56-78']];$('contactsList').innerHTML=contacts.map(c=>`<div class="contact"><span class="avatar">${c[0].split(' ').map(s=>s[0]).join('').slice(0,2)}</span><div><b>${c[0]}</b><span>${c[1]}</span><strong>${c[3]}</strong></div><a class="icon-button phone" href="tel:${c[2]}" aria-label="Позвонить ${c[0]}">☎</a></div>`).join('');}
function renderHistory(){$('historyBody').innerHTML=history.map(h=>`<tr><td class="${h.tone==='red'?'state-alarm':''}">●</td><td>${h.time}</td><td>${h.event}</td><td>${h.operator}</td></tr>`).join('');}
function addHistory(event){const now=new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit',second:'2-digit'});history.unshift({tone:'red',time:now,event,operator:currentOperator});renderHistory();}
let toastTimer; function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2200);}
function setShiftMode(mode){
  shiftMode=mode; const active=mode!=='off'; if(mode==='work'&&!shiftStartedAt)shiftStartedAt=new Date();
  $('startShiftBtn').hidden=active; $('endShiftBtn').hidden=!active; $('breakBtn').disabled=!active; $('lunchBtn').disabled=!active;
  $('breakBtn').classList.toggle('active',mode==='break'); $('lunchBtn').classList.toggle('active',mode==='lunch');
  const labels={off:'Смена не начата',work:'На смене',break:'Перерыв',lunch:'Обед'}; $('shiftStatus').textContent=labels[mode]; document.querySelector('.current-user small').textContent=active?labels[mode]:'Оператор'; toast(labels[mode]);
}
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;renderRows();}));
$('alarmSearch').addEventListener('input',renderRows);
$('operatorsTrigger').addEventListener('click',()=>{const open=$('operatorsMenu').hidden;$('operatorsMenu').hidden=!open;$('operatorsTrigger').setAttribute('aria-expanded',String(open));});
$('operatorSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('#operatorList li').forEach(li=>li.hidden=!li.dataset.name.includes(q));});
function setDrawer(open){$('mainMenu').hidden=!open;$('drawerBackdrop').hidden=!open;$('menuTrigger').setAttribute('aria-expanded',String(open));}
$('menuTrigger').addEventListener('click',()=>setDrawer($('mainMenu').hidden)); $('menuClose').addEventListener('click',()=>setDrawer(false)); $('drawerBackdrop').addEventListener('click',()=>setDrawer(false));
$('acceptBtn').addEventListener('click',()=>{selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory('Тревога принята в работу');renderRows();renderDetail();toast('Тревога принята в работу');});
$('takeBtn').addEventListener('click',()=>{const previous=selected.operator;selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory(`Тревога забрана у оператора ${previous}`);renderRows();renderDetail();toast('Тревога передана вам');});
$('finishBtn').addEventListener('click',()=>{selected.status='complete';selected.statusLabel='ЗАВЕРШЕНА';addHistory('Отработка тревоги завершена');renderRows();renderDetail();toast('Тревога завершена');});
$('startShiftBtn').addEventListener('click',()=>setShiftMode('work')); $('endShiftBtn').addEventListener('click',()=>{shiftStartedAt=null;setShiftMode('off');}); $('breakBtn').addEventListener('click',()=>setShiftMode(shiftMode==='break'?'work':'break')); $('lunchBtn').addEventListener('click',()=>setShiftMode(shiftMode==='lunch'?'work':'lunch'));
$('openPhotosBtn').addEventListener('click',()=>$('photosDialog').showModal()); $('mapButton').addEventListener('click',()=>{$('mapPanel').hidden=false;}); $('mapClose').addEventListener('click',()=>{$('mapPanel').hidden=true;});
$('allEventsBtn').addEventListener('click',()=>{$('eventsDialogBody').innerHTML=history.map(h=>`<p><b>${h.time}</b> — ${h.event} <small>${h.operator}</small></p>`).join('');$('eventsDialog').showModal();});
document.addEventListener('click',e=>{if(e.target.closest('a.phone'))toast('Открывается звонок');}); document.addEventListener('keydown',e=>{if(e.key==='Escape'){setDrawer(false);$('operatorsMenu').hidden=true;$('mapPanel').hidden=true;}});
setInterval(()=>{alarms.forEach(a=>{if(a.status!=='complete')a.elapsedSec+=1;});renderRows();$('elapsed').textContent=formatElapsed(selected.elapsedSec);$('clock').textContent=new Date().toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'});},1000);
renderRows();renderDetail();renderContacts();renderHistory();
