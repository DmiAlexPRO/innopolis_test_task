import { render, unmountComponentAtNode  } from "react-dom";
import { act } from "react-dom/test-utils";
import DataTableCustom from '../DataTableCustom'
import DataService from '../services/DataService';

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

it('Renders MainPage checks link-button', () => {
    act(()=>{
        render(<DataTableCustom rows={DataService.getBeerBrands()}/>, container)
    })
    expect(container.textContent).toBe("More details");
});