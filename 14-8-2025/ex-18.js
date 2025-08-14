var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NOTFOUND"] = 404] = "NOTFOUND";
    HttpStatusCode[HttpStatusCode["ACCESSDENIED"] = 403] = "ACCESSDENIED";
    HttpStatusCode[HttpStatusCode["INTERNALERROR"] = 500] = "INTERNALERROR";
})(HttpStatusCode || (HttpStatusCode = {}));
console.log(HttpStatusCode.OK);
console.log(HttpStatusCode.NOTFOUND);
console.log(HttpStatusCode.ACCESSDENIED);
console.log(HttpStatusCode.INTERNALERROR);
console.log(HttpStatusCode[403]);
console.log(HttpStatusCode[200]);
console.log(HttpStatusCode[404]);
console.log(HttpStatusCode[500]);
