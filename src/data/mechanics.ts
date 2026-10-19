import {type PartSource} from '#/lib/content'

export const part: PartSource = {
  id: 'mechanics',
  num: 2,
  title: 'Механики эндгейма',
  short: 'Механики',
  lead: 'Сезон SS14 Tartarus, Netherrealm и всё, что в нём запускается: маяки, резонанс, карты Хаоса, Void Chart, боссы, шесть богов и механики прошлых сезонов, ушедшие в кор. Пометки: [справочник] внутриигровой Game Manual, [tlidb] вики, [патч] патчноуты SS14, [гайд] фан-источники.',
  updatedAt: '2026-10-19',
  articles: [
    {
      id: 'tartarus',
      title: 'SS14 «Tartarus»: тюрьма (Caged Beast Gameplay)',
      blocks: [
        {
          kind: 'p',
          text: 'Сезон стартовал 16.10.2026. Три фазы: сбор беглецов в картах, доска надзирателя, бунт.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            "**Netherrealm.** В картах появляются сбежавшие заключённые (fugitives). С них падают жетоны (Prisoner Nameplates). Набрав нужное число, запускаешь раунд «Службы надзирателя» (Warden's Duty). Сбор идёт параллельно обычному фарму.",
            "**Warden's Duty (доска).** Круглая тюрьма на 16 камер, лимит 20 «дней»; день тратится на действие (ход, обмен, орудие пытки). Камера 01 — кабинет надзирателя, 15 остальных держат заключённых. Каждое утро патруль: выбор одной из трёх целей среди следующих шести камер по часовой стрелке. В кабинете выбор Instigate (подбросить событие за закрытые двери) или Bestow (случайный заключённый +1 ранг). После патруля либо одно пожирание, либо замена (Replace) заключённого в камере надзирателя на нового.",
            "**Бунт (Riot).** Когда дни кончились, хроматические и все оставшиеся заключённые бунтуют. Подавляешь их по трём тюремным блокам, каждая побеждённая группа открывает тайник надзирателя (Warden's Cache) соответствующей редкости. Число попыток воскрешения официально не опубликовано. В конце комната наград: открываешь все вскрытые тайники.",
          ],
        },
        {kind: 'h4', text: 'Пищевая цепочка и редкости'},
        {
          kind: 'list',
          items: [
            'Мамонт ест Льва, Лев Волка, Волк Крысу, Крыса Мамонта (замкнутый круг). По фан-симулятору Мамонт также ест Волка, Лев Крысу. Условие: одинаковая редкость; над едоком показывается иконка зубов. После укуса едок +1 редкость, его зверь перебрасывается случайно.',
            "Редкости: Normal → Magic → Rare → Legendary → Supreme → Chromatic (в прессе Rainbow). Хроматический снимается с доски, даёт бафф на остаток раунда (Warden's Collection) и самый дорогой тайник, но и самого тяжёлого противника в бунте.",
            "Орудия пыток (Torture Instruments) и инциденты (Prison Incidents) меняют правила: Elephant-Foot Maul (мамонт ест львов выше редкостью, +2 ранга), Blood-Stained Trap (лев помечает жертву, оба растут каждое утро), Iron Crown of the Prison King, Hangman's Noose и Severed Iron Maiden (замены дают заключённых высокой редкости), Muzzle (утраивает скорость роста), Execution (убирает всех, кого может съесть заключённый, +1 ранг за каждого). Названия по фан-переводу, в клиенте могут отличаться.",
          ],
        },
        {
          kind: 'h4',
          text: 'Сезонные компасы (слот Caged Beast Compass, расходуется при старте бунта)',
        },
        {
          kind: 'table',
          head: ['Компас', 'Эффект'],
          rows: [
            [
              'Darkiron Shackles',
              "+10% доп. количества дропа всех Warden's Caches",
            ],
            [
              'Mercury Shackles',
              '+30% дропа; монстры в бунте получают −45% доп. урона',
            ],
            ['Redgold Shackles', '+80% дропа; монстры −70% доп. урона'],
          ],
        },
        {
          kind: 'h4',
          text: 'Как играть эффективно (симуляция 5,5 млн раундов, ориентир)',
        },
        {
          kind: 'list',
          items: [
            'Пожирать каждый день, когда можно: две фигуры одной редкости → одна выше почти всегда выгоднее.',
            'Держать на каждой редкости все четыре вида зверей, чтобы цепочка после переброса продолжалась (4 вида = 100%, 3 = 75%, 2 = 50%).',
            'Заменять слабых (Normal/Magic) в камере надзирателя, если им нечего есть; открывать далёкие двери; Execution принимать, только если выигрыш рангов больше потери.',
            'Итог стратегии: в среднем 3,49 хроматических за раунд против 1,25 у «простого» игрока. При слабом билде лучше меньше хроматических, но полное прохождение бунта. Сезонный компас ставить только если тянешь штраф.',
            '«Переворот» реализован как дроп-пактдух Twin Inquisitors: 18% дублировать содержимое тайника (28% на 6 ранге), 8% открыть тайник ещё раз (16% на 5 ранге), перезабросы орудий. В сезонном созвездии Void Chart узлы на то же самое. [патч]',
            'Награды: FE и снаряжение «в больших количествах», рекомендательные письма для найма Followers, эксклюзивная легендарка (перчатки First Aember) только на Profound и выше.',
          ],
        },
      ],
    },
    {
      id: 'followers',
      title: 'Последователи (Followers) и навыки Тартара',
      blocks: [
        {
          kind: 'list',
          items: [
            'Четыре племени: Lone Wolf, Mammoth, Witch Rat, Lion Queen. Нанимаются за рекомендательные письма в комнате допросов тюрьмы. Последователь воюет рядом, не занимает слоты навыков игрока; с редкостью растёт число его слотов и качество стартового навыка. Есть Ultimate-последователи с эксклюзивными трейтами (12 писем на tlidb).',
            '**Tartarus Skills**: только для последователей, баффы союзникам или дебаффы врагам, на tlidb 81 навык рангов I–III. Примеры: Black Hole (4 с, притягивает, +8% Affliction союзникам), Life Tonic (3% макс. HP/с 4 с), Splitting Lightning Bolt (всегда крит, метка −20% уклонения), Icicle Slash (+40% Frostbite), Blink (+5% длительности эффектов и восстановления КД союзникам).',
            '**Origin Tartarus Skills**: редкие, билдообразующие (Scorching Pulse: при попадании жнёт 1 с всех DoT, +30% Reaping Duration за каждую жатву до 10 стаков).',
            'Навыки падают с готовыми случайными сапп-эффектами; Tempering Medal добавляет случайный общий сапп в пустой слот, Tempering Medal (Origin) ещё и эксклюзивный. Торговый дом поддерживает последователей и навыки. Чем выше сложность Netherrealm, тем лучшие последователи.',
          ],
        },
      ],
    },
    {
      id: 'youga3',
      title: 'Трейт Youga «The Ultimate One» (Youga 3)',
      blocks: [
        {
          kind: 'list',
          items: [
            'Ядро: Clockwork Core. К нему привязывается выбранное заклинание как «сплетение» (Entanglement), оно крутится вокруг ядра и кастует само; занимает слот сапп-навыка и разворачивается как турель. Крит ядра снижает все КД Юги.',
            'Три пути, можно смешивать: **Spacetime Dictator** (зона, где заклинания зацикливаются, входящий урон откладывается, можно отсрочить смерть), **Spacetime Conqueror** (телепорты, связывает врагов, урон распределяется между ними), **Spacetime Overlord** (накапливает Overload и превращает заклинания в усиленные варианты).',
            'Ещё: «заражение» заклинаний стихиями других таймлайнов, навык перемещения вместе с ядром, арена с рикошетом снарядов, при смерти полное восстановление и заморозка врагов вокруг (кроме боссов). Заодно переработана Thea 1 вокруг благословений, визуально обновлены Gemma 2, Carino 2, Bing 1.',
          ],
        },
      ],
    },
    {
      id: 'ss14-rest',
      title: 'Остальное в SS14',
      blocks: [
        {
          kind: 'list',
          items: [
            "**Supreme Showdown**: механика Star's Fall. Во время боя падают энергетические шары, их надо отбивать; за успешные бонус урона, три промаха подряд — смертельный удар. Ротация боссов, новые костюмы за 20 и 21 этажи.",
            '**Afterlight ушёл в кор**: своё созвездие Void Chart (с TM7, 63 звёздных таланта), темп можно замедлять и ускорять, компасы Vigil: базовый (+10% HP монстров), Phantom (фантомы, +30% HP), All-Evil (убитые «Лики ста зол» дают до 3 стаков по +100% дропа Vigil, +70% HP), Eternal (+100% дропа, +30% HP).',
            '**Divine Ascent**: 150 этажей, прыжок до 5 этажей при быстром чистом прохождении, Battle Pactspirit перенесён с 35 на 50 этаж.',
            "**Nether King's Divinity**: падает чаще, есть обмен; Broken-вариант больше не падает; ярусы базовых аффиксов переименованы вверх, новые Legendary «+1 уровень физ/холод/огонь/молния/эрозия-навыков», ослаблены эффекты Banishment.",
            '**Netherrealm**: ротация карт; легендарные компасы падают с TM8 (мало); в Nightmare на TM8 пузыри Precious+ могут дать Deep Space Beacon; в Deep Space негативные аффиксы по умолчанию как на Profound, усиленные только при Deep Space Resonance; пересмотрены числа Confusion Cards; God of War заменён вариантом Berserk, Goddess of Hunting вариантом Roaming.',
            '**Trade House**: с 14.10 торговля только за Flame Elementium; сохранение, экспорт и шаринг групп условий поиска; поддержка Followers; quick price check.',
            '**QoL**: приоритет лут-фильтра ускоряет дроп, избранное и пресеты компасов, авто-реконструкция аффиксов Hero Memory, точные значения в дереве талантов, встроенный поиск эффектов пактдухов, Memory Revival можно переролить и повторять (20…80 Flawless Moondust за 1–10 попытки).',
            '**Flame Forger**: босс («Fire Lord, Flame Forger · Burning Heart»), в SS14 только визуальный ремейк арены и FX. К крафту отношения не имеет.',
          ],
        },
      ],
    },
    {
      id: 'netherrealm',
      title: 'Netherrealm: планы, Timemark, Offset, Profound и Deep Space',
      blocks: [
        {
          kind: 'list',
          items: [
            '5 планов: Glacial Abyss (холод), Blistering Lava Sea (огонь), Steel Forge (физ.), Thunder Wastes (молния), Voidlands (эрозия). В каждом 12 уникальных карт, в каждой босс. Вход и воскрешение стоят 1 попытку из 6; карту можно открыть повторно за новый маяк. [справочник]',
            "**Timemark 1–8**: выше метка, тяжелее карта и лучше дроп; между достигнутыми переключаешься свободно. Повышение: по справочнику убить Plane Watcher плана; по новой справке tlidb на TM1–6 всех Стражей метки, на TM7/8/Profound 8 Traveler'а. TM8 открывается через Spacetime Turbulence после победы над Realm Lord — Traveler.",
            '**Offset Degree**: подделения TM7 (0–2) и TM8 (0–4 по справочнику, 0–3 по tlidb). Игроки говорят «7-0», «7-2»: 7-0 стандартная фарм-база, 7-1/7-2 за Star Talents.',
            '**Profound TM8** и **Deep Space**: ступени выше TM8. Profound: Plane Watcher с 6 уровнями сложности, на максимальном Conquest Insignias (костюмы), Traveler там Final Reflux. Deep Space: без роста сложности, но выше дроп; вход маяками Rank 5+ (очень редкие), действует Deep Space Resonance и Cage of Original Sin. Near Space = обычный TM8 на Rank 5.',
            'Прогресс Netherrealm общий для аккаунта в рамках сезона.',
          ],
        },
      ],
    },
    {
      id: 'map-materials',
      title: 'Маяки, резонанс и материалы карты',
      blocks: [
        {kind: 'h4', text: 'Beacons (маяки)'},
        {
          kind: 'table',
          head: ['Timemark', 'Нужен ранг', 'Падает до'],
          rows: [
            ['1–2', 'Rank 1', 'Rank 2'],
            ['3–4', 'Rank 2', 'Rank 3'],
            ['5–6', 'Rank 3', 'Rank 4'],
            ['7', 'Rank 4', 'Rank 5'],
            ['8 Near Space', 'Rank 5', 'Rank 5+'],
            ['8 Deep Space', 'Rank 5+', 'Rank 5+'],
          ],
        },
        {
          kind: 'p',
          text: "Rank 1–4 покупаются у Trader'а за Netherrealm Resonance. По tlidb маяки именуются по метке («Glacial Abyss Beacon (Timemark 7)»), карта роняет маяки текущей и следующей метки, TM7 только TM7, TM8 только TM8. Массово с боссов карт и в Goddess of Hunting [справочник], по tlidb в God of War. 3 одинаковых → 1 следующего ранга.",
        },
        {kind: 'h4', text: 'Netherrealm Resonance (резонанс)'},
        {
          kind: 'p',
          text: 'Перед открытием карты добавляешь случайные базовые аффиксы: каждый даёт доп. количество и редкость дропа и усложняет карту; стоимость растёт, поздние аффиксы опаснее; до 6 на высоких метках; 3 сброса за заход; аффиксы сбрасываются после открытия. Падает везде, часто. Совет «How to Get Rich» из справочника: забить аффиксы резонансом, взять 3 дроп-пактдуха, включить фильтр.',
        },
        {kind: 'h4', text: 'Map Materials: три типа'},
        {
          kind: 'list',
          items: [
            '**Compass**: до 4 на карту, слоты открываются с TM7 и растут с меткой. Гарантирует геймплей или усиливает дроп типа ценой +HP монстров (10/30/70%). На tlidb 79 штук: Sinful Plunder (+40% дропа, −30% урона по монстрам), Novel (+30/100% редкости), Soldier/Veteran/Elite/Boss (доп. группы), Beacon (10% копия/апгрейд маяков), Ember (+30/50% углей), Fluorescent, Militant (Priceless +50/100%), Renown Edge (+30% Matchless+ легендарок), геймплейные (Vigil, Outlaw, Machines, Hunting, Might).',
            '**Season Compass**: 1 на карту, только сезонный геймплей (Shackles выше).',
            '**Probe (зонд)**: 1 на карту, только Profound TM8 и Deep Space; сильнее компасов, тяжелее штраф. Падают в основном из Sandlord/Oasis. 15 зондов: Flourishing (+20/40% дропа, 7% Extra Drop Goblin, −25/−40% урона по монстрам), Gear/Ember/Compass (+20/40% типа, −40/−65%), Fluorescent (20/40% копия), Beacon (20% копия), геймплейные Deep Space (−75% урона).',
          ],
        },
      ],
    },
    {
      id: 'chaos',
      title: 'Chaos Invasion, Confusion Cards, Trait Cards',
      blocks: [
        {
          kind: 'list',
          items: [
            'Netherrealm постоянно под вторжением Хаоса; вторжения независимы по планам и меткам. В начале раунда из колоды тянутся 3 карты смятения (Confusion Cards) на случайные карты плана. Карта с такой картой **всегда +100% доп. дропа**; каждое прохождение +1 прогресс; при полном прогрессе открытие запускает аффиксы и завершает раунд. Выше редкость карты — больше нужный прогресс; выше Timemark — богаче колода.',
            'Примеры: Stingy (босс роняет 0–2/1–2/2–4 доп. легендарки), Jealous (+30/50% дропа снаряжения), Alarmed (TM7–8: 20% Rift Portal с рар-монстров, их монстры 50% ×6 легендарок). SS14: Melancholy копия Fluorescent 8/11% → 20/30%; Narrow компасы +40% → +30%; Irritable-Might копия углей 5/7/15% → 15/20/40%; Wrath-Might «100% копия легендарок». [патч]',
            '**Trait Cards**: твоя колода, применяется ко всем открываемым картам плана (кроме Plane Watcher, Traveler, Great Void). В конце раунда выбираешь 1 из 3 в библиотеку или повышаешь уровень имеющейся. Размер колоды до 12 [справочник] или до 10 [tlidb]; все планы и метки делят одну колоду; изменения со следующего раунда. Карты с ключевым словом Inheritance действуют на весь план; редкое «пробуждение» (Awakening) даёт лучшие значения.',
          ],
        },
      ],
    },
    {
      id: 'bosses',
      title: 'Plane Watcher, Cinders, Traveler',
      blocks: [
        {
          kind: 'list',
          items: [
            "**Plane Watcher**: уникальный легендарный босс плана с эксклюзивным дропом. За прохождение карт копятся Attention Points / Starshards; набрал — вызываешь. Победа повышает Timemark, даёт Cinder и гарантирует эксклюзивную легендарку; на TM7/8/Profound роняет предметы для вызова Traveler'а.",
            '**Cinders**: за первое убийство каждого Стража на TM1–7. Разблокировки: 3 Blistering Lava Sea; 7 Trait Cards; 8 Steel Forge; 15 Thunder Wastes; 18 слоты компасов; 24 Voidlands; 31 Great Void; 35 Lord of Calamity — Traveler.',
            '**Traveler**: финальный босс. По справочнику три сложности: Lord of Calamity (35 Cinders, после победы заменяется на Realm Lord), Realm Lord (TM7: Страж любого плана ×4), End of Confusion (TM8 ×4). По tlidb (новее): Realm Lord — TM7, 4× The Beginning; End of Confusion — TM8, 4× The End; Final Reflux — Profound, 4× Beginning of the End. Травелеры роняют навыки 21 уровня; победа над Realm Lord и End of Confusion открывает слоты Undetermined Fate.',
            "Внутри карт: Mystery Chest / Chest Mimic (мимики роняют Ice Breaker, Loner's Boots, Windbreath Convergence, False God's Skin), Cage of Original Sin, Treasure Sentry. Везде падают Elixir of Oblivion, Winding Key (откат Void Chart), Twin Reflection (копия снаряжения у Zenoth), Sprout of Legends (гарантированная Precious+ легендарка у Netherrealm Mentor), Energy Core, Fluorescent Memories (обмен у Spacetime Wanderer на FE ×1/9/100, навыки 21 ур., Ultimate Ember, Undetermined Fate).",
          ],
        },
      ],
    },
    {
      id: 'void-chart',
      title: 'Void Chart (дерево дропа)',
      blocks: [
        {
          kind: 'p',
          text: 'Дерево в меню Netherrealm: созвездия (Talent Constellations) по темам, через них настраиваешь, какие механики появляются в картах и какой дроп усиливается. Очки — Star Talents за Confusion Cards, Стражей и Травелеров; Prime Star Talents для созвездия Profound. Сброс узлов — Winding Points из Winding Key. Quick Loot показывает чужие раскладки.',
        },
        {
          kind: 'table',
          head: ['Созвездие', 'Открытие', 'Узлов'],
          rows: [
            ['Commodities', 'нет порога', '97'],
            ['Sandlord', 'нет порога', '39'],
            ['Legendary Gear', 'TM2', '28'],
            ['Gear', 'TM3', '21'],
            ['Beacon', 'TM3', '53'],
            ['Blacksail', 'TM4', '43'],
            ['Cube', 'TM4', '67'],
            ['War', 'TM5', '48'],
            ['Hunting', 'TM5', '79'],
            ['Folklore', 'TM5', '35'],
            ['Dark Surge', 'TM6', '66'],
            ['Compass', 'TM7', '73'],
            ['Might', 'TM7', '80'],
            ['Machine', 'TM7', '85'],
            ['Aeterna', 'TM7', '39'],
            ['Nightmare', 'TM7', '47'],
            ['Clockwork Ballet', 'TM7', '79'],
            ['The Frozen Canvas', 'TM7', '41'],
            ['Arcana', 'TM7', '42'],
            ['Outlaw', 'TM7', '79'],
            ['Overrealm', 'TM7', '83'],
            ['Vorax', 'TM7', '43'],
            ['Lunaria', 'TM7', '73'],
            ['Afterlight', 'TM7', '63'],
            ['Profound', 'TM7', '22 Prime'],
            ['Creation', 'TM8', '66'],
            ['Cage', 'Deep Space', '51'],
          ],
        },
        {
          kind: 'p',
          text: 'Итого 92 Star Talent + 4 Prime на момент снимка tlidb. Совет гайдов: сначала ветки Commodities (Flame Sand, Embers), затем механики под свой билд; не размазывать очки по всем иконкам.',
        },
      ],
    },
    {
      id: 'path-of-brave',
      title: 'Path of the Brave (High Tower)',
      blocks: [
        {
          kind: 'list',
          items: [
            "Вход через Zenoth the Lightless в Ember's Rest. Ключи Proof of the Brave I–V (уровни 1/11/21/31/41) падают в Netherrealm с боссов TM6–7 и продаются; ключ следующего яруса выдаётся за прохождение яруса.",
            '45 уровней, 5 ярусов по 10 мини-карт с волнами и боссами. Рекомендуемый DPS по tlidb: ур. 1 — 19 млн, 10 — 42 млн, 20 — 133 млн, 28 — 581 млн. Уровень 40 «в 28,5 раз сложнее» уровня 10 (Maxroll 2024).',
            'Награды: валюта, снаряжение, Hero Memories и эксклюзивные сапп-навыки «Precise: …» (Restrain, Seal Conversion, Selfless, Selfishness, Stand as One, Disciplined, Concentrated, Malleable, Safety in Numbers, Focus Buff, Superpower, Friend of Spirit Magi, Protection Field, Harmony, Purify). XP не даёт; лут не зависит от дроп-пактдухов.',
          ],
        },
      ],
    },
    {
      id: 'supreme-showdown',
      title: 'Supreme Showdown',
      blocks: [
        {
          kind: 'p',
          text: "21 босс-этаж с растущей сложностью; базовые награды за прохождение плюс звёзды за время; рейтинговая таблица; состав и награды обновляются каждый сезон (в SS14 Star's Fall). Смерть в HC не убивает персонажа. Боссы (снимок tlidb до ротации): Pack Leader Dodge, Goblin High Priest of Fire, Void Sea Bride, Lone King of Aeterna, God of Swords, Plateau Dragonbone Beast, King Lionheart, Malice Judge, Clockwork Ballet President, Dwarf King, Queen of Eternal Sun Paloma, Sons of Rising Tide, False God of Symbiosis и другие. Журнал-цель «уровень 7» даёт постоянные бонусы к дропу.",
        },
      ],
    },
    {
      id: 'afterlight',
      title: 'Afterlight / Vigil (ночное бдение)',
      blocks: [
        {
          kind: 'list',
          items: [
            "В карте стоит гроб; зажигаешь Guiding Lantern — начинается похоронная процессия, защищаешь её от Духов (Wraiths) в лимите времени. Цвет фонаря = темп: синий/зелёный (Stable) чем быстрее убиваешь, тем быстрее спавн; жёлтый (Flickering) духи копятся; красный (Overloaded) спавн на паузе, чисти быстро, иначе теряешь награды. Золотые монстры, особые гробы (veteran's coffin: жёстче таймер, плотнее спавн).",
            'Прогрессия в Usher Mortuary: за каждый забег 1 Remnant Soul (до капа) на пробуждение Реликвий, которые включают Vigil Anomalies и Noble Coffins (меняют правила, сильно улучшают дроп); сброс бесплатный.',
            "Источник Nether King's Divinity и Divine Remnants (с SS14 чаще, есть обмен).",
          ],
        },
      ],
    },
    {
      id: 'great-void',
      title: 'Great Void и убер-боссы',
      blocks: [
        {
          kind: 'list',
          items: [
            'Открывается при 31 Cinders. Через Great Void вызываются финальные боссы сезонных механик (Supreme Bosses) с несколькими сложностями; предметы вызова низшей падают в самой механике, для высших с босса низшей. Зона Void Rift: 17 арен базового уровня 86.',
            '**Lord of the Void Sea** (Blacksail): приглашения Craving (с Void Sea Bride) → +Ecstasy → +Sorrow, 3 сложности.',
            '**Keegan / Tide Lord** (через Hunter Jack): фаза 1 — Edict of Dark Tide: Dart, Dive, Doom; Uber — 4× Edict of Doom. Дроп Familiar Nexus 50% / 100% (материал коррозии). Ориентир ~400 млн DPS обычный, ~1 трлн Uber.',
            '**Aureate Calamity Ordrak**: Boss Conquest (Rusted Abyss, 2 воскрешения, ранги, ежедневная награда за первый бой). Полного актуального списка Great Void в источниках нет.',
          ],
        },
      ],
    },
    {
      id: 'divine-ascent',
      title: 'Divine Ascent',
      blocks: [
        {
          kind: 'p',
          text: 'Заменил City Defense. Базовый таймер 3 минуты на этаж; в карте набиваешь Challenge Progress убийствами и испытаниями, при заполнении появляется босс этажа; чем быстрее и без смертей, тем больший прыжок по ярусам (с SS14 до 5 этажей, всего 150). Два рейтинга: First Clear и Infinity. Battle Pactspirit на 50-м этаже. Порог открытия The Frozen Canvas привязан к этажам Divine Ascent.',
        },
      ],
    },
    {
      id: 'six-gods',
      title: 'Шесть богов: испытания в картах',
      blocks: [
        {
          kind: 'table',
          head: ['Испытание', 'Что делать', 'Что даёт'],
          rows: [
            [
              'God of Machines',
              'защищать Статую механизмов от волн, обычно 3 раунда, HP статуи до 0 — провал',
              'дроны; эксклюзивы Surging Inspiration, Mistaken Authority, Decayed Mind, Necklace of Firebird',
            ],
            [
              'God of Might',
              'вокруг статуи движется лава, выживаешь и набираешь этажи до таймера',
              'массово Embers и легендарки с Dwarven Automatons; Forlorn Crystal, Polygonal Enclosure, Last Words of Chaos, Divine Ember',
            ],
            [
              'God of War (SS14: Berserk)',
              'статуя в начале карты даёт благословение (+область, +скорость, +снаряды), убийства открывают этажи',
              'массово Beacons; в SS14 +2,8% шанса маяка за этаж с компасом Wild War; Crimson King, Ghost Slaughter, Furious Heart, Dragon Breath Armor',
            ],
            [
              'Goddess of Hunting (SS14: Roaming)',
              'перед боссом выбираешь бафф себе и усиление боссу; в Roaming боссы-«добыча» по карте, каждый +6,5% к награде финального',
              'массово Beacons и Compasses; SS14: +135% дропа в созвездии; Thunder Jawbone, Skin of Malice, Starlit Body',
            ],
          ],
          wrapFirst: true,
        },
        {
          kind: 'list',
          items: [
            'Trial of Divinity: не зависит от дроп-пактдухов; каждый уровень +дроп, каждые 10 скачок сложности; можно выйти в безопасную зону и забрать награду. Divinity Stones → магазин Blessings from Gods (Flame Sand/Elementium, Energy Cores, Resonance, Transcendence Wedges).',
            'Благословения богов как статусы описаны в разделе «Характеристики». Полный список шести богов по именам в источниках не найден: в справочнике испытаний только четыре.',
          ],
        },
      ],
    },
    {
      id: 'aeterna',
      title: 'Aeterna (Город Этерны, SS4 → кор)',
      blocks: [
        {
          kind: 'list',
          items: [
            'В Netherrealm бродят Kins of Aeterna, с них Aeterna Reverberations (Fleeting → Ruins уровня 83, Eternal → 85). Реверберация у Kandel открывает Ruins of Aeterna: выбираешь число клеток (6 по умолчанию, 4 через Psalms с удвоенной наградой), проходишь Candelabrum Challenges, получаешь Mark of the Ruins.',
            'Стройка: выкладываешь знаки на Aeterna Map, покрывая комнаты наград и соединяя их со стартом; добиваешь Aeterna Tiles (1, до 3 через Psalms). Уровень города = средний уровень руин.',
            'Город: монстры → ключи → Candelabrums в комнатах → босс. Сила босса +1 за комнату, +2 за двойную; на 5/10/15/20 силы босс резко сильнее и роняет больше. Прохождение повышает тир на 5; кап 20, выше через Psalms.',
            'Psalms of Aeterna: дерево за Pages of Aeterna (больше наград, 4-клеточные руины, тайлы, второй слот Soul Candle, сохранение Candle Tears); сбрасывается только целиком. Дроп: Soul Candles только тут, Pages, Candle Tears.',
          ],
        },
      ],
    },
    {
      id: 'blacksail',
      title: 'Blacksail / Void Sea (SS2 → кор)',
      blocks: [
        {
          kind: 'p',
          text: "При аффиксе «marked by a Plane Anchor» монстры с Void Sea Flames (доп. дроп, смена следующих Whisper'ов). После босса карты Plane Anchor → Void Pirate → Void Sea Seal → Seal Whisper (Armament / Wealth / Wonder, плюс Boss Whisper). Собрав 6 Whispers, идёшь в Void Sea Terminal, убиваешь Void Sea Bride, забираешь сундук; Whisper of Wealth +9…+72% базового дропа. Единственный источник легендарных Hero Relics и Hero Memories. Финальный босс Lord of the Void Sea в Great Void.",
        },
      ],
    },
    {
      id: 'cube',
      title: 'Cube of Rapacity (SS3 → кор)',
      blocks: [
        {
          kind: 'p',
          text: 'При накоплении Malice появляются Malice Incarnations → Desire Crystals. После босса карты Cube of Rapacity: тратишь кристаллы на Covet (одна награда за раз, включая Cube of Craving, повышающий ценность); затем Greed: 50% удвоить / 50% потерять всё. Avarice Code: уничтожение куба N раз открывает декреты (Festering Evil +8% воплощений, Deacon of Malice Divinity Stones, Bounty of Greed +100% шанс SSR/UR при −50% кристаллов). Единственный источник легендарных Divinity Slates и материалов клеймения; массово нелегендарные слейты. SS14: Extreme Desire 16% → 24%, Wild Imagination 25/38/76% → 10/15/30%.',
        },
      ],
    },
    {
      id: 'dark-surge',
      title: 'Dark Surge (SS1 → кор)',
      blocks: [
        {
          kind: 'p',
          text: 'Когда карта «полностью затоплена Dark Surge», заражённые монстры дают Dark Energy в Контейнер; полный контейнер — выпускаешь тьму и монстров; первый выпуск открывает ярус наград, далее шанс доп. ярусов, всего до 4; все открытые награды несут выпущенные монстры. Созвездие: до 8 извержений за карту (было 9). Дроп: массово легендарное снаряжение и Aemberon Core. Босс: Keegan / Tide Lord.',
        },
      ],
    },
    {
      id: 'folklores',
      title: 'Folklores / Mistville (SS6 → кор)',
      blocks: [
        {
          kind: 'p',
          text: "«Жители» Mistville в карте → их глаза → Infection Progress (Resident's Eye из инвентаря = +7); при пороге вход в Mistville: Фонарь, рассеиваешь туман ценой Рассудка (Sanity), ищешь Часовую башню — новый день; раунд до нуля рассудка или 15 дней. По нечётным дням у башни Advent of Folklores → Chest of Folklores. Дерево Mistville Exploration (73 узла), Deduction Record, Mist Essence; с 9-го дня сундуки могут давать Rare Activation Mediums. Activation Medium только тут. SS14: Fear-Folklore глаза 100%×1 → 75%×2.",
        },
      ],
    },
    {
      id: 'nightmare',
      title: 'Nightmare / Twinightmare (SS5 → кор)',
      blocks: [
        {
          kind: 'p',
          text: "«Dream Lotus grows in the stage» → Sweet Dream: убиваешь Лунатиков, пробуждаешь лотос → Dream Omen (усиливает Dream Bubbles, но делает кошмар опаснее). С ростом числа снов шанс попасть в Nightmare: удаляешь все Nightmare Roots, чтобы пузыри стали наградами. Дерево Dream Cloud Atlas (18 узлов: +пузыри, Rainbow-качество, +2 к макс. уровню сна, Queen's Grace). Пактдух Shepherd: 10/13% повторный дроп всех пузырей. SS14: на TM8 пузыри Precious+ могут давать Deep Space Beacons. Dream Talking больше не падает (Dream Interpretation удалён в SS13).",
        },
      ],
    },
    {
      id: 'pactspirits',
      title: 'Pactspirits и Pact Page',
      blocks: [
        {
          kind: 'list',
          items: [
            'Pact Page: боевая и дроповая страницы, по 3 секции, открываются по ходу игры. Pactspirit, установленный в область, меняет эффекты её узлов (легендарный все узлы); можно вернуть оригинальные. Неустановленный ходит рядом и автоподбирает часть дропа.',
            'Дроп-пактдухи повышают дроп типа предмета или доход механики; из Boon-системы (гача) и событий; редкости Magic/Rare/Legendary, уровни до 6. Стандарт фарма: 3 дроп-пактдуха. Примеры: Twin Inquisitors (Tartarus), Shepherd (Nightmare), Chalk Spirit (FE), Captain Shadow (Embers), Kong (Fluorescent Memories), Moon Shadow Guide (Sandlord), Starfish Chanter (Blacksail), Dorothy (компасы).',
            'Regular Pactspirit Setting (Golden Season Pass): закреплённая связка под конкретную механику. Pactspirit Rally (платное событие): 3 набора по 1 T1 Legendary + 1 T4 Rare + 1 T6 Magic, смена набора раз в 24 ч, исчезают в конце сезона.',
          ],
        },
      ],
    },
    {
      id: 'arcana',
      title: 'Arcana / Destiny (Tarot Path, SS7 → кор)',
      blocks: [
        {
          kind: 'list',
          items: [
            'Tarot Trials в картах → Tarot Path: ходишь по клеткам Нотами аркан, собираешь Chests of Destiny (до 7, 6 редкостей Green → Rainbow), ловушки снимают жизнь; Fateful Contest открывает сундуки.',
            'Дроп: Fates (Micro/Medium), Kismets, Dual Kismets, Star Net с уровня карты 86 (TM8); Undetermined Fates с 89 (Profound).',
            '**Destiny** заменяет узлы талантов на боевой странице пакта: Micro Fate вместо Micro-узла или в Micro Destiny Slot (до 9); Medium Fate до 4 слотов; Kismet легендарная Medium Destiny; Dual Kismet работает только парой одинаковых; Undetermined Fate даёт 1–3 слота без требований квалификации. Снятие стоит Elixir of Oblivion и уничтожает судьбу; Dream Net снимает без потери. Примеры: Micro Fate +5–7% сопротивления, +14–18% урона, +12–15 к атрибуту.',
          ],
        },
      ],
    },
    {
      id: 'core-others',
      title: 'Прочие механики, ушедшие в кор',
      blocks: [
        {
          kind: 'table',
          head: ['Механика', 'Суть'],
          rows: [
            [
              'Vorax (SS11)',
              'органы и швы: Vorax Gear ilvl 86–90, Vorax Exchange (конечности Decayed/Engorged/Throbbing → гир 86/89/90), Vorax Imprint, Graft; Core Organs из разбора Ultimate-легендарок (SS14: 1 шт.)',
            ],
            [
              'Oasis / Sandlord (SS8)',
              'внекартовая база: ресурсы и работники 5 профессий, Shipments (ежедневные отправки за FE), Gliders (рейды, ресурсы и Probes); основной источник зондов',
            ],
            [
              'Outlaw / TOWER Co.',
              'Carjack в картах; Crime Rating 5 звёзд; с 3 звёзд Central Vault (сейфы, босс); Hot Streak: 6 рискованных реролов за TOWER Tokens; TOWER Sequence на оружии',
            ],
            [
              'Clockwork Ballet',
              'Doll Employees, рейтинги E → SSS, Operation Cogwheel, зонд Doll',
            ],
            [
              'The Frozen Canvas',
              'снежные фрагменты из Confusion-карт; сложность открывается этажами Divine Ascent',
            ],
            [
              'Lunaria (SS12)',
              'Лунные статуи, Lunar Harp до Lv. 5, Lunar Strings (уникальный эффект + 2 аффикса, не торгуются), Strum/Charges/Combo, Rhapsody +100% дропа',
            ],
            [
              'Creation (SS12)',
              'созвездие с TM8; Compass Creation Crystals с резонансом (SS14: дроп резонанса из них снижен)',
            ],
            [
              'Overrealm, Cage',
              'высокосложные лут-энкаунтеры в картах; Cage усилен в Deep Space; Overrealm даёт Hazes',
            ],
            [
              "Hunter's Forge",
              'этажи иллюзий с Aember Incarnations; одноразовые награды усиления',
            ],
            [
              'Legendary Vision',
              'выбрать легендарку, чей вес дропа поднимается на время',
            ],
            [
              'Exchange / Black Market',
              'ненужное снаряжение → Flame Residue → Flame Dust; Exchange Proofs, Black Gold',
            ],
          ],
        },
      ],
    },
    {
      id: 'trade-house',
      title: 'Trade House',
      blocks: [
        {
          kind: 'list',
          items: [
            'Открывается на 60 ур.; слоты на аккаунт: 3, с 70 ур. 6, с 90 ур. 9; Premium Booth Tabs за Primocryst с лимитом в сезон. Листинг 24 ч, виден после задержки; изменить цену — снять и выставить заново. Покупки падают в History, налог считается при получении. Коллекция до 20 предметов, поиск по аффиксам с группами условий.',
            '**Налог**: справочник описывает принцип «при получении нескольких единиц одной валюты система удерживает 1 единицу». По сезонным нотам: SS1 — 1 из 7, первые 100 FE без налога; с SS2 — 1 из 8 (12,5%), первые 200 FE без налога. Актуальность на SS14 не подтверждена. Jona Tax Vouchers возвращают налог.',
            'С SS14 все сделки только за Flame Elementium. Pactspirits между игроками не торгуются.',
          ],
        },
      ],
    },
    {
      id: 'where-drops',
      title: 'Что где фармится',
      blocks: [
        {
          kind: 'table',
          head: ['Ресурс', 'Основной источник'],
          rows: [
            [
              'Flame Elementium, Flame Sand',
              "везде; созвездие Commodities; обмен Fluorescent Memories; Warden's Caches; продажа Familiar Nexus с Keegan",
            ],
            ['Embers', 'везде; массово God of Might; Ember Compass/Probe'],
            [
              'Beacons',
              'боссы карт; Goddess of Hunting / God of War; Rank 1–4 у Trader за Resonance; Deep Space Beacon в Profound и Nightmare TM8',
            ],
            [
              'Compasses',
              'везде редко; массово боссы и Goddess of Hunting; легендарные с TM8 (мало) и Profound',
            ],
            ['Probes', 'Oasis/Sandlord (глайдеры)'],
            [
              'Netherrealm Resonance',
              'везде часто; магазин Blessings from Gods',
            ],
            [
              'Legendary gear',
              'везде; массово Dwarven Automatons (God of Might) и Dark Surge; Stingy/Alarmed; Sprout of Legends',
            ],
            ['Legendary Hero Relics / Memories', 'только Blacksail'],
            ['Legendary Divinity Slates', 'только Cube of Rapacity'],
            ["Nether King's Divinity, Divine Remnants", 'Afterlight'],
            [
              'Soul Candles, Pages of Aeterna, Candle Tears',
              'только City of Aeterna',
            ],
            ['Activation Medium', 'только Folklores/Mistville'],
            [
              'Fates / Kismets / Star Net',
              'Arcana с ур. 86; Undetermined Fate с 89, Hot Streak, обмен Fluorescent',
            ],
            ['Навыки Lv. 21', 'Traveler; обмен Fluorescent Memories'],
            ['Сапп-навыки «Precise:»', 'Path of the Brave'],
            ['Star Talents', 'Plane Watchers, Travelers, Confusion Cards'],
            ['Familiar Nexus', 'Keegan 50% / Uber Keegan 100%'],
            ['Nameplates, письма, Tartarus Skills, Shackles', 'SS14 Tartarus'],
            ['Conquest Insignias', 'Plane Watcher Profound макс. сложности'],
            ['TOWER Tokens, Vault Keycards', 'Outlaw'],
          ],
          wrapFirst: true,
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Game Manual (torchcodex)',
      url: 'https://legacy.torchcodex.com/latest/en/manual.html',
      note: 'версия до SS13',
    },
    {
      title: 'Патчноуты SS14 Tartarus',
      url: 'https://torchlight.xd.com/ss14pn/?lang=en',
    },
    {title: 'Официальный сайт SS14', url: 'https://torchlight.xd.com/'},
    {
      title: 'tlidb: Tartarus Season',
      url: 'https://tlidb.com/en/Tartarus_Season',
    },
    {
      title: 'tlidb: Netherrealm, Void Chart, Compass, Probe, Help',
      url: 'https://tlidb.com/en/Netherrealm',
    },
    {
      title: 'PCGamesN: SS14',
      url: 'https://www.pcgamesn.com/torchlight-infinite/update-tartarus-season',
    },
    {
      title: 'IGGM: превью SS14',
      url: 'https://www.iggm.com/news/torchlight-infinite-season-14-preview-livestream-revealed-tartarus-the-ultimate-one-more',
    },
    {
      title: "ApolloTrail: гайд по Warden's Duty",
      url: 'https://apollotrail.com/blog/torchlight-infinite-tartarus-wardens-duty-chromatic-inmates-food-chain-riot',
    },
    {
      title: 'Tartarus Simulator (CoffeeBns)',
      url: 'https://blahdot3h.github.io/tartarus-simulator/',
    },
    {
      title: 'Vortex Gaming: фарм Keegan',
      url: 'https://vortexgaming.io/en/postdetail/692031',
    },
    {
      title: 'Gfinity: Path of the Brave',
      url: 'https://www.gfinityesports.com/article/torchlight-infinite-path-of-the-brave',
      note: '2022',
    },
  ],
}
