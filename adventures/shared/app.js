(function(){
'use strict';
const D=window.EXPEDITION;if(!D)return;
const JOURNALS = {
  2: {
    skills: [
      'Собираю объёмного персонажа из отдельных деталей в Blockbench.',
      'Меняю положение, поворот и размер частей модели.',
      'Рисую текстуру и сохраняю редактируемую модель в .bbmodel.',
      'Создаю позы с помощью ключевых кадров на таймлайне.',
      'Проверяю плавность анимации и переход от конца к началу.',
      'Собираю сцену CoSpaces и выбираю подходящий масштаб объектов.',
      'Связываю нажатие на объект с его реакцией в CoBlocks.',
      'Запускаю движение по сценарию: старт, пауза и действие.'
    ],
    projects: [
      { intro: 'В Blockbench мы собрали кота из простых объёмных деталей и придумали ему внешний вид.', image: 1, bullets: [
        'Добавили голову, туловище, уши, отдельные лапы и хвост.',
        'Настроили размеры и положение деталей, рассмотрели модель с разных сторон.',
        'Нарисовали мордочку на текстуре и сохранили редактируемый проект.'
      ] },
      { intro: 'Наш объёмный кот ожил: научился приветствовать зрителя и шагать.', image: 0, bullets: [
        'Создали разные позы персонажа в режиме Animate.',
        'Расставили ключевые кадры для нужных частей на таймлайне.',
        'Запустили анимацию и проверили её повторение.'
      ] },
      { intro: 'В CoSpaces мы стали авторами собственного виртуального мира.', image: 0, bullets: [
        'Выбрали тему сцены и добавили объекты из библиотеки.',
        'Разместили, повернули и изменили масштаб объектов.',
        'Посмотрели на мир из режима запуска и выбрали, что увидит игрок.'
      ] },
      { intro: 'Мы добавили в мир интерактивный секрет и автоматический полёт ракеты.', image: 0, bullets: [
        'Связали нажатие на секретный предмет с нужной реакцией.',
        'Собрали последовательность для ракеты: запуск, пауза и движение.',
        'Проверили оба сценария в работающей сцене.'
      ] }
    ]
  },
  3: {
    skills: [
      'Определяю положение спрайта по координатам x и y.',
      'Настраиваю управление мышью и клавиатурой через условия в цикле.',
      'Размещаю скрипты у нужных спрайтов и настраиваю реакцию на касание.',
      'Создаю переменные, задаю стартовые значения и изменяю их в игре.',
      'Проверяю запас патронов, жизни и условие завершения игры.',
      'Рисую линии, меняю цвет и ставлю штампы с расширением Перо.',
      'Передаю сообщения между кнопками и исполнителем.',
      'Сохраняю Scratch-проект в .sb3 и проверяю его после открытия.'
    ],
    projects: [
      { intro: 'В Scratch мы подготовили корабль к полёту и придумали ему два способа управления.', image: 0, bullets: [
        'Разобрались с координатами x и y и направлением движения.',
        'Научили корабль реагировать на стрелки и следовать за мышью.',
        'Проверили управление и сохранили проект в .sb3.'
      ] },
      { intro: 'Мы собрали собственный Pong с платформой, мячом и коллекционным предметом.', image: 0, bullets: [
        'Связали горизонтальное движение платформы с мышью.',
        'Настроили отскок мяча и реакцию на касание кристалла.',
        'Добавили завершение раунда при промахе мимо платформы.'
      ] },
      { intro: 'Игра получила правила: ограниченный запас патронов, жизни игрока и жизни врага.', image: 0, bullets: [
        'Создали переменные и задали им значения при новом запуске.',
        'Разрешили выстрел только при наличии патронов.',
        'Учли попадания и завершили игру, когда жизни закончились.'
      ] },
      { intro: 'Мы превратили Scratch в рисовалку со своей палитрой и штампами.', image: 0, bullets: [
        'Подключили Перо и разрешили рисовать при нажатии мыши.',
        'Добавили выбор цвета и отдельный отпечаток по клику.',
        'Передали сообщение очистки и сохранили кнопки и фон.'
      ] }
    ]
  },
  4: {
    skills: [
      'Различаю оригинал и клон, управляю появлением и удалением копий.',
      'Передаю сообщения и выбираю, когда нужно дождаться выполнения.',
      'Проверяю цену покупки, разрешённое место и расход игровой валюты.',
      'Задаю условия победы, поражения и нового запуска игры.',
      'Создаю собственный блок и вызываю его из рабочего скрипта.',
      'Связываю прыжок и гравитацию с правильным касанием платформы.',
      'Подсчитываю очки и сохраняю рекорд между попытками.',
      'Получаю силу джойстика от 0 до 1 и обнуляю её при отпускании.'
    ],
    projects: [
      { intro: 'В Tower Defense мы запустили волны врагов с помощью клонов.', image: 0, bullets: [
        'Спрятали оригинал и задали маршрут его видимым копиям.',
        'Добавили паузы между появлениями врагов.',
        'Выдали награду за попадание и удалили врагов в конце маршрута.'
      ] },
      { intro: 'Мы довели Tower Defense до полноценной игры с магазином и разными финалами.', image: 0, bullets: [
        'Проверили цену башни перед покупкой и списанием монет.',
        'Ограничили место установки и настроили стрельбу из каждой башни.',
        'Добавили жизни, экраны победы и поражения и подготовку новой игры.'
      ] },
      { intro: 'В Doodle Jump мы собрали прыжок по платформам и гонку за новым рекордом.', image: 0, bullets: [
        'Создали собственные блоки прыжка и гравитации и вызвали их в цикле.',
        'Настроили отталкивание при падении и появление новых платформ.',
        'Начислили очки за пройденный путь и сохранили лучший результат.'
      ] },
      { intro: 'Мы сделали джойстик, связали его с героем и устроили сбор топлива на время.', image: 0, bullets: [
        'Ограничили движение стика радиусом неподвижной базы.',
        'Перевели отклонение в силу от 0 до 1 и обнулили её при отпускании.',
        'Добавили канистры, таймер и условие завершения игрового раунда.'
      ] }
    ]
  },
  5: {
    skills: [
      'Рисую узнаваемого героя на холсте 32 × 32 в Piskel.',
      'Использую карандаш, заливку и пипетку, сохраняю прозрачный фон.',
      'Делаю анимацию из кадров и подбираю FPS по смыслу движения.',
      'Выбираю формат для задачи: .piskel, PNG или GIF.',
      'Загружаю внешние виды как костюмы одного спрайта в Scratch.',
      'Удерживаю показатели питомца в диапазоне от 0 до 100.',
      'Защищаю действие состоянием занятости и передаю сообщения.',
      'Собираю команды в список и выполняю их по очереди с ожиданием.'
    ],
    projects: [
      { intro: 'В Piskel мы нарисовали робота с собственной профессией для Creative Hub.', image: 0, bullets: [
        'Собрали узнаваемый силуэт на холсте 32 × 32.',
        'Добавили рабочую деталь, знак и цвета, сохранили прозрачность вокруг героя.',
        'Сохранили редактируемый исходник .piskel и картинку PNG.'
      ] },
      { intro: 'Наш робот научился подавать сигнал с помощью короткой пиксельной анимации.', image: 1, bullets: [
        'Создали несколько кадров с изменением выбранной детали.',
        'Сохранили положение корпуса и контура между кадрами.',
        'Подобрали FPS, проверили повторение и экспортировали GIF.'
      ] },
      { intro: 'Мы придумали питомца и подготовили для него несколько внешних видов.', image: 1, bullets: [
        'Нарисовали обычный вид, радость и сон с одинаковым положением корпуса.',
        'Экспортировали отдельные PNG с прозрачным фоном.',
        'Загрузили картинки как костюмы одного спрайта и сохранили .sb3.'
      ] },
      { intro: 'Питомец стал тамагочи: живёт дома, меняет показатели и учится выступать в школе.', image: 0, bullets: [
        'Добавили показатели, ограничения действий и состояние занятости.',
        'Собрали очередь трюков в списке и выполнили её по порядку.',
        'Сохранили данные при переходе между комнатами и настроили новую игру.'
      ] }
    ]
  },
  6: {
    skills: [
      'Размещаю спрайты в MakeCode Arcade по координатам x и y.',
      'Различаю виды Player, Food и Exit и обрабатываю встречу объектов.',
      'Настраиваю счёт, сбор предметов и победу при достижении цели.',
      'Меняю гравитацию через ay, учитываю скорость vy и логическое состояние.',
      'Использую переменную hasCard, чтобы разрешить или запретить выход.',
      'Двигаю змейку по клеткам, обновляю её хвост и добавляю рост.',
      'Создаю и вызываю функции, отдельно настраиваю положение и скорость.',
      'Сохраняю проект Arcade в PNG и проверяю его повторным импортом.'
    ],
    projects: [
      { intro: 'В MakeCode Arcade мы помогли роботу найти три батарейки.', image: 0, bullets: [
        'Создали героя Player и батарейки Food, добавили управление стрелками.',
        'Уничтожили найденный предмет через otherSprite и прибавили очко.',
        'Завершили игру победой после третьей батарейки.'
      ] },
      { intro: 'Мы собрали платформер, в котором герой может менять направление гравитации.', image: 0, bullets: [
        'Добавили стены и переключение ay со сбросом прежней скорости vy.',
        'Запомнили находку карты в переменной hasCard.',
        'Разрешили победу у двери только после получения карты.'
      ] },
      { intro: 'Наша змейка научилась двигаться по клеткам и расти после яблока.', image: 0, bullets: [
        'Рассчитали следующую клетку и запретили прямой разворот.',
        'Обновили список хвоста: добавили новый сегмент и убрали старый кончик.',
        'Оставили дополнительный сегмент при росте и проверили края поля.'
      ] },
      { intro: 'Мы отправили курьера собирать три посылки и доработали готовую игру.', image: 0, bullets: [
        'Изменили вид машины и скорость, сохранив положение дорожек.',
        'Создали функцию spawnParcel с появлением, движением и удалением коробки.',
        'Начислили очки за доставку и проверили сохранённый проект повторным импортом.'
      ] }
    ]
  }
};
const J=JOURNALS[D.id];
const KEY='creitivika-expedition-'+D.id+'-v1';
const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let storageOK=true;let state={done:[false,false,false,false],skills:[],notes:['','','',''],tasks:{},name:'',reflection:'',quizIndex:0,quizEnd:false};
try{const old=JSON.parse(localStorage.getItem(KEY)||'null');if(old&&old.tasks&&Array.isArray(old.done))state=Object.assign(state,old);}catch(e){storageOK=false;}
let view=location.hash==='#quiz'?'quiz':location.hash==='#journal'?'journal':'route';let stationIndex=0;let stationTab='memory';let focusBeforeDialog=null;
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){storageOK=false;}updateStats();}
function icon(name){const paths={cube:'<path d="m16 3 12 7v13l-12 7-12-7V10Z"/><path d="m4 10 12 7 12-7M16 17v13M10 6l12 7"/>',time:'<circle cx="16" cy="16" r="12"/><path d="M16 8v9l6 3M4 5l3 3M25 25l3 3"/>',world:'<circle cx="16" cy="16" r="12"/><ellipse cx="16" cy="16" rx="6" ry="12"/><path d="M4 16h24M7 9h18M7 23h18"/>',spark:'<path d="m16 2 4 10 10 4-10 4-4 10-4-10L2 16l10-4Z"/>',code:'<path d="m11 7-8 9 8 9M21 7l8 9-8 9M19 4l-6 24"/>',flag:'<path d="M7 29V4m0 0h18l-4 6 4 6H7"/>',pixel:'<path d="M5 5h8v8H5Zm14 0h8v8h-8ZM5 19h8v8H5Zm14 0h8v8h-8Z"/>',robot:'<rect x="4" y="9" width="24" height="18" rx="5"/><path d="M16 9V4m-5 13h1m8 0h1M11 23h10M1 15v7m30-7v7"/>',clone:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 25v4h17V12h-4M9 10h6m-3-3v6"/>',pen:'<path d="m5 25 2-7L23 3l6 6-16 16-8 3Zm2-7 6 7M20 6l6 6"/>',heart:'<path d="M16 28 4 16C-5 5 9-1 16 8c7-9 21-3 12 8Z"/>',game:'<path d="M8 9h16c6 0 9 17 3 18-3 1-5-5-8-5h-6c-3 0-5 6-8 5-6-1-3-18 3-18Z"/><path d="M8 14v8m-4-4h8m10-2h1m3 5h1"/>',route:'<path d="M6 5h19v8H7v9h18v7M6 2v6m19 18v6"/>',battery:'<rect x="4" y="8" width="23" height="16" rx="3"/><path d="M28 13h2v6h-2M9 12v8m5-8v8m5-8v8"/>',gravity:'<path d="M16 3v26M8 10l8-7 8 7M8 22l8 7 8-7M3 16h6m14 0h6"/>',snake:'<path d="M5 5h22v8H13v8h14v7H5V13h8V5"/>',truck:'<path d="M3 10h16v13H3Zm16 6h6l5 6v1H19M6 23a3 3 0 1 0 6 0m9 0a3 3 0 1 0 6 0M22 16v-5h-3"/>'};return '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name]||paths.spark)+'</svg>';}
function heroArt(){const accent=D.palette[0],dark=D.palette[1],light=D.palette[2];let centerpiece='';
if(D.art==='cube'){centerpiece='<g transform="translate(232 108)"><path d="m0 0 77 43v85L0 171l-77-43V43Z" fill="'+accent+'" stroke="#33432f" stroke-width="2"/><path d="m-77 43 77 43 77-43M0 86v85" fill="none" stroke="#33432f" stroke-width="2"/><path d="m-40 64 15-7 9 22-19 9Zm65-7 15 7-5 24-19-9Z" fill="#33432f"/><path d="m-29 103 11-6m36 0 11 6M-8 122l8 5 8-5" fill="none" stroke="#33432f" stroke-width="4" stroke-linecap="round"/><path d="m-77 40 9-30 31 12m74 0 31-12 9 30" fill="'+accent+'" stroke="#33432f" stroke-width="2"/></g>';}
else if(D.art==='pixel'){centerpiece='<g fill="'+dark+'" transform="translate(154 113)"><path d="M16 0h24v24h-24Zm112 0h24v24h-24ZM0 24h168v112H0Zm24 112h40v24H24Zm80 0h40v24h-40Z"/><path d="M24 47h32v32H24Zm88 0h32v32h-32Z" fill="'+accent+'"/><path d="M56 100h56v12H56Z" fill="'+light+'"/></g>';}
else if(D.art==='arcade'){centerpiece='<g transform="translate(160 90)"><path d="M20 0h130l20 160H0Z" fill="'+dark+'" stroke="#28312e" stroke-width="2"/><rect x="28" y="23" width="108" height="75" rx="6" fill="'+light+'"/><rect x="69" y="49" width="25" height="25" rx="5" fill="'+dark+'"/><path d="M75 57h3m10 0h3m-13 10h10" stroke="'+accent+'" stroke-width="4"/><path d="M19 112h135l5 24H13Z" fill="'+accent+'"/><circle cx="52" cy="120" r="8" fill="#28312e"/><circle cx="115" cy="123" r="5" fill="#fffef9"/><circle cx="133" cy="118" r="5" fill="#fffef9"/><path d="M49 112v-12" stroke="#28312e" stroke-width="4"/></g>';}
else if(D.art==='castle'){centerpiece='<g transform="translate(155 95)" stroke="#28312e" stroke-width="2"><path d="M0 35h40v-20h20v20h55V15h20v20h40v139H0Z" fill="'+accent+'"/><path d="M0 35V0h16v16h16V0h16v35m79 0V0h16v16h16V0h16v35" fill="'+light+'"/><path d="M65 174v-53a23 23 0 0 1 46 0v53" fill="'+dark+'"/><path d="M22 58h18v24H22Zm115 0h18v24h-18Z" fill="'+dark+'"/><path d="M88 15v-34h39l-10 12 10 12H88" fill="'+dark+'"/></g>';}
else{centerpiece='<g transform="translate(174 112)"><rect x="0" y="0" width="130" height="130" rx="26" fill="'+accent+'" stroke="#28312e" stroke-width="2"/><path d="m42 37-24 28 24 28m45-56 24 28-24 28M76 28 54 102" fill="none" stroke="'+dark+'" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></g>';}
return '<svg viewBox="0 0 480 400" role="img" aria-label="Остров экспедиции"><defs><filter id="soft"><feGaussianBlur stdDeviation="9"/></filter></defs><ellipse cx="240" cy="335" rx="145" ry="17" fill="#28312e" opacity=".1" filter="url(#soft)"/><ellipse cx="240" cy="207" rx="204" ry="132" fill="none" stroke="#a8b6a0" stroke-dasharray="4 7"/><path d="m82 255 156-77 159 77-157 84Z" fill="'+light+'" stroke="#a6b295"/><path d="m82 255 158 83 157-83v30l-157 81-158-81Z" fill="#ccd7b8" stroke="#a6b295"/><path d="m240 338 157-83v30l-157 81Z" fill="#a7bb8b"/><g class="orb">'+centerpiece+'</g><g transform="translate(52 125) rotate(-12)"><rect width="59" height="66" rx="12" fill="#fffef9" stroke="#c8d0bd"/><path d="M16 22h27M16 32h21M16 42h26" stroke="'+dark+'" stroke-width="3" stroke-linecap="round"/></g><g transform="translate(368 145) rotate(13)"><rect width="55" height="58" rx="13" fill="'+accent+'" stroke="#82995f"/><path d="m14 30 9 9 20-21" fill="none" stroke="#28312e" stroke-width="4" stroke-linecap="round"/></g><circle cx="352" cy="68" r="7" fill="'+dark+'"/><circle cx="116" cy="72" r="4" fill="#738e55"/><path d="M395 258v18m-9-9h18M143 46v15m-7-7h14M60 230v12m-6-6h12" stroke="'+dark+'" stroke-width="2"/><path d="m325 315 12-6 12 6v14l-12 6-12-6Z" fill="'+dark+'" stroke="#28312e"/><path d="m325 315 12 7 12-7m-12 7v13" fill="none" stroke="#fffef9" stroke-width="1.2"/></svg>';}
const app=document.getElementById('app');
document.title=D.title+' · IT Start';document.documentElement.style.setProperty('--accent',D.palette[0]);document.documentElement.style.setProperty('--accent-dark',D.palette[1]);document.documentElement.style.setProperty('--lilac',D.palette[2]);
app.innerHTML='<header class="topbar"><div class="wrap brandrow"><a class="brand" href="../"><span class="brand-mark">'+icon('spark')+'</span>креайтивика</a><div class="topmeta"><span class="pill">IT START / МОДУЛЬ '+D.id+'</span><span class="pill">Рабочий лист-приключение</span><a class="toplink" href="../">Все экспедиции <span class="out-arrow" aria-hidden="true"></span></a></div></div></header><main class="wrap"><section class="hero"><div><div class="eyebrow">Экспедиция 0'+D.id+' · '+esc(D.subject)+'</div><h1>'+esc(D.title)+'</h1><p class="intro">'+esc(D.intro)+'</p><div class="hero-actions"><button class="btn primary" data-start>Начать экспедицию <span aria-hidden="true"><span class="out-arrow" aria-hidden="true"></span></span></button><button class="btn ghost" data-view="journal">Мой журнал</button></div><div class="hero-tags"><span>4 станции</span><span>8 заданий в финале</span><span>Подсказки рядом</span></div></div><div class="hero-art"><div class="art-label"><i></i>КАРТА ИССЛЕДОВАТЕЛЯ / 0'+D.id+'</div>'+heroArt()+'<span class="art-note">'+esc(D.artNote)+'</span></div></section><nav class="main-nav" aria-label="Разделы экспедиции"><div class="nav-tabs" role="tablist"><button role="tab" id="tab-route" aria-controls="view-route" data-view="route">Карта маршрута</button><button role="tab" id="tab-journal" aria-controls="view-journal" data-view="journal">Бортовой журнал</button><button role="tab" id="tab-quiz" aria-controls="view-quiz" data-view="quiz">Испытание портала</button></div><span class="nav-status"><i class="live-dot"></i><span id="save-status">Прогресс сохраняется</span></span></nav><p id="storage-notice" class="notice" hidden>Сохранение в этом браузере недоступно. Перед закрытием скачай свой журнал.</p><section id="view-route" role="tabpanel" aria-labelledby="tab-route" class="page-section"></section><section id="view-journal" role="tabpanel" aria-labelledby="tab-journal" class="page-section" hidden></section><section id="view-quiz" role="tabpanel" aria-labelledby="tab-quiz" class="page-section" hidden></section><div id="reset-panel" class="reset-panel" hidden><p>Сбросить галочки, заметки и ответы только в этой экспедиции?</p><div class="task-actions"><button class="btn small" data-reset-confirm>Сбросить эту экспедицию</button><button class="btn small ghost" data-reset-cancel>Отмена</button></div></div><footer class="footer"><span>Креайтивика · IT Start<br>По материалам вашего курса. Можно возвращаться к подсказкам и пробовать ещё раз.</span><span>Прогресс хранится в этом браузере.<br><button data-reset>Начать заново</button></span></footer></main><dialog id="station-dialog" class="station-dialog" aria-labelledby="station-title"><div class="dialog-head"><div class="dialog-heading"><div><div id="station-kicker" class="eyebrow"></div><h2 id="station-title"></h2></div><button class="close-button" data-close aria-label="Закрыть станцию">×</button></div><div class="dialog-tabs" role="tablist"><button role="tab" data-station-tab="memory">01 · Вспомнить</button><button role="tab" data-station-tab="practice">02 · Разобраться</button><button role="tab" data-station-tab="project">03 · Мой проект</button></div></div><div id="station-content" class="dialog-content"></div></dialog><dialog id="image-dialog" class="image-dialog" aria-label="Скриншот из методички"><div class="image-top"><span id="image-caption"></span><button class="close-button" data-image-close aria-label="Закрыть скриншот">×</button></div><img id="zoom-image" alt=""></dialog><div id="toast" class="toast" role="status" hidden></div><div id="live-region" class="sr-only" role="status" aria-live="polite"></div>';
const dialog=document.getElementById('station-dialog');const zoom=document.getElementById('image-dialog');
function taskFor(key){return key[0]==='s'?D.stations[Number(key.slice(1))].task:D.quiz[Number(key.slice(1))];}
function shuffleIndices(n){let a=Array.from({length:n},(_,i)=>i);if(n>1){a=a.slice(1).concat(a[0]);if(n>3)[a[0],a[2]]=[a[2],a[0]];}return a;}
function taskState(key,q){if(!state.tasks[key]){let a=null;if(q.type==='multi'||q.type==='grid')a=[];if(q.type==='match')a=Array(q.pairs.length).fill(null);if(q.type==='order')a=shuffleIndices(q.items.length);state.tasks[key]={answer:a,checked:false,correct:false,hint:false,selected:null};}return state.tasks[key];}
function score(){return D.quiz.filter((q,i)=>taskState('q'+i,q).correct).length;}
function complete(){return state.done.every(Boolean)&&score()===D.quiz.length;}
function updateStats(){const n=state.done.filter(Boolean).length;document.querySelectorAll('[data-done-count]').forEach(e=>e.textContent=n);document.querySelectorAll('[data-score-count]').forEach(e=>e.textContent=score());document.querySelectorAll('.signal-ring').forEach(e=>e.style.setProperty('--progress',n*25));document.querySelectorAll('[data-signal-dot]').forEach(e=>e.classList.toggle('on',!!state.done[Number(e.dataset.signalDot)]));const no=document.getElementById('storage-notice');if(no)no.hidden=storageOK;const saveEl=document.getElementById('save-status');if(saveEl)saveEl.textContent=storageOK?'Прогресс сохраняется':'Скачай свой журнал';}
function renderRoute(){document.getElementById('view-route').innerHTML='<div class="section-title"><div><div class="eyebrow">Твой путь через модуль</div><h2 style="margin-top:10px">Карта маршрута</h2><p>Открой станцию, вспомни главное и забери её сигнал.</p></div></div><div class="route-layout"><div class="station-grid">'+D.stations.map((s,i)=>'<article class="station-card '+(state.done[i]?'complete':'')+'" style="--tint:'+esc(s.tint||D.palette[2])+'"><div class="card-top"><span class="station-glyph">'+icon(s.icon)+'</span>'+(state.done[i]?'<span class="signal-badge">Сигнал получен ✓</span>':'<span class="station-index">СТАНЦИЯ 0'+(i+1)+'</span>')+'</div><h3>'+esc(s.title)+'</h3><p>'+esc(s.blurb)+'</p><button class="btn small" data-station="'+i+'">'+(state.done[i]?'Вернуться на станцию':'Исследовать станцию')+' <span aria-hidden="true"><span class="out-arrow" aria-hidden="true"></span></span></button></article>').join('')+'<div class="passport-banner"><div><h3>Твои проекты - часть экспедиции</h3><p>Вспомни созданные проекты, а в конце отметь навыки, которым научился за модуль.</p></div><button class="btn" data-view="journal">Открыть журнал <span class="out-arrow" aria-hidden="true"></span></button></div></div><aside class="journey-panel"><div class="eyebrow">Панель экспедиции</div><div class="signal-ring" style="--progress:0"><span class="signal-count"><span data-done-count>0</span> / 4<small>сигнала собрано</small></span></div><h3>'+esc(D.missionTitle)+'</h3><p>'+esc(D.mission)+'</p><div class="signal-dots" aria-hidden="true">'+D.stations.map((_,i)=>'<span data-signal-dot="'+i+'"></span>').join('')+'</div><button class="btn" data-view="quiz">Испытание портала <span aria-hidden="true">→</span></button><div class="mission-tip"><p>Станции открыты в любом порядке. Подсказки и скриншоты можно смотреть сколько угодно.</p></div><ul class="mini-list"><li>Вспомни важное</li><li>Разберись с заданием</li><li>Вспомни свой проект</li></ul></aside></div>'+(complete()?completionHTML():'');updateStats();}
function renderView(scroll){document.querySelectorAll('[role=tabpanel]').forEach(e=>e.hidden=e.id!=='view-'+view);document.querySelectorAll('.nav-tabs [role=tab]').forEach(e=>{const yes=e.dataset.view===view;e.setAttribute('aria-selected',yes);e.tabIndex=yes?0:-1;});if(view==='route')renderRoute();if(view==='journal')renderJournal();if(view==='quiz')renderQuiz();if(scroll)document.querySelector('.main-nav').scrollIntoView({behavior:'smooth',block:'start'});}
function changeView(v){view=v;history.replaceState(null,'','#'+v);renderView(true);}
function recapListHTML(i){return '<ul class="project-recap-list">'+J.projects[i].bullets.map(text=>'<li>'+esc(text)+'</li>').join('')+'</ul>';}
function projectRecapHTML(i){const p=J.projects[i],im=D.stations[i].images[p.image];return '<p class="project-recap-intro">'+esc(p.intro)+'</p><div class="project-recap-grid"><button class="screenshot-button recap-screenshot" data-image="'+p.image+'" data-image-station="'+i+'" aria-label="Увеличить скриншот к проекту '+esc(D.stations[i].project)+'"><span class="image-box"><img src="'+esc(im.src)+'" alt="'+esc(im.alt)+'" loading="lazy"></span><span class="recap-image-caption">Фрагмент из методички<span>Нажми, чтобы увеличить <span class="out-arrow" aria-hidden="true"></span></span></span></button><div><div class="recap-label">Что мы сделали</div>'+recapListHTML(i)+'</div></div>';}
function skillsHTML(){return '<div class="checklist module-skills" role="group" aria-label="Чему я научился за модуль">'+J.skills.map((text,j)=>'<label class="checkrow '+(state.skills[j]?'checked':'')+'"><input type="checkbox" data-skill-index="'+j+'" '+(state.skills[j]?'checked':'')+'><span>'+esc(text)+'</span></label>').join('')+'</div>';}
function openStation(i){stationIndex=i;stationTab='memory';focusBeforeDialog=document.activeElement;renderStation();dialog.showModal();dialog.scrollTop=0;}
function renderStation(){const s=D.stations[stationIndex];document.getElementById('station-kicker').textContent='Станция 0'+(stationIndex+1)+' / '+s.lesson;document.getElementById('station-title').textContent=s.title;document.querySelectorAll('[data-station-tab]').forEach(e=>e.setAttribute('aria-selected',e.dataset.stationTab===stationTab));let html='';
if(stationTab==='memory'){html='<p class="dialog-lead">'+esc(s.story)+'</p><div class="eyebrow">Нажми на понятие и загляни внутрь</div><div class="knowledge-grid">'+s.terms.map(t=>'<details class="knowledge-card"><summary>'+esc(t[0])+'</summary><p>'+esc(t[1])+'</p></details>').join('')+'</div><h3 class="subheading">Вспомни, как это выглядело</h3><div class="screenshot-grid">'+s.images.map((im,j)=>'<button class="screenshot-button" data-image="'+j+'"><span class="image-box"><img src="'+esc(im.src)+'" alt="'+esc(im.alt)+'" loading="lazy"></span><figcaption>'+esc(im.caption||im.alt)+'<br><strong>Нажми, чтобы увеличить <span class="out-arrow" aria-hidden="true"></span></strong></figcaption></button>').join('')+'</div><div class="software-bar">'+s.links.map(a=>'<a class="btn small ghost" href="'+esc(a.url)+'" target="_blank" rel="noopener noreferrer">'+esc(a.label)+' <span class="out-arrow" aria-hidden="true"></span></a>').join('')+'</div><p class="software-note">'+esc(s.linkNote||'Открой свой проект или учебную заготовку, если хочешь проверить действие в программе.')+'</p><div class="task-actions"><button class="btn primary" data-station-tab="practice">Перейти к заданию →</button></div>';}
if(stationTab==='practice'){html='<p class="dialog-lead">'+esc(s.challengeIntro||'Примени то, что вспомнил. Можно возвращаться к карточкам и пользоваться подсказкой.')+'</p><div class="task-shell" data-task-key="s'+stationIndex+'">'+taskHTML('s'+stationIndex,s.task)+'</div><div class="task-actions"><button class="btn ghost" data-station-tab="memory">← Карточки и скриншоты</button><button class="btn primary" data-station-tab="project">Вспомнить мой проект →</button></div>';}
if(stationTab==='project'){const good=taskState('s'+stationIndex,s.task).correct;html='<h3 class="project-title">'+esc(s.project)+'</h3>'+projectRecapHTML(stationIndex)+'<label class="field-label" for="station-note">Моя находка или идея для улучшения</label><textarea class="text-field" id="station-note" data-note="'+stationIndex+'" rows="3" placeholder="Что ты придумал, исправил или хочешь попробовать?">'+esc(state.notes[stationIndex])+'</textarea><div class="project-status">'+(good?'✓ Задание станции решено. Можно забрать сигнал и продолжить путь.':'Сначала реши задание во вкладке «Разобраться», затем возвращайся за сигналом.')+'</div><div class="task-actions"><button class="btn accent" data-finish-station '+(good?'':'disabled')+'>'+(state.done[stationIndex]?'Сигнал уже получен ✓':'Забрать сигнал станции ✦')+'</button><button class="btn ghost" data-station-tab="practice">К заданию</button></div>';}
document.getElementById('station-content').innerHTML=html;}
function questionType(q){return {single:'Один ответ',multi:'Несколько ответов',match:'Перетаскивание · соответствие',order:'Перетаскивание · порядок',cloze:'Заполни пропуск',text:'Короткий ответ',grid:'Пиксельная задача'}[q.type]||'Задание';}
function taskHTML(key,q){const s=taskState(key,q);let a='';const mark='АБВГДЕЖЗИК';
if(q.type==='single'||q.type==='multi'){a='<div class="answer-options" role="'+(q.type==='single'?'radiogroup':'group')+'" aria-label="Варианты ответа">'+q.options.map((t,i)=>{const yes=q.type==='single'?s.answer===i:Array.isArray(s.answer)&&s.answer.includes(i);return '<button id="'+key+'-option-'+i+'" class="answer-option '+(q.type==='multi'?'multi':'')+'" role="'+(q.type==='single'?'radio':'checkbox')+'" aria-checked="'+yes+'" data-option-key="'+key+'" data-option-index="'+i+'"><span class="option-mark">'+(yes?'✓':mark[i]||i+1)+'</span><span>'+esc(t)+'</span></button>';}).join('')+'</div>';}
if(q.type==='match'){a='<p class="task-help">Перетащи карточку к описанию. Или нажми на карточку, затем на нужное место. Нажатие на заполненное место возвращает карточку.</p><div class="drag-pool" aria-label="Карточки для сопоставления">'+shuffleIndices(q.pairs.length).filter(i=>!s.answer.includes(i)).map(i=>'<button id="'+key+'-token-'+i+'" draggable="true" class="drag-token '+(s.selected===i?'selected':'')+'" data-drag-key="'+key+'" data-token-index="'+i+'" data-select-token="'+key+'">'+esc(q.pairs[i][0])+'</button>').join('')+'</div><div class="match-list">'+q.pairs.map((p,i)=>'<button class="match-zone '+(s.answer[i]!==null?'filled':'')+'" data-drop-key="'+key+'" data-target-index="'+i+'" data-match-target="'+key+'"><span class="zone-value">'+(s.answer[i]!==null?esc(q.pairs[s.answer[i]][0]):'Помести карточку сюда')+'</span><span>'+esc(p[1])+'</span></button>').join('')+'</div>';}
if(q.type==='order'){a='<p class="task-help">Перетащи шаги в нужном порядке. Можно пользоваться стрелками ↑ и ↓ рядом с карточкой.</p><ol class="order-list">'+s.answer.map((n,i)=>'<li class="order-item" draggable="true" data-drag-key="'+key+'" data-order-index="'+i+'" data-drop-key="'+key+'" data-order-target="'+i+'"><span class="order-text">'+esc(q.items[n])+'</span><span class="move-buttons"><button data-move-key="'+key+'" data-from="'+i+'" data-dir="-1" aria-label="Поднять шаг: '+esc(q.items[n])+'" '+(i===0?'disabled':'')+'>↑</button><button data-move-key="'+key+'" data-from="'+i+'" data-dir="1" aria-label="Опустить шаг: '+esc(q.items[n])+'" '+(i===s.answer.length-1?'disabled':'')+'>↓</button></span></li>').join('')+'</ol>';}
if(q.type==='cloze'){a='<div class="cloze-block"><label>'+esc(q.before||'Выбери недостающую часть:')+' <select data-cloze-key="'+key+'" aria-label="Пропущенная часть"><option value="">Выбрать…</option>'+q.options.map((t,i)=>'<option value="'+i+'" '+(s.answer===i?'selected':'')+'>'+esc(t)+'</option>').join('')+'</select> '+esc(q.after||'')+'</label></div>';}
if(q.type==='text'){a='<label class="field-label" for="'+key+'-text">Твой ответ</label><input class="text-field" id="'+key+'-text" data-text-key="'+key+'" value="'+esc(s.answer||'')+'" autocomplete="off" placeholder="'+esc(q.placeholder||'Введи ответ')+'">';}
if(q.type==='grid'){a='<p class="task-help">Нажимай на клетки, чтобы закрашивать и очищать их. '+esc(q.gridHelp||'')+'</p><div class="pixel-grid" style="grid-template-columns:repeat('+q.cols+',1fr)">'+Array.from({length:q.rows*q.cols},(_,i)=>'<button class="pixel-cell '+(s.answer.includes(i)?'on':'')+' '+((q.fixed||[]).includes(i)?'fixed':'')+'" data-pixel-key="'+key+'" data-cell="'+i+'" aria-label="Строка '+(Math.floor(i/q.cols)+1)+', столбец '+(i%q.cols+1)+'" aria-pressed="'+(s.answer.includes(i)||(q.fixed||[]).includes(i))+'" '+((q.fixed||[]).includes(i)?'disabled':'')+'></button>').join('')+'</div>';}
return '<div class="task-box"><div class="quiz-kicker">'+questionType(q)+'</div><h3 class="task-heading">'+esc(q.title||'Проверь свою идею')+'</h3><p class="task-prompt">'+esc(q.prompt)+'</p>'+a+'<div class="task-actions"><button class="btn primary" data-check-task="'+key+'">'+(s.correct?'Решено ✓':'Проверить решение')+'</button><button class="btn ghost" data-hint-task="'+key+'" aria-expanded="'+s.hint+'">'+(s.hint?'Скрыть подсказку':'Нужна подсказка?')+'</button></div>'+(s.hint?'<div class="hint-box">'+esc(q.hint)+'</div>':'')+(s.checked?'<div class="feedback '+(s.correct?'success':'')+'" role="status"><strong>'+(s.correct?'Получилось!':'Есть что исправить')+'</strong>'+esc(q.explanation)+'</div>':'')+'</div>';}
function replaceTask(key){const focus=document.activeElement&&document.activeElement.id;document.querySelectorAll('[data-task-key="'+key+'"]').forEach(e=>e.innerHTML=taskHTML(key,taskFor(key)));if(focus){const e=document.getElementById(focus);if(e)e.focus({preventScroll:true});}updateStats();}
function changed(key){const s=taskState(key,taskFor(key));s.checked=false;s.correct=false;if(key[0]==='s')state.done[Number(key.slice(1))]=false;save();replaceTask(key);}
function normalize(v){return String(v||'').toLowerCase().replace(/ё/g,'е').replace(/\s+/g,'').replace(/[.,!?]/g,'');}
function evaluate(q,a){if(q.type==='single'||q.type==='cloze')return a===q.correct;if(q.type==='multi'||q.type==='grid')return Array.isArray(a)&&JSON.stringify(a.slice().sort((x,y)=>x-y))===JSON.stringify(q.correct.slice().sort((x,y)=>x-y));if(q.type==='order')return a.every((x,i)=>x===i);if(q.type==='match')return a.every((x,i)=>x===i);if(q.type==='text')return q.answers.some(x=>normalize(a)===normalize(x));return false;}
function checkTask(key){const q=taskFor(key),s=taskState(key,q);s.checked=true;s.correct=evaluate(q,s.answer);save();replaceTask(key);announce(s.correct?'Верное решение. '+q.explanation:'Попробуй ещё раз. '+q.explanation);if(key[0]==='q')renderQuizSidebar();}
function quizSidebar(){return '<aside class="quiz-sidebar" id="quiz-sidebar"><h3>Пульт портала</h3><p>Реши 8 задач. Ошибки можно исправлять, а на станции - возвращаться за подсказкой.</p><div class="quiz-dots">'+D.quiz.map((q,i)=>'<button class="quiz-dot '+(i===state.quizIndex&&!state.quizEnd?'current':'')+' '+(taskState('q'+i,q).correct?'correct':'')+'" data-quiz-index="'+i+'" aria-label="Вопрос '+(i+1)+(taskState('q'+i,q).correct?', решён':'')+'">'+(taskState('q'+i,q).correct?'✓':i+1)+'</button>').join('')+'</div><div class="quiz-progress">Верно решено: <strong data-score-count>'+score()+'</strong> / 8</div><button class="btn small ghost" data-view="route" style="margin-top:16px">Вернуться к станциям</button></aside>';}
function renderQuizSidebar(){const e=document.getElementById('quiz-sidebar');if(e)e.outerHTML=quizSidebar();updateStats();}
function renderQuiz(){if(state.quizIndex<0||state.quizIndex>=D.quiz.length)state.quizIndex=0;let panel='';if(state.quizEnd){const n=score();panel='<div class="task-box"><div class="eyebrow">Результат испытания</div><h2 style="font-size:37px;margin:19px 0">'+n+' / 8 сигналов знаний</h2><p>'+(n===8?'Все задачи решены. Ты разобрался с важными идеями модуля.':'Портал почти настроен. Вернись к нерешённым задачам: пояснения помогут найти причину ошибки.')+'</p><div class="task-actions">'+(n<8?'<button class="btn primary" data-retry>Разобрать нерешённое →</button>':'<button class="btn primary" data-view="journal">Сохранить мой журнал <span class="out-arrow" aria-hidden="true"></span></button>')+'<button class="btn ghost" data-view="route">К карте маршрута</button></div></div>'+(complete()?completionHTML():'<p class="checkpoint-note">'+(state.done.every(Boolean)?'Все станции пройдены. Осталось настроить сигналы знаний.':'Собери сигналы четырёх станций: задания + проверка своих проектов.')+'</p>');}else{const i=state.quizIndex;panel='<div class="task-shell" data-task-key="q'+i+'">'+taskHTML('q'+i,D.quiz[i])+'</div><div class="quiz-pagination"><button class="btn ghost" data-quiz-prev '+(i===0?'disabled':'')+'>← Назад</button><button class="btn" data-quiz-next>'+(i===D.quiz.length-1?'Результат испытания <span class="out-arrow" aria-hidden="true"></span>':'Следующее задание →')+'</button></div>';}
document.getElementById('view-quiz').innerHTML='<div class="section-title"><div><div class="eyebrow">Проверка знаний всего модуля</div><h2 style="margin-top:10px">Испытание портала</h2><p>Без таймера. Пробуй, проверяй и возвращайся к сложному.</p></div></div><div class="quiz-layout">'+quizSidebar()+'<div class="quiz-panel">'+panel+'</div></div>';updateStats();}
function completionHTML(){return '<div class="completion-card"><div class="eyebrow">Экспедиция завершена</div><h3 style="margin-top:16px">'+esc(D.finishTitle)+'</h3><p>'+esc(D.finishText)+'</p><div class="task-actions"><button class="btn primary" data-export>Скачать журнал экспедиции <span class="out-arrow" aria-hidden="true"></span></button><a class="btn ghost" href="../">К другим экспедициям →</a></div></div>';}
function renderJournal(){document.getElementById('view-journal').innerHTML='<div class="section-title"><div><div class="eyebrow">Твоё портфолио модуля '+D.id+'</div><h2 style="margin-top:10px">Бортовой журнал</h2><p>Вспомни свой путь: какие проекты мы создали и как они работали. В конце отметь, чему научился за весь модуль.</p></div></div><div class="journal-layout"><div class="journal-cards">'+D.stations.map((s,i)=>'<article class="journal-card project-journal-card"><div class="station-index">'+esc(s.lesson)+' · ПРОЕКТ 0'+(i+1)+'</div><h3>'+esc(s.project)+'</h3>'+projectRecapHTML(i)+'<label class="field-label" for="journal-note-'+i+'">Моя находка или идея. Необязательно</label><textarea class="text-field" id="journal-note-'+i+'" rows="2" data-note="'+i+'" placeholder="Что запомнилось в этом проекте?">'+esc(state.notes[i])+'</textarea><div class="task-actions"><button class="btn small ghost" data-station="'+i+'">Вернуться на станцию <span class="out-arrow" aria-hidden="true"></span></button></div></article>').join('')+'<article class="journal-card journal-reflection"><h3>Что беру с собой дальше</h3><label class="field-label" for="explorer-name">Как подписать мой журнал? Необязательно</label><input class="text-field" id="explorer-name" data-name value="'+esc(state.name)+'" placeholder="Имя или позывной"><label class="field-label" for="reflection">Самое полезное открытие модуля</label><textarea class="text-field" id="reflection" data-reflection rows="3" placeholder="Теперь я умею… В следующем проекте попробую…">'+esc(state.reflection)+'</textarea></article><article class="journal-card skills-card"><div class="eyebrow">Итоги всего модуля</div><h3>Чему я научился за модуль</h3><p>Отметь навыки, которые уже получаются. К остальным можно вернуться позже. Галочки сохраняются автоматически.</p>'+skillsHTML()+'</article></div><aside class="journal-aside"><div class="eyebrow">Сохранить открытия</div><h3 style="margin-top:16px">Твой путь в одном журнале</h3><p>Станции: <strong data-done-count>0</strong> / 4<br>Задачи: <strong data-score-count>0</strong> / 8</p><p>Скачай проекты со скриншотами, свои заметки и итоговый список навыков. Журнал можно открыть и распечатать.</p><button class="btn primary" data-export>Скачать мой журнал <span class="out-arrow" aria-hidden="true"></span></button><p style="font-size:12px">Заметки остаются у тебя. Сайт никому их не отправляет.</p></aside></div>'+(complete()?completionHTML():'');updateStats();}
function announce(t){document.getElementById('live-region').textContent=t;}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.hidden=false;window.setTimeout(()=>e.hidden=true,3000);}
function closeStation(){dialog.close();renderView(false);if(focusBeforeDialog&&focusBeforeDialog.isConnected)focusBeforeDialog.focus({preventScroll:true});}
function exportJournal(){const name=state.name.trim()||'Исследователь';const body='<h1>'+esc(D.title)+'</h1><p>Креайтивика · IT Start · Модуль '+D.id+'</p><h2>'+esc(name)+'</h2><p>Станций пройдено: '+state.done.filter(Boolean).length+' / 4. Задач решено: '+score()+' / 8.</p>'+D.stations.map((s,i)=>{const p=J.projects[i],im=s.images[p.image];return '<section class="project-export"><h2>'+esc(s.lesson)+'. '+esc(s.project)+'</h2><p>'+esc(p.intro)+'</p><figure><img src="'+esc(im.src)+'" alt="'+esc(im.alt)+'"><figcaption>Фрагмент из методички: '+esc(im.caption||im.alt)+'</figcaption></figure>'+recapListHTML(i)+'<p><strong>Моя заметка:</strong> '+esc(state.notes[i]||'Пока без заметки.')+'</p></section>';}).join('')+'<section><h2>Моё главное открытие</h2><p>'+esc(state.reflection||'Пока без заметки.')+'</p></section><section><h2>Испытание портала</h2><ol>'+D.quiz.map((q,i)=>'<li>'+esc(q.title||q.prompt)+' - '+(taskState('q'+i,q).correct?'решено':'ещё можно разобрать')+'</li>').join('')+'</ol></section><section><h2>Чему я научился за модуль</h2><ul class="skills-list">'+J.skills.map((text,j)=>'<li><label><input type="checkbox" '+(state.skills[j]?'checked':'')+'> <span>'+esc(text)+'</span></label></li>').join('')+'</ul></section><p><button onclick="window.print()">Распечатать журнал</button></p>';const html='<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Журнал экспедиции '+D.id+'</title><style>body{font:17px/1.7 Segoe UI,Arial,sans-serif;max-width:850px;padding:35px 22px;margin:auto;color:#202520;background:#fffef9}h1{font-size:40px;line-height:1.15}h2{line-height:1.3}section{border-top:1px solid #d6dfc8;padding-top:15px;margin-top:25px;break-inside:avoid}figure{margin:20px 0}figure img{display:block;max-width:100%;max-height:280px;object-fit:contain;object-position:left}figcaption{font-size:12px;color:#596254;margin-top:7px}.project-recap-list{list-style:disc;padding-left:22px;color:#171b17}.project-recap-list li{margin:8px 0}.skills-list{list-style:none;padding:0}.skills-list li{margin:12px 0}.skills-list label{display:flex;align-items:flex-start;gap:10px}.skills-list input{width:18px;height:18px;margin:6px 0 0;flex-shrink:0;accent-color:#698d31}button{padding:12px 18px;background:#b8d969;border:0;border-radius:10px;font:inherit;cursor:pointer}@media print{button{display:none}body{padding:0;font-size:12px}figure img{max-height:180px}h1{font-size:30px}}</style>'+body+'</html>';const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='IT_Start_M'+D.id+'_journal.html';document.body.appendChild(a);a.click();a.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Журнал подготовлен для скачивания');}
document.addEventListener('click',e=>{const b=e.target.closest('button,a');if(!b)return;
if(b.hasAttribute('data-view')){changeView(b.dataset.view);return;}
if(b.hasAttribute('data-start')){view='route';renderView(true);openStation(state.done.findIndex(x=>!x)===-1?0:state.done.findIndex(x=>!x));return;}
if(b.hasAttribute('data-station')){openStation(Number(b.dataset.station));return;}
if(b.hasAttribute('data-close')){closeStation();return;}
if(b.hasAttribute('data-station-tab')){stationTab=b.dataset.stationTab;renderStation();dialog.scrollTop=0;return;}
if(b.hasAttribute('data-image')){const i=b.hasAttribute('data-image-station')?Number(b.dataset.imageStation):stationIndex;const im=D.stations[i].images[Number(b.dataset.image)];document.getElementById('zoom-image').src=im.src;document.getElementById('zoom-image').alt=im.alt;document.getElementById('image-caption').textContent=im.caption||im.alt;zoom.showModal();return;}
if(b.hasAttribute('data-image-close')){zoom.close();return;}
if(b.hasAttribute('data-finish-station')){const s=D.stations[stationIndex];if(taskState('s'+stationIndex,s.task).correct){state.done[stationIndex]=true;save();closeStation();toast('Сигнал станции получен ✦');}return;}
if(b.hasAttribute('data-option-key')){const k=b.dataset.optionKey,q=taskFor(k),s=taskState(k,q),n=Number(b.dataset.optionIndex);if(q.type==='single')s.answer=n;else s.answer=s.answer.includes(n)?s.answer.filter(x=>x!==n):s.answer.concat(n);changed(k);return;}
if(b.hasAttribute('data-check-task')){checkTask(b.dataset.checkTask);return;}
if(b.hasAttribute('data-hint-task')){const k=b.dataset.hintTask,s=taskState(k,taskFor(k));s.hint=!s.hint;save();replaceTask(k);return;}
if(b.hasAttribute('data-select-token')){const k=b.dataset.selectToken,s=taskState(k,taskFor(k));s.selected=Number(b.dataset.tokenIndex);replaceTask(k);announce('Карточка выбрана. Нажми на подходящее описание.');return;}
if(b.hasAttribute('data-match-target')){const k=b.dataset.matchTarget,s=taskState(k,taskFor(k)),to=Number(b.dataset.targetIndex);if(s.selected!==null){s.answer=s.answer.map(v=>v===s.selected?null:v);s.answer[to]=s.selected;s.selected=null;}else s.answer[to]=null;changed(k);return;}
if(b.hasAttribute('data-move-key')){const k=b.dataset.moveKey,s=taskState(k,taskFor(k)),from=Number(b.dataset.from),to=from+Number(b.dataset.dir);if(to>=0&&to<s.answer.length){const item=s.answer.splice(from,1)[0];s.answer.splice(to,0,item);changed(k);}return;}
if(b.hasAttribute('data-pixel-key')){const k=b.dataset.pixelKey,s=taskState(k,taskFor(k)),cell=Number(b.dataset.cell);s.answer=s.answer.includes(cell)?s.answer.filter(x=>x!==cell):s.answer.concat(cell);changed(k);return;}
if(b.hasAttribute('data-quiz-index')){state.quizIndex=Number(b.dataset.quizIndex);state.quizEnd=false;save();renderQuiz();return;}
if(b.hasAttribute('data-quiz-next')){if(state.quizIndex===D.quiz.length-1)state.quizEnd=true;else state.quizIndex++;save();renderQuiz();document.getElementById('view-quiz').scrollIntoView({block:'start',behavior:'smooth'});return;}
if(b.hasAttribute('data-quiz-prev')){state.quizIndex=Math.max(0,state.quizIndex-1);save();renderQuiz();return;}
if(b.hasAttribute('data-retry')){state.quizIndex=D.quiz.findIndex((q,i)=>!taskState('q'+i,q).correct);state.quizEnd=false;save();renderQuiz();return;}
if(b.hasAttribute('data-export')){exportJournal();return;}
if(b.hasAttribute('data-reset')){document.getElementById('reset-panel').hidden=false;document.getElementById('reset-panel').scrollIntoView({block:'center',behavior:'smooth'});return;}
if(b.hasAttribute('data-reset-cancel')){document.getElementById('reset-panel').hidden=true;return;}
if(b.hasAttribute('data-reset-confirm')){try{localStorage.removeItem(KEY);}catch(err){}location.reload();}
});
document.addEventListener('change',e=>{const t=e.target;
if(t.hasAttribute('data-skill-index')){state.skills[Number(t.dataset.skillIndex)]=t.checked;t.closest('.checkrow').classList.toggle('checked',t.checked);save();return;}
if(t.hasAttribute('data-cloze-key')){const k=t.dataset.clozeKey;taskState(k,taskFor(k)).answer=t.value===''?null:Number(t.value);changed(k);}
});
document.addEventListener('input',e=>{const t=e.target;if(t.hasAttribute('data-note'))state.notes[Number(t.dataset.note)]=t.value;else if(t.hasAttribute('data-name'))state.name=t.value;else if(t.hasAttribute('data-reflection'))state.reflection=t.value;else if(t.hasAttribute('data-text-key')){const k=t.dataset.textKey,s=taskState(k,taskFor(k));s.answer=t.value;s.checked=false;s.correct=false;}else return;save();});
document.addEventListener('dragstart',e=>{const t=e.target.closest('[data-drag-key]');if(!t)return;const data={key:t.dataset.dragKey,token:t.hasAttribute('data-token-index')?Number(t.dataset.tokenIndex):null,from:t.hasAttribute('data-order-index')?Number(t.dataset.orderIndex):null};e.dataTransfer.setData('text/plain',JSON.stringify(data));e.dataTransfer.effectAllowed='move';});
document.addEventListener('dragover',e=>{const t=e.target.closest('[data-drop-key]');if(t){e.preventDefault();e.dataTransfer.dropEffect='move';t.classList.add('drop-over');}});
document.addEventListener('dragleave',e=>{const t=e.target.closest('[data-drop-key]');if(t&&!t.contains(e.relatedTarget))t.classList.remove('drop-over');});
document.addEventListener('drop',e=>{const t=e.target.closest('[data-drop-key]');if(!t)return;e.preventDefault();t.classList.remove('drop-over');let data;try{data=JSON.parse(e.dataTransfer.getData('text/plain'));}catch(err){return;}const k=t.dataset.dropKey;if(data.key!==k)return;const q=taskFor(k),s=taskState(k,q);if(q.type==='match'&&Number.isInteger(data.token)){s.answer=s.answer.map(v=>v===data.token?null:v);s.answer[Number(t.dataset.targetIndex)]=data.token;s.selected=null;}else if(q.type==='order'&&Number.isInteger(data.from)){const to=Number(t.dataset.orderTarget);const item=s.answer.splice(data.from,1)[0];s.answer.splice(to,0,item);}else return;changed(k);});
dialog.addEventListener('cancel',e=>{e.preventDefault();closeStation();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeStation();}});zoom.addEventListener('click',e=>{if(e.target===zoom)zoom.close();});
document.querySelector('.nav-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const vs=['route','journal','quiz'];const next=(vs.indexOf(view)+(e.key==='ArrowRight'?1:2))%3;changeView(vs[next]);document.getElementById('tab-'+vs[next]).focus();});
window.addEventListener('hashchange',()=>{view=location.hash==='#quiz'?'quiz':location.hash==='#journal'?'journal':'route';renderView(false);});
renderRoute();renderView(false);save();
})();
