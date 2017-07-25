class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    if params[:query]
      @products = @products.where("name ILIKE :query1 OR name ILIKE :query2", query1: "#{params[:query]}%", query2: "% #{params[:query]}%")
      render :search_results
    else
      render :index
    end
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
