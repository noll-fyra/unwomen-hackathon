const options = [
  {
    name: 'Vasectomy',
    typical_use_failure: 0.15,
    perfect_use_failure: 0.1,
    type: 'Sterilization',
    implementation: 'Surgical Procedure',
    user_action_required: 'Once',
    gender: 'm',
    has_steady_partner: true,
    need_to_be_well_organised: false,
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description',
  }, {
    name: 'Tubal Ligation',
    typical_use_failure: 0.5,
    perfect_use_failure: 0.5,
    type: 'Sterilization',
    implementation: 'Surgical Procedure',
    user_action_required: 'Once',
    gender: 'f',
    has_steady_partner: true,
    need_to_be_well_organised: false,
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description',
  }, {
    name: 'Sponge',
    typical_use_failure: 32,
    perfect_use_failure: 20,
    type: 'Barrier & Spermicide',
    implementation: 'Vaginal Insertion',
    user_action_required: 'Every act of intercourse',
    gender: 'f',
    has_steady_partner: true,
    need_to_be_well_organised: false,
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description',
  }, {
    name: 'Minipill',
    typical_use_failure: 9,
    perfect_use_failure: 0.3,
    type: 'Progestogen',
    implementation: 'Oral medication',
    user_action_required: 'Daily',
    gender: 'f',
    has_steady_partner: true,
    need_to_be_well_organised: true,
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: true,
    description: 'description',
  }, {
    name: 'Morning After Pill',
    typical_use_failure: -1,
    perfect_use_failure: -1,
    type: 'Emergency contraception pill',
    implementation: 'Oral medication',
    user_action_required: 'Every act of intercourse',
    gender: 'f',
    has_steady_partner: true,
    need_to_be_well_organised: false,
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: true,
    description: 'description',
  }, {
    name: 'Contraceptive Ring',
    typical_use_failure: 9,
    perfect_use_failure: 0.3,
    type: 'Ring',
    implementation: 'Vaginal insertion',
    user_action_required: 'In place 3 weeks / 1 week break',
    gender: 'f',
    has_steady_partner: true,
    need_to_be_well_organised: true,
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: true,
    description: 'description',
  }, {
    name: 'Condom',
    typical_use_failure: 18,
    perfect_use_failure: 2,
    type: 'Barrier',
    implementation: 'Placed on erect penis',
    user_action_required: 'Every act of intercourse',
    gender: 'm',
    has_steady_partner: false,
    need_to_be_well_organised: true,
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description',
  }, {
    name: 'IUD with Progestogen',
    typical_use_failure: 0.2,
    perfect_use_failure: 0.2,
    type: 'Intrauterine & Progestogen',
    implementation: 'Intrauterine',
    user_action_required: '3-7 years',
    gender: 'f',
    has_steady_partner: false,
    need_to_be_well_organised: true,
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description',
  }
]