exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '123456adf0qwertyu',
          make: 'VW',
          model: 'Tiguan',
          mileage: '39500',
        },
        {
          vin: '123456sazd90qwertyv',
          make: 'Dodge',
          model: 'Journey',
          mileage: '18123',
        },
        {
          vin: '123456ddd90qwertyw',
          make: 'Chevy',
          model: 'Malibu',
          mileage: '29754',
        },
        {
          vin: '123456adsfwertyw',
          make: 'Chevy',
          model: 'Malibu',
          mileage: '29754',
        },
        {
          vin: '1234567adfawertyx',
          make: 'VW',
          model: 'Beetle',
          mileage: '47450',
        },
        {
          vin: '1234567890qwertyy',
          make: 'Ram',
          model: '1500',
          mileage: '24000',
        },
      ]);
    });
};
