import React, { useState } from "react";
import Authentication from "@components/layouts/Authentication/Authentication";
import Title from "@components/UI/Typography/Title/Title";
import TextInput from "@components/UI/Inputs/TextInput/TextInput";
import Password from "@UI/Inputs/Password/Password";
import Button from "@components/UI/Buttons/Button/Button";
import InputContainer from "@components/UI/Inputs/InputContainer/InputContainer";
import { useTranslation } from "react-i18next";
import { USERS_API_ROUTES } from "@configs/api/Users/users";
import axios from "axios";

export default function ForgotMyPassword() {
  const { t } = useTranslation("auth");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCodeCorrect, setCodeCorrect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Create FormData and append email
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(USERS_API_ROUTES.FORGOT_PASSWORD, formData);

      if (response.data.boolean) {
        const code = response.data.code;
        const enteredCode = prompt("Please enter your code");

        if (enteredCode === code.toString()) {
          setCodeCorrect(true);
          alert("Code verified! Please set your new password.");
        } else {
          alert("Incorrect code. Please try again.");
        }
      } else {
        alert("User with this email does not exist.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Create FormData and append fields
    const formData = new FormData();
    formData.append("email", email); // Backend expects email to verify user
    formData.append("password", password);

    try {
      const response = await axios.post(USERS_API_ROUTES.RESET_PASSWORD, formData);

      if (response.data.success) {
        alert("Password reset successful. Redirecting to login...");
        window.location.href = "/";
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Authentication>
      <form className="flex-center" onSubmit={isCodeCorrect ? resetPassword : handleSubmit}>
        <div>
          <div>
            <Title className="text-primary-def font-medium">
              {t("forgot_password.title")}
            </Title>
            <Title size="1" className="font-bold text-blue-dark tracking-normal leading-snug mt-3">
              {t("login.title")}
            </Title>
          </div>

          <div className="flex flex-col mt-5 pt-5">
            {error && <p className="text-red-500">{error}</p>}

            {!isCodeCorrect && (
              <>
                <label className="mb-2 font-medium" htmlFor="email">
                  {t("step1.email")}
                </label>
                <TextInput onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@gmail.com" />
                <br />
                <Button type="submit" disabled={loading}>
                  {loading ? t('forgot_password.processing') : t("forgot_password.sms")}
                </Button>
              </>
            )}

            {isCodeCorrect && (
              <>
                <InputContainer title={t('step1.password')}>
                  <Password name="password" onChange={(e) => setPassword(e.target.value)} />
                </InputContainer>
                <br />
                <InputContainer title={t('step1.repeat')}>
                  <Password name="confirm_password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </InputContainer>
                <br />
                <Button type="submit" disabled={loading}>
                  {loading ? t('forgot_password.processing') : t('forgot_password.reset')}
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </Authentication>
  );
}
