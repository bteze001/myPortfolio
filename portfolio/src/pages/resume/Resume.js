import PageHeader from "../../components/PageHeader";
import { FaFilePdf } from 'react-icons/fa';
import './resume.css';

const Resume = ({ brand }) => {

  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise"/>
      <PageHeader body="Access my resume below:" />
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
        <FaFilePdf/> Resume
      </a>
    </section>
  );
};

export default Resume;

