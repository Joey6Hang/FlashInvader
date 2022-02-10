import React,{Component} from "react";
import APIHandler from "./../api/APIHandler";

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

      // fetchInvader = async () => {
      //   try {
      //     const res = await APIHandler.get(`/api/invaders/ + ${this.props.match.params.id}`);
      //     console.log(this.props.match);
      //     this.setState({
      //       invader: res.data,
      //     });
      //   } catch (err) {
      //     console.error(err);
      //   }
      // };

      render() {
        return (
          <div>
            
              <>
                <h1>invader's details</h1>
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