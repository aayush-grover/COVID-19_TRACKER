import React ,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from 'axios';

class Summary extends Component {
  state={
    case :[],
    latestBy:'',
  }
async componentDidMount(){
    axios.get("https://corona.lmao.ninja/all")
    .then(res =>{
        this.setState({case:res.data});
        const date= new Date(parseInt(res.data.updated));
        this.setState({latestBy : date.toString()});
    })
    .catch(err =>{
        console.log(err);
    });
  }
  //const date= new Date(parseInt(this.state.case.updated));
  //this.setState({latestBy : date.toString()});

  render(){
  return (
   <React.Fragment>
    <CardDeck>
  <Card bg="secondary" text="white" className="text-center" Style={{margin:"10px"}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {this.state.case.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>{this.state.latestBy}</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center" Style={{margin:"10px"}}>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
      {this.state.case.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>{this.state.latestBy}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white"className="text-center" Style={{margin:"10px"}}>
    
    <Card.Body>
      <Card.Title>Rescued</Card.Title>
      <Card.Text>
      {this.state.case.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>{this.state.latestBy}</small>
    </Card.Footer>
  </Card>
</CardDeck>
   </React.Fragment>
  );
}
}

export default Summary;
