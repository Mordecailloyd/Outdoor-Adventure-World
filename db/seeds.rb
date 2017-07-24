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

fleece = Product.create!(:title => "Momentum Full-Zip Fleece Jacket", :body =>
"Layer up for your early-morning approaches with The North Face Momentum
full-zip fleece jacket. It offers just the right amount of warmth and protection
for active endeavors in the cold.", :price => 67.99, :brand => "The North Face",
:image_url => "https://www.rei.com/media/f6d9248f-5e7f-4343-8fcb-b91aa032d943" )

sleeping_bag1 = Product.create!(:brand => 'Kelty', :price => 149.95, :title => 'Cosmic Down 20 Sleeping Bag',
:body => 'The Cosmic Down 20 sleeping bag is insulated with water-resistant DriDown™ that resists moisture,
has exceptional loft and compresses down small, making it a great bag for 3-season backpacking.',
:image_url => "https://www.rei.com/media/56c6b3ff-afeb-4f8b-811d-0f28dd0ef27c?size=1020")

sleeping_bag2 = Product.create!(:brand => 'Big Agnes', :price => 249.95, :title => 'Lost Ranger 15 Sleeping Bag
', :body => 'The Lost Ranger 15 sleeping bag offers warmth, compressibility and the Big Agnes System design.
Lightweight enough for backpacking, this down bag is made to feel more like the comforter on your bed.',
:image_url => "https://www.rei.com/media/010542fe-ae3b-47c3-a85f-1409bc255b3b?size=1020" )

sleeping_bag3 = Product.create!(:brand => 'REI Co-op', :price => 59.95, :title => "REI Co-op K indercone Sleeping Bag - Kids'",
:body => 'Built to keep your young camper warm even in freezing temps (down to 30°F), the kid-friendly REI Kindercone sleeping
bag lets you adjust the length as your child grows.', :image_url => 'https://www.rei.com/media/5d6234c5-6465-437e-95b5-1beb045d785b?size=1020')

sleeping_bag4 = Product.create!(:brand => 'The North Face', :price => 159.00,
:title => 'The North Face Dolomite Double 20 Sleeping Bag', :body => 'When cuddling is a big part of your outdoor experience, the 20° Dolomite Double bag from The North Face offers plenty of room for two to stretch out and get comfortable—or snuggle as one.',
:image_url => 'https://www.rei.com/media/6d237e3e-93cb-4233-aad1-27a27df2c90d?size=1020x510')

sleeping_bag5 = Product.create!(:brand => 'NEMO', :price => 349.95, :title => 'NEMO Riff 30 Sleeping Bag',
:body => 'Side sleepers are bound to love the unique spoon shape of the NEMO Riff 30 3-season sleeping bag, which has extra room at the elbows and knees and integrated Thermo Gills for temperature management.',
:image_url => 'https://www.rei.com/media/6ee0be99-b627-420c-83df-ed245550fdf3?size=1020x510')



bike1 = Product.create!(:brand => 'Salsa', :price => 3799.00 , :title => 'Salsa Deadwood 29+ GX1 Bike - 2017',
:body => 'Open up infinite possibilities with the Salsa Deadwood 29+ GX1 full-suspension bike, which gives a momentum-holding, flat corner-crushing ride whether racing or connecting points on unfamiliar maps.',
:image_url => 'https://www.rei.com/media/caf4f42d-16a2-4835-993c-a3ff974c5116?size=1020x510,')

bike2 = Product.create!(:brand => 'GHOST', :price => 1999.00, :title => 'GHOST Kato FS 3 27.5 Bike - 2017',
:body => 'The GHOST Kato FS 3 mountain bike offers advanced full-suspension technology, speed and control, all at the price of a hardtail.',
:image_url => 'https://www.rei.com/media/ab70da22-a5a9-4c0e-992e-09ce9535078c?size=1020x510')



bike_helmet1 = Product.create!(:brand => 'Giro', :price => 270.00 , :title => 'Giro Synthe MIPS Bike Helmet',
:body => 'The Giro Synthe MIPS is the pinnacle of road helmet designs, combining the performance gains of aerodynamics and light weight with great cooling power to enhance rider comfort and efficiency.',
:image_url => 'https://www.rei.com/media/1b1590ea-1726-4bb1-a4fd-bfa4c1c4cce9?size=1020x510')

bike_helmet2 = Product.create!(:brand => 'Smith', :price => 280.00 , :title => 'Smith Overtake MIPS Bike Helmet',
:body => 'Providing maximum ventilation, superior aerodynamics and rotational impact protection, the Overtake MIPS is your ultimate racing helmet, keeping your head covered and comfortable on the course.',
:image_url => 'https://www.rei.com/media/4a3443a1-3a32-4878-a10a-f1ecf78d268f?size=1020x510')

bike_helmet3 = Product.create!(:brand => 'Bell', :price => 150.00, :title => "Bell Stratus MIPS Bike Helmet - Men's",
:body => 'With a great combo of minimal weight, aero efficiency and cutting-edge comfort technologies, the Bell Stratus MIPS road helmet for men will help you climb, sprint, or ride from dawn until dusk.',
:image_url => 'https://www.rei.com/media/fc5979a8-a0a1-4a65-b97f-b10cc45b444e?size=1020x510')

bike_helmet4 = Product.create!(:brand => 'Giro', :price => 100.00, :title => 'Giro Savant Bike Helmet',
:body => 'Offering a great fit, lightweight performance and plenty of cooling airflow, the Giro Savant bike helmet ensures lasting comfort on all your rides, even when you push the pace.',
:image_url => 'https://www.rei.com/media/80f9f0eb-ceec-4292-9fb8-db46c00780c1?size=1020x510')

bike_helmet5 = Product.create!(:brand => 'POC', :price => 320.00, :title => 'POC Octal AVIP MIPS Bike Helmet',
:body => 'The award-winning POC Octal AVIP MIPS helmet has been engineered to take the next step in road bike helmet safety and offers optimal ventilation, comfort and light weight.',
:image_url => 'https://www.rei.com/media/c962156b-b2ef-4e67-bce1-8464535002a1?size=1020x510')



tent1 = Product.create!(:brand => 'Big Agnes', :price => 449.95, :title => 'Big Agnes Copper Spur HV UL 2 Tent',
:body => 'The full-featured Big Agnes Copper Spur HV UL 2 tent is designed with a high volume hub to maximize strength and increase living space without adding weight.',
:image_url => 'https://www.rei.com/media/26b4b6a1-bfb7-4a58-82b3-478cfcf3b5ef?size=1020x510')
tent2 = Product.create!(:brand => 'Nemo', :price => 499.95 , :title => 'NEMO Dagger 3P Tent',
:body => 'The 3-person, 3-season Dagger from NEMO offers you the best of both worlds: a tent light enough for ultralight backpacking, yet roomy enough to wait out a rainstorm without feeling claustrophobic.',
:image_url => 'https://www.rei.com/media/6f12e9df-d964-447f-9774-c3c6fcbc42d3?size=1020x510')
tent3 = Product.create!(:brand => '', :price => , :title => '',
:body => '',
:image_url => '')







message1 = Message.create!(:rating => 6, :body => 'blah', :title => 'title', :author_id => nick.id, :product_id => fleece.id )
