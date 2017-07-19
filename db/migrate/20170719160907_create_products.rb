class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :image_url, null: false
      t.decimal :price, null: false
      t.timestamps
    end
    add_index :products, :title, unique: true
    add_index :products, :price
  end
end
