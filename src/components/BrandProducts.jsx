import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/BrandProducts.css";


const brandProductsData = {
  bosch: [
    {
      id: 1, name: "Bosch Chimney", image: "/images/bosch_chimney.png", price: "₹59,990", description: " DWKA98H601  High-efficiency kitchen chimney with modern design."
    },
    {
      id: 2, name: "Bosch Coffee Machine ", image: "/images/bosch-coffeemachine.png", price: "₹1,10,000", description: "TIE2030IN Bosch coffee machine delivers rich, aromatic coffee with precision brewing, sleek design, and easy-to-use controls—perfect for café-quality coffee at home.."
    },
    {
      id: 3, name: "Dish washer", image: "/images/bosch-dishwasher.png", price: "₹93,490", description: "A Bosch dishwasher offers powerful cleaning, quiet performance, and efficient water usage, delivering spotless dishes with advanced technology and reliable German engineering."
    },
    {
      id: 4, name: "Hobs", image: "/images/bosch-hobs.png", price: "₹44,490", description: "Bosch hob delivers precise heat control, fast cooking, and a sleek, modern design—making everyday cooking efficient, safe, and effortless."
    },
    {
      id: 5, name: "Refrigerator", image: "/images/bosch-refrigerator.png", price: "₹1,79,160", description: "Bosch refrigerator offers advanced cooling technology, spacious storage, and energy efficiency to keep your food fresh for longer with a sleek, modern design."
    },
    {
      id: 6, name: "Oven", image: "/images/bosch-oven.png", price: "₹1,79,990", description: "A Bosch oven delivers even cooking, precise temperature control, and modern design—perfect for baking, roasting, and grilling with consistent, delicious results."
    },
  ],
  sujata: [
    {
      id: 1, name: "Sujata Dynamix ", image: "/images/sujata-dynamix.jpg", price: "₹10,197", description: "A powerful and durable mixer designed for fast grinding, smooth blending, and long-lasting performance."
    },
    {
      id: 2, name: "Sujata FrootMix", image: "/images/sujata-frootmix.jpg", price: "₹7,614", description: "A compact and powerful mixer ideal for quick blending, juicing, and everyday kitchen tasks."
    },
    {
      id: 3, name: "Sujata MegaMix", image: "/images/sujata-megamix.jpg", price: "₹7,947", description: "A versatile mixer for efficient grinding, mixing, and blending with reliable performance every time."
    },
    {
      id: 4, name: "Sujata MultiMix", image: "/images/sujata-multimix.jpg", price: "₹11,880", description: "A handy mixer for all-round kitchen tasks, delivering quick and smooth blending with ease."
    },
    {
      id: 5, name: "Sujata Powermatic", image: "/images/sujata-powermatic.jpg", price: "₹7,947", description: "A high-performance mixer designed for fast, effortless grinding and blending with lasting durability."
    },
    {
      id: 6, name: "Sujata Powermatic Plus", image: "/images/sujata-powermaticplus.jpg", price: "₹9,504", description: "– A powerful and versatile mixer for heavy-duty grinding and smooth, consistent blending every time."
    },
    {
      id: 7, name: "Sujata SuperMix", image: "/images/sujata-supermix.jpg", price: "₹9,009", description: "A compact yet powerful mixer for quick and efficient grinding, blending, and everyday kitchen use."
    }

  ],
  weber: [
    {
      id: 1, name: "Weber Q Gas Grill", image: "/images/weberqgasgrill.avif", price: "₹65,595", description: " A modern gas grill that sits pretty on your patio, with the power of two burners. Small enough to fit in a smaller yard yet big enough to grill an entire roast. "
    },
    {
      id: 2, name: "Weber Q Electric Grill", image: "/images/weberqelectric.avif", price: "₹39,995", description: " An urban barbecue is no longer wishful thinking with a Q 1400 electric grill."
    },
    {
      id: 3, name: "Compact Kettle Charcoal Grill", image: "/images/webercomp47.avif", price: "₹13,995", description: "It’s a matter of time before the new and improved Compact charcoal grill becomes part of your everyday life."
    },
    {
      id: 4, name: "Compact Kettle Charcoal Grill 47 cm", image: "/images/webercomp57.avif", price: "₹19,995", description:  "Whether sizzling meat, assembling unique skewers, or roasting tender chops."
    },
    {
      id: 5, name: "Go-Any Where Charcoal Grill 57 cm", image: "/images/webergoany.avif", price: "₹10,495", description: "Travel with a taste of home. While spending most days on the way to somewhere else, the Go-Anywhere portable charcoal grill brings you back, even while on the road."
    },
    {
      id: 6, name: "Smokey Joe Premium Charcoal Grill", image: "/images/webersmokeyjoe.avif", price: "₹9,995", description: "Once you grab the handle of the new and improved Smokey Joe® Premium portable charcoal grill, the opportunity for adventure is endless.."
    },
    {
      id: 7, name: "Jumbo Joe Charcoal Grill", image: "/images/weberjumbo.avif", price: "₹13,495", description: "Get ready for a night of adventures or pack the car for a beach party. All you need are friends, food, and the new and improved Jumbo Joe portable charcoal grill to kick it off."
    },
    {
      id: 8, name: "Spirit SP-335 Gas Grill", image: "/images/weberspirit.avif", price: "₹1,29,995", description: "The three-burner Spirit SP-335 gas grill is equipped with everything you need to barbecue an entire meal outside, and is built to last with a stainless steel finish. ."
    },
    {
      id: 9, name: "Genesis E-435 GBS Gas Grill", image: "/images/webergenesis.avif", price: "₹2,84,995", description: " WEBER CRAFTED Outdoor Kitchen Collection compatibility provides limitless culinary possibilities, enabling you to cook food never thought possible on the grill. "
    }
  ],
  futura: [
    {
     id: 1, name: "Nano Button", image: "/images/futura-nano.png", price: "₹42,500", description: "Sleek design with durable stainless steel for everyday use."   
    },
    {
     id: 2, name: "FS 3018 FRS", image: "/images/futura-fs.png", price: "₹32,500", description: "Modern, easy-to-clean sink built for long-lasting performance."   
    },
    {
     id: 3, name: "FS 21118 IS", image: "/images/sink1.jpeg", price: "₹20,111", description: "Functional and stylish, perfect for any kitchen setup."   
    },
    {
     id: 4, name: "FS 2418 IS", image: "/images/sink2.jpeg", price: "₹33,111", description: "Compact yet spacious, combining practicality with elegance."   
    },
    {
     id: 5, name: "FS 2718 IS", image: "/images/sink3.jpeg", price: "₹38,111", description: "Resistant to stains and scratches for hassle-free maintenance."   
    },
    {
     id: 6, name: "FS 2818 IS", image: "/images/sink4.jpeg", price: "₹39,111", description: "Smooth finish with a contemporary look for modern kitchens."   
    },
    {
     id: 7, name: "FS 3318 IS", image: "/images/sink5.jpeg", price: "₹44,111", description: "Built for convenience, durability, and effortless cleaning."   
    },
    {
     id: 8, name: "FS 3610 IS", image: "/images/sink6.jpeg", price: "₹47,111", description: "Timeless design that complements every kitchen style."   
    },
    {
     id: 9, name: "FS 3920 IS", image: "/images/sink7.jpeg", price: "₹43,111", description: "Stylish and sturdy, designed for daily kitchen efficiency."   
    },

    
  ],
  aosmith: [
    {
     id: 1, name: "Pro Planet-P7", image: "/images/aoproplanet.png", price: "₹33,100", description: "ProPlanet P7 gives you 100% RO purified, baby-safe water, thanks to its 8-stage purification process."   
    },
    {
     id: 2, name: "X9 Water purifier", image: "/images/aox9.png", price: "₹21,000", description: "Stylishly crafted, elegantly designed, the A.O.Smith X9, provides a Healthy life with Elegant Style."   
    },
    {
     id: 3, name: "Z2 Pro", image: "/images/aoz2pro.png", price: "₹26,490", description: "Z2 Pro is designed specifically to be placed under the kitchen counter. Except for the faucet that comes along with it"   
    },
    {
     id: 4, name: "Intelli-UV-Pro", image: "/images/aoinntellipro.png", price: "₹20,200", description: "Now get purified hot water with A.O. Smith Intelli UV Pro. It comes with UV+UF(Ultra Fine)+ SCMT Technology ."   
    },
  ],
  carysil: [
    {
     id: 1, name: "Waltz 610", image: "/images/carysil-waltz610.png", price: "₹42,900", description: "Concrete with Black Accessories."   
    },
    {
     id: 2, name: "Waltz 780", image: "/images/carysil-waltz780.png", price: "₹36,100", description: "Concrete with Black accessories."   
    },
    {
     id: 3, name: "Crystal  2118", image: "/images/carysil-crystal2118.png", price: "₹11,990", description: "Graphite / Charcoal."   
    },
    {
     id: 4, name: "Crystal 3618", image: "/images/carysil-crystal3618.png", price: "₹16,050", description: "Charcoal / Graphite."   
    },
    {
     id: 5, name: "ASL 2201", image: "/images/carysil-2201.png", price: "₹7,730", description: "Satin Color."   
    },
    {
     id: 6, name: "ALA 2301", image: "/images/carysil-ala2301.png", price: "₹18,300", description: "Nickel Brush."   
    },
    {
     id: 7, name: "ALA 05107", image: "/images/carysil-ala05107.png", price: "₹16,300", description: "Chrome + cornflakes."   
    }
  ],
  orient: [
    {
     id: 1, name: "Eleganza 1", image: "/images/orient-eleganza1.png", price: "₹30,500", description: "Chandelier Fan Ez-01."   
    },
    {
     id: 2, name: "Eleganza 2", image: "/images/orient-eleganza2.png", price: "₹35,500", description: "Chandelier Fan Ez-02."   
    },
    {
     id: 3, name: "Aeroslim IoT & Remote", image: "/images/orient-aeroslim.png", price: "₹15,800", description: "Flame gold, Brown , Marble white, white ."   
    },
    {
     id: 4, name: "Subaris Royal with remote", image: "/images/orient-subaris.png", price: "₹11,599", description: "Antique Copper , Antique Brass , Antique Gold."   
    },
    {
     id: 5, name: "Ecotech Prime", image: "/images/orient-ecotechprime.png", price: "₹4,950", description: "Powerful airflow with energy-efficient performance.."   
    },
    {
     id: 7, name: "Wall 47 Trendz High Speed", image: "/images/orient-wall47trendz.png", price: "₹3,590", description: "Stylish design delivering consistent, refreshing air."   
    },
    {
     id: 8, name: "Zippy Pro", image: "/images/Orient-zippyro.png", price: "₹2,600", description: "Quiet operation with effective cooling for every room."   
    },
    {
     id: 9, name: "Desk 26", image: "/images/orient-desk26.png", price: "₹3,110", description: "Fast, wide-spread airflow for instant comfort."   
    },
  ],
  faber: [
    {
      id: 1, name: "Sky lift", image: "/images/faber-skylift.jpg", price: "₹12,500", description: "Cassettes dishwasher safe , 3 speed , electric control."
    },
    {
      id: 2, name: "Nest Plus ", image: "/images/faber-nestplus.jpg", price: "₹1,10,000", description: "Cassettes dishwasher safe , 3 speed , electric control."
    },
    {
      id: 3, name: "Talika", image: "/images/faber-talika.jpg", price: "₹93,490", description: "Cassettes dishwasher safe , 3 speed , electric control , spotlight 2 x 20W."
    },
    {
      id: 4, name: "Pareo Plus", image: "/images/faber-pareo.webp", price: "₹44,490", description: "Cassettes dishwasher safe , 3 speed , electric control , spotlight 4 x 20W."
    },
    {
      id: 5, name: "Hercules Isola DTC BK 60/90", image: "/images/faber-hercules.webp", price: "₹1,79,160", description: "Black , Touch Control , 4 x spot LED with 1.1W"
    },
    {
      id: 6, name: "Ellora 90 BF", image: "/images/faber-ellora.webp", price: "₹1,79,990", description: "Blacktempered glass , Remote, Touch & Gesture , 2 x 1.5W LED"
    },
    {
      id: 7, name: "Roma 4BB BK CI ", image: "/images/faber-roma4bb.png", price: "₹4,990", description: "Looks great , Cooks better."
    },
  ],
  hindware: [
    {
      id: 1, name: "Optimus I Pro", image: "/images/optimus-ipro.webp", price: "₹63,990", description: "Powerful suction for a smoke-free kitchen."
    },
    {
      id: 2, name: "Ornate Duo", image: "/images/ornate-duo.webp", price: "₹1,59,990", description: "Fast and quiet, keeping your kitchen fresh."
    },
    {
      id: 3, name: "Florence", image: "/images/florence.webp", price: "₹64,990", description: "Sleek design with efficient odor and smoke removal."
    },
    {
      id: 4, name: "Delecia", image: "/images/delecia.webp", price: "₹43,990", description: "Energy-efficient chimney with modern aesthetics."
    },
    {
      id: 5, name: "Fabio", image: "/images/fabio.webp", price: "₹22,490", description: "Durable, stylish, and effective for daily cooking."
    },
    {
      id: 6, name: "Scarlet", image: "/images/scarlet.webp", price: "₹25,990", description: "Durable, stylish, and effective for daily cooking."
    },
    {
      id: 7, name: "Ivana 3B 75CM", image: "/images/ivana.webp", price: "₹56,990", description: "Durable, stylish, and effective for daily cooking."
    },
    
  ],
   zerob: [
    {
      id: 1, name: "AS8 – 8000LPH Water Softener", image: "/images/zerob-as8.png", price: "₹28,000", description: "Auto Soft 8 converts hard water into soft water and comes with distinctive Purple Resin Media."
    },
    {
      id: 2, name: " Autocarbon 3000LPH", image: "/images/zerob-autocarbon.png", price: "₹65,241", description: " new generation of activated carbon for the removal of chlorine, undesirable colour, and odour from the water."
    },
    {
      id: 3, name: "Icy Hot Jumbo", image: "/images/Zerob-icyhotjumbo.png", price: "₹1,75,000", description: "stylishly designed machine that delivers purified water in three temperature options: hot, cold, and normal."
    },
    {
      id: 4, name: "Indromatic", image: "/images/zerob-indromatic.png", price: "₹4,59,000", description: "Advanced packaged reverse osmosis system"
    },
    {
      id: 5, name: "LAB-Q Smart – Type II", image: "/images/zerob-labq.png", price: "₹1,12,000", description: "INDION Lab-Q smart (Type II) water maker produces pure water which is essential for creating chemical reagents"
    },
    {
      id: 6, name: "UV Chill", image: "/images/zerob-uvchill.png", price: "₹80,000", description: "ZeroB eco Chill water cooler comes with UV + ESS technology. "
    }, 
  ],
  blanco: [
    {
      id: 1, name: "Adira", image: "/images/blanco-adira.png",  description: "Modern design with superior functionality"
    },
    {
      id: 2, name: " Andano", image: "/images/blanco-andano.png", description: " Functional Elegance - A stainless steel bowl with everything you need."
    },
    {
      id: 3, name: "Axia III", image: "/images/blanco-axia.png",  description: "The AXEN Concept: uniquely ergonomic"
    },
    {
      id: 4, name: "Axis", image: "/images/blanco-axis.png",  description: "Ergonomics and efficiency define the tried and tested AXen concept."
    },
    {
      id: 5, name: "Claron", image: "/images/blanco-claron.png",  description: "Perfect in Design & Function"
    },
    {
      id: 6, name: "Collectis", image: "/images/blanco-collectis.png",  description: "Sorting System"
    }, 
    {
      id: 7, name: "Dalago", image: "/images/blanco-dalago.png", description: "Clear lines – maximum capacity"
    }, 
    {
      id: 8, name: "Dana", image: "/images/blanco-dana.png",  description: "Large capacity in a small space"
    }, 
  ],
  franke: [
    {
      id: 1, name: "BWX 220", image: "/images/franke-bwx.jpg",  description: " stainless steel, PVD coating color copper and nanocoating, flushmount/slimtop and undermount"
    },
    {
      id: 2, name: " BXM 210", image: "/images/franke-bxm.jpg", description: "  stainless steel, PVD coating color anthracite and nanocoating, flushmount/slimtop."
    },
    {
      id: 3, name: "GRAND", image: "/images/franke-grand.jpg",  description: " stainless steel brushed 600x468mm, X BRUSHED/SATIN, 3 1/2 , no overflow,with waste kit"
    },
    {
      id: 4, name: "INSTI", image: "/images/franke-insti.jpg",  description: "with Waste Kit,no overflow,no drainer, multipacking with 4 naked sinks."
    },
    {
      id: 5, name: "OMNI", image: "/images/franke-omni.jpg",  description: "with Waste Kit,no overflow,no drainer, multipacking with 4 naked sinks"
    },
    {
      id: 6, name: "TRENDY", image: "/images/franke-trendy.jpg",  description: "TRX 621 steel brushed621 1175x500mm, X BRUSHED/SATIN, 3 1/2 , reversible, no overflow, with waste kit"
    }, 
    {
      id: 7, name: "SATIN ADRIAN", image: "/images/franke-621.jpg",  description: "AYX 621-116-18, 1160x510mm, reversible, microdecor, 3 1/2, without Waste Kit, no tap hole, with waste kit, with overflow"
    }, 
  ],
  kitchenaid: [
    {
      id: 1, name: "Classic Series", image: "/images/kitchenaid-1.jpg",  description: " Black"
    },
    {
      id: 2, name: " Watt stand mixer", image: "/images/kitchenaid-2.jpg", description: "  Red"
    },
    {
      id: 3, name: "Baking Mixer", image: "/images/kitchenaid-3.webp",  description: " stainless golden"
    },
    {
      id: 4, name: "INSTI", image: "/images/kitchenaid-4.jpeg",  description: "Stainless silver."
    },
    {
      id: 5, name: "OMNI", image: "/images/kitchenaid-5.webp",  description: "Baby pink"
    },
    {
      id: 6, name: "TRENDY", image: "/images/kitchenaid-6.jpg",  description: "wooden kit"
    }, 
  ],
  dyson: [
    {
      id: 1, name: "Dyson Products", image: "/images/dyson-1.jpg",  description: "Vaccum cleaner , Hair dryer , Purifier."
    },
    {
      id: 2, name: " Multi styler and Dryer", image: "/images/dyson-2.jpg", description: "All hair conditioning products in on Go."
    },
    {
      id: 3, name: "Dyson Products", image: "/images/dyson-4.png",  description: "Various products form vaccum cleaner to hair dryer."
    },
    {
      id: 4, name: "Dyson Products", image: "/images/dyson-5.jpg",  description: "Various products form vaccum cleaner to hair dryer."
    },
    {
      id: 5, name: "Vaccum cleaner ", image: "/images/dyson-6.webp",  description: "sleek ble and black covered."
    },
    {
      id: 6, name: "Hair Smoothener", image: "/images/dyson-7.webp",  description: "Silver and matt black covered Stylish Smoothener"
    }, 
  ],
  blowhot: [
    {
      id: 1, name: "Evana BAC", image: "/images/blowhot-1.webp",  description: "Square Shaped Chimney."
    },
    {
      id: 2, name: " CAMELLIA BAC", image: "/images/blowhot-2.webp", description: "Motion sensor Gesture."
    },
    {
      id: 3, name: "Vega SLNAD", image: "/images/blowhot-3.webp",  description: "Electric Chimney."
    },
    {
      id: 4, name: "Electra TAC MS", image: "/images/blowhot-4.webp",  description: "Auto Clean Wall Mounted Chimney ."
    },
    {
      id: 5, name: "LARA MS ", image: "/images/blowhot-5.webp",  description: "Square shaped chimney."
    },
    {
      id: 6, name: "Corolla", image: "/images/blowhot-6.webp",  description: "Blowhot electronic Chimney."
    }, 
  ],
  hafele: [
    {
      id: 1, name: "Brass burner gas hob", image: "/images/hafele-1.jpg",  description: "4 Burner Black Glass."
    },
    {
      id: 2, name: "Brass burner gas hob ", image: "/images/hafele-2.jpg", description: "5 burner, anthracite steel."
    },
    {
      id: 3, name: "Brass burner gas hob", image: "/images/hafele-3.jpg",  description: "4 burner, anthracite steel."
    },
    {
      id: 4, name: "Built-in, induction hob", image: "/images/hafele-4.jpg",  description: "2zone , Black Glass."
    },
    {
      id: 5, name: "Built-in, induction hob", image: "/images/hafele-5.jpg",  description: "Black Glass."
    },
    {
      id: 6, name: "Built-in, microwave with grill function", image: "/images/hafele-6.jpg",  description: "Maria 28, 28L Microwave Oven with Grill Function, easy button operation, grill and defrost function."
    }, 
    {
      id: 7, name: "Built-in, induction hob", image: "/images/hafele-7.jpg",  description: "Bella 30, 30 cm BUILT-IN induction 2 Zone Induction Hob with Premium SCHOTT Glass Surface."
    }, 
  ],
  kent: [
    {
      id: 1, name: "Grand", image: "/images/kent-1.webp",  description: "Wall Mountable Ro + Flow Rate 20L/hr."
    },
    {
      id: 2, name: "Grand B ", image: "/images/kent-2.webp", description: "Wall Mountable Ro + Flow Rate 20L/hr."
    },
    {
      id: 3, name: "Grand Star", image: "/images/kent-3.webp",  description: "Wall Mountable Ro + Flow Rate 20L/hr."
    },
    {
      id: 4, name: "Grand star B", image: "/images/kent-4.webp",  description: "Wall Mountable Ro + Flow Rate 20L/hr."
    },
    {
      id: 5, name: "Grand Plus", image: "/images/kent-5.webp",  description: "Wall Mountable Ro + Flow Rate 20L/hr."
    },
    {
      id: 6, name: "Grand Plus B", image: "/images/kent-6.webp",  description: "Wall Mountable Ro + Flow Rate 20L/hr."
    }, 
  ],
  atomberg: [
    {
      id: 1, name: "Renesa BLDC Motor", image: "/images/atom-1.jpg",  description: "with Remote 1200 mm Ceiling Fan ( Midnight Black )."
    },
    {
      id: 2, name: "Renesa+ 1200mm BLDC ", image: "/images/atom-2.jpg", description: "Ceiling Fan with Remote Control | BEE 5 star Rated Energy."
    },
    {
      id: 3, name: " ERICA", image: "/images/atom-3.webp",  description: "Comfortable Experience, Offering optimal performance and remote control."
    },
    {
      id: 4, name: "Renesa Halo", image: "/images/atom-4.webp",  description: "Seasand Ivory 1200 mm Ceiling Fan With Remote Control ."
    },
    {
      id: 5, name: "Renesa+ BLDC Motor", image: "/images/atom-5.webp",  description: "with Remote 900 mm Ceiling Fan ( Sand Grey )."
    },
    {
      id: 6, name: " Aris Starlight", image: "/images/atom-6.webp",  description: "Smart Ceiling Fan 1200MM Dark Teakwood."
    }, 
  ],
   prestige: [
    {
      id: 1, name: "Pressure Cooker", image: "/images/prestige-1.webp",  description: "5 L , 3 L ,2 L , Outerlid induction bottom pressure."
    },
    {
      id: 2, name: "Electric Induction ", image: "/images/prestige-2.webp", description: "Prestige PIC 1.0 V2 1900 Watts Indian Menu Options Induction."
    },
    {
      id: 3, name: " Chimney", image: "/images/prestige-3.webp",  description: "Prestige Provo 900 Kitchen Hood Chimney - Powerful Suction "
    },
    {
      id: 4, name: "Mixer Grinder", image: "/images/prestige-4.webp",  description: "Prestige Stylo 750W Mixer Grinder with 3 ss Jars."
    },
    {
      id: 5, name: "Mixer Grinder", image: "/images/prestige-5.webp",  description: "Prestige 550 Watts Supreme Mixer Grinder with 3 Stainless."
    },
    {
      id: 6, name: "Gas Stove", image: "/images/prestige-6.webp",  description: "Prestige Svachh Neo Toughened Glasstop Liftable Burners Gas."
    }, 
  ],

};

const BrandProducts = () => {
  const { brandName } = useParams();
  const products = brandProductsData[brandName.toLowerCase()] || [];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="brand-products-page">
      <h1 className="brand-products-title">
        {brandName.toUpperCase()} Products
      </h1>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedImage(product.image)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {/* 🔥 IMAGE POPUP */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img
            src={selectedImage}
            alt="Full View"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
