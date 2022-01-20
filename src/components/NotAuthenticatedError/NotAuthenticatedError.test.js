import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Error from "./NotAuthenticatedError";

Enzyme.configure({ adapter: new Adapter() });

describe("NotAuthenticatedErrorPage", () => {
    it("show text", () => {
        const wrapper = shallow(<Error />);
        const button = wrapper.find('[data-testid="error"]');
        expect(button.text()).toBe('ERROR');
    });
});