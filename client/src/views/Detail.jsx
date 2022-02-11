import React,{Component} from "react";
import APIHandler from "./../api/APIHandler";
import { Link, Redirect } from "react-router-dom";


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
            supplementary: data.supplementarys,
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
          <div>
            
              <>
                <h1>invader's details</h1>
                <button onClick={() => this.handleUpdate(this.state._id, "update")} >Update</button>
                <button onClick={() => this.handleDelete(this.state._id)} >Delete</button>
                
                <p>
                  id: {this.state.idName}
                  <br />
                  address: {this.state.address}
                  <br />
                  photo:<img src={this.state.photo} alt={this.state.idName} className="imgdetail" />
                  <br />
                  point: {this.state.point}
                  <br />
                  arrondissement: {this.state.arrondissement}
                  <br />
                  Supplementary: {this.state.supplementary}
                </p>
              </>
            
          </div>
        );
      }
}