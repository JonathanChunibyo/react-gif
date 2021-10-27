import { GiftGridItem } from "../../components/GiftGridItem";
import React from 'react';
import { shallow } from 'enzyme';


describe('prueba GiftGridItem', () => {
    const title = 'Hola soy un titulo';
    const url = 'www.facebook.com'
    let wraper = shallow(<GiftGridItem title={title} url= {url} />);

    test(' verificar con snapshots los cambios que reciba el aplicativo ', () => {
        expect(wraper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wraper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener una imagen con url y alt igual a los props', () => {
        const img = wraper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('div debe tener la clase de animacion', () => {
        const div = wraper.find('div');

        
        const className = div.prop('className');
        expect(className.includes('animate__animated animate__fadeInLeft')).toBe(true);
    })
    
    


})
