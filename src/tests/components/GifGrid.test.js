import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import {useFetchGif} from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');
/* {
    data: [],
    loading: true,
} */

const category = 'One Punch';
const gif = [{
    id: 'BCA',
    url: 'www.book.com',
    title: 'cosa',
},{
    id: 'ABC',
    url: 'www.facebook.com',
    title: 'cualquier cosa',
}];


describe('evaluar funcionalidad de <GifGrid />', () => {


    

    test(' toMatchSnapshot - muestre lo que esta en la page ', () => {

        useFetchGif.mockReturnValue({
            data: gif,
            loading: false,
        });
    
        const wraper = shallow(<GifGrid category={category}/>);

        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').exists()).toBe(false);
        expect(wraper.find('GiftGridItem').length).toBe(gif.length);
    })

    test('debe mostrar items cuando se carguen imagenes useFetch ', () => {

    })


})
