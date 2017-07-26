class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    if params[:query]
      @products = @products.where("lower(title) LIKE lower(:query1) OR lower(title) LIKE lower(:query2)", query1: "#{params[:query]}%", query2: "% #{params[:query]}%").limit(8)
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
