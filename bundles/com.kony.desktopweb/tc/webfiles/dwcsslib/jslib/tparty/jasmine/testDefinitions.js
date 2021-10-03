featureSteps('Test:')
    .given('widget "(.*)" is loaded', async function(widget){
           return this.when('wait for "'+widget+'"')
    })
    .given('widget "(.*)" is loaded withinTimeout "(.*)"', async function(widget, timeout){
           return this.when('wait for "'+widget+'" withTimeout "'+timeout+'"');
    })
    .when('wait for "(.*)"', async function(widget){
          return await kony.automation.playback.waitFor(widget.split("."));
    })
    .when('wait for "(.*)" withTimeout "(.*)"', async function(widget, timeout){
          return await kony.automation.playback.waitFor(widget.split("."), timeout);
    })
    .when('wait "(.*)" ms', async function(time){
          await kony.automation.playback.wait(parseInt(time));
    })
    .when('user scrolls to widget "(.*)"', async function(widgetPath){
          await kony.automation.scrollToWidget(widgetPath.split("."));
    })
    .when('user touches widget "(.*)" at StartPt "(.*)" movePoints "(.*)" and endPoint "(.*)" ', async function(widgetPath, startPt, movePt, endPt){
          await kony.automation.widget.touch(widgetPath.split("."), startPt, movePt, endPt);
    })
    .when('user captures screen', async function(){
          kony.automation.capture();
    })
    .when('on device back', async function(){
          kony.automation.device.deviceBack();
    })
    .when('wait for "(.*)" withTimeout "(.*)"', async function(widget, timeout){
         return await kony.automation.playback.waitFor(widget.split("."), parseInt(timeout));
    })

    //widget definitions

    //alert for native channels alone
    .when('user clicks alert', async function(index){
          kony.automation.alert.click();
    })
    .when('user clicks alert atIndex "(.*)"', async function(index){
          kony.automation.alert.click(index);
    })
    .when('user clicks button "(.*)"', async function(widgetPath){
          kony.automation.button.click(widgetPath.split("."));
    })
    .when('user clicks box "(.*)"', async function(widgetPath){
          kony.automation.box.click(widgetPath.split("."));
    })
    .when('user selects date "(.*)" in "(.*)"', async function(date, widgetPath){
          kony.automation.calendar.selectDate(widgetPath.split("."), JSON.parse(date));
    })
    .when('user clicks checkbox "(.*)" in "(.*)"', async function(checkboxkey, widgetPath){
          kony.automation.checkboxgroup.click(widgetPath.split("."), checkboxkey);
    })
    .when('user selects combobox "(.*)" in "(.*)"', async function(comboboxkey, widgetPath){
          kony.automation.combobox.selectItem(widgetPath.split("."), comboboxkey);
    })
    .when('user selects listbox item "(.*)" in "(.*)"', async function(listboxkey, listboxpath){
          kony.automation.listbox.selectItem(listboxpath.split("."), listboxkey);
    })
    .when('user clicks radiobutton "(.*)" in "(.*)"', async function(radiobuttongroupkey, widgetPath){
          kony.automation.radiobuttongroup.click(widgetPath.split("."), radiobuttongroupkey);
    })
    .when('user clicks segment "(.*)" at "(.*)"', async function(widgetPath, index){
          var segmentpath = widgetPath + index;
          kony.automation.segmentedui.click(segmentpath.split("."));
    })
    .when('user pulls segment "(.*)"', async function(widgetPath){
          kony.automation.segmentedui.pull(widgetPath.split("."));
    })
    .when('user pushes segment (.*)"', async function(widgetPath){
          kony.automation.segmentedui.push(widgetPath.split("."));
    })
    .when('user scrolls to top of segment "(.*)"', async function(widgetPath){
          kony.automation.segmentedui.scrollToTop(widgetPath.split("."));
    })
    .when('user scrolls to bottom of segment "(.*)"', async function(widgetPath){
          kony.automation.segmentedui.scrollToBottom(widgetPath.split("."));
    })
    .when('user scrolls to row "(.*)" of segment "(.*)"', async function(index, widgetPath){
          var segmentpath = widgetPath + index;
          kony.automation.segmentedui.scrollToRow(segmentpath.split("."));
    })
    .when('user slides to "(.*)" in "(.*)"', async function(slidevalue, widgetPath){
          kony.automation.slider.slide(widgetPath.split("."), Number(slidevalue));//may be Number is not needed. It is validated in platform
    })
    .when('user toggles "(.*)"', async function(widgetPath){
          kony.automation.switch.toggle(widgetPath.split("."));
    })
    .when('user clicks tab "(.*)" in "(.*)"', async function(tabid, widgetPath){
          kony.automation.tabpane.click(widgetPath.split("."), tabid);
    })
    .when('user enters text "(.*)" in textbox "(.*)"', async function(text, widgetPath){
          kony.automation.textbox.enterText(widgetPath.split("."), text);
    })
    .when('user enters text "(.*)" in textarea "(.*)"', async function(text, widgetPath){
          kony.automation.textarea.enterText(widgetPath.split("."), text);
    })
    .when('user clicks flexcontainer "(.*)"', async function(widgetPath){
          kony.automation.flexcontainer.click(widgetPath.split("."));
    })
    .when('user executes code "(.*)"', async function(data) { //comment, rawdata, uuid){
          //var data = "// :User Injected Code Snippet [" + comment + "]\n        " + rawdata + "\n        // :End User Injected Code Snippet {" + uuid + "}";
           eval ("(async () => {" + data + "})()")

    })
    .then('property "(.*)" of "(.*)" equals "(.*)"', async function(property, widgetPath, value){
          expect(kony.automation.widget.getWidgetProperty(widgetPath.split("."), property)).toBe(value);
    })
