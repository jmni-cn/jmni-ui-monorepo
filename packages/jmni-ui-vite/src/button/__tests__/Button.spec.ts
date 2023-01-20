import Button from '../Button';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      }
    });

    // 断言
    expect(wrapper.text()).toMatchInlineSnapshot('"Button"');
  });

  describe('color', () => {
    test('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        }
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace('\n', ''))
          .includes('bg-blue-500')
      ).toMatchInlineSnapshot('true');
    });

    test('red', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        },
        props: {
          color: 'red'
        }
      });

      expect(wrapper.classes().map((v) => v.replace('\n', '')))
        .toMatchInlineSnapshot(`
          [
            "py-1.5",
            "px-3",
            "rounded-lg",
            "bg-red-500",
            "hover:bg-red-400",
            "border-red-500",
            "cursor-pointer",
            "border-solid",
            "text-white",
            "text-base",
            "hover:text-white",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:scale-105",
            "mx-1",
          ]
        `);
    });
  });

  describe('round', () => {
    test('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        }
      });

      expect(wrapper.classes().map((v) => v.replace('\n', '')))
        .toMatchInlineSnapshot(`
          [
            "py-1.5",
            "px-3",
            "rounded-lg",
            "bg-blue-500",
            "hover:bg-blue-400",
            "border-blue-500",
            "cursor-pointer",
            "border-solid",
            "text-white",
            "text-base",
            "hover:text-white",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:scale-105",
            "mx-1",
          ]
        `);
    });

    test('round:true', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        },
        props: {
          round: true
        }
      });

      expect(wrapper.classes().map((v) => v.replace('\n', '')))
        .toMatchInlineSnapshot(`
          [
            "py-1.5",
            "px-3",
            "rounded-full",
            "bg-blue-500",
            "hover:bg-blue-400",
            "border-blue-500",
            "cursor-pointer",
            "border-solid",
            "text-white",
            "text-base",
            "hover:text-white",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:scale-105",
            "mx-1",
          ]
        `);
    });
  });

  describe('plain', () => {
    test('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        }
      });

      expect(wrapper.classes().map((v) => v.replace('\n', '')))
        .toMatchInlineSnapshot(`
          [
            "py-1.5",
            "px-3",
            "rounded-lg",
            "bg-blue-500",
            "hover:bg-blue-400",
            "border-blue-500",
            "cursor-pointer",
            "border-solid",
            "text-white",
            "text-base",
            "hover:text-white",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:scale-105",
            "mx-1",
          ]
        `);
    });

    test('plain:true', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button'
        },
        props: {
          plain: true
        }
      });

      expect(wrapper.classes().map((v) => v.replace('\n', '')))
        .toMatchInlineSnapshot(`
          [
            "py-1.5",
            "px-3",
            "rounded-lg",
            "bg-blue-100",
            "hover:bg-blue-400",
            "border-blue-500",
            "cursor-pointer",
            "border-solid",
            "text-blue-500",
            "text-base",
            "hover:text-white",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:scale-105",
            "mx-1",
          ]
        `);
    });
  });

  test('icon', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      },
      props: {
        icon: 'edit'
      }
    });

    expect(
      wrapper
        .find('i')
        .classes()
        .map((v) => v.replace('\n', ''))
    ).toMatchInlineSnapshot(`
      [
        "i-ic-baseline-edit",
        "p-3",
      ]
    `);
  });
});
