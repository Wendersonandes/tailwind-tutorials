# frozen_string_literal: true

class CardComponent < ViewComponent::Base
  with_collection_parameter :item
  def initialize(item:)
    @city = item[:city]
    @averagePrice = item[:averagePrice]
    @imageUrl = item[:imageUrl]
    @propertyCount = item[:propertyCount]
    @imageAlt = item[:imageAlt]
  end
end
