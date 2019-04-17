import React from "react";
import TimelineStyle from "./Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./style.css";

const timeline = props => {
  const { eventos } = props;

  console.log(props);
  return (
    <div className="geral">
      <div className="timeline-container">
        <VerticalTimeline>
          {eventos.map(({ id, ano, icon, titulo, texto }) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date={ano}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={icon}
                key={id}
              >
                <h3 className="vertical-timeline-element-title">
                  {titulo}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Subtitulo
                </h4>
                <p>{texto}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default timeline;
