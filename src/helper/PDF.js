import { jsPDF } from 'jspdf'
import { uploadPDFFile } from '../functions/UploadFile';
import html2canvas from 'html2canvas';


const generatePDF = async(data, index) => {
    try {
     
    // Transforms the canvas into a base64 image
    // console.log("base64Image",document.getElementById(`qrcode-${index}`))
    // let base64Image = document.getElementById('qrcode-0').toDataURL()
    let dataSvg = document.getElementById(`qrcode-${index}`)
    
    html2canvas(dataSvg).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: [100, 60],
        });

        pdf.setFillColor("#e891a0");
        pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(),"DF");
        // QR Code Image
        pdf.addImage(imgData, 'png', 17.5, 10, 25, 25)

        // Transaction Details Label
        pdf.setFont("times");
        pdf.setFontSize(11);
        pdf.text("Transaction Details", 15, 42);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Invoice Code", 10, 50);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Business Unit", 10, 56);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Branch", 10, 62);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Customer", 10, 68);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Booking Date", 10, 74);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Booking Time", 10, 80);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text("Total Price", 10, 86);

        // Line Separator for label and value
        pdf.line(30,95,30,45,"F");

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.InvoiceCode, 32, 50);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.BusinessUnit, 32, 56);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.Branch, 32, 62);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.Customer, 32, 68);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.BookingDate, 32, 74);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.BookingTime, 32, 80);

        pdf.setFont("times");
        pdf.setFontSize(8);
        pdf.text(data?.TotalPrice, 32, 86);

        // Downloads the pdf
        // pdf.save('QR.pdf')
        // pdf.output("dataurlnewwindow");
        var pdffile = pdf.output("blob");
            
        uploadPDFFile(pdffile,"pdf",data?.PDFFile) 
      });
  
    } catch (error) {
        console.log(error)
    }
}

export {
    generatePDF
}