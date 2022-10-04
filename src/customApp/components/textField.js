import React, { Component } from "react";
import { useState } from "react";
import { Input } from "antd";
import Form from "../../components/uielements/form";
import IntlMessages from "../../components/utility/intlMessages.js";
import axios from "axios";
import Checkbox from "../../components/uielements/checkbox";
import Button from "../../components/uielements/button";
import Notification from "../../components/notification";
import { useEffect } from "react";
const FormItem = Form.Item;

//text field to search for booking code
const TextField = ({ input, setInput }) => {
  const [validateStatus, setValidateStatus] = useState("validating");

  const validate = (text) => {
    const re = /^[A-Z0-9]+$/;
    setValidateStatus(re.test(text) ? "success" : "error");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
    validate(e.target.value);
  };
  return (
    <Form>
      <FormItem validateStatus={validateStatus}>
        <Input
          type="text"
          placeholder="ABC12345"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        {validateStatus === "error" ? (
          <div style={{ color: "red" }}>
            <IntlMessages id="forms.formsWithValidation.failHelp" />
          </div>
        ) : null}
      </FormItem>
    </Form>
  );
};
export default TextField;
