import React, { useState } from 'react';
import './Forms.css';
import Title from '../../components/Title/Title';

const Forms = () => {
  const [open2025, setOpen2025] = useState(true);
  const [open2024, setOpen2024] = useState(false);
  const [openPolicies, setOpenPolicies] = useState(false);

  return (
    <div className="forms-container">
      <p>
        Groups interested in requesting a PDR from 
        CCMPSSC can find the forms below. Meetings 
        are held weekly (holidays excluded) on 
        Microsoft Teams, email 
        <a href="mailto:cepsvpi@uoguelph.ca"> cepsvpi@uoguelph.ca </a> 
        for more details. Please refer to the CCMPSSC 
        Board Meeting Schedule for when PDRs will be 
        accepted. PDR forms must be completed no later 
        than two days prior to the meeting at which 
        the request is to be presented.
      </p>
      <ul>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd_WgNvmC8L5B4Fxuw3sCUmtzf4bleicmuqVefNuz5tXYG-ow/viewform" target="_blank" rel="noopener noreferrer">
            PDR Form</a></li>
        <li><a href=" https://forms.gle/2JGTypPSu9Hq6zko7" target="_blank" rel="noopener noreferrer">
            Reimbursement Form</a></li>
      </ul>

      <Title subtitle='' title='Board Meeting Minutes'/>
      
      <div className="minutes-section">
        <button 
          className={`dropdown-header ${open2025 ? 'open' : ''}`} 
          onClick={() => setOpen2025(!open2025)}
        >
          <span>2025 - 2026 Minutes</span>
          <span className="dropdown-arrow">{open2025 ? '▼' : '▶'}</span>
        </button>
        {open2025 && (
          <ul className="dropdown-content">
            <li><a href="/CEPSSC%20Board%20Meeting%23%2012%20of%202025-2026%20term%20agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 12, January 12</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%2011%20of%202025-2026%20term%20agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 11, November 17</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%2010%20of%202025-2026%20term%20agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 10, November 10</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%209%20of%202025-2026%20term%20agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 9, November 3</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%208%20of%202025-2026%20term%20agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 8, October 20</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%207%20of%202025-2026%20term%20Agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 7, October 6</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%206%20of%202025-2026%20term%20Agenda%20V2.docx" target="_blank" rel="noopener noreferrer">
              Agenda 6, September 29</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%205%20of%202025-2026%20term%20Agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 5, September 22</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%204%20of%202025-2026%20term%20Agenda%20V2.docx" target="_blank" rel="noopener noreferrer">
              Agenda 4, September 8</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%203%20of%202025-2026%20term%20Agenda%20v2.docx" target="_blank" rel="noopener noreferrer">
              Agenda 3, August 7</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%202%20of%202025-2026%20term%20Agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 2, July 7</a></li>
            <li><a href="/CEPSSC%20Board%20Meeting%23%201%20of%202025-2026%20term%20Agenda.docx" target="_blank" rel="noopener noreferrer">
              Agenda 1, June 26</a></li>
          </ul>
        )}
      </div>

      <div className="minutes-section">
        <button 
          className={`dropdown-header ${open2024 ? 'open' : ''}`} 
          onClick={() => setOpen2024(!open2024)}
        >
          <span>2024 - 2025 Minutes</span>
          <span className="dropdown-arrow">{open2024 ? '▼' : '▶'}</span>
        </button>
        {open2024 && (
          <ul className="dropdown-content">
            <li><em>No minutes available yet</em></li>
          </ul>
        )}
      </div>

      <Title subtitle='' title='Miscellaneous Documents'/>
      <ul>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2019/06/event-summary-form-.pdf" target="_blank" rel="noopener noreferrer">
        Event Summary Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/cpessc-meetings-guide.pdf" target="_blank" rel="noopener noreferrer">
        CCMPSSC Meetings Guide</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/exec-position-descriptions.pdf" target="_blank" rel="noopener noreferrer">
        CCMPSSC Exec Position Descriptions</a></li>
        <li><a href="/CEPSSC_F25_Election_Results_-.pdf" target="_blank" rel="noopener noreferrer">
        F25 Election Results</a></li>
      </ul>

      <div className="minutes-section">
        <button 
          className={`dropdown-header ${openPolicies ? 'open' : ''}`} 
          onClick={() => setOpenPolicies(!openPolicies)}
        >
          <span>CCMPSSC Approved Policies</span>
          <span className="dropdown-arrow">{openPolicies ? '▼' : '▶'}</span>
        </button>
        {openPolicies && (
          <ul className="dropdown-content">
            <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2019/08/sop-aso-form.pdf" target="_blank" rel="noopener noreferrer">
              CCMPSSC Policy (SOP) for Accredited Student Organization (ASO) Form</a></li>
          </ul>
        )}
      </div>

      <Title subtitle='' title='Student Risk Management'/>
      <ul>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        Bus Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        Event Venue Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        SRM Handbook</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-line-monitor-contract.pdf" target="_blank" rel="noopener noreferrer">
        Line Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-one-way-bus-trip-waiver.pdf" target="_blank" rel="noopener noreferrer">
        One-Way Bus Trip Waiver</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-primary-organiser-contract.pdf" target="_blank" rel="noopener noreferrer">
        Primary Organizer Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-event-planning-form.pdf" target="_blank" rel="noopener noreferrer">
        Event Planning Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-guide.pdf" target="_blank" rel="noopener noreferrer">
        SRM Guide</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/cepssc-budget-form-2020.pdf" target="_blank" rel="noopener noreferrer">
        Incident Report Form</a></li>
        <li><a href="https://static1.squarespace.com/static/60d11d6af55fef17142cdc57/t/65512636dd6cd60d69ca25e7/1699817015105/CEPSSC+Board+Agenda+1++%281%29.pdf" target="_blank" rel="noopener noreferrer">
        On-Site Food Preparation Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/cepssc-budget-form-2020.pdf" target="_blank" rel="noopener noreferrer">
        Physical Activity of Overnight Waiver</a></li>
        <li><a href="https://static1.squarespace.com/static/60d11d6af55fef17142cdc57/t/65512636dd6cd60d69ca25e7/1699817015105/CEPSSC+Board+Agenda+1++%281%29.pdf" target="_blank" rel="noopener noreferrer">
        Risky Event Waivers</a></li>
      </ul>

      <Title subtitle='' title='Our Constitution'/>
      <p className='spacer'>
      Below is CCMPSSC's official constitution.
      To download the document, please click 
      the button.
      </p>
      <a href="/Approved_Corrected_Constitution_for_the_CCMPS_College_Government.docx" download className='btn dark-btn'>
        View Document
      </a>
    </div>
  );
}

export default Forms;
