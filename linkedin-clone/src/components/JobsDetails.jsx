import { Col, Container, Row } from "react-bootstrap";
import JobElement from "./JobElement";
import { useSelector } from "react-redux";
import JobElementDetails from "./JobElementDetails";
import { useEffect, useState } from "react";
import JobsSideDetails from "./JobsSideDetails";
import { useParams } from "react-router";

const JobsDetails = () => {
  // ---------JOB ID
  const { jobid } = useParams();

  const [jobId, setJobId] = useState("");

  const jobs = useSelector((state) => state.jobs.jobs.data);
  const jobsSlice = jobs.slice(0, 20);

  //   const paragrafi = testo.split('');
  //   const testoSenzaBreakLines = testoConBreakLines.replace(/<br>/g, '').replace(/\n/g, '');

  useEffect(() => {
    setJobId(jobid);
  }, []);

  return (
    <>
      <div className="mt-0 JobsDetailsContainer ">
        <Row className="">
          <Col xs={1}></Col>
          <Col xs={5} className="border JobsDetailsTopLeftRound  bg-white">
            <Row className="bg-Link JobsDetailsTopLeftRound text-white  ">
              <h6 className="mt-4 mb-0 ">Le principali offerte di lavoro per te</h6>
              <p className="mt-1 subText">{`${jobsSlice.length} risultati`}</p>
            </Row>

            <div className="JobDetails">
              {jobsSlice.map((job) => (
                <JobElementDetails
                  job={job}
                  controlloId={jobId}
                  id={job._id}
                  key={`job-key-${job._id}`}
                  setJobId={setJobId}
                />
              ))}
              <Row className="JobsEndButton rounded-bottom-3">
                <Col className="d-flex justify-content-center justify-content-center  p-2 text-secondary">
                  <h5 className="me-2">Mostra tutto</h5>
                  <i className="bi bi-arrow-right fontBold"></i>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={5} className="bg-white borderJobsDetails jobDetailsContainer">
            {jobId == "" ? <></> : <JobsSideDetails id={jobId} jobs={jobs} />}
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default JobsDetails;
