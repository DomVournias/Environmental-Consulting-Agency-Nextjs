import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "./Loader";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  console.log(isSuccessful);

  async function onSubmitForm(values) {
    setIsLoading(true);
    let config = {
      method: "post",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const res = await axios(config);
      if (res.status === 200) {
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 3000);
        reset();
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      <FormBlock>
        <Label>Ονοματεπώνυμο:</Label>
        <FormInput
          type="text"
          {...register("name", {
            required: { value: true, message: "You must enter your name" },
            minLength: { value: 2, message: "This name is too short" },
            maxLength: { value: 20, message: "This name is too long" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Please enter a valid name",
            },
          })}
        />
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
      </FormBlock>

      <FormBlock>
        <Label>Email:</Label>
        <FormInput
          type="email"
          {...register("email", {
            required: { value: true, message: "You must enter your email" },
            minLength: {
              value: 7,
              message: "This email is too short",
            },
            maxLength: { value: 60, message: "This email is too long" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
      </FormBlock>

      <FormBlock>
        <Label>Μήνυμα:</Label>
        <FormTextarea
          type="textarea"
          {...register("message", {
            required: { value: true, message: "You must enter a message" },
            minLength: { value: 5, message: "This message is too short" },
            maxLength: {
              value: 1000,
              message:
                "The max allowed size for a message is 1000 characters long",
            },
          })}
        />
        <ErrorMessage>{errors?.message?.message}</ErrorMessage>
      </FormBlock>

      <FormBlock>
        <Label>Υπηρεσία:</Label>
        <FormSelect {...register("service")}>
          <option value="">Διαλέξτε μία υπηρεσία</option>
          <option value="air-quality">Air quality</option>
          <option value="water-quality">Water quality</option>
          <option value="waste-management">Waste management</option>
          <option value="sustainability">Sustainability</option>
          <option value="other">Other</option>
        </FormSelect>
      </FormBlock>

      <FormButton type="submit">
        {isLoading ? <Loader /> : "Αποστολή"}
      </FormButton>

      {isSuccessful ? (
        <SuccessMessage>
          <span>Επιτυχής Αποστολή!</span>
        </SuccessMessage>
      ) : null}
    </FormContainer>
  );
}

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.8;
  padding-bottom: 0.5rem;
`;

const FormContainer = styled.form`
  width: 420px;
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  background-color: ${({ theme }) => theme.blue};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

const FormBlock = styled.div`
  padding-bottom: 1rem;
`;

const ErrorMessage = styled.span`
  opacity: 0.6;
  font-size: 0.9rem;
  color: red;
`;

const SuccessMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  span {
    background-color: ${({ theme }) => theme.green};
    border-radius: 8px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    color: #fff;
  }
`;
