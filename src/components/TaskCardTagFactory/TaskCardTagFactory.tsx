import { Icon } from '@iconify/react';

import './TaskCardTagFactory.scss';

type TagPropTypes = {
  children: string | React.ReactNode;
  tagColorClass: string;
};

const Tag = ({ children, tagColorClass }: TagPropTypes) => {
  return <div className={`tag ${tagColorClass}`}>{children}</div>;
};

///---------------------------------------------------------------------

type FactoryPropTypes = {
  type: string;
};

const TaskCardTag = ({ type }: FactoryPropTypes) => {
  const timeTagBody = (tagLabel: string) => (
    <>
      <span>
        <Icon icon="gg:alarm" height={24} />
      </span>
      <span>{tagLabel}</span>
    </>
  );

  switch (type) {
    case 'IOS': {
      return <Tag tagColorClass="tag__ios">iOS App</Tag>;
    }
    case 'ANDROID': {
      return <Tag tagColorClass="tag__android">Android</Tag>;
    }
    case 'NODE_JS': {
      return <Tag tagColorClass="tag__node">Node JS</Tag>;
    }
    case 'RAILS': {
      return <Tag tagColorClass="tag__rails">Rails</Tag>;
    }
    case 'REACT': {
      return <Tag tagColorClass="tag__react">React</Tag>;
    }
    case 'on-time': {
      return <Tag tagColorClass="tag__on-time">{timeTagBody('On Time')}</Tag>;
    }
    case 'almost-late': {
      return (
        <Tag tagColorClass="tag__almost-late">{timeTagBody('Almost Late')}</Tag>
      );
    }
    case 'late': {
      return <Tag tagColorClass="tag__late">{timeTagBody('Late')}</Tag>;
    }
    default: {
      return <Tag tagColorClass="">Not specified</Tag>;
    }
  }
};

export default TaskCardTag;
