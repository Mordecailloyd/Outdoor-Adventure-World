class Api::CartsController < ApplicationController
  def create
    # add item to cart
    newcart = Cart.new(product_id: params[:productId])
    newcart.buyer_id = current_user.id
    if newcart.save
      @cart = current_user.cart_items
      render :index
    else
      @cart = newcart
      render json: @cart.errors.full_messages, status: 422
    end
  end


  def index
    # find user cart
    @cart = current_user.cart_items
    render :index
  end

  def destroy_all
    current_user.cart_items.each(&:destroy)
    head :no_content
  end

  def destroy
    # find by product id and buyer id
    cart = Cart.find_by(product_id: params[:id], buyer_id: current_user.id)
    cart.destroy
    @cart = current_user.cart_items
    render :index
  end

  def cart_params
    params.require(:cart).permit(:productId)
  end
end
# productId naming convention for sending ajax request is critical.
