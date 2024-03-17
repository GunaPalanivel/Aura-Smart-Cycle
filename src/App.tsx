import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import LandingPage from "./landing-page/LandingPage";
import Checkout from "./checkout/Checkout";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import ContuctUs from "./contuct-us/ContuctUs";
import PassGot from "./pass-got/PassGot";
import LunchScreen from "./main/LunchScreen";
import SimpleMap from "./tracking-map/SimpleMapp";
import ChatBot from "react-simple-chatbot"; // Make sure to import ChatBot

export default class App extends Component {
  render() {
    return (
      <div>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "Hi! Welcome to Aura. What is your Name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              trigger: "4",
            },
            {
              id: "4",
              message: "What plan are you looking for?",
              trigger: "5",
            },
            {
              id: "5",
              options: [
                { value: 1, label: "Basic", trigger: "6" },
                { value: 2, label: "Premium", trigger: "7" },
                { value: 3, label: "Elite", trigger: "7" },
              ],
            },
            {
              id: "7",
              message:
                "Sounds Great!. Check our pricing page for more details.",
              trigger: "8",
            },
            {
              id: "6",
              message: "Good Choice. Check our pricing page for more details.",
              trigger: "8",
            },
            // Additional conversation steps
            {
              id: "8",
              message: "Do you have any questions about our plans?",
              trigger: "9",
            },
            {
              id: "9",
              options: [
                { value: 1, label: "  Yes", trigger: "10" },
                { value: 2, label: "No", trigger: "11" },
              ],
            },
            {
              id: "10",
              message: "Fill our contact form we'll contact you shortly.",
              end: true,
            },
            {
              id: "11",
              message: "Thank you for your time. Have a great day!",
              end: true,
            },

            {
              id: "12",
              message: "Check our pricing page for more details.",
              trigger: "8",
            },

            // Continue adding steps as needed
          ]}
          floating={true}
        />
        <Router>
          <Routes>
            <Route path="/" element={<LunchScreen />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/simpleMap" element={<SimpleMap />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/passGot" element={<PassGot />} />
            <Route path="/contuctUs" element={<ContuctUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
