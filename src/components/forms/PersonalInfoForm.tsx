import type { ComponentPropsWithoutRef } from "react";
import Input from "../shared/Input";
import style from "./styles/PersonalInfoForm.module.css";

export default function PersonalInfoForm({
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article className={`step_container ${style["personal_info"]}`} {...props}>
      <header>
        <h2 className="step_title">Personal info</h2>

        <p>Please provide your name, email address, and phone number</p>
      </header>

      <form>
        <Input label="Name" name="name" placeholder="John Doe" />

        <Input
          type="email"
          label="Email Address"
          name="email"
          placeholder="johndoe@gmail.com"
        />

        <Input
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          placeholder="e.g +1 234 567 890"
        />
      </form>
    </article>
  );
}
