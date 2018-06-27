
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('overviews', (table) => {
      table.increments('id').primary();
      table.string('rest_name', 75);
      table.string('description', 850);
      table.string('phone_number', 75);
      table.string('website', 250);
      table.string('executive_chef', 75);
      table.string('parking_details', 500);
    }),
    knex.schema.createTable('price_ranges', (table) => {
      table.increments('id').primary();
      table.string('price_range', 100);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('dining_styles', (table) => {
      table.increments('id').primary();
      table.string('dining_style', 100);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('cuisine_types', (table) => {
      table.increments('id').primary();
      table.string('cuisine_type', 100);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('hours_of_operation', (table) => {
      table.increments('id').primary();
      table.string('breakfast', 250);
      table.string('lunch', 250);
      table.string('dinner', 250);
      table.time('breakfast_start');
      table.time('breakfast_end');
      table.time('lunch_start');
      table.time('lunch_end');
      table.time('dinner_start');
      table.time('dinner_end');
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('payment_options', (table) => {
      table.increments('id').primary();
      table.string('card_type', 75);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('dress_codes', (table) => {
      table.increments('id').primary();
      table.string('dress_code', 100);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('locations', (table) => {
      table.increments('id').primary();
      table.string('address', 350);
      table.string('neighborhood', 350);
      table.string('cross_street', 350);
      table.string('parking_details', 350);
      table.string('public_transit', 350);
      table.float('lat', 6);
      table.float('lgn', 6);
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    }),
    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('tag_name', 75);
      table.integer('vote_count');
      table.integer('overviews_id')
        .references('id').inTable('overviews');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('price_ranges'),
    knex.schema.dropTableIfExists('dining_styles'),
    knex.schema.dropTableIfExists('cuisine_types'),
    knex.schema.dropTableIfExists('hours_of_operation'),
    knex.schema.dropTableIfExists('payment_options'),
    knex.schema.dropTableIfExists('dress_codes'),
    knex.schema.dropTableIfExists('locations'),
    knex.schema.dropTableIfExists('tags'),
    knex.schema.dropTableIfExists('overviews')
  ]);
};
