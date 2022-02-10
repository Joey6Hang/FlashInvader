import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";

export default class FormUpdate extends Component {
  state = {
    idName: '',
    address: '',
    supplementary: "",
    point: 0,
    arrondissement: 0,
    photo:null,
    isLoading:true,
  };

  componentDidMount() {
    this.fetchInvader();
  }

  componentDidUpdate() {
    // console.log(this.props.id !== this.state._id);
    if (this.props.id !== this.state._id) this.fetchInvader();
  }

  fetchInvader = () => {
    APIHandler.get("/invader/" + this.props.id).then((res) => {
      const { idName,
        address,
        supplementary,
        point,
        arrondissement,
        photo } = res.data;
      this.setState({
        idName,
        address,
        supplementary,
        point,
        arrondissement,
        photo,
        isLoading: false,
      });
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIHandler.patch(
        "/invader/" + this.props.id, this.state
      );
      this.setState(...res)
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return this.state.isLoading ? (
      <p>...loading</p>
    ) : (
      <form>
        <h1>UPDATE a newInvader</h1>
        <form className="main">
              <div class="nes-field">
                <label for="name_field">idName</label>
                <input name = 'idName' type="text" id="name_field" class="nes-input" onChange={this.handleChange} value={this.state.name}></input>
              </div>

              <div class="nes-field">
                <label for="name_field">Address</label>
                <input name = 'address' type="text" id="name_field" class="nes-input" onChange={this.handleChange} value={this.state.name}></input>
              </div>

             
                <label for="warning_select">nes-select.is-warning</label>
                  <div class="nes-select is-warning">
                    <select name = 'point' required id="warning_select" onChange={this.handleChange} value={this.state.name}>
                      <option value="" disabled selected hidden>point...</option>
                      <option value="10">10pt</option>
                      <option value="20">20pt</option>
                      <option value="30">30pt</option>
                      <option value="40">40pt</option>
                      <option value="50">50pt</option>
                      <option value="100">100pt</option>
                    </select>
                  </div>
                  <label for="success_select">nes-select.is-success</label>
                    <div class="nes-select is-success">
                      <select name = 'arrondissement' required id="success_select" onChange={this.handleChange} value={this.state.name}>
                        <option value="" disabled selected hidden>Arrondissement...</option>
                        <option value="0">1e</option>
                        <option value="2">2e</option>
                        <option value="3">3e</option>
                        <option value="4">4e</option>
                        <option value="5">5e</option>
                        <option value="6">6e</option>
                        <option value="7">7e</option>
                        <option value="8">8e</option>
                        <option value="9">9e</option>
                        <option value="10">10e</option>
                        <option value="11">11e</option>
                        <option value="12">12e</option>
                        <option value="13">13e</option>
                        <option value="14">14e</option>
                        <option value="15">15e</option>
                        <option value="16">16e</option>
                        <option value="17">17e</option>
                        <option value="18">18e</option>
                        <option value="19">19e</option>
                        <option value="20">20e</option>
                      </select>
                    </div>

                    <label for="textarea_field">Supplementary</label>
                    <textarea name = 'supplementary' id="textarea_field" class="nes-textarea" 
                     onChange={this.handleChange} value={this.state.supplementary}></textarea>

                    <label class="nes-btn">
                        <span>Select your file</span>
                        <input type="file" accept="image/*" onChange={this.handleImage} value={this.state.photo} name="photo" ></input>
                        {/* <img id="blah" src={URL.createObjectURL(this.setState.photo)} alt="img" /> */}
                      </label>

                      <button type="button" class="nes-btn is-success" onClick={this.handleSubmit}>OK</button>

          </form>
          </form>
    );
  }
}
