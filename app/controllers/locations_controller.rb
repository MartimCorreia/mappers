class LocationsController < ApplicationController

  def create
    @location.user = current_user
    @longitude =
    @latitude
  end

  private

  def location_params
    params.require(:location).permit(:country, :city, :latitude, :longitude)
  end
end
