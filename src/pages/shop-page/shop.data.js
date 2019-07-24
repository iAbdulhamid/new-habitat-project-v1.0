const SHOP_DATA = [
    {
      id: 1,
      title: 'Refrigerators',
      routeName: 'refrigerators',
      items: [
        {
          id: 11,
          name: 'Kiriazi Solitare Freestanding Refrigerator, No Frost, 2 Doors, 12 FT, Black - KH336LN/3',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/k/h/kh335_n-3--_black_close.jpg',
          price: 7150
        },
        {
          id: 12,
          name: 'Electrostar Freestanding Eleganza Refrigerator, No Frost, 2 Doors, 24 FT, Silver - LR650EN',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/p/h/photo-2018-08-14-00-11-58.jpg',
          price: 11990
        },
        {
          id: 13,
          name: 'Unionaire Freestanding Upright Deep Freezer, No Frost, 6 Drawers, Black - UF230VSNC1',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/u/n/unionaire-deep-freezer-5-drawers-digital-black-uf205_1.jpg',
          price: 6600
        },
        {
          id: 14,
          name: 'White Whale Freestanding Deep Freezer, 7 Drawers, 300 Liters, Stainless Steel - WF-3067MSS',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/w/h/white-whale-7-drawers-deep-freezer-dual-function-digital-screen-stainless-wf-3067mss-digital.jpg',
          price: 9700
        },
        {
          id: 15,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 16,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 17,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 18,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Gas Cookers',
      routeName: 'gascookers',
      items: [
        {
          id: 21,
          name: 'Unionaire Freestanding i-Steel Gas Cooker, 5 Burners, Stainless Steel, 90 cm - C6090FC511-I',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/j/o/job_5541-min.jpg',
          price: 4300
        },
        {
          id: 22,
          name: 'Fresh Plaza Gas Cooker, 5 Burners, Black, 90 cm - 6330',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/1/f/1frco609plaza6330l90.jpg',
          price: 3400
        },
        {
          id: 23,
          name: 'Unionaire 5 Burners i-Cook Pro Gas Cooker, Stainless Steel, 100 cm - C60100SC',
          imageUrl: 'Unionaire 5 Burners i-Cook Pro Gas Cooker, Stainless Steel, 100 cm - C60100SC',
          price: 7170
        },
        {
          id: 24,
          name: 'Fresh Hummer Gas Cooker, 5 Burners, Stainless Steel, 90 cm - ST6372',
          imageUrl: 'https://btech.com/media/catalog/product/cache/56fc7608da6a7793df783fca172b74a3/h/u/hummer-90-digital.jpg',
          price: 6630
        },
        {
          id: 25,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 26,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 27,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 28,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    // {
    //   id: 3,
    //   title: 'Jackets',
    //   routeName: 'jackets',
    //   items: [
    //     {
    //       id: 1,
    //       name: 'Black Jean Shearling',
    //       imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
    //       price: 125
    //     },
    //     {
    //       id: 2,
    //       name: 'Blue Jean Jacket',
    //       imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
    //       price: 90
    //     },
    //     {
    //       id: 3,
    //       name: 'Grey Jean Jacket',
    //       imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
    //       price: 90
    //     },
    //     {
    //       id: 4,
    //       name: 'Brown Shearling',
    //       imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
    //       price: 165
    //     },
    //     {
    //       id: 5,
    //       name: 'Tan Trench',
    //       imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
    //       price: 185
    //     }
    //   ]
    // },
    // {
    //   id: 4,
    //   title: 'Womens',
    //   routeName: 'womens',
    //   items: [
    //     {
    //       id: 1,
    //       name: 'Blue Tanktop',
    //       imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
    //       price: 25
    //     },
    //     {
    //       id: 2,
    //       name: 'Floral Blouse',
    //       imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
    //       price: 20
    //     },
    //     {
    //       id: 3,
    //       name: 'Floral Dress',
    //       imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    //       price: 80
    //     },
    //     {
    //       id: 4,
    //       name: 'Red Dots Dress',
    //       imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
    //       price: 80
    //     },
    //     {
    //       id: 5,
    //       name: 'Striped Sweater',
    //       imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
    //       price: 45
    //     },
    //     {
    //       id: 6,
    //       name: 'Yellow Track Suit',
    //       imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
    //       price: 135
    //     },
    //     {
    //       id: 7,
    //       name: 'White Blouse',
    //       imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
    //       price: 20
    //     }
    //   ]
    // },
    // {
    //   id: 5,
    //   title: 'Mens',
    //   routeName: 'mens',
    //   items: [
    //     {
    //       id: 1,
    //       name: 'Camo Down Vest',
    //       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
    //       price: 325
    //     },
    //     {
    //       id: 2,
    //       name: 'Floral T-shirt',
    //       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    //       price: 20
    //     },
    //     {
    //       id: 3,
    //       name: 'Black & White Longsleeve',
    //       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
    //       price: 25
    //     },
    //     {
    //       id: 4,
    //       name: 'Pink T-shirt',
    //       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
    //       price: 25
    //     },
    //     {
    //       id: 5,
    //       name: 'Jean Long Sleeve',
    //       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
    //       price: 40
    //     },
    //     {
    //       id: 6,
    //       name: 'Burgundy T-shirt',
    //       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
    //       price: 25
    //     }
    //   ]
    // }
  ]

  export default SHOP_DATA;
  