'use client';

import formStore from "@/_store/ formStore";
import {FormEvent, PropsWithChildren, ReactElement, useState} from "react";
import {FormInterface} from "@/molecules/form/formInterface";
import {post} from "@/_lib/api/postData";
import Button from "@/atoms/button/Button";

const Form = ({formId, successMessage, children}: PropsWithChildren<FormInterface>): ReactElement => {
  const {payload} = formStore();
  let form: HTMLFormElement | null = null;

  if(typeof document !== 'undefined') {
    form = document.querySelector<HTMLFormElement>(`#${formId}`)
  }

  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!form) {
      setMessage('Une erreur est survenue.')
      return;
    }

    const elementsArray = Array.from(form.elements) as HTMLInputElement[];

    for(const input of elementsArray) {
      if (input.required && !input.value) {
        setMessage('Veuillez remplir tous les champs requis.')
        return;
      }
    }

    post('/posts', payload)
      .then(() => setMessage(successMessage))
      .catch(() => setMessage('Une erreur est survenue'))
  }

  return (
    <>
      <form id={formId}>
        {children}
      </form>
      <div className={'form__button_container'}>
        <Button btnClass={'form__button'} onClick={handleSubmit}>
          Inscription
        </Button>
        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default Form;
