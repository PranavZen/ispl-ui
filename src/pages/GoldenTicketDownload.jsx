import React from "react";
import { qrCode } from "../assets/imagePath";

function GoldenTicketDownload() {
  return (
    <section className="teamListSection">
      <div className="col-lg-12 golden-ticket-container">
        <div className="image-container">
          <img
            src="https://my.ispl-t10.com/assets/img/golden-ticket.png"
            className="image-fluid"
            alt="Golden Ticket"
            style={{ maxHeight: "430px" }}
          />
        </div>
        <div className="centered-text">
          <h1 className="golden-ticket-text">GOLDEN TICKET</h1>
          <p className="typeTitle">Season $seasonTypes</p>
          <p className="ticket-info playerName">$playerName</p>
          <hr
            style={{
              width: "100%",
              border: "1px solid #000",
            }}
          />
          <div className="qrCodeWrap">
            <img src={qrCode} alt="ISPL QR COde" width={80} height={80} />
          </div>
          <p className="ticket-info playerId">
            $playerId <span className="city-name-title">($cityName)</span>
          </p>
          <p className="finalTextSlotTicket">
            $selectedSlotCityName
            <br />
            $selectedSlotDate <br />
            $selectedSlotStartTime to $selectedSlotSEndTime
          </p>
        </div>
      </div>
    </section>
  );
}

export default GoldenTicketDownload;
