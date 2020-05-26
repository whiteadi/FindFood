export const API_URL = "https://www.themealdb.com/api/json/v1";

export const API_KEY = 1;

export const getIngredientImage = (name) => {
  const foundIngredient = ingredients.find(
    (ingredient) =>
      name.toLowerCase().indexOf(ingredient.name.toLowerCase()) !== -1 ||
      ingredient.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  );

  return foundIngredient && foundIngredient.length > 0
    ? foundIngredient.photo_url
    : "";
};

export const ingredients = [
  {
    ingredientId: 0,
    name: "Oil",
    photo_url:
      "https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg",
  },
  {
    ingredientId: 1,
    name: "Salt",
    photo_url:
      "https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg",
  },
  {
    ingredientId: 2,
    name: "Russet potatoes",
    photo_url:
      "http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg",
  },
  {
    ingredientId: 3,
    name: "Paprika",
    photo_url:
      "https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg",
  },
  {
    ingredientId: 4,
    name: "Black Pepper",
    photo_url: "https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg",
  },
  {
    ingredientId: 5,
    name: "Celery salt",
    photo_url:
      "https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg",
  },
  {
    ingredientId: 6,
    name: "Dried sage",
    photo_url:
      "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png",
  },
  {
    ingredientId: 7,
    name: "Garlic powder",
    photo_url:
      "https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6",
  },
  {
    ingredientId: 8,
    name: "Ground allspice",
    photo_url:
      "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg",
  },
  {
    ingredientId: 9,
    name: "Dried oregano",
    photo_url: "https://frutascharito.es/886-large_default/oregano.jpg",
  },
  {
    ingredientId: 10,
    name: "Dried basil",
    photo_url:
      "https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png",
  },
  {
    ingredientId: 11,
    name: "Dried marjoram",
    photo_url:
      "https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg",
  },
  {
    ingredientId: 12,
    name: "All-purpose flour",
    photo_url:
      "https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg",
  },
  {
    ingredientId: 13,
    name: "Brown sugar",
    photo_url:
      "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png",
  },
  {
    ingredientId: 14,
    name: "Kosher salt",
    photo_url:
      "https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg",
  },
  {
    ingredientId: 15,
    name: "Whole chicken",
    photo_url:
      "https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg",
  },
  {
    ingredientId: 16,
    name: "Eggs",
    photo_url:
      "https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg",
  },
  {
    ingredientId: 17,
    name: "Quarts neutral oil",
    photo_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85",
  },
  {
    ingredientId: 18,
    name: "Water",
    photo_url: "https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg",
  },
  {
    ingredientId: 19,
    name: "Onion Powder",
    photo_url:
      "https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg",
  },
  {
    ingredientId: 20,
    name: "MSG",
    photo_url:
      "https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg",
  },
  {
    ingredientId: 21,
    name: "Chicken Breast",
    photo_url:
      "https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6",
  },
  {
    ingredientId: 22,
    name: "Onion chopped",
    photo_url: "https://s3.envato.com/files/246703499/IMG_1752_5.jpg",
  },
  {
    ingredientId: 23,
    name: "Tomato paste",
    photo_url:
      "http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg",
  },
  {
    ingredientId: 24,
    name: "Chilli Powder",
    photo_url:
      "https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6",
  },
  {
    ingredientId: 25,
    name: "Ground Beef",
    photo_url:
      "https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a",
  },
  {
    ingredientId: 26,
    name: "Can kidney beans, rinsed and drained ",
    photo_url:
      "https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg",
  },
  {
    ingredientId: 27,
    name: "Large Tortillas",
    photo_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg",
  },
  {
    ingredientId: 28,
    name: "Firtos",
    photo_url:
      "https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg",
  },
  {
    ingredientId: 29,
    name: "Shredded cheddar",
    photo_url:
      "https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg",
  },
  {
    ingredientId: 30,
    name: "Lime",
    photo_url: "https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg",
  },

  {
    ingredientId: 31,
    name: "Ground cumin",
    photo_url:
      "https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg",
  },
  {
    ingredientId: 32,
    name: "Cayenne pepper",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg",
  },
  {
    ingredientId: 33,
    name: "Flaky white fish",
    photo_url:
      "https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg",
  },
  {
    ingredientId: 34,
    name: "Avocado",
    photo_url:
      "https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg",
  },
  {
    ingredientId: 35,
    name: "Red Pepper Flakes",
    photo_url:
      "https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg",
  },
  {
    ingredientId: 36,
    name: "Onions",
    photo_url: "http://www.allwhitebackground.com/images/2/2650.jpg",
  },
  {
    ingredientId: 37,
    name: "Green Pepper",
    photo_url: "https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg",
  },
  {
    ingredientId: 38,
    name: "Red Pepper",
    photo_url: "https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg",
  },
  {
    ingredientId: 39,
    name: "Pizza dough",
    photo_url:
      "https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg",
  },
  {
    ingredientId: 40,
    name: "Ketchup sauce",
    photo_url:
      "https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg",
  },
  {
    ingredientId: 41,
    name: "Hot Sauce",
    photo_url:
      "https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI=",
  },
  {
    ingredientId: 42,
    name: "Butter",
    photo_url:
      "https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg",
  },
  {
    ingredientId: 43,
    name: "Heavy Cream",
    photo_url:
      "https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0=",
  },
  {
    ingredientId: 44,
    name: "whole-milk plain yogurt",
    photo_url:
      "https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg",
  },
  {
    ingredientId: 45,
    name: "Chesse",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg",
  },
  {
    ingredientId: 46,
    name: "Mozzarella",
    photo_url:
      "https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg",
  },
  {
    ingredientId: 47,
    name: "celery stalks",
    photo_url:
      "https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750",
  },
  {
    ingredientId: 48,
    name: "Parmesan Chesse",
    photo_url: "https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg",
  },
  {
    ingredientId: 49,
    name: "pancetta",
    photo_url:
      "https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg",
  },
  {
    ingredientId: 50,
    name: "Spaghetti",
    photo_url:
      "https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg",
  },
  {
    ingredientId: 51,
    name: "Garlic",
    photo_url:
      "https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg",
  },
  {
    ingredientId: 52,
    name: "Lasagna noodles",
    photo_url:
      "https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg",
  },
  {
    ingredientId: 53,
    name: "Italian sauce",
    photo_url:
      "https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg",
  },
  {
    ingredientId: 54,
    name: "Crushed Tomatoes",
    photo_url:
      "https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 55,
    name: "Sugar",
    photo_url:
      "https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 56,
    name: "minced fresh parsley",
    photo_url:
      "https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg",
  },
  {
    ingredientId: 57,
    name: "ricotta cheese",
    photo_url:
      "https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg",
  },
  {
    ingredientId: 58,
    name: " fennel seed",
    photo_url:
      "https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg",
  },
  {
    ingredientId: 59,
    name: "Banana",
    photo_url:
      "https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg",
  },
  {
    ingredientId: 60,
    name: "Frozen Straberries",
    photo_url:
      "https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png",
  },
  {
    ingredientId: 61,
    name: "Greek Yogurt",
    photo_url:
      "http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg",
  },
];
