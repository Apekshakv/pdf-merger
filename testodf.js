const PDFMerger = require('pdf-merger-js');
const path = require('path');

var merger = new PDFMerger();
const mergepdfs = async (p1, p2) => {
  await merger.add(p1);  
  await merger.add(p2); 
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); 
  return d
}

module.exports = { mergepdfs };

