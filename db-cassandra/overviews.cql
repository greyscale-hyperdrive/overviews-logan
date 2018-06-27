USE greyscale_overviews;

CREATE TYPE IF NOT EXISTS address (
  street text,
  city text,
  state text,
  zip text,
  neighborhood text,
  cross_street text
);

CREATE TYPE IF NOT EXISTS location (
  lat float,
  lgn float
);

CREATE TYPE IF NOT EXISTS menu_hours (
  description text,
  start timestamp,
  end timestamp
);

CREATE TABLE IF NOT EXISTS overview_by_id (
  rest_id int PRIMARY KEY,
  rest_name text,
  price_range text,
  description text,
  dining_style text,
  cuisine text,
  phone_number text,
  website text,
  payment_options set<text>,
  dress_code text,
  location frozen<location>,
  address frozen<address>,
  parking_details text,
  public_transit text,
  tags map<text, int>,
  hours_of_operation map<text, frozen<menu_hours>>
);
