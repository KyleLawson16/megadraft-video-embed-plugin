/*
 * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
 *
 * License: MIT
 */

import React from "react";
import { mount } from "enzyme";

import Block from "../src/Block";

describe("Block", function() {
  let iframe, updateData, data;

  beforeEach(function() {
    data = {
      embedData: { type: "vimeo", id: "103959209" }
    };
    updateData = jest.fn();
    const container = {
      updateData,
      setReadOnly: jest.fn(),
      remove: jest.fn(),
      plugin: jest.fn()
    };

    const wrapper = mount(
      <Block container={container} blockProps={container} data={data} />
    );

    iframe = wrapper.find("iframe");
  });

  it("renders vimeo iframe from data", function() {
    expect(iframe.prop("src")).toEqual(
      `https://player.vimeo.com/video/${
        data.embedData.id
      }?color=ffffff&title=0&byline=0&portrait=0&badge=0`
    );
  });
});
