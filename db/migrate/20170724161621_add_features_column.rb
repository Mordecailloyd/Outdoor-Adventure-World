class AddFeaturesColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :features, :text
  end
end
