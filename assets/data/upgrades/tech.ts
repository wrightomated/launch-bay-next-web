import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Advanced Optics',
    limited: 0,
    xws: 'advancedoptics',
    sides: [
      {
        title: 'Advanced Optics',
        type: 'Tech',
        ability:
          'While you perform an attack, you may spend 1 focus token to change 1 of your blank results to a [Hit] result.',
        slots: ['Tech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e77e204e6b7164f6a1d945b20a0c4359.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/e19aa7cd99df250715c17386135cd140.jpg',
        ffg: 460,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Ferrosphere Paint',
    limited: 0,
    xws: 'ferrospherepaint',
    sides: [
      {
        title: 'Ferrosphere Paint',
        type: 'Tech',
        ability:
          "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token.",
        slots: ['Tech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/55d8ff7d35b714d9c9a6ef1fd7732a60.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/55ff3d199702695f23631d85a25bbae6.jpg',
        ffg: 488,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Hyperspace Tracking Data',
    limited: 0,
    xws: 'hyperspacetrackingdata',
    sides: [
      {
        title: 'Hyperspace Tracking Data',
        type: 'Tech',
        ability:
          'Setup: Before placing forces, you may choose a number between 0 and 6. Treat your initiative as the chosen value during Setup. After Setup, assign 1 focus or evade token to each friendly ship at range 0-2.',
        slots: ['Tech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a48713c6784bf33bd3f8b36eb19221c3.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/fa5c01453d7aa2e2f1f100593e79669d.jpg',
        ffg: 461,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['First Order'] }, { baseSizes: ['Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Primed Thrusters',
    limited: 0,
    xws: 'primedthrusters',
    sides: [
      {
        title: 'Primed Thrusters',
        type: 'Tech',
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a114625347a0f3088f4679f8107ab631.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3789dd873db0d0c74293531bef49e16e.jpg',
        slots: ['Tech'],
        ffg: 463,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8, '5': 9, '6': 10 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Targeting Synchronizer',
    limited: 0,
    xws: 'targetingsynchronizer',
    sides: [
      {
        title: 'Targeting Synchronizer',
        type: 'Tech',
        ability:
          'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/83782f01cd3486006c4d279864d2983a.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/1597042d794000fb34d1eee30cc10f35.jpg',
        slots: ['Tech'],
        ffg: 464,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Pattern Analyzer',
    limited: 0,
    xws: 'patternanalyzer',
    sides: [
      {
        title: 'Pattern Analyzer',
        type: 'Tech',
        ability:
          'While you fully execute a red maneuver, before the Check Difficulty step, you may perform 1 action.',
        slots: ['Tech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ace963fc4fe9d97f64ab8564dc4beae7.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/811e07d55f95e53fef3182020d8cbf6e.jpg',
        ffg: 462,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Biohexacrypt Codes',
    limited: 0,
    xws: 'biohexacryptcodes',
    sides: [
      {
        title: 'Biohexacrypt Codes',
        type: 'Tech',
        ability:
          'While you coordinate or jam, if you have a lock on a ship, you may spend that lock to choose that ship, ignoring range restrictions.',
        slots: ['Tech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/094f3bbc6e3041886398e9eaf692d4ab.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/14c54aef2e36ac34564194e4785c98ce.jpg',
        ffg: 491,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }, { action: { type: 'Lock' } }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Deuterium Power Cells',
    limited: 0,
    xws: 'deuteriumpowercells',
    sides: [
      {
        title: 'Deuterium Power Cells',
        type: 'Tech',
        ability:
          'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
        charges: { value: 2, recovers: 0 },
        slots: ['Tech', 'Modification'],
        ffg: 654,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c0e458b69076138e2408664be131f61e.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
  },
];

export default t;
