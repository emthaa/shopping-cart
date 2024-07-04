import { render, waitFor,screen  } from '@testing-library/react';
import { describe,it,expect } from 'vitest';
import App from "../../shopping-cart/src/App"
import userEvent from "@testing-library/user-event";
describe('App', () => {
  it('renders header', () => {
    const {container }= render(<App />);
    const header = container.querySelector('.main-header')
    
    expect(header).toHaveClass("main-header");
  });
  it('renders footer', () => {
    const {container }= render(<App />);
    
    const footer = container.querySelector('footer')

    expect(footer).toBeInTheDocument()

  });
  it('shopping cart opens and closes',async () => {
    const {container }= render(<App />);
    const user = userEvent.setup();

    let shoppingCartPreview = container.querySelector('.shopping-cart-preview')
    expect(shoppingCartPreview).not.toBeInTheDocument()

    const openShopButton = container.querySelector('.cart')
    await user.click(openShopButton)

    shoppingCartPreview = container.querySelector('.shopping-cart-preview') 
    expect(shoppingCartPreview).toBeInTheDocument() //OPEN SHOP EXISTS

    const closeShopButton = container.querySelector('.shopping-cart-preview-header-close-btn')
    await user.click(closeShopButton)

    shoppingCartPreview = container.querySelector('.shopping-cart-preview') 
    expect(shoppingCartPreview).not.toBeInTheDocument() //SHOP CLOSES

  });
  it("clothing card fetches and renders", async () =>{
    const {container }= await render(<App />);
    let clothingCards
    await waitFor(() => {
      clothingCards = container.querySelectorAll('.clothing-card');
      expect(clothingCards.length).toBeGreaterThan(0);
    });
  })
    it('featured clothing cards fetches and renders', async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      const clothingCards = container.querySelectorAll('.clothing-card');
      expect(clothingCards.length).toBeGreaterThan(0);
    });
  });

});