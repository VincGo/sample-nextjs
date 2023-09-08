import React from "react";

export interface ButtonInterface {
  btnClass: string,
  onClick?: (e: React.FormEvent<Element>) => void;
}
