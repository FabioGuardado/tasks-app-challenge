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
  const timeTagBody = (tagLabel: string) => (
    <>
      <span>
        <Icon icon="gg:alarm" height={24} />
      </span>
      <span>{tagLabel}</span>
    </>
  );

  switch (type) {
    case 'ios': {
      return <Tag tagColorClass="tag__ios">{label}</Tag>;
    }
    case 'android': {
      return <Tag tagColorClass="tag__android">{label}</Tag>;
    }
    case 'on-time': {
      return <Tag tagColorClass="tag__on-time">{timeTagBody(label)}</Tag>;
    }
    case 'almost-late': {
      return <Tag tagColorClass="tag__almost-late">{timeTagBody(label)}</Tag>;
    }
    case 'late': {
      return <Tag tagColorClass="tag__late">{timeTagBody(label)}</Tag>;
    }
    default: {
      return <Tag tagColorClass="">{label}</Tag>;
    }
  }
};

export default TaskCardTag;
