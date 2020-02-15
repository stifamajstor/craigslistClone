const apartments = [
  {
    date_id: "2020-02-15",
    apartment_id: "7060721562",
    location: "Berlin",
    price: "400",
    size: 0,
    bedrooms: 0,
    description:
      "Furnished, unique, ethnic style apt- for short or long period!!!!!400"
  },
  {
    date_id: "2020-02-15",
    apartment_id: "7057016829",
    location: "Berlin, Mitte",
    price: "1000",
    size: "70",
    bedrooms: "1",
    description: "Top floor apartment with terrace - march 2020"
  },
  {
    date_id: "2020-02-15",
    apartment_id: "7057017433",
    location: "Berlin, Mitte",
    price: "1000",
    size: "70",
    bedrooms: "1",
    description: "Top floor apartment with terrace - march 2020"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075441143",
    location: "Berlin",
    price: "850",
    size: 0,
    bedrooms: "2",
    description: "43mq new and cosy flat in rummelsburg / lichtenberg berlin"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075310096",
    location: "Berlin Kreuzberg Alte Brauerei",
    price: "4500",
    size: 0,
    bedrooms: "4",
    description: "Roof top paradise kreuzberg (4 rooms, open kitchen)"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7066187786",
    location: "Berlin",
    price: "500",
    size: 0,
    bedrooms: "1",
    description: "Cosy & lavishly equipped studio apartment for rent"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075147658",
    location: "",
    price: "0",
    size: 0,
    bedrooms: 0,
    description: "Snapchat sessions/ findom worship"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063873498",
    location: "Neltestra\u00dfe",
    price: "589",
    size: 0,
    bedrooms: 0,
    description:
      "Room for rent in apartment with four bedrooms in treptow-k\u00f6penick"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7058753216",
    location: "Berlin Friedrichshain",
    price: "399",
    size: 0,
    bedrooms: 0,
    description: "Updated price awesome 1 br apt with large patio"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069362147",
    location: "B\u00fcrknerstra\u00dfe, Neuk\u00f6lln",
    price: "400",
    size: 0,
    bedrooms: 0,
    description:
      "Gorgeous, furnished 1 br flat in neuk\u00f6lln near maybachufer"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7060719636",
    location: "Prenzlauer Berg",
    price: "300",
    size: 0,
    bedrooms: "1",
    description: "| 1 bedroom 1 bath | w/ stainless steel appliances |"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063370615",
    location: "Prenzlauerberg, Berlin Germany",
    price: "500",
    size: "58",
    bedrooms: "1",
    description: "Brand new 1bd classy apartment in sch\u00f6nhauser allee"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069355298",
    location: "Prenzlauer Berg",
    price: "500",
    size: "53",
    bedrooms: "1",
    description:
      "Beautiful studio in prenzlauer berg city available for move-in asap"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069593763",
    location: "Berlin's Mitte",
    price: "400",
    size: "54",
    bedrooms: 0,
    description:
      "Large 1 bed ++home great location++ tons of amenities move+in today"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069386401",
    location: "Berlin's Mitte",
    price: "400",
    size: "54",
    bedrooms: "1",
    description:
      "Large 1 bed ++home great location++ tons of amenities move+in today"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7058754746",
    location: "Kreuzberg Berlin Germany",
    price: "500",
    size: "55",
    bedrooms: "1",
    description:
      "Quiet, light-flooded, fully furnished and newly refurbished kreuzberg"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7058869246",
    location: "Wartenburgstra\u00dfe Kreuzberg",
    price: "700",
    size: "55",
    bedrooms: "1",
    description:
      "Rent your dream 1 bed 1 bath today! newly renovated units. 55 sqft"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075072480",
    location: "Berlin Prenzlauer Berg",
    price: "300",
    size: 0,
    bedrooms: "1",
    description: "Spacious lovely,1bd 1 bth newly furnished studio apartment"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075064925",
    location: "Berlin/germany",
    price: "400",
    size: 0,
    bedrooms: "1",
    description: "Very 1 bedroom spacious apt bright and comfortable in berlin"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075073036",
    location: "Prenzlauer Berg",
    price: "300",
    size: "52",
    bedrooms: 0,
    description: "Must_see! one bedroom_flat luxury_studio!"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7071926185",
    location: "Kadiner Stra\u00dfe 14, Berlin",
    price: "500",
    size: 0,
    bedrooms: "2",
    description: "Bright and centrally located two bedroom apartment"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075075751",
    location: "Neuk\u00f6lln",
    price: "750",
    size: 0,
    bedrooms: "2",
    description: "Mar 11-apr 29 - 75 sq m flat with cats"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7062233905",
    location: "Neuk\u00f6lln, Berlin",
    price: "500",
    size: "52",
    bedrooms: 0,
    description: "Washer and dryer included with this amazing 1br, 1ba"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063910338",
    location: "Charlie In Mitte",
    price: "500",
    size: "52",
    bedrooms: 0,
    description: "Central 1 bedroom apartment near checkpoint charlie in mitte"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7070647857",
    location: "Friedrichshain Berlin",
    price: "390",
    size: "50",
    bedrooms: "1",
    description: "Beautiful 1bedroom/1 bath apartment freshly remodeled flat"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069605131",
    location: "Mitte",
    price: "500",
    size: "52",
    bedrooms: 0,
    description:
      "1bdb 1ba | parking included!, on site maintenance, washer/dryer"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075071975",
    location: "Kreuzberg",
    price: "550",
    size: "45",
    bedrooms: "1",
    description: "Semi-furnished 1br kreuzberg apt 1/4 - 1/11 2020"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7064606719",
    location: "Neuk\u00f6lln",
    price: "500",
    size: "45",
    bedrooms: "1",
    description:
      "Lovely, clean and newly renovated 1bd flat with nice view! must see"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7060840015",
    location: "Prenzlauer Berg Or Storkower Str",
    price: "400",
    size: 0,
    bedrooms: "1",
    description: "Updated unit | wifi |parking| gorgeous 1 bed apartment |"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7070646196",
    location: "Ziegelstra\u00dfe",
    price: "600",
    size: "53",
    bedrooms: 0,
    description: "1 bed _family_friendly apartment_in city center"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7058874241",
    location: "Mitte, Ziegelstra\u00dfe",
    price: "600",
    size: "53",
    bedrooms: "1",
    description: "Now available! 1 bedroom 1 bath, 55 sqft."
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7067128220",
    location: "Wartenburgstra\u00dfe, Kreuzberg Berlin",
    price: "500",
    size: "60",
    bedrooms: "1",
    description: "Freshly renovated historic apartment in kreuzberg"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7068060827",
    location: "Friedrichshain",
    price: "50",
    size: "83",
    bedrooms: "1",
    description:
      "Right and charming apartment with green view in friedrichshain"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7072467504",
    location: "Mitte",
    price: "400",
    size: "45",
    bedrooms: "1",
    description: "Cozy apartment in the heart of berlin with amazing views..."
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7068061436",
    location: "Mitte",
    price: "800",
    size: "70",
    bedrooms: "2",
    description: "Super charming apartment in the gallery district mitte"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7072466538",
    location: "Mitte",
    price: "200",
    size: "84",
    bedrooms: "2",
    description: "Bright and modern 2 bedroom apartment"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7072466290",
    location: "Mitte",
    price: "200",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7072466033",
    location: "Friedrichshain",
    price: "200",
    size: "83",
    bedrooms: "2",
    description: "Spacious and bright 2 bedrooms in friedrichshain/wifi"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075062378",
    location: "Johanniterstra\u00dfe",
    price: "1050",
    size: 0,
    bedrooms: 0,
    description: "One-bedroom apartment for rent in kreuzberg"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063253637",
    location: "Reichenberger Str.",
    price: "350",
    size: 0,
    bedrooms: "1",
    description: "Fabulous! remodeled one bedroom! make it yours today!"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063253657",
    location: "Friedrichshain-kreuzberg",
    price: "350",
    size: 0,
    bedrooms: "1",
    description: "@@@fabulous! remodeled one bedroom! make it yours today!"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7063253680",
    location: "Friedrichshain-kreuzberg",
    price: "350",
    size: 0,
    bedrooms: "1",
    description: "!!!fabulous! remodeled one bedroom! make it yours today!"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7072515511",
    location: "Kreuznacher Str.",
    price: "450",
    size: 0,
    bedrooms: 0,
    description:
      "Comfortable beds for rent in shared room in two-bedroom apartment in t"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075061083",
    location: "Conradstra\u00dfe",
    price: "640",
    size: 0,
    bedrooms: 0,
    description: "Room with balcony in three-bedroom apartment in reinickendorf"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7060807531",
    location: "Rheinsberger Str. 10 10115 Berlin Germany",
    price: "450",
    size: 0,
    bedrooms: "1",
    description: "Perfect one bedroom apartment for rent in berlin"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7060804845",
    location: "10115 Berlin Germany",
    price: "410",
    size: 0,
    bedrooms: 0,
    description: "Cozy one bedroom available for rent in berlin"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7060809159",
    location: "10115 Berlin Germany",
    price: "450",
    size: 0,
    bedrooms: "1",
    description: "Furnished one bedroom apartment for rent"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7075049587",
    location: "Mitte",
    price: "1752",
    size: 0,
    bedrooms: "1",
    description: "1752 1 bedroom apartment in mitte"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7069962440",
    location: "Costa Rica, Mittelamerika",
    price: "525000",
    size: "283300",
    bedrooms: 0,
    description:
      "28,5 ha mit 15 m hohem wasserfall, riesigen b\u00e4umen und vielen tieren"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7058602336",
    location: "Aruba",
    price: "385000",
    size: "305",
    bedrooms: "6",
    description: "Aruba dutch caribbean villas for sale"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7074960886",
    location: "",
    price: "650",
    size: "60",
    bedrooms: "1",
    description: "Nice 2-bedrooms apartment for rent in neuk\u00f6lln"
  },
  {
    date_id: "2020-02-14",
    apartment_id: "7074881849",
    location: "Berlin",
    price: "0",
    size: 0,
    bedrooms: 0,
    description: "Seeking berlin flat for 1/2 person for august 202"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074869285",
    location: "Schwarzkopff Ecke Chaussee",
    price: "1150",
    size: "45",
    bedrooms: "2",
    description:
      "Sublet in mitte for a few months from 15th. feb. anmeldung possible."
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056567512",
    location: "Berlin",
    price: "70",
    size: "65",
    bedrooms: "2",
    description: "Enjoy your vacation trip to prenzlauer berg"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056566957",
    location: "Berlin",
    price: "70",
    size: "65",
    bedrooms: "2",
    description: "Enjoy your vacation trip to prenzlauer berg"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056571644",
    location: "Berlin",
    price: "0",
    size: "85",
    bedrooms: "2",
    description: "Wonderful vacation apartment central berlin"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056571962",
    location: "Berlin",
    price: "0",
    size: "85",
    bedrooms: "2",
    description: "Wonderful vacation apartment central berlin"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074825725",
    location: "Vila De Cruces, Pontevedra, Galicia",
    price: "325000",
    size: 0,
    bedrooms: "3",
    description: "Lakeside traditional galician stone house"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057444360",
    location: "Torstr/gartenstr",
    price: "950",
    size: "600",
    bedrooms: "2",
    description: "Beautiful apt and working space in heart of berlin mitte"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057444599",
    location: "Torstr/gartenstr",
    price: "950",
    size: "600",
    bedrooms: "2",
    description: "Beautiful apt and working space in heart of berlin mitte"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057443891",
    location: "Torstr/gartenstr",
    price: "950",
    size: "600",
    bedrooms: "2",
    description: "Beautiful apt and working space in heart of berlin mitte"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7073310061",
    location: "Berlin,germany.",
    price: "200",
    size: "1184",
    bedrooms: "3",
    description: "Home away from home neatly furnished apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7073295783",
    location: "Berlin,germany.",
    price: "200",
    size: "2260",
    bedrooms: "6",
    description: "Affordable and comfortable grant berlin apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7073279050",
    location: "Berlin,germany.",
    price: "100",
    size: "1238",
    bedrooms: "3",
    description: "Spacious and inexpensive apartment for your taste."
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7072882798",
    location: "Berlin,germany.",
    price: "100",
    size: "1776",
    bedrooms: "3",
    description: "Affordable and comfortable home for remarkable stay"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7072862529",
    location: "Berlin,germany.",
    price: "150",
    size: "1044",
    bedrooms: "2",
    description:
      "Flowery country-style, 3 bedrooms, 97m2, open kitchen & 2 bathrooms"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7072506002",
    location: "Berlin,germany.",
    price: "100",
    size: "1184",
    bedrooms: "2",
    description: "Spacious and inexpensive apartment centrally located."
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7072497228",
    location: "Berlin Germany",
    price: "200",
    size: "1776",
    bedrooms: "4",
    description: "Pappelallee apartment in prenzlauer berg with wifi & balcony."
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059946",
    location: "Mitte, Berlin.",
    price: "730",
    size: "65",
    bedrooms: "2",
    description: "Modern and very stylish comfort apartment.. monthly rentals"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059985",
    location: "Mitte, Berlin.",
    price: "730",
    size: "65",
    bedrooms: "2",
    description: "Modern and very stylish comfort apartment.. monthly rentals"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060060156",
    location: "Mitte, Berlin.",
    price: "730",
    size: "65",
    bedrooms: "2",
    description: "Modern and very stylish comfort apartment.. monthly rentals"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060060090",
    location: "Mitte, Berlin.",
    price: "730",
    size: "65",
    bedrooms: "2",
    description: "Modern and very stylish comfort apartment.. monthly rentals"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059922",
    location: "Mitte, Berlin.",
    price: "730",
    size: "65",
    bedrooms: "2",
    description: "Modern and very stylish comfort apartment.. monthly rentals"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059156",
    location: "Mitte, Berlin.",
    price: "0",
    size: "65",
    bedrooms: "2",
    description:
      "!!modern and very stylish comfort vacation apartment for your choice!!"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059131",
    location: "Mitte, Berlin.",
    price: "0",
    size: "65",
    bedrooms: "2",
    description:
      "!!modern and very stylish comfort vacation apartment for your choice!!"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7060059091",
    location: "Mitte, Berlin.",
    price: "0",
    size: "65",
    bedrooms: "2",
    description:
      "!!modern and very stylish comfort vacation apartment for your choice!!"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065878406",
    location: "Berlin",
    price: "0",
    size: "45",
    bedrooms: "2",
    description: "Apartment 2 bedrooms, 2 bathrooms, 6 person"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065878251",
    location: "Berlin",
    price: "0",
    size: "45",
    bedrooms: "2",
    description: "Apartment 2 bedrooms, 2 bathrooms, 6 person"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065877812",
    location: "Berlin",
    price: "0",
    size: "45",
    bedrooms: "2",
    description: "Apartment 2 bedrooms, 2 bathrooms, 6 person"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065884945",
    location: "Berlin, Germany",
    price: "0",
    size: "645",
    bedrooms: "2",
    description:
      "Cozy apartment in kreuzberg with terrace in the quiet courtyard"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065885254",
    location: "Berlin, Germany",
    price: "0",
    size: "645",
    bedrooms: "2",
    description:
      "Cozy apartment in kreuzberg with terrace in the quiet courtyard"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7064368727",
    location: "Mitte",
    price: "0",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7064368596",
    location: "Mitte",
    price: "0",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7064368501",
    location: "Mitte",
    price: "0",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057253099",
    location: "Mitte",
    price: "800",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057252786",
    location: "Mitte",
    price: "800",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057252352",
    location: "Mitte",
    price: "800",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057251818",
    location: "Mitte",
    price: "800",
    size: "112",
    bedrooms: "2",
    description: "Exceptional 2 bedroom maisonette rooftop views"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7063087875",
    location: "Berlin",
    price: "70",
    size: "55",
    bedrooms: "2",
    description: "The trendy mitte district vacation apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7063084834",
    location: "Berlin",
    price: "70",
    size: "55",
    bedrooms: "2",
    description: "The trendy mitte district vacation apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7069659412",
    location: "Berlin",
    price: "600",
    size: 0,
    bedrooms: "1",
    description: "Cosy & lavishly equipped studio apartment for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074569356",
    location: "Berlin",
    price: "450",
    size: "52",
    bedrooms: "1",
    description: "Luxury one bedroom apartment for rent in berlin"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074566782",
    location: "Berlin",
    price: "450",
    size: "52",
    bedrooms: "1",
    description: "Luxury one bedroom apartment for rent in berlin"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074567844",
    location: "Berlin",
    price: "450",
    size: "52",
    bedrooms: "1",
    description: "Luxury one bedroom apartment for rent in berlin"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7067083717",
    location: "Schnellerstra\u00dfe Berlin, Germany",
    price: "700",
    size: 0,
    bedrooms: 0,
    description:
      "Rooms for rent in four-bedroom apartment in treptow-k\u00f6penick"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7070669549",
    location: "Berlin - Neuk\u00f6lln",
    price: "100",
    size: "45",
    bedrooms: "1",
    description: "20th - 23rd february 2020 - studio flat"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7070669662",
    location: "Berlin - Neuk\u00f6lln",
    price: "100",
    size: "45",
    bedrooms: "1",
    description: "20th - 23rd february 2020 - studio flat"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7070669811",
    location: "Berlin - Neuk\u00f6lln",
    price: "100",
    size: "45",
    bedrooms: 0,
    description: "20th - 23rd february 2020 - studio flat"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074533210",
    location: "Berlin",
    price: "450",
    size: "40",
    bedrooms: "1",
    description: "Bright studio apartment for rent in neuk\u00f6lln"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7068731808",
    location: "Mitte, Berlin",
    price: "401",
    size: 0,
    bedrooms: 0,
    description: "Reserve/move in! 1br aprt for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7071714684",
    location: "Prenzlauer Berg, Berlin",
    price: "499",
    size: 0,
    bedrooms: 0,
    description: "Book 1br for anytime! make this yours today!"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7069399517",
    location: "Prenzlauer Berg, Berlin",
    price: "400",
    size: 0,
    bedrooms: 0,
    description: "Beautiful studio apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057772664",
    location: "Mitte, Berlin",
    price: "399",
    size: 0,
    bedrooms: 0,
    description: "Updated tranqil 1br apartment for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056391549",
    location: "Neuk\u00f6lln, Berlin",
    price: "300",
    size: 0,
    bedrooms: 0,
    description: "Freshly remodeled studio apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056391237",
    location: "Mitte, Berlin",
    price: "300",
    size: 0,
    bedrooms: 0,
    description: "Cosy & equipped studio apartment for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056866890",
    location: "Berlin Mitte",
    price: "1000",
    size: "65",
    bedrooms: "2",
    description: "Downtown best area in mitte - linienstr (mitte centre)"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074524792",
    location: "Prenzlauer Berg, B\u00f6tzow Kiez",
    price: "800",
    size: "55",
    bedrooms: "2",
    description: "Spacious, light studio in prenzelberg"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7071709194",
    location: "Kreuzberg, Berlin",
    price: "500",
    size: 0,
    bedrooms: 0,
    description: "Furnished 1br apartment for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056867104",
    location: "Mitte",
    price: "1000",
    size: "65",
    bedrooms: "2",
    description:
      "Central, historic flat - downtown best area in mitte - linienstr."
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7071706218",
    location: "Friedrichshain, Berlin",
    price: "499",
    size: 0,
    bedrooms: 0,
    description: "Very charming 1br studio apartment"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057262211",
    location: "Friedrichshain, Berlin",
    price: "500",
    size: 0,
    bedrooms: 0,
    description: "Newly renovated charming apartment for rent"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7056874679",
    location: "Berlin Mitte",
    price: "1000",
    size: "700",
    bedrooms: "2",
    description: "Downtown best area in mitte - linienstr (mitte centre)"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074461856",
    location: "Berlin",
    price: "400",
    size: 0,
    bedrooms: 0,
    description: "Fully furnished home with amenities inclusive"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7062807281",
    location: "Friedrichstra\u00dfe",
    price: "500",
    size: "52",
    bedrooms: 0,
    description: "+++apartment near checkpoint charlie in mitte+++"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074461459",
    location: "Kreuzberg, Berlin",
    price: "725",
    size: "37",
    bedrooms: "1",
    description:
      "I am moving abroad and looking for somebody to take over my rental con"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7074457166",
    location: "Sch\u00f6nhauser Allee",
    price: "499",
    size: "53",
    bedrooms: "1",
    description:
      "--brand new 1 bedroom apartment-- at sch\u00f6nhauser allee with balcony--"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7059222244",
    location: "",
    price: "390",
    size: "52",
    bedrooms: 0,
    description: "----->cosy & confortable 1 bedroom situated in fried'hain"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7071325256",
    location: "",
    price: "500",
    size: "45",
    bedrooms: "1",
    description:
      "Rooftop studio in neuk\u00f6lln near volkspark hasenheide and rathaus neuk\u00f6"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7065294791",
    location: "Mitte",
    price: "500",
    size: "52",
    bedrooms: "1",
    description: "Lovely 1 bedroom apartment near checkpoint charlie in mitte"
  },
  {
    date_id: "2020-02-13",
    apartment_id: "7057701982",
    location: "Germany Berlin Friedrichshain",
    price: "390",
    size: 0,
    bedrooms: 0,
    description: "Cable/ internet ready, secured parking, 1 bedroom flat"
  }
];
