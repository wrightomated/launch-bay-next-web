import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Barrage Rockets',
    limited: 0,
    xws: 'barragerockets',
    sides: [
      {
        title: 'Barrage Rockets',
        type: 'Missile',
        ability:
          'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
        slots: ['Missile', 'Missile'],
        charges: { value: 5, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_36.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_36.jpg',
        ffg: 265,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Cluster Missiles',
    limited: 0,
    xws: 'clustermissiles',
    sides: [
      {
        title: 'Cluster Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the [Lock] requirement.',
        slots: ['Missile'],
        charges: { value: 4, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_37.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_37.jpg',
        ffg: 266,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Concussion Missiles',
    limited: 0,
    xws: 'concussionmissiles',
    sides: [
      {
        title: 'Concussion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack hits, each ship at range 0-1 of the defender exposes 1 of its damage cards.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_38.png',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_38.jpg',
        ffg: 267,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Homing Missiles',
    limited: 0,
    xws: 'homingmissiles',
    sides: [
      {
        title: 'Homing Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
        slots: ['Missile'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_39.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_39.jpg',
        ffg: 268,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ion Missiles',
    limited: 0,
    xws: 'ionmissiles',
    sides: [
      {
        title: 'Ion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_40.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_40.jpg',
        ffg: 269,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Proton Rockets',
    limited: 0,
    xws: 'protonrockets',
    sides: [
      {
        title: 'Proton Rockets',
        type: 'Missile',
        ability: 'Attack ([Focus]): Spend 1 [Charge].',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_41.png',
        slots: ['Missile'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Bullseye Arc',
          value: 5,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_41.jpg',
        ffg: 270,
      },
    ],
    cost: { value: 7 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Energy-Shell Charges',
    limited: 0,
    xws: 'energyshellcharges',
    sides: [
      {
        title: 'Energy-Shell Charges',
        type: 'Missile',
        ability:
          'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4b6213e5ed13735bb381df08bdd1398d.png',
        slots: ['Missile'],
        ffg: 532,
      },
    ],
    restrictions: [
      { action: { type: 'Calculate', difficulty: 'White' } },
      { factions: ['Separatist Alliance'] },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Discord Missiles',
    limited: 3,
    xws: 'discordmissiles',
    sides: [
      {
        title: 'Discord Missiles',
        type: 'Missile',
        ability:
          "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee2f0b906cb4f1dbcafc274f44b76d3d.png',
        slots: ['Missile'],
        device: {
          name: 'Buzz Droid Swarm',
          type: 'Remote',
          effect:
            'After an enemy ship moves through or overlaps you, relocate to its front or rear guides (you are at range 0 of this ship). You cannot overlap an object this way. If you cannot be placed at either set of guides, you and that ship each suffer 1 [Hit] damage. Engagement Phase: At your initiative, each enemy ship at range 0 suffers 1 [Critical Hit] damage.',
        },
        ffg: 543,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Diamond-Boron Missiles',
    limited: 1,
    xws: 'diamondboronmissiles',
    sides: [
      {
        title: 'Diamond-Boron Missiles',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ability:
          "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f2c1893053af65ce47300fb133a30312.png',
        ffg: 580,
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    name: 'Mag-Pulse Warheads',
    limited: 0,
    xws: 'magpulsewarheads',
    sides: [
      {
        title: 'Mag-Pulse Warheads',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/94cdc3be1cf133e123e30f25f181faf7.png',
        ffg: 651,
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 6 },
  },
  {
    name: 'Multi-Missile Pods',
    limited: 0,
    xws: 'multimissilepods',
    hyperspace: false,
    epic: true,
    sides: [
      {
        ability:
          'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you map spend up to 2 [Charge] to roll that many additional attack dice instead.',
        title: 'Multi-Missile Pods',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ffg: -1,
      },
    ],
    cost: { value: 0 },
  },
];

export default t;
