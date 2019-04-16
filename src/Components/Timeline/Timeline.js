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
        className="vertical-timeline-element"
        date={ano}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title">{titulo}</h3>
        <h4 className="vertical-timeline-element-subtitle">Subtitulo</h4>
        <p>{texto}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date={ano}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title">{titulo}</h3>
        <p>{texto}</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default timeline;
