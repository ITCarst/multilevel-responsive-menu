define(function () {

    class MenuModel {
        
        /*
         * Main Model Constructor
         */
        constructor() {
        }
        
        /*
         * Load's data with a required URI static || sent by user
         * @param {dataURI} - the URI wich the data will be loaded
         * @return {JSON object} - returns JSON oject
         */
        loadData (dataURI) {
            if (!dataURI) return "Please provide a URI, to load data from";

            return this.get(dataURI).then(JSON.parse);
        } 

        /*
         * AJAX call require's an URI and get's the result
         * using response and reject promises
         * @param {url} - URI where the ajax will do call
         * @return {new promise} - return's a prmoise which can be used later
         */
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
