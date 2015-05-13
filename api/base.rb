module API
  class Base < Grape::API
    format :json

    mount API::V1::Base => '/api'
  end
end
