import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const Resume = () => {
    return (
        <div>
          <div>
          <a href='./DarylMarcoResume.pdf' download='DarylMarcoResume.pdf' > <button>Download as PDF</button></a>
          <a href='./DarylMarcoResume.pdf.docx' download='DarylMarcoResume.docx' > <button> Download as Word Document</button></a>
          </div>
        <PDFViewer
            document={{
                url: './DarylMarcoResume.pdf',
            }}
            scale={1.25}
        />
        </div>

    )
}

export default Resume;