import { render, unmountComponentAtNode  } from "react-dom";
import { act } from "react-dom/test-utils";
import MainPage from '../MainPage'

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


it('Renders MainPage checks h2', () => {
    act(()=>{
        render(<MainPage />, container)
    })
    expect(container.textContent).toBe("How about beer Bro?");
});