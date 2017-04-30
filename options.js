const options = [
  {
    id: 'vasectomy',
    name: 'Vasectomy',
    typical_use_failure: 0.15,
    perfect_use_failure: 0.1,
    type: 'Sterilization',
    implementation: 'Surgical Procedure',
    user_action_required: 'Once',
    gender: 'm',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }, {
    id: 'tubal-ligation',
    name: 'Tubal Ligation',
    typical_use_failure: 0.5,
    perfect_use_failure: 0.5,
    type: 'Sterilization',
    implementation: 'Surgical Procedure',
    user_action_required: 'Once',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }, {
    id: 'sponge',
    name: 'Sponge',
    typical_use_failure: 32,
    perfect_use_failure: 20,
    type: 'Barrier & Spermicide',
    implementation: 'Vaginal Insertion',
    user_action_required: 'Every act of intercourse',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }, {
    id: 'minipill',
    name: 'Minipill',
    typical_use_failure: 9,
    perfect_use_failure: 0.3,
    type: 'Progestogen',
    implementation: 'Oral medication',
    user_action_required: 'Daily',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'true',
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'morning-after-pill',
    name: 'Morning After Pill',
    typical_use_failure: -1,
    perfect_use_failure: -1,
    type: 'Emergency contraception pill',
    implementation: 'Oral medication',
    user_action_required: 'Every act of intercourse',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'contraceptive-ring',
    name: 'Contraceptive Ring',
    typical_use_failure: 9,
    perfect_use_failure: 0.3,
    type: 'Ring',
    implementation: 'Vaginal insertion',
    user_action_required: 'In place 3 weeks / 1 week break',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'true',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'condom',
    name: 'Condom',
    typical_use_failure: 18,
    perfect_use_failure: 2,
    type: 'Barrier',
    implementation: 'Placed on erect penis',
    user_action_required: 'Every act of intercourse',
    gender: 'm',
    has_steady_partner: 'false',
    need_to_be_well_organised: 'true',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: false,
    description: 'description'
  }, {
    id: 'iud-progestogen',
    name: 'IUD with Progestogen',
    typical_use_failure: 0.2,
    perfect_use_failure: 0.2,
    type: 'Intrauterine & Progestogen',
    implementation: 'Intrauterine',
    user_action_required: '3-7 years',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'iud-copper',
    name: 'IUD with Copper',
    typical_use_failure: 0.8,
    perfect_use_failure: 0.6,
    type: 'Intrauterine & Progestogen',
    implementation: 'Intrauterine',
    user_action_required: '3 to 12+ years',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }, {
    id: 'female-condom',
    name: 'Female Condom',
    typical_use_failure: 21,
    perfect_use_failure: 5,
    type: 'Barrier',
    implementation: 'Vaginal insertion',
    user_action_required: 'Every act of intercourse',
    gender: 'f',
    has_steady_partner: 'false',
    need_to_be_well_organised: 'false',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }, {
    id: 'contraceptive-injection',
    name: 'Contraceptive Injection',
    typical_use_failure: 3,
    perfect_use_failure: 0.3,
    type: 'Progestogen',
    implementation: 'Injection',
    user_action_required: '12 weeks',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'true',
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'contraceptive-patch',
    name: 'Contraceptive Patch',
    typical_use_failure: 8,
    perfect_use_failure: 0.3,
    type: 'Estrogen & progestogen',
    implementation: 'Transdermal patch',
    user_action_required: 'Weekly',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'true',
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'contraceptive-implant',
    name: 'Contraceptive Implant',
    typical_use_failure: 0.05,
    perfect_use_failure: 0.05,
    type: 'Progestogen',
    implementation: 'Subdermal implant',
    user_action_required: '3-5 years',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'never', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'contraceptive-pill',
    name: 'Contraceptive Pill',
    typical_use_failure: 9,
    perfect_use_failure: 0.3,
    type: 'Estrogen & progestogen',
    implementation: 'Oral Medication',
    user_action_required: 'Daily',
    gender: 'f',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'true',
    when_think_about: 'routine', // at_the_time, routine, never
    hormone_altering: 'true',
    description: 'description'
  }, {
    id: 'withdrawal-method',
    name: 'Withdrawal Method',
    typical_use_failure: 18,
    perfect_use_failure: 4,
    type: 'Behavioral',
    implementation: 'Withdrawal',
    user_action_required: 'Every act of intercourse',
    gender: 'm',
    has_steady_partner: 'true',
    need_to_be_well_organised: 'false',
    when_think_about: 'at_the_time', // at_the_time, routine, never
    hormone_altering: 'false',
    description: 'description'
  }
]

module.exports = options
