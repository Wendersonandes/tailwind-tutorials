class NavbarComponentPreview < ViewComponent::Preview
  def responsive_navbar
    render(NavbarComponent.new())
  end
end
