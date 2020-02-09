module ApplicationHelper
  def current_color
    @countdown&.color || Countdown::DEFAULT_COLOR
  end
end
