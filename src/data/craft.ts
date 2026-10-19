import {type PartSource} from '#/lib/content'

export const part: PartSource = {
  id: 'craft',
  num: 4,
  title: 'Крафт',
  short: 'Крафт',
  lead: 'Структура предмета, крафт у Geely, коррозия, Empower, Hero Memories, Soul Candles, Divinity Slates, легендарки и Graft. Справочник игры местами отстаёт от клиента, расхождения и даты отмечены.',
  updatedAt: '2026-10-19',
  articles: [
    {
      id: 'caveats',
      title: 'Что важно знать до чтения',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Справочник частично устарел** (версия до SS13): в нём нет Nether King's Divinity, Followers, Memory Revival, зато есть Dream Interpretation.",
            '**Dream Interpretation удалён в SS13 «Afterlight»** (16.07.2026, официальные патчноуты и Steam-анонс: «retired in favor of a reworked gear affix experience»). Предметы с Dream-аффиксами на постоянном сервере не работают, их можно только откатить (rewind) у Patty. Dream Talking больше не падает.',
            '**Flame Forger — босс, а не крафт.** В SS14 только визуальный ремейк. Единственное крафтовое изменение SS14: новый стиль UI экранов Craft и крафта слейтов, числовых изменений не заявлено.',
            '**Названия Embers расходятся**: дев-блог 2023 — Fine / Precious / Exquisite / Truth; гайд IGGM (апрель 2026, SS12) — Basic ← Precious, Advanced ← Matchless, Ultimate ← Ultimate Ember, плюс Truth. Точные текущие названия смотреть во вкладке Craft у Geely.',
            '**Prototype Crafting / Targeted Processing** из дев-блога 2023 в справочнике отсутствуют; гайды 2025–2026 описывают слотовую систему с пулами. Считать систему 2023 года устаревшей.',
          ],
        },
      ],
    },
    {
      id: 'item-structure',
      title: 'Структура предмета',
      blocks: [
        {
          kind: 'list',
          items: [
            '**Редкости**: Normal (белый, 0 случайных аффиксов), Magic (синий, 1–2), Rare (фиолетовый, 3–5), Epic (розовый, 6), Legendary (золотой), Ultimate Legendary (красный). Первые четыре вместе «non-Legendary gear». tlidb делит легендарки на Precious, Matchless и Ultimate.',
            '**Item Level (ilvl)** определяет диапазон Gear Energy, диапазон возможных аффиксов и их максимальный тир. **Priceless** = non-Legendary с ilvl 100; только его можно крафтить Ultimate-аффиксами.',
            '**Gear Energy**: случайное значение по ilvl, открывает слоты сапп-навыков; появляется с ilvl 45, максимум растёт до ilvl 80; больше всего у нагрудника и двуручного оружия, у амулетов, колец и поясов нет. Перебрасывается Empower.',
            '**Аффиксы**: Base Stats (по названию базы, не меняются), Base Affixes (у Priceless шанс минимум на 2; их заменяет Mutate при коррозии; в SS14 новые Ultimate base affixes для оружия вроде «Main Skill is supported by Lv. 10 Quick Decision»), Random Affixes (до 3 префиксов и 3 суффиксов, только они меняются крафтом), Legendary Affixes (только у легендарок).',
            '**Тиры**: высший T0, далее T1, T2… Тир ограничен ilvl (кольцо ниже ilvl 85 давало максимум T2, с 86 T1). В интерфейсе тир виден по цветной рамке.',
            '**Пулы аффиксов**: Basic, Advanced, Ultimate. Лимиты: не больше 2 Advanced и 2 Ultimate на предмет, Ultimate только на Priceless. Примеры для Claw: Basic «+(77–108)% Melee Damage», Advanced «+(64–90) Strength», Ultimate «+3 to Attack Skill Level», «+(22–30)% Elemental and Erosion Resistance Penetration». В SS14 «Frostbite value cap» на кольцах переведён из Advanced в Ultimate.',
            'Другие источники аффиксов: Blending Rituals (пояса, Aromatic Materials), TOWER Sequence (последовательности на оружии: Basic/Intermediate/Deep), Vorax Limb (базы для Graft).',
          ],
        },
      ],
    },
    {
      id: 'geely',
      title: 'Крафт у Geely: правила и стоимость',
      blocks: [
        {
          kind: 'list',
          items: [
            'NPC Arms Dealer – Geely в городе, только non-Legendary gear. Выбираешь слот (конкретный префикс или суффикс) и пул (Basic/Advanced/Ultimate), результат — случайный аффикс из пула со случайным тиром в пределах ilvl. Тратятся Embers соответствующего пула и Flame Fuel.',
            '**Truth Ember** перебрасывает значения всех Random Affixes без смены тиров.',
            'Чем больше аффиксов уже на предмете, тем дороже попытка (таблица vhpg 2022: 0 аффиксов = 1 Flame Dust, 5 = 1 FE, 6 = 20 FE; цифры старые, ориентир).',
            'После Corrosion крафт либо вдвое дороже (Maxroll 2024, vhpg), либо недоступен вовсе (дев-блог 2023); справочник прямо не говорит. Общий совет: сначала доделать аффиксы, потом корродировать.',
            '**Auto Craft**: задать целевой аффикс и тир, крафт останавливается при попадании. В SS14 аналогичная автоматизация добавлена для Hero Memories.',
          ],
        },
      ],
    },
    {
      id: 'pool-shrinking',
      title: 'Приём «сужение пула» (pool shrinking)',
      blocks: [
        {
          kind: 'p',
          text: 'Повтор одного аффикса на предмете невозможен, поэтому уже стоящий аффикс исключается из пула. Из гайдов IGGM (SS12) и Item Level (SS7):',
        },
        {
          kind: 'list',
          items: [
            'Сначала ставят 2 «мусорных» Basic-аффикса, чтобы пул Basic из 8–9 вариантов сжать до 6–7, потом ловят нужный Basic.',
            'Перед Advanced/Ultimate зажать кнопку крафта и посмотреть число кандидатов в префиксах и суффиксах. Заполнитель (filler) ставят на сторону, где кандидатов больше; дорогие Ultimate катают на стороне с меньшим пулом (например Ultimate-префиксов 5, суффиксов 9 → оба filler-Ultimate в суффиксы, префикс остаётся 1 из 5).',
            'Лимит 2 Advanced / 2 Ultimate означает, что filler занимает лимит: заменять его потом придётся тем же пулом.',
          ],
        },
      ],
    },
    {
      id: 'recipe',
      title: 'Рецепт 6-аффиксного предмета',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'База: Priceless (ilvl 100) нужного типа. Купить на Trade House с уже готовыми 1–2 дорогими T1/T0 аффиксами (фильтр по типу, min ilvl, аффиксу) дешевле, чем крутить самому. Проверить Energy, при нужде Empower.',
            'Basic-слоты: 2 filler-Basic, затем целевой Basic (Auto Craft на нужный тир).',
            'Посчитать пулы Advanced для префиксов и суффиксов (зажать кнопку). Filler-Advanced на сторону с большим пулом, целевой на меньшей.',
            'То же для Ultimate (только Priceless, не больше 2).',
            'Типовой итог: префиксы Basic + Advanced + Ultimate, суффиксы Basic + Advanced + Ultimate (варианты 2 Advanced + 1 Basic и т. п.).',
            'Truth Ember: переброс значений в конце.',
            'Опционально: Corrosion, только когда аффиксы закончены; TOWER Sequence / Blending по типу базы.',
          ],
        },
        {
          kind: 'note',
          tone: 'cold',
          text: 'Fossils: по дев-блогу 2023 старые Acute/Spiral убраны, введены Stripping Fossil (удаляет случайный аффикс) и Streamlined Fossil (удаляет аффикс самого низкого тира). В справочнике и гайдах 2025–2026 фоссилы не упоминаются, статус не подтверждён.',
        },
      ],
    },
    {
      id: 'corrosion',
      title: 'Corrosion (коррозия)',
      blocks: [
        {
          kind: 'p',
          text: 'NPC The Lightless – Zenoth. Два вида: Darkness Corrosion и Darkest Corrosion. Предмет корродируется один раз.',
        },
        {
          kind: 'table',
          head: ['Исход', 'Эффект'],
          rows: [
            [
              'Mutate',
              'заменяет Base Affixes случайными Aember Base Affixes (tlidb: удаляет все, добавляет 1), предмет Corroded',
            ],
            ['Chaos', 'переброс значений всех аффиксов без смены тиров'],
            ['Arrogant', '1 префикс/суффикс +1–2 тира (tlidb: +1)'],
            ['Void', 'просто Corroded'],
            ['Desecration', 'только Darkest: 2 префикса/суффикса +1–2 тира'],
          ],
        },
        {
          kind: 'list',
          items: [
            '**Bound**: если результат не Arrogant и не Desecration, предмет привязывается.',
            'Стоимость (Maxroll 11.2024, могла измениться): Darkness — Aemberon Core по ilvl (1–59 → 1, 60–74 → 2, 75–79 → 4, 80–84 → 7, 85+ → 10); Darkest — 1 Familiar Nexus (с Keegan: обычный 50%, Uber 100%; в SS13 ~47–65 FE). Старые веса Darkest по vhpg: Mutation 30 / Chaos 30 / Desecration 15 / Arrogance 15 / Void 10, не считать точными.',
            '**Corroded-легендарки**: у легендарок есть Corroded-вариант с усиленными аффиксами (Realm Beyond Reach после коррозии меняет −1 на +1 ко всем уровням скиллов; Illusory Chimera 40–50% → 51–60% Movement Speed).',
            '**SS14, перчатки First Aember**: можно снова делать Darkest Corrosion уже корродированным; Mutate не удаляет Base Affixes и добавляет 1 Aember (до 4); Chaos со 100% удаляет случайный аффикс, но не биндит; Desecration заменяет на случайные Matchless Legendary Gloves; Void не биндит. Дроп: Caged Beast на Profound+.',
            'Примеры Corrosion Base Affixes (188 на tlidb): для Bow «+2 to Max Tenacity Blessing Stacks», «Lucky Critical Strike / (−50…−40)% Critical Strike Rating».',
          ],
        },
      ],
    },
    {
      id: 'dream',
      title: 'Dream Interpretation (удалён в SS13)',
      blocks: [
        {
          kind: 'p',
          text: 'Как работало: добавлял вместо Base Affixes ровно 1 Sweet Dream + 1 Nightmare (4 типа каждого, неразделимы). Shallow Dream без лимита; Deep Dream выше редкость, но 3 попытки, после них Readability исчерпана. Deep Dream требовал Dream Talking конкретной легендарки и давал её аффикс на крафтовой базе. Предмет после Dream нельзя крафтить; rewind возвращал исходное состояние; не больше 3 предметов с Dream-аффиксами одновременно. Сейчас роль «легендарный аффикс на крафтовой базе» закрывают Ultimate-аффиксы и Graft.',
        },
      ],
    },
    {
      id: 'empower',
      title: 'Empower (реролл энергии)',
      blocks: [
        {
          kind: 'p',
          text: 'У Geely, тратит Energy Cores: чем выше ilvl, тем больше ядер. Результат — случайное значение в диапазоне Energy по ilvl; при максимуме диапазона дальнейший Empower недоступен. Energy Cores падают везде и торгуются.',
        },
      ],
    },
    {
      id: 'memories',
      title: 'Hero Memories и Memory Revival',
      blocks: [
        {
          kind: 'list',
          items: [
            'Memory ставится в слот Hero Trait (слоты по уровню), уровень трейта = Trait Level памяти. NPC Skill Trader – Molina: Memory Scraps → Enhancement Level и Base Stats; после определённого уровня Trait Level или доп. Random Affix за Memory Threads нужного качества (из разбора памятей той же редкости). Memory Reconstruction — реролл Random Affixes (в SS14 авто-режим с целевым аффиксом и тиром).',
            '**Memory Revival** (SS12 → постоянная в SS13): Crude Lunar Dust → Rare (New Moon), Luminous → Epic (Half Moon), Flawless → Ultimate (Full Moon). SS14: Full Moon Revival можно повторять на той же Ultimate-памяти с выбором «до/после»; стоимость 1–10-й попыток 20/30/30/40/40/50/50/60/70/80 Flawless Moon Dust + 2…8 направляющих материалов; шанс апгрейда тира врождённого аффикса 30% → 20%, но значения T0 и базовых статов +~23%; память со случайным Moon Phase больше не биндится; провал не уничтожает базу.',
            'Дроп: легендарные Hero Relics/Memories только Blacksail; нелегендарные везде.',
          ],
        },
      ],
    },
    {
      id: 'soul-candles',
      title: 'Soul Candles (свечи душ)',
      blocks: [
        {
          kind: 'p',
          text: 'Падают только в City of Aeterna; 2 слота на экране навыков (первый с Lv. 75, второй через Psalms of Aeterna). Слияние у Heretic Candlelight – Kandel за Aeterna Candle Tears (из монстров Aeterna; по умолчанию не выносятся из города, лимит сохранения через Psalms). Исходы: **Melted** (аффиксы одинакового эффекта и тира сливаются, могут вырасти, упасть или остаться; два одинаковых T1 → шанс на T0 с гарантированным негативным аффиксом), **Mutated** (T1/T0 с малым шансом → очень сильный аффикс с серьёзным минусом), **Shaped** (пары мутировавших аффиксов, остаётся один из пары). Остальные аффиксы после плавки сохраняются или исчезают. Дороже с ростом ilvl. Psalms позволяют запрещать нежелательные аффиксы на выпадающих свечах.',
        },
      ],
    },
    {
      id: 'divinity',
      title: "Divinity Slates и Nether King's Divinity",
      blocks: [
        {
          kind: 'list',
          items: [
            '**Divinity Slate**: ставится в Statue of The New God; нелегендарные принадлежат одному из Six Gods, при дропе 1–2 фиксированных узла и до 3 Brand-узлов; легендарные уникальные узлы, не брендируются. Поворот и смена формы за Flame Fuel.',
            '**Brand** у Geely: 1–3 Divinity Slots качества Magic/Rare/Legendary (Medium Talent только Rare/Legendary слот; Legendary Medium и New God Talent только Legendary). **Inscribe** добавляет Micro → апгрейд в Medium → в Legendary Medium/New God. **Overwrite** реролл Micro/Medium. **Unifying Wedges** снимают все Brand-узлы, цена растёт с числом сбросов. Брендированные слейты не торгуются. Фан-вики: Transcendence Wedge повышает качество слота; Divinity Pact сужает пул до конкретной панели; особые базы A Corner of Divinity, Fallen Starlight, Pedigree of the Gods, Sparks of Moth Fire.',
            "**Nether King's Divinity** (SS13, с SS14 чаще и с обменом): 1 на персонажа, 3 сокета (Broken с 2 больше не падает). Сокеты: синий (Small), фиолетовый (+Medium), оранжевый (+Legendary Medium), красный (все + Ultimate Nether King Talent). Divine Remnant Magic/Rare/Legendary по шести пантеонам вписывает случайный узел бога; Nether King's Divine Remnant случайный Ultimate-узел. При заполненных сокетах повторный крафт заменяет случайный заменяемый; Soul Nail локает 1 сокет.",
            'Три формы: **Judgment** (слейты на линии между Divinities: было +70%, в SS14 +40% и −30% к собственным Brand-талантам), **Contamination** (проекция Brand-талантов на соседние слейты: −80% → −88%), **Banishment** (особые эффекты по типу скилла: Demolisher, Steep Strike, Shadow Strike, Spell Burst и др.; порог соседей 4 → 3, большинство эффектов порезано, Steep Strike +70% → +40%, Provision +100% → +40%). В SS14 тиры базовых аффиксов сдвинуты вверх, добавлены «+1 Physical/Cold/Fire/Lightning/Erosion Skill Level».',
          ],
        },
      ],
    },
    {
      id: 'legendary',
      title: 'Легендарное снаряжение',
      blocks: [
        {
          kind: 'list',
          items: [
            'Легендарные аффиксы фиксированы названием; Random Affixes у легендарок бывают (Illusory Chimera с тремя «A Random Legendary Affix», Realm Beyond Reach с двумя случайными Aember Base + Constellation-аффиксом). Крафт легендарок у Geely закрыт; старый Legendary Crafting (Inheritance Axis, перенос аффиксов между одноимёнными легендарками) в SS14 не подтверждён.',
            '**Ultimate Legendary** (красные): высшая редкость; SS14: при разборке даётся 1 Core Organ для Graft.',
            "Дроп: везде; массово Dwarven Automatons в God of Might и Dark Surge. SS14 новые: First Aember (перчатки, Caged Beast Profound+), Illusory Chimera (ботинки, Vorax TM8+), Realm Beyond Reach (амулет, God of War Profound+), Immolating World (амулет под Blessing), On the Sublime (жезл, Drone TM8+). Правки: False God's Shed с TM7; Trinity порог 30–36% → 21–27%; «I Am the Truth» +случайный CDR/duration аффикс.",
          ],
        },
      ],
    },
    {
      id: 'graft',
      title: 'Graft / Vorax',
      blocks: [
        {
          kind: 'p',
          text: 'Базы Vorax Limb (Head/Chest/Hands/Legs/Neck/Digits/Waist, есть Aberrant-варианты) без слотов Random Affixes; на них швами (Sutures) «пришиваются» органы: Normal (обычные аффиксы), Special (Ultimate-аффиксы, не больше 1 префикса + 1 суффикса), Core Organ (легендарная сила из разобранной легендарки, до 2 на предмет; при наложении случайно заменяет один из 6 аффиксов). Тип исходного слота не важен: аффикс нагрудника можно перенести на кольцо. Бюджет по mmoexp 5–10 тыс. FE на приличный предмет. SS13: часть Core Organs до 20 Fine Sutures, новые Perfect Organs. SS14: Ultimate Legendary → 1 Core Organ; удалены Core Organ Reforged Helm и Perfect Spine: Softening.',
        },
      ],
    },
    {
      id: 'talent-progression',
      title: 'Прогрессия, связанная с крафтом',
      blocks: [
        {
          kind: 'list',
          items: [
            "**Void Chart**: через созвездия настраивают дроп нужных материалов: Embers — God of Might; легендарки — Dark Surge; Soul Candles — Aeterna; Nether King's Divinity — Afterlight (своё созвездие с SS14); Divinity Slates — Cube.",
            '**Ethereal Prism** (SS10): замена и усиление Core-талантов, каждый с −30 All Stats. **TOWER Sequence**: последовательности на оружии (в SS13 перебалансированы). **Memory Revival affixes**: штраф к All Stats в обмен на бонус.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Что крафтить самому, что покупать',
      blocks: [
        {kind: 'h4', text: 'Крафтить самому'},
        {
          kind: 'list',
          items: [
            'Priceless-базы с пулами, особенно когда нужный сет аффиксов редок на трейде; покупать базу с 1–2 дорогими T1/T0 и докручивать остальное.',
            "Branding слейтов и Nether King's Divinity (биндятся при бренде, покупать только чистые базы).",
            'Memory Revival Ultimate-памятей после SS14 (откат результата, нет бинда при случайном Moon Phase).',
            'Graft на Vorax только с бюджетом 5–10k FE: RNG на каждом шаге.',
          ],
        },
        {kind: 'h4', text: 'Покупать на трейде'},
        {
          kind: 'list',
          items: [
            'Готовые кольца и амулеты с резистами 35%+ и Max Life (самый ликвидный товар), базы ilvl 80+ с высокой Energy, Priceless-базы с 1–3 нужными аффиксами.',
            'Familiar Nexus и Aemberon Core для коррозии, Energy Cores, Embers (лишние Embers — стабильный доход).',
            'Легендарки под билд: чаще выгоднее купить, чем фармить лимитированные дропы.',
          ],
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Типичные ошибки',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Крафт Ultimate без проверки размера пулов (зажать кнопку) и без filler-аффиксов: переплата в разы.',
            'Крафт на базе ниже нужного ilvl: тир упирается в потолок, Ultimate недоступны вовсе (нужен ilvl 100).',
            'Corrosion до завершения крафта: предмет либо нельзя крафтить, либо вдвое дороже; Chaos/Void/Mutate биндят, не корродировать единственный рабочий предмет без запасного.',
            'Ожидание Dream Interpretation / Dream Talking: удалены в SS13; старые гайды описывают несуществующую систему.',
            'Branding/Inscribe на слейте, который собирались продать: становится untradeable; Unifying Wedge дорожает с каждым сбросом.',
            'Full Moon Revival «вслепую» до SS14 мог забиндить дорогую память; с SS14 есть выбор «до/после», но стоимость растёт по попыткам.',
            'Раннее вливание валюты в предмет до ~Lv. 86–90, когда ещё нет доступа к Priceless-базам и нужным созвездиям дропа.',
            'Graft: Core Organ ставить последним, он случайно заменяет один из 6 аффиксов; не ставить больше 1 Special на сторону.',
          ],
        },
      ],
    },
  ],
  sources: [
    {
      title:
        'Game Manual: Gear, Hero Memories, Soul Candle, Statue of The New God',
      url: 'https://legacy.torchcodex.com/latest/en/manual.html',
      note: 'версия до SS13',
    },
    {title: 'Патчноуты SS14 (кит.)', url: 'https://torchlight.xd.com/ss14pn'},
    {
      title: 'Патчноуты SS13 (кит.), удаление Dream Interpretation',
      url: 'https://torchlight.xd.com/ss13pn',
    },
    {
      title: 'Steam-анонсы сезонов',
      url: 'https://store.steampowered.com/news/app/1974050',
    },
    {
      title: 'Дев-блог TapTap: Prototype Crafting (2023)',
      url: 'https://www.taptap.io/post/5382819',
      note: 'устарело',
    },
    {
      title: "tlidb: Craft, Corrosion, Nether King's Divinity, Legendary Gear",
      url: 'https://tlidb.com/en/Craft',
    },
    {
      title: 'IGGM: SS12 Priceless crafting guide',
      url: 'https://www.iggm.com/news/torchlight-infinite-ss12-priceless-items-crafting-with-6-perfect-affixes-guide',
      note: 'апрель 2026',
    },
    {
      title: 'IGGM: SS11 Vorax and Grafting',
      url: 'https://www.iggm.com/news/torchlight-infinite-ss11-vorax-grafting-system-break-every-gear-limit',
    },
    {
      title: 'mmoexp: Vorax crafting guide',
      url: 'https://www.mmoexp.com/News/torchlight-infinite-vorax-crafting-guide-complete-ss11-grafting-guide-best-affixes-gear-crafting-tips.html',
    },
    {
      title: 'Item Level Gaming: How to Craft T1 Gear (SS7)',
      url: 'https://itemlevel.net/torchlight-infinite-how-to-craft-t1-gear-guide-ss7/',
      note: 'январь 2025',
    },
    {
      title: 'vhpg: SS14 New Legendary Gear',
      url: 'https://www.vhpg.com/torchlight-infinite-ss14-new-legendary-gear/',
    },
    {
      title: 'Maxroll: Gear Corrosion Guide',
      url: 'https://maxroll.gg/torchlight-infinite/resources/gear-corrosion-guide',
      note: '2024, сейчас 404',
    },
  ],
}
