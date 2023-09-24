import "./App.css";
import {
  Typography,
  Button,
  Link,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <LockOutlinedIcon
            sx={{
              width: "35px",
              height: "35px",
              color: "white",
              border: "0.5px solid white",
              borderRadius: "50%",
              backgroundColor: "#800080bf",
              padding: "5px",
              marginTop: "80px",
              marginBottom: "10px",
            }}
          ></LockOutlinedIcon>
        </div>
        <Typography variant="h3" sx={{ fontSize: "28px" }}>
          Sign in
        </Typography>
        <div>
          <Form />
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Remember Me"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginRight: "240px",
                marginTop: "5px",
              }}
            />
          </FormGroup>
        </div>
        <Button
          variant="contained"
          sx={{ marginBottom: "20px", marginTop: "24px", width: "396px" }}
        >
          SIGN IN
        </Button>
        <div>
          <Link href="#" sx={{ marginRight: "65px", marginTop: "30px" }}>
            Forgot password?
          </Link>
          <Link href="#">Do not have an account? Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default App;
