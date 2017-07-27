# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# rake db:reset rake db:seed
# nick = User.create!(:username => "Nicholas", :password => "password")

Product.destroy_all
Message.destroy_all

fleece = Product.create!(:title => "Momentum Full-Zip Fleece Jacket", :body =>
"Layer up for your early-morning approaches with The North Face Momentum
full-zip fleece jacket. It offers just the right amount of warmth and protection
for active endeavors in the cold.", :price => 67.99, :brand => "The North Face",
:image_url => "https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941112/f6d9248f-5e7f-4343-8fcb-b91aa032d943_qvkvjd.png",
:features => ["Midweight fleece has ample stretch for full range of motion on the trails",
"Hand pockets secure with zippers",
"Active fit",
"Closeout",
"Imported."])

sleeping_bag1 = Product.create!(:brand => 'Kelty', :price => 149.95, :title => 'Cosmic Down 20 Sleeping Bag',
:body => 'The Cosmic Down 20 sleeping bag is insulated with water-resistant DriDown™ that resists moisture,
has exceptional loft and compresses down small, making it a great bag for 3-season backpacking.',
:image_url => "https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941264/56c6b3ff-afeb-4f8b-811d-0f28dd0ef27c_zrfuu3.jpg",
:features => ["Ripstop polyester creates a smooth yet durable shell; polyester taffeta lining breathes for comfort and feels great against skin",
"600-fill-power DriDown has a water-resistant finish that allows down insulation to resist moisture, dry fast and maintain loft",
"60 in. dual-slider locking zipper with antisnag design and draft tube to hold in warmth",
"Thermal comfort hood has drawcords of differing widths at head and neck for easy identification and adjustment in the dark",
"Full draft collar drapes comfortably over neck and shoulders, sealing out drafts",
"Natural-fit footbox provides plenty of room so feet don't feel scrunched",
"Quilt-through construction provides maximum warmth without cold spots",
"Stuff sack included"])

sleeping_bag2 = Product.create!(:brand => 'Big Agnes', :price => 249.95, :title => 'Lost Ranger 15 Sleeping Bag
', :body => 'The Lost Ranger 15 sleeping bag offers warmth, compressibility and the Big Agnes System design.
Lightweight enough for backpacking, this down bag is made to feel more like the comforter on your bed.',
:image_url => "https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941311/010542fe-ae3b-47c3-a85f-1409bc255b3b_hqtvd1.jpg",
:features => ["650-fill DownTek insulation absorbs 30% less water and dries 60% faster than untreated down, and retains significantly more loft than untreated down after exposure to moisture",
"Insotect Flow construction keeps the insulation next to your body for more efficient heat distribution, and a semirectangular shape provides a comfy cozy sleep experience",
"Polyester mini-ripstop microfiber shell fabric is soft and sports a durable water repellent (DWR) finish to fend off light rain and stains",
"Sculpted contour allows the bag to drape around you, increasing insulation performance",
"Free Range Hood design gives you the freedom to lift your head while snuggled in the hood",
"Design improves connection between integrated pad sleeve and bag, providing a roomier sleeping space without adding bulk",
"Low-profile cordlock lets you un-cinch the hood with just one hand",
"Tapered, vaulted footbox creates wiggle room for your feet without creating large cold air pockets",
"Stretch fabric panel beneath hood creates a designated pillow pocket",
"70 in. (178cm) YKK #8 zipper with zipper garage",
"Mate together left and right zip bags",
"No-draft collar; no-draft wedge; no-draft zipper",
"Interior fabric loops for sleeping bag liners; exterior loops for hang drying or storage",
"Includes a mesh storage sack and nylon stuff sack"] )

sleeping_bag3 = Product.create!(:brand => 'REI Co-op', :price => 59.95, :title => "REI Co-op Kindercone Sleeping Bag - Kids'",
:body => 'Built to keep your young camper warm even in freezing temps (down to 30°F), the kid-friendly REI Kindercone sleeping
bag lets you adjust the length as your child grows.', :image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941344/5d6234c5-6465-437e-95b5-1beb045d785b_hiruab.jpg',
:features => ["Synthetic fill insulates even when damp",
"Attached stuff sack cinches down to adjust sleeping bag’s length",
"Mummy-bag shape has generous interior volume",
"Ripstop nylon shell is lightweight, durable, and resistant to water and abrasion",
"Soft polyester taffeta liner has bright, fun graphics",
"Differentiated neck and hood drawcords are easy to identify by feel",
"2-way, antisnag coil zipper"
])

sleeping_bag4 = Product.create!(:brand => 'The North Face', :price => 159.00,
:title => 'The North Face Dolomite Double 20 Sleeping Bag', :body => 'When cuddling is a big part of your outdoor experience, the 20° Dolomite Double bag from The North Face offers plenty of room for two to stretch out and get comfortable—or snuggle as one.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941379/6d237e3e-93cb-4233-aad1-27a27df2c90d_gyudlx.jpg',
:features =>["Heatseeker™ Eco insulation offers a great warmth-to-weight ratio, is highly compressible and is extremely durable; composed of 30% post-consumer recycled material",
"Zipper zips all the way around the footbox and allows the sleeping bag to be opened up completely for use as a comforter"])

sleeping_bag5 = Product.create!(:brand => 'NEMO', :price => 349.95, :title => 'NEMO Riff 30 Sleeping Bag',
:body => 'Side sleepers are bound to love the unique spoon shape of the NEMO Riff 30 3-season sleeping bag, which has extra room at the elbows and knees and integrated Thermo Gills for temperature management.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941417/6ee0be99-b627-420c-83df-ed245550fdf3_ccaoif.jpg',
:features => ["Insulated with premium 800-fill-power Nikwax Hydrophobic Down, which is flourocarbon-free, water-resistant and Responsible Down Standard Certified",
"Thermo Gills extend the temperature range of your bag on milder nights, allowing you to unzip and let heat out without letting cold drafts in",
"The Blanket Fold at the neck allows for tucked-in comfort just like your bed at home",
"The waterproof/breathable footbox protects against tent wall condensation to keep your feet warm and toasty",
"Vertical baffling prevents cold spots from occurring due to migration of down",
"Stuff a jacket or extra clothes into the integrated Pillow Pocket to create a handy pillow on the go",
"Zippered stash pocket keeps your phone or other essentials warm and within reach",
"Full-length double-slider YKK zipper with snag guard built into the draft tube makes getting in and out of the bag a breeze",
"Includes nylon stuff sack and cotton storage bag"
])



bike1 = Product.create!(:brand => 'Salsa', :price => 3799.00 , :title => 'Salsa Deadwood 29+ GX1 Bike - 2017',
:body => 'Open up infinite possibilities with the Salsa Deadwood 29+ GX1 full-suspension bike, which gives a momentum-holding, flat corner-crushing ride whether racing or connecting points on unfamiliar maps.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941449/caf4f42d-16a2-4835-993c-a3ff974c5116_c11d44.jpg',
:features => ["Frame geometry tailored specifically to the 29+ wheel diameter paired with 100mm front and 91mm rear travel yields a momentum-holding, flat corner-crushing ride",
"Pairs slack and low trail bike style geometry with serious travel generally found on steep race bikes",
"Split Pivot rear suspension eliminates unwanted suspension movement during acceleration and braking for maximum traction and pedaling efficiency",
"Designed to use 29+ x 2.6 - 3.0 in. tires for serious traction, smooth rolling and increased momentum over varied terrain; switch down to a standard 29 for a snappier feel",
"High-modulus carbon fiber front triangle offers improved stiffness and better vibration damping at a lighter weight, and has 6066-T6 aluminum stays for durability",
"Replaceable derailleur hanger and sealed cartridge bearings",
"Seat tube is dropper post compatible (not included)",
"Tapered head tube increases front-end frame and fork stiffness without adding significant weight",
"Pedals sold separately",
"Specs are subject to change"
])

