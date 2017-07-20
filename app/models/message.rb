class Message < ApplicationRecord
  belongs_to: :user
  belongs_to: :product

  validates :author_id, :product_id, :rating, :title, :body, presence: true
  validates :user_id, uniqueness: {scope: :product_id}

end
