import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Contact = () => {
  return (
    <div
      style={{
        width: "80%",
        position: "relative",
        margin: "auto",
        height: "50vh",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          position: "absolute",
          bottom: "15%",
          zIndex: "5",
          height: "85vh",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          lg={5}
          md={10}
          sx={{
            backgroundColor: "#fff",
            margin: "0 40px 0 0px",
            borderRadius: "20px",
            boxShadow: "0px 0px 36px 5px rgba(0,0,0,0.15)",
          }}
        >
          <h3
            style={{
              color: "#30274e",
              letterSpacing: "3px",
              marginTop: "50px",
            }}
          >
            JOIN OUR NEWSLETTER
          </h3>
          <h1
            style={{
              color: "#fd853d",
              fontSize: "50px",
            }}
          >
            Nam esteras loremips est orem.
          </h1>
          <address
            style={{
              fontSize: "23px",
            }}
          >
            3045 10 Sunrize Avenue, 123-456-7890 <br />
            Mon – Fri: 9:00 am – 8:00 pm,
            <br />
            Sat – Sun: 9:00 am – 10 pm
          </address>
          <p
            style={{
              margin: "25px 0",
            }}
          >
            <a
              href=""
              style={{
                color: "#fd853d",
                fontSize: "25px",
              }}
            >
              contacts@esbnyc.com
            </a>
          </p>
          <h2
            style={{
              color: "#fd853d",
              letterSpacing: "3px",
              marginTop: "35px",
              fontSize: "40px",
            }}
          >
            Follow us
          </h2>
          <div
            className="socialMedia"
            style={{ color: "#291569", marginBottom: "50px" }}
          >
            <FacebookIcon sx={{ margin: "0 15px", fontSize: "50px" }} />
            <TwitterIcon sx={{ margin: "0 15px", fontSize: "50px" }} />
            <InstagramIcon sx={{ margin: "0 15px", fontSize: "50px" }} />
            <LinkedInIcon sx={{ margin: "0 15px", fontSize: "50px" }} />
            <PinterestIcon sx={{ margin: "0 15px", fontSize: "50px" }} />
          </div>
          <div
            style={{ color: "#291569", fontSize: "22px", fontWeight: "500" }}
          >
            © 2022 Privacy Policy
          </div>
        </Grid>
        <Grid
          item
          lg={5}
          md={10}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0px 0px 36px 5px rgba(0,0,0,0.15)",
          }}
        >
          <form action="./index.php" method="POST" target="_blank">
            <h1
              style={{
                color: "#fd853d",
                letterSpacing: "3px",
                marginTop: "40px",
                fontSize: "50px",
              }}
            >
              Contact Us
            </h1>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter a valid email address"
              id="email"
              name="email"
            />
            <br />
            <label htmlFor="name">Name</label>
            <br />

            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
            />
            <br />
            <label htmlFor="message">Message</label>
            <br />

            <textarea
              placeholder="Enter your message"
              rows={5}
              id="name"
              name="message"
            />
            <br />
            <input
              type="button"
              name="submit"
              className="submit"
              value={"Submit"}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
