define(function () {

    class MenuModel {

        constructor() {
        }

        loadData (dataURI) {
            if (!dataURI) return "Please provide a URI, to load data from";

            return this.get(dataURI).then(JSON.parse);
        } 

        get (url) {
            return new Promise( function (resolve, reject) {
                var req = new XMLHttpRequest();
                //request type
                req.open("GET", url);
                req.onload = () => {
                    (req.status == 200) ? resolve(req.response) : reject(Error(req.statusText));
                }
                req.onerror = () => { reject(Error("Network Error")); };
                req.send();
            });
        }
    }

    return MenuModel;
});
