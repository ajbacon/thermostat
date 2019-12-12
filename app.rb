require 'sinatra'
require 'json'

enable :sessions


get '/' do
  session[:temp] ||= 20
  erb :'thermostat'
end

post '/temperature' do
  p params
  session[:temp] = params[:temp].to_i
  p session[:temp]
  JSON.dump(temp: session[:temp])
end

get '/temperature' do
  response = {
    temp: session[:temp]
  }
  response.to_json
end