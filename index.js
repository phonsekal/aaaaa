export default async function handler(req, res) {
  const destinationURL = "https://script.google.com/macros/s/AKfycbxuFu352bQRyIeyglvzhUXcmDU_GSWXcufi47xH1K-3a8Tf5WjMgW1vluNHd1pyGSs11A/exec";

  try {
    const response = await fetch(destinationURL, {
      method: req.method,
      redirect: 'follow'
    });

    const data = await response.text();

    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error koneksi: " + error.message);
  }
}
