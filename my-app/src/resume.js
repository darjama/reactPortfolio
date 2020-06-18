import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import './resume.css'

const Resume = () => {
    return (
        <div className="container">
            <div className="sectionBar">
                <div className="sectionTitle">Resume</div>
            </div>
          <div className="dlButtons">
          <a href='./DarylMarcoResume.pdf' download='DarylMarcoResume.pdf' > <button>Download as PDF</button></a>
          <a href='./DarylMarcoResume.pdf.docx' download='DarylMarcoResume.docx' > <button> Download as Word Document</button></a>
          </div>
          <div className='innerContainer'>
        <PDFViewer
            document={{
                url: './DarylMarcoResume.pdf',
            }}
            scale={1.25}
            hideNavbar={true}
        />
        <br/>
        </div>
        <br/>
        <br/>
        </div>

    )
}

export default Resume;