import { mount } from "@vue/test-utils";
import Icon from '../Icon.vue'
describe("Icon", () => {
    it("test", () => {
        const TestComponent = mount(Icon, {
            props: {
                name: "test",
            },
        });
        expect(TestComponent.classes("wang-icon-test")).toBe(true);
    });
});
