class CountdownsController < ApplicationController
  def new
  end

  def create
    @countdown = Countdown.new(countdown_params)
    @countdown.save!

    respond_to do |format|
      format.html { redirect_to @countdown }
    end
  end

  def show
    @countdown = Countdown.find params[:id]
  end

  private

    def countdown_params
      params.require(:countdown).permit(:name, :target_time)
    end
end
