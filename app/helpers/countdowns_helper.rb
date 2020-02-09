module CountdownsHelper
  def countdown_display(target_time, hide_target_time=false)
    units = [:years, :days, :hours, :minutes, :seconds]
    units.delete(:years) if target_time.present? && target_time < 1.year.from_now

    content_tag :div, class: "countdown", data: {countdown: target_time.to_s} do
      content = []
      content <<
        units.map do |unit|
          content_tag :div, class: "count", data: {period: unit} do
            content_tag(:span, 0) + tag(:br) + content_tag(:span, unit.to_s.titleize)
          end
        end.join.html_safe

      unless hide_target_time
        content << content_tag(:p, "Countdown to #{content_tag(:span, target_time, class: 'target-time')}".html_safe, class: "is-size-7 has-text-grey")
      end

      content.inject(:+)
    end
  end
end
