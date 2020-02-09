Rails.application.routes.draw do
  resources :countdowns, only: [:new, :create, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'countdowns#new'
end
