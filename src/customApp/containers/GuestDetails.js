import React, { Component, useState, useEffect } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import TextField from "../components/textField";
import IntlMessages from "../../components/utility/intlMessages.js";
import axios from "axios";
import GuestDetailsDisplay from "../components/guestDetailsDisplay.js";

export default function GuestDetails() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(
    () => {
      axios
        .get(`https://bv-online-assessment.herokuapp.com/api/bookings/${input}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [input]
  );
  return (
    <LayoutContentWrapper style={{ textAlign: "center" }}>
      <LayoutContent>
        {/* get prompt message from languageProvider>locales */}
        <IntlMessages id="forms.guestPortal.prompt" />
        <TextField input={input} setInput={setInput} />
        <GuestDetailsDisplay data={data} />
      </LayoutContent>
    </LayoutContentWrapper>
  );
}
