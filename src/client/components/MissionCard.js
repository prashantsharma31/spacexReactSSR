import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

 const MissionCard = (props) => {
        let {project} = props;
        return (
            <div className="card medium p-3">
                <div className="card-image grey lighten-3">
                <LazyLoadImage className="h-100 w-100" alt={project.rocket.rocket_id} src={project.links.mission_patch_small} />
                </div>
                <div className="mt-3 mb-3 small">
                    <b>
                    <span className="purple-text">{`${project.mission_name} #${project.flight_number}`}</span>
                    </b>
                </div>
                <div className="mt-1 mb-1 small">
                    <b>
                        <span className="black-text">Mission Ids: </span>
                    </b>
                    <span className="blue-text">
                    {project.mission_id && <ul>
                             { project.mission_id.map(id => {
                              return (  <li key={id}>{id}</li>);
                            })}
                        </ul>}
                    </span>
                </div>
                <div className="mt-1 mb-1 small">
                    <b>
                        <span className="black-text">Launch Year: </span>
                    </b>
                    <span className="blue-text">{`${project.launch_year}`}</span>
                </div>
                <div className="mt-1 mb-1 small">
                    <b>
                        <span className="black-text">Successful Launch: </span>
                    </b>
                    <span className="blue-text">{`${project.launch_success}`}</span>
                </div>
                <div className="mt-1 mb-1 small">
                    <b>
                        <span className="black-text">Successful Landing: </span>
                    </b>
                    <span className="blue-text">{project.rocket.first_stage.cores[0] && project.rocket.first_stage.cores[0].land_success && `${project.rocket.first_stage.cores[0].land_success}`}</span>
                </div>
            </div>
        );
};

export default MissionCard;