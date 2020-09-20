import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./Textinput";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };

    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (event) => {
    this.setState({ name: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  inputDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contact to us</DialogTitle>
        <DialogContent>
          <TextInput
            label={"Name"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />
          <TextInput
            label={"Email"}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={"email"}
            onChange={this.inputEmail}
          />
          <TextInput
            label={"Text box"}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={"text"}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            Sent
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
