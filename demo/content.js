/*
 * Copyright (c) 2019, Kyle Lawson <kyle@kylelawson.io>
 *
 * License: MIT
 */

import constants from "../src/constants";

export default {
  entityMap: {},
  blocks: [
    {
      key: "ag6qs",
      text: "megadraft video embed plugin - Megadraft Plugin",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: []
    },
    {
      key: "9vgd",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      text: "",
      data: {
        type: constants.PLUGIN_TYPE,
        embedData: {
          type: "youtube",
          id: "CCj00C4RFSE"
        }
      },
      entityRanges: []
    },
    {
      key: "6dge",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      text: "",
      entityRanges: []
    }
  ]
};
