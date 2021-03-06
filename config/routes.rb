Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy, :update, :index]
    resources :products, only: [:index, :show]
    resources :carts, only: [:create, :index, :destroy, :show]
    delete "/user/cart/", to: "carts#destroy_all"
  end
  root "static_pages#root"
end
