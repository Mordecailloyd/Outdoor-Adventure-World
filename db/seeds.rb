# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# rake db:reset rake db:seed
nick = User.create!(:username => "Nicholas", :password => "password")
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

message1 = Message.create!(:rating => 6, :body => 'blah', :title => 'title', :author_id => nick.id, :product_id => fleece.id )
