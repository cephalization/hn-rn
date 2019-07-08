import React from "react";
import { Block } from "galio-framework";
import { CommentContent } from "./CommentContent";

export const Comment = ({ by, text, time, kids }) => (
  <Block flex>
    <CommentContent by={by} text={text} time={time} />
    <Block style={{ marginLeft: 8 }}>
      {Array.isArray(kids) &&
        kids.map(kid => <Comment key={kid.id} {...kid} />)}
    </Block>
  </Block>
);
