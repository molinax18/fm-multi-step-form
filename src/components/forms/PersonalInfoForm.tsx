import { useState, type ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../../context/multiStepForm";
import Input from "../shared/Input";
import style from "./styles/PersonalInfoForm.module.css";

const errorMessages = {
  name: "Please send a valid name. Minimun three characters",
  email: "Please send a valid email",
  phone: "Please send a valid phone",
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function PersonalInfoForm({
  ...props
}: ComponentPropsWithoutRef<"article">) {
  const { state, goToNextStep, setPersonalInfo } = useMultiStepFormContext();
  const [error, setError] = useState<FormErrors | null>(null);
  const [formValues, setFormValues] = useState({
    name: state.personalInfo.name,
    email: state.personalInfo.email,
    phone: state.personalInfo.phone,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const phone = formValues.phone.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[\d\s()-]{7,20}$/;

    const newErrors: FormErrors = {};

    if (!name || name.length < 3) {
      newErrors.name = errorMessages.name;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = errorMessages.email;
    }

    if (!phoneRegex.test(phone)) {
      newErrors.phone = errorMessages.phone;
    }

    const hasErrors = Object.keys(newErrors).length > 0;

    if (hasErrors) {
      setError(newErrors);
      return;
    }

    setError(null);
    setPersonalInfo({ name, email, phone });
    goToNextStep();
  };

  return (
    <article className={`step_container ${style["personal_info"]}`} {...props}>
      <header>
        <h2 className="step_title">Personal info</h2>

        <p>Please provide your name, email address, and phone number</p>
      </header>

      <form onSubmit={onSubmit} id="multiStepForm">
        <Input
          label="Name"
          name="name"
          placeholder="John Doe"
          value={formValues.name}
          onChange={handleInputChange}
          error={error?.name ?? null}
        />

        <Input
          type="email"
          label="Email Address"
          name="email"
          placeholder="johndoe@gmail.com"
          value={formValues.email}
          onChange={handleInputChange}
          error={error?.email ?? null}
        />

        <Input
          type="tel"
          label="Phone Number"
          name="phone"
          placeholder="e.g +1 234 567 890"
          value={formValues.phone}
          onChange={handleInputChange}
          error={error?.phone ?? null}
        />
      </form>
    </article>
  );
}
