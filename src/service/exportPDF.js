import jsPDF from "jspdf";
import "jspdf-autotable";

export const exportTableToPDF = (data) => {
  const doc = new jsPDF();

  const columns = [
    "No",
    "Customer Name",
    "Customer Email",
    "Catalog Package",
    "Status",
  ];
  const rows = data.map((item, index) => [
    index + 1,
    item.customerName,
    item.customerEmail,
    item.catalog.name,
    item.status,
  ]);

  doc.autoTable({
    head: [columns],
    body: rows,
  });

  doc.save("order_list.pdf");
};
