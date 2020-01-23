class ReviewsController < ApplicationController
    def index
        @reviews = Review.all 
        render json: @reviews, only [:id, :user_id, :car_id, :feedback, :rating]
    end
end
