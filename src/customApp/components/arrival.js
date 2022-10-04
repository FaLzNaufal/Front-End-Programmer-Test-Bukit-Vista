import React, { Component } from "react";
import Form from "../../components/uielements/form";
import IntlMessages from "../../components/utility/intlMessages.js";
import { TimePicker } from "antd";
import Button from "../../components/uielements/button";
import Notification from "../../components/notification";
import axios from "axios";

//form to change arrival time
const Arrival = ({ input, setInput, time, setTime }) => {
  const handleChange = (_, timeString) => {
    setTime(timeString);
    console.log(timeString);
  };
  const handleSubmit = () => {
    const data = { arrival_time: time };
    axios
      .put(
        `https://bv-online-assessment.herokuapp.com/api/bookings/${input}/update-eta`,
        data
      )
      .then((res) => {
        Notification("success", "Arrival time updated");
        console.log(res.data);
        const temp = input;
        setInput("");
        setInput(temp);
      })
      .catch((err) => {
        console.log(err);
        Notification("error", "Error updating arrival time");
      });
  };
  return (
    <Form>
      <IntlMessages id="arrival.eta" />
      <br />
      <TimePicker onChange={handleChange} format="HH:mm" />
      <Button htmltype="submit" onClick={handleSubmit}>
        <IntlMessages id="inline.submit" />
      </Button>
    </Form>
  );
};
export default Arrival;
