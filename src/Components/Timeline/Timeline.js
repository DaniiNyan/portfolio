import React from "react";
import TimelineStyle from "./Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './style.css';

const timeline = props => {
  const { ano, icon, titulo, texto } = props;

  console.log(props)
  return (
    <VerticalTimeline className={TimelineStyle.verticalTimeline}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={ano}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title">{titulo}</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>{texto}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        style={{ marginLeft: '5%'}}
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default timeline;
