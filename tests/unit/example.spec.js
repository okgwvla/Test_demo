import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

const wrapper = mount(HelloWorld)

const mockData = {
  data: {
    code : 1,
    msg : 'sucess'
  }
};

const mockFailData = 'err';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockData))
}));

describe("HelloWorld.vue", () => {
  // 测试调用接口
  it('change Success', async ()=> {
    const result = await wrapper.vm.axiosGet()
    setTimeout(() => {
      expect(result).toEqual(mockData)
    }, 6000)
  });

  it('axios get failed', ()=> {
    setTimeout(() => {
      return expect(wrapper.vm.axiosGet()).resolves.toEqual(mockFailData);
    }, 6000)
  });

  // 改密码
  it("password cant null", () => {
    expect(wrapper.vm.checkPassword()).toBeFalsy()
  });

  it("password cant different", () => {
    let firstCount = 1234567;
    let secondCount = 456789;
    expect(wrapper.vm.checkPassword(firstCount, secondCount)).toBeFalsy()
  });

  it("password need >= 6", () => {
    let firstCount = 12345;
    let secondCount = 12345;
    expect(wrapper.vm.checkPassword(firstCount, secondCount)).toBeFalsy()
  });

  it("password need <= 10", () => {
    let firstCount = 12345678901;
    let secondCount = 12345678901;
    expect(wrapper.vm.checkPassword(firstCount, secondCount)).toBeFalsy()
  });
});
