
class Api::MessagesController < ApplicationController

  private

  def message_params
    params.require(:message).permit(:rating, :title, :body, :product_id, :author_id, :offset)
  end
