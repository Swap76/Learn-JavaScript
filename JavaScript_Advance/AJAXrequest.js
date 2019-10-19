const POST = "POST";

export class AJAXRequest {
  constructor () {
    // eslint-disable-next-line no-undef
    this.request = new XMLHttpRequest();
  }

  open (method, url, async) {
    this.method = method;
    this.request.open(method, url, async);
  }

  send (string) {
    const args = this.method === POST ? [string] : [];
    this.request.send.apply(this.request, args);
  }
}
// OR closure approach

// eslint-disable-next-line no-undef
const request = new XMLHttpRequest();

let usedMethod;
export const open = (method, url, async) => {
  usedMethod = method;
  request.open(method, url, async);
};
export const send = string => (usedMethod === POST ? request.send(string) : request.send());