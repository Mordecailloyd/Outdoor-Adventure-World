# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nick = User.create!(:username => "Nicholas", :password => "password")
fleece = Product.create!(:title => "Momentum Full-Zip Fleece Jacket", :body =>
  "Layer up for your early-morning approaches with The North Face Momentum
  full-zip fleece jacket. It offers just the right amount of warmth and protection
  for active endeavors in the cold.", :price => 67.99, :brand => "The North Face",
  :image_url = "https://www.rei.com/media/f6d9248f-5e7f-4343-8fcb-b91aa032d943" )
