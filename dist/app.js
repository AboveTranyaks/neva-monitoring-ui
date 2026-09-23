const currentOperator = 'Смирнов А.С.';
const alarms = [
  {time:'11:04',number:'14933',name:'Магазин Север',address:'Краснодар, ул. Северная, 102',event:'Тревожная кнопка',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',timer:'00:38',critical:true,note:'Позвонить ответственному лицу',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0402,38.9760'},
  {time:'11:00',number:'14919',name:'Кабинет разработчиков ПО ХБ Нева',address:'Краснодар, ул. Пашковская, 74, кабинет 306',event:'Датчик движения',status:'mine',statusLabel:'В РАБОТЕ',operator:'Смирнов А.С.',timer:'04:42',critical:false,note:'При тревоге отвечаем и всё',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.032954,38.971944'},
  {time:'10:58',number:'12844',name:'Ритейл Плюс',address:'Краснодар, ул. Красная, 176',event:'Открытие двери',status:'gbr',statusLabel:'ГБР НАПРАВЛЕНА',operator:'Иванов И.И.',timer:'06:15',critical:true,note:'Главный вход',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0448,38.9764'},
  {time:'10:52',number:'11307',name:'Склад Юг',address:'Краснодар, ул. Уральская, 97',event:'Пожарный шлейф',status:'work',statusLabel:'ЗВОНОК КЛИЕНТУ',operator:'Петров А.В.',timer:'09:21',critical:true,note:'Проверить пожарный датчик',panel:'Краснодар',section:'Раздел 1',services:'Мониторинг ПС',coords:'45.0196,39.0432'},
  {time:'10:49',number:'10255',name:'Аптека Нева',address:'Краснодар, ул. Ставропольская, 205',event:'Снятие под принуждением',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',timer:'12:03',critical:true,note:'Связаться с заведующей',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0187,39.0064'},
  {time:'10:31',number:'9921',name:'Бизнес-центр Олимп',address:'Краснодар, ул. Северная, 324',event:'Техническое событие',status:'complete',statusLabel:'ЗАВЕРШЕНА',operator:'Сидорова Е.С.',timer:'18:40',critical:false,note:'Событие закрыто',panel:'Краснодар',section:'Раздел 3',services:'Мониторинг ПС',coords:'45.0454,38.9891'},
  {time:'10:24',number:'14802',name:'ЖК Солнечный',address:'Краснодар, ул. Восточная, 18',event:'Датчик движения',status:'work',statusLabel:'В РАБОТЕ',operator:'Кузнецов Д.М.',timer:'15:16',critical:false,note:'Квартира 42',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0550,39.0200'},
  {time:'10:18',number:'15677',name:'Офис Парус',address:'Краснодар, ул. Одесская, 48',event:'Открытие двери',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',timer:'17:25',critical:false,note:'Проверить вход',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0477,38.9877'},
  {time:'10:12',number:'12311',name:'Склад Запад',address:'Краснодар, ул. Калинина, 1',event:'Тревожная кнопка',status:'work',statusLabel:'В РАБОТЕ',operator:'Сидорова Е.С.',timer:'22:10',critical:true,note:'Задние ворота',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0520,38.9321'},
  {time:'09:55',number:'9775',name:'Производство 1',address:'Краснодар, ул. Дзержинского, 80',event:'Потеря связи',status:'gbr',statusLabel:'ГБР НАПРАВЛЕНА',operator:'Иванов И.И.',timer:'28:36',critical:true,note:'Проверить питание прибора',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.0762,38.9751'}
];
let selected = alarms[1];
let filter = 'all';
let history = [
  {tone:'red',time:'11:00:19',event:'Тревога принята оператором',operator:'Смирнов А.С.'},
  {tone:'gray',time:'11:00:05',event:'Сработала зона 1. Датчик движения',operator:'Система'},
  {tone:'gray',time:'10:58:12',event:'Взят под охрану',operator:'Система'},
  {tone:'gray',time:'08:03:21',event:'Снят с охраны',operator:'Система'},
  {tone:'gray',time:'08:00:00',event:'Плановое тестирование связи',operator:'Система'}
];
const $ = (id)=>document.getElementById(id);
function statusClass(a){return a.status==='new'?'new':a.status==='complete'?'complete':''}
function renderRows(){
  const q=$('alarmSearch').value.trim().toLowerCase();
  const rows=alarms.filter(a=>filter==='all'||(filter==='new'&&a.status==='new')||(filter==='mine'&&a.operator===currentOperator)).filter(a=>`${a.number} ${a.name} ${a.address} ${a.event}`.toLowerCase().includes(q));
  $('alarmRows').innerHTML=rows.map(a=>`<tr class="${a.status} ${a.number===selected.number?'selected':''}" data-number="${a.number}" tabindex="0"><td><strong>${a.time}</strong><small>${a.number}</small></td><td>${a.name}</td><td>${a.event}</td><td><span class="status ${statusClass(a)}">${a.statusLabel}</span></td><td>${a.operator}</td><td class="timer ${a.critical?'critical':''}">${a.timer}</td></tr>`).join('');
  document.querySelectorAll('#alarmRows tr').forEach(row=>{const choose=()=>selectAlarm(row.dataset.number);row.addEventListener('click',choose);row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose()}})});
}
function selectAlarm(number){selected=alarms.find(a=>a.number===number);renderRows();renderDetail()}
function renderDetail(){
  $('bannerNumber').textContent=selected.number;$('objectNumber').textContent=selected.number;$('footerNumber').textContent=selected.number;
  $('objectName').textContent=selected.name;$('objectAddress').textContent=selected.address;$('footerAddress').textContent=selected.address;$('objectNote').textContent=selected.note;$('objectPanel').textContent=selected.panel;$('objectSection').textContent=selected.section;$('objectServices').textContent=selected.services;$('elapsed').textContent=`00:${selected.timer}`;$('mapLink').href=`https://www.openstreetmap.org/?mlat=${selected.coords.split(',')[0]}&mlon=${selected.coords.split(',')[1]}#map=17/${selected.coords.replace(',','/')}`;
  $('acceptBtn').hidden=selected.status!=='new';$('takeBtn').hidden=selected.status==='new'||selected.operator===currentOperator||selected.status==='complete';$('finishBtn').hidden=selected.operator!==currentOperator;
  $('loopsBody').innerHTML=`<tr><td><span class="state-alarm">●</span> 1</td><td>Шлейф 1</td><td>${selected.event}</td><td class="state-alarm">ТРЕВОГА</td><td>${selected.time}:05</td></tr><tr><td><span class="state-ok">●</span> 2</td><td>Шлейф 2</td><td>Датчик открытия двери</td><td class="state-ok">Норма</td><td>—</td></tr><tr><td><span class="state-ok">●</span> 3</td><td>Шлейф 3</td><td>Тревожная кнопка</td><td class="state-ok">Норма</td><td>—</td></tr>`;
}
function renderContacts(){const contacts=[['Иванов И.И.','Администратор','+79181234567','+7 (918) 123-45-67'],['Петров А.В.','Технический специалист','+79182345678','+7 (918) 234-56-78']];$('contactsList').innerHTML=contacts.map(c=>`<div class="contact"><span class="avatar">${c[0].split(' ').map(s=>s[0]).join('').slice(0,2)}</span><div><b>${c[0]}</b><span>${c[1]}</span><strong>${c[3]}</strong></div><a class="icon-button phone" href="tel:${c[2]}" aria-label="Позвонить ${c[0]}">☎</a></div>`).join('')}
function renderHistory(){ $('historyBody').innerHTML=history.map(h=>`<tr><td class="${h.tone==='red'?'state-alarm':''}">●</td><td>${h.time}</td><td>${h.event}</td><td>${h.operator}</td></tr>`).join('') }
function addHistory(event){const now=new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit',second:'2-digit'});history.unshift({tone:'red',time:now,event,operator:currentOperator});renderHistory()}
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2200)}
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;renderRows()}));
$('alarmSearch').addEventListener('input',renderRows);
$('operatorsTrigger').addEventListener('click',()=>{const open=$('operatorsMenu').hidden;$('operatorsMenu').hidden=!open;$('operatorsTrigger').setAttribute('aria-expanded',String(open))});
$('operatorSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('#operatorList li').forEach(li=>li.hidden=!li.dataset.name.includes(q))});
function setDrawer(open){$('mainMenu').hidden=!open;$('drawerBackdrop').hidden=!open;$('menuTrigger').setAttribute('aria-expanded',String(open))}
$('menuTrigger').addEventListener('click',()=>setDrawer($('mainMenu').hidden));$('menuClose').addEventListener('click',()=>setDrawer(false));$('drawerBackdrop').addEventListener('click',()=>setDrawer(false));
$('acceptBtn').addEventListener('click',()=>{selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory('Тревога принята в работу');renderRows();renderDetail();toast('Тревога принята в работу')});
$('takeBtn').addEventListener('click',()=>{const previous=selected.operator;selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory(`Тревога забрана у оператора ${previous}`);renderRows();renderDetail();toast('Тревога передана вам')});
$('finishBtn').addEventListener('click',()=>{selected.status='complete';selected.statusLabel='ЗАВЕРШЕНА';addHistory('Отработка тревоги завершена');renderRows();renderDetail();toast('Тревога завершена')});
$('dispatchBtn').addEventListener('click',()=>{selected.status='gbr';selected.statusLabel='ГБР НАПРАВЛЕНА';selected.operator=currentOperator;$('gbrUnit').textContent='ГБР-2 • в пути • 12 мин';addHistory('ГБР-2 направлена на объект');renderRows();toast('ГБР-2 направлена на объект')});
document.querySelectorAll('a.phone').forEach(link=>link.addEventListener('click',()=>toast('Открывается звонок')));
$('allEventsBtn').addEventListener('click',()=>{$('eventsDialogBody').innerHTML=history.map(h=>`<p><b>${h.time}</b> — ${h.event} <small>${h.operator}</small></p>`).join('');$('eventsDialog').showModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){setDrawer(false);$('operatorsMenu').hidden=true}});
renderRows();renderDetail();renderContacts();renderHistory();
