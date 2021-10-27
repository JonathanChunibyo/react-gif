import { shallow } from "enzyme"
import React from 'react';
import { AddCategory } from "../../components/AddCategory"


describe('pruebas <AppCategory />', () => {

    const setCategory = jest.fn();
    let wraper = shallow(<AddCategory setcategory={setCategory} />);
    const value = 'mundo';

    beforeEach(() => {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setcategory={setCategory} />);
    })

    test('debe mostrarse correctamente ', () => {

        expect(wraper).toMatchSnapshot();
    })
    test('debe cambiar la caja de texto', () => {

        const input = wraper.find('input');
        input.simulate('change', { target: { value } });
    })
    test('No debe almacenar info con submit', () => {

        wraper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategory).not.toHaveBeenCalled();

    })
    test('vaciar caja de texto y llamar el setCategory', () => {
        const input = wraper.find('input');
    
        //simular input escritura
        input.simulate('change', { target: { value } });
        //simular enviar formulario
        wraper.find('form').simulate('submit', { preventDefault() { } });

        // saber si el setCategory fue llamado
        expect(setCategory).toHaveBeenCalled();
        /* 
        llamar como si fuera una funcion
        expect(setCategory).toHaveBeenCalledWith( expect.any(Function) );
 */
        //el valor del input debe estar en ''
 
        expect( wraper.find('input').prop('value')).toBe('');
        //nose lo hice yo ;v
        expect(input.text().trim()).toBe('');
    })
    



})
