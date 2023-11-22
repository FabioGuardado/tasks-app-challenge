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
  label: string;
};

const TaskCardTag = ({ type, label }: FactoryPropTypes) => {
  const alarmIcon = (
    <span>
      <Icon icon="gg:alarm" height={24} />
    </span>
  );

  switch (type) {
    case 'ios': {
      return <Tag tagColorClass="tag__ios">{label}</Tag>;
    }
    case 'android': {
      return <Tag tagColorClass="tag__android">{label}</Tag>;
    }
    case 'on-time': {
      return (
        <Tag tagColorClass="tag__on-time">
          {alarmIcon}
          <span>{label}</span>
        </Tag>
      );
    }
    case 'delayed': {
      return (
        <Tag tagColorClass="tag__delayed">
          {alarmIcon}
          <span>{label}</span>
        </Tag>
      );
    }
    default: {
      return <Tag tagColorClass="">{label}</Tag>;
    }
  }
};

export default TaskCardTag;
