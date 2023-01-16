import http from 'http';

async function getBody(req: http.IncomingMessage) {
  return new Promise((resolve, reject) => {
    let body: any[] | any = [];
    req.on('error', (err) => {
      console.error(err);
      reject(err)
    }).on('data', (chunk) => {
    body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      resolve(body);
    });
  })
}

export { getBody }