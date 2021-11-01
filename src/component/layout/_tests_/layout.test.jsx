import React from "react";
import { getByText, render } from "@testing-library/react";
import Layout from "../Layout";


describe('Layout',() => {
    it('Should render layout component',() => {
        const {getByText} = render(
            <Layout>
                <div>test component</div>
            </Layout>
        );
        expect(getByText('test component')).toBeInTheDocument()
    })
});
