Rails.application.routes.draw do
  root 'pages#index'
  #resources :pages
  get 'property', to: 'pages#show'
  get 'property_card', to: 'pages#property_card'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
