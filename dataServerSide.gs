function getData() {
  const ss = SpreadsheetApp.openById('1-Fj2dZDdxjYHfG51Ubmnbg8Q_oDKmi-w1yn1PeYcX0g');
  const ws = ss.getSheetByName("test")
  const dataRange = ws.getRange("A1").getDataRegion()
  const data = dataRange.getDisplayValues()

  const headers = data.shift()

  // console.log(headers)
  // console.log(data) 

  const jsData = data.map(r => {
    const tempObject = {}
    headers.forEach((header,i) => {
      tempObject[header] = r[i]
    })
    return tempObject
  })

  return jsData
  // end getData Function
}


// function ubah data di spreadsheet
function editfield(props){
  const ss = SpreadsheetApp.openById('1-Fj2dZDdxjYHfG51Ubmnbg8Q_oDKmi-w1yn1PeYcX0g');
  const ws = ss.getSheetByName("test")
  const data = ws.getDataRange().getValues();
  const headers = data.shift();
  const idIndex = headers.indexOf("ID");

  const rowIndex = data.findIndex(row => row[idIndex] == props.id);

  if (rowIndex === -1) {
    throw new Error("No Matching Record");
  }}
