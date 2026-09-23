const currentOperator = 'Смирнов А.С.';
const alarms = [
  {time:'11:04',number:'14933',name:'Магазин Север',address:'Краснодар, ул. Северная, 102',event:'Тревожная кнопка',alarmType:'КТС',category:7,status:'new',statusLabel:'КТС • НЕ ВЗЯТА',operator:'—',elapsedSec:38,critical:true,note:'Позвонить ответственному лицу',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0402,38.9760'},
  {time:'11:00',number:'14919',name:'Кабинет разработчиков ПО ХБ Нева',address:'Краснодар, ул. Пашковская, 74, кабинет 306',event:'Датчик движения',status:'mine',statusLabel:'В РАБОТЕ',operator:'Смирнов А.С.',elapsedSec:282,critical:false,note:'При тревоге отвечаем и всё',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.032954,38.971944'},
  {time:'10:58',number:'12844',name:'Ритейл Плюс',address:'Краснодар, ул. Красная, 176',event:'Открытие двери',status:'gbr',statusLabel:'ГБР-7 НАПРАВЛЕНА',operator:'Иванов И.И.',elapsedSec:375,critical:true,note:'Главный вход',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0448,38.9764'},
  {time:'10:52',number:'11307',name:'Склад Юг',address:'Краснодар, ул. Уральская, 97',event:'Пожарный шлейф',status:'work',statusLabel:'ЗВОНОК КЛИЕНТУ',operator:'Петров А.В.',elapsedSec:561,critical:true,note:'Проверить пожарный датчик',panel:'Краснодар',section:'Раздел 1',services:'Мониторинг ПС',coords:'45.0196,39.0432'},
  {time:'10:49',number:'10255',name:'Аптека Нева',address:'Краснодар, ул. Ставропольская, 205',event:'Снятие под принуждением',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',elapsedSec:723,critical:true,note:'Связаться с заведующей',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0187,39.0064'},
  {time:'10:24',number:'14802',name:'ЖК Солнечный',address:'Краснодар, ул. Восточная, 18',event:'Датчик движения',status:'work',statusLabel:'В РАБОТЕ',operator:'Кузнецов Д.М.',elapsedSec:916,critical:false,note:'Квартира 42',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0550,39.0200'},
  {time:'10:18',number:'15677',name:'Офис Парус',address:'Краснодар, ул. Одесская, 48',event:'Открытие двери',status:'new',statusLabel:'НОВАЯ / НЕ ВЗЯТА',operator:'—',elapsedSec:1045,critical:true,note:'Проверить вход',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС',coords:'45.0477,38.9877'},
  {time:'10:12',number:'12311',name:'Склад Запад',address:'Краснодар, ул. Калинина, 1',event:'Тревожная кнопка',status:'work',statusLabel:'В РАБОТЕ',operator:'Сидорова Е.С.',elapsedSec:1330,critical:true,note:'Задние ворота',panel:'Краснодар',section:'Раздел 2',services:'Охрана ОС',coords:'45.0520,38.9321'},
  {time:'09:55',number:'9775',name:'Производство 1',address:'Краснодар, ул. Дзержинского, 80',event:'Потеря связи',status:'gbr',statusLabel:'ГБР-2 НАПРАВЛЕНА',operator:'Иванов И.И.',elapsedSec:1716,critical:true,note:'Проверить питание прибора',panel:'Краснодар',section:'Раздел 1',services:'Охрана ОС • Мониторинг ПС',coords:'45.0762,38.9751'}
];
const gbrUnits = [
  {id:'ГБР-2',crew:'Ковалёв П.Н.',distance:'5,8 км',eta:'12 мин',role:'Основная ГБР',state:'Свободен',phone:'+78615550000'},
  {id:'ГБР-7',crew:'Мельников Р.С.',distance:'7,4 км',eta:'16 мин',role:'Резервная',state:'Свободен',phone:'+78615550007'},
  {id:'ГБР-4',crew:'Захаров Д.В.',distance:'11,2 км',eta:'24 мин',role:'Резервная',state:'На задании',phone:'+78615550004'}
];
const completedReports = [{
  number:'9921',name:'Бизнес-центр Олимп',address:'Краснодар, ул. Северная, 324',event:'Техническое событие',operator:'Сидорова Е.С.',completedAt:'04.08.2026 10:49:40',result:'Связь восстановлена, оборудование работает штатно.',panel:'Краснодар',section:'Раздел 3',administrator:'А 01',manager:'Соколова Марина Викторовна',gbr:'Не направлялась',
  chronology:[{time:'10:31:02',event:'Получено техническое событие',operator:'Система'},{time:'10:32:15',event:'Тревога принята в работу',operator:'Сидорова Е.С.'},{time:'10:38:04',event:'Звонок ответственному лицу',operator:'Сидорова Е.С.'},{time:'10:49:40',event:'Тревога завершена',operator:'Сидорова Е.С.'}]
}];
const operatorStats = [
  {date:'2026-09-23',name:'Смирнов А.С.',start:'08:00',end:'16:32',workSec:27480,breakSec:1380,lunchSec:1800,alarms:12},
  {date:'2026-09-23',name:'Иванов И.И.',start:'08:02',end:'16:41',workSec:28020,breakSec:960,lunchSec:1860,alarms:15},
  {date:'2026-09-23',name:'Петров А.В.',start:'09:00',end:'17:24',workSec:27060,breakSec:1200,lunchSec:1980,alarms:9},
  {date:'2026-09-23',name:'Сидорова Е.С.',start:'07:58',end:'16:17',workSec:26700,breakSec:1500,lunchSec:1680,alarms:11},
  {date:'2026-09-22',name:'Смирнов А.С.',start:'08:01',end:'16:20',workSec:26820,breakSec:1260,lunchSec:1860,alarms:10},
  {date:'2026-09-22',name:'Иванов И.И.',start:'08:05',end:'16:46',workSec:28140,breakSec:1020,lunchSec:1860,alarms:14},
  {date:'2026-09-22',name:'Петров А.В.',start:'09:02',end:'17:28',workSec:27360,breakSec:1140,lunchSec:1860,alarms:8},
  {date:'2026-09-22',name:'Сидорова Е.С.',start:'07:55',end:'16:14',workSec:26640,breakSec:1440,lunchSec:1740,alarms:13}
];
let selected = alarms[3];
let filter = 'all';
let shiftMode = 'off';
let shiftStartedAt = null;
let shiftTotalSec = 0;
let shiftWorkSec = 0;
let shiftModeSec = 0;
let shiftPauseSec = 0;
let shiftFinished = false;
let historySortDirection = 'asc';
let history = [
  {alarmNumber:'11307',tone:'red',date:'2026-08-04',time:'11:00:19',event:'Тревога принята оператором',operator:'Петров А.В.',details:'Принята в работу'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-04',time:'11:00:05',event:'Сработал пожарный шлейф',operator:'Система',details:'Шлейф 1 • пожарный датчик'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-04',time:'10:58:12',event:'Объект взят под охрану',operator:'Система',details:'Раздел 1'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-04',time:'08:03:21',event:'Объект снят с охраны',operator:'Система',details:'Пользователь 12'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-04',time:'08:00:00',event:'Плановое тестирование связи',operator:'Система',details:'Канал связи в норме'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-03',time:'20:01:44',event:'Объект взят под охрану',operator:'Система',details:'Раздел 1'},
  {alarmNumber:'11307',tone:'gray',date:'2026-08-03',time:'09:12:08',event:'Проверка канала связи',operator:'Система',details:'Успешно'}
];
const $ = id => document.getElementById(id);
const statusClass = a => a.status === 'new' ? 'new' : a.status === 'complete' ? 'complete' : '';
const formatElapsed = seconds => {
  const h = Math.floor(seconds / 3600), m = Math.floor((seconds % 3600) / 60), s = seconds % 60;
  return h ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}` : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};
const formatShift = seconds => `${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor((seconds%3600)/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
function sortedAlarms(list) {
  return [...list].sort((a,b) => {
    const aKts=isKts(a), bKts=isKts(b);
    if(aKts!==bKts)return aKts?-1:1;
    if (a.status === 'new' && b.status !== 'new') return -1;
    if (a.status !== 'new' && b.status === 'new') return 1;
    return b.elapsedSec - a.elapsedSec;
  });
}
function isKts(alarm){return alarm.alarmType==='КТС'||/тревожная кнопка|ктс/i.test(alarm.event);}
function renderRows() {
  const q = $('alarmSearch').value.trim().toLowerCase();
  const rows = sortedAlarms(alarms.filter(a => filter === 'all' || (filter === 'new' && a.status === 'new') || (filter === 'mine' && a.operator === currentOperator)).filter(a => `${a.number} ${a.name} ${a.address} ${a.event}`.toLowerCase().includes(q)));
  $('alarmRows').innerHTML = rows.map(a => `<tr class="${a.status} ${isKts(a)?'kts':''} ${a.number===selected.number?'selected':''}" data-number="${a.number}" tabindex="0"><td><strong>${a.time}</strong><small>${a.number}</small></td><td>${a.name}</td><td class="address-cell"><span title="${a.address}">${a.address}</span></td><td>${a.event}</td><td><span class="status ${statusClass(a)} ${isKts(a)?'kts':''}">${a.statusLabel}</span></td><td>${a.operator}</td><td class="timer ${a.status==='new'&&a.elapsedSec>600?'critical':''}">${formatElapsed(a.elapsedSec)}</td></tr>`).join('');
  document.querySelectorAll('#alarmRows tr').forEach(row => { const choose = () => selectAlarm(row.dataset.number); row.addEventListener('click',choose); row.addEventListener('keydown',e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();choose();} }); });
  $('totalCount').textContent = alarms.length;
  $('unclaimedCount').textContent = alarms.filter(a => a.status === 'new').length;
  document.querySelector('.filters button[data-filter="all"] span').textContent=`(${alarms.length})`;
  document.querySelector('.filters button[data-filter="new"] span').textContent=`(${alarms.filter(a=>a.status==='new').length})`;
  document.querySelector('.filters button[data-filter="mine"] span').textContent=`(${alarms.filter(a=>a.operator===currentOperator).length})`;
}
function selectAlarm(number) { selected = alarms.find(a => a.number === number); renderRows(); renderDetail(); }
function mapUrl(a) { const [lat,lon] = a.coords.split(','); return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`; }
function renderDetail() {
  $('alarmBanner').classList.toggle('alert',selected.status==='new'||isKts(selected));
  $('bannerNumber').textContent=selected.number; $('objectNumber').textContent=selected.number; $('footerNumber').textContent=selected.number;
  $('objectName').textContent=selected.name; $('objectAddress').textContent=selected.address; $('footerAddress').textContent=selected.address; $('objectNote').textContent=selected.note; $('objectPanel').textContent=selected.panel; $('objectSection').textContent=selected.section; const category=selected.category||([14933,12844,9775].includes(Number(selected.number))?7:2); $('objectCategory').textContent=category; $('objectCategory').classList.toggle('important',[1,7,10].includes(category)); $('objectCategoryHint').textContent=[1,7,10].includes(category)?'Важный объект':'Стандартный объект'; $('objectAdministrator').textContent=selected.administrator||'А 01'; $('objectManager').textContent=selected.manager||'Соколова Марина Викторовна'; $('objectServices').textContent=selected.services; $('elapsed').textContent=formatElapsed(selected.elapsedSec);
  $('acceptBtn').hidden=selected.status!=='new'; $('takeBtn').hidden=selected.status==='new'||selected.operator===currentOperator||selected.status==='complete'; $('finishBtn').hidden=selected.operator!==currentOperator; $('operatorCommentBtn').hidden=!hasDispatchedGbr(selected.number);
  $('loopsBody').innerHTML=getAlarmLoops(selected).map(loop=>`<tr><td><span class="state-alarm">●</span> ${loop.number}</td><td>${loop.name}</td><td>${loop.description}</td><td class="state-alarm">ТРЕВОГА</td><td>${loop.time}</td></tr>`).join('');
  $('photosObjectName').textContent=selected.name; $('mapObjectName').textContent=selected.name; $('mapCoords').textContent=selected.coords.replace(',',', '); $('mapAddress').textContent=selected.address; $('mapLabel').textContent=`Объект ${selected.number}`; $('externalMapLink').href=mapUrl(selected);
  renderGbr();
  renderWorkflow();
  renderHistory();
}
function renderWorkflow(){
  const type=isKts(selected)?'КТС':/пожар|пс/i.test(`${selected.event} ${selected.services}`)?'ПС':'ОС';
  const steps=type==='КТС'?['Принять тревогу','Немедленно направить ГБР','Получить результат осмотра','Добавить комментарий','Завершить тревогу']:type==='ПС'?['Принять тревогу','Позвонить клиенту','При необходимости направить ГБР','Зафиксировать результат','Завершить тревогу']:['Принять тревогу','Проверить: датчик сработал однократно или многократно','При многократном срабатывании направить ГБР','Получить осмотр ГБР и добавить комментарий','Позвонить клиенту','Завершить тревогу'];
  $('workflowList').innerHTML=steps.map((step,index)=>`<li class="${index===0?'done':index===1?'active':''}"><span>${index===0?'✓':index+1}</span><b>${index+1}</b>${step}${index===1?'<button aria-label="Перейти к шагу">›</button>':''}</li>`).join('');
  const button=document.querySelector('#workflowList button');if(button)button.addEventListener('click',()=>{addHistory('Проверена информация',`${type}: выполнен следующий шаг алгоритма`);toast('Действие добавлено в хронологию');});
}
function renderGbr() {
  if(!selected.dispatchedGbr)selected.dispatchedGbr=selected.status==='gbr'?[selected.statusLabel.split(' ')[0]]:[];
  $('gbrList').innerHTML=gbrUnits.map((unit,index)=>{const dispatched=selected.dispatchedGbr.includes(unit.id);return `<article class="gbr-unit ${index===0?'primary':''}"><div class="gbr-unit-head"><div><span class="gbr-role">${unit.role}</span><b>▰ ${unit.id}</b></div><span class="crew-state ${dispatched||unit.state!=='Свободен'?'busy':'free'}">${dispatched?'Направлена':unit.state}</span></div><div class="gbr-meta"><span>${unit.crew}</span><strong>${unit.distance}</strong><span>≈ ${unit.eta}</span></div><div class="gbr-actions"><button class="${dispatched?'cancel-gbr':'dispatch-gbr'}" data-unit="${unit.id}" ${!dispatched&&unit.state!=='Свободен'?'disabled':''}>${dispatched?'Отменить ГБР':'Отправить'}</button><a class="icon-button phone" data-call-gbr="${unit.id}" href="tel:${unit.phone}" aria-label="Позвонить ${unit.id}">☎</a></div></article>`;}).join('');
  document.querySelectorAll('.dispatch-gbr').forEach(button=>button.addEventListener('click',()=>dispatchGbr(button.dataset.unit)));
  document.querySelectorAll('.cancel-gbr').forEach(button=>button.addEventListener('click',()=>cancelGbr(button.dataset.unit)));
}
function dispatchGbr(unitId) {
  if(!selected.dispatchedGbr)selected.dispatchedGbr=[];if(!selected.dispatchedGbr.includes(unitId))selected.dispatchedGbr.push(unitId);
  selected.status='gbr'; selected.statusLabel=selected.dispatchedGbr.length>1?`${selected.dispatchedGbr.join(', ')} НАПРАВЛЕНЫ`:`${unitId} НАПРАВЛЕНА`; selected.operator=currentOperator;
  const unit=gbrUnits.find(item=>item.id===unitId); unit.state='Направлена'; addHistory('ГБР направлена',`${unitId} • экипаж ${unit.crew} • ${unit.distance} • прибытие ${unit.eta}`); renderRows(); renderDetail(); toast(`${unitId} направлена на объект`);
}
function cancelGbr(unitId){
  selected.dispatchedGbr=(selected.dispatchedGbr||[]).filter(id=>id!==unitId);const unit=gbrUnits.find(item=>item.id===unitId);unit.state='Свободен';addHistory('Выезд ГБР отменён',`${unitId} • экипаж ${unit.crew}`);
  if(selected.dispatchedGbr.length){selected.status='gbr';selected.statusLabel=selected.dispatchedGbr.length>1?`${selected.dispatchedGbr.join(', ')} НАПРАВЛЕНЫ`:`${selected.dispatchedGbr[0]} НАПРАВЛЕНА`;}else{selected.status='mine';selected.statusLabel='В РАБОТЕ';}
  renderRows();renderDetail();toast(`${unitId}: выезд отменён`);
}
const responsibleContacts=[['Иванов И.И.','Администратор','+79181234567','+7 (918) 123-45-67'],['Петров А.В.','Технический специалист','+79182345678','+7 (918) 234-56-78'],['Смирнова Ольга В.', 'Директор', '+79183334455', '+7 (918) 333-44-55'],['Ковалёв Андрей П.','Заместитель директора','+79184445566','+7 (918) 444-55-66']];
function renderContacts(){$('contactsList').innerHTML=responsibleContacts.slice(0,2).map(c=>`<div class="contact"><span class="avatar">${c[0].split(' ').map(s=>s[0]).join('').slice(0,2)}</span><div><b>${c[0]}</b><span>${c[1]}</span><strong>${c[3]}</strong></div><a class="icon-button phone" data-call-name="${c[0]}" href="tel:${c[2]}" aria-label="Позвонить ${c[0]}">☎</a></div>`).join('');}
function historyTimestamp(item){return `${item.date||'0000-00-00'}T${item.time}`;}
function sortHistory(items,direction=historySortDirection){return [...items].sort((a,b)=>historyTimestamp(a).localeCompare(historyTimestamp(b))*(direction==='asc'?1:-1));}
function renderHistory(){const items=sortHistory(history.filter(h=>h.alarmNumber===selected.number));$('historyTimeSort').textContent=`Время ${historySortDirection==='asc'?'↑':'↓'}`;$('historyTimeSort').setAttribute('aria-sort',historySortDirection==='asc'?'ascending':'descending');$('historyBody').innerHTML=items.map(h=>`<tr><td class="${h.tone==='red'?'state-alarm':''}">●</td><td>${h.time}</td><td>${h.event}</td><td>${h.operator}</td><td>${h.details||'—'}</td></tr>`).join('');}
function addHistory(event,details=''){const now=new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit',second:'2-digit'});history.unshift({alarmNumber:selected.number,tone:'red',date:new Date().toISOString().slice(0,10),time:now,event,operator:currentOperator,details});renderHistory();}
let toastTimer; function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2200);}
async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const field = document.createElement('textarea');
    field.value = text;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }
  toast(successMessage);
}
function selectedObjectText() {
  return [`Объект: ${selected.name}`,`Адрес: ${selected.address}`,`Пультовый номер: ${selected.number}`,`Пульт: ${selected.panel}`,`Раздел: ${selected.section}`,`Категория: ${selected.category||([14933,12844,9775].includes(Number(selected.number))?7:2)}`,`Событие: ${selected.event}`,`Статус: ${selected.statusLabel}`,`Оператор: ${selected.operator}`,`Примечание: ${selected.note}`,`Услуги: ${selected.services}`,`Координаты: ${selected.coords}`].join('\n');
}
function getAlarmLoops(alarm){
  if(alarm.loops)return alarm.loops;
  const primary={number:1,name:'Шлейф 1',description:alarm.event,time:`${alarm.time}:05`,alarm:true};
  if(alarm.number==='14919')return [primary,{number:4,name:'Шлейф 4',description:'Датчик открытия двери',time:`${alarm.time}:17`,alarm:true}];
  return [primary];
}
function getAllLoops(alarm){return [...getAlarmLoops(alarm),{number:2,name:'Шлейф 2',description:'Датчик открытия двери',time:'—',alarm:false},{number:3,name:'Шлейф 3',description:'Тревожная кнопка',time:'—',alarm:false}];}
function hasDispatchedGbr(alarmNumber){return history.some(item=>item.alarmNumber===alarmNumber&&item.event==='ГБР направлена')||selected.status==='gbr';}
function setShiftMode(mode){
  const previous=shiftMode;
  shiftMode=mode; const active=mode!=='off';
  if(mode==='work'&&!shiftStartedAt){shiftStartedAt=new Date();shiftTotalSec=0;shiftWorkSec=0;shiftPauseSec=0;shiftModeSec=0;shiftFinished=false;}
  if(mode!==previous&&mode!=='off')shiftModeSec=0;
  $('startShiftBtn').hidden=active; $('endShiftBtn').hidden=!active; $('breakBtn').disabled=!active; $('lunchBtn').disabled=!active;
  $('breakBtn').classList.toggle('active',mode==='break'); $('lunchBtn').classList.toggle('active',mode==='lunch');
  const labels={off:shiftFinished?'Смена завершена':'Смена не начата',work:'На смене',break:'Перерыв',lunch:'Обед'};
  document.querySelector('.current-user small').textContent=active?labels[mode]:'Оператор'; renderShiftTimer(); toast(labels[mode]);
}
function renderShiftTimer(){
  if(shiftFinished){$('shiftStatus').textContent=`Смена завершена • Работа ${formatShift(shiftWorkSec)} • Перерывы и обед ${formatShift(shiftPauseSec)} • Всего ${formatShift(shiftTotalSec)}`;return;}
  if(shiftMode==='off'){$('shiftStatus').textContent='Смена не начата';return;}
  if(shiftMode==='work'){$('shiftStatus').textContent=`Работа ${formatShift(shiftWorkSec)} • Смена ${formatShift(shiftTotalSec)}`;return;}
  const label=shiftMode==='break'?'Перерыв':'Обед';
  $('shiftStatus').textContent=`${label} ${formatShift(shiftModeSec)} • Работа ${formatShift(shiftWorkSec)} • Смена ${formatShift(shiftTotalSec)}`;
}
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;renderRows();}));
$('alarmSearch').addEventListener('input',renderRows);
$('operatorsTrigger').addEventListener('click',()=>{const open=$('operatorsMenu').hidden;$('operatorsMenu').hidden=!open;$('operatorsTrigger').setAttribute('aria-expanded',String(open));});
$('operatorSearch').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('#operatorList li').forEach(li=>li.hidden=!li.dataset.name.includes(q));});
function setDrawer(open){$('mainMenu').hidden=!open;$('drawerBackdrop').hidden=!open;$('menuTrigger').setAttribute('aria-expanded',String(open));}
$('menuTrigger').addEventListener('click',()=>setDrawer($('mainMenu').hidden)); $('menuClose').addEventListener('click',()=>setDrawer(false)); $('drawerBackdrop').addEventListener('click',()=>setDrawer(false));
$('acceptBtn').addEventListener('click',()=>{selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory('Тревога принята в работу','Оператор назначен ответственным');renderRows();renderDetail();toast('Тревога принята в работу');});
$('takeBtn').addEventListener('click',()=>{const previous=selected.operator;selected.status='mine';selected.statusLabel='В РАБОТЕ';selected.operator=currentOperator;addHistory('Тревога передана другому оператору',`От ${previous} к ${currentOperator}`);renderRows();renderDetail();toast('Тревога передана вам');});
$('finishBtn').addEventListener('click',()=>{$('finishObjectLabel').textContent=`Объект ${selected.number} • ${selected.name}`;$('finishNote').value='';$('finishDialog').showModal();});
$('cancelFinishBtn').addEventListener('click',()=>$('finishDialog').close());
$('confirmFinishBtn').addEventListener('click',()=>{
  const note=$('finishNote').value.trim();
  if(!note){$('finishNote').focus();toast('Добавьте примечание о результате');return;}
  const completedNumber=selected.number;
  addHistory('Тревога завершена',`Результат: ${note}`);
  const completedHistory=history.filter(item=>item.alarmNumber===completedNumber).map(item=>({time:item.time,event:item.event,operator:item.operator,details:item.details}));
  const gbrEntry=completedHistory.find(item=>item.event==='ГБР направлена');
  completedReports.unshift({number:selected.number,name:selected.name,address:selected.address,event:selected.event,operator:currentOperator,completedAt:new Date().toLocaleString('ru-RU'),result:note,operatorComment:selected.operatorComment||'Комментарий не добавлен',panel:selected.panel,section:selected.section,category:selected.category||2,administrator:selected.administrator||'А 01',manager:selected.manager||'Соколова Марина Викторовна',gbr:gbrEntry?gbrEntry.details:'Не направлялась',chronology:sortHistory(completedHistory,'asc')});
  const index=alarms.findIndex(a=>a.number===completedNumber);
  if(index!==-1)alarms.splice(index,1);
  $('finishDialog').close();
  selected=sortedAlarms(alarms)[0];
  renderRows();
  if(selected)renderDetail();
  toast('Тревога завершена и удалена из активного списка');
});
$('startShiftBtn').addEventListener('click',()=>setShiftMode('work')); $('endShiftBtn').addEventListener('click',()=>{shiftFinished=true;shiftStartedAt=null;setShiftMode('off');}); $('breakBtn').addEventListener('click',()=>setShiftMode(shiftMode==='break'?'work':'break')); $('lunchBtn').addEventListener('click',()=>setShiftMode(shiftMode==='lunch'?'work':'lunch'));
$('openPhotosBtn').addEventListener('click',()=>$('photosDialog').showModal()); $('mapButton').addEventListener('click',()=>{$('mapPanel').hidden=false;}); $('mapClose').addEventListener('click',()=>{$('mapPanel').hidden=true;});
$('copyObjectBtn').addEventListener('click',()=>copyText(selectedObjectText(),'Информация об объекте скопирована'));
$('historyTimeSort').addEventListener('click',()=>{historySortDirection=historySortDirection==='asc'?'desc':'asc';renderHistory();});
$('operatorCommentBtn').addEventListener('click',()=>{$('commentObjectLabel').textContent=`Объект ${selected.number} • ${selected.name}`;$('savedCommentText').textContent=selected.operatorComment||'Комментарий ещё не добавлен';const hasComment=Boolean(selected.operatorComment);$('commentView').hidden=!hasComment;$('commentEditor').hidden=hasComment;$('saveCommentBtn').hidden=hasComment;$('cancelEditCommentBtn').hidden=true;$('operatorCommentText').value=selected.operatorComment||'';$('operatorCommentDialog').showModal();});
$('cancelCommentBtn').addEventListener('click',()=>$('operatorCommentDialog').close());
$('editCommentBtn').addEventListener('click',()=>{$('commentView').hidden=true;$('commentEditor').hidden=false;$('saveCommentBtn').hidden=false;$('cancelEditCommentBtn').hidden=false;$('operatorCommentText').focus();});
$('cancelEditCommentBtn').addEventListener('click',()=>{$('commentView').hidden=false;$('commentEditor').hidden=true;$('saveCommentBtn').hidden=true;$('cancelEditCommentBtn').hidden=true;$('operatorCommentText').value=selected.operatorComment||'';});
$('saveCommentBtn').addEventListener('click',()=>{const text=$('operatorCommentText').value.trim();if(!text){$('operatorCommentText').focus();toast('Введите комментарий по осмотру');return;}const edited=Boolean(selected.operatorComment);selected.operatorComment=text;addHistory(edited?'Комментарий оператора изменён':'Комментарий оператора добавлен',text);$('savedCommentText').textContent=text;$('commentView').hidden=false;$('commentEditor').hidden=true;$('saveCommentBtn').hidden=true;$('cancelEditCommentBtn').hidden=true;toast(edited?'Комментарий обновлён':'Комментарий сохранён');});
function renderEventsDialog() {
  const date=$('eventsDate').value;
  const from=$('eventsTimeFrom').value;
  const to=$('eventsTimeTo').value;
  const filtered=history.filter(item=>item.alarmNumber===selected.number&&(!date||item.date===date)&&(!from||item.time>=`${from}:00`)&&(!to||item.time<=`${to}:59`));
  $('eventsDialogBody').innerHTML=filtered.length?`<table class="events-full-table"><thead><tr><th>Дата</th><th>Время</th><th>Действие</th><th>Оператор</th><th>Детали</th></tr></thead><tbody>${filtered.map(h=>`<tr><td>${h.date.split('-').reverse().join('.')}</td><td><b>${h.time}</b></td><td>${h.event}</td><td>${h.operator}</td><td>${h.details||'—'}</td></tr>`).join('')}</tbody></table>`:'<div class="events-empty">За выбранный период событий нет</div>';
}
function openEventsDialog(){
  $('eventsObjectLabel').textContent=`Объект ${selected.number} • ${selected.name}`;
  renderEventsDialog();
  $('eventsDialog').showModal();
}
$('allEventsBtn').addEventListener('click',openEventsDialog);
$('objectEventsBtn').addEventListener('click',()=>{$('loopsObjectLabel').textContent=`Объект ${selected.number} • ${selected.name}`;$('loopsDialogBody').innerHTML=`<table class="events-full-table"><thead><tr><th>№</th><th>Шлейф</th><th>Описание</th><th>Состояние</th><th>Время</th></tr></thead><tbody>${getAllLoops(selected).map(loop=>`<tr><td>${loop.number}</td><td>${loop.name}</td><td>${loop.description}</td><td class="${loop.alarm?'state-alarm':'state-ok'}">${loop.alarm?'ТРЕВОГА':'Норма'}</td><td>${loop.time}</td></tr>`).join('')}</tbody></table>`;$('loopsDialog').showModal();});
$('allContactsBtn').addEventListener('click',()=>{$('contactsObjectLabel').textContent=`Объект ${selected.number} • ${selected.name}`;$('contactsDialogBody').innerHTML=`<table class="events-full-table contacts-full-table"><thead><tr><th>№</th><th>ФИО</th><th>Роль</th><th>Телефон</th><th>Действия</th></tr></thead><tbody>${responsibleContacts.map((c,index)=>`<tr><td>${index+1}</td><td><b>${c[0]}</b></td><td>${c[1]}</td><td>${c[3]}</td><td><div class="contact-modal-actions"><a class="contact-call phone" data-call-name="${c[0]}" href="tel:${c[2]}" aria-label="Позвонить ${c[0]}" title="Позвонить">☎</a><button class="copy-phone" data-phone="${c[3]}" aria-label="Копировать номер ${c[0]}">⧉ Копировать</button></div></td></tr>`).join('')}</tbody></table>`;document.querySelectorAll('.copy-phone').forEach(button=>button.addEventListener('click',()=>copyText(button.dataset.phone,'Номер телефона скопирован')));$('contactsDialog').showModal();});
$('applyEventsFilter').addEventListener('click',renderEventsDialog);
$('resetEventsFilter').addEventListener('click',()=>{$('eventsDate').value='';$('eventsTimeFrom').value='';$('eventsTimeTo').value='';renderEventsDialog();});
function renderReports(){
  $('reportsBody').innerHTML=completedReports.length?completedReports.map(report=>`<article class="report-card"><div class="report-summary"><div><b>Объект ${report.number} • ${report.name}</b><span>${report.address}</span></div><div><span>Завершено</span><strong>${report.completedAt}</strong></div><div><span>Оператор</span><strong>${report.operator}</strong></div></div><details><summary>Подробнее об отработке</summary><div class="report-details"><dl><div><dt>Событие</dt><dd>${report.event}</dd></div><div><dt>Категория</dt><dd>${report.category||2}</dd></div><div><dt>Результат</dt><dd>${report.result}</dd></div><div><dt>ГБР</dt><dd>${report.gbr}</dd></div><div><dt>Комментарий оператора</dt><dd>${report.operatorComment||'Комментарий не добавлен'}</dd></div><div><dt>Администратор</dt><dd>${report.administrator}</dd></div><div><dt>Менеджер</dt><dd>${report.manager}</dd></div></dl><h3>Хронология отработки</h3><table><thead><tr><th>Время</th><th>Действие</th><th>Оператор</th><th>Детали</th></tr></thead><tbody>${sortHistory(report.chronology,'asc').map(item=>`<tr><td>${item.time}</td><td>${item.event}</td><td>${item.operator}</td><td>${item.details||'—'}</td></tr>`).join('')}</tbody></table></div></details></article>`).join(''):'<div class="events-empty">Завершённых тревог пока нет</div>';
}
$('reportsMenuBtn').addEventListener('click',()=>{setDrawer(false);renderReports();$('reportsDialog').showModal();});
function renderOperatorStats(){
  const date=$('operatorStatsDate').value;
  const rows=operatorStats.filter(item=>item.date===date);
  const totalWork=rows.reduce((sum,item)=>sum+item.workSec,0), totalBreak=rows.reduce((sum,item)=>sum+item.breakSec,0), totalLunch=rows.reduce((sum,item)=>sum+item.lunchSec,0), totalAlarms=rows.reduce((sum,item)=>sum+item.alarms,0);
  $('operatorStatsBody').innerHTML=rows.length?`<div class="operator-stats-summary"><div><span>Операторов</span><b>${rows.length}</b></div><div><span>Рабочее время</span><b>${formatShift(totalWork)}</b></div><div><span>Перерывы</span><b>${formatShift(totalBreak)}</b></div><div><span>Обед</span><b>${formatShift(totalLunch)}</b></div><div><span>Тревог обработано</span><b>${totalAlarms}</b></div></div><div class="operator-stats-table-wrap"><table class="events-full-table operator-stats-table"><thead><tr><th>Оператор</th><th>Начало смены</th><th>Завершение</th><th>Рабочее время</th><th>Перерыв</th><th>Обед</th><th>Обработано тревог</th></tr></thead><tbody>${rows.map(item=>`<tr><td><b>${item.name}</b></td><td>${item.start}</td><td>${item.end}</td><td><strong>${formatShift(item.workSec)}</strong></td><td>${formatShift(item.breakSec)}</td><td>${formatShift(item.lunchSec)}</td><td><span class="alarm-count-badge">${item.alarms}</span></td></tr>`).join('')}</tbody></table></div>`:'<div class="events-empty">За выбранную дату статистики нет</div>';
}
$('operatorStatsMenuBtn').addEventListener('click',()=>{setDrawer(false);renderOperatorStats();$('operatorStatsDialog').showModal();});
$('applyOperatorStats').addEventListener('click',renderOperatorStats);
$('todayOperatorStats').addEventListener('click',()=>{$('operatorStatsDate').value='2026-09-23';renderOperatorStats();});
document.addEventListener('click',e=>{const phone=e.target.closest('a.phone');if(!phone)return;if(phone.dataset.callName)addHistory('Звонок ответственному лицу',phone.dataset.callName);if(phone.dataset.callGbr)addHistory('Звонок экипажу ГБР',phone.dataset.callGbr);toast('Открывается звонок');}); document.addEventListener('keydown',e=>{if(e.key==='Escape'){setDrawer(false);$('operatorsMenu').hidden=true;$('mapPanel').hidden=true;}});

const paneResizer = $('paneResizer');
const workspace = document.querySelector('.workspace');
function setPaneWidth(clientX) {
  const bounds = workspace.getBoundingClientRect();
  const min = bounds.width * 0.25;
  const max = bounds.width * 0.55;
  const width = Math.min(max, Math.max(min, clientX - bounds.left));
  workspace.style.setProperty('--list-width', `${width}px`);
  paneResizer.setAttribute('aria-valuenow', String(Math.round(width / bounds.width * 100)));
}
paneResizer.addEventListener('pointerdown', e => {
  paneResizer.setPointerCapture(e.pointerId);
  paneResizer.classList.add('dragging');
  document.body.classList.add('resizing-panes');
  setPaneWidth(e.clientX);
});
paneResizer.addEventListener('pointermove', e => { if (paneResizer.hasPointerCapture(e.pointerId)) setPaneWidth(e.clientX); });
paneResizer.addEventListener('pointerup', e => {
  paneResizer.releasePointerCapture(e.pointerId);
  paneResizer.classList.remove('dragging');
  document.body.classList.remove('resizing-panes');
});
let mouseResizing = false;
paneResizer.addEventListener('mousedown', e => {
  mouseResizing = true;
  paneResizer.classList.add('dragging');
  document.body.classList.add('resizing-panes');
  setPaneWidth(e.clientX);
});
document.addEventListener('mousemove', e => { if (mouseResizing) setPaneWidth(e.clientX); });
document.addEventListener('mouseup', () => {
  if (!mouseResizing) return;
  mouseResizing = false;
  paneResizer.classList.remove('dragging');
  document.body.classList.remove('resizing-panes');
});
paneResizer.addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  e.preventDefault();
  const bounds = workspace.getBoundingClientRect();
  const current = document.querySelector('.alarm-pane').getBoundingClientRect().width;
  setPaneWidth(bounds.left + current + (e.key === 'ArrowLeft' ? -24 : 24));
});

setInterval(()=>{
  alarms.forEach(a=>{if(a.status!=='complete')a.elapsedSec+=1;});
  if(shiftMode!=='off'){shiftTotalSec+=1;shiftModeSec+=1;if(shiftMode==='work')shiftWorkSec+=1;else shiftPauseSec+=1;renderShiftTimer();}
  renderRows();if(selected)$('elapsed').textContent=formatElapsed(selected.elapsedSec);$('clock').textContent=new Date().toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'});
},1000);
renderRows();renderDetail();renderContacts();renderHistory();
