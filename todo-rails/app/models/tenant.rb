class Tenant < ActiveRecord::Base
  validates :name, presence: true
  has_many :todo_items
end