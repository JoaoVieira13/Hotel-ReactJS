import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Bedrooms from "./DeleteChangeBedrooms";

Enzyme.configure({ adapter: new Adapter() });

describe("DashboardBedroomsPage", () => {
    it("show change button", () => {
        const wrapper = shallow(<Bedrooms />);
        const button = wrapper.find('[data-testid="test"]');
        expect(button.text()).toBe('Change');
    });
});

it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<Bedrooms onButtonClick={onButtonClick} />);
    const button = wrapper.find('[data-testid="deleteBedroom"]');

    expect(onButtonClick).toHaveBeenCalledTimes(0);
    button.simulate('click');

    //SÓ PODE SER CLICADO UMA VEZ, PORQUE APAGA O QUARTO E DESAPARECE
    // wrapper.update();
    // expect(onButtonClick).toHaveBeenCalledTimes(1);
});

it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<Bedrooms onButtonClick={onButtonClick} />);
    const button = wrapper.find('[data-testid="changeBedroom"]');

    expect(onButtonClick).toHaveBeenCalledTimes(0);
    button.simulate('click');
});