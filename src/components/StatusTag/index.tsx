import React from 'react';
import { Tag } from 'antd';
type TActionTag = {
  content: TagVariants;
};
export type TagVariants = 'Created' | 'In Progress' | 'Approved';

export const StatusTag = ({ content }: TActionTag) => {
  const variantColor = {
    Created: 'red',
    'In Progress': 'orange',
    Approved: '',
  };
  return <Tag color={variantColor[content]}>{content}</Tag>;
};
