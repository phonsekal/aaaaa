{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default async function handler(req, res) \{\
  // GANTI DENGAN URL GOOGLE APPS SCRIPT ANDA (AKHIRAN /exec)\
  const destinationURL = "https://script.google.com/macros/s/AKfycbxuFu352bQRyIeyglvzhUXcmDU_GSWXcufi47xH1K-3a8Tf5WjMgW1vluNHd1pyGSs11A/exec";\
\
  try \{\
    const response = await fetch(destinationURL, \{\
      method: req.method,\
      redirect: 'follow'\
    \});\
\
    const data = await response.text();\
\
    // Header agar tombol di HP lancar dan tidak terblokir\
    res.setHeader('X-Frame-Options', 'ALLOWALL');\
    res.setHeader('Access-Control-Allow-Origin', '*');\
    res.setHeader('Content-Type', 'text/html');\
    \
    res.status(200).send(data);\
  \} catch (error) \{\
    res.status(500).send("Error koneksi: " + error.message);\
  \}\
\}}