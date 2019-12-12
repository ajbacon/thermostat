require 'sinatra'
require 'json'

enable :sessions


get '/' do
  session[:temp] ||= 20
  session[:psm] ||= "true"
  erb :'thermostat'
end

post '/temperature' do
  p params
  session[:temp] = params[:temp].to_i
  session[:psm] = params[:psm]
  p session[:temp]
  p session[:psm]
  JSON.dump(temp: session[:temp])
end

get '/temperature' do
  response = {
    temp: session[:temp],
    psm: session[:psm]
  }
  response.to_json
end