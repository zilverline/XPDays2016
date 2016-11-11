class TodoItem < ActiveRecord::Base

  validates :title, presence: true, length: { minimum: 2 }
  validates :due_date, presence: true

  validate :valid_date?, if: 'due_date.present?'

  def valid_date?
    unless Chronic.parse(due_date)
      errors.add(:due_date, "date is invalid")
    end
  end

end
