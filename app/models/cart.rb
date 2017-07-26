class Cart < ApplicationRecord
  validates :buyer_id, :product_id, presence: true

  belongs_to :buyer, class_name: "User"

  belongs_to :item,
  primary_key: :id,
  foreign_key: :product_id,
  class_name: "Product"
end
