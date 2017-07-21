class Message < ApplicationRecord
  belongs_to: :author, class_name: :User
  belongs_to: :product

  validates :author, :product, :rating, :title, :body, presence: true
  validates :author, uniqueness: {scope: :product}

end
