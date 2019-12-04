import React from 'react';

class CreateBicycleForm extends React.Component {
  state = {
    title: '',
    description: '',
    bicycle_type: '',
    size: '',
    colour: '',
    price: ''
  }

  render() {
    return (
      <div>
        <form>
          <h2>New Listing</h2><br/>
          <label>Listing Title: </label><br/>
          <input type='text'></input><br/><br/>
          <label>Listing Description: </label><br/>
          <input type='text'></input><br/><br/>
          <label>Bicycle Type: </label><br/>
            <div className="radio">
              <label>
                <input type="radio" value="option1" />
                City Bicycle
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option2" />
                Mountain Bicycle
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option3" />
                Road Bicycle
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option4" />
                Folding Bicycle
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option5" />
                Trekking Bicycle
              </label>
            </div><br/>
          <label>Bicycle Size: </label>
            <div className="radio">
              <label>
                <input type="radio" value="option6" />
                Small
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option7" />
                Medium
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option8" />
                Large
              </label>
            </div><br/>
          <label>Bicycle Colour: </label><br/>
          <input type='text'></input><br/><br/>
          <label>Price: </label><br/>
          <input type='text'></input><br/><br/>
        </form>
      </div>
    )
  }
}

export default CreateBicycleForm;
