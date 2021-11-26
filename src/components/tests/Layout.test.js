import { render, unmountComponentAtNode  } from "react-dom";
import { act } from "react-dom/test-utils";
import Layout from '../Layout'

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

/* Тут мы тест почему-то не проходим, хотя дока по последней версии
 React router dom говорит иначе, ну или я что-то недопонял */
it('Renders Layout', () => {
    act(()=>{
        render(<Layout />, container)
    })
    expect(container.textContent).toBe("How about beer Bro?");
});