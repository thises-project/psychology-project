import React from "react";
import { Badge } from "react-bootstrap";

const Articles = () => {
  return (
    <div>
      <h2>Articles</h2>
      <div className="container ml-5 mr-5" style={{ textAlign: "left" }}>
        {" "}
        <h3>
          {" "}
          <a
            className="logo"
            target="_blank"
            href="https://www.alustforlife.com/voice/to-live-i-had-no-choice-but-to-make-friends-with-my-depression"
          >
            To live, I had no choice but to make friends with my depression
          </a>{" "}
          <Badge pill variant="secondary">
            New
          </Badge>{" "}
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/the-bigger-picture/joe-caslin-and-a-lust-for-life-unite-to-unveil-giant-mental-health-artwork-in-waterford"
          >
            Joe Caslin and A Lust for Life unite to unveil giant mental health
            artwork in Waterford
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/tools/mental-health/infant-mental-health-a-critical-window-of-opportunity-for-future-wellbeing-and-mental-health"
          >
            Infant mental health: A critical window of opportunity for future
            wellbeing and mental health
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/tools/mental-health/how-to-support-children-to-worry-less-and-develop-mental-fitness"
          >
            How to support children to worry less and develop mental fitness
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/tools/mental-health/when-good-mental-health-is-not-good-enough-we-need-to-focus-on-wellness"
          >
            When good mental health is not good enough: we need to focus on
            wellness
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/the-bigger-picture/why-taking-a-break-from-alcohol-will-be-the-best-decision-you-ever-made"
          >
            Why taking a break from alcohol will be the best decision you ever
            made
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/voice/i-sprained-my-mental-health"
          >
            I sprained my mental health{" "}
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/tools/mental-health/practical-tips-for-parents-to-help-keep-children-safer-online"
          >
            Practical tips for parents to help keep children safer online{" "}
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            href="https://www.alustforlife.com/tools/mental-health/its-good-to-talk"
          >
            It’s good to talk{" "}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Articles;
