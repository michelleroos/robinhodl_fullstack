# json.partial! "/api/users/user", user: @user
json.user do
    json.extract! @user, :id, :email, :first_name, :last_name
end

def summer
    sum = 0
    @user.transfers.each do |transfer|
        if transfer.transfer_type == "Deposit"
            sum += transfer.amount
        else
            sum -= transfer.amount
        end
    end
    return sum
end

json.buyingPower summer

# final = {
#     bitcoin: {
#         token_sym: "bitcoin",
#         number: 0,
#         market_price: 0,
#         amount: 0
#     }
# }

# final = [
#     {
#         token_sym: "bitcoin",
#         number: 0,
#         market_price: 0,
#         amount: 0
#     }
# ]

def tokens
    all_tokens = {}
    @user.orders.each do |order|
        all_tokens[order.token_sym] = 0 if !all_tokens[order.token_sym]
        # all_tokens[order["token_sym"]] = "" if !all_tokens[order["token_sym"]]
        # all_tokens[order["number"]] = 0 if !all_tokens[order["number"]]
        if order.order_type == "Buy"
            all_tokens[order.token_sym] += order.number
        else
            all_tokens[order.token_sym] -= order.number
        end
    end
    # tokensSimplifyer(all_tokens)
    # all_tokens.map do |k, v|
    #     {name: k, amount: v}
    # end
    all_tokens
end

# def tokensSimplifyer(tokens)
#     new_tokens = {}
#     new_tokens = tokens.to_a
#     i = 0
#     while i < tokens.length
#         new_tokens[i] = {}
#         i += 1
#     end
#     return new_tokens
# end

json.tokensHeld do
    json.array! tokens do |token|
        json.token_sym token[0]
        json.number token[1]
    end
end

json.transfers do
    @user.transfers.each do |transfer|
        json.set! transfer.id do
            json.extract! transfer, :id, :transfer_type, :amount, :created_at,
                :user_id
        end
    end
end

json.orders do
    @user.orders.each do |order|
        json.set! order.id do
            json.extract! order, :id, :user_id, :token_sym, :number,
                :market_price, :amount, :order_type, :created_at
        end
    end
end