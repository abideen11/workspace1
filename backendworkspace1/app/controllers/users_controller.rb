class UsersController < ApplicationController
    skip_before_action :check_authentication, only: [:create]
    def create
        @user = User.create(user_params)
        if @user.valid?
            @user.save 
            render json: @user 
        end
    end
    private
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
