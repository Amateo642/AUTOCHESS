// rarity
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


const heroes = [
    {
        name: 'AbyssalCrawler',
        id: 1,
        race: 'marine',
        class: 'assassin'
    },
    {
        name: 'AbyssalGuard',
        id: 2,
        race: 'marine',
        class: 'warrior'
    },
    {
        name: 'ArgailKnight',
        id: 3,
        race: 'human',
        class: 'knight'
    },
    {
        name: 'Berserker',
        id: 4,
        race: 'troll',
        class: 'warrior'
    },
    {
        name: 'BlightSorcerer',
        id: 5
    },
    {
        name: 'DarkSpirit',
        id: 6
    },
    {
        name: 'Defector',
        id: 7
    },
    {
        name: 'DesperateDoctor',
        id: 8
    },
    {
        name: 'Devastator',
        id: 9
    },
    {
        name: 'DoomArbiter',
        id: 10
    },
    {
        name: 'DragonKnight',
        id: 11
    },
    {
        name: 'DwarfSniper',
        id: 12
    },
    {
        name: 'EgersisProphet',
        id: 13
    },
    {
        name: 'EgersisRanger',
        id: 14
    },
    {
        name: 'EvilKnight',
        id: 15
    },
    {
        name: 'FallenWitcher',
        id: 16
    },
    {
        name: 'FlammingWizard',
        id: 17
    },
    {
        name: 'FortuneTeller',
        id: 18
    },
    {
        name: 'FrostKnight',
        id: 19
    },
    {
        name: 'GodOfThunder',
        id: 20
    },
    {
        name: 'GodOfWar',
        id: 21
    },
    {
        name: 'GrandHerald',
        id: 22
    },
    {
        name: 'Grimtouch',
        id: 23
    },
    {
        name: 'HeavenBomber',
        id: 24
    },
    {
        name: 'Helicopter',
        id: 25
    },
    {
        name: 'HellKnight',
        id: 26
    },
    {
        name: 'LightbladeKnight',
        id: 27
    },
    {
        name: 'LordOfSand',
        id: 28
    },
    {
        name: 'OgreMage',
        id: 29
    },
    {
        name: 'PhantomQueen',
        id: 30
    },
    {
        name: 'PirateCaptain',
        id: 31
    },
    {
        name: 'PoisonousWorm',
        id: 32
    },
    {
        name: 'RazorClaw',
        id: 33
    },
    {
        name: 'RedaxeChief',
        id: 34,
        race: 'cave',
        class: 'warrior'
    },
    {
        name: 'Ripper',
        id: 35
    },
    {
        name: 'RogueGuard',
        id: 36
    },
    {
        name: 'ShadowCrawler',
        id: 37
    },
    {
        name: 'ShadowDevil',
        id: 38
    },
    {
        name: 'ShiningArcher',
        id: 39
    },
    {
        name: 'ShiningAssassin',
        id: 40
    },
    {
        name: 'ShiningDragon',
        id: 41
    },
    {
        name: 'Siren',
        id: 42
    },
    {
        name: 'SkullHunter',
        id: 43
    },
    {
        name: 'SkyBreaker',
        id: 44
    },
    {
        name: 'SoulBreaker',
        id: 45
    },
    {
        name: 'SoulReaper',
        id: 46
    },
    {
        name: 'StoneSpirit',
        id: 47
    },
    {
        name: 'StormShaman',
        id: 48
    },
    {
        name: 'StrangeEgg',
        id: 49
    },
    {
        name: 'Swordman',
        id: 50,
        race: 'cave',
        class: 'warrior'
    },
    {
        name: 'TabooWitcher',
        id: 51
    },
    {
        name: 'TheSource',
        id: 52
    },
    {
        name: 'ThunderSpirit',
        id: 53
    },
    {
        name: 'TortolaElder',
        id: 54
    },
    {
        name: 'TsunamiStalker',
        id: 55
    },
    {
        name: 'TuskChampion',
        id: 56
    },
    {
        name: 'Unicorn',
        id: 57
    },
    {
        name: 'Venom',
        id: 58
    },
    {
        name: 'Venomancer',
        id: 59
    },
    {
        name: 'WarpwoodSage',
        id: 60
    },
    {
        name: 'WaterSpirit',
        id: 61
    },
    {
        name: 'Werewolf',
        id: 62
    },
    {
        name: 'WindRanger',
        id: 63
    },
    {
        name: 'WinterChiropteran',
        id: 64
    },
    {
        name: 'WisperSeer',
        id: 65
    }
]



// builder
const builder = document.querySelector(".builder");
const panelHeroes = document.querySelector(".panel-heroes");
const recommendedHeroes = document.querySelector(".recommended-heroes");

const choosenHeroes = [];//массив для выбраных(поставленных на поле) героев    

function renderPanelHeroes() {
    panelHeroes.innerHTML = "";
    heroes.forEach(hero => {
        const img = document.createElement('img');
        img.src = `images/face/${hero.name}.png`;
        if (choosenHeroes.includes(hero)) { // если герой в массиве то прозрачность
            img.style.opacity = ".5";
        } else {
            img.onclick = () => {
                chooseHeroAndToggle(hero);
            };
        }
        panelHeroes.appendChild(img);//Новый элемент на панеле
    });
    recommend();
}

renderPanelHeroes();

function recommend() { // spread(... - расширение)
    const races = [...new Set(choosenHeroes.map(hero => hero.race))];//при выборе героя выдает новый массив с расами
    const heroesByRaces = heroes.filter(hero => !choosenHeroes.includes(hero)).filter(hero => races.includes(hero.race));//исключить уже выбраных героев из choosenHeroes и вернуть тех кто есть в массиве с расы
    const classes = [...new Set(choosenHeroes.map(hero => hero.class))];//при выборе героя выдает новый массив с классами
    const heroesByClasses = heroes.filter(hero => !choosenHeroes.includes(hero)).filter(hero => classes.includes(hero.class));

    const heroesIntersection = heroesByRaces.filter(hero => heroesByClasses.includes(hero));//искать пересечение и сохранить совпадение рас и класса

    const result = [
        ...heroesIntersection,
        ...heroesByRaces.filter(hero => !heroesIntersection.includes(hero)),//фильтр на расу и класс чтоб не выдавало повторно
        ...heroesByClasses.filter(hero => !heroesIntersection.includes(hero))
    ];

    recommendedHeroes.innerHTML = "";//добавляем в HTML
    result.forEach(hero => {
        const img = document.createElement('img');
        img.src = `images/face/${hero.name}.png`;
        img.onclick = () => {
            chooseHero(hero);
        };
        recommendedHeroes.appendChild(img);
    });
}


function togglePanelHeroes() {
    if (panelHeroes.style.display === "none") {//если скрыта
        panelHeroes.style.display = "block";//показываем
    } else {
        panelHeroes.style.display = "none";//обратно
    }
}

function chooseHeroAndToggle(hero) { //
    togglePanelHeroes();//скрыть панель
    chooseHero(hero);//выбрать героя
}

function chooseHero(hero) {//выбрать героя
    if (!choosenHeroes.includes(hero)) {//если его нет в списке
        choosenHeroes.push(hero);//тогда проиходит след добавляем в массив
        const img = document.createElement('img');
        img.src = `images/face/${hero.name}.png`;//атрибут картинки
        builder.appendChild(img);//добавляет в конец первого картинку
        renderPanelHeroes();//перерисовать картинку панель херойс
    }
}
