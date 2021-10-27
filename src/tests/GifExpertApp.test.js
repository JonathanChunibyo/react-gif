import AppGif from "../GifExpertApp";
import { shallow } from "enzyme";


describe('Probando componente GifExpertApp', () => {

    const category = ['one punch', 'one piece', 'sailor moon'];
    
    test('snapshot de gitExpertApp ', () => {
        
        const wraper = shallow(< AppGif />);
        expect(wraper).toMatchSnapshot();
    })
    test('Inicializar en cero las categorias - poner dos y referenciar cuantas hay', () => {
        
        const wraper = shallow(< AppGif categoriesDefault={category}/>);
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GifGrid').length).toBe(category.length);
    })
    
    
})
