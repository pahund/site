import React from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Markdown, VenueGallery, connect } from "components";

const ForAttendees = ({ page = {} }) => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <Markdown source={page.secondary} />
    </div>
    <div className="grid--full">
      <Interactive id="components/VenueGallery.js" component={VenueGallery} />
    </div>
    <AnchorHeader level={3}>The Venue Location</AnchorHeader>
    <div className="grid--full">
      <img
        className="venue--location"
        src={require("assets/img/venue-location.png")}
        alt="Valkoinen Sali in Helsinki"
      />
    </div>
    <div className="grid--5col">
      <Markdown source={page.main} />
    </div>
  </>
);

export default connect(`
{
  page(id: "for-attendees") {
    intro, secondary, main
  }
}
`)(ForAttendees);
