import React from "react";
import PropTypes from "prop-types";
import { ContainerLoading } from "./styled";

export default function Loading({ isLoading = false }) {
  if (!isLoading) return <></>;
  return (
    <ContainerLoading>
      <div></div>
      <span>Carregando</span>
    </ContainerLoading>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
