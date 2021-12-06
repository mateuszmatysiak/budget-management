import XLSX from "xlsx";
import FileSaver from "file-saver";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

const reportCSV = (testData: unknown[]) => {
  const ws = XLSX.utils.json_to_sheet(testData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, `Raport ${new Date().toLocaleString("pl-PL")}.xlsx`);
};

export { reportCSV };
