import * as React from 'react';
import s from './text-field.module.css'
import {ChangeEvent} from "react";

type Props = {
  value: string
  onChange: (value: string) => void
  title: string
};


export function TextField({onChange, value, title}: Props) {

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)

  }

  return (
    <div className={s.wrapper}>
      <h4>{title}</h4>
      <input min={0} type="number" onChange={onChangeHandle} value={value} placeholder={'write...'}/>
    </div>
  );
}