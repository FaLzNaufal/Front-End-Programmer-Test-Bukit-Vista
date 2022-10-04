import React, { Component } from "react";
import IntlMessages from "../../components/utility/intlMessages.js";
import IsoWidgetsWrapper from "../../containers/Widgets/widgets-wrapper";
import VCardWidget from "../../containers/Widgets/vCard/vCard-widget";
//display guest details
const GuestDetailsDisplay = ({ data, setDisplay }) => {
  //do not display anything if data is empty
  if (data.booking_code) {
    setDisplay(true);
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
  } else {
    setDisplay(false);
    return null;
  }
};
export default GuestDetailsDisplay;
