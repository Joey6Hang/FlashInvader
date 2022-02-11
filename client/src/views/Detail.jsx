import React,{Component} from "react";
import APIHandler from "./../api/APIHandler";
import { Link, Redirect } from "react-router-dom";
import "./../styles/detail.css"

export default class Details extends Component {
    state = {
      idName:"",
      address:"",
      supplementary:"",
      point: 0,
      arrondissement:0,
      photo: null,
      
    }
    async componentDidMount() {
      APIHandler.get(`/invader/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState(
          {
            idName: data.idName,
            address: data.address,
            supplementary: data.supplementary,
            point: data.point,
            arrondissement: data.arrondissement,
            photo: data.photo,
          },
        );
      })
      .catch((error) => console.error(error.response.data));      
    }

    handleUpdate = async (e) => {
      try {
        await APIHandler.get(`/invader/${this.props.match.params.id}`);
        this.props.history.push(`/update/${this.props.match.params.id}`)
      }catch (err) {
        console.log(err);
      }
    }
      handleDelete = async (e) => {
        try {
          await APIHandler.delete(`/invader/${this.props.match.params.id}`);
         // this.fetchInvader();
         alert("Delete");
         this.props.history.push("/")
        } catch (err) {
          console.error(err);
        }
      };

      render() {
        return (
          <div className="detailmain">
            
              <>
              <br/>
                <h1>invader's details</h1>                
              <br/>
                <div class="nes-table-responsive">
                  <table class="nes-table is-bordered is-dark" id="table">
                    <thead>
                      <tr>
                        <th> {this.state.idName}</th>
                        <th> {this.state.point} pt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {this.state.address}</td>
                        <td> {this.state.arrondissement}e</td>
                      </tr>
                      <tr>
                        <td><img src={this.state.photo} alt={this.state.idName} id="imgdetail" /></td>
                        <td> {this.state.supplementary}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br/>
                <button 
                type="button" class="nes-btn is-warning" id="update"
                onClick={() => this.handleUpdate(this.state._id, "update")} >
                <i class="nes-icon trophy is-large"></i>
                <div className="update">  
                update
                </div>
                </button>
                
                <button 
                type="button" class="nes-btn is-error" id="delete"
                onClick={() => this.handleDelete(this.state._id)} >
                <i class="nes-icon close is-large"></i>
                <div>
                  delete
                </div>
                </button>
               </>
          </div>
        );
      }
}