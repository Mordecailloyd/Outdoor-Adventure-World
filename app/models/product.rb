class Product < ActiveRecord::Base
  validates :title, :price, :body, :image_url, :brand, presence: true

  has_many :messages, dependent: :destroy

  has_many :carts

  has_many :buyers,
    through: :carts,
    source: :buyer

end
