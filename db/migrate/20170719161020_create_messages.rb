class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :rating, null: false
      t.string :body, null: false
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :product_id
  end
end
