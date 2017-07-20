class Product < ActiveRecord::Base
  has_many :messages, dependent: :destroy
  
  validates :title, :price, :body, :image_url, :brand, presence: true

end
