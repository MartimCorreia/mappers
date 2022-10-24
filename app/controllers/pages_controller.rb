class PagesController < ApplicationController
  def intro
  end
  def dashboard
    @user = current_user
  end
end
