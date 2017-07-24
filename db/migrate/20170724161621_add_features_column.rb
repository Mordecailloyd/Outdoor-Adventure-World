class AddFeaturesColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :features, :string, array: true, default: []
  end
end
