class DropdownMenuComponentPreview < ViewComponent::Preview
	layout "property_card"

  def default
    render(DropdownMenuComponent.new())
  end
end