bike2 = Product.create!(:brand => 'GHOST', :price => 1999.00, :title => 'GHOST Kato FS 3 27.5 Bike - 2017',
:body => 'The GHOST Kato FS 3 mountain bike offers advanced full-suspension technology, speed and control, all at the price of a hardtail.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941478/ab70da22-a5a9-4c0e-992e-09ce9535078c_isnvwa.jpg',
:features => ["Hydroformed aluminum frame is stiff and strong; slack head tube angle allows good control on descents; steep seat tube angle creates an efficient riding position for climbs",
"RockShox Recon suspension fork offers 130mm of trail-dominating travel and a lock-out control for climbing",
"X-Fusion O2 RL shock provides 120mm of tunable rear suspension for optimal speed and comfort",
"Unique 4-bar-linkage rear suspension system ensures braking doesn't affect suspension performance, thereby improving climbing efficiency and downhill traction",
"Shimano Deore double crankset is paired with a 10-speed, 11-36t cassette for a wide gear range capable of tackling any trail",
"Shimano 506 hydraulic disc brakes and 180mm rotors deliver powerful, 1-finger braking and reliable performance",
"Alex MD21 rims spin smoothly around Shimano Deore hubs and are wrapped with Michelin Wild GripR 2 TS Performance 27.5 x 2.25 tires for great traction",
"REI is proud to be the exclusive U.S. retailer of GHOST brand bikes",
"Specs are subject to change"
])

bike3 = Product.create!(:brand => 'Cannondale', :price => 3999.00, :title => 'Cannondale Slate Disc Force 1 Bike - 2017',
:body => 'A full-tilt road bike with legitimate off-road chops, the Cannondale Slate Disc Force 1 adds a new level of hard-cornering, curb-hopping, trail-shredding fun to your ride.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941514/38c04ddd-89ad-45f0-9cc4-681af44ffbe0_kqaojk.jpg',
:features => ["Massive 42c tires on 650b wheels give you the the same roll-out diameter as 700x23c wheels for proper road bike speed, but with more cornering grip, traction and comfort",
"Short chainstays give the Slate snappy quickness, while a slack head angle and long front-center keep things stable for off-road excursions",
"With the big-volume tires, plush SAVE PLUS (+) rear triangle and Lefty Oliver suspension fork, the Slate is magically smooth over bumps and chatter",
"Despite its burly look, Slate weighs less than a kilo more than comparable road bikes and smoothly carries speed like a traditional road bike",
"Specs are subject to change"
])

bike4 = Product.create!(:brand => 'Diamondback', :price => 1899.00 , :title => 'Diamondback Haanjo EXP Carbon Bike - 2017',
:body => "Maximizing its potential as a deep-woods explorer, the Diamondback Haanjo EXP Carbon bike's long-distance geometry and vibration-damping road feel open up a world of bikepacking possibilities.",
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941539/d671684e-a557-4a15-b6c1-5e5daa7a9b7b_pyiewr.jpg',
:features => ["Hand-built carbon EXP frame with Endurance geometry is light and tough",
"2.1 in. wide tires on 27.5 in. rims embrace cyclocross adventure",
"Mechanical disc brakes and bar-end shifters offer ease of on-trail maintenance and reliability",
"DB Gravel flat-mount full carbon disc fork; 1.5 in. steerer; 12mm thru-axle; fender/low rider mounts",
"Shimano 3 x 9 drivetrain to handle bikepacking and touring",
"HED Tomcat disc wheels",
"Specs subject to change"
])

bike5 = Product.create!(:brand => 'Electra', :price => 499.00, :title => "Electra Townie 7D Step-Through Women's Bike - 2017",
:body => "Designed for your comfort and leisure while on the go, the Electra Townie 7D step-through women's bike offers a range of gears so your riding stays smooth and simple, and having fun is a sure thing.",
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941565/f93987b5-b320-4dc0-9524-cc813ed7ecbe_ot2x7b.jpg',
:features => ["Flat Foot Technology™ geometry places rider upright for comfortable, heads-up positioning; aft positioning allows a rider to place both feet on the ground at a stop",
"The result is a low center of gravity, full leg extension and increased comfort—somewhat similar to the recumbent bike at your gym",
"Ergonomic saddle with elastomer bumpers offers a comfortable, shock-absorbent ride",
"Shimano Revo shifter and rear derailleur provide smooth shifting through 7 gears",
"Linear-pull brakes provide controlled deceleration for easy stopping",
"Semi-slick 26x2.0 tires ensure a smooth and stable ride over a variety of road or gravel surfaces",
"Platform pedals deliver total convenience—no special shoes required",
"One size fits most",
"Specs are subject to change"
])


