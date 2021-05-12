import React from 'react';
import { render , fireEvent, waitFor, screen, getAllByRole} from '@testing-library/react';
import Product from './Product';
import '@testing-library/jest-dom/extend-expect'

test('The message about many products should be', () => {
    const { getByText } = render(<Product category={"fruit"}/>)
    expect(getByText('Many products')).toBeInTheDocument()
})

test('The message about many products should not be', () => {
    const { container } = render(<Product category={"sweets"}/>)
    expect(screen.queryByText('Many products')).toBeNull()
})
 
test('The quantity of products is equal to the quantity of products in the dom', () => { 
  const { container } = render(<Product category={"vegetables"}/>);
  const count=Product.count;
  expect(container.querySelectorAll("li").length===count);
});

test('The quantity of products is equal to the quantity of products in the dom after clicking', () => { 
    const { container,getByText
     } = render(<Product category={"vegetables"}/>);
    fireEvent.click(getByText('Hide products priced above 7'));
    const count=Product.count;
    expect(container.querySelectorAll("li").length===count);
});


