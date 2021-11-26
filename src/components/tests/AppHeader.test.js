import { render, unmountComponentAtNode  } from "react-dom";
import { act } from "react-dom/test-utils";
import AppHeader from '../AppHeader'
import { Link } from "react-router-dom";


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


it('Renders AppHeader without props', () => {
    act(()=>{
        render(<AppHeader />, container)
    })
    expect(container.textContent).toBe("");
});

/* Тут мы тест почему-то не проходим, хотя дока по последней версии
 React router dom говорит иначе) */
it('Renders AppHeader with props', () => {
    const menuItems = [
        {
            label: 'Main',
            template: (item,options)=>{
                return(
                    <Link class to='/'>{item.label}</Link>
                );
            }   
        },
        {
            label: 'About me',
            template: (item,options)=>{
                return(
                    <Link to='/aboutme'>{item.label}</Link>
                );
            }          
        },
    ];

    act(()=>{
        render(<AppHeader menuItems={menuItems}/>, container)
    })
    expect(container.textContent).toBe("Main");
});
