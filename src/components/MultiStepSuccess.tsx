import style from "./styles/MultiStepSuccess.module.css";

import successImg from "../assets/images/icon-thank-you.svg";

export default function MultiStepSuccess() {
  return (
    <article className={`step_container ${style["multi_step_success"]}`}>
      <img src={successImg} alt="Success image with a checkmark" />
      <h2 className="step_title">Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </article>
  );
}
