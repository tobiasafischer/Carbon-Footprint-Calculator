const housing = {
   electricity: (_, { kWh }) => ({ footprint: kWh * 0.7 }),
   naturalGas: (_, { therms }) => ({ footprint: therms * 6.6 }),
   fuelOil: (_, { litres }) => ({ footprint: litres * 11.6 }),
   LPG: (_, { litres }) => ({ footprint: litres * 6.8 }),
   waste: (_, { kg }) => ({ footprint: kg * 0.02 }),
   // so, this was a little confusing for me. I ended up referring to this https://www.usbr.gov/lc/socal/basinstudies/OWOWReferences/FinalReport/TM%202%20GHGE%20Calculator.pdf
   // On page 70, you can see the intensities table which combined together for NorCal in kWh/MG
   // is 1450 kWh/MG, then divided by 1 million to get the EF per gallon went to 0.00145 kWh/MG
   water: (_, { galons }) => ({ footprint: galons * 0.00145 }),
}

const transportation = {
   vehicle: (_, { miles }) => ({ footprint: miles * (8.78 / 30 + 1.55 / 30) }),
   bus: (_, { miles }) => ({ footprint: miles * 0.053 }), // average co2 emission per passenger/mile
   metro: (_, { miles }) => ({ footprint: miles * 0.099 }), // avg co2 emission per passenger/ mile
   taxi: (_, { miles }) => ({ footprint: miles * 0.4132 }), // taxi averaging 25 mpg
   rail: (_, { miles }) => ({ footprint: miles * 0.113 }), // national average co2 emission
   // using co2 emission for median air travel >= 300 miles <= 2300 miles
   flying: (_, { miles }) => ({ footprint: miles * 1.09 * 0.133 }),
}

// a little confused on these factors, but i am using data from this graph
// https://ourworldindata.org/food-choice-vs-eating-local
// which is kgco2e per 1kg and then i am taking that and seeing what is the kg in 1 cal of the amt
// and then using my factor as that, not 100% sure if this is correct though
const food = {
   // average kg / cal of beef + lamb is 0.00037 and the avg co2e/kg is 42
   redMeat: (_, { cal }) => ({ footprint: cal * 365 * (0.00037 * 42) }),

   // 0.00042 kg in 1 cal of chicken is 6 kgco2e per 1kg of chicken
   whiteMeat: (_, { cal }) => ({ footprint: cal * 365 * (0.00042 * 6) }),

   // 0.00025 kg in 1 cal of cheese is 21 kgco2e per 1kg of cheese
   dairy: (_, { cal }) => ({ footprint: cal * 365 * (0.00025 * 21) }),

   // 0.00027 kg in 1 cal of cereal is 2.16 kgco2e per 1kg of cereal
   cereals: (_, { cal }) => ({ footprint: cal * 365 * (0.00027 * 2.16) }),

   // 0.0015 kg in 1 cal of vegetables is 0.4 kgco2e per 1kg of vegetables
   vegetables: (_, { cal }) => ({ footprint: cal * 365 * (0.0015 * 0.4) }),

   // 0.0019 kg in 1 cal of fruit is 0.4 kgco2e per 1kg of fruit **going to use apples**
   fruit: (_, { cal }) => ({ footprint: cal * 365 * (0.0019 * 0.4) }),

   // 0.00012 kg in 1 cal of oils is 6 kgco2e per 1kg of oil **going to use olive oil**
   oils: (_, { cal }) => ({ footprint: cal * 365 * (0.00012 * 6) }),

   // 0.00018 kg in 1 cal of snacks is 3.43 kgco2e per 1kg of snacks **going to use potato chips**
   snacks: (_, { cal }) => ({ footprint: cal * 365 * (0.00018 * 3.43) }),

   // 0.0014 kg in 1 cal of drink is 0.17kg kgco2e per 1kg of drink **going to use can of coke**
   drinks: (_, { cal }) => ({ footprint: cal * 365 * (0.0014 * 0.17) }),
}

module.exports = {
   ...housing,
   ...transportation,
   ...food,
}
