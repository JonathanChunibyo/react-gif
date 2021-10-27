import { getGif } from "../../../helpers/getGifs"

describe('pruebas con getGifs', () => {
    test('debe de traer 10 elementos ', async() => {
        
        const gifs = await getGif('one punch');

        expect( gifs.length ).toEqual(10);
    })

    test('enviar vacio y no devolver elementos  ', async() => {
        
        const gifs = await getGif('');
        expect( gifs.length ).toBe(0);
    })
    
    
})
