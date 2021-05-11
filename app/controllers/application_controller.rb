class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user
    # protect_from_forgery
    # protect_from_forgery with: :null_session
    # protect_from_forgery with: :exception
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        render json: { base: ['invalid credentials'] }, status: 401 unless logged_in?
    end

    def log_in!(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def log_out!
        current_user.reset_session_token!
        session[:session_token] = nil
        current_user = nil
    end
    
    def logged_in?
        !!current_user
    end

end



# class ApplicationController < ActionController::Base

#     #   protect_from_forgery unless: { request.format.json? }
#     # protect_from_forgery with: :exception

#     protect_from_forgery
#     helper_method :ensure_logged_in, :current_user, :logged_in?
    
#     def current_user
#         @current_user ||= User.find_by(session_token: session[:session_token])
#     end

#     def ensure_logged_in
#         redirect_to api_session_url unless logged_in?
#     end

#     def log_in(user)
#         @current_user = user
#         session[:session_token] = user.reset_session_token!
#     end

#     def log_out
#         current_user.reset_session_token!
#         session[:session_token] = nil
#         current_user = nil
#     end

#     def logged_in?
#         !!current_user
#     end

# end
