import { useFetchGif } from "../../hooks/useFetchGif";
import {renderHook} from '@testing-library/react-hooks'

describe('test al hook useFetchGif', () => {
    
    test('debe retornar el estado inicial ', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif(''));
        await waitForNextUpdate({timeout:5000});
        

        const {data,loading} = result.current;

        //const wraper = shallow(< useFetchGif />);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('debe retornar las imagenes con el loading en false ', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif('one piece'));
        await waitForNextUpdate({timeout:5000});

        const {data,loading} = result.current;

        //const wraper = shallow(< useFetchGif />);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
