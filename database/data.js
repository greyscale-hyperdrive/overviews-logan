const restaurants = [
  {
    rest_id: 1001,
    rest_name: 'Cento Osteria',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco\n
                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1002,
    rest_name: 'Otoro Sushi',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1003,
    rest_name: 'Monsieur Benjamin',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1004,
    rest_name: 'Rosa Mexicano - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1005,
    rest_name: 'Frascati',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1006,
    rest_name: 'Lao Table',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Thai',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1007,
    rest_name: 'Terzo',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1008,
    rest_name: 'Mela Tandoori Kitchen',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1009,
    rest_name: 'Hayes Street Grill',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1010,
    rest_name: 'Dispensa Italian Charcoal Kitchen',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1011,
    rest_name: 'Hashiri',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1012,
    rest_name: 'China Live',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1013,
    rest_name: 'Flores',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1014,
    rest_name: 'FANG',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1015,
    rest_name: 'Jardiniere',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1016,
    rest_name: 'Izakaya Kou',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1017,
    rest_name: 'Amber India - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1018,
    rest_name: 'Colibri - Mexican Bistro',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1019,
    rest_name: 'Cadillac Bar & Grill',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1020,
    rest_name: 'Birdsong',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1021,
    rest_name: 'Dirty Habit',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1022,
    rest_name: 'Florio',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1023,
    rest_name: 'Hong Kong Lounge 2',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1024,
    rest_name: 'Zero Zero',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1025,
    rest_name: 'Crystal Jade Jiang Nan',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1026,
    rest_name: 'Sens Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1027,
    rest_name: 'Rocco\'s Cafe',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1028,
    rest_name: 'Tawla SF',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1029,
    rest_name: 'Troya',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1030,
    rest_name: 'Gibson',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1031,
    rest_name: 'Boulette\'s Larder and Boulibar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1032,
    rest_name: 'Scala\'s Bistro',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1033,
    rest_name: 'New Dehli Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1034,
    rest_name: 'Eight Tables by George Chen',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1035,
    rest_name: 'MKT Restaurant and Bar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1036,
    rest_name: 'Barbacco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1037,
    rest_name: 'Thai Spice',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Thai',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1038,
    rest_name: 'Revelry Bistro',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1039,
    rest_name: 'Spice of America',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1040,
    rest_name: 'Alamo Square Seafood Grill',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1041,
    rest_name: 'SOMA Restaurant & Bar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1042,
    rest_name: 'Okane',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1043,
    rest_name: 'Puccini & Pinetti',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1044,
    rest_name: 'Catch - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1045,
    rest_name: 'Chaat Conrner - Union Square',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1046,
    rest_name: 'Osha Thai Noodle Cafe on Geary',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Thai',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1047,
    rest_name: 'The Cavalier',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1048,
    rest_name: 'Waterbar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1049,
    rest_name: 'Chili House',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1050,
    rest_name: 'Omakase',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1051,
    rest_name: 'Z & Y Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1052,
    rest_name: 'Gracias Madre - SF',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1053,
    rest_name: 'Delarosa\'s Downtown',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1054,
    rest_name: 'Marlowe',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1055,
    rest_name: 'Tratto',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1056,
    rest_name: 'Kokkari Estiatorio',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1057,
    rest_name: 'Aliment',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1058,
    rest_name: 'Clay Oven on Haight',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1059,
    rest_name: 'Kitchen Istanbul',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1060,
    rest_name: 'Nomica',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1061,
    rest_name: 'Leo\'s Oyster Bar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1062,
    rest_name: 'Hawker Fare - SF',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Thai',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1063,
    rest_name: 'Anchor and Hope',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1064,
    rest_name: 'Tres - SF',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1065,
    rest_name: 'Pera',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1066,
    rest_name: 'El Buen Comer',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1067,
    rest_name: 'Urban Tavern',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1068,
    rest_name: 'Fog Harbor Fish House',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1069,
    rest_name: 'Kasa Indian Eatery',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1070,
    rest_name: 'The Keystone',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1071,
    rest_name: 'Ozumo - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japaenese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1072,
    rest_name: 'Besharam',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1073,
    rest_name: '54 Mint',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1074,
    rest_name: 'Farmhouse Kitchen Thai cuisines',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Thai',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1075,
    rest_name: 'Roy\'s - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1076,
    rest_name: 'Mathilde Bistro',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1077,
    rest_name: 'Mikaku Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1078,
    rest_name: 'Per Diem',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1079,
    rest_name: 'Jai Yun',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1080,
    rest_name: 'Roti Indian Bistro - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1081,
    rest_name: 'Arguello',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1082,
    rest_name: 'Truly Mediterranean',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1083,
    rest_name: 'Curbside Cafe',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1084,
    rest_name: 'Izakaya Roku',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1085,
    rest_name: 'Aslam\'s Rasoi',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1086,
    rest_name: 'Black Cat',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1087,
    rest_name: 'Bouche',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1088,
    rest_name: 'La Briciola',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Italian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1089,
    rest_name: 'Akiko\'s Restaurant & Sushi Bar',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1090,
    rest_name: 'Cocotte',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1091,
    rest_name: 'Hanlin Tea House & Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1092,
    rest_name: 'Saffron 685 Mediterranean Turkish cuisines',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1093,
    rest_name: 'PABU - San Francisco',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Japanese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1094,
    rest_name: 'Sabrosa',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1095,
    rest_name: 'Regalito Rosticeria',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mexican',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1096,
    rest_name: 'Farallon',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Seafood',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1097,
    rest_name: 'Urban Curry',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Indian',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1098,
    rest_name: 'Brandy Ho\'s Hunan Food',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Chinese',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1099,
    rest_name: 'Le Central',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'French',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  }, {
    rest_id: 1100,
    rest_name: 'LaLe Mediterranean & Turkish Restaurant',
    price_range: '$31 to $50',
    description: `The striking, urban chic restaurant offers sustainable seafood, California-grown steaks, and handcrafted cocktails. MKT offers breakfast, lunch, dinner, and weekend brunch, as well as room service and catering for Four Seasons Hotel San Francisco. After undergoing a dashing transformation, the expansive new L-shaped bar and cozy fireplace is home to creative cocktails, alongside small plates and snacks. Elevated five floors above Market Street, MKT has floor-to-ceiling views of downtown San Francisco

                  MKT Restaurant-Bar maintains three private dining and reception rooms: Windows, View, and the Private Den (PD3). 
                  Windows: 389 sq. ft. | seats 20 receptions for 40
                  View: 142 sq. ft. | seats 8
                  PD3: 700 sq. ft. | seats 20, receptions for 50`,
    dining_style: 'Casual Elegant',
    cuisine: 'Mediterranean',
    hours_of_operation: {
      breakfast: 'Breakfast: Daily 6:30am - 11:30am',
      lunch: 'Lunch: Daily 11:30am - 2:30pm',
      dinner: 'Tuesday through Saturday 6:00pm - 10:00pm',
    },
    phone_number: '(415) 633-3838',
    website: 'http://www.mktrestaurantandbar.com/',
    payment_options: 'AMEX, Carte Blanche, Diners Club, Discover, JCB, MasterCard, Visa',
    dress_code: 'Business Casual',
    executive_chef: 'Cyrille Pannier',
    location: {
      lat: 37.786350,
      lng: -122.404263,
    },
    address: '757 Market St. Four Seasons Hotel San Francisco, CA 94103',
    neighborhood: 'Downtown / Union Square',
    cross_street: 'Market Street between 3rd and 4th streets',
    parking_details: 'Validated valet parking is available at reduced rates when dining in the restaurant. Our private driveway is located at 217 Stevenson Street off Third Street, between Mission and Market Streets. If you have a GPS system, please enter 217 Stevenson Street for detailed directions.',
    public_transit: 'Muni/BART: Powell Station (4th & Market)',
    tags: [
      {
        tagName: 'Business meals',
        voteCount: 0,
      }, {
        tagName: 'Great for Lunch',
        voteCount: 5,
      }, {
        tagName: 'Good for a Date',
        voteCount: 10,
      }, {
        tagName: 'Banquet',
        voteCount: 13,
      }, {
        tagName: 'Bar Dining',
        voteCount: 2,
      }, {
        tagName: 'Full Bar',
        voteCount: 20,
      }, {
        tagName: 'Corkage Fee',
        voteCount: 10,
      }, {
        tagName: 'Non-smoking',
        voteCount: 4,
      }, {
        tagName: 'Wheelchair Access',
        voteCount: 15,
      },
    ],
  },
];

module.exports = restaurants;
