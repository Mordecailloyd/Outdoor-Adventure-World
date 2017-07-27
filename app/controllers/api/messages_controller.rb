class Api::MessagesController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @messages=Message.where(product_id: params[:product_id])
  end

  def create
    if !(Message.where(product_id: message_params[:product_id], author_id: current_user.id).empty?)
      error = "MessagesController#create - Duplicate message creation request"
      render json: { errors: [error] }, status: 422
    else
      @message = Message.new(message_params)
      @message.author_id = current_user.id

      if @message.save
        render :show
      else
        render json: {errors: @message.errors.full_messages }, status: 422
      end
    end
  end

  def destroy
    @message = Message.find(params[:id])

    if current_user.messages.include?(@message)
      @message.destroy
      render "api/messages/message"
    else
      render json: { errors: ["Current user does not match message creator"] }, status: 401
    end
  end

  def update
    @message = Message.find(params[:id])

    if current_user.messages.include?(@message)
      if @message.update_attributes(message_params)
        render "api/messages/message"
      else
        render json: { errors: @message.errors.full_messages }, status: 422
      end
    else
      render json: { errors: ["Current user does not match message creator"] }, status: 401
    end
  end

  private

  def message_params
    params.require(:message).permit(:rating, :title, :body, :product_id, :author_id)
  end
end
