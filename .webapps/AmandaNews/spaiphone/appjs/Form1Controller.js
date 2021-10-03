define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for DataGrid0f9ffa38b775946 **/
    AS_DataGrid_ce5ca4f771f24e569f4133d476ef11cd: function AS_DataGrid_ce5ca4f771f24e569f4133d476ef11cd(eventobject) {
        var self = this;
        var self = this;

        function INVOKE_SERVICE_cb46eaa2454b49ffa69c1a5c9cdaac22_Callback(status, GetNews) {
            console.log(GetNews);
            self.view.DataGrid0i0caf20f3a6648.data = [];
            var newsList = [];
            for (var i = 0; i < GetNews.news_list.length; i++) {
                var newsItem = GetNews.news_list[i].news_item;
                var item = {};
                item.col1 = newsItem.title;
                newsList.push(item);
            }
            self.view.DataGrid0i0caf20f3a6648.data = newsList;
            console.log(newsList);
        }
        //kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (GetNews_inputparam == undefined) {
            var GetNews_inputparam = {};
        }
        GetNews_inputparam["serviceID"] = "News$GetNews";
        var GetNews_httpheaders = {};
        GetNews_inputparam["httpheaders"] = GetNews_httpheaders;
        var GetNews_httpconfigs = {};
        GetNews_inputparam["httpconfig"] = GetNews_httpconfigs;
        News$GetNews = mfintegrationsecureinvokerasync(GetNews_inputparam, "News", "GetNews", INVOKE_SERVICE_cb46eaa2454b49ffa69c1a5c9cdaac22_Callback);
    },
    /** onTouchStart defined for DataGrid0f9ffa38b775946 **/
    AS_DataGrid_ede34a8d3bc14ec6ad009973bbf32909: function AS_DataGrid_ede34a8d3bc14ec6ad009973bbf32909(eventobject, x, y) {
        var self = this;
    },
    /** onMapping defined for Form1 **/
    AS_Form_af529e7b43ba44678dece53fa73cc20d: function AS_Form_af529e7b43ba44678dece53fa73cc20d(eventobject) {
        var self = this;

        function INVOKE_SERVICE_cb46eaa2454b49ffa69c1a5c9cdaac22_Callback(status, GetNews) {
            console.log(GetNews);
            self.view.DataGrid0f9ffa38b775946.data = [];
            var newsList = [];
            for (var i = 0; i < GetNews.news_list.length; i++) {
                var newsItem = GetNews.news_list[i].news_item;
                var item = {};
                item.col1 = newsItem.title;
                newsList.push(item);
            }
            self.view.DataGrid0f9ffa38b775946.data = newsList;
            console.log(newsList);
        }
        //kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (GetNews_inputparam == undefined) {
            var GetNews_inputparam = {};
        }
        GetNews_inputparam["serviceID"] = "News$GetNews";
        var GetNews_httpheaders = {};
        GetNews_inputparam["httpheaders"] = GetNews_httpheaders;
        var GetNews_httpconfigs = {};
        GetNews_inputparam["httpconfig"] = GetNews_httpconfigs;
        News$GetNews = mfintegrationsecureinvokerasync(GetNews_inputparam, "News", "GetNews", INVOKE_SERVICE_cb46eaa2454b49ffa69c1a5c9cdaac22_Callback);
        dataList = "self.view.DataGrid0i0caf20f3a6648.data";
    },
    /** preShow defined for Form1 **/
    AS_Form_dfcf702908ef466b9841efe30c280f06: function AS_Form_dfcf702908ef466b9841efe30c280f06(eventobject) {
        var self = this;
    },
    /** init defined for Form1 **/
    AS_Form_ge981f55bccf4c81bc8e0c4a3ebc4dfe: function AS_Form_ge981f55bccf4c81bc8e0c4a3ebc4dfe(eventobject) {
        var self = this;

        function INVOKE_SERVICE_b427dca5f3934fc2bb694e229d736957_Callback(status, GetNews) {}
        if (GetNews_inputparam == undefined) {
            var GetNews_inputparam = {};
        }
        GetNews_inputparam["serviceID"] = "News$GetNews";
        var GetNews_httpheaders = {};
        GetNews_inputparam["httpheaders"] = GetNews_httpheaders;
        var GetNews_httpconfigs = {};
        GetNews_inputparam["httpconfig"] = GetNews_httpconfigs;
        News$GetNews = mfintegrationsecureinvokerasync(GetNews_inputparam, "News", "GetNews", INVOKE_SERVICE_b427dca5f3934fc2bb694e229d736957_Callback);
    },
    /** onTouchStart defined for Search **/
    AS_Label_e69782c807a74300befcf736fc3a077c: function AS_Label_e69782c807a74300befcf736fc3a077c(eventobject, x, y) {
        var self = this;
    },
    /** onDone defined for TextField0c2531dc7b58b4c **/
    AS_TextField_b1a2c1040794438298999d791cee99d8: function AS_TextField_b1a2c1040794438298999d791cee99d8(eventobject, changedtext) {
        var self = this;
        var self = this;
        AS_TextField_b1a2c1040794438298999d791cee99d8.onDone = onDoneCallback;

        function onDoneCallback(txtBox) {
            txtBox = AS_TextField_b1a2c1040794438298999d791cee99d8.text;
            var newsList = [];
            console.log(txrBox);
            for (var i = 0; i < self.view.DataGrid0f9ffa38b775946.data.length; i++) {
                var newsItem = self.view.DataGrid0f9ffa38b775946.data.item[i].title;
                var item = {};
                item.col1 = newsItem.title;
                newsList.push(item);
            }
            self.view.DataGrid0f9ffa38b775946.data = newsList;
            console.log(newsList);
        }
    },
    /** onTextChange defined for TextField0c2531dc7b58b4c **/
    AS_TextField_i8931f5c15cb47949a4cb98e4cc554d0: function AS_TextField_i8931f5c15cb47949a4cb98e4cc554d0(eventobject, changedtext) {
        var self = this;
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
