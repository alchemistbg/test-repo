import React from 'react';
import { shallow } from 'enzyme';

import db from '../App/db.json';
import ProductList from './ProductList';
import ProductCard from './../ProductCard/ProductCard';

describe('ProductList tests', () => {
    test('Test if component header is presented', () => {
        const wrapper = shallow(<ProductList products={db.products} />);
        const header = <h1 className="list-title">Our Products</h1>;
        expect(wrapper.contains(header)).toEqual(true);
    });
    test('Test if all ProductCards are loaded', () => {
        const wrapper = shallow(<ProductList products={db.products} />);
        expect(wrapper.find(ProductCard)).toHaveLength(db.products.length);
    });
});