module API
  module V1
    class Urls < Grape::API
      helpers API::V1::Helpers::Shared

      resource :urls do
        get do
          if params[:url].nil?
            {'error' => 'please provide an url, you can send like ?url=http://tinyurl'}
          else
            long_url = get_final_long_url(params[:url])
            {'tiny_url' => params[:url], 'long_url' => long_url}
          end
        end
      end
    end
  end
end