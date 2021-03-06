import React from "react";
import { Container, Row } from "react-bootstrap";
import AddShowing from "../components/manager/AddShowing";
import Theater_Info from "../components/manager/Theater-info";
import AddMovie from "../components/manager/addMovie";
import AddSnack from "../components/manager/addSnack";


const ManDashboard = () => {
  
    return (
        <Container className="mb-5" >
          <Theater_Info/>
          <hr/>
          <AddShowing/>
          <hr/>
          <AddSnack/>
          <hr/>
          <AddMovie/>

        </Container>
      );
    };

export default ManDashboard;