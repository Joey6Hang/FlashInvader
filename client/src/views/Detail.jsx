import React,{Component} from "react";
import APIHandler from "./../api/APIHandler";

export default class Details extends Component {
    state = {
        invader:null,
    }
    componentDidMount() {
        this.fetchInvader();
      }

      fetchInvader = async () => {
        try {
          const res = await APIHandler.get("/invaders/" + this.props.id);
          this.setState({
            invaders: res.data,
          });
        } catch (err) {
          console.error(err);
        }
      };

      render() {
        const { invader } = this.state;
        return (
          <div>
            {!invader ? (
              <p>loading...</p>
            ) : (
              <>
                <h1>invader's details</h1>
                <p>
                  id: {invader.id}
                  <br />
                  address: {invader.address}
                  <br />
                  point: {invader.point}
                  <br />
                  photo: {invader.photo}
                  <br />
                  arrondissement: {invader.arrondissement}
                  <br />
                  Supplementary: {invader.Supplementary}
                </p>
              </>
            )}
          </div>
        );
      }
}