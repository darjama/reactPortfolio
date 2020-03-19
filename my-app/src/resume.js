import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import './resume.css'

const Resume = () => {
    return (
        <div>
          <div className="dlButtons">
          <a href='./DarylMarcoResume.pdf' download='DarylMarcoResume.pdf' > <button>Download as PDF</button></a>
          <a href='./DarylMarcoResume.pdf.docx' download='DarylMarcoResume.docx' > <button> Download as Word Document</button></a>
          </div>
        <PDFViewer
            document={{
                url: './DarylMarcoResume.pdf',

            }}
            scale={1.25}
            hideNavbar="true"
        />
        </div>

    )
}

export default Resume;