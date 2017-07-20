class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
    @messages=@product.messages
  end



  private
  def product_params
    params
      .require(:product)
      .permit(:title, :body, :price, :image_url)
  end

  def search_filter
    params[:search_filter]
  end
end
