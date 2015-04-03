module API
  class Base < Grape::API
    format :json

    mount API::V1::Base => '/'
    # mount API::V2::Base => '/api/v2'
  end
end