bike_helmet1 = Product.create!(:brand => 'Giro', :price => 270.00 , :title => 'Giro Synthe MIPS Bike Helmet',
:body => 'The Giro Synthe MIPS is the pinnacle of road helmet designs, combining the performance gains of aerodynamics and light weight with great cooling power to enhance rider comfort and efficiency.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941597/1b1590ea-1726-4bb1-a4fd-bfa4c1c4cce9_aiqqdj.jpg',
:features => ["Compact form slips through the air with ease across multiple yaw / head angles; 26 Wind Tunnel vents with internal channeling offer greater cooling power than the Giro Aeon",
"While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle",
"In-mold polycarbonate shell with EPS liner and thermoformed SL reinforcement",
"Key features include the Roc Loc Air fit system with 2-way fit tuning and Aero Mesh Panels with a dedicated port for securely docking your sunglasses as you ride",
"Featherweight webbing with Slimline buckle; Roll Cage internal reinforcement; ponytail-compatible"
])

bike_helmet2 = Product.create!(:brand => 'Smith', :price => 280.00 , :title => 'Smith Overtake MIPS Bike Helmet',
:body => 'Providing maximum ventilation, superior aerodynamics and rotational impact protection, the Overtake MIPS is your ultimate racing helmet, keeping your head covered and comfortable on the course.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941622/4a3443a1-3a32-4878-a10a-f1ecf78d268f_p80tzq.jpg',
:features => ["MIPS protection system uses a low-friction layer between the outer shell and the head to limit the rotational forces to the brain in the event of an angled impact",
"Aerocore In-Mold Construction delivers ventilated protection featuring patented Koroyd® material, integrated skeletal structure and Aramid filament reinforcement",
"Koroyd is a new open-cell protective material that absorbs more energy on impact than traditional helmets while also increasing airflow",
"VaporFit adjustable fit system and 21 optimized vents combine aerodynamic performance and cooling airflow",
"X-Static pads with cooling lining and ultralight single-layer webbing provide cool, comfortable coverage",
"Certification: CPSC, CE EC 1078"
])

bike_helmet3 = Product.create!(:brand => 'Bell', :price => 150.00, :title => "Bell Stratus MIPS Bike Helmet - Men's",
:body => 'With a great combo of minimal weight, aero efficiency and cutting-edge comfort technologies, the Bell Stratus MIPS road helmet for men will help you climb, sprint, or ride from dawn until dusk.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_fit,h_350,w_400/v1500941653/fc5979a8-a0a1-4a65-b97f-b10cc45b444e_xknd4d.jpg',
:features => ["A direct descendent of the pro-level Zephyr, it brings that level of advanced engineering and design to this model",
"While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle",
"Float Fit technology lets you adjust the circumference and vertical positioning on your head for a perfect fit; rubber-coated dial is easy to adjust on the fly",
"Overbrow ventilation system pulls cool air in through the front and pushes it through an air-channel matrix to minimize drag and prevent overheating",
"Adjustable No-Twist tri-glides keep the straps flat and properly positioned",
"Fusion in-mold polycarbonate shell bonds the helmet's outer shell to the EPS foam liner to create a sturdy helmet",
"Lightweight, internal polycarbonate roll-cage reinforces the helmet, allowing for big vents and light weight"
])

bike_helmet4 = Product.create!(:brand => 'Giro', :price => 100.00, :title => 'Giro Savant Bike Helmet',
:body => 'Offering a great fit, lightweight performance and plenty of cooling airflow, the Giro Savant bike helmet ensures lasting comfort on all your rides, even when you push the pace.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941680/80f9f0eb-ceec-4292-9fb8-db46c00780c1_jry15m.jpg',
:features => ["Single-piece in-mold shell enhances durability, yet keeps weight to a minimum",
"Interior padding maximizes comfort",
"Roc-Loc® 5 suspension fit system is easy to adjust with 1 hand",
"25 vents deliver cooling airflow"
])

bike_helmet5 = Product.create!(:brand => 'POC', :price => 320.00, :title => 'POC Octal AVIP MIPS Bike Helmet',
:body => 'The award-winning POC Octal AVIP MIPS helmet has been engineered to take the next step in road bike helmet safety and offers optimal ventilation, comfort and light weight.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941705/c962156b-b2ef-4e67-bce1-8464535002a1_hwpqml.jpg',
:features => ["While most helmets protect only against direct impact, MIPS technology reduces rotational forces when the helmet gets hit at an angle",
"To further improve safety, the Octal provides additional coverage and protection at the temples and back of head; EPS liner is strategically thicker in the most exposed areas",
"Fully wrapped unibody shell construction enhances the integrity of the helmet while maintaining a low weight",
"Instead of using many small vents, Octal has fewer, but larger, ventilation slots for increased airflow and improved aerodynamics",
"Coolbest padding helps reduce the temperature at the interface between the helmet and head.",
"Lightweight size adjustment system ensures a comfortable and secure fit",
"Straps are molded into liner"
])



tent1 = Product.create!(:brand => 'Big Agnes', :price => 449.95, :title => 'Big Agnes Copper Spur HV UL 2 Tent',
:body => 'The full-featured Big Agnes Copper Spur HV UL 2 tent is designed with a high volume hub to maximize strength and increase living space without adding weight.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941740/26b4b6a1-bfb7-4a58-82b3-478cfcf3b5ef_x9qeq7.jpg',
:features => ["Enjoy comfort and convenience in the backcountry with a high-volume hub and steep wall architecture that maximize strength and increase living space without adding weight",
"4-way hub design increases stability and strength while creating optimal livable space where you need it most",
"Features 2 doors and 2 vestibules with storm flaps on the vestibule zippers; large, dual-zipper door with discrete seams allows easy entry and smooth closure",
"Quick Stash on tent body door makes stowing unzipped door quick and easy",
"Proprietary double ripstop pattern nylon is 20% stronger than regular nylon, providing maximum durability",
"2-tone mesh provides privacy while allowing for stargazing transparency",
"Massive ceiling pocket provides great storage space; media pockets located above sleeping area enable clean earbud cord routing from phones or other devices",
"Hook-and-loop tabs connect the 1-vent fly to pole structure, providing perfect pitch and extra stability; precut guy lines and tensioners are attached to the fly",
"All seams are taped with waterproof, solvent-free polyurethane tape (No PVC or VOCs)",
"Reflective guylines and webbing on tent corners; easy-grip zipper pulls; ultralight plastic clips attach tent body to pole frame",
"Includes 2 mesh pockets, 1 oversized mesh pocket , 2 cord routing portals, gear loft loops (for the Triangle gear loft, not included) and 8 superlight aluminum J stakes",
"Fast Fly setup available with footprint (sold separately)"
])

tent2 = Product.create!(:brand => 'Nemo', :price => 499.95 , :title => 'NEMO Dagger 3P Tent',
:body => 'The 3-person, 3-season Dagger from NEMO offers you the best of both worlds: a tent light enough for ultralight backpacking, yet roomy enough to wait out a rainstorm without feeling claustrophobic.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941765/6f12e9df-d964-447f-9774-c3c6fcbc42d3_ezrlkq.jpg',
:features => ["2 large side doors open to trapezoidal vestibules, creating more area and volume for storage than many other tents",
"High position of the hubs in the pole frame increases livable space inside",
"Single, hubbed pole design with tent clips makes for a fast and easy setup",
"Place your headlamp in the Light Pocket overhead sleeve; its special light-diffusing fabric casts an even glow throughout the tent",
"Interior mesh pockets keep personal items close at hand",
"Divvy Sack dual-stage drawstring stuff sack allows you to easily split the tent between 2 people for carrying on the trail",
"Includes a stuff sack, stakes, guyout cord and repair kit",
"All exterior-facing connection points such as guyout loops and zipper pulls are reflective for nighttime visibility",
"Inner tent has a built-in privacy panel for extended coverage and security"
])

tent3 = Product.create!(:brand => 'MSR', :price => 399.95, :title => 'MSR Hubba Hubba NX 2-Person Tent',
:body => 'At just 3 lbs. 7 oz., this tent is an ultralight, ultra-livable 3-season shelter for 2 backpackers. It packs down small thanks to an ultra-compact compression sack.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941790/4bbe8b9c-fc09-4a4d-9127-f0fb4e58ddfa_vjm59a.jpg',
:features => ["Unique pole configuration maximizes headroom and elbow space throughout the tent",
"Set up and take down is easy with a unified, color-coded hub-and-pole system",
"Two large StayDry™ doors help ensure water doesn't drip into the tent when doors are opened; two large vestibules store gear",
"Rainfly vents and venting vestibules help create a dry, comfortable interior",
"Minimum weight of just 3 lbs. 7 oz. (1.54kg) includes tent, rainfly and poles only",
"Fast & Light® setup option lets you use just the rainfly, poles and footprint (footprint sold separately) to reduce the weight to 2 lbs. 2 oz. (0.97kg)",
"Canopy is 15-denier nylon micromesh and 20-denier high-tenacity ripstop nylon; floor is 30-denier, high-tenacity ripstop nylon with Durashield™ polyurethane coating",
"Rainfly is 20-denier, high-tenacity ripstop nylon that's Durashield™ polyurethane- and silicone-coated",
"The MSR Hubba Hubba NX tent comes with an ultra-compact compression sack so it fits easily into a backpack"
])

tent4 = Product.create!(:brand => 'Marmot', :price => 299.00, :title => 'Marmot Limelight 3P Tent with Footprint',
:body => 'With increased volume and no added weight, the Limelight 3P tent maximizes livable space with its zone construction. Enjoy light, roomy comfort and 3-season protection on your next night in nature.',
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941817/b2a3feff-f721-45b3-b441-d8eb4799136d_fvmxaq.jpg',
:features => ["Large double door and rear D-shaped door lead to 2 vestibules to keep your gear dry in wet weather",
"DAC Press-Fit poles and Velocity aluminum 7000 ridge pole are simple to set up; Body Zone pre-bends create vertical walls for a more spacious living area",
"Color-coded Easy Pitch clips and poles; strategic clip placement enhances interior volume",
"Seam-taped, full-coverage fly with vents",
"Seam-taped, catenary cut floor",
"Interior pockets for small-gear organization; Lamp Shade pocket securely holds your headlamp to provide ambient light",
"Jingle-free nylon zipper pulls",
"Footprint included"
])

tent5 = Product.create!(:brand => 'Tepui Tents', :price => 2250.00, :title => 'Tepui Tents Kukenam XL Ruggedized SKY 4 Tent',
:body => "Come rain, shine or howling wind, the Kukenam XL Ruggedized SKY 4 tent's heavy-duty construction provides a cozy base camp for all your climbing, mountain biking and hiking explorations.",
:image_url => 'https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_350/v1500941844/15e9d1ca-eb7f-4710-a71e-ef49c262940b_qpmk1t.jpg',
:features => ["Ripstop canvas is 40% heavier than the standard models for burly weather protection",
"High-density, 2.5 in. foam mattress offers plush sleeping comfort",
"Two built-in screened SKY panels offer a great view of the stars and surrounding trees when the rainfly is removed",
"Heavy-duty 3-bolt hinges, fully wrapped internal frame and welded aluminum base hold up to wear and tear",
"Anti-condensation mat under the mattress prevents soggy mornings",
"Dual rainfly support rods withstand high winds",
"Extra-large internal pockets offer easy organization",
"Telescoping ladder included",
"The toughest Tepui rooftop tent on the market, the Kukenam XL Ruggedized SKY 4 is perfect for 4x4 trailers and off-road rigs"
])



nick = User.create!(:username => "Nicholas", :password => "password")
aomame = User.create!(:username => "Aomame", :password => "password")

message1p1 = Message.create!(:rating => 6, :body => 'blah', :title => 'title', :author_id => nick.id, :product_id => fleece.id )
message2p1 = Message.create!(:rating =>1, :body => 'Wow This product was so expensive and broke on my first outing!', :title => "Don't buy!", :author_id => aomame.id, :product_id => fleece.id )
message1p2 = Message.create!(:rating =>1, :body => 'Wow This product was so expensive and broke on my first outing!', :title => "Don't buy!", :author_id => aomame.id, :product_id => sleeping_bag1.id )
