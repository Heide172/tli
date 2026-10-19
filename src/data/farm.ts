import {type PartSource} from '#/lib/content'

export const part: PartSource = {
  id: 'farm',
  num: 3,
  title: 'Фарм',
  short: 'Фарм',
  lead: 'Валюты, официальная механика дропа, стратегии по этапам (T7, TM8, Profound), фарм через механики, торговля. Цифры FE/час от продавцов валюты и ютуберов помечены [продавец] и [ютуб]: это их заявления, не замеры. Данные SS13 и старше могут не совпадать с SS14.',
  updatedAt: '2026-10-19',
  articles: [
    {
      id: 'currencies',
      title: 'Валюты и ресурсы',
      blocks: [
        {
          kind: 'table',
          head: ['Ресурс', 'Что это', 'Где падает', 'Ориентир ценности'],
          rows: [
            [
              'Flame Elementium (FE)',
              'основная валюта; с SS14 единственная валюта Trade House; крафт аффиксов на ilvl 86+',
              'везде в Netherrealm, заметно с TM5, массово с T7–T8; стаки 1/6/10/20, в Profound по 50',
              '1,0 (база)',
            ],
            [
              'Flame Sand',
              'крафт аффиксов на ilvl 76–85',
              'везде (Fuel)',
              'дорог только в первые дни сезона; в SS13 пачка 9 999 шт. за 2–3 FE',
            ],
            [
              'Flame Dust',
              'крафт белого/синего гира',
              'везде (Fuel)',
              'низкая',
            ],
            [
              'Flame Fuel',
              'не предмет, а категория: FE + Sand + Dust; аффиксы «+X% Flame Fuel Drop Quantity» действуют на всю категорию',
              'везде',
              'в SS13-замере бикон-фарма 42,6% дохода',
            ],
            [
              'Energy Core',
              'реролл Energy предмета у Geely (Empower)',
              'везде',
              'цен нет',
            ],
            [
              'Embers (Precious / Matchless / Ultimate / Truth)',
              'крафт: тип угля задаёт пул аффиксов; Truth реролл значений',
              'везде; массово God of Might и Dark Surge; Captain Shadow 60% шанс 1–3 с босса',
              'SS14: Precious пик после 1-го дня, Matchless дороги в день 1, Ultimate дорожают к Profound',
            ],
            [
              'Beacons',
              'билет в карту; Rank 5 → TM8 Near Space, Rank 5+ (Deep Space Beacon) → Deep Space; 3 одинаковых → 1 следующего ранга',
              'T7 Watcher в TM7-2 даёт 2 TM8-маяка; Nightmare TM8 пузыри Precious+ (SS14)',
              'TM8-маяк 4–5 FE (июль 2026); в SS14 через дни ниже 2–3 FE',
            ],
            [
              'Netherrealm Resonance',
              'базовые аффиксы на карту (до 6 на T8): +quantity, +rarity, +опасность; 3 ресета',
              'везде, часто',
              'SS13: 75% quantity ≈ 16 резонанса ≈ 0,6 FE на карту',
            ],
            [
              'Compasses и Astrolabes',
              'расходник на карту; лимит T8 — 3–4 слота плюс сезонный',
              'боссы и Goddess of Hunting; легендарные с TM8 (SS14)',
              'синий ~1,5 FE (SS13); удачный 50–60 FE; Narrow +30% к дропу компасов',
            ],
            [
              'Memory Scraps / Threads',
              'прокачка Hero Memories; Threads из разбора памятей',
              'Blacksail; легендарные памяти только Blacksail',
              'SS14: TM8 Blacksail даёт ×2 Scraps против TM7; оранжевые Threads ~1 FE в первые дни',
            ],
            [
              'Soul Candles',
              'слот на экране навыков с ур. 75; слияние у Kandel',
              'только City of Aeterna',
              'цен нет',
            ],
            [
              'Divinity Slates',
              "таланты Statue of the New God; Nether King's Divinity отдельный тип",
              'нелегендарные везде, массово Cube; легендарные только Cube',
              'SS14: Malice Judge даёт 50–60 слейтов → 1–2 FE, пока FE дорог',
            ],
            [
              'Winding Keys',
              'товар Commodities (откат Void Chart)',
              'узлы Void Chart',
              '~1,1 FE (июль 2026)',
            ],
            [
              'Resident Eyes',
              'вход в Mistville',
              'редкие мобы с иконкой портала',
              '~0,6 FE (июль 2026); SS14 ~1 FE в первые дни, потом ~0,5',
            ],
            [
              'Aeterna Reverberations',
              'вход в Ruins of Aeterna',
              'паки Kin of Aeterna',
              'Fleeting дороги первые дни, Eternal наоборот',
            ],
            [
              'Snowpaper',
              'товар Painted Snowfield',
              'нода «dyed snow monsters»',
              '0,07–0,086 FE/шт (июль 2026)',
            ],
            [
              'Plane Watcher Starshards',
              "вход на Watcher'а",
              'боссы стадий с нодами +Starshard',
              '4 осколка → 1 TM8-маяк через T7-2 Watcher',
            ],
            [
              'Hazes',
              'дорогой дроп Overrealm',
              'Overrealm (портал), TM8',
              '~100 FE базовые, 300–500 дорогие в день 1 SS14',
            ],
            [
              'Familiar Nexus, Edicts',
              'Nexus — Darkest Corrosion; Edicts — вход к Keegan',
              'Keegan 50% / Uber 100%',
              'SS13: Nexus 44–48 FE; 4 эдикта ~21 FE',
            ],
            [
              'Confusion Cards',
              'аффиксы стадии; карта с ней всегда +100% quantity',
              'Chaos Invasion',
              'SS11: Rainbow ~1000 FE, Legendary ~100 FE',
            ],
            [
              "Warden's Cache (SS14)",
              'сундук Tartarus, качество = редкость заключённого',
              'бунт',
              'reddit 19.10: 5–15 FE за тюрьму без quant, ~80 с full-quant Cube-картами',
            ],
            [
              'Primocryst',
              'платная валюта: ячейки, косметика, крутки пактов',
              'донат, события, коды',
              'в FE напрямую не конвертируется',
            ],
          ],
          wrapFirst: true,
        },
        {
          kind: 'note',
          tone: 'cold',
          text: 'Flame Residue и Fossils (Acute/Spiral) — термины беты 2022 года, в текущем справочнике их нет.',
        },
      ],
    },
    {
      id: 'drop-mechanics',
      title: 'Механика дропа (официально)',
      blocks: [
        {
          kind: 'formula',
          text: 'Дроп = база × (1 + Σ drop quantity) × Π(1 + additional drop quantity) × (1 + Σ quantity по типу, например Fuel)',
        },
        {
          kind: 'list',
          items: [
            'Quantity не меняет веса предметов в таблице. «Additional drops» («1% шанс +1 FE с монстра») не умножаются quantity/rarity, но подвержены конверсии и дублированию.',
            'Конверсия («Gear drops have X% chance to become Fuel») применяется после quantity; при сумме выше 100% шансы нормируются. Дублирование считается последним шагом, независимо по каждому аффиксу.',
            'Drop rarity влияет только на редкость гира и памятей; боссы имеют повышенную rarity. Для FE важнее quantity.',
            'Deep Space: нет роста сложности, выше quantity, вход только Rank 5+. SS14: негативные аффиксы там по умолчанию как в Profound, усиленные только при Deep Space Resonance.',
            'Рецепт «How to Get Rich» из справочника: резонанс до максимума аффиксов, 3 дроп-пактдуха, фильтр лута, скрывающий дешёвое.',
          ],
        },
      ],
    },
    {
      id: 't7',
      title: 'Ранний эндгейм: Timemark 7',
      blocks: [
        {
          kind: 'h4',
          text: 'План Ben на SS14 («What to Farm F2P», 13.10.2026) [ютуб]',
        },
        {
          kind: 'list',
          items: [
            'Void Chart: 42 очка = 15 Blacksail (100% появление) + 27 Cube (15 Cube всегда, 12 Malice Judge). Затем вернуть ноды на Embers.',
            'Cube Malice Judge: 50–60 Divinity Slates с судьи → 1–2 FE, «хорошо в первые дни, пока FE дорог». Судьи трудно убиваются.',
            'Узкое место фреш-аккаунта в T7 — угли: либо God of Might (life-билд, фляжка, ~60 fire res), либо купить готовое оружие.',
            "После Traveler T7: Starshard-ноды, спам TM7-0, Watcher'ы в TM7-2 (Steel Watcher за амулет и 2 TM8-маяка), маяки продавать. Cube сменить на Resident Eyes / Aeterna Reverbs по ценам.",
            'Очки Void Chart: 40/92 за T7, 50/92 за T7-2, 55/92 за T8-0, 70/92 за Profound, 92/92 с Path of Progression.',
            '**Starshard boss rush** на дни 1–4 (пока TM8-маяки дороже 2–3 FE): все ноды +Starshard, короткие карты, только босс, осколки сдавать в T7-2.',
          ],
        },
        {kind: 'h4', text: 'T7 boss rush (SS13, июль–август 2026)'},
        {
          kind: 'list',
          items: [
            'mmoexp 20.07 [продавец]: Voidlands-дерево, нода «−50% общего дропа, пропуск пререквизитов»; без легендарных лут-пактов приоритет Star Shard; Goddess of Hunting на репликацию боссов; ноды резонанса в приоритете; карта T7-0 Filthy Forest, сдача в T7-2. Заявлено >600 FE/час; механика лиги с пактами ~200.',
            'CoffeeBns 18.07 [ютуб]: 600 FE/час без лиговых пактов. Nirtas 14.08 [ютуб]: F2P 400 FE/час. IGGM 01.08 [продавец]: 500–600 FE/час, только финальный босс, 15–20 с на карту; Blacksail-маршрут с 50% Lord of the Void Sea (Starfish Chanter ур. 1).',
            "Maxroll 2024 [устарело]: 7-0 вместо 7-2 (больше Watcher'ов в час), AoE + скорость, «стабильно, но не максимум».",
          ],
        },
      ],
    },
    {
      id: 'tm8',
      title: 'TM8 Near Space без легендарных дроп-пактов',
      blocks: [
        {kind: 'h4', text: 'SS14'},
        {
          kind: 'list',
          items: [
            'Ben 13.10 [ютуб]: Blacksail 15 или 23 очка — «легко», ×2 Scraps против T7 плюс оранжевые Threads (~1 FE). Overrealm door knocking 15 очков (день 1–2): клик по порталу, убить вышедших мобов, внутрь не заходить; гир с шансом T1 и Hazes (1–2 на ~100 карт при 75% quant; 100 FE базовые, 300–500 дорогие). Дальше одно из трёх по ценам: Aeterna Reverbs, Resident Eyes, Hunting. Beacon farm «ждём инфу к середине сезона».',
            'Corealis 18.10 [ютуб]: Resident Eyes + механика лиги, «400+ FE/час в TM8».',
            'reddit 19.10: лут тюрьмы Tartarus, судя по малой выборке, масштабируется quantity карт: boss rush без quant 5–15 FE за тюрьму, full-quant Cube-карты ~80 FE. Не ясно, снапшотится ли quant последней карты.',
          ],
        },
        {kind: 'h4', text: 'SS13 (июль–август 2026)'},
        {
          kind: 'table',
          head: ['Стратегия', 'Настройка', 'Заявлено'],
          rows: [
            [
              'Glacial Zone TM82 beacon farm (mmoexp 24/31.07)',
              '100% резонанс, без компасов, God of War 31 очко, Commodities 21 (Glacial Beacon, Magic Monsters, репликация маяков), пакты Surgeon Gold + Chalk Spirit + Fuel-пакт; пропускать Strongbox и Blacksail, Cube брать',
              '882 FE/час (16,6 FE/вход, 1–1,5 мин/карта, 110 зон); 40 карт/час ≈ 664, 55 ≈ 913',
            ],
            [
              'Thunderwaste TM8-1 (mmoexp 28–31.07)',
              "75% quantity за ~16 резонанса, лигу пропускать, Dream триггерить ради Queen's Grace, в Nightmare не входить; амулет с босса 500–600 FE",
              '~700 FE/час (696 на 101 карте)',
            ],
            [
              'TM80/82 (mmoexp 29.07)',
              'Cloud Gatherer ур. 6 + второй Fuel-пакт + ~38% Drop Quantity; нода «12% additional Drop Quantity»; Winding Keys вместо Sand; 15 очков Sand Lord',
              '700–800 FE/час при 80/92 Star Talents и 28–33 млрд DPS',
            ],
            [
              'TM8 Beacon + Eye (mmoexp 28.07)',
              'ноды +дроп маяков, дублирование, рар-монстры; 2 FE-пакта + quantity-пакт; 4 аффикса на карту; цель 1 мин/карта',
              '700–800 заявлено, по данным самой статьи ~375 (1 253 FE за 200 карт)',
            ],
            [
              'T8 Snowpaper, Thirsty Mines (mmoexp 29.07)',
              'без пактов, один фиолетовый компас, 30–35 с/карта',
              '600–700, при 15–20 с «до 1 000»',
            ],
            [
              'TM8 Afterlight rush (Nirtas 28.08) [ютуб]',
              'F2P',
              '1 000 FE/час',
            ],
            [
              'TM8 boss rush на приглашениях (Nirtas 16.08) [ютуб]',
              'TM8',
              '700 FE/час',
            ],
            [
              'Aeterna + Mistral (mmoexp 18.07)',
              'линейные карты, покупные синие/фиолетовые пакты',
              '~250 реальных / 320 внутрикартовых FE/час',
            ],
          ],
          wrapFirst: true,
        },
      ],
    },
    {
      id: 'profound',
      title: 'Profound и Deep Space с легендарными пактами',
      blocks: [
        {
          kind: 'table',
          head: ['Стратегия', 'Требования', 'Заявлено'],
          rows: [
            [
              'Deep Space beacon farm (IGGM 13.02.2026, SS11)',
              '≥1 трлн DPS, полный Beacon-tree, 4 компаса, Chalk Spirit',
              '~3 000–3 300 FE/час (10 000 за 3 часа)',
            ],
            [
              'Creation Engine (IGGM 03.05.2026, SS12)',
              '~2 трлн DPS, 2 легендарных Creation-компаса, Deep Space Resonance, Kong',
              '1 500–2 000 без Kong, 2 500–3 000 с Kong; Fluorescent Memories 38% дохода',
            ],
            [
              '«Три бога» chest farm (mmoexp 06.08.2026)',
              'War + Hunt + Machines, ≥500 млрд DPS, фиолетовые компасы 22–28 FE',
              '1 500–2 800 (внутренние противоречия в статье)',
            ],
            [
              'Sandlord Profound (mmoexp 31.07.2026)',
              'Moon Shadow Guide + Chalk + Captain Shadow, без компасов',
              '~1 100 после налога (168 карт за 3 ч 54 мин)',
            ],
            [
              'Uber Keegan (mmoexp, IGGM 03–06.08.2026)',
              '1–2 трлн DPS, эдикты ~21 FE/ран',
              '1 000–2 000 (Nexus 44–48 FE за ~60 с)',
            ],
            [
              'Afterlight rush Profound (Nirtas 30.08.2026) [ютуб]',
              'Profound',
              '1 500 FE/час',
            ],
          ],
          wrapFirst: true,
        },
        {
          kind: 'note',
          text: 'reddit 17–19.10.2026 (SS14): Kong (C6) оправдан только в Profound при 2–3 трлн+ DPS; при 40–50 млрд DPS в TM8-2 «1k+ FE/час не ждать». На большинстве механик Deep Space «в минус», выигрывают дорогие компас-стратегии.',
        },
      ],
    },
    {
      id: 'pacts-setup',
      title: 'Настройка дроп-пактдухов',
      blocks: [
        {
          kind: 'list',
          items: [
            'Приоритет тройки (mmoexp 30.07.2026): максимум Flame Fuel → второй Fuel-бонус → ~38% Item Quantity. В SS14 есть встроенный просмотр эффектов пактов.',
            'Chalk Spirit: 1% шанс доп. стака FE с монстра, +32% FE quantity, +12% IQ. Captain Shadow: 60% шанс 1–3 Embers с босса, +24% Ember drop, +12% IQ. Cloudgatherer Surging Gold / Happy Chonky — бесплатные Fuel-пакты (в SS14 выдаются ивентом). Kong — Fluorescent Memories (Profound). Moon Shadow Guide — Sandlord. Starfish Chanter — Blacksail. Dorothy — компасы (по мнению игроков FE/час ниже среднего).',
            "Twin Inquisitors (SS14): +1–2% Warden's Cache quantity ×3, 18% → 28% дублирование предметов тайника, 8% → 16% повторное открытие, +1 refresh орудий. [патч]",
            'SS14 стартовые подарки: Legendary Drop Pactspirit Selection Pack за 7 дней входов, 30 круток Battle Pactspirit, Pactspirit Rally (одна из трёх групп: легендарный T1 + редкий T4 + магический T6).',
          ],
        },
      ],
    },
    {
      id: 'filters',
      title: 'Фильтр лута и трекеры',
      blocks: [
        {
          kind: 'list',
          items: [
            'Официальные фильтры (basic/intermediate/advanced) в Settings → Loot; кастомные по типу/уровню/аффиксам, шаринг кодом. В SS14 «loot filter priority» ускоряет выпадение, скрытые предметы не занимают время дропа.',
            'Под Keegan: Legendary Gear → условие «Drop has been Corroded».',
            'Коды фильтров сообщества (Gooba03, 01.08.2026): Duckge `p_gcp_singapore|Xz8cHD12EfGS0QAAAAAA6A`, Mamo `p_gcp_singapore|jozjnDx6EfGvtQAAAAAETg`, DonTheCrown `p_gcp_lowa|UwmcVUtFEfGwywAAAAAAKg`. Применять: Drop Filters → Create → from Shared Code.',
            'Трекеры FE/час: TLI Companion (tlicompanion.com, Windows, читает лог игры, сравнение с сообществом), TLI-tracker-translated (github Giboork).',
          ],
        },
      ],
    },
    {
      id: 'by-mechanic',
      title: 'Фарм через механики',
      blocks: [
        {
          kind: 'table',
          head: ['Механика', 'Что и как фармить'],
          rows: [
            [
              'Blacksail',
              'три режима (Ben, SS14): wealth (Scraps/Threads), invitation (Void Sea Invitations на Lord of the Void Sea), memory (легендарные Hero Memories, только Deep Space с пактом ур. 6). Якорь раз в несколько карт → пират-босс + сундук; синий/фиолетовый компас удваивает прогресс. Nirtas SS12: 1 222 FE/час на приглашениях F2P [ютуб]',
            ],
            [
              'Hunt / Goddess of Hunting',
              'статуя перед боссом: баффы босса и пул награды (Commodities / Fluorescent / Legendary). Дроп: TM7 Ecliptic Astrolabe, TM8 + Vast Ecliptic, Profound + Ascendant. SS14: средняя нода +135% quantity наград босса (Roaming, босс сильнее); Encirclement 53% → 80%',
            ],
            [
              'Oasis / Sandlord',
              'внекартовый доход: 4 глайдера по 16 800 монет, дирижабли ~каждые 35 мин; цикл «глайдеры → 30–35 карт → Oasis → Blacksail → Hunt → глайдеры» 1–1,5 ч (mmoexp 30.07: 1 000 F2P / 1 500 с пактами). Sandlord Profound ~1 100 FE/час',
            ],
            [
              'Aeterna',
              'City of Aeterna тир до 20; Soul Candles и Candle Tears только тут; Reverberations на паках Kin of Aeterna. SS14: «снижена добыча Fuel в Aeterna». Старый замер SS3: 756 FE/час [устарело]',
            ],
            [
              'Mistville',
              'вне карт; Resident Eyes вход; Mist Essence и Activation Mediums; Raivy 19.10 гайд «как дойти до дня 15», цифр нет',
            ],
            [
              'God of Might',
              '15 волн элиток в круге; угли массово. IGGM SS11: Might-нода 100% встречи, конверсия Ultimate Ember → Flame Sand (140% Ember drop), 75% quantity; 500 FE/час без пактов, 750 с редкими; DPS ~10 млрд для 8-0, 20–40 млрд 8-1, >1 трлн 8-2. SS14: Irritable-Might дубль углей 15/20/40%',
            ],
            [
              'God of War',
              'скорость + base quantity; Maxroll 2024: «обычно удваивает FE/час»; SS14 Wild War Compass +2,8% шанса маяков за тир',
            ],
            [
              'Uber Keegan',
              '3 эдикта + Edict of Doom; 1–2 трлн DPS; Nexus 100% (44–48 FE), эдикты 17–21 FE → 19–27 FE чистыми за ~60 с; фильтр «Corroded»; вход Void Rift, эдикты с Trade House. Заявлено ≥1 000 FE/час, с Oasis до ~2 000',
            ],
            [
              'Supreme Showdown',
              'журнал-цель «уровень 7» даёт постоянные бонусы к дропу; доходных замеров нет',
            ],
            [
              'Afterlight',
              'с SS14 постоянная; компасы Afterlight/Phantom/All-Evil/Eternal. Замеры SS13: Nirtas 1 000 (TM8) / 1 500 (Profound) [ютуб]; mmoexp от «−25% FE/час» до «1 000 гарантированно» [продавец, противоречиво]',
            ],
            [
              'Cube of Rapacity',
              'Divinity Slates (легендарные только здесь); Malice Judge; SS14 нерф дублирования кристаллов (Wild Imagination 25/38/76% → 10/15/30%)',
            ],
            [
              'Creation Engine',
              'Profound/Deep Space с ~2 трлн DPS; SS14 компас Cruising Mechanical; снижен дроп резонанса из Creation Crystals',
            ],
          ],
          wrapFirst: true,
        },
      ],
    },
    {
      id: 'tartarus-income',
      title: 'Tartarus (SS14): что известно о доходности',
      blocks: [
        {
          kind: 'list',
          items: [
            "Проверенных замеров FE/час нет (сезону три дня). Единственные числа: reddit 19.10 — 5–15 FE за тюрьму при boss rush без quant против ~80 FE при full-quant Cube-картах (выборка 4+4). Средняя ценность Warden's Cache не установлена.",
            "Оптимизация доски: симулятор CoffeeBns (5,5 млн прогонов): 3,49 Rainbow за прогон против 1,25 у «простого игрока»; лучшие орудия Iron Crown (2,70), Hangman's Noose (2,23), пара Noose + Severed Iron Maiden 15,45; худшее Squirming Iron Box (0,54).",
            'Единственный целевой множитель — пакт Twin Inquisitors. Сезонные компасы Shackles +10/30/80% quantity тайников ценой −45/−70% урона по монстрам.',
            'Второй ресурс: Letters of Introduction → Followers, торгуемы, цен пока нет.',
          ],
        },
      ],
    },
    {
      id: 'trade',
      title: 'Торговля: налог, что продавать',
      blocks: [
        {
          kind: 'list',
          items: [
            'Налог: принцип справочника «при получении нескольких единиц одной валюты удерживается 1». SS1: 1 из 7, первые 100 FE без налога, после 10 000 FE выручки 1 из 4; с SS2: 1 из 8 (12,5%), первые 200 FE без налога. Порог 10 000 для SS14 не подтверждён. Trade Exemption Tickets / Jona Tax Vouchers (1 = 1 FE) возвращают налог.',
            'Что продавать: маяки TM8/Glacial/Deep Space; компасы и астролябии (Ecliptic ликвидны); Netherrealm Resonance; Embers (Precious/Matchless в первую неделю, Ultimate позже); Memory Scraps/Threads (SS14: спрос выше из-за автокрафта); Hero Memories/Relics; массовые дешёвые товары (Snowpaper, Winding Keys, Resident Eyes, Reverberations) только через Commodity-вкладку пачками; Divinity Slates; легендарный гир после price check; Hazes и амулеты с боссов; Followers и письма (SS14).',
            'Советы: не демпинговать востребованные стаки (Nexus); дорогие вещи могут висеть неделю при верной цене; проверять Commodity-вкладку с заявками покупателей; считать прибыль за вычетом маяков, компасов, резонанса и налога; с 1-го дня «большая часть FE приходит с продаж, не с дропа».',
          ],
        },
      ],
    },
    {
      id: 'summary',
      title: 'Сводная таблица стратегий',
      blocks: [
        {
          kind: 'table',
          head: [
            'Стратегия',
            'Сезон, дата',
            'Требования',
            'FE/час (заявлено)',
            'Источник',
          ],
          rows: [
            [
              'T7 Starshard boss rush → TM8-маяки',
              'SS14, 13.10',
              'ноды Starshard, 4 осколка = 1 маяк',
              'нет цифр',
              'Ben [ютуб]',
            ],
            [
              'T7 Blacksail 15 + Cube Malice Judge 27',
              'SS14, 13.10',
              '42 очка Void Chart',
              '1–2 FE за судью',
              'Ben [ютуб]',
            ],
            [
              'T7 boss rush F2P',
              'SS13, 14.08',
              'без пактов',
              '400',
              'Nirtas [ютуб]',
            ],
            [
              'T7 boss rush',
              'SS13, 18–20.07',
              'быстрый убийца боссов',
              '600',
              'CoffeeBns, mmoexp',
            ],
            [
              'TM8 Resident Eyes + механика',
              'SS14, 18.10',
              'TM8',
              '400+',
              'Corealis [ютуб]',
            ],
            [
              'TM82 Glacial Zone beacon farm',
              'SS13, 24/31.07',
              '100% резонанс, 3 Fuel-пакта',
              '882',
              'mmoexp [продавец]',
            ],
            [
              'TM8-1 Thunderwaste',
              'SS13, 28–31.07',
              '75% quant, без компасов',
              '~700',
              'mmoexp [продавец]',
            ],
            [
              'T8 Snowpaper',
              'SS13, 29.07',
              '30–35 с/карта',
              '600–700',
              'mmoexp [продавец]',
            ],
            [
              'TM8 Afterlight rush F2P',
              'SS13, 28.08',
              'TM8',
              '1 000',
              'Nirtas [ютуб]',
            ],
            [
              'Blacksail + Hunt + Oasis цикл',
              'SS13, 30.07',
              'T8',
              '1 000 / 1 500',
              'mmoexp [продавец]',
            ],
            [
              'God of Might ember farm',
              'SS11, 14.02',
              'Might-нода, 10 млрд DPS (8-0)',
              '500 / 750',
              'IGGM [продавец]',
            ],
            [
              'Uber Keegan',
              'SS13, 03–06.08',
              '1–2 трлн DPS',
              '1 000 (с Oasis ~2 000)',
              'mmoexp, IGGM',
            ],
            [
              'Sandlord Profound',
              'SS13, 31.07',
              'Profound',
              '~1 100',
              'mmoexp [продавец]',
            ],
            [
              'Afterlight rush Profound F2P',
              'SS13, 30.08',
              'Profound',
              '1 500',
              'Nirtas [ютуб]',
            ],
            [
              '«Три бога» chest farm',
              'SS13, 06.08',
              '≥500 млрд DPS',
              '1 500–2 800',
              'mmoexp [продавец]',
            ],
            [
              'Creation Engine',
              'SS12, 03.05',
              '~2 трлн DPS, Kong',
              '2 500–3 000',
              'IGGM [продавец]',
            ],
            [
              'Deep Space beacon farm',
              'SS11, 13.02',
              '≥1 трлн DPS',
              '~3 000',
              'IGGM [продавец]',
            ],
            [
              'Tartarus (тюрьма)',
              'SS14, 19.10',
              'quant карт',
              '5–15 / ~80 FE за тюрьму',
              'reddit',
            ],
          ],
          wrapFirst: true,
        },
        {
          kind: 'p',
          text: 'Повторяющиеся закономерности: quantity важнее rarity; скорость карты (≤1 мин) важнее полной зачистки; синие компасы без сильных карт обычно в минус; 100+ карт на стратегию до выводов; первые дни сезона продавать то, что нужно крафтерам, позже маяки и Profound-товары; считать чистую прибыль после расходников и налога.',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Game Manual: Drop Mechanics, How to Get Rich, Trade House',
      url: 'https://legacy.torchcodex.com/latest/en/manual.html',
    },
    {title: 'Патчноуты SS14', url: 'https://torchlight.xd.com/ss14pn/?lang=en'},
    {
      title: 'Ben: таблица «What to Farm F2P» SS14',
      url: 'https://docs.google.com/spreadsheets/d/1tzhX858LchzozakT_4UVw3jKOV4iaJzHgXmrYfc-rZY',
      note: '13.10.2026',
    },
    {
      title: 'mmoexp: TM8 farming 700–800 FE/h',
      url: 'https://www.mmoexp.com/News/torchlight-infinite-tm8-farming-guide-best-strategy-to-earn-700-800-flame-elementium-per-hour-without-legendary-pactspirits.html',
      note: 'продавец',
    },
    {
      title: 'mmoexp: Glacial Zone beacon farm',
      url: 'https://www.mmoexp.com/News/torchlight-infinite-season-13-farming-guide-best-t8-farm-for-flame-fuel-beacons-and-900-fe-per-hour.html',
      note: 'продавец',
    },
    {
      title: 'mmoexp: Black Sail + Hunt + Oasis',
      url: 'https://www.mmoexp.com/News/torchlight-infinite-best-fe-farming-strategy-earn-1-000-1-500-flame-elementium-per-hour-with-black-sail-hunt-oasis.html',
      note: 'продавец',
    },
    {
      title: 'mmoexp: Uber Keegan',
      url: 'https://www.mmoexp.com/News/torchlight-infinite-afterlight-season-guide-how-to-farm-1-000-flame-elementium-per-hour-with-uber-keegan-boss-strategy.html',
      note: 'продавец',
    },
    {
      title: 'IGGM: God of Might ember farming',
      url: 'https://www.iggm.com/news/torchlight-infinite-ss11-god-of-might-ember-farming-guide',
      note: 'продавец',
    },
    {
      title: 'IGGM: Deep Space beacon strategy',
      url: 'https://www.iggm.com/news/torchlight-infinite-ss11-t8-deep-space-beacon-strategy-earn-more-fe-without-pets',
      note: 'продавец',
    },
    {
      title: 'vhpg: SS14 currency farming',
      url: 'https://www.vhpg.com/torchlight-infinite-ss14-currency-farming/',
      note: '18.10.2026',
    },
    {
      title: 'reddit: League mechanic scaling',
      url: 'https://www.reddit.com/r/TorchlightInfinite/comments/1xa22bn/league_mechanic_scaling/',
      note: '19.10.2026',
    },
    {
      title: 'Nirtas: стратегии',
      url: 'https://tlicompendium.com/en/farming-strategies/nirtas-farming-guide',
    },
    {title: 'TLI Companion (трекер FE/час)', url: 'https://tlicompanion.com'},
    {
      title: 'Dev Blog #25: Trade House',
      url: 'https://www.taptap.io/post/3785063',
      note: '2022',
    },
  ],
}
