import React from 'react';
import { shallow } from 'enzyme';
import  MissionCard from '../components/MissionCard';

describe("MyComponent", () => {
  it("should render correctly", () => {
    let project = {
        rocket: {
            rocket_id: 1,
            first_stage : {
                cores: [
                    {land_success: true}
                ]
            }
        },
        links : {
          mission_patch_small: `https://images2.imgbox.com/d2/3b/bQaWiil0_o.png`
        }
    };
    const component = shallow(<MissionCard  project ={project}/>);
  });
  
});