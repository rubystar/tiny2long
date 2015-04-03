module API
  module V1
    module Helpers
      module Shared
        def get_long_url(tiny_url, opts={})
          original_url = tiny_url
          travelling = true
          final_url = tiny_url
          while travelling
            begin
              tiny_url = HTTPClient.new.head(tiny_url).header['Location'][0]
              final_url = tiny_url unless tiny_url.nil?
              travelling = false if tiny_url.nil?
            rescue
              travelling = false
              return 'exception'
            end
          end
          final_url
        end

        def get_final_long_url(tiny_url)
          result_url = get_long_url(tiny_url)
          if result_url == 'exception'
            puts "exception occcured here #{tiny_url}"
            begin
              longurl = LongURL.expand(tiny_url)
            rescue
              longurl = tiny_url
            end
          else
            longurl = result_url
          end
        end
      end
    end
  end
end