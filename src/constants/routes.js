const routes = {
  // unauthenticated
  Login: "/Login",
  Register: "/Register",

  //Landing Page
  Home: "/",

  //Dessert Museum
  LandingDesert: "/LandingDessert",
  DessertBooking: "/TheDessertMuseum/Booking",
  DessertBookingDefault: "/TheDessertMuseum/Booking/:locationParams",
  Packages: "/TheDessertMuseum/Packages",

  //Gootopia
  LandingGootopia: "/Gootopia",
  ObstaclesGootopia: "/Gootopia/Obstacles",
  PackagesGootopia: "/Gootopia/Packages",
  FaqsGootopia: "/Gootopia/Faqs",
  ContactsGootopia: "/Gootopia/Contacts",
  BookingGootopia: "/Gootopia/Booking",
  BookingGootopiaDefault: "/Gootopia/Booking/:locationParams",

  //The Inflatable Island
  LandingInflatableIsland: '/TheInflatableIsland',
  BookingInflatable: "/TheInflatableIsland/Booking",
  BookingInflatableDefault: "/TheInflatableIsland/Booking/:locationParams",

  //TFR
  LandingTFR: "/TFR",
  ObstaclesTFR: "/TFR/Obstacles",
  PackagesTFR: "/TFR/Packages",
  FaqsTFR: "/TFR/Faqs",
  ContactsTFR: "/TFR/Contacts",
  BookingTFR: "/TFR/Booking",
  BookingTFRDefault: "/TFR/Booking/:locationParams/",

  //Bakebe
  LandingBakebe: "/Bakebe",
  BookingBakebe: "/Bakebe/Booking",
  BookingBakebeDefault: "/Bakebe/Booking/:locationParams",

  Profile: "/Profile",
  Tickets: "/Tickets",
  Transaction: "/Transaction",
  PaymentSuccess: "/PaymentSuccess",
  PaymentFailed: "/PaymentFailed",

  PageNotFound: "*"
};

export default routes;
