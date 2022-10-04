import React, { Component } from "react";
import { useState } from "react";
import { Input } from "antd";
import Form from "../../components/uielements/form";
import IntlMessages from "../../components/utility/intlMessages.js";
import IsoWidgetsWrapper from "../../containers/Widgets/widgets-wrapper";
import VCardWidget from "../../containers/Widgets/vCard/vCard-widget";
import axios from "axios";
import Checkbox from "../../components/uielements/checkbox";
import Button from "../../components/uielements/button";
import Notification from "../../components/notification";
import { useEffect } from "react";
import intlMessages from "../../components/utility/intlMessages.js";
const FormItem = Form.Item;
//display guest details
const GuestDetailsDisplay = ({ data }) => {
  //do not display anything if data is empty
  if (data.booking_code) {
    return (
      <>
        <IsoWidgetsWrapper>
          {/* VCard Widget */}
          <VCardWidget
            style={{ height: "450px" }}
            src={data.profile_picture}
            alt="profile picture"
            name={
              <>
                <IntlMessages id="inline.hi" />
                {data.guest_name}
                <IntlMessages id="inline.exclamation" />
              </>
            }
            description={
              <>
                <IntlMessages id="guestDetails.greeting" />
                <br />
                <br />
                <IntlMessages id="guestDetails.propertyName" />
                {data.property_name}
                <br />
                <br />
                <IntlMessages id="guestDetails.checkInDate" />
                {data.check_in_date}
                <br />
                <br />
                <IntlMessages id="guestDetails.checkOutDate" />
                {data.check_out_date}
                <br />
                <br />
                <IntlMessages id="guestDetails.arrivalTime" />
                {data.arrival_time ? (
                  data.arrival_time
                ) : (
                  <IntlMessages id="guestDetails.notSet" />
                )}
              </>
            }
          />
        </IsoWidgetsWrapper>
      </>
    );
  } else return null;
};
export default GuestDetailsDisplay;
