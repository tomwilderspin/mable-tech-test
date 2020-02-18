import { shallowMount } from '@vue/test-utils';
import TitleBar from '@/components/TitleBar.vue';

describe('TitleBar.vue', () => {
  it('renders props.titleText when passed', () => {
    const title = 'Demo Title';
    const wrapper = shallowMount(TitleBar, {
      propsData: { titleText: title },
    });
    expect(wrapper.contains('h1')).toBe(true);
  });
});
