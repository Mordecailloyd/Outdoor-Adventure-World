json.partial! "/api/products/product", product: product
json.array! @messages do |message|
  json.partial! "/api/messages/message", messages: message
end
