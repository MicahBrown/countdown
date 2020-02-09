class CreateCountdowns < ActiveRecord::Migration[6.0]
  def change
    create_table :countdowns do |t|
      t.string :title, null: false
      t.string :color, null: false
      t.integer :font, null: false
      # t.string :email, null: false
      t.datetime :target_time, null: false
      t.timestamps null: false
    end
  end
end
