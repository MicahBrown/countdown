class Countdown < ApplicationRecord
  DEFAULT_COLOR = "228833"

  enum font: [:default]

  validates :title, presence: true
  # validates :email, presence: true
  validates :target_time, presence: true
  validate :target_time_in_future

  def target_time_in_future
    if target_time? && target_time.past?
      errors.add(:target_time, "must be in the future")
    end
  end

  def target_time=(value)
    # raise Time.parse(value).inspect
    super(value)
  end
end
