import { Icon } from '@iconify/react';

import { Tags } from '../../interfaces/task';

import ICON_SIZES from '../../constants/iconSizes';
import { timeTags, timeTagsLabels } from '../../constants/timeTags';

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
        <Icon icon="gg:alarm" height={ICON_SIZES.BIG} />
      </span>
      <span>{tagLabel}</span>
    </>
  );

  switch (type) {
    case Tags.IOS: {
      return <Tag tagColorClass="tag__ios">iOS App</Tag>;
    }
    case Tags.ANDROID: {
      return <Tag tagColorClass="tag__android">Android</Tag>;
    }
    case Tags.NODE_JS: {
      return <Tag tagColorClass="tag__node">Node JS</Tag>;
    }
    case Tags.RAILS: {
      return <Tag tagColorClass="tag__rails">Rails</Tag>;
    }
    case Tags.REACT: {
      return <Tag tagColorClass="tag__react">React</Tag>;
    }
    case timeTags.ON_TIME: {
      return (
        <Tag tagColorClass="tag__on-time">
          {timeTagBody(timeTagsLabels.ON_TIME)}
        </Tag>
      );
    }
    case timeTags.ALMOST_LATE: {
      return (
        <Tag tagColorClass="tag__almost-late">
          {timeTagBody(timeTagsLabels.ALMOST_LATE)}
        </Tag>
      );
    }
    case timeTags.LATE: {
      return (
        <Tag tagColorClass="tag__late">{timeTagBody(timeTagsLabels.LATE)}</Tag>
      );
    }
    default: {
      return <Tag tagColorClass="">Not specified</Tag>;
    }
  }
};

export default TaskCardTag;
