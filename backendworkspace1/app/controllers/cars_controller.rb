class CarsController < ApplicationController
    skip_before_action :check_authentication 
    def index
        @cars = Car.all 
        render json: @cars, only: [:id, :make, :model, :year, :miles, :price, :category, :img_url]
    end
    def show
        @cars = Car.find(params[:id])
        render json: @cars, only: [:id, :make, :model, :year, :miles, :price, :category, :img_url]
    end
end
