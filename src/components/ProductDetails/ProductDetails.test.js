import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './ProductDetails';
import { act, render, fireEvent, cleanup, getByText } from '@testing-library/react';
import App from './../App/App';

import CartContext from './../../context/CartContext';
import db from './../App/App';

// afterEach(cleanup)

it('Context value is updated by child component', () => {
    // const match = {
    //     params: { id: "1" },
    //     isExact: true,
    //     path: "/products/:id",
    //     url: "/products/1"
    // }
    // const { container, getByText } = render(
    //     // <App>
    //     <ProductDetails match={match}>
    //         <CartContext cart={db.products}>
    //         </CartContext>
    //     </ProductDetails>
    //     // </App>
    // );

    // expect(getByText(/Add to cart/i));
    // fireEvent.click(getByText('Add to cart'));

    // fireEvent.click(getByText("Change Text"));

    // expect(getByText(/Some/i).textContent).toBe("Some Other Text");
})


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { shallow } from 'enzyme';
// import * as CartContext from './../../context/CartContext';

// import db from '../App/db.json';
// import ProductDetails from './ProductDetails';

// import ShallowRenderer from 'react-test-renderer/shallow';
// import App from './../App/App';
// let realUseContext;
// let useContextMock;
// beforeEach(() => {
//     realUseContext = React.useContext;
//     useContextMock = React.useContext = jest.fn();
// });
// // Cleanup mock
// afterEach(() => {
//     React.useContext = realUseContext;
// });

// test("mock hook", () => {
//     const match = {
//         params: { id: "1" },
//         isExact: true,
//         path: "/products/:id",
//         url: "/products/1"
//     }
//     useContextMock.mockReturnValue("Test Value");
//     const element = new ShallowRenderer().render(
//         <ProductDetails match={match} />
//     );
//     // expect(element.props.children).toBe('Test Value');
// });

// // describe('', () => {
// //     test('should ', () => {
// //         // const contextValues = {};
// //         // jest
// //         //     .spyOn(CartContext, 'useAppContext')
// //         //     .mockImplementation(() => contextValues);
// //         // const wrapper = shallow(<ProductDetails match={match} />);
// //     });
// // });