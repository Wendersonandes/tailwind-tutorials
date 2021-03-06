# frozen_string_literal: true

class PropertyCardComponent < ViewComponent::Base
  def initialize(imageUrl:, imageAlt:, beds:, baths:, title:, priceInCents:, formattedPrice:, reviewCount:, rating:)
    @imageUrl = imageUrl
    @imageAlt = imageAlt
    @beds = beds
    @baths = baths
    @title = title
    @priceInCents = priceInCents
    @formattedPrice = formattedPrice
    @reviewCount = reviewCount
    @rating = rating
  end

  def star_class(i, rating)
    i <= rating ? "text-teal-500" : "text-gray-400"
  end
end
