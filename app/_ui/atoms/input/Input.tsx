'use client'

import {InputInterface} from "@/atoms/input/inputInterface";
import formStore from "@/_store/ formStore";
import React, {FormEvent, useState} from "react";

const Input = ({
  type,
  placeholder,
  required = false,
  name,
  value = undefined
}: InputInterface) => {
  const { setValue } = formStore();
  const [style, setStyle] = useState({})

  const handleChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if(validate(target)) {
      setValue(target.name, target.value);
      setStyle({
        border: "3px solid green"
      })
    } else {
      setStyle({
        border: "3px solid red"
      })
    }
  }

  const validate = (target: HTMLInputElement): boolean => {
    switch (target.type) {
      case 'email':
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(target.value)
      case 'text':
        return true;
      default:
        return false;
    }
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      onBlur={handleChange}
      value={value}
      name={name}
      style={style}
    />
  )
}

export default Input;
