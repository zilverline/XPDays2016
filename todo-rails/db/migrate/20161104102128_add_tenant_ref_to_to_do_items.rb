class AddTenantRefToToDoItems < ActiveRecord::Migration
  def change
    add_reference :todo_items, :tenant, index: true, foreign_key: true
  end
end
