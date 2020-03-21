/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * rm this is the main application script  dgsdgsg
 */
//fsafaf
var gCaptionWidget = 0;
var gTheme = 'metrodark';
var gAnalysisXMLDoc = 0;
var gCaptionInfoList = [];
var gRegionNodeList = 0;  // for IMSC specific support 
var gStyleNodeList = 0;
var gCaptionNodeList = 0;
var g_CaptionListSource = 0;
var g_ErrorListSource = 0;
var gErrorInfoList = [];
var g_TransListSource = 0;
var g_TransInfoList = [];
var gCurrCaptionInfo = 0;
var gCurrentCaptionNode = 0;
var gCorrectedCaptionNode = 0;
var gCopiedPNode = 0;
var gPrevCaptionInfo = 0;
var gNextCaptionInfo = 0;
//var gEditableCaptionInfo = 0; 
var gTimeEditMode = "";  //START | END 
var gCurrErrorInfo = 0;
var gCurrentErrorType = 0;
var gErrorTypeList = 0;
var gCurrentProjectPath = 0;
var gCurrentRowIndex = 0;
var gCurrentRowID = 0;
var gGridScrollPosition = 0;
var gCurrentLineID = 0;
var gCurrentErrorID = 0;
var gCurrentErrorValueInputID = 0;
var gErrorCheckXML = 0;
var gGridHeightFactor = 0.95;
var gOrig_start_time = 0;
var gOrig_end_time = 0;
var gCorrected_start_time = 0;
var gCorrected_end_time = 0;
var gMsgTimeout = 15000;
var gCaptionGridTextColor = "#96d6ec";
var gErrorGridTextColor = "#d5c263";
var gRowIndexStart = -1;
var gRowIndexEnd = -1;
var gCurrRowIndex = -1;
var bMultipleIndex = false;
var bInternalEvent = false;
var gErrorListItem = [];
var gCurrApplicationState = "NORMAL_MODE";
var gPrevApplicationState = "NORMAL_MODE";
var g_CurrProjectName = 0;
var bTTGridInitialized = false;
var g_TTListSource = 0;
var gTTInfoList = [];
var gTTXMLDoc = 0;
var gLanguageListItem = [];
var gSelectedCurrentLanguage = [];
var bUseCorrectedTime = true;
var gObjectAttrList = [];
var gNextCaptionStartTime = 0;
var gCodedParamList = [];
var gCorrectedParamList = [];
var bPlayWithNoLeadTime = false;
var bUseCorrectedTime = false;
var gMaxCPL = 0;
var gMaxCPS = 0;
var gMaxNumLines = 3;
var gCurrentCTELineIndex = 0;
var g_current_scroll_id=0;
//var gGridPlayHighlighter = "2px solid #ee5577"; 
var gGridPlayHighlighter = "3px solid #fcf8e3";

var bFilterOn = false;
var gMultilineDelimiter = " | ";
var gTooltipSrc = 0;
var error_indicator = '<span title="Error" class="glyphicon glyphicon-remove-sign error_indicator" style="text-align: center;color: #e9612d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var correction_indicator = '<span title="All errors corrected" class="glyphicon glyphicon-ok-sign error_indicator" style="text-align: center;color:#9edb4d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var undefined_indicator = '<span title="Undetected errors" class="glyphicon glyphicon-question-sign error_indicator" style="text-align: center;color: #a2a2a2;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var mixed_indicator = '<span title="Errors as well as some undetected errors" class="glyphicon glyphicon-exclamation-sign error_indicator" style="text-align: center;color: orange;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var partial_indicator = '<span title="Partially corrected" class="glyphicon glyphicon-pushpin error_indicator" style="text-align: center;color:#dba24d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';

var corrected_status_indicator = '<span title="Correction done"  class="glyphicon glyphicon-ok-sign error_indicator" style="text-align: center;color:#9edb4d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var uncorrected_status_indicator = '<span title="No correction applied"  class="glyphicon glyphicon glyphicon-warning-sign error_indicator" style="text-align: center;color:#e9612d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>';
var missingtext_error_indicator = '<span title="Missing text error"  class="glyphicon glyphicon-remove-sign error_indicator" style="text-align: center;color: #e9612d;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;" title="Missing Translation"></span>';


var corrected_indicator = '<span title="All errors corrected" class="glyphicon glyphicon-ok error_indicator" style="text-align: center;color:#e2e2e2;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>'
var partially_corrected_indicator = '<span title="Some errors corrected" class="glyphicon glyphicon-pushpin error_indicator" style="text-align: center;color:#e8b769;font-weight: bold;width: 20px;height: 20px;margin-top: 6px;margin-left: 10px;"></span>'

var g_errorStatus = 'ALL';
var g_actionStatus = 'NONE';
var g_errorType = 'NONE'; //_rm used by drop down box 
var bTDGridInitialized = false;
var g_TDListSource = 0;
var gTDInfoList = [];
var g_TD_StartTime = 0;
var g_TD_EndTime = 0;
var g_CurrTDRowIndex = 0;
var gRoIInfoList = [];
var gCurrRoIInfoList = [];
var gCurrSubSegmentPlayList = [];
var gLastSubsegmentIndex = 0;
var gSubSegStartTime = 0;
var gSubSegEndtime = 0;
var gMaxSubSegDuration = 1.5;
var gVideoDisplayDimension = 0;
var gTotalTDDuration = 0;
var gAttrListSource = 0;
var gAttrInfoList = 0;
var gRSAttrListSource = 0;
var gRSAttrInfoList = 0;

var gLocalNodeCount = 0;
var gNodeIDseed = "";
var gDelimiter_1 = "|";
var gbTextEditMode = false;
//this object will be used for echanging attribute names and values 
sAttributeNameValue.prototype.attrName = "";
sAttributeNameValue.prototype.attrValue = "";
var g_isloaded = false; //parvez used for open button with querysting
var gDemoMode = false; // parvez used for log out to magamenet app when gDemoMode is false 
function sAttributeNameValue() {
    sAttributeNameValue.attrName = "";
    sAttributeNameValue.attrValue = "";
}
var g_projectname = "";

var gMapFromNativeToHTML = {
    'data-backgroundcolor': 'background-color',
    'data-fontstyle': 'font-style',
    'data-x': 'left',
    'data-y': 'top',
    'data-width': 'width',
    'data-height': 'height',
    'data-color': 'color',
    'data-textalign': 'text-align',
    'data-opacity': 'opacity',
    'data-textdecoration': 'text-decoration',
    'data-fontweight': 'font-weight'
};

var gMapFromNativeToHTMLStyleValue = {
    'data-backgroundcolor': 'backgroundColor',
    'data-fontstyle': 'fontStyle',
    'data-x': 'left',
    'data-y': 'top',
    'data-width': 'width',
    'data-height': 'height',
    'data-color': 'color',
    'data-textalign': 'textAlign',
    'data-opacity': 'opacity',
    'data-textdecoration': 'textDecoration',
    'data-fontweight': 'fontWeight'
};

var gMapFromHTMLToNative = {
    'background-color': 'data-backgroundcolor',
    'font-style': 'data-fontstyle',
    'left': 'data-x',
    'top': 'data-y',
    'width': 'data-width',
    'height': 'data-height',
    'color': 'data-color',
    'text-align': 'data-textalign',
    'opacity': 'data-opacity',
    'text-decoration': 'data-textdecoration',
    'font-weight': 'data-fontweight'
};

var gMapValuesXMLToHTML = {
    'normal': 'normal',
    'italic': 'italic',
    'oblique': 'oblique',
    'left': 'left',
    'center': 'center',
    'right': 'right',
    'underline': 'underline',
    'overline': 'overline',
    'linethrough': 'line-through',
    'bold': 'bold'
}

var gMapValuesHTMLToXML = {
    'normal': 'normal',
    'italic': 'italic',
    'oblique': 'oblique',
    'left': 'left',
    'center': 'center',
    'right': 'right',
    'underline': 'underline',
    'overline': 'overline',
    'line-through': 'linethrough'
}
var gStyleSpanAttrList = [];
var gStylePAttrList = ["x", "y", "width", "height"];

$(document).ready(function () {
    // create jqxtabs.
    WAL_Initialize();

    // create jqxtabs.
    $("#Menu").jqxMenu({width: '600px', height: '30%', theme: 'metrodark', showTopLevelArrows: true, autoOpen: false, animationShowDuration: 1, autoSizeMainItems: false});
    $("#Menu").css('visibility', 'visible');
    WAL_createTab("infoTabs", 300, "OnTabSelection");
    WAL_createListBox('svgfileopenlistbox', '270', '60%', "ProjectListDlgHandler");
    //WAL_createButton('SVGFO_LB_deletebtn', '', '70', '24', false); 
    // WAL_createWindow("svgfileopendlg","Asset List", true, '282', '350', false,	true, false, false, true, "", 'SVGFO_LB_okbtn', 'SVGFO_LB_cancelbtn'); 
    WAL_createModalWindow('svgfileopendlg', '282', '350', 'SVGFO_LB_okbtn', 'SVGFO_LB_cancelbtn', false, true);

    gStyleSpanAttrList = [];
    var listlen = gAttrListMap.length;
    for (var j = 0; j < listlen; j++) {
        gStyleSpanAttrList.push(gAttrListMap[j][0]);
    }
    WAL_createDropdownList('attr_list_ddl', '140', '30', false, gStyleSpanAttrList, "UI_DDLHandler", '140', '130');

    WAL_createColorPickerWindow("colorpickwidget", "colorpicker", '325', '250', "okbtn", "cancelbtn");
    WAL_createButton('CPL_Preview_btn', '', 65, 24, true);
    WAL_createModalWindow('cpleditordlg', '550', '500', 'CPLE_okbtn', 'CPLE_cancelbtn', true, true, "CPLCancelHandler", "CPLEditorInit");
    InitializeAttributeGrid();

    //initialize region editor dialog here 
    InitializeRegionStyleEditorDlg();


    WAL_createModalWindow('timeeditmsgdlg', '240', '150', 'TE_Dlg_okbtn', 'TE_Dlg_cancelbtn', false, true);

    $("#messageNotification").jqxNotification({
        width: "auto", position: "top-left", opacity: 0.9, autoOpen: false, animationOpenDelay: 200, autoClose: true, autoCloseDelay: gMsgTimeout, template: "info", theme: 'metro-dark',
    });
    $("#TECNotification").jqxNotification({
        width: "100%", position: "top-left", opacity: 0.9, autoOpen: false, animationOpenDelay: 200, autoClose: true, autoCloseDelay: gMsgTimeout, template: "error", theme: 'metro-dark',
    });


    //height calculation

    var top = $('#capgrid_control').position().top;
    var height = $('#capgrid_control').height();
    var screenheight = window.innerHeight;

    var Cal_heigt_of_bottom = screenheight - (top + height);
    var finalHeight = Cal_heigt_of_bottom * gGridHeightFactor;

    $('#splitter').jqxSplitter({width: '100%', height: finalHeight, theme: gTheme, panels: [{size: '55%'}, {size: '45%'}]});
    WAL_createTab("detail_tab", 240, "OnTabSelection");
    InitializeErrorSettings();


    InitializeCaptionGrid();
    InitializeErrorGrid();
    //InitializeTranslationGrid(); 
    gCurrCaptionInfo = new sCaptionInfo();
    //gEditableCaptionInfo = new sCaptionInfo(); 
    gTimeEditMode = "";
    //get all error type 
    getErrorType();
    var width = $("#videoContainer").width();
    var minVal = 0;
    gCaptionWidget = new cCaptionWidget();
    if (!gCaptionWidget.VideoPlayerObject) {
        var currTimeUpdateNode = document.getElementById("currtimevalue");
        gCaptionWidget.Initialize("videoContainer", true, true, "OnSegmentEnd", currTimeUpdateNode, "onvideoerrorcallback");
    }
    WAL_createModelessWindow('helpDlg', '700', '450', 'helpOK', 'helpCancel', true);
    ShowBSTooltip(true);
    
    WAL_createButton('caption_report_btn', '', "65", "25", true);





});




function InitializeErrorSettings() {
    //WAL_createDecimalNumberInput(ID, Width, Height, HandlerFnForValueChange, bSpinButton, maxValue, minValue, stepValue)
    WAL_createRadioButton('orig_time_radio', "OnSelRadioBtnHandler", 90, 22, false, true);
    WAL_createRadioButton('corrected_time_radio', "OnSelRadioBtnHandler", 90, 22, false, true);
    WAL_createDecimalNumberInput('corrected_start_time_number_ip', 45, 22, "TECNumberHandler", true, 50.0, -50.0, 0.1);
    WAL_createDecimalNumberInput('corrected_end_time_number_ip', 45, 22, "TECNumberHandler", true, 50.0, -50.0, 0.1);

    /* WAL_createDecimalNumberInput('syncoffset_ip',50, 22, "TECNumberInputHandler", true, 50.0, -50.0, 0.1); 
     WAL_createDecimalNumberInput('framegap_ip',50, 22, "TECNumberInputHandler", true, 500.0, 0.0, 0.1); 
     WAL_createDecimalNumberInput('max_corrected_duration_ip',50, 22, "TECNumberInputHandler", true, 100.0, 0.0, 0.1); 
     WAL_createDecimalNumberInput('min_corrected_duration_ip',50, 22, "TECNumberInputHandler", true, 100.0, 0.0, 0.1);
     WAL_createNumberInput('corrected_cps_ip',50, 22, "TECNumberInputHandler", true, 100, 1, 1);
     */

    //WAL_createNumberInput(ID, Width, Height, HandlerFnForValueChange, bSpinButton, maxValue, minValue, stepValue)
    WAL_createModalWindow("timing_corrections_dlg", '740', '420', '', 'TEC_Dlg_cancelbtn', true, false);


    WAL_createDecimalNumberInput('syncoffset_value', 55, 22, "ErrorSettingNumberHandler", true, 4.0, 0.0, 0.1);
    WAL_createCheckBox('synccheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createDecimalNumberInput('mindur_value', 55, 22, "ErrorSettingNumberHandler", true, 4.0, 0.0, 0.1);
    WAL_createCheckBox('mindurcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createDecimalNumberInput('maxdur_value', 55, 22, "ErrorSettingNumberHandler", true, 15.0, 0.0, 0.1);
    WAL_createCheckBox('maxdurcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createNumberInput('cps_value', 55, 22, "ErrorSettingNumberHandler", true, 50, 0, 1);
    WAL_createCheckBox('cpscheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createNumberInput('wpm_value', 55, 22, "ErrorSettingNumberHandler", true, 500, 0, 1);
    WAL_createCheckBox('wpmcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createDecimalNumberInput('framegap_value', 55, 22, "ErrorSettingNumberHandler", true, 4.0, 0.0, 0.1);
    WAL_createCheckBox('framegapcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createNumberInput('cpl_value', 55, 22, "ErrorSettingNumberHandler", true, 50, 0, 1);
    WAL_createCheckBox('cplcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);

    WAL_createCheckBox('missingtextcheck_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);
    WAL_createNumberInput('missingtext_value', 55, 22, "ErrorSettingNumberHandler", true, 50, 0, 1);
    WAL_createCheckBox('textdetect_CB', 'ErrorCheckBoxHandler', 35, 22, 20, false, false);
    WAL_CreateTextInput('lang_ip_1', 80, 22, true, "");
    WAL_CreateTextInput('fname_ip_1', 80, 22, true, "");

    //  WAL_createWindow("err_settings_dlg","Error Settings", true, '400', '450', false,true, false, false, true, "", 'err_setting_okbtn', 'err_setting_cancelbtn');
    WAL_createModelessWindow("err_settings_dlg", '400', '450', 'err_setting_okbtn', 'err_setting_cancelbtn', true);
    //  WAL_createModelessWindow('helpDlg', '700', '450', 'helpOK', 'helpCancel', true);
    var errstatusList = []; //['None', 'Errors', 'Undecided', 'Mixed'];
    errstatusList.push({label: 'No Filter', value: 'all'});
    errstatusList.push({label: 'Errors', value: 'error'});
    errstatusList.push({label: 'Undecided', value: 'unknown'});
    errstatusList.push({label: 'Mixed', value: 'mixed'});
    errstatusList.push({label: 'No Errors', value: 'none'});
    WAL_createDropdownList('error_status_ddl', '100', '22', false, errstatusList, "UI_DDLHandler", '140', '110');



    var actionstatusList = []; //['None', 'Corrected', 'Partially Corrected'];
    actionstatusList.push({label: 'No Filter', value: 'none'});
    actionstatusList.push({label: 'Not Corrected', value: 'uncorrected'});
    actionstatusList.push({label: 'Corrected', value: 'corrected'});
    actionstatusList.push({label: 'Partially Corrected', value: 'partially_corrected'});
    WAL_createDropdownList('action_status_ddl', '100', '22', false, actionstatusList, "UI_DDLHandler", '140', '130');




    var errtypeList = ['None', 'item0', 'item1'];
    WAL_createDropdownList('error_type_ddl', '150', '22', false, errtypeList, "UI_DDLHandler", '130', '170');
    //WAL_createDropdownList('translated-filter', '180', '22', false, errtypeList, "UI_DDLHandler", '180', 0);



    WAL_createModalWindow("translatedtextdlg", '800', '500', 'TT_Dlg_okbtn', 'TT_Dlg_cancelbtn', true, true);
    WAL_createModalWindow("textdetectionlistdlg", '600', '300', 'TD_Dlg_okbtn', 'TD_Dlg_cancelbtn', true, true, "TDPRestoreState");
    WAL_createModalWindow("language_identificationdlg", '600', '300', 'LID_Dlg_okbtn', 'LID_Dlg_cancelbtn', true, true, "LIDPRestoreState");
}


function InitializeTranslationGrid() {

    var containerWidth = $('#translationgridcontainer').width();
    var containerHeight = $('#detail_tab').height();  //$('#translationgridcontainer').height();  
    var winH = Number(window.innerHeight);
    var bstop_pos = $('#bottom_screen').position().top;
    var finalheight = containerHeight;//winH - Number(bstop_pos); 
    /*var cellrenderer = function (row, datafield, value){           
     var btnid = "edit_trans_btn_" + value;                
     return '<button id="'+ btnid + '" type="button" class="btn btn-sm edit_grid_btn" onclick="OnEditBtnClick()" style="display:none"><span class="glyphicon glyphicon-edit" style="display:block" title="Edit"></span></button>';
     }*/
    g_TransListSource = {
        localdata: g_TransInfoList,
        datafields: [
            {name: 'id', type: 'text', map: '0'},
            {name: 'transtext', type: 'text', map: '1'}

        ],
        datatype: "array",
        id: "id"
    };
    var dataAdapter = new $.jqx.dataAdapter(g_TransListSource);
    $("#translationgrid").jqxGrid(
            {
                width: '100%',
                height: finalheight * gGridHeightFactor,
                source: dataAdapter,
                theme: gTheme,
                columnsresize: true,
                editable: false,
                filterable: false,
                showfilterrow: false,
                columnsautoresize: true,
                columns: [
                    // { text: 'ID', datafield: 'id', width: '10%'},
                    {text: 'Translation', datafield: 'transtext', width: '80%'}

                ]
            });
    $("#translationgrid").on('rowselect', function (event) {
        var args = event.args;
        var item = args.row;
        var transtext = item.transtext;
        gCurrCaptionInfo.Text = transtext;
        gCurrCaptionInfo.ID = item.id;
        gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);
        // row's bound index.
        /* gCurrentErrorID = item.id; 
         var btnID = "edit_btn_" + gCurrentErrorID; 
         $(".edit_grid_btn").hide(); 
         $("#" + btnID).show(); */
        //var rowID = "row" + 


        //gMediaWidget.SetSegment(gMediaWidget.SegInfo.StartTime,gMediaWidget.SegInfo.EndTime ); 
        //alert(gMediaWidget.SelectionIndex); 
    });



}

function OnSegmentEnd() {
    $(".PLAY_PAUSE").hide();
    $("#playBtn").show();
    $(".TEC_BTN").removeAttr("disabled");
    gCaptionWidget.Pause();
    var capInfo = new sCaptionInfo();
    capInfo.Text = "";
    gCaptionWidget.UpdateCaptionInfo(capInfo);
    gCurrApplicationState = gPrevApplicationState;

    SetUIState(gCurrApplicationState);
    if (gCurrApplicationState == "TIME_EDIT_MODE") {
        WAL_disableWidget('fwdBtn', "", false, false);
        WAL_disableWidget('bwdBtn', "", false, false);
    }
    //SetUIState('NORMAL_MODE'); 
    var currPTS = Number(gCaptionWidget.VideoPlayerObject.GetCurrentPTS());
    var diff = Number(gCurrCaptionInfo.endTime) - currPTS;
    if (diff > 0)
        gCaptionWidget.SeekTo(gCurrCaptionInfo.endTime);

}

function OnMultipleSegmentHandler() {

    if (gCurrRowIndex == gRowIndexEnd) {
        OnSegmentEnd();
        gCurrRowIndex = gRowIndexStart;
    } else {
        gCurrRowIndex++;
        //get caption infor from list 
        PlayMultipleCaptionSegment(gCurrRowIndex, true);
    }
}
// var infoArr = [id, starttime, endtime, text,duration, errstatus, xpos, ypos]; 

var g_CurrGridRowID = 0;

function PlayMultipleCaptionSegment(currIdx, bNoSeek = false) {
    if (bFilterOn === true) {
        PlayMultipleCaptionsWithFilterOn(currIdx);
        return;
    }
    var captionInfo = gCaptionInfoList[currIdx];
    var currCapInfo = new sCaptionInfo();
    currCapInfo.startTime = ConvertHMSmmToSeconds(captionInfo[1]);
    currCapInfo.endTime = ConvertHMSmmToSeconds(captionInfo[2]);
    currCapInfo.Text = captionInfo[3];
    currCapInfo.x = captionInfo[6];
    currCapInfo.y = captionInfo[7];
    currCapInfo.ID = captionInfo[0];
    if (g_CurrGridRowID)
        $("#" + g_CurrGridRowID).css({border: "none"});

    g_CurrGridRowID = "row" + g_current_scroll_id + "captiongrid";
    $("#" + g_CurrGridRowID).css({'border-bottom': gGridPlayHighlighter});

    var rows = $('#captiongrid').jqxGrid('getdisplayrows');
    // gets the first displayed row.
    var rowData = rows[0];
    // gets the ID of the first displayed row.                            
    var rowID = rowData.uid;
    // gets the bound index of the first displayed row. The bound index is the row's index in the array returned by the "getboundrows" method.
    var boundIndex = rowData.boundindex;
    var retval = $('#captiongrid').jqxGrid('showrowdetails', 1);
    console.log("row ID = " + rowID + "boundIndx=" + boundIndex);

    var currTime = gCaptionWidget.VideoPlayerObject.GetCurrentPTS();
    if (currTime < currCapInfo.startTime - 0.7) {
        //then play blank caption        
        currCapInfo.endTime = currCapInfo.startTime;
        currCapInfo.startTime = currTime;
        currCapInfo.Text = "";
        currCapInfo.ID = "";
        gCurrRowIndex--;
    }
    gCaptionWidget.VideoPlayerObject.PlaySegment(currCapInfo.startTime, currCapInfo.endTime, 'OnMultipleSegmentHandler', bNoSeek);
    gCaptionWidget.UpdateCaptionInfo(currCapInfo);
}

var currCapInfo = 0;
function PlayMultipleCaptionsWithFilterOn(currIdx) {
    var captionInfo = gCaptionInfoList[currIdx];
    currCapInfo = new sCaptionInfo();
    currCapInfo.startTime = ConvertHMSmmToSeconds(captionInfo[1]);
    currCapInfo.endTime = ConvertHMSmmToSeconds(captionInfo[2]);
    currCapInfo.Text = captionInfo[3];
    currCapInfo.x = captionInfo[6];
    currCapInfo.y = captionInfo[7];
    currCapInfo.ID = captionInfo[0];
    if (g_CurrGridRowID)
        $("#" + g_CurrGridRowID).css({border: "none"});
    g_CurrGridRowID = "row" + currIdx + "captiongrid";
    $("#" + g_CurrGridRowID).css({'border-bottom': gGridPlayHighlighter});

    bNoSeek = false;
    gCaptionWidget.VideoPlayerObject.Pause();
    var tempcapInfo = new sCaptionInfo();
    tempcapInfo.Text = "";
    gCaptionWidget.UpdateCaptionInfo(tempcapInfo);
    //now set a timer here before next playback happens 
    setTimeout(function () {
        gCaptionWidget.VideoPlayerObject.PlaySegment(currCapInfo.startTime, currCapInfo.endTime, 'OnMultipleSegmentHandler', bNoSeek);
        gCaptionWidget.UpdateCaptionInfo(currCapInfo);
    }, 750);



}

function OnMediaWidgetBtnHandler(event) {
    var btnID = event.currentTarget.id;
    switch (btnID) {
        case "playBtn":
            $(".PLAY_PAUSE").hide();
            $("#pauseBtn").show();
            gPrevApplicationState = gCurrApplicationState;
            gCurrApplicationState = 'PLAYBACK_MODE';
            SetUIState(gCurrApplicationState);
            if (bMultipleIndex == true) {
                // gCurrRowIndex = gRowIndexStart;
                PlayMultipleCaptionSegment(gCurrRowIndex);
            } else {
                // gCaptionWidget.PlayCaption("OnSegmentEnd");

                if (bPlayWithNoLeadTime == true)
                    gCaptionWidget.PlayCaption("OnSegmentEnd");
                else {
                    var currentStartTime = gCurrCaptionInfo.startTime - gCaptionWidget.LeadTime;
                    if (currentStartTime < 1.4) {
                        gCaptionWidget.PlayCaption("OnSegmentEnd");
                    } else
                        gCaptionWidget.PlayCaptionWithLead();
                }
            }
            BlockUIinAjax(true);
            break;
        case "pauseBtn":
            $(".PLAY_PAUSE").hide();
            $("#playBtn").show();
            gCaptionWidget.Pause();
            if (g_CurrGridRowID)
                $("#" + g_CurrGridRowID).css({"border": "none"});
            gCurrApplicationState = gPrevApplicationState;
            SetUIState(gCurrApplicationState);
            break;
        case "preview_Btn":

            /* if(bUseCorrectedTime == true){
             gCurrCaptionInfo.startTime = gCorrected_start_time; 
             gCurrCaptionInfo.endTime = gCorrected_end_time;                 
             }else{
             gCurrCaptionInfo.startTime = gOrig_start_time; 
             gCurrCaptionInfo.endTime = gOrig_end_time;    
             }*/
            if (bUseCorrectedTime == true) {
                gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds($("#corrected_start_time_value")[0].innerHTML);
                gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds($("#corrected_end_time_value")[0].innerHTML);
            } else {
                gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds($("#orig_start_time_value")[0].innerHTML);
                gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds($("#orig_end_time_value")[0].innerHTML);
            }
            gCaptionWidget.PlayCaptionWithLead();
            BlockUIinAjax(true);
            $(".TEC_BTN").attr("disabled", "disabled");
            //$("#preview_pause_Btn").show();
            break;
        case "preview_pause_Btn":
            gCaptionWidget.Pause();
            $(".TEC_BTN").removeAttr("disabled");
            // $(".TEC_PLAY_BTN").hide(); 
            // $("#preview_Btn").show();
            break;
        case 'save_TEC_Btn':
            //get the corrected time code value 
            gCurrentErrorType = 0;
            ApplyCorrection();
            gCorrectedParamList = AnalyzeTimeParameters(gCorrectedCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
            var startoverlapinfo = getItemfromParamList(gCorrectedParamList, "STARTOVERLAP");
            if (startoverlapinfo.error_status == "ERROR") {
                ShowTECError("There seems to be Time overlap", "Error");
                return;
            }
            var endoverlapinfo = getItemfromParamList(gCorrectedParamList, "ENDOVERLAP");
            if (endoverlapinfo.error_status == "ERROR") {
                ShowTECError("There seems to be Time overlap", "Error");
                return;
            }



            var startTime = $("#corrected_start_time_value")[0].innerHTML;
            startTime = ConvertHMSmmToSeconds(startTime);
            gCurrCaptionInfo.startTime = Number(startTime);


            var endTime = $("#corrected_end_time_value")[0].innerHTML;
            endTime = ConvertHMSmmToSeconds(endTime);
            gCurrCaptionInfo.endTime = Number(endTime);


            var origstartTime = ($("#orig_start_time_value")[0].innerHTML);
            origstartTime = ConvertHMSmmToSeconds(origstartTime);

            var origendTime = ($("#orig_end_time_value")[0].innerHTML);
            origendTime = ConvertHMSmmToSeconds(origendTime);

            updateErrorStatusfromParamList(gCorrectedParamList);

            WAL_showWindow("timing_corrections_dlg", false, "");

            break;
        case "apply_TEC_Btn":
            // first call analyzeParams 
            //get coorected time and apply them on the correctedcaptionnode 
            ApplyCorrection();
            break;
        case "fwdBtn":
            $(".PLAY_PAUSE").hide();
            $("#playBtn").show();
            //first set the ball to correct position
            TEC_AlignToIndicatorArrowPos();
            gCaptionWidget.SeekRelative(0.04);
            break;
        case "bwdBtn":
            $(".PLAY_PAUSE").hide();
            $("#playBtn").show();
            TEC_AlignToIndicatorArrowPos();
            gCaptionWidget.SeekRelative(-0.04);
            break;
        case "resetBtn":
            $(".PLAY_PAUSE").hide();
            $("#playBtn").show();
            var startTime = gCurrCaptionInfo.startTime;
            gCaptionWidget.SeekTo(Number(startTime));
            break;

        case "editTimeBtn":
            //call InitializetimeEditor
            $(".TIME_EDIT").hide();
            $("#saveTimeBtn").show();
            $("#cancelTimeBtn").show();

            setTimeEditor();
            SetUIState('TIME_EDIT_MODE');
            bPlayWithNoLeadTime = true;
            break;

        case "saveTimeBtn":
            $(".TIME_EDIT").hide();
            $("#editTimeBtn").show();

            SaveTimeInfo();
            SetUIState("NORMAL_MODE");
            bPlayWithNoLeadTime = false;
            //SaveTime 
            break;
        case 'cancelTimeBtn':
            bPlayWithNoLeadTime = false;
            resetTimeEditor();
            break;


            /* case 'toggle_multi_selection_btn':
             var JQSel = '#' + btnID; 
             var selmode = $(JQSel).attr('data-selection-mode'); 
             if(selmode == "single"){
             $(JQSel).attr('data-selection-mode', 'multiple'); 
             bMultipleIndex = true; 
             $(JQSel).removeClass("btn-primary"); 
             $(JQSel).addClass("btn-success"); 
             $('#captiongrid').jqxGrid('clearselection');
             $("#selmode_span")[0].innerHTML = "Single Row Selection"; 
             $("#captiongrid").jqxGrid({ selectionmode: 'checkbox'}); 
             }
             else{
             $(JQSel).attr('data-selection-mode', 'single');
             bMultipleIndex = false; 
             $(JQSel).addClass("btn-primary"); 
             $(JQSel).removeClass("btn-success"); 
             $('#captiongrid').jqxGrid('clearselection');
             $("#selmode_span")[0].innerHTML = "Mulitiple Row Selection"; 
             $("#captiongrid").jqxGrid({ selectionmode: 'singlerow'});
             }
             break; */
        case 'unselect_rows_btn':
            $('#captiongrid').jqxGrid('clearselection');
            gRowIndexStart = gRowIndexEnd = -1;
            break;
            /*case "edit_error_btn":           
             InvokeErrorEditor(); 
             break; */
        case 'top_screen':
            //time edit radiombuttons
            resetTimeEditor();
            //  alert("Top screen click"); 
            break;

        default:
            break;
    }
    event.stopPropagation();
}

function updateNodecallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        UpdateCaptionGridData();
        Msg_Notify("info", "Data saved successfully", 8);
    } else {
        Msg_Notify("error", "Data Could not be updated", 8);
        //alert("Data Could not be updated "); 
    }

}


function OnTabSelection(selIndex, nodeID) {

    switch (nodeID) {
        case 'detail_tab':
            break;
        case 'infoTabs':
            break;

    }
}

function updateInformationTab() {

}

function InitializeCaptionGrid() {
    var containerWidth = $('#gridcontainer').width();
    var containerHeight = $('#gridcontainer').height();
    var winH = Number(window.innerHeight);
    var bstop_pos = $('#bottom_screen').position().top;
    var finalheight = winH - Number(bstop_pos);

    var spliterheight = $('#splitter').height();
    var finalheight = spliterheight * 0.95;

    var cellrenderer = function (row, datafield, value) {
        switch (value.toUpperCase()) {
            case "ERROR":
                return error_indicator;
                break;
            case "UNKNOWN":
                return undefined_indicator;
                break;
            case "MIXED":
                return mixed_indicator;
                break;
                /*  case "CORRECTED":
                 return correction_indicator; 
                 break; 
                 case "PARTIALLY_CORRECTED":
                 return partial_indicator; 
                 break;*/
            default:
                return "";
                break;
        }
    }
    var actioncellrenderer = function (row, datafield, value) {
        switch (value.toUpperCase()) {
            case "CORRECTED":
                return corrected_indicator;
                break;
            case "PARTIALLY_CORRECTED":
                return partially_corrected_indicator;
                break;

                /*  case "CORRECTED":
                 return correction_indicator; 
                 break; 
                 case "PARTIALLY_CORRECTED":
                 return partial_indicator; 
                 break;*/
            default:
                return "";
                break;
        }
    }

    var editcellrenderer = function (row, datafield, value) {
        var btnid = "cap_edit_btn_" + value;
        refstr = 'help/help.html#caption_text_editing';
        titlestr = 'Text edit';
        return '<button id="' + btnid + '" type="button" class="btn btn-sm edit_grid_btn" disabled onclick="OnCapEditBtnClick()" onmousemove="OnErrorEditBtnMouseMove(event)" style="display:block" data-original-title="' + refstr + '" title="' + titlestr + ',Press H for help"><span class="glyphicon glyphicon-edit" style="display:block"></span></button>';


        // return '<button id="'+ btnid + '" type="button" class="btn btn-sm edit_grid_btn" disabled onclick="OnCapEditBtnClick()" style="display:block"><span class="glyphicon glyphicon-edit" style="display:block" title="Edit Caption Text"></span></button>';
    }

    var textcellrenderer = function (row, datafield, value) {
        var capstr = value;
        return value; //'Caption data received '; 
    }

    g_CaptionListSource = {
        localdata: gCaptionInfoList,
        datafields: [
            {name: 'id', type: 'text', map: '0'},
            {name: 'ErrorStatus', type: 'text', map: '5'},
            {name: 'ActionStatus', type: 'text', map: '8'},
            {name: 'Start', type: 'text', map: '1'},
            {name: 'End', type: 'text', map: '2'},
            {name: 'Text', type: 'text', map: '3'},
            {name: 'Edit', type: 'string', map: '0'}
        ],
        datatype: "array",
        id: "id"
    };
    var dataAdapter = new $.jqx.dataAdapter(g_CaptionListSource);
    $("#captiongrid").jqxGrid(
            {
                //width: containerWidth*1.0,
                width: '100%',
                height: finalheight, //finalheight*gGridHeightFactor,
                //autoheight: 220,
                source: dataAdapter,
                theme: gTheme,
                columnsresize: true,
                editable: false,
                // autorowheight: true,
                // autoheight:true, 
                filterable: false,
                scrollmode: 'logical',
                showtoolbar: false,
                selectionmode: 'singlerow',
                showfilterrow: false,
                // columnsautoresize: true, 
                handlekeyboardnavigation: function (event) {
                    var keyChar = event.originalEvent.key
                    var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
                    /* if (key == 16) {
                     if (bFilterOn == false) {
                     bMultipleIndex = true;
                     $("#captiongrid").jqxGrid({selectionmode: 'multiplerows'});
                     ToggleEnableItemsForMultiSelect(true);
                     } else {
                     return true;
                     }
                     }*/
                    if (key === 16) {
                        bMultipleIndex = true;
                        $("#captiongrid").jqxGrid({selectionmode: 'multiplerows'});
                        ToggleEnableItemsForMultiSelect(true);
                    }
                    if ((bMultipleIndex == false) && (key == 13)) {
                        ProcessGridSelection(gCurrentRowIndex);
                        return true;
                    }
                },
                columns: [
                    {text: 'ID', datafield: 'id', editable: false, width: '8%'},
                    {text: 'Error', datafield: 'ErrorStatus', editable: false, width: '6%', cellsrenderer: cellrenderer},
                    {text: 'Action', datafield: 'ActionStatus', editable: false, width: '6%', cellsrenderer: actioncellrenderer},
                    {text: 'Start Time', datafield: 'Start', editable: false, width: '10%'},
                    {text: 'End Time', datafield: 'End', editable: false, width: '10%'},
                    {text: 'Subtitle', datafield: 'Text', editable: false, width: '52%', cellsrenderer: textcellrenderer},
                    {text: 'Edit', datafield: 'Edit', editable: false, width: '8%', cellsrenderer: editcellrenderer}
                ]
            });



    $("#captiongrid").on('rowclick', function (event) {

        var args = event.args.originalEvent;
        var orig_nal_event = args.originalEvent.toElement.offsetParent.id
        g_current_scroll_id = orig_nal_event;
        console.log(orig_nal_event);
        var item = args.row;
        // row's bound inde


        // $('#captiongrid').jqxGrid('selectrow',gCurrentRowIndex);
        if (bMultipleIndex != true) {
            gCurrentRowIndex = args.rowindex;
            gCurrentRowID = args.row.bounddata.id;
            ProcessGridSelection(gCurrentRowIndex);
        } else {
            setTimeout(function () {
                //get all the selected row indexes
                if (bMultipleIndex == false) {
                    gCurrentRowIndex = args.rowindex;
                    gCurrentRowID = args.row.bounddata.id;
                    ProcessGridSelection(gCurrentRowIndex);
                    return;
                }
                var rowindexes = $('#captiongrid').jqxGrid('getselectedrowindexes');
                //sort them if possible                    
                rowindexes.sort(function (a, b) {
                    return a - b
                });
                gRowIndexStart = rowindexes[0];
                if (gRowIndexEnd == -1) {
                    gRowIndexEnd = rowindexes[rowindexes.length - 1];
                    ProcessGridMultiSelection(gRowIndexStart, gRowIndexEnd);
                } else {
                    bMultipleIndex = false;
                    gRowIndexEnd = -1;
                    gRowIndexStart = -1;
                    $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
                    gCurrentRowIndex = args.rowindex;
                    gCurrentRowID = args.row.bounddata.id;
                    ProcessGridSelection(gCurrentRowIndex);
                }

                //get the min and max and set them to rowstart and rowend 
            }, 300);
        }


    });

    $("#captiongrid").on('rowselect', function (event) {
        var args = event.args;
        if (args.rowindex == -1) {
            return;
        }
        var item = args.row.bounddata;



        if (bMultipleIndex == false) {
            gCurrentRowIndex = args.rowindex;
            var rowID = args.row.id;
            var btnID = "cap_edit_btn_" + rowID;
            $(".edit_grid_btn").attr("disabled", "disabled");


            setTimeout(function () {
                $("#" + btnID).removeAttr("disabled");
                ToggleEnableItemsForMultiSelect(false);
            }, 300);
        } else {
            var rowindexes = $('#captiongrid').jqxGrid('getselectedrowindexes');
        }

    });

    $('#captiongrid').on('rowunselect', function (event) {
        var args = event.args;
        if (bMultipleIndex == true) {
            bMultipleIndex = false;
            // $("#captiongrid").jqxGrid("clearselection"); 
            $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
            ToggleEnableItemsForMultiSelect(false);
            // $("#editTimeBtn").removeAttr("disabled");
            gRowIndexStart = -1;
            gRowIndexEnd = -1;
        }


    });


    $("#captiongrid").on("celldoubleclick", function (event) {
        // event arguments.
        var args = event.args;
        // row's bound index.
        var rowBoundIndex = args.rowindex;
        // row's visible index.
        var rowVisibleIndex = args.visibleindex;
        // right click.
        var rightClick = args.rightclick;
        // original event.
        var ev = args.originalEvent;
        // column index.
        var columnIndex = args.columnindex;
        // column data field.
        var dataField = args.datafield;
        // cell value
        var value = args.value;
        // $(".TIME_INFO").hide(); 
        $(".MARKER_TIME").removeClass("blink");
        if (dataField == "Start") {
            // $("#time_container").show();                
            var JQSel = "#start_time_info";
            gTimeEditMode = "START";
            //gEditableCaptionInfo.startTime = Number(value); 
            //gEditableCaptionInfo.endTime = gCurrCaptionInfo.endTime; 
        } else if (dataField == "End") {
            // $("#time_container").show();
            var JQSel = "#end_time_info";
            gTimeEditMode = "END";
        } else
        {
            // $("#time_container").hide(); 
        }
        if (gTimeEditMode.length > 1) {
            if (gCurrCaptionInfo) {
                if (gCurrCaptionInfo.startTime)
                    gCaptionWidget.SeekTo(Number(gCurrCaptionInfo.startTime));
            }
            $(".PLAY_PAUSE").hide();
            $("#playBtn").show();

            //$(JQSel).addClass("blink");
            //$(JQSel).addClass("editable");
            $("#duration_info").addClass("editable");
        }

    });
}



function InitializeAttributeGrid() {
    var containerWidth = $('#attributegridcontainer').width();

    cellsrenderer: editorcellrenderer = function (row, datafield, value) {

        var item = $('#attributegrid').jqxGrid('getrowdata', row);
        var attrName = item.attribute_name;
        var retval = "";

        switch (attrName) {
            case 'backgroundcolor':
            case 'color':

                var btnHTML = '<button id="' + attrName + '_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn colorinput" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;"><span class="glyphicon glyphicon-edit" style="top: -3px;color: white;"></span></button>';
                var inputHTML = '<button id="' + attrName + '_col_ip_btn" type="button" class="btn btn-sm edit_grid_btn" onclick="OnRSButtonHandler(event)" style="margin-top:0px;display:none; background-color:grey; border:2px solid #aeaeae"></button>';
                var applyBtnHTML = '<button id="' + attrName + '_apply_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn colorinput_apply" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-1px; left:-5px;display:none"><span class="glyphicon glyphicon-ok" style="top: -3px;color: white;"></span></button>\n\
                            <button id="' + attrName + '_cancel_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn colorinput_cancel" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-1px; left:-10px;display:none"><span class="glyphicon glyphicon-off" style="top: -3px;color: white;"></span></button>';

                var retval = retval = btnHTML + inputHTML + applyBtnHTML;
                break;

            case 'textalign':
            case 'fontstyle':
            case 'fontweight':
            case 'textdecoration':
                if (attrName == 'textalign') {
                    var paramstr = 'left#center#right';
                }
                if (attrName == 'fontstyle') {
                    var paramstr = 'normal#italic#oblique';
                }
                if (attrName == 'fontweight') {
                    var paramstr = 'normal#bold';
                }
                if (attrName == 'textdecoration') {
                    var paramstr = 'none#overline#linethrough#underline';
                }

                var btnHTML = '<button id="' + attrName + '_btn" data-attrname="' + attrName + '"' + ' data-params="' + paramstr + '" type="button" class="btn btn-sm edit_grid_btn listinput" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;"><span class="glyphicon glyphicon-edit" style="top: -3px;color: white;"></span></button>';
                var inputHTML = '<div id="' + attrName + '_ddl" style="margin-top:0px;display:none"></div>';
                var applyBtnHTML = '<button id="' + attrName + '_apply_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn listinput_apply" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-7px;display:none"><span class="glyphicon glyphicon-ok" style="top: -3px;color: white;"></span></button>\n\
                    <button id="' + attrName + '_cancel_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn listinput_cancel" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-10px;display:none"><span class="glyphicon glyphicon-off" style="top: -3px;color: white;"></span></button>';

                var retval = retval = btnHTML + inputHTML + applyBtnHTML;
                break;

            case 'y':
            case 'x':
            case 'width':
            case 'height':
            case 'opacity':
                var min = 0;
                var max = 100;
                var step = 1;
                var dec_digit = 2;
                var symbol = '%';

                if (attrName === 'opacity') {
                    min = 0;
                    max = 1;
                    step = 0.1;
                    dec_digit = 1;
                    symbol = '';
                }
                //this is the common code for all number inputs 
                var paramstr = min + '-' + max + '-' + step + '-' + dec_digit + '-' + symbol;
                var btnHTML = '<button id="' + attrName + '_btn" data-attrname="' + attrName + '"' + ' data-params="' + paramstr + '"' + ' type="button" class="btn btn-sm edit_grid_btn numberinput" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;"><span class="glyphicon glyphicon-edit" style="top: -3px;color: white;"></span></button>';
                var inputHTML = '<div id="' + attrName + '_number_ip" style="margin-top:0px;display:none"></div>';
                var applyBtnHTML = '<button id="' + attrName + '_apply_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn numberinput_apply" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-10px;display:none"><span class="glyphicon glyphicon-ok" style="top: -3px;color: white;"></span></button>\n\
                        <button id="' + attrName + '_cancel_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn numberinput_cancel" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-10px;display:none"><span class="glyphicon glyphicon-off" style="top: -3px;color: white;"></span></button>';
                retval = btnHTML + inputHTML + applyBtnHTML;
                break;
            case "style":
            case "region":
                var btnHTML = '<button id="' + attrName + '_btn" data-attrname="' + attrName + '"' + ' data-params="' + paramstr + '" type="button" class="btn btn-sm edit_grid_btn listinput" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;"><span class="glyphicon glyphicon-edit" style="top: -3px;color: white;"></span></button>';
                var inputHTML = '<div id="' + attrName + '_ddl" style="margin-top:0px;display:none"></div>';
                var applyBtnHTML = '<button id="' + attrName + '_apply_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn listinput_apply" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-7px;display:none"><span class="glyphicon glyphicon-ok" style="top: -3px;color: white;"></span></button>\n\
                    <button id="' + attrName + '_cancel_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn listinput_cancel" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-10px;display:none"><span class="glyphicon glyphicon-off" style="top: -3px;color: white;"></span></button>\n\
                    <button id="' + attrName + '_view_btn" data-attrname="' + attrName + '"' + ' type="button" class="btn btn-sm edit_grid_btn listinput_view" onclick="OnCPLGridButtonHandler(event)" style="background-color: transparent;width: 20px;height: 18px;margin-top: 4px;margin: 3px;position:relative; top:-10px; left:-10px;display:none"><span class="glyphicon glyphicon-pencil" style="top: -3px;color: white;"></span></button>';
                var retval = retval = btnHTML + inputHTML + applyBtnHTML;

            default:
                break;
        }
        return retval;
    }
    cellsrenderer: infocellrenderer = function (row, datafield, value) {

        var item = $('#attributegrid').jqxGrid('getrowdata', row);
        var attrName = item.attribute_name;
        var retval = "";

        if (item.Edit == "N") {
            var htmlStr = '<span style="color:#888">' + value + '</span>';
            return htmlStr;
        }
        //return retval; 
    }

    gAttrListSource = {
        localdata: gAttrInfoList,
        datafields: [
            {name: 'attribute_name', type: 'text', map: '0'},
            {name: 'attribute_value', type: 'text', map: '1'},
            {name: 'Edit', type: 'string', map: '2'}
        ],
        datatype: "array"
    };
    var dataAdapter = new $.jqx.dataAdapter(gAttrListSource);
    $("#attributegrid").jqxGrid(
            {
                width: '100%',
                height: 200,
                source: dataAdapter,
                theme: gTheme,
                columnsresize: true,
                editable: false,
                filterable: false,
                showfilterrow: false,
                columnsautoresize: true,
                columns: [
                    // { text: 'ID', datafield: 'id'},
                    {text: 'Attribute', datafield: 'attribute_name', width: '30%', cellsrenderer: infocellrenderer},
                    {text: 'Value', datafield: 'attribute_value', width: '30%', cellsrenderer: infocellrenderer},
                    {text: 'Edit', datafield: 'Edit', width: '40%', cellsrenderer: editorcellrenderer}
                ]
            });
    $("#attributegrid").on('rowselect', function (event) {
        var args = event.args;
        var item = args.row;
        gCurrentRowItem = args.row;
        if (gCurrentRowItem.Edit == "N") {
            setTimeout(function () {
                $('#attributegrid').jqxGrid('unselectrow', args.rowindex);
            }, 300);
        }

    });

}


function updateAttributeGrid(attrInfoList) {
    $("#attributegrid").jqxGrid("clearselection");
    gAttrListSource.localdata = attrInfoList;
    $('#attributegrid').jqxGrid('updatebounddata');
}

function ProcessGridSelection(selIndex) {

    $(".SCREENTEXT_AREA").hide();
    var item = $('#captiongrid').jqxGrid('getrowdata', selIndex);
    gCurrCaptionInfo.ID = item.id;
    gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds(item.Start);
    gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds(item.End);
    gCurrCaptionInfo.Text = item.Text.trim();
    gCurrentCaptionNode = gAnalysisXMLDoc.getElementById(gCurrCaptionInfo.ID);
    if (!gPrevCaptionInfo)
        gPrevCaptionInfo = new sCaptionInfo();
    if (!gNextCaptionInfo)
        gNextCaptionInfo = new sCaptionInfo();

    var breakstr = "&lt;br&gt;";
    gCurrCaptionInfo.Text = gCurrCaptionInfo.Text.replace(breakstr, gMultilineDelimiter);
    gCurrCaptionInfo.Text = gCurrCaptionInfo.Text.replace(breakstr, gMultilineDelimiter);

    //get the corodinates now 
    gCurrCaptionInfo.x = gCurrentCaptionNode.getAttribute("x");
    gCurrCaptionInfo.y = gCurrentCaptionNode.getAttribute("y");
    //update error action status 
    gCurrCaptionInfo.error_status = gCurrentCaptionNode.getAttribute("error_status");
    gCurrCaptionInfo.action_status = gCurrentCaptionNode.getAttribute("action_status");

    gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);
    UpdateErrorInfoGrid(item.id);


    //UpdateTTInfoGrid(item.id);  

    if (gCurrentCaptionNode.previousElementSibling) {
        var prevNode = gCurrentCaptionNode.previousElementSibling;
        gPrevCaptionInfo.startTime = prevNode.getAttribute("start-time");
        gPrevCaptionInfo.endTime = prevNode.getAttribute("end-time");
    } else {
        gPrevCaptionInfo.startTime = 0;
        gPrevCaptionInfo.endTime = 2;
    }


    if (gCurrentCaptionNode.nextElementSibling) {
        var nextNode = gCurrentCaptionNode.nextElementSibling;
        gNextCaptionInfo.startTime = nextNode.getAttribute("start-time");
        gNextCaptionInfo.endTime = nextNode.getAttribute("end-time");
    } else {
        gNextCaptionInfo.startTime = gCaptionWidget.getDuration() - 2;
        gNextCaptionInfo.endTime = gCaptionWidget.getDuration();
    }


    gCodedParamList = AnalyzeTimeParameters(gCurrentCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
    updatePanelInfo(gCodedParamList);

    // var dur = gCaptionInfoList[selIndex][4]; 
    //now update the player interface as well 
    // $("#start_time_info")[0].innerHTML = gCurrCaptionInfo.startTime; 

    /*
     var duration = Number(gCurrCaptionInfo.endTime) - Number(gCurrCaptionInfo.startTime);
     duration = duration.toFixed(1);
     $("#duration_info")[0].innerHTML = duration;
     if (!gPrevCaptionInfo)
     gPrevCaptionInfo = new sCaptionInfo();
     if (!gNextCaptionInfo)
     gNextCaptionInfo = new sCaptionInfo();
     //need to find out the frame gap 
     if (selIndex > 0) {
     var prevItem = $('#captiongrid').jqxGrid('getrowdata', selIndex - 1);
     var prevEndtime = ConvertHMSmmToSeconds(prevItem.End);
     var currStarttime = Number(gCurrCaptionInfo.startTime);
     var gap = currStarttime - prevEndtime;
     $("#framegap_info")[0].innerHTML = gap.toFixed(1);
     
     //now store the previous and next caption info 
     
     
     gPrevCaptionInfo.startTime = ConvertHMSmmToSeconds(prevItem.Start); 
     gPrevCaptionInfo.endTime = ConvertHMSmmToSeconds(prevItem.End);        
     }else{
     $("#framegap_info")[0].innerHTML = "N.A.";
     }
     var itemcount = gCaptionInfoList.length;
     var nextSelIdx = selIndex + 1;
     
     if (nextSelIdx <= itemcount) {
     var nextItem = $('#captiongrid').jqxGrid('getrowdata', nextSelIdx);
     gNextCaptionInfo.startTime = ConvertHMSmmToSeconds(nextItem.Start);
     gNextCaptionInfo.endTime = ConvertHMSmmToSeconds(nextItem.End);
     }
     
     */
    //$(".TIME_INFO").hide();
    gTimeEditMode = "";
    // $("#markerBtn").attr("disabled", "disabled");     
    $(".PLAY_PAUSE").hide();
    $("#playBtn").show();
    gCaptionWidget.SeekTo(gCurrCaptionInfo.startTime);

    var duraNode = $('#durationvalue')[0];
    var text = duraNode.innerHTML;
    if (text.length < 2) {
        var durStr = ConvertTimeIntoHMSmm(gCaptionWidget.getDuration());
        duraNode.innerHTML = durStr;
    }

    $('#start_time_info')[0].innerHTML = item.Start;
    $('#end_time_info')[0].innerHTML = item.End;

}


function updatePanelInfo(codedParamList) {

    var listlen = codedParamList.length;

    for (var i = 0; i < listlen; i++) {
        var item = codedParamList[i];
        switch (item.paramName) {
            case "MAXDURATIONCHECK":
                var duration = item.paramValue;
                $('#duration_info').html(duration);
                break;
            case "FRAMEGAPCHECK":
                var value = item.paramValue;
                $('#framegap_info').html(value);
                break;
            case "CPSCHECK":
                var value = item.paramValue;
                $('#cps_info').html(value);
                break;
        }
    }


}

function ProcessGridMultiSelection(startIndex, endIndex) {
    gCurrRowIndex = startIndex;
    var startitem = $('#captiongrid').jqxGrid('getrowdata', startIndex);
    gCurrCaptionInfo.ID = startitem.id;
    gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds(startitem.Start);
    gCurrCaptionInfo.Text = startitem.Text.trim();
    var breakstr = "&lt;br&gt;";
    gCurrCaptionInfo.Text = gCurrCaptionInfo.Text.replace(breakstr, "<br>");
    gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);

    var enditem = $('#captiongrid').jqxGrid('getrowdata', endIndex);
    gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds(enditem.End);



    //UpdateErrorInfoGrid(item.id); 

    // var dur = gCaptionInfoList[selIndex][4]; 
    //now update the player interface as well 
    // $("#start_time_info")[0].innerHTML = gCurrCaptionInfo.startTime; 
    var duration = Number(gCurrCaptionInfo.endTime) - Number(gCurrCaptionInfo.startTime);
    duration = duration.toFixed(1);
    $("#duration_info")[0].innerHTML = duration;
    //need to find out the frame gap 

    $("#framegap_info")[0].innerHTML = "N.A";

    //$(".TIME_INFO").hide();
    gTimeEditMode = "";
    // $("#markerBtn").attr("disabled", "disabled");     
    $(".PLAY_PAUSE").hide();
    $("#playBtn").show();
    gCaptionWidget.SeekTo(gCurrCaptionInfo.startTime);

    var duraNode = $('#durationvalue')[0];
    var text = duraNode.innerHTML;
    if (text.length < 2) {
        var durStr = ConvertTimeIntoHMSmm(gCaptionWidget.getDuration());
        duraNode.innerHTML = durStr;
    }
    $('#start_time_info')[0].innerHTML = startitem.Start;
    $('#end_time_info')[0].innerHTML = enditem.End;
}


function OnLogOutBtn(event) {
    //window.open("login.php", '_self');
    if (gDemoMode) {
        window.open("login.php", '_self');
        return;
    }
    //todo:
    //need to made this dynamic instead of hardcode
    var management_app_url = 'capmate_backend_v0.18';
    var querystr = '/' + management_app_url + '/login.php';
    window.location.href = querystr;
}

function logoutcallback(respStr) {
    window.open("login.php", '_self');
}

function OnToolbarBtnClick(event) {
    var btnID = event.currentTarget.id;
    var retval = $("#" + btnID).hasClass("TOOLBAR");
    if (retval == true)
        btnID = $("#" + btnID)[0].firstElementChild.id;
    else
        return;

    ClearMultiSelection();
    switch (btnID) {
        case "open_icon":
            //  var url = "http://localhost/capella_ui/workspace/projectSRT/analysis_data.xml"; 
            //  OpenProject(url);
            $('#SVGFO_LB_okbtn').attr('disabled', true);
            var reqArr = [{'request': 'getprojectlist'}];
            var json_str = JSON.stringify(reqArr);
            sendJSONdata('capella_handler.php', json_str, "projectlistcallback");
            break;
        case "close_icon":
            DeInitialize();
            break;

        case 'error_settings_icon':
            getErrorChecks();
            setTimeout(function () {
                showErrorChecksWindow();
            }, 100);

            break;
        case 're_analyse_icon':
            var ipfname = '';
            var reqArr = [{'request': 'reanalysis'}];
            // testJSON(); 

            var json_str = JSON.stringify(reqArr);

            //alert(json_str); 
            sendJSONdata('capella_handler.php', json_str, "reanalysiscallbackFn");
            break;
        case 'help_icon':
            window.open("help.html", "", 'width=600,height=400, top=100, left=200');
            break;
        case 'restore_icon':
            var reqArr = [{'request': 'restoreprojectinfo'}];
            var json_str = JSON.stringify(reqArr);
            //alert(json_str); 
            sendJSONdata('capella_handler.php', json_str, "restorecallbackFn");
            break;
        case 'export_icon':

            initializeExportWidgets();
            openExportWindow();


//            var reqArr = [{'request': 'exportcaption'}];
//            var json_str = JSON.stringify(reqArr);
//            sendJSONdata('capella_handler.php', json_str, "exportcallbackFn");
            break;
        case 'translate_icon':
            if (bTTGridInitialized == false) {
                InitializeTTCaptionGrid();
            }
            if (getTTData() == 0) {
                Msg_Notify("info", "NO TRANSLATION FOUND", 10);
            } else {
                WAL_showWindow("translatedtextdlg", true, "open_icon");
                WAL_setWindowAtPos('translatedtextdlg', 700, 10);
            }

            break;
        case 'auto_correct_icon':
            var reqArr = [{'request': 'autocorrect'}];
            var json_str = JSON.stringify(reqArr);
            sendJSONdata('capella_handler.php', json_str, "aurocorrectcallback");
            break;
        case 'back_icon':
            //back to management tool
            const query = getQueryStringValue('username');
            console.log(query);

            var management_app_url = 'capmate_backend_v0.18';
            var querystr = '/' + management_app_url + '/main.php?username=' + query + '&status=1';
            window.location.href = querystr;



            //            var newURL = location.href.split("&")[0];
            //            newURL +="&pageid=1";
            //            window.history.pushState('object', document.title, newURL);
            console.log(window.history);
            console.log("back button pressed");

            break;
        case 'text_detect_icon':
            if (bTDGridInitialized == false) {
                InitializeTextDetectCaptionGrid();
            }
            if (getTDData() == 0) {
                Msg_Notify("info", "TEXT DETECTION DATA NOT FOUND", 10);
            } else {
                WAL_showWindow("textdetectionlistdlg", true, "open_icon");
                WAL_setWindowAtPos('textdetectionlistdlg', 700, 10);
            }
            break;
        case 'region_edtior_icon':
            ShowRegStyleNewEditor(false);
            WAL_showWindow("regstyleeditordlg", true, "region_edtior_icon");

            setTimeout(function () {
                WAL_setradioButtonCheck("region_select_radio", true);
            }, 200);
            break;
        case 'language_detect_icon':
            detect_langauge();

            break;
        case 'language_identification_icon':
            if (bLIDGridInitialized == false) {
                InitializeLIDCaptionGrid();
            }
            if (getLIDdata() == 0) {
                Msg_Notify("info", "DATA NOT FOUND", 10);
            } else {
                WAL_showWindow("language_identificationdlg", true, "open_icon");
                WAL_setWindowAtPos('language_identificationdlg', 700, 10);
            }
            break;

        default:
            break;
    }
}


function detect_langauge() {
    var reqArr = [{'request': 'detect_language'}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "detectlangauge_handler");

}

function detectlangauge_handler(respStr) {
    try {
        var jsondata = JSON.parse(respStr);
        if (jsondata.response) {
            var respval = jsondata.response;
            var lang = respval.ResponseData;
            Msg_Notify("info", "The langauge is " + lang, 30);
        } else {
            Msg_Notify("error", "Something went wrong ", 30);
        }

    } catch (e) {
        Msg_Notify("error", "Something went wrong ", 30);

    }
}


/*
 * 
 listItem.push({ label: summary, value: errType});
 */

function aurocorrectcallback(respStr) {



    try {
        var jsondata = JSON.parse(respStr);
        if (jsondata.response) {
            var respval = jsondata.response;
            //alert(respval)
            //LBOKHandler();
            openProject(g_projectname);
            Msg_Notify("info", "Auto Sync Correction Completed", 15);

        } else {
            Msg_Notify("error", "Something went wrong ", 30);
        }

    } catch (e) {
        Msg_Notify("error", "Something went wrong ", 30);

    }


}

//
//function exportcallbackFn(respStr)
//{
//    var jsondata = JSON.parse(respStr);
//    var respval = jsondata.response;
//    if (respval == 'ERROR') {
//        alert("Somthing went Wrong");
//        return;
//    }
//
//    //var resMsg = respval.ResponseData;
//    
//
//
//    //download file logic
//
//    var file_path = respval;
//    var a = document.createElement('A');
//    a.href = file_path;
//    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//    return;
//
//}


function projectlistcallback(respStr) {
    //alert(respStr);
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    var listItem = [];
    if (respval != "ERROR") {

        var listArr = respval.split("#");
        var arrLen = listArr.length;
        for (var i = 0; i < arrLen - 1; i++) {
            var itemArr = listArr[i].split('-');
            listItem.push({label: itemArr[0], value: itemArr[1]});
        }
        WAL_showWindow("svgfileopendlg", true, 'open_icon');
        $("#svgfileopenlistbox").jqxListBox('clear');
        WAL_ListBoxUpdateData('svgfileopenlistbox', listItem);
    } else {
        alert("Error while getting project information");
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function reanalysiscallbackFn(respStr) {

    try {
        var jsondata = JSON.parse(respStr);
        if (jsondata.response) {
            var respval = jsondata.response;
            if (respval != "error") {
                openProject(g_projectname);
                Msg_Notify("info", "Analysis Completed", 5);
            } else {
                Msg_Notify("error", "Something went wrong ", 30);
                return;

            }
            //alert(respval)
            //LBOKHandler();


        } else {
            alert('error')
        }


    } catch (e) {
        Msg_Notify("error", "Something went wrong ", 30);

    }


}


function LBOKHandler() {
    var myitem = WAL_ListBoxGetSelectedItem('svgfileopenlistbox');
    if (!myitem)
        return;
    //var projectnam = getUrlParameter('projectname');
    var newURL = location.href.split("&")[0];
    window.history.pushState('object', document.title, newURL);
    openProject(myitem.label);
    g_projectname = myitem.label;
}

function openProject(projName) {
    g_CurrProjectName = projName;
    document.getElementById('SVGFO_LB_cancelbtn').style.display = 'inline';

    var reqArr = [{'request': 'getprojectinfo', 'projectname': g_CurrProjectName}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "projectInfoCallback");
}
function projectInfoCallback(respStr) {
    console.log(respval)

    var jsondata = JSON.parse(respStr);

    var respval = jsondata.response;

    if (respval != "ERROR") {

        //Empty the global translation list 
        g_TTListSource.localdata = [];
        //update the translation grid with empty data
        $('#tt_captiongrid').jqxGrid('updatebounddata');
        callbackOpenProject(respval);
    } else {
        alert("Error opening Project :");
    }
}

function OpenProject(url) {
    //opens up the project URL 
    //LoadXMLDomFromFile(url, "callbackOpenProject"); 


}

function callbackOpenProject(respStr) {
    // alert(respStr); 
    // $(".UI_ELEMENTS").show();

    parser = new DOMParser();
    gAnalysisXMLDoc = parser.parseFromString(respStr, "text/xml");
    updateCaptionInfoList();
    g_CaptionListSource.localdata = gCaptionInfoList;
    bFilterOn = false;
    ClearMultiSelection();


    $('#captiongrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        $("#captiongrid .jqx-grid-cell").css({color: gCaptionGridTextColor});

        //$("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
        $('#captiongrid').jqxGrid('selectrow', 0);



    }, 100);
    $("#proj_name_span")[0].innerHTML = g_CurrProjectName;
    // $('#captiongrid').jqxGrid('autoresizecolumns');

    //now update information fields here 
    //var url = "http://localhost/STREAMS/X-Men.2000/X-Men.2000.mp4";
    // var url = "http://localhost/capella_ui/workspace/projectSRT/proxyvideo.mp4"; 

    //gCaptionWidget.SetSource("http://localhost/capella_ui/workspace/demouser1/projectSRT/proxyvideo.mp4","onloadcallback");
    UpdateInformation();
    UpdateErrorSummary();
    getErrorChecks();
    WAL_SetItemInDropDownList('error_type_ddl', 0, false);
    WAL_SetItemInDropDownList('error_status_ddl', 0, false);
    WAL_SetItemInDropDownList('action_status_ddl', 0, false);
    //BlockUIinAjax(false); 
    $(".UI_ELEMENTS").css({"visibility": "visible"});
    SetUIState("NORMAL_MODE");

    setTimeout(function () {
        var proxyNode = gAnalysisXMLDoc.getElementsByTagName("PROXY")[0];
        var url = proxyNode.getAttribute("path");

        gCaptionWidget.SetSource(url, "onloadcallback");
        BlockUIinAjax(true);
    }, 700);
}



function updateCaptionInfoList() {
    gCaptionInfoList = [];
    gCaptionNodeList = [];
    gCaptionNodeList = gAnalysisXMLDoc.getElementsByTagName("CAPTION");
    if (gCaptionNodeList.length < 1)
        return;

    for (var i = 0; i < gCaptionNodeList.length; i++) {
        var node = gCaptionNodeList[i];
        var id = node.id;
        var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time'));
        var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time'));
        var duration = node.getAttribute('duration');
        var xpos = node.getAttribute("x");
        var ypos = node.getAttribute("y");
        var textdataNode = node.firstElementChild;
        var text = getTextDatafromCaptionNode(node);

        var errstatus = node.getAttribute('error_status');
        var actionstatus = node.getAttribute("action_status")

        if ((actionstatus != null) && (actionstatus.toUpperCase() == "NONE"))
            actionstatus = "";

        var errNode = textdataNode.nextElementSibling;
        //_rm updatng the coordinates as well 
        var infoArr = [id, starttime, endtime, text, duration, errstatus, xpos, ypos, actionstatus];
        gCaptionInfoList.push(infoArr);
    }
    gRegionNodeList = [];
    var layoutnode = gAnalysisXMLDoc.getElementsByTagName("LAYOUT")[0];
    var nodelist = layoutnode.childNodes;
    var childnode = 0;
    for (var i = 0; i < nodelist.length; i++) {
        if (nodelist[i].nodeName.toUpperCase() == "REGION")
            gRegionNodeList.push(nodelist[i]);
    }

    gStyleNodeList = [];
    var layoutnode = gAnalysisXMLDoc.getElementsByTagName("STYLING")[0];
    var nodelist = layoutnode.childNodes;
    var childnode = 0;
    for (var i = 0; i < nodelist.length; i++) {
        if (nodelist[i].nodeName.toUpperCase() == "STYLE")
            gStyleNodeList.push(nodelist[i]);
    }

}

function InitializeErrorGrid() {
    /* var containerWidth = $('#errorgridcontainer').width();        
     var containerHeight = $('#detail_tab').height();  
     var winH = Number(window.innerHeight);
     var bstop_pos = $('#bottom_screen').position().top; 
     var finalheight =containerHeight ;// winH - Number(bstop_pos); 
     */
    var containerWidth = $('#gridcontainer').width();
    var containerHeight = $('#gridcontainer').height();
    var winH = Number(window.innerHeight);
    var bstop_pos = $('#bottom_screen').position().top;
    var finalheight = winH - Number(bstop_pos);
    var spliterheight = $('#splitter').height();
    var finalheight = spliterheight * 0.95;



    var cellrenderer = function (row, datafield, value) {
        var btnid = "edit_btn_" + value;
        var errNode = gAnalysisXMLDoc.getElementById(value);
        var errType = errNode.nodeName.toUpperCase();
        var titlestr = "";
        var refstr = "";
        //data-toggle="tooltip" data-placement="bottom" data-html='true' data-original-title="<p>Open Projecte<span data-href=help/help.html#openproject><br><i>Press <b>H</b> key for Help</span></p>"
        switch (errType) {

            case "SYNCCHECK":
            case "FRAMEGAPCHECK":
            case "MINDURATIONCHECK":
            case "MAXDURATIONCHECK":
            case "CPSCHECK":
                refstr = 'help/help.html#timingcorrection_section';
                titlestr = "Timing error";
                break;
            case "CPLCHECK":
                refstr = 'help/help.html#caption_text_editing';
                titlestr = 'CPL error';
                break;
            default:
                refstr = 'help/help.html';
                titlestr = 'Error';
                break;
        }
        return '<button id="' + btnid + '" type="button" class="btn btn-sm edit_error_grid_btn" disabled onclick="OnEditBtnClick()" onmousemove="OnErrorEditBtnMouseMove(event)" style="display:block" data-original-title="' + refstr + '" title="' + titlestr + ',Press H for help"><span class="glyphicon glyphicon-edit" style="display:block"></span></button>';
    }
    var statuscellrenderer = function (row, datafield, value) {

        switch (value.toUpperCase()) {
            case "UNCORRECTED":
                return uncorrected_status_indicator;
                break;
            case "CORRECTED":
                return corrected_status_indicator;
                break;
            default:
                return "";
                break;
        }
        //return '<button id="'+ btnid + '" type="button" class="btn btn-sm edit_error_grid_btn" onclick="OnEditBtnClick()" style="display:none"><span class="glyphicon glyphicon-edit" style="display:block" title="Edit"></span></button>';
    }
    g_ErrorListSource = {
        localdata: gErrorInfoList,
        datafields: [
            {name: 'id', type: 'text', map: '0'},
            {name: 'action_status', type: 'text', map: '1'},
            {name: 'type', type: 'text', map: '2'},
            {name: 'message', type: 'text', map: '3'},
            {name: 'Edit', type: 'string', map: '0'}
        ],
        datatype: "array",
        id: "id"
    };
    var dataAdapter = new $.jqx.dataAdapter(g_ErrorListSource);
    $("#errorgrid").jqxGrid(
            {
                width: '100%',
                height: finalheight * gGridHeightFactor,
                source: dataAdapter,
                theme: gTheme,
                columnsresize: true,
                editable: false,
                filterable: false,
                showfilterrow: false,
                columnsautoresize: true,
                columns: [
                    // { text: 'ID', datafield: 'id'},
                    {text: 'Action Status', datafield: 'action_status', width: '10%', cellsrenderer: statuscellrenderer},
                    {text: 'Error Type', datafield: 'type', width: '10%'},
                    {text: 'Error Message', datafield: 'message', width: '65%'},
                    {text: 'Edit', datafield: 'Edit', width: '15%', cellsrenderer: cellrenderer}
                ]
            });
    $("#errorgrid").on('rowselect', function (event) {
        var args = event.args;
        var item = args.row;
        // row's bound index.
        gCurrentErrorID = item.id;
        var btnID = "edit_btn_" + gCurrentErrorID;
        $(".edit_error_grid_btn").attr("disabled", "disabled");
        setTimeout(function () {
            $("#" + btnID).removeAttr("disabled");
        }, 300);
        //var rowID = "row" + 

        //gMediaWidget.SetSegment(gMediaWidget.SegInfo.StartTime,gMediaWidget.SegInfo.EndTime ); 
        //alert(gMediaWidget.SelectionIndex); 
    });
}


function UpdateErrorInfoGrid(captionID) {

    //get caption node 
    if (bMultipleIndex == true)
        return;
    var captionNode = gAnalysisXMLDoc.getElementById(captionID);
    if (captionNode == null)
        return

    //get all error node list 
    var nodelist = captionNode.childNodes;
    if (nodelist.length < 1) {
        return;
    }
    gErrorInfoList = [];
    for (var j = 0; j < nodelist.length; j++) {
        //extract out type and messages and id from each node 
        var errNode = nodelist[j];
        if ((errNode.nodeName.toUpperCase() != "#TEXT") && (errNode.nodeName.toUpperCase() != "TEXTDATA")) {
            var status = errNode.getAttribute("status");
            if (status == "ERROR") {
                //create a list and then update the errogrid
                var id = errNode.id;
                var type = errNode.getAttribute("error_type");
                var msg = errNode.innerHTML;
                var action_status = errNode.getAttribute("action_status");
                var info = [id, action_status, type, msg];
                gErrorInfoList.push(info);
            }
        }
    }//for loop 

    $("#errorgrid").jqxGrid("clearselection");
    g_ErrorListSource.localdata = gErrorInfoList;
    $('#errorgrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        $("#errorgrid .jqx-grid-cell").css({color: gErrorGridTextColor});
    }, 100);

}


function UpdateInformation() {
    //updating analysis information first 
    var reportNode = gAnalysisXMLDoc.getElementsByTagName("REPORT")[0];
    $('#analysis_time_ip')[0].innerHTML = reportNode.getAttribute("time");
    $('#status_ip')[0].innerHTML = reportNode.getAttribute("status");

    //media information here 
    var mediaNode = gAnalysisXMLDoc.getElementsByTagName("MEDIAINFO")[0];
    $('#media_filename_ip')[0].innerHTML = mediaNode.getAttribute("filename");
    $('#duration_ip')[0].innerHTML = mediaNode.getAttribute("duration");
    $('#start_time_ip')[0].innerHTML = mediaNode.getAttribute("start-time");
    $('#end_time_ip')[0].innerHTML = mediaNode.getAttribute("end-time");

    var captionNode = gAnalysisXMLDoc.getElementsByTagName("CAPTIONINFO")[0];
    var ipcapNode = captionNode.firstElementChild; //gAnalysisXMLDoc.getElementsByTagName("INPUTCAPTION")[0];
    if (ipcapNode.nodeName == "INPUT") {
        $('#ipcapfname_ip')[0].innerHTML = ipcapNode.getAttribute("filename");
        $('#ipcap_lang_ip')[0].innerHTML = ipcapNode.getAttribute("language");
    }
    var refcapNode = ipcapNode.nextElementSibling;
    if ((refcapNode) && (refcapNode.nodeName == 'REFERENCE')) {
        $('#refcapfname_ip')[0].innerHTML = refcapNode.getAttribute("filename");
        $('#refcap_lang_ip')[0].innerHTML = refcapNode.getAttribute("language");
    }
}

/*
 * 
 *    <td class='FIELD_NAME'>Input Caption File:<span id="ipcapfname_ip" class='FIELD_VALUE'></span></td>                                           
 <td class='FIELD_NAME'>Language:<span id="ipcap_lang_ip" class='FIELD_VALUE'></span></td>                                                                              
 </tr>
 <tr>
 <td class='FIELD_NAME'>Reference Caption File:<span id="refcapfname_ip" class='FIELD_VALUE'></span></td>                                           
 <td class='FIELD_NAME'>Language:<span id="refcap_lang_ip" class='FIELD_VALUE'></span></td> 
 */


function UpdateErrorSummary() {
    //read the type of errors that are going to be
    var sum = Number(0);
    gErrorSummaryList = [];
    gErrorListItem = [];
    if (gErrorTypeList.length > 0) {
        // for each error type get list of error nodes 
        gErrorSummaryList[0] = ["None", "All Errors", sum];
        gErrorListItem.push({label: 'None', value: 'None'});
        // gErrorListItem.push({label: 'Any Error', value: 'any_error'});
        for (var j = 0; j < gErrorTypeList.length; j++) {
            // append these information onto the error summary
            var errType = gErrorTypeList[j][0];
            var summary = gErrorTypeList[j][1];
            var nodelist = gAnalysisXMLDoc.getElementsByTagName(errType);
            if (nodelist.length > 0) {
                temp = Number(nodelist.length);
                sum += temp;
                var info = [errType, summary, nodelist.length];
                gErrorSummaryList.push(info);
                gErrorListItem.push({label: summary, value: errType});

            }//if(nodelist.length > 0)
        }//for 
        gErrorSummaryList[0][2] = sum;
    } //if 

    /*
     //now update the UI with this 
     var allNode = $("#None")[0];    
     var parentNode = allNode.parentNode;
     var containerNode = parentNode.parentNode; 
     //clean up the existing nodes first 
     var childnodes = containerNode.childNodes; 
     var startNode = childnodes[0]; 
     var currNode = startNode.nextElementSibling;
     if(currNode){
     var nextNode = currNode.nextElementSibling; 
     while(1){  
     nextNode = currNode.nextElementSibling; 
     if((currNode.nodeName.toUpperCase() == 'DIV') && (currNode.firstElementChild.getAttribute("id") != "None")){
     containerNode.removeChild(currNode); 
     }
     currNode = nextNode; 
     if(currNode == null)
     break; 
     
     }
     }
     */
    CleanUpErrorsummaryNodes();


    //now update the UI with this 
    var allNode = $("#None")[0];
    var parentNode = allNode.parentNode;
    var containerNode = parentNode.parentNode;
    var spannode1 = allNode.firstElementChild;
    spannode1.innerHTML = "Total Errors";
    var spannode2 = spannode1.nextElementSibling;
    spannode2.innerHTML = gErrorSummaryList[0][2];
    for (var k = 1; k < gErrorSummaryList.length; k++) {
        var clonedNode = parentNode.cloneNode(true);
        var aNode = clonedNode.firstElementChild;
        aNode.setAttribute("id", gErrorSummaryList[k][0]);
        spannode1 = aNode.firstElementChild;
        spannode2 = spannode1.nextElementSibling;
        spannode1.innerHTML = gErrorSummaryList[k][1];
        spannode2.innerHTML = gErrorSummaryList[k][2];
        containerNode.appendChild(clonedNode);
    }

    //now create the error filter list 
    WAL_clearAllFromDropdownList('error_type_ddl');
    WAL_UpdateDropDownList('error_type_ddl', gErrorListItem);
}

function CleanUpErrorsummaryNodes() {
    var allNode = $("#None")[0];
    var parentNode = allNode.parentNode;
    var containerNode = parentNode.parentNode;
    //clean up the existing nodes first 
    var childnodes = containerNode.childNodes;
    var startNode = childnodes[0];
    var currNode = startNode.nextElementSibling;
    if (currNode) {
        var nextNode = currNode.nextElementSibling;
        while (1) {
            nextNode = currNode.nextElementSibling;
            if ((currNode.nodeName.toUpperCase() == 'DIV') && (currNode.firstElementChild.getAttribute("id") != "None")) {
                containerNode.removeChild(currNode);
            }
            currNode = nextNode;
            if (currNode == null)
                break;
        }
    }
}

function callbackErrorList(respStr) {
    gErrorTypeList = [];
    parser = new DOMParser();
    var errMsgDoc = parser.parseFromString(respStr, "text/xml");
    if (errMsgDoc != null) {
        var nodelist = errMsgDoc.getElementsByTagName("MSG");
        for (var i = 0; i < nodelist.length; i++) {
            var msgNode = nodelist[i];
            var errType = msgNode.id;
            var errSummary = msgNode.firstChild.innerHTML;
            var info = [errType, errSummary];
            gErrorTypeList.push(info);
        }
    }
    // alert(gErrorTypeList); 
    if (getUrlParameter('projectname')) {
        var projectnam = getUrlParameter('projectname');
        g_projectname = projectnam;
        openProject(projectnam);
        return;
    } else {
        WAL_TriggerEvent("click", "open_icon");
    }
}

function SML_menu_open_svgfrom_remote()
{

}

function UpdateCaptionGridData() {
    var data = $('#captiongrid').jqxGrid('getrowdata', gCurrentRowIndex);
    data.Start = ConvertTimeIntoHMSmm(gCurrCaptionInfo.startTime);
    data.End = ConvertTimeIntoHMSmm(gCurrCaptionInfo.endTime);
    data.Text = gCurrCaptionInfo.Text;
    data.ErrorStatus = gCurrCaptionInfo.error_status;
    data.ActionStatus = gCurrCaptionInfo.action_status;
    gGridScrollPosition = $('#captiongrid').jqxGrid('scrollposition');
    $('#captiongrid').jqxGrid('updaterow', gCurrentRowIndex, data);
    $('#captiongrid').jqxGrid('refreshdata');
    // $('#captiongrid').jqxGrid('clearselection');





    setTimeout(function () {
        // $('#captiongrid').jqxGrid('selectrow', gCurrentRowIndex);
        $('#captiongrid').jqxGrid('scrolloffset', gGridScrollPosition.top, gGridScrollPosition.left);

    }, 200);
}
/*
 var data = $('#seggrid').jqxGrid('getrowdata', gMediaWidget.SelectionIndex);
 data.Start = gMediaWidget.startTime; 
 data.End = gMediaWidget.endTime;
 data.Text = 
 //check the radio buttons 
 var bFlag = WAL_getradioButtonCheckState('speechRadioBtn'); 
 if(bFlag == true)
 data.Type = 'SPEECH'; 
 else {
 data.Type = 'NOSPEECH';
 $('#transcript_ip').val("");
 }
 data.Data =  $('#transcript_ip').val();    
 $('#seggrid').jqxGrid('updaterow', gMediaWidget.SelectionIndex, data);
 
 //update previousgrid element 
 $prevSelIdx = gMediaWidget.SelectionIndex - 1; 
 var data = $('#seggrid').jqxGrid('getrowdata', $prevSelIdx);
 data.End = gMediaWidget.startTime; 
 $('#seggrid').jqxGrid('updaterow', $prevSelIdx, data);
 
 //update nextgrid element 
 $nextSelIdx = gMediaWidget.SelectionIndex +1; 
 var data = $('#seggrid').jqxGrid('getrowdata', $nextSelIdx);
 data.Start = gMediaWidget.endTime; 
 $('#seggrid').jqxGrid('updaterow', $nextSelIdx, data);
 */

function CPLTextHandler(val, node) {

    // var textstr = WAL_getInputValue(node.id); 
    alert(val);
}
//function OnCPLKeyHandle(value, node){
function OnCPLKeyHandle(event) {
    var nodeID = event.target.id;

    updateCTEForLine(gCurrentCTELineIndex, true);
    /*
     var tempstr =""; 
     var linestr ; 
     for(var k = 1; k < 4; k++){
     linestr = $("#line_" + k + "_ip").val();
     if(linestr.length > 1){
     tempstr += linestr;
     if(k > 1)
     tempstr += "<br>" ; 
     }
     }  
     //get rid of last >br> 
     tempstr =  tempstr.substring(0, tempstr.length-1); 
     var duration = Number(gCurrCaptionInfo.endTime) - Number(gCurrCaptionInfo.startTime);
     duration = duration.toFixed(1);
     var nchar = tempstr.length;
     with (Math) {
     var cps = round((nchar / duration));
     }
     $("#current_cps")[0].innerHTML = cps;    
     validateCPLText(chcount, cps); 
     capInfo = new sCaptionInfo(); 
     capInfo.Text = tempstr; 
     gCaptionWidget.UpdateCaptionInfo(capInfo); 
     */
}

function validateCPLText(cpl, cps) {
    var bNoError = true;
    if (cpl > gMaxCPL) {
        $("#current_cpl").addClass("FLASH_ERROR");
        bNoError = false;
    } else
        $("#current_cpl").removeClass("FLASH_ERROR");

    if (cps > gMaxCPS) {
        $("#current_cps").addClass("FLASH_ERROR");
        bNoError = false;
    } else
        $("#current_cps").removeClass("FLASH_ERROR");
    return bNoError;
}

function OnCPLClickHandler(event) {
    var nodeID = event.currentTarget.id;
    if (gCurrentLineID != nodeID) {
        gCurrentLineID = nodeID;
        // var index = $("#"+gCurrentLineID).attr("data-index"); 
        var tempArr = gCurrentLineID.split("_");
        $("#line_no_ip")[0].innerHTML = tempArr[1];
        var text = $("#" + nodeID).jqxInput('val')
        var chcount = text.length;
        $("#current_cpl")[0].innerHTML = chcount;
    }
}

function InvokeErrorEditor() {
    //get the errNode from the DOM 
    //get the errNode from the DOM 
    if (!gErrorCheckXML) {
        return;
    }
    setTimeout(function () {
        var rowindex = $('#errorgrid').jqxGrid('getselectedrowindex');
        if (rowindex == -1)
            return;
        var data = $('#errorgrid').jqxGrid('getrowdata', rowindex);
        gCurrentErrorID = data.id
        var errNode = gAnalysisXMLDoc.getElementById(gCurrentErrorID);
        errName = errNode.nodeName.toUpperCase();
        // var currval = Number(errNode.getAttribute("currentvalue")); 
        var threshold = Number(errNode.getAttribute("threshold"));
        var pos1 = $("#caption_info_panel").position();
        var pos2 = $("#top_screen").position();
        //var width = $("#captionwidget").width(); 
        switch (errName) {
            case 'SYNCCHECK':
            case 'MINDURATIONCHECK':
            case 'MAXDURATIONCHECK':
            case 'FRAMEGAPCHECK':
            case "CPSCHECK":

                //get the threhold values from error checks 
                if (!gErrorCheckXML)
                    return;
                $(".TEC_GROUP").hide();
                gCurrentErrorType = errName;
                gOrig_start_time = Number(gCurrCaptionInfo.startTime);
                gOrig_end_time = Number(gCurrCaptionInfo.endTime);
                gCurrentCaptionNode = gAnalysisXMLDoc.getElementById(gCurrCaptionInfo.ID);
                gCodedParamList = AnalyzeTimeParameters(gCurrentCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
                $("#orig_start_time_value").html(ConvertTimeIntoHMSmm(gCurrentCaptionNode.getAttribute("start-time")));
                $("#orig_end_time_value").html(ConvertTimeIntoHMSmm(gCurrentCaptionNode.getAttribute("end-time")));
                //apply auto correct
                //get corrected param list 

                gCorrectedCaptionNode = gCurrentCaptionNode.cloneNode(true);
                AutoCorrect(gCodedParamList, gCorrectedCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);

                gCorrected_start_time = gCorrectedCaptionNode.getAttribute("start-time");
                gCorrected_end_time = gCorrectedCaptionNode.getAttribute("end-time");
                var startTimeDiff = (gCorrected_start_time - gOrig_start_time).toFixed(1);
                var endTimeDiff = (gCorrected_end_time - gOrig_end_time).toFixed(1);

                WAL_setNumberInputValue("corrected_start_time_number_ip", startTimeDiff);
                WAL_setNumberInputValue("corrected_end_time_number_ip", endTimeDiff);

                gCorrectedParamList = AnalyzeTimeParameters(gCorrectedCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
                $("#corrected_start_time_value").html(ConvertTimeIntoHMSmm(gCorrectedCaptionNode.getAttribute("start-time")));
                $("#corrected_end_time_value").html(ConvertTimeIntoHMSmm(gCorrectedCaptionNode.getAttribute("end-time")));

                updateTECUI();

                $("#subtitle_id").html(gCurrCaptionInfo.ID);
                var left = pos1.left;
                var top = pos2.top;
                WAL_setradioButtonCheck("orig_time_radio", true);
                WAL_showWindowAtPos("timing_corrections_dlg", true, left, top);
                break;
            case "CPLCHECK":
            case "TEXTOVERLAYCHECK":
                gCurrentErrorType = errName;
                InvokeCaptionEditor();


                break;
            default:
                gCurrentErrorType = 0;
                break;
        }
        // WAL_showWindowAtPos("timing_corrections_dlg", true, left, top);
    }, 200);
}
/*
 function getCleanHTML(containerNode){
 var pNode = containerNode.firstElementChild;     
 if(pNode.nodeName.toUpperCase() !=  "P")
 return ; 
 
 //now look for any other sibling nodes 
 var childNodes = containerNode.childNodes; 
 var newtext = ""; 
 if(childNodes.length > 1){
 for(var k = 1; k < childNodes.length;  k++){
 var node = childNodes[k]; 
 if(node.nodeName.toUpperCase() == "P"){
 newtext = newtext + '<br>' + node.innerHTML;             
 }
 }
 //now clean up the nodes
 var siblingNode = pNode.nextElementSibling; 
 while(siblingNode){
 containerNode.removeChild(siblingNode); 
 siblingNode = pNode.nextElementSibling; 
 }        
 //now add the new text to pNode
 pNode.innerHTML += newtext; 
 }   
 
 return pNode; 
 }
 
 */

function getCleanHTML(containerNode) {
    parentNode = 0;
    var pNode = containerNode.firstElementChild;
    if (containerNode.nodeName.toUpperCase() != "P") {
        if (containerNode.firstElementChild.nodeName.toUpperCase() == "P") {
            pNode = containerNode.firstElementChild;
        } else {
            return;
        }
    } else
        pNode = containerNode;

    parentNode = pNode.parentNode;
    //now look for any other sibling nodes 
    var childNodes = parentNode.childNodes;
    var newtext = "";
    if (childNodes.length > 1) {
        for (var k = 1; k < childNodes.length; k++) {
            var node = childNodes[k];
            if (node.nodeName.toUpperCase() == "P") {
                newtext = newtext + '<br>' + node.innerHTML;
            }
        }
        //now clean up the nodes
        var siblingNode = pNode.nextElementSibling;
        while (siblingNode) {
            containerNode.removeChild(siblingNode);
            siblingNode = pNode.nextElementSibling;
        }
        //now add the new text to pNode
        pNode.innerHTML += newtext;
    }

    //now merge the identical spans 
    var lastspanNode = 0;
    var childlist = pNode.childNodes;
    var parentNode = pNode;
    var childNode = parentNode.firstElementChild;
    while (childNode) {
        if (childNode.nodeName.toUpperCase() === 'SPAN') {
            if (lastspanNode == 0) {
                lastspanNode = childNode;
                childNode = childNode.nextElementSibling;
            } else {
                //compare the styles 
                var laststyle = lastspanNode.getAttribute("style");
                var currstyle = childNode.getAttribute("style");
                if (laststyle == currstyle) {
                    lastspanNode.innerHTML += '<br>' + childNode.innerHTML;
                    childNode.innerHTML = "";
                    var tempNode = childNode;
                    childNode = childNode.nextElementSibling;
                    parentNode.removeChild(tempNode);
                } else {
                    lastspanNode = childNode;
                    childNode = childNode.nextElementSibling;
                }
            }
        } else
            childNode = childNode.nextElementSibling;

    }
    //now clean up all extra br nodes 
    var childNode = parentNode.firstElementChild;
    while (childNode) {
        if (childNode.nodeName.toUpperCase() === 'BR') {
            //ppek into next node
            var nextNode = childNode.nextElementSibling;
            if (nextNode == null) {
                break;
            } else if (nextNode.nodeName.toUpperCase() == "BR") {
                parentNode.removeChild(nextNode);
            } else {
                childNode = childNode.nextElementSibling;
            }
        } else {
            childNode = childNode.nextElementSibling;
        }

    }

    //get all nodes which have data remove attribute to be true 

    return pNode;
}




//$data = '[{"request":"updatecaptiontext","object_id": "subtitle3", "data":"Hello world to this house"}]';
function CPLSaveHandler() {
    var containerNode = $("#text_editor")[0];
    var pNode = getCleanHTML(containerNode);
    removeNodeIndicators(pNode, true);
    //also remove the style information

    editedcapText = pNode.outerHTML;
    //
    //editedcapText = editedcapText.replace('<br>', '<br/>' );


    /* TBD later 
     var textdataNode = gCurrentCaptionNode.firstElementChild;
     var xpos = WAL_getMaskedInputValue('x_position_ip');
     xpos += "%";
     
     var ypos = WAL_getMaskedInputValue('y_position_ip');
     ypos += "%";
     var capErrStatus = "corrected";
     gCurrentCaptionNode.setAttribute("totalchar", nchar);
     gCurrentCaptionNode.setAttribute("x", xpos);
     gCurrentCaptionNode.setAttribute("y", ypos);
     //gCurrentCaptionNode.setAttribute("error_status", capErrStatus);
     //remove all line nodes first 
     var lineNode = textdataNode.firstElementChild;
     while (textdataNode.hasChildNodes()) {
     textdataNode.removeChild(textdataNode.firstElementChild);
     }
     
     for (var k = 0; k < lineArr.length; k++) {
     //now get linenode here 
     var lineNode = gAnalysisXMLDoc.createElement("LINE");
     lineNode.setAttribute("line_no", k);
     lineNode.innerHTML = lineArr[k];
     textdataNode.appendChild(lineNode);
     }
     var captionID = gCurrCaptionInfo.ID;
     gCurrCaptionInfo.Text = captext;
     gCurrCaptionInfo.error_status = gCurrentCaptionNode.getAttribute("error_status");
     $('#captiongrid').jqxGrid('clearselection');
     updateCaptionInfoList();
     // gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo); 
     UpdateCaptionGridData();
     $("#safetitlearea").removeClass("SHOW_SAFE_TITLE");
     $("#captionarea").removeClass("SHOW_CAPTION_REGION");
     
     */
    var pNodeLocal = gCurrentCaptionNode.firstElementChild.firstElementChild;
    gCurrentCaptionNode.firstElementChild.removeChild(pNodeLocal);
    pNode = gAnalysisXMLDoc.importNode(pNode, true);
    gCurrentCaptionNode.firstElementChild.appendChild(pNode);
    gCurrCaptionInfo.Text = getNodeTextdata(gCurrentCaptionNode);

    var captionID = gCurrCaptionInfo.ID;
    gCurrCaptionInfo.error_status = gCurrentCaptionNode.getAttribute("error_status");
    $('#captiongrid').jqxGrid('clearselection');
    updateCaptionInfoList();
    // gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo); 
    UpdateCaptionGridData();
    $("#safetitlearea").removeClass("SHOW_SAFE_TITLE");
    $("#captionarea").removeClass("SHOW_CAPTION_REGION");
    var reqArr = [{'request': 'updatecaptiontext', 'object_id': captionID, 'data': editedcapText}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "updatecaptextCallback");
    gbTextEditMode = false;
    //update the grid 
}


function CPLCancelHandler() {
    $("#safetitlearea").removeClass("SHOW_SAFE_TITLE");
    $("#captionarea").removeClass("SHOW_CAPTION_REGION");

    gbTextEditMode = false;
    ProcessGridSelection(gCurrentRowIndex);


}
function TsaveHandler() {

    var captexts = "";
    for (var k = 1; k < 3; k++) {
        if ((k > 1) && (k < 3))
            captexts += "<br>";

        captexts += $("#line_" + k + "_secondary").val();

    }
    var captionID = gCurrCaptionInfo.ID;
    var xmlpath = gSelectedCurrentLanguage[0].value;
    var reqArr = [{'request': 'UpdateTTCaptionText', 'object_id': captionID, 'data': captexts, 'xmlname': xmlpath}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "updateTTcaptextCallback");

}


function updateTTcaptextCallback(resStr) {
    console.log(resStr);
}


function updatecaptextCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        // UpdateCaptionTextData();

        //var item = [gCurrCaptionInfo.ID, 'x=>' + gCurrentCaptionNode.getAttribute("x") + '#' + 'y=>' + gCurrentCaptionNode.getAttribute("y") + '#' + "#" + "totalchar=>" + gCurrentCaptionNode.getAttribute("totalchar")];
        var item = [gCurrCaptionInfo.ID, "totalchar=>" + gCurrentCaptionNode.getAttribute("totalchar")];
        gObjectAttrList = [];
        gObjectAttrList.push(item);
        updateRemoteNodeAttributes();
        $('#captiongrid').jqxGrid('selectrow', gCurrentRowIndex);
        ProcessGridSelection(gCurrentRowIndex);
        Msg_Notify("info", "Data saved successfully", 5);

        setTimeout(function () {
            gCorrectedParamList = AnalyzeTimeParameters(gCurrentCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
            updateErrorStatusfromParamList(gCorrectedParamList);
        }, 400);


    } else {
        Msg_Notify("error:", "Data Could not be updated", 5);
        // alert("Data Could not be updated "); 
    }
}


function OnTranslateEdithandler() {
    if (!gErrorCheckXML) {
        return;
    }
    var rowindex = $('#tt_captiongrid').jqxGrid('getselectedrowindex');
    if (rowindex == -1)
        return;
    var data = $('#tt_captiongrid').jqxGrid('getrowdata', rowindex);
    var primary_text = gCurrCaptionInfo.primary_text;
    var secondary_text = gCurrCaptionInfo.secondary_text;

    var lineArrPrimary = primary_text.split("<br>");
    var lineArrSecondary = secondary_text.split("<br>");
    $("#line_1_primary").val(lineArrPrimary[0]);
    $("#line_2_primary").val(lineArrPrimary[1]);
    $("#line_1_secondary").val(lineArrSecondary[0]);
    WAL_showWindowAtPos("translateeditordlg", true, 250, 250);
}

function UpdateCaptionTextData() {
    var currentID = gCurrCaptionInfo.ID;
    var captionNode = gAnalysisXMLDoc.getElementById(currentID);
    var textdataNode = captionNode.firstElementChild;
    var textNode = textdataNode.firstChild;
    var newtextNode = gAnalysisXMLDoc.createTextNode(gCurrCaptionInfo.Text);
    textdataNode.replaceChild(newtextNode, textNode);
    //captionNode.firstElementChild.innerHTML = gCurrCaptionInfo.Text; 

    UpdateCaptionGridData();
}

function getErrorType() {

    var reqArr = [{'request': 'getmessagexml'}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "errormessageCallback");
}

function errormessageCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        callbackErrorList(respval);
    } else
        alert("Error message could not be loaded ");
}


function getErrorChecks() {
    var reqArr = [{'request': 'geterrorcheckxml'}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "errorchecklistCallback");
}

function errorchecklistCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        parser = new DOMParser();
        gErrorCheckXML = parser.parseFromString(respval, "text/xml");
        var res = isAllChecksFalse();
        getTTData();
    } else {
        alert("Error checks could not be accessed");
    }
}
function showErrorChecksWindow() {
    if (gErrorCheckXML) {
        var checkNodeList = gErrorCheckXML.getElementsByTagName("CHECK");
        if (checkNodeList.length < 1)
            return;

        //syncheck 
        var errNode = gErrorCheckXML.getElementById('SYNCCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('synccheck_CB', true, 'true');
            WAL_setNumberInputValue('syncoffset_value', maxValue);

        } else {
            WAL_setCheckBoxValue('synccheck_CB', false, 'true');
            WAL_setNumberInputValue('syncoffset_value', 0);
        }


        //mindurcheck_CB 
        var errNode = gErrorCheckXML.getElementById('MINDURATIONCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('mindurcheck_CB', true, 'true');
            WAL_setNumberInputValue('mindur_value', maxValue);

        } else {
            WAL_setCheckBoxValue('mindurcheck_CB', false, 'true');
            WAL_setNumberInputValue('mindur_value', 0);
        }


        //maxdurcheck_CB 
        var errNode = gErrorCheckXML.getElementById('MAXDURATIONCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('maxdurcheck_CB', true, 'true');
            WAL_setNumberInputValue('maxdur_value', maxValue);

        } else {
            WAL_setCheckBoxValue('maxdurcheck_CB', false, 'true');
            WAL_setNumberInputValue('maxdur_value', 0);
        }


        //CPSCHECK 
        var errNode = gErrorCheckXML.getElementById('CPSCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('cpscheck_CB', true, 'true');
            WAL_setNumberInputValue('cps_value', maxValue);

        } else {
            WAL_setCheckBoxValue('cpscheck_CB', false, 'true');
            WAL_setNumberInputValue('cps_value', 0);
        }

        //WPMCHECK 
        var errNode = gErrorCheckXML.getElementById('WPMCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('wpmcheck_CB', true, 'true');
            WAL_setNumberInputValue('wpm_value', maxValue);

        } else {
            WAL_setCheckBoxValue('wpmcheck_CB', false, 'true');
            WAL_setNumberInputValue('wpm_value', 0);
        }

        //FRAMEGAPCHECK 
        var errNode = gErrorCheckXML.getElementById('FRAMEGAPCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('framegapcheck_CB', true, 'true');
            WAL_setNumberInputValue('framegap_value', maxValue);

        } else {
            WAL_setCheckBoxValue('framegapcheck_CB', false, 'true');
            WAL_setNumberInputValue('framegap_value', 0);
        }


        //CPLCHECK 
        var errNode = gErrorCheckXML.getElementById('CPLCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('cplcheck_CB', true, 'true');
            WAL_setNumberInputValue('cpl_value', maxValue);

        } else {
            WAL_setCheckBoxValue('cplcheck_CB', false, 'true');
            WAL_setNumberInputValue('cpl_value', 0);
        }

        //MISSINGTEXT

        var errNode = gErrorCheckXML.getElementById('MISSINGTEXTCHECK');
        var bCheck = errNode.getAttribute('check');
        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('missingtextcheck_CB', true, 'true');


        } else {
            WAL_setCheckBoxValue('missingtextcheck_CB', false, 'true');

        }


        //TEXTDETECTION        
        var errNode = gErrorCheckXML.getElementById('TEXTOVERLAYCHECK');
        var bCheck = errNode.getAttribute('check');
//        var maxValue = errNode.getAttribute('threshold')
        if (bCheck.toLowerCase() == 'true') {
            WAL_setCheckBoxValue('textdetect_CB', true, 'true');
            //WAL_setNumberInputValue('cpl_value', maxValue);

        } else {
            WAL_setCheckBoxValue('textdetect_CB', false, 'true');
            //WAL_setNumberInputValue('cpl_value', 0);
        }
        //updating the uis later 
        WAL_showWindow("err_settings_dlg", true, "error_settings_icon");
    } else
        alert("Error message could not be loaded ");
}

function ErrorSettingsOK() {
    //var xmlStr = gErrorCheckXML.saveXML
    //now update these values based on whatever is updated 




    var xmlStr = new XMLSerializer().serializeToString(gErrorCheckXML);
    var reqArr = [{'request': 'updateerrorxml', 'data': xmlStr}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "errorupdateCallback");

}

function errorupdateCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        isAllChecksFalse();

        Msg_Notify("info", "Error settings saved successfully", 5);
    } else {
        Msg_Notify("error", "Error settings could not be saved", 5);
        //alert("Data Could not be updated "); 
    }

}


function ErrorCheckBoxHandler(event) {

    var node = event.currentTarget;
    var state = event.args.checked;
    var parentNode = node.parentNode.parentNode;
    var errID = parentNode.getAttribute("data-error_id");
    if (errID) {
        var errNode = gErrorCheckXML.getElementById(errID);
        if (state == true) {
            errNode.setAttribute("check", "True");
        } else
            errNode.setAttribute("check", "False");
    }

}

function ErrorSettingNumberHandler(value, node) {
    var parentNode = node.parentNode.parentNode;

    var errID = parentNode.getAttribute("data-error_id");
    if (errID) {
        var errNode = gErrorCheckXML.getElementById(errID);
        errNode.setAttribute("threshold", value);
    }
}


function SaveTimeInfo() {
    var capID = gCurrCaptionInfo.ID;
    if (capID.length < 1) {
        alert("Caption ID not found");
        return;
    }
    gCurrentCaptionNode.setAttribute("start-time", gCurrCaptionInfo.startTime);
    gCurrentCaptionNode.setAttribute("end-time", gCurrCaptionInfo.endTime);

    var actionStatus = gCaptionWidget.updateCaptionErrStatus(gCurrentCaptionNode);

    gCurrentCaptionNode.setAttribute("action_status", actionStatus);
    var startTime = gCurrCaptionInfo.startTime;
    var endTime = gCurrCaptionInfo.endTime;
    updateCaptionInfoList();
    resetTimeEditor();

    ////get the captio id 
    //sendJSON data 
    //request":"updatenodeattributes","object_id":"subtitle3", "attributes":"start-time=>145.6#end-time=>150.2"
    var reqArr = [{'request': 'updatenodeattributes', 'object_id': capID, "retstatus": "STATUS", 'attributes': 'start-time=>' + startTime + gDelimiter_1 + 'end-time=>' + endTime +
                    gDelimiter_1 + 'action_status=>' + actionStatus}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "updateNodecallback");

}

function SYNC_LBOKHandler() {
    SaveTimeInfo();
}


function onloadcallback() {

    //gCaptionWidget.calculateOffset();
    if (bSliderInitialized == false) {

        var containerwidth = $("#videowidget").width();
        var containerheight = $("#captionwidget").height();
        var btngrpwidth = $("#playerBtngroup").width();
        var width = containerwidth;
        with (Math) {
            width = width - btngrpwidth;
        }
        var width = width * 0.9;
        var duration = gCaptionWidget.VideoPlayerObject.Duration;
        InitializeVideoSlider(width, 0, duration);
        gCaptionWidget.VideoPlayerObject.SetDimension(containerwidth, containerheight);
    }
    BlockUIinAjax(false);
    bFilterOn = false;
    gVideoDisplayDimension = gCaptionWidget.VideoPlayerObject.CalculateVideoDisplayAreaDimension();
    $('#captiongrid').jqxGrid("clearselection");
    $('#captiongrid').jqxGrid('selectrow', 0);
    ProcessGridSelection(0);
    //alert("X=" + gVideoDisplayDimension.left + "Y=" + gVideoDisplayDimension.top); 

}




function onvideoerrorcallback() {
    //  alert("Video loading error");
    WAL_TriggerEvent("click", "pauseBtn");

}
/*
 * 'info' 'warning' success' 'error' 'mail' 'time'
 
 null
 */
function Msg_Notify(type, str, dur, position = 'top-left', blink = false, offset = 0, timeout = 7) {
    $("#msgBox")[0].innerHTML = str;
    $('#messageNotification').jqxNotification({template: type, position: position, blink: blink, notificationOffset: offset, autoCloseDelay: timeout});
    $("#messageNotification").jqxNotification("open");

}

function FilterErrorsWithMultiParam_old(iperrorStatus, ipactionStatus, iperrorType) {
    gCaptionInfoList = [];
    captionNodeList = gAnalysisXMLDoc.getElementsByTagName("CAPTION");
    if (captionNodeList.length < 1)
        return;
    var iperrorStatus = iperrorStatus.toUpperCase();
    var ipactionStatus = ipactionStatus.toUpperCase();
    var iperrorType = iperrorType.toUpperCase();
    var retval = false;
    if ((iperrorStatus.toUpperCase() == "ALL") && (ipactionStatus == "NONE") && (iperrorType == "NONE"))
        bFilterOn = false;
    else
        bFilterOn = true;

    for (var i = 0; i < captionNodeList.length; i++) {
        var node = captionNodeList[i];
        //trying to find value of each param as found in the node 
        var errorStatus = node.getAttribute("error_status").toUpperCase();
        var actionStatus = node.getAttribute("action_status").toUpperCase();


        var errorType;
        bAddToList = false;
        if (iperrorType != "NONE") {
            retval = IsChildNode(node, iperrorType);
            if (retval == true) {
                errorType = iperrorType;
                bAddToList = true;
            } else
                errorType = 'NONE';
        } else
            errorType = 'NONE';




        //Filtering starts here _rm 
        if (iperrorStatus == 'ALL') {
            if (ipactionStatus == "NONE") {
                if (iperrorType === "NONE") {
                    bAddToList = true;
                } else {
                    if (iperrorType === errorType)
                        bAddToList = true;
                    else
                        bAddToList = false;
                }

            }//(ipactionStatus == "NONE")                
            else if (actionStatus == ipactionStatus)
                bAddToList = true;
        } else if (iperrorStatus == 'UNKNOWN') {
            //then no filter
            if (iperrorStatus == errorStatus) {
                if (ipactionStatus == "NONE")
                    bAddToList = true;
                else if (actionStatus == ipactionStatus)
                    bAddToList = true;
            }

        } else if (iperrorStatus == 'NONE') {
            if (iperrorStatus == errorStatus) {
                if (ipactionStatus == "NONE")
                    bAddToList = true;
                else if (actionStatus == ipactionStatus)
                    bAddToList = true;

            }
        } else if ((iperrorStatus == "ERROR") || (iperrorStatus == "MIXED")) {
            if (iperrorStatus == errorStatus) {
                if (ipactionStatus == "NONE") {
                    if (iperrorType == 'NONE')
                        bAddToList = true;
                    else if (iperrorType == errorType)
                        bAddToList = true;
                } else if ((actionStatus == ipactionStatus) && (iperrorType == errorType))
                    bAddToList = true;
            }
        }

        if (bAddToList == true) {
            var id = node.id;
            var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time'));
            var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time'));
            var duration = node.getAttribute('duration');
            var text = "";
            var xpos = node.getAttribute("x");
            var ypos = node.getAttribute("y");
            //textdatanode = node.firstElementChild;
            /*while (lineNode) {
             text += lineNode.innerHTML;
             lineNode = lineNode.nextElementSibling;
             if (lineNode) {
             text += gMultilineDelimiter;
             }
             }*/
            text = getTextDatafromCaptionNode(node);
            var errstatus = node.getAttribute("error_status");
            var infoArr = [id, starttime, endtime, text, duration, errstatus, xpos, ypos, actionStatus];
            gCaptionInfoList.push(infoArr);
        }

    }//for 
    g_CaptionListSource.localdata = gCaptionInfoList;
    // $("#captiongrid").jqxGrid({ selectionmode: 'singlerow'}); 
    $('#captiongrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        //update count value when filter is applied
        updaterowcountvalue();

    }, 100);
    setTimeout(function () {
        $("#captiongrid .jqx-grid-cell").css({color: gCaptionGridTextColor});
        $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
        if (gCurrentRowID != 0) {
            var index = $('#captiongrid').jqxGrid('getrowboundindexbyid', gCurrentRowID);
            $('#captiongrid').jqxGrid('selectrow', index);
            var displaylen = index + 2;
            $('#captiongrid').jqxGrid('ensurerowvisible', displaylen);
            ProcessGridSelection(index);
        }


    }, 100);

}

function updaterowcountvalue() {
    console.log($("#captiongrid").jqxGrid('getrows').length);
    var rowcount = $("#captiongrid").jqxGrid('getrows').length;
    $('#error_type_count').text(rowcount);
}


function FilterErrors(errType) {
    gCaptionInfoList = [];
    captionNodeList = gAnalysisXMLDoc.getElementsByTagName("CAPTION");
    if (captionNodeList.length < 1)
        return;
    var retval = false;
    if (errType == "None")
        bFilterOn = false;
    else
        bFilterOn = true;

    for (var i = 0; i < captionNodeList.length; i++) {
        var node = captionNodeList[i];
        if (errType != "None")
            retval = IsChildNode(node, errType);
        else {
            retval = true;
        }
        if (retval == true) {
            var id = node.id;
            var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time'));
            var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time'));
            var duration = node.getAttribute('duration');
            var text = "";
            var xpos = node.getAttribute("x");
            var ypos = node.getAttribute("y");
            text = node.firstElementChild.innerHTML;
            /* while (lineNode) {
             text += lineNode.innerHTML;
             lineNode = lineNode.nextElementSibling;
             if (lineNode) {
             text += gMultilineDelimiter;
             }
             }*/
            var errstatus = node.getAttribute("error_status");
            var infoArr = [id, starttime, endtime, text, duration, errstatus, xpos, ypos];
            gCaptionInfoList.push(infoArr);
        }
    }
    g_CaptionListSource.localdata = gCaptionInfoList;
    // $("#captiongrid").jqxGrid({ selectionmode: 'singlerow'}); 
    $('#captiongrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        $("#captiongrid .jqx-grid-cell").css({color: gCaptionGridTextColor});
        $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
        if (gCurrentRowID != 0) {
            var index = $('#captiongrid').jqxGrid('getrowboundindexbyid', gCurrentRowID);
            $('#captiongrid').jqxGrid('selectrow', index);
            var displaylen = index + 2;
            $('#captiongrid').jqxGrid('ensurerowvisible', displaylen);
            ProcessGridSelection(index);
        }
    }, 100);

}

function IsChildNode(parentNode, nodename) {
    if (nodename == "any_error") {
        var errNode = parentNode.firstElementChild.nextElementSibling;
        if (errNode)
            return true;
        else
            return false;
    }
    var childnodelist = parentNode.childNodes;
    for (var i = 0; i < childnodelist.length; i++) {
        if (nodename.toUpperCase() == childnodelist[i].nodeName.toUpperCase())
            return true;
    }
    return false;
}

function OnErrorSummaryClick(event) {
    var nodeID = event.currentTarget.id;
    $(".ERROR_SUMMARY").removeClass("ERROR_SUMMARY_SELECT");
    //if(nodeID != "ALL"){
    //   FilterErrors(nodeID); 
    if (nodeID.toUpperCase() != "NONE")
        $("#" + nodeID).addClass("ERROR_SUMMARY_SELECT");
    //now update the correponding list as well 
    var textNode = "";

    if (nodeID == "None")
        WAL_SetItemInDropDownList('error_type_ddl', 0, false);
    else {
        var node = event.currentTarget;
        var textvalue = node.firstElementChild.innerHTML;
        WAL_SetItemByValueInList('error_type_ddl', nodeID, false);
    }
    //}

}

function UI_DDLHandler(Node, item) {
    var value = item.value.toUpperCase();
    var nodeID = Node.id;
    switch (nodeID) {
        case "error_status_ddl":

            if (value === "ALL") {
                WAL_disableWidget("action_status_ddl", "data-jqxDropDownList", false, false);
                WAL_disableWidget("error_type_ddl", "data-jqxDropDownList", false, false);
                WAL_SetItemInDropDownList('action_status_ddl', 0, false);
                WAL_SetItemInDropDownList('error_type_ddl', 0, false);
                g_errorType = 'none';
                g_actionStatus = 'none';
            } else if ((value === "MIXED") || (value === "ERROR")) {
                WAL_disableWidget("action_status_ddl", "data-jqxDropDownList", false, false);
                WAL_disableWidget("error_type_ddl", "data-jqxDropDownList", false, false);
                // WAL_SetItemInDropDownList('action_status_ddl', 0, false);
                // WAL_SetItemInDropDownList('error_type_ddl', 0, false);               
            } else if (value === "UNKNOWN") {
                WAL_disableWidget("action_status_ddl", "data-jqxDropDownList", false, false);
                WAL_disableWidget("error_type_ddl", "data-jqxDropDownList", false, true);
                WAL_SetItemInDropDownList('action_status_ddl', 0, false);
                WAL_SetItemInDropDownList('error_type_ddl', 0, false);
                g_errorType = 'none';
                g_actionStatus = 'none';
            } else if (value === "NONE") {
                WAL_disableWidget("action_status_ddl", "data-jqxDropDownList", false, true);
                WAL_disableWidget("error_type_ddl", "data-jqxDropDownList", false, true);
                WAL_SetItemInDropDownList('action_status_ddl', 0, false);
                WAL_SetItemInDropDownList('error_type_ddl', 0, false);
                g_errorType = 'none';
                g_actionStatus = 'none';
            }
            g_errorStatus = value;
            break;
        case "error_type_ddl":
            g_errorType = value;
            break;

        case "action_status_ddl":
            g_actionStatus = value;
            break;
    }
    FilterErrorsWithMultiParam(g_errorStatus.toUpperCase(), g_actionStatus.toUpperCase(), g_errorType.toUpperCase());

}

function ProjectListDlgHandler(item) {
    $("#summary_info")[0].innerHTML = item.value;
    //alert(item.value); 
    $('#SVGFO_LB_okbtn').attr('disabled', false);
}

function DeInitialize() {

    // unload the XML file 
    // location.reload(false);
    window.location = window.location.href.split("&")[0];
    /*
     gAnalysisXMLDoc = 0; 
     
     //unload the video source 
     gCaptionWidget.VideoPlayerObject.DeInitialize(); 
     //clean up the grids. 
     $('#captiongrid').jqxGrid('clear');
     gCaptionInfoList = []; 
     
     $('#errorgrid').jqxGrid('clear');
     gErrorInfoList = []; 
     
     CleanUpErrorsummaryNodes(); 
     // clean up the  UI .
     
     var nodelist = $('.FIELD_VALUE').html("");     
     gCaptionWidget.captionNode.innerHTML = ""; 
     gCaptionWidget.gCurrCaptionInfo = 0; 
     
     $(".UI_ELEMENTS").css({"visibility": "hidden"}); 
     
     location.reload(false); */

}


function OnSelRadioBtnHandler(event) {

    var btnID = event.currentTarget.id;
    var bCheck = event.args.checked;
    if (bCheck == false)
        return;
    switch (btnID) {

        case "orig_time_radio":
            gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds($("#orig_start_time_value")[0].innerHTML);
            gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds($("#orig_end_time_value")[0].innerHTML);
            bUseCorrectedTime = false;
            //WAL_disableWidget("corrected_start_time_number_ip", "data-jqxRadioButton", false, true); 
            break;
        case "corrected_time_radio":
            gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds($("#corrected_start_time_value")[0].innerHTML);
            gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds($("#corrected_end_time_value")[0].innerHTML);
            bUseCorrectedTime = true;
            break;
        default:
            WAL_disableWidget("CTE_TEXT_IP", "data-jqxInput", true, true);
            //  WAL_disableWidget("line_1_ip", "data-jqxInput", false, true);
            //  WAL_disableWidget("line_2_ip", "data-jqxNumberInput", false, true);
            //  WAL_disableWidget("line_3_ip", "data-jqxNumberInput", false, true);
            var tempArr = btnID.split("_");
            if ((tempArr[0] == "line") && (tempArr[2] == "radio")) {
                gCurrentCTELineIndex = tempArr[1];
                var lineipID = "line_" + gCurrentCTELineIndex + "_ip";
                updateCTEForLine(gCurrentCTELineIndex, false);
                setTimeout(function () {
                    WAL_disableWidget(lineipID, "data-jqxInput", false, false);
                    $('#' + lineipID).jqxInput('focus');
                    var spanID = 'line_' + gCurrentCTELineIndex + '_span';
                    $('#' + spanID).css({'display': 'inline'});
                }, 400);
            }
            break
    }
    event.stopPropagation();
}


function SetUIState(mode) {

    switch (mode) {

        case 'PLAYBACK_MODE':

            WAL_disableWidget('captiongrid', "data-jqxgrid", false, true);
            WAL_disableWidget('errorgrid', "data-jqxgrid", false, true);
            WAL_disableWidget('error_type_ddl', "data-jqxDropDownList", false, true);


            WAL_disableWidget('fwdBtn', "", false, true);
            WAL_disableWidget('bwdBtn', "", false, true);
            WAL_disableWidget('resetBtn', "", false, true);
            //disable translation widget while playing video
            WAL_disableWidget('tt_captiongrid', "data-jqxgrid", false, true);


            break;
        case 'TIME_EDIT_MODE':

            WAL_disableWidget('captiongrid', "data-jqxgrid", false, true);
            WAL_disableWidget('errorgrid', "data-jqxgrid", false, true);
            WAL_disableWidget('error_type_ddl', "data-jqxDropDownList", false, true);


            //enabling 
            // WAL_disableWidget('fwdBtn', "", false, false);
            //WAL_disableWidget('bwdBtn', "", false, false);
            WAL_disableWidget('resetBtn', "", false, false);


            break;
        case 'NORMAL_MODE':
            //time editor interface  

            $(".TIME_INFO_SELECTED").removeClass("TIME_INFO_SELECTED");
            $(".CURR_TIME_INFO_SELECTED").removeClass("CURR_TIME_INFO_SELECTED");
            var bdisable = true;
            if (bMultipleIndex != true)
                bdisable = false;

            WAL_disableWidget('captiongrid', "data-jqxgrid", false, false);
            WAL_disableWidget('errorgrid', "data-jqxgrid", false, false);
            WAL_disableWidget('error_type_ddl', "data-jqxDropDownList", false, false);


            // for translation 
            WAL_disableWidget('tt_captiongrid', "data-jqxgrid", false, false);

            //player controls 
            $('.play_grid_btn').removeAttr("disabled");
            $('.playercontrol').attr("disabled", "disabled");
            $('#playBtn').removeAttr("disabled");
            $('#resetBtn').removeAttr("disabled");
            $('#pauseBtn').removeAttr("disabled");
            break;
    }
    gCurrApplicationState = mode;
}

function restorecallbackFn(respstr) {
    openProject(g_CurrProjectName);
}



function InitializeTTCaptionGrid() {
    var containerWidth = $('#tt_gridcontainer').width();
    var containerHeight = $('#tt_gridcontainer').height();
    var winH = Number($('#translatedtextdlg').height());
    var winW = Number($('#translatedtextdlg').width());
    //var bstop_pos = $('#bottom_screen').position().top; 

    var widthOfContainer = $('#translatedtextdlg').width();
    var finalWidth = widthOfContainer;
    //var finalheight = winH * 0.96;
    var finalheight = winH 
    if (bTTGridInitialized == true)
        return;
    //prepare the data
    g_TTListSource = {
        localdata: gTTInfoList,
        datafields: [
            {name: 'id', type: 'text', map: '0'},
            {name: 'ErrorStatus', type: 'text', map: '1'},
            {name: 'Start', type: 'text', map: '2'},
            {name: 'End', type: 'text', map: '3'},
            {name: 'Captionid', type: 'text', map: '6'},
            {name: 'PrimaryText', type: 'text', map: '4'},
            {name: 'secondaryCaptionid', type: 'text', map: '7'},
            {name: 'SecondaryText', type: 'text', map: '5'}
        ],
        datatype: "array",
        id: "id"
    };
    var cellrenderer = function (row, datafield, value) {
        if (value == "error") {
            var tempArr = [];
            var item = $('#captiongrid').jqxGrid('getrowdata', row);
            var capID = item.id;

            var capNode = gAnalysisXMLDoc.getElementById(capID);
            if (capNode.hasAttribute('missing_lang_id')) {
                var missing_lang_ids = capNode.getAttribute("missing_lang_id");
                if (!missing_lang_ids.includes(',')) {

                    tempArr.push(missing_lang_ids);
                } else {
                    tempArr = missing_lang_ids.split(",");
                }

                var currentLangID = gSelectedCurrentLanguage[0].label;
                for (var j = 0; j < tempArr.length; j++) {
                    if (currentLangID == tempArr[j])
                        return missingtext_error_indicator;
                }
            }

            return "";
        }
        return "";

    }

    //play button for primary caption on translation grid
    var cellsrendererprimary = function (row, datafield, value) {

        var btnid = "edit_btn_" + value;
        return '<button id="' + btnid + '" type="button" class="btn btn-s  play_grid_btn" onclick="OnPlayBtnClickP()"><span class="glyphicon glyphicon-play player_span" style="display:block" title="Play"></span></button>';
    }
    //play button for secondary caption on translation grid
    var cellsrenderersecondary = function (row, datafield, value) {

        var btnid = "edit_btn_" + value;
        return '<button id="' + btnid + '" type="button" class="btn btn-m play_grid_btn" onclick="OnPlayBtnClickS()"><span class="glyphicon glyphicon-play" style="display:block" title="Play"></span></button>';
    }

//    var cellsrendererdemo = function (row, column, value) {
//               console.log(row);
//               console.log(column);
//               console.log(value);
//               
//            }
    var dataAdapter = new $.jqx.dataAdapter(g_TTListSource);
    $("#tt_captiongrid").jqxGrid(
            {
                width: finalWidth,
                height: finalheight * 0.8,
                source: dataAdapter,
                theme: gTheme,
                columnsresize: true,
                editable: false,
                filterable: false,
                showfilterrow: false,
                columnsautoresize: true,

                columns: [

                    {text: 'ID', datafield: 'id', editable: false, width: '6%', },
                    {text: 'Status', datafield: 'ErrorStatus', editable: false, width: '4%', cellsrenderer: cellrenderer},
                    {text: 'Start Time', datafield: 'Start', editable: true, width: '10%'},
                    {text: 'End Time', datafield: 'End', editable: true, width: '10%'},
                    {text: '', datafield: 'primaryCaptionid', editable: false, width: '5%', cellsrenderer: cellsrendererprimary},
                    {text: 'Main Caption', datafield: 'PrimaryText', editable: false, width: '30%'},
                    {text: '', datafield: 'secondaryCaptionid', editable: false, width: '5%', cellsrenderer: cellsrenderersecondary},
                    {text: 'Translated Caption', datafield: 'SecondaryText', editable: false, width: '30%'}
                ]
            });

    bTTGridInitialized = true;
    var langugeList = ['None'];
    var errorlist = ['Errors', 'None'];
    WAL_createDropdownList('translation-language-filter', '180', '22', false, langugeList, "UI_languagefilterhandler", '180', 0);
    WAL_createDropdownList('translation-error-filter', '180', '22', false, errorlist, "UI_errorfilterhandler", '180', 0);

    $("#tt_captiongrid").on('rowselect', function (event) {
        console.log('caption sleected');
        var args = event.args;
        var item = args.row;
        gCurrCaptionInfo.ID = item.id;
        gCurrCaptionInfo.startTime = ConvertHMSmmToSeconds(item.Start);
        gCurrCaptionInfo.endTime = ConvertHMSmmToSeconds(item.End);
        gCaptionWidget.SeekTo(gCurrCaptionInfo.startTime);

        gCurrCaptionInfo.primary_text = item.PrimaryText.trim();
        gCurrCaptionInfo.secondary_text = item.SecondaryText.trim();

        var breakstr = "&lt;br&gt;";
        gCurrCaptionInfo.Text = gCurrCaptionInfo.primary_text.replace(breakstr, gMultilineDelimiter);

        gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);
        UpdateErrorInfoGrid(item.id);
        //UpdateTTInfoGrid(item.id);

        // row's bound index.
        //gCurrentErrorID = item.id; 
        //gCaptionWidget.SeekTo(item.Start);
        //gMediaWidget.SetSegment(gMediaWidget.SegInfo.StartTime,gMediaWidget.SegInfo.EndTime ); 
        //alert(gMediaWidget.SelectionIndex); 
    });
}

//on primary caption play button

function OnPlayBtnClickP() {
    $(".play_grid_btn").attr("disabled", true);

    var breakstr = "&lt;br&gt;";
    gCurrCaptionInfo.Text = gCurrCaptionInfo.primary_text.replace(breakstr, "<br>");

    gCurrApplicgPrevApplicationState = gCurrApplicationState;
    gCurrApplicationState = 'PLAYBACK_MODE';
    SetUIState(gCurrApplicationState);

    gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);
    gCaptionWidget.PlayCaptionWithLead();
    //UpdateErrorInfoGrid(item.id);
    //UpdateTTInfoGrid(item.id);

}


//on secondary caption play button
function OnPlayBtnClickS() {
    $(".play_grid_btn").attr("disabled", true);
    var breakstr = "&lt;br&gt;";
    //gCurrCaptionInfo.Text = gCurrCaptionInfo.secondary_text.replace(breakstr, "<br>");
    gCurrCaptionInfo.Text = 'secondary';
    gCurrApplicgPrevApplicationState = gCurrApplicationState;
    gCurrApplicationState = 'PLAYBACK_MODE';
    SetUIState(gCurrApplicationState);

    gCaptionWidget.UpdateCaptionInfo(gCurrCaptionInfo);
    gCaptionWidget.PlayCaptionWithLead();
    //UpdateErrorInfoGrid(item.id);
    //UpdateTTInfoGrid(item.id);


}
//_rm changed it to item base dcallback so as to trap the label as well 
function UI_languagefilterhandler(refpath, item) {
    var value = item.value;
    var label = item.label;
    if (value == 'None') {
        return
    }
    gSelectedCurrentLanguage = [];
    gSelectedCurrentLanguage.push({label: label, value: value});
    if (value.length > 1) {
        var reqArr = [{'request': 'getxmldata', 'xmlfilename': value}];
        var json_str = JSON.stringify(reqArr);
        sendJSONdata('capella_handler.php', json_str, "TTxmlDataCallback");
    } else {
        console.log("No reference file");
        return;
    }

}

function UpdateTTInfoGrid(captionID) {

    if (!gTTXMLDoc) {
        // alert("No Translation data"); 
        return;
    }
    g_TransInfoList = [];
    var TTNode = getNodeByAttributeValue(gTTXMLDoc, "CAPTION", "refid", captionID);
    var TTText = "";
    if (TTNode) {
        TTText = TTNode.firstChild.innerHTML;
    }
    var info = [id, TTText];
    g_TransInfoList.push(info);
    g_TransListSource.localdata = g_TransInfoList;

    $('#translationgrid').jqxGrid('clearselection');

    $('#translationgrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        $("#translationgrid .jqx-grid-cell").css({color: gErrorGridTextColor});
    }, 100);

}



function getTTData() {
    //first read the location of the reference file and the language 
    gLanguageListItem = [];
    var refNodeArray = gAnalysisXMLDoc.getElementsByTagName('REFERENCE');
    //if there is no refrance files then return
    if (refNodeArray.length < 1) {
        return 0;
    }
    len = refNodeArray.length;
    //loop through all refrance files
    for (var i = 0; i < len; i++) {

        var lang = refNodeArray[i].getAttribute("language");
        //get the refrance xml file name
        var refpath = refNodeArray[i].getAttribute("output");

        gLanguageListItem.push({label: lang, value: refpath});
    }

    WAL_clearAllFromDropdownList('translation-language-filter');
    WAL_UpdateDropDownList('translation-language-filter', gLanguageListItem);
    //  WAL_enableDropdownListItem('translation-language-filter',0);
    WAL_SetItemInDropDownList("translation-language-filter", 0, false);



    // get the first refrance node and send json request to get xml data
    var refNode = gAnalysisXMLDoc.getElementsByTagName('REFERENCE')[0];
    if (refNode == undefined)
        return;
    var lang = refNode.getAttribute("language");

    var refpath = refNode.getAttribute("output");

    if (refpath.length > 1) {
        var reqArr = [{'request': 'getxmldata', 'xmlfilename': refpath}];
        var json_str = JSON.stringify(reqArr);
        sendJSONdata('capella_handler.php', json_str, "TTxmlDataCallback");
    } else {
        console.log("No reference file");
        return;
    }




    //now get corresponding xml data 
    //convert this into a list 

    //update the TT grid in the callback 

}

//function TTXMLCallback(respStr) {
//    var jsondata = JSON.parse(respStr);
//    var respval = jsondata.response;
//    if (respval != "ERROR") {
//        parser = new DOMParser();
//        gTTXMLDoc = parser.parseFromString(respval, "text/xml");
//    } else {
//        //alert("No Translation data found"); 
//    }
//}


function TTxmlDataCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        gTTInfoList = [];
        parser = new DOMParser();
        gTTXMLDoc = parser.parseFromString(respval, "text/xml");
        captionNodeList = gAnalysisXMLDoc.getElementsByTagName("CAPTION");
        if (captionNodeList.length < 1)
            return;
        ttCaptionNodeList = gTTXMLDoc.getElementsByTagName("CAPTION");
        if (ttCaptionNodeList.length < 1)
            return;
        for (var i = 0; i < gCaptionInfoList.length; i++) {
            /* var node = captionNodeList[i]; 
             var id = node.id; 
             var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time')); 
             var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time')); 
             var duration = node.getAttribute('duration'); 
             var text = node.firstChild.innerHTML; 
             var infoArr = [id, starttime, endtime, text,duration]; 
             gCaptionInfoList.push(infoArr); */
            var id = gCaptionInfoList[i][0];
            var errorStatus = gCaptionInfoList[i][5];
            var startTime = gCaptionInfoList[i][1];
            var endTime = gCaptionInfoList[i][2];
            var primaryText = gCaptionInfoList[i][3];
            var TTNode = getNodeByAttributeValue(gTTXMLDoc, "CAPTION", "refid", id);
            var TTText = " ";
            var primaryCaptionid = gCaptionInfoList[i][0];
            var secondaryCaptionid = gCaptionInfoList[i][0];
            if (TTNode) {


                TTText = TTNode.firstChild.innerHTML;
                TTText = getTextDatafromCaptionNode(TTNode);
            }
            var info = [id, errorStatus, startTime, endTime, primaryText, TTText, primaryCaptionid, secondaryCaptionid];
            gTTInfoList.push(info);
        }
        g_TTListSource.localdata = gTTInfoList;
        $('#tt_captiongrid').jqxGrid('updatebounddata');
    } else {

        console.log("Error getting xml data");
    }
}


function getNodeByAttributeValue(xmlDOC, tagName, attrName, attrValue) {

    //get the child list 
    var nodelist = xmlDOC.getElementsByTagName(tagName);
    for (var i = 0; i < nodelist.length; i++) {
        var node = nodelist[i];
        if (attrValue == node.getAttribute(attrName))
            return node;
    }
    return  null;
}
/*
 * 
 *
 * text: 'ID', datafield: 'id', editable:false, width:'10%'},
 { text: 'Start Time', datafield: 'Start', editable:true, width:'10%'},
 { text: 'End Time', datafield: 'End', editable:true,width:'10%'},
 { text: 'Main Caption', datafield: 'PrimaryText', editable:false, width:'70%'},
 { text: 'Translated Caption', datafield: 'SecondaryText', editable:false, width:'70%'}
 */

function OnEditBtnClick() {
    InvokeErrorEditor();
}

function updateTimingCorrectionDlgItem(error_type, coded_info_id, threshold_info_id, corrected_info_id) {

    var codedParam = getItemfromParamList(gCodedParamList, error_type);
    var correctedParam = getItemfromParamList(gCorrectedParamList, error_type);

    if ((error_type == "STARTOVERLAP") || (error_type == "ENDOVERLAP")) {


    } else {
        $("#" + coded_info_id).html(codedParam.paramValue);
        $("#" + threshold_info_id).html(codedParam.threshold);
        $("#" + corrected_info_id).html(correctedParam.paramValue);
        if (codedParam.error_status == "ERROR") {
            $("#" + coded_info_id).addClass("FLASH_ERROR");
        } else {
            $("#" + coded_info_id).removeClass("FLASH_ERROR");
        }
    }

}

function updateRemoteNodeAttributes() {

    if (gObjectAttrList.length < 1)
        return;
    //now read first element and then send json request 
    var item = gObjectAttrList.shift();
    if (item) {
        var objectID = item[0];
        var attrval = item[1];
        var reqArr = [{'request': 'updatenodeattributes', 'object_id': objectID, 'attributes': attrval, 'retstatus': "STATUS"}];
        var json_str = JSON.stringify(reqArr);
        sendJSONdata('capella_handler.php', json_str, "updateRemoteNodeAttributescallback");
    }
}


function updateRemoteNodeAttributescallback(respStr) {

    if (respStr.length > 1) {
        var jsondata = JSON.parse(respStr);
        var respval = jsondata.response;
        if (respval == "ERROR") {
            alert("Error in updating remote node attributes");
            return;
        }
    }
}

function ShowTECError(message, msgtype) {
    $("#timeeditmsg")[0].innerHTML = message;
    $("#messagetype")[0].innerHTML = msgtype;
    // WAL_showWindow("timeeditmsgdlg", true, '');
    WAL_showModalWindow("timeeditmsgdlg", "", "");
}


function TECNumberHandler(value, node) {

    var nodeID = node.id;
    var prevEndTime = 0;
    var nextStartTime = 0;
    if (gPrevCaptionInfo) {
        prevEndTime = gPrevCaptionInfo.endTime;
    }
    if (gNextCaptionInfo) {
        nextStartTime = gNextCaptionInfo.startTime;
    }

    switch (nodeID) {

        case 'corrected_start_time_number_ip':
            var startTime = ConvertHMSmmToSeconds($("#orig_start_time_value")[0].innerHTML);
            var endTime = ConvertHMSmmToSeconds($("#corrected_end_time_value")[0].innerHTML);
            var diff = Number(value);
            startTime = startTime + diff;
            UpdateCorrectedTime(startTime, endTime, prevEndTime, 0);
            //$("#corrected_start_time_value")[0].innerHTML = ConvertTimeIntoHMSmm(startTime); 
            break;
        case 'corrected_end_time_number_ip':
            var startTime = ConvertHMSmmToSeconds($("#corrected_start_time_value")[0].innerHTML);
            var endTime = ConvertHMSmmToSeconds($("#orig_end_time_value")[0].innerHTML);
            var diff = Number(value);
            endTime = endTime + diff;
            //$("#corrected_end_time_value")[0].innerHTML = ConvertTimeIntoHMSmm(startTime); 
            UpdateCorrectedTime(startTime, endTime, 0, nextStartTime);
            break;
        case 'x_position_ip':
            var left = value + '';
            var top = WAL_getMaskedInputValue('y_position_ip') + '';
            gCaptionWidget.updateCaptionPositionOnScreen(left, top);
            break;
        case 'y_position_ip':
            var top = value + '';
            var left = WAL_getMaskedInputValue('x_position_ip') + '';
            gCaptionWidget.updateCaptionPositionOnScreen(left, top);
            break;
    }
    /*
     var parentNode = node.parentNode.parentNode;
     var errID = parentNode.getAttribute("data-error_id");
     if (errID) {
     var errNode = gErrorCheckXML.getElementById(errID);
     errNode.setAttribute("threshold", value);
     }*/
}

function updateTECUI() {
    //SYNCCHECK 
    var error_type = "SYNCCHECK";
    var coded_info_id = "coded_sync_offset_value";
    var corrected_info_id = "corrected_sync_offset_value";
    var threshold_info_id = "max_sync_offset_value";
    updateTimingCorrectionDlgItem(error_type, coded_info_id, threshold_info_id, corrected_info_id);


    //DURATION  
    var error_type = "MAXDURATIONCHECK";
    var coded_info_id = "coded_duration_value";
    var corrected_info_id = "corrected_duration_value";

    var codedParam = getItemfromParamList(gCodedParamList, "MINDURATIONCHECK");
    if (codedParam.error_status == "ERROR") {
        var threshold_info_id = "min_duration_value";
        $("#max_container").hide();
        $("#min_container").show();
        error_type = "MINDURATIONCHECK";
    } else {
        var threshold_info_id = "max_duration_value";
        $("#min_container").hide();
        $("#max_container").show();
    }

    updateTimingCorrectionDlgItem(error_type, coded_info_id, threshold_info_id, corrected_info_id);


    //FRAMEGAP  
    var error_type = "FRAMEGAPCHECK";
    var coded_info_id = "coded_framegap_value";
    var corrected_info_id = "corrected_framegap_value";
    var threshold_info_id = "max_framegap_value";
    updateTimingCorrectionDlgItem(error_type, coded_info_id, threshold_info_id, corrected_info_id);

    //CPS  
    var error_type = "CPSCHECK";
    var coded_info_id = "coded_cps_value";
    var corrected_info_id = "corrected_cps_value";
    var threshold_info_id = "max_cps_value";
    updateTimingCorrectionDlgItem(error_type, coded_info_id, threshold_info_id, corrected_info_id);

    UpdateTECCaptionTiming();

}


function UpdateTECCaptionTiming() {
    $("#orig_start_time_value").html(ConvertTimeIntoHMSmm(gCurrentCaptionNode.getAttribute("start-time")));
    $("#orig_end_time_value").html(ConvertTimeIntoHMSmm(gCurrentCaptionNode.getAttribute("end-time")));

    var corr_start_time = Number(gCorrectedCaptionNode.getAttribute("start-time"));
    var corr_end_time = Number(gCorrectedCaptionNode.getAttribute("end-time"));

    if (gCurrentCaptionNode.previousElementSibling) {
        var prevcapendtime = Number(gCurrentCaptionNode.previousElementSibling.getAttribute("end-time"));
    } else
        var prevcapendtime = corr_start_time;

    if (gCurrentCaptionNode.nextElementSibling) {
        var nextcapstartime = Number(gCurrentCaptionNode.nextElementSibling.getAttribute("start-time"));
    } else
        var nextcapstartime = corr_end_time;


    UpdateCorrectedTime(corr_start_time, corr_end_time, prevcapendtime, nextcapstartime);

}

function UpdateCorrectedTime(startTime, endTime, prevEndTime, nextStartTime) {

    $("#corrected_end_time_value").removeClass("FLASH_ERROR");
    $("#corrected_start_time_value").removeClass("FLASH_ERROR");
    $("#corrected_start_time_value").html(ConvertTimeIntoHMSmm(startTime));
    $("#corrected_end_time_value").html(ConvertTimeIntoHMSmm(endTime));
    if (startTime >= endTime) {
        $("#corrected_start_time_value").addClass("FLASH_ERROR");
    }
    if ((endTime > 0) && (nextStartTime > 0)) {
        if (endTime > nextStartTime)
            $("#corrected_end_time_value").addClass("FLASH_ERROR");
    }

    if ((startTime > 0) && (prevEndTime > 0)) {
        if (startTime < prevEndTime)
            $("#corrected_start_time_value").addClass("FLASH_ERROR");
    }
    if ((endTime > 0) && (nextStartTime > 0)) {
        if (endTime > nextStartTime)
            $("#corrected_end_time_value").addClass("FLASH_ERROR");
    }

}



function ApplyCorrection() {

    var startTime = $("#corrected_start_time_value")[0].innerHTML;
    startTime = ConvertHMSmmToSeconds(startTime);
    gCurrCaptionInfo.startTime = Number(startTime);
    gCorrectedCaptionNode.setAttribute("start-time", startTime);

    var endTime = $("#corrected_end_time_value")[0].innerHTML;
    endTime = ConvertHMSmmToSeconds(endTime);
    gCurrCaptionInfo.endTime = Number(endTime);
    gCorrectedCaptionNode.setAttribute("end-time", endTime);
    gCodedParamList = AnalyzeTimeParameters(gCorrectedCaptionNode, gCurrentCaptionNode.previousElementSibling, gCurrentCaptionNode.nextElementSibling);
    updateTECUI();
    $("#corrected_start_time_value")[0].innerHTML = ConvertTimeIntoHMSmm(gCorrectedCaptionNode.getAttribute("start-time"));
    $("#corrected_end_time_value")[0].innerHTML = ConvertTimeIntoHMSmm(gCorrectedCaptionNode.getAttribute("end-time"));
}

function InvokeCaptionEditor() {
    //alert("Caption edtior ON"); 
    var errNode = gErrorCheckXML.getElementById('CPLCHECK');
    var bCheck = errNode.getAttribute('check');
    gMaxCPL = Number(errNode.getAttribute('threshold'));

    var errNode = gErrorCheckXML.getElementById('CPSCHECK');
    var bCheck = errNode.getAttribute('check');
    gMaxCPS = Number(errNode.getAttribute('threshold'));

    //changing text extration routine as later on <br> based splitting may not be there at all 
    //var lineNode = gCurrentCaptionNode.firstElementChild.firstElementChild;
    var textdata = gCurrCaptionInfo.Text;   // gCurrentCaptionNode.firstElementChild.textContent;     

    //make a clone of currentcaption node 
    var pNodeOrig = gCurrentCaptionNode.firstElementChild.firstElementChild;

    gCopiedPNode = pNodeOrig.cloneNode(true);


    var currRegID = gCopiedPNode.getAttribute("data-region");
    var currStyleID = gCopiedPNode.getAttribute("data-style");
    if (currRegID)
        var currRegNode = gAnalysisXMLDoc.getElementById(currRegID);
    if (currStyleID)
        var currStyleNode = gAnalysisXMLDoc.getElementById(currStyleID);

    var regionAttrlist = getonlyAttributes(currRegNode);
    var regionStr = "";
    for (var j = 0; j < regionAttrlist.length; j++) {
        var attrName = regionAttrlist[j][0];
        var attrValue = regionAttrlist[j][1];
        if ((attrName.toLowerCase() !== "x") && (attrName.toLowerCase() !== "y") && (attrName.toLowerCase() !== "width") && (attrName.toLowerCase() !== "height")) {
            var attrObj = getHTMLAttributeNameValue(attrName, attrValue);
            if (attrObj) {
                // var attrString = 
                regionStr += (attrObj.attrName + ":" + attrObj.attrValue + ";");
            }
        }
    }

    var styleAttrlist = getonlyAttributes(currStyleNode);
    var styleStr = "";
    for (var j = 0; j < styleAttrlist.length; j++) {
        var attrName = styleAttrlist[j][0];
        var attrValue = styleAttrlist[j][1];
        if ((attrName.toLowerCase() !== "x") && (attrName.toLowerCase() !== "y") && (attrName.toLowerCase() !== "width") && (attrName.toLowerCase() !== "height")) {
            var attrObj = getHTMLAttributeNameValue(attrName, attrValue);
            if (attrObj) {
                styleStr += (attrObj.attrName + ":" + attrObj.attrValue + ";");
            }
        }
    }
    var tempstr = getStyleAttributeListWithHTMLMapping(gCopiedPNode);
    styleStr += tempstr;
    gCopiedPNode.setAttribute("style", styleStr);
    gLocalNodeCount = 0;
    gNodeIDseed = gCurrentCaptionNode.id;
    addNodeIndicators(gCopiedPNode);


    var captext = gCopiedPNode.outerHTML;
    $("#text_editor")[0].innerHTML = captext;
    $("#text_editor").attr("style", regionStr);


    $("#max_cpl")[0].innerHTML = gMaxCPL;
    $("#max_cps")[0].innerHTML = gMaxCPS;
    $("#capIDvalue")[0].innerHTML = gCurrCaptionInfo.ID;

    //setting the position of safetitle area now 
    var staNode = gAnalysisXMLDoc.getElementById("safetitle");
    if (staNode) {
        var x = staNode.getAttribute("data-x");
        var y = staNode.getAttribute("data-y");
        var width = staNode.getAttribute("data-width");
        var height = staNode.getAttribute("data-height");
        $('#safetitlearea')[0].style.left = x;
        $('#safetitlearea')[0].style.top = x;
        $('#safetitlearea')[0].style.width = width;
        $('#safetitlearea')[0].style.height = height;


    }
    $("#safetitlearea").addClass("SHOW_SAFE_TITLE");
    $("#captionarea").addClass("SHOW_CAPTION_REGION");

    var pos1 = $("#caption_info_panel").position();
    var pos2 = $("#top_screen").position();
    var height = $("#captionwidget").height();
    var width = $("#videowidget").width();
    var dlgHeight = $("#cpleditordlg").height();
    var leftpos = $("#ci_child").position();
    left = pos1.left + leftpos.left;// pos2.left + pos1.left + width; 
    top = pos2.top + pos1.top + height - dlgHeight;

    $("#capIDvalue")[0].innerHTML = gCurrCaptionInfo.ID;
    //set the text editor height appropriately 

    //now update the grid 

    gAttrInfoList = [];
    gAttrInfoList = getonlyAttributes(gCurrentCaptionNode.firstElementChild.firstElementChild);
    updateAttributeGrid(gAttrInfoList);

    WAL_showWindowAtPos("cpleditordlg", true, left, top);

    setTimeout(function () {
        var height = $("#cpstatsinfo").height();
        $("#text_editor").height(height);
        var pNodeID = $("#text_editor")[0].firstElementChild.id;
        WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
        WAL_TriggerEvent("click", pNodeID);
        saveEditedText(); 

    }, 400);

    gbTextEditMode = true;

    // WAL_setradioButtonCheck('line_1_radio', true);
}


function updateCTEForLine(lineIndex, bUpdateScreen = false) {

    //get the text data for the lineIndex 
    var totaltext = "";
    var currLineText = "";

    $("#line_no_ip").html(lineIndex);
    var nchar = 0;
    for (var i = 0; i < gMaxNumLines; i++) {
        var JQSel = "#line_" + i + "_ip";
        var temp = $(JQSel).val();
        if (temp.length > 1) {
            // totaltext += temp + " ";
            nchar += temp.length;
            if (i == lineIndex)
                currLineText = temp;
        }
    }
    //get CPL value 
    var cplVal = currLineText.length;
    $("#current_cpl")[0].innerHTML = cplVal;
    //calculate CPS value 
    var duration = Number(gCurrCaptionInfo.endTime) - Number(gCurrCaptionInfo.startTime);
    duration = duration.toFixed(1);
    var nchar = Number(nchar);
    with (Math) {
        var cps = round((nchar / duration));
    }
    $("#current_cps")[0].innerHTML = cps;
    validateCPLText(cplVal, cps);

    //update CPl 
    //update linenumber title 
    if (bUpdateScreen == true) {
        var lineIPID = "line_" + gCurrentCTELineIndex + "_span";
        $("#" + lineIPID).html(currLineText);
}
//validate line data 

//update screen if required 
}


function OnCapEditBtnClick() {
    InvokeCaptionEditor();
}

/*
 * This function to be used ffrom anywhwere to update error information on UI and server based on the latest analyzed paramter list passed as an arguement 
 * error correction need to update oly the current node and call AnalyzeParam , followed by this function 
 */
function updateErrorStatusfromParamList(paramList) {
    //updating error information 
    gObjectAttrList = [];
    var firstChild = gCurrentCaptionNode.firstElementChild;
    var errNode = firstChild.nextElementSibling;
    var capErrStatus;
    var syncOffset = "NA";
    var errStatus;
    //just update all the error nodes 
    while (errNode) {
        if (errNode) {
            var status = errNode.getAttribute("action_status");
            var errType = errNode.nodeName;
            var item = getItemfromParamList(gCorrectedParamList, errType);
            if (item.error_status == "NO_ERROR") {
                errStatus = "corrected";
                if (errType == "SYNCCHECK") {
                    syncOffset = item.paramValue;
                }

            } else {
                errStatus = "uncorrected";
            }
            errNode.setAttribute("action_status", errStatus);
            item = [errNode.id, "action_status=>" + errStatus];
            gObjectAttrList.push(item);
            errNode = errNode.nextElementSibling;
        }
    }
    ;


    //-rm this will iterate through all error nodes to get the correct update of error status 
    capErrStatus = gCaptionWidget.updateCaptionErrStatus(gCurrentCaptionNode);
    //gCurrentCaptionNode.setAttribute("error_status", capErrStatus); 
    gCurrentCaptionNode.setAttribute("start-time", gCurrCaptionInfo.startTime);
    gCurrentCaptionNode.setAttribute("end-time", gCurrCaptionInfo.endTime);
    updateCaptionInfoList();
    if (syncOffset != "NA") {
        gCurrentCaptionNode.setAttribute("syncoffset", syncOffset);
        var item = [gCurrCaptionInfo.ID, 'start-time=>' + gCurrCaptionInfo.startTime + gDelimiter_1 + 'end-time=>' + gCurrCaptionInfo.endTime + gDelimiter_1 + "action_status=>" + capErrStatus
                    + gDelimiter_1 + "syncoffset=>" + syncOffset];
    } else {
        var item = [gCurrCaptionInfo.ID, 'start-time=>' + gCurrCaptionInfo.startTime + gDelimiter_1 + 'end-time=>' + gCurrCaptionInfo.endTime + gDelimiter_1 + "action_status=>" + capErrStatus];
    }

    gCurrCaptionInfo.action_status = capErrStatus;

    gObjectAttrList.push(item);
    updateRemoteNodeAttributes();
    UpdateCaptionGridData();
    UpdateErrorInfoGrid(gCurrCaptionInfo.ID);

}

function ClearMultiSelection() {
    $('#captiongrid').jqxGrid('clearselection');
    $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
    ToggleEnableItemsForMultiSelect(false);

}

function ToggleEnableItemsForMultiSelect(bDisable) {
    if (bDisable == true) {
        $("#editTimeBtn").attr("disabled", "disabled");
        $("#errorgrid").jqxGrid("clearselection");
        WAL_disableWidget("errorgrid", "data-jqxgrid", false, true);
    } else {
        $("#editTimeBtn").removeAttr("disabled");
        WAL_disableWidget("errorgrid", "data-jqxgrid", false, false);
    }
}

function TEC_AlignToIndicatorArrowPos() {
    var currentTime = gCaptionWidget.VideoPlayerObject.GetCurrentPTS();
    if (g_CurrentIndicatorID == "startArrowSpan") {
        //first compare the currcaptionstart time with current time. 
        //if more than threhold then seek it to current start position 
        var diff = Math.abs(currentTime - gCurrCaptionInfo.startTime);
        if (diff > 0.8) {
            gCaptionWidget.SeekTo(gCurrCaptionInfo.startTime);
        }
    }
    if (g_CurrentIndicatorID == "endArrowSpan") {
        //first compare the currcaptionstart time with current time. 
        //if more than threhold then seek it to current start position 
        var diff = Math.abs(currentTime - gCurrCaptionInfo.endTime);
        if (diff > 0.8) {
            gCaptionWidget.SeekTo(gCurrCaptionInfo.endTime);
        }
    }
}

function ShowBSTooltip(bFlag) {
    if (bFlag == true) {
        $('[data-toggle="tooltip"]').tooltip({html: true, trigger: 'hover', delay: {show: 500, hide: 100}
        });
        $("[data-toggle='tooltip']").on('shown.bs.tooltip', function () {
            var mytext = $(".tooltip-inner").html();
            getHelpURL(mytext);
        });
        $("[data-toggle='tooltip']").on(' hidden.bs.tooltip', function () {
            gTooltipSrc = 0;
        });

    } else {
        $('[data-toggle="tooltip"]').tooltip('destroy');
    }

}


function getHelpURL(mytext) {
    if (mytext) {
        var textarr = mytext.split('=');
        if (textarr[1] == undefined)
        {
            //Debug_Message("Undefined :" +mytext );
            return;
        }
        textarr = textarr[1].split('>');
        var ref = textarr[0];
        ref = ref.substring(1, ref.length - 1);
        gTooltipSrc = ref;
    }
}


function OnKeyDown(event) {

    var myKey = String.fromCharCode(event.keyCode);
    if ((gTooltipSrc) && (myKey == 'H')) {
        if (gbTextEditMode == false) {
            OpenHelp(gTooltipSrc);
            return;
        }
    }
    /* if(gbTextEditMode == true){
     if(event.target.id == "text_editor"){
     if(event.keyCode == 13){
     setTimeout(function () {
     // reformatCaptionText(); 
     },400);
     
     return ; 
     }
     }
     }*/
    gControlKey = false;
    if (event.ctrlKey == true) {
        gControlKey = true;
    }
    event.stopPropagation();
}

function OpenHelp(URL) {
    //Debug_Message("Clicked on Help");

    //$('#helpFrame').attr('src', URL); 	
    //$('#helpFrame').attr('srcdoc', URL);
    bScrollPrevent = true;
    WAL_showModalWindow('helpDlg', "", "");
    //$("#helpModal").modal(); 
    setTimeout(function () {
        $('#helpFrame').attr('src', URL);
    }, 100);
}


function OnErrorEditBtnMouseMove(event) {
    var node = event.currentTarget;
    var tipText = node.getAttribute("data-original-title");
    gTooltipSrc = tipText;
    //alert("Mouse move event trapped"); 
}


function InitializeTextDetectCaptionGrid() {

    var containerWidth = $('#td_gridcontainer').width();
    var containerHeight = $('#td_gridcontainer').height();
    var winH = Number($('#textdetectionlistdlg').height());
    var winW = Number($('#textdetectionlistdlg').width());
    //var bstop_pos = $('#bottom_screen').position().top; 

    var widthOfContainer = $('#textdetectionlistdlg').width();
    var finalWidth = widthOfContainer;
    //var finalheight = winH * 0.9;
    var finalheight = winH ;
    if (bTDGridInitialized == true)
        return;
    //prepare the data
    g_TDListSource = {
        localdata: gTDInfoList,
        datafields: [
            // {name: 'id', type: 'text', map: '0'},
            {name: 'StartTime', type: 'text', map: '0'},
            {name: 'EndTime', type: 'text', map: '1'},
            {name: 'X', type: 'text', map: '2'},
            {name: 'Y', type: 'text', map: '3'},
            {name: 'W', type: 'text', map: '4'},
            {name: 'H', type: 'text', map: '5'}
        ],
        datatype: "array",
        id: "id"
    };



    //play button for primary caption on translation grid
    var cellrenderer = function (row, datafield, value) {
        var item = $('#td_captiongrid').jqxGrid('getrowdata', row);
        var capID = item.uid;
        var btnid = capID;
        //var htmlstr = '<button id="' + btnid + '" type="button" class="btn btn-s  play_grid_btn" onclick="OnPlayBtnClickTextDetect(event)"><span class="glyphicon glyphicon-play player_span" style="display:block" title="Play"></span></button>';
        var htmlstr = '<button id="td_play_btn_' + btnid + '" data-btnid="' + capID + '"  type="button" class="btn btn-sm  td_play_grid_btn" onclick="OnPlayBtnClickTextDetect(event)"><span class="glyphicon glyphicon-play player_span" style="display:block" title="Play"></span></button>' +
                '<button id="td_pause_btn_' + btnid + '" data-btnid="' + capID + '"  type="button" class="btn btn-sm  td_pause_grid_btn" onclick="OnPauseBtnClickTextDetect(event)" style="display:none"><span class="glyphicon glyphicon-pause player_span" style="display:block" title="Pause"></span></button>';

        return htmlstr;
    }

    var timeinfocellrenderer = function (row, datafield, value) {

        var timestr = ConvertTimeIntoHMSmm(value);
        return timestr;
    }

    var dataAdapter = new $.jqx.dataAdapter(g_TDListSource);
    $("#td_captiongrid").jqxGrid({
        width: finalWidth,
        height: finalheight * 0.8,
        source: dataAdapter,
        theme: gTheme,
        columnsresize: true,
        editable: false,
        filterable: false,
        showfilterrow: false,
        columnsautoresize: true,

        columns: [

            {text: 'ID', datafield: 'id', editable: false, width: '10%', cellsrenderer: cellrenderer},
            {text: 'Start Time', datafield: 'StartTime', editable: true, width: '20%', cellsrenderer: timeinfocellrenderer},
            {text: 'End Time', datafield: 'EndTime', editable: true, width: '20%', cellsrenderer: timeinfocellrenderer},
            {text: 'X-pos', datafield: 'X', editable: true, width: '12%'},
            {text: 'Y-pos', datafield: 'Y', editable: true, width: '12%'},
            {text: 'Width', datafield: 'W', editable: true, width: '12%'},
            {text: 'Height', datafield: 'H', editable: true, width: '12%'}
        ]
    });

    bTDGridInitialized = true;

    $("#td_captiongrid").on('rowselect', function (event) {
        // console.log('caption sleected');
        var args = event.args;
        var item = args.row;
        g_CurrTDRowIndex = args.rowindex;
        g_TD_StartTime = new Number(item.StartTime);
        g_TD_EndTime = new Number(item.EndTime);

        if (g_CurrTDRowIndex > -1) {
            var item = gTDInfoList[g_CurrTDRowIndex];
            var x = item[2];
            var y = item[3];
            /* y = y.substring(0, y.length-1); 
             y = Number(y); 
             y = 100 - y; 
             y += "%"; */
            var w = item[4];
            var h = item[5];
            $("#screentextarea").css({left: x, top: y, width: w, height: h});
            $("#screentextarea").show();
            gCaptionWidget.VideoPlayerObject.SeekTo(g_TD_StartTime);
        }
    });
}

function getTDData() {
    //temporary code to be removed later on 


    var reqArr = [{'request': 'gettextdetectdata'}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "getTDCallback");
    //convert into a list item 
}


function getTDCallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    gTotalTDDuration = 0;
    if (respval != "ERROR") {
        $('#TD_Dlg_okbtn').show();
        var listStr = respval;
        var seglist = listStr.split(";");
        var listlen = seglist.length;
        gTDInfoList = [];
        for (var i = 0; i < listlen; i++) {
            item = seglist[i];
            if (item.length > 2) {
                tempArr = item.split("#");
                startTime = tempArr[0];
                endTime = tempArr[1];
                posArr = tempArr[2].split(",");
                x = posArr[0];
                y = posArr[1];
                w = posArr[2];
                h = posArr[3];
                //gTDInfoList.push([ConvertTimeIntoHMSmm(startTime), ConvertTimeIntoHMSmm(endTime), x, y, w, h]);
                gTDInfoList.push([startTime, endTime, x, y, w, h]);
                gTotalTDDuration += (Number(endTime) - Number(startTime));
            }

        }
        g_TDListSource.localdata = gTDInfoList;
        $('#td_captiongrid').jqxGrid('updatebounddata');

        getTextRoIData();
    } else {
        //hide the export button 
        $('#TD_Dlg_okbtn').hide();
    }

}

function OnPlayBtnClickTextDetect(event) {
    var btnID = event.currentTarget.id;
    var dataBtnID = $("#" + btnID).attr("data-btnid");
    $(".td_play_grid_btn").attr("disabled", true);
    gCurrApplicgPrevApplicationState = gCurrApplicationState;
    gCurrApplicationState = 'PLAYBACK_MODE';
    SetUIState(gCurrApplicationState);
    $("#captionarea").hide();
    $("#td_pause_btn_" + dataBtnID).show();
    $("#td_play_btn_" + dataBtnID).hide();

    if (bTDPause === true) {
        g_TD_StartTime = Number(gCaptionWidget.VideoPlayerObject.GetCurrentPTS());

    }
    //get the subsegment list 
    gCurrSubSegmentPlayList = getsubsgementPlaylist(g_TD_StartTime, g_TD_EndTime);
    //get the RoI corresponding to max duration 
    if (gCurrSubSegmentPlayList.length < 1)
        return;
    retval = getNextSubSegmentRoI(gCurrSubSegmentPlayList, gMaxSubSegDuration);
    if (retval == true) {
        gCaptionWidget.VideoPlayerObject.PlaySegment(gSubSegStartTime, gSubSegEndtime, 'OnSubSegEndHandler', false);
    }
    bTDPause = false;
    //call the playsegment    
}
//OnTDPlayEndHandler()

var bTDPause = false;

function OnPauseBtnClickTextDetect(event) {
    var btnID = event.currentTarget.id;
    var dataBtnID = $("#" + btnID).attr("data-btnid");
    TDPRestoreState();
    $("#td_pause_btn_" + dataBtnID).hide();
    $("#td_play_btn_" + dataBtnID).show();
    bTDPause = true;
}


function OnSubSegEndHandler() {
    //gCaptionWidget.VideoPlayerObject.Pause(); 
    retval = getNextSubSegmentRoI(gCurrSubSegmentPlayList, gMaxSubSegDuration);
    if (retval == true) {
        gCaptionWidget.VideoPlayerObject.PlaySegment(gSubSegStartTime, gSubSegEndtime, 'OnSubSegEndHandler', true);
    } else {
        OnTDPlayEndHandler();
        //alert("End of Segment"); 
    }
}

function OnTDPlayEndHandler() {
    TDPRestoreState();

}


function TDPRestoreState() {
    gCaptionWidget.VideoPlayerObject.Pause();
    // this.playSegmentFlag = false;
    $(".td_play_grid_btn").attr("disabled", false);
    gCurrApplicgPrevApplicationState = gCurrApplicationState;
    gCurrApplicationState = 'NORMAL_MODE';
    SetUIState(gCurrApplicationState);
    $(".SCREENTEXT_AREA").hide();
}

function getTextRoIData() {
    var reqArr = [{'request': 'gettextroidata'}];
    var json_str = JSON.stringify(reqArr);
    sendJSONdata('capella_handler.php', json_str, "getRoICallback");
}

function getRoICallback(respStr) {
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval != "ERROR") {
        var listStr = respval;
        var seglist = listStr.split(";");
        var listlen = seglist.length;
        gRoIInfoList = [];
        for (var i = 0; i < listlen; i++) {
            item = seglist[i];
            if (item.length > 2) {
                tempArr = item.split("@");
                startTime = tempArr[0];
                posInfo = tempArr[1];
                gRoIInfoList.push([startTime, posInfo]);
            }
        }
    }

}

function getsubsgementPlaylist(startTime, endTime) {
    gLastSubsegmentIndex = -1;
    var subseglist = [];
    //search for the start time into the RoI list info 
    var len = gRoIInfoList.length;
    var startRowIdx = 0;
    for (var i = 0; i < len; i++) {
        if ((startTime >= gRoIInfoList[i][0]) && (startTime < gRoIInfoList[i + 1][0])) {
            //found the starting row index 
            subseglist.push(gRoIInfoList[i]);
            startRowIdx = i;
            break;
        }
    }

    for (var k = startRowIdx; k < len; k++) {
        if (endTime >= gRoIInfoList[k][0]) {
            //found the starting row index 
            subseglist.push(gRoIInfoList[k]);
            endRowIdx = k;

        } else
            break;
    }

    return subseglist;
}

function getNextSubSegmentRoI(subsegmentList, maxDur) {
    //stgCurrSubsegmentIndex
    gSubSegStartTime = gSubSegEndtime = 0;
    var dur = 0;
    var subseglen = subsegmentList.length;
    var startIDx = gLastSubsegmentIndex + 1;
    if (startIDx >= subseglen) {
        return false;
    }
    gSubSegStartTime = Number(subsegmentList[startIDx][0]);
    var bLastSubSegment = false;
    var lastSegTimeDiff = Number(subsegmentList[subseglen - 1][0]) - gSubSegStartTime;
    if (lastSegTimeDiff <= maxDur)
        bLastSubSegment = true;
    $(".SCREENTEXT_AREA").hide();
    for (var i = startIDx; i < subseglen; i++) {
        var item = subsegmentList[i];

        var succdur = 0;
        if (i > startIDx)
            succdur = Number(subsegmentList[i][0] - subsegmentList[i - 1][0]);
        dur = dur + succdur;
        //check if dur > maxDur
        if ((dur >= maxDur) || (bLastSubSegment == true)) {
            //stop here 
            if (bLastSubSegment == true) {
                gSubSegEndtime = Number(subsegmentList[subseglen - 1][0]);
                //update last segment
                gLastSubsegmentIndex = subseglen - 1;
            } else {
                gSubSegEndtime = Number(subsegmentList[i - 1][0]);
                //update last segment
                gLastSubsegmentIndex = i - 1;
            }

            //get all RoIs correspinding to the last index 
            var roiStr = subsegmentList[i - 1][1];

            var roiArr = roiStr.split("#");
            //now populate them for the corresponding div node i.e. screentextarea 
            var maxRoINum = Math.min(roiArr.length, gNumMaxTextArea);
            for (var j = 0; j < maxRoINum; j++) {
                //getting RoI Params here 
                var paramArr = roiArr[j].split(",");
                var X = Number(paramArr[0].substring(0, paramArr[0].length - 1));
                X = Math.round(gVideoDisplayDimension.left + (gVideoDisplayDimension.slopeX * X));
                X += "%";

                var Y = Number(paramArr[1].substring(0, paramArr[1].length - 1));
                Y = Math.round(gVideoDisplayDimension.top + (gVideoDisplayDimension.slopeY * Y));
                Y += "%";

                var W = paramArr[2];
                var H = paramArr[3];
                var id = "screentextarea" + j;
                $("#" + id).css({left: X, top: Y, width: W, height: H, display: 'block'});
            }
            return true;
        }
    }
    return true;
}

function getTextDatafromCaptionNode(capNode) {
    text = getNodeTextdata(capNode);
    return text;
}

function getHTMLAttributeNameValue(attrName, attrValue) {

    var attrObj = new sAttributeNameValue();
    //look up into mapping table 
    retval = attrName.search('data-');
    if (retval == -1)
        attrName = "data-" + attrName;
    attrObj.attrName = gMapFromNativeToHTML[attrName];
    attrObj.attrValue = attrValue;
    //do special processing if required 
    var attrval = gMapValuesXMLToHTML[attrValue];
    if (attrval)
        attrObj.attrValue = attrval;
    // get html attribute name 
    //also map the attribute value if required    
    //return the 

    if ((attrObj.attrName == "left") || (attrObj.attrName == "top") || (attrObj.attrName == "width") || (attrObj.attrName == "height")) {
        var tempval = Number(attrObj.attrValue.substring(0, attrObj.attrValue.length - 1));
        if (attrObj.attrName == 'left')
            tempval = Math.round((gVideoDisplayDimension.slopeX * tempval) + gVideoDisplayDimension.left);

        if (attrObj.attrName == 'top')
            tempval = Math.round(gVideoDisplayDimension.top + (gVideoDisplayDimension.slopeY * tempval));

        if (attrObj.attrName == 'width')
            tempval = Math.round((gVideoDisplayDimension.width * tempval) / 100);

        if (attrObj.attrName == 'height')
            tempval = Math.round((gVideoDisplayDimension.height * tempval) / 100);

        attrObj.attrValue = tempval + "%";
    }
    if ((attrObj.attrName === undefined) || (attrObj.attrValue === undefined))
        return 0;
    return attrObj;

}

/*
 * get the list of attributes 
 * get corresponding hTML map for supported attributes 
 * return list of style information in a string 
 */
function getStyleAttributeListWithHTMLMapping(Node) {

    var styleStr = "";
    var y = 0;
    var height = 0;
    var bWait = true;
    if (Node.hasAttributes()) {
        var attrs = Node.attributes;
        var output = "";
        for (var i = attrs.length - 1; i >= 0; i--) {
            //output += attrs[i].name + "->" + attrs[i].value;
            var attrName = attrs[i].name;
            var attrVal = attrs[i].value;
            var attrObj = getHTMLAttributeNameValue(attrName, attrVal);
            if (attrObj) {
                styleStr += (attrObj.attrName + ":" + attrObj.attrValue + ";");
            }

        }//for 
        //check for displayAlign here  
        if (styleStr.length > 0) {
            return styleStr;
        }

    }//if attribute present 
    return "";
}
//style="margin-top:7.5%; text-align:center; margin-left:0%"
var gTextdata = "";
function getNextNodeData(inputNode) {

    let childList = inputNode.childNodes;
    for (var j = 0; j < childList.length; j++) {
        let node = childList[j];
        if (node.nodeName.toUpperCase() == "#TEXT") {
            gTextdata += node.textContent;
        } else if (node.nodeName.toUpperCase() == "BR") {
            gTextdata += "|";
        } else if ((node.nodeName.toUpperCase() == "SPAN") || (node.nodeName.toUpperCase() == "P")) {
            var styleValue = getStyleAttributeListWithHTMLMapping(node);
            if (styleValue.length > 1) {
                node.setAttribute("style", styleValue);
            }

            node.setAttribute("style", styleValue);
            getNextNodeData(node);
        }
    }//for 
    return;
}



function addNodeIndicators(inputNode) {

    if (inputNode == null)
        return;
    var node = inputNode;
    if ((node.nodeName.toLowerCase() == "p") || (node.nodeName.toLowerCase() == "span")) {
        node.setAttribute("class", "STYLE_BORDER");
        node.setAttribute("onclick", "OnStyleBorderClick(event)");
        ID = gNodeIDseed + "_" + gLocalNodeCount;
        gLocalNodeCount++;
        node.setAttribute("id", ID);
        var childList = node.childNodes;
        for (var j = 0; j < childList.length; j++) {
            var node = childList[j];
            if ((node.nodeName.toUpperCase() == "SPAN") || (node.nodeName.toUpperCase() == "P")) {
                addNodeIndicators(node);
            }
        }
    }

}

function removeNodeIndicators(inputNode, bRemoveStyle = false) {

    if (inputNode == null)
        return;
    var node = inputNode;
    if ((node.nodeName.toLowerCase() == "p") || (node.nodeName.toLowerCase() == "span")) {
        node.removeAttribute("class");
        node.removeAttribute("onclick");
        node.removeAttribute("id");
        if (bRemoveStyle == true) {
            node.removeAttribute("style");
        }
        childList = node.childNodes;
        for (var j = 0; j < childList.length; j++) {
            var node = childList[j];
            if ((node.nodeName.toUpperCase() == "SPAN") || (node.nodeName.toUpperCase() == "P")) {
                removeNodeIndicators(node, bRemoveStyle);
            }
        }
}

}





function getNodeTextdata(StartNode) {
    if (StartNode.nodeName.toUpperCase() == "TEXTDATA")
        var rootNode = StartNode;
    else if (StartNode.nodeName.toUpperCase() == "CAPTION") {
        var rootNode = StartNode.firstElementChild;
    }
    gTextdata = "";
    getNextNodeData(rootNode);
    return gTextdata;
}


/*
 * Depending on type of node it iwll return array of parameters 
 * if caption then fetch the information from region id if given else from the node itself else nothing s
 */
function getDimensionalInfo(nodeType, Node) {
    var currNode = Node;
    var regionID = currNode.getAttribute("data-region");
    if (regionID)
        currNode = gAnalysisXMLDoc.getElementById(regionID);
    var X = currNode.getAttribute("X");
    var Y = currNode.getAttribute("Y");
    var width = currNode.getAttribute("width");
    var height = currNode.getAttribute("height");
}

/*
 * 
 * @param {type} Node
 * @returns {undefined}
 * returns the attributes defined within the nodes along with the corresponding html attribute mapping and values whereever applicable in
 * form of dictionary 
 * these can be used to construct the styling , further processing if required, for displaying the attributes 
 */
function getNodeAttributes(Node) {
    var attrList = new Dictionary();
    if (Node.hasAttributes()) {
        var attrs = Node.attributes;
        var output = "";
        for (var i = attrs.length - 1; i >= 0; i--) {
            //output += attrs[i].name + "->" + attrs[i].value;
            var attrName = attrs[i].name;
            var attrVal = attrs[i].value;
            var attrObj = getHTMLAttributeNameValue(attrName, attrVal);
            var item = 0;
            if (attrObj)
                item = [attrVal, attrObj.attrName, attrObj.attrValue];
            else
                item = [attrVal, 0, 0];
            attrList.set(attrName, item);
        }//for             

    }//if attribute present 
    return attrList;
}

function getonlyAttributes(Node) {

    var list = [];

    if ((Node) && (Node.hasAttributes())) {
        var attrs = Node.attributes;
        var output = "";
        for (var i = attrs.length - 1; i >= 0; i--) {
            //output += attrs[i].name + "->" + attrs[i].value;
            var attrName = attrs[i].name;
            var attrVal = attrs[i].value;
            if ((attrName.toLowerCase() == "y") || (attrName.toLowerCase() == "x") || (attrName.toLowerCase() == "width") || (attrName.toLowerCase() == "height")) {
                var tempVal = Number(attrVal)
            }
            var idx = attrName.search('data-');
            if (idx != -1) {
                var retval = gMapFromNativeToHTML[attrName];
                var bFlag = "N";
                if (retval)
                    bFlag = "Y";
                attrName = attrName.replace("data-", "");
                if ((attrName.toLowerCase() == "style") || (attrName.toLowerCase() == "region"))
                    bFlag = "Y";
                list.push([attrName, attrVal, bFlag]); //last column denotes if editable or not             
            }


        }//for             

    }//if attribute present 
    return list;
}

var gcurrentStyleNode = 0;
function OnStyleBorderClick(event) {
    if (gcurrentStyleNode)
        gcurrentStyleNode.setAttribute("class", "STYLE_BORDER");
    gcurrentStyleNode = event.currentTarget;
    gcurrentStyleNode.setAttribute("class", "STYLE_BORDER_CLICKED");

    if ((gcurrentStyleNode.nodeName.toLowerCase() == "span") || (gcurrentStyleNode.nodeName.toLowerCase() == "p"))
        WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
    else
        WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, true);
    /* else gcurrentStyleNode.nodeName.toLowerCase() == "p"){
     var textSel = document.getSelection();
     var myrange = textSel.getRangeAt(0);
     if(myrange.startOffset != myrange.endOffset)
     WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
     else
     WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, true);
     }*/
    //now populate the grid 
    updateSpanNodeAttributeInfo(gcurrentStyleNode);

    event.stopPropagation();


}


function OnCPLEditorBtnClick(event) {

    // alert("Color btn click"); 

    var nodeID = event.currentTarget.id;

    switch (nodeID) {

        case 'bkgrndcolor_btn':
            var targetNodeID = gcurrentStyleNode.id;
            initColVal = gcurrentStyleNode.style.backgroundColor; //('stroke');		
            var pos = $('#cpleditordlg').position();
            var width = $('#cpleditordlg').width();
            pos.left = pos.left + width;
            WAL_showColorPickerWidgetAtPos('colorpickwidget', 'callbackColorHandler', '', pos.left, pos.top, 'background-color', initColVal, targetNodeID, false);
            //WAL_showColorPickerWidgetAtPosByNode(widgetID, callbackFn,refID, left, top, 'background-color', initAttrVal, gcurrentStyleNode, bHideheader)
            break;
        case 'color_btn':
            var targetNodeID = gcurrentStyleNode.id;
            initColVal = gcurrentStyleNode.style.color; //('stroke');		
            var pos = $('#cpleditordlg').position();
            var width = $('#cpleditordlg').width();
            pos.left = pos.left + width;
            WAL_showColorPickerWidgetAtPos('colorpickwidget', 'callbackColorHandler', '', pos.left, pos.top, 'color', initColVal, targetNodeID, false);
            //WAL_showColorPickerWidgetAtPosByNode(widgetID, callbackFn,refID, left, top, 'background-color', initAttrVal, gcurrentStyleNode, bHideheader)
            break;
        case 'CPL_Preview_btn':
            //first remove indicators from cloned node 
            var textareaNode = $('#text_editor')[0];
            // var pNode = textareaNode.firstElementChild; 
            // gCopiedPNode = pNode.cloneNode(true); 
            if (gCopiedPNode) {
                var previewNode = textareaNode.firstElementChild;
                var copiedpreviewNode = previewNode.cloneNode(true);
                //now clone this node                               
                removeNodeIndicators(copiedpreviewNode);
                var captionArea = $("#" + gCaptionWidget.captionAreaNode.id)[0];
                capText = copiedpreviewNode.outerHTML;
                captionArea.innerHTML = capText;
                //now alsoe the Caption Region

                var captionareaPNode = captionArea.firstElementChild;
                if (captionareaPNode.nodeName.toLowerCase() != "p")
                    return;


                updateCurrentNodeStyle(captionareaPNode, false);
                //now copy the same node 
                //gLocalNodeCount = 0; 
                addNodeIndicators(copiedpreviewNode);
                textareaNode.innerHTML = copiedpreviewNode.outerHTML;
                setTimeout(function () {
                    WAL_TriggerEvent("click", $('#text_editor')[0].firstElementChild.id);
                }, 400);
            }
            break;
        case 'add_attribute_btn':
            var attrname = WAL_getDropdownListSelection("attr_list_ddl");
            var attrval = getAttrValueFromListMap(attrname);
            var htmlAttrname = gMapFromNativeToHTML['data-' + attrname];
            var textSel = document.getSelection();

            if (textSel.rangeCount != 0) {
                var myrange = textSel.getRangeAt(0);
                if (myrange.startOffset != myrange.endOffset) {
                    addSpanNode(attrname, attrval);
                    break;
                }
            }
            if (gcurrentStyleNode) {
                gcurrentStyleNode.setAttribute("data-" + attrname, attrval);
                $("#" + gcurrentStyleNode.id).css(htmlAttrname, attrval);
                updateSpanNodeAttributeInfo(gcurrentStyleNode);
            }


            break;
        case "edittext_btn":
            $("#text_editor").attr("contenteditable", true);
            $("#edittext_btn").hide();
            $("#savetext_btn").show();
            //disable all otehr controls
            WAL_disableWidget("attributegrid", "data-jqxgrid", false, true);
            WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, true);
            WAL_disableWidget("CPL_Preview_btn", "data-button", false, true);
            WAL_disableWidget("CPLE_okbtn", "data-button", false, true);
            WAL_disableWidget("CPLE_cancelbtn", "data-button", false, true);
            $("#add_attribute_btn").attr("disabled", "disabled");
            break;

        case "savetext_btn":
           /* $("#text_editor").removeAttr("contenteditable");
            $("#edittext_btn").show();
            $("#savetext_btn").hide();
            reformatCaptionText();
            //now validate the text 
            gTextdata = "";
            getNextNodeData($("#text_editor")[0]);
            if (gTextdata.length > 1)
                checkCPL_CPSValues(gTextdata);
                                */
            saveEditedText(); 

            WAL_disableWidget("attributegrid", "data-jqxgrid", false, false);
            WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
            WAL_disableWidget("CPL_Preview_btn", "data-button", false, false);
            WAL_disableWidget("CPLE_okbtn", "data-button", false, false);
            WAL_disableWidget("CPLE_cancelbtn", "data-button", false, false);
            $("#add_attribute_btn").removeAttr("disabled");

            break;
            //now copy the outerHTML into the Captionarea 
        default:
            break;
    }
}

function saveEditedText(){
    $("#text_editor").removeAttr("contenteditable");
    $("#edittext_btn").show();
    $("#savetext_btn").hide();
    reformatCaptionText();
    //now validate the text 
    gTextdata = "";
    getNextNodeData($("#text_editor")[0]);
    if (gTextdata.length > 1)
        checkCPL_CPSValues(gTextdata);
}

function callbackColorHandler(tgtNodeID, attr, value) {
    $('#' + tgtNodeID).css(attr, value);
    updateNodeAttributeValue(tgtNodeID, attr, value);
}

function updateNodeAttributeValue(nodeID, attrName, attrValue) {

    var nativeAttrName = gMapFromHTMLToNative[attrName];
    var nativeValue = attrValue;
    if (nativeAttrName) {
        $("#" + nodeID).attr(nativeAttrName, nativeValue);
    }
}

function OnRegStyleEditorBtnClick(event) {


}
var newID = 0;

function addSpanNode(attrName, attrVal) {
    var textSel = document.getSelection();
    var myrange = textSel.getRangeAt(0);
    newNode = document.createElement("span");
    stylename = attrName;
    stylevalue = attrVal;

    var attrObj = getHTMLAttributeNameValue(stylename, stylevalue);
    var attrHTMLval = gMapValuesXMLToHTML[stylevalue];
    newNode.setAttribute('style', attrObj.attrName + ":" + attrObj.attrValue);
    newNode.setAttribute('class', "STYLE_BORDER");
    newNode.setAttribute("onclick", "OnStyleBorderClick(event)");
    newNode.setAttribute("data-" + stylename, stylevalue);
    newID = gNodeIDseed + "_" + Math.floor((Math.random() * 1000));
    newNode.setAttribute("id", newID);
    var startNode = myrange.startContainer;
    newNode.appendChild(myrange.extractContents());
    //range.selectNode(startNode);
    myrange.insertNode(newNode);

    $(".STYLE_BORDER_CLICKED").attr("class", "STYLE_BORDER");
    gcurrentStyleNode = 0;


    var currNode = getCleanHTML($('#text_editor')[0]);
    //now clone this node              
    //removeNodeIndicators(currNode);  
    //now copy the same node 
    gLocalNodeCount = 0;
    //addNodeIndicators(currNode); 
    $('#text_editor')[0].innerHTML = currNode.outerHTML;
    setTimeout(function () {
        WAL_TriggerEvent("click", newID);
    }, 400);

    //gAttrInfoList = getonlyAttributes(gCurrentCaptionNode.firstElementChild.firstElementChild);
    // updateAttributeGrid(gAttrInfoList); 
    //var htmltext = $("#text_editor")[0].innerHTML; 
    //alert(htmltext); 
}

function updateSpanStyleAttributeDropdownlist(attrList, totalListAttr) {
    //run a loop 
    //update the list
    var currlist = [];
    WAL_UpdateDropDownList("attr_list_ddl", totalListAttr);
    //go through the attrlist one by one and disable if item found     
    var listlen = attrList.length;
    for (var i = 0; i < listlen; i++) {
        WAL_disableDropDownListItemByValue("attr_list_ddl", attrList[i][0]);
    }
}

function updateSpanNodeAttributeInfo(Node) {
    var styleattrList = getonlyAttributes(Node);
    //update attribute drop down list 
    if (Node.nodeName.toUpperCase() == "SPAN")
        updateSpanStyleAttributeDropdownlist(styleattrList, gStyleSpanAttrList);
    else if (Node.nodeName.toUpperCase() == "P")
        updateSpanStyleAttributeDropdownlist(styleattrList, gStylePAttrList);

    updateAttributeGrid(styleattrList);
}

var listipID = 0;
function OnCPLGridButtonHandler(event) {
    var btnID = event.currentTarget.id;
    //alert("Btn click = " + btnID); 
    var bNumInputBtn = $("#" + btnID).hasClass("numberinput");
    var bNumInputApplyBtn = $("#" + btnID).hasClass("numberinput_apply");
    var bNumInputCancelBtn = $("#" + btnID).hasClass("numberinput_cancel");

    if (bNumInputBtn == true) {
        var clickBtnID = btnID;
        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";
        var cancelBtnID = attrname + "_cancel_btn";
        var numipID = attrname + "_number_ip";
        var ipvalue = gCurrentRowItem.attribute_value;
        //var symbol = getSymbol(ipvalue); 

        var tempstrarr = $("#" + clickBtnID).attr("data-params").split("-");
        var min = Number.parseFloat(tempstrarr[0]);
        var max = Number.parseFloat(tempstrarr[1]);
        var step = Number.parseFloat(tempstrarr[2]);
        var dec_digit = Number.parseFloat(tempstrarr[3]);
        var symbol = tempstrarr[4];

        var retval = $("#" + numipID).hasClass("jqx-input");
        if (retval != true) {
            WAL_createNumberInputWithSymbol(numipID, 60, 22, "", true, max, min, step, symbol, dec_digit);
            //WAL_createNumberInputWithSymbol(ID, Width, Height, HandlerFnForValueChange, bSpinButton, maxValue, minValue, stepValue, symbol, decimailDigits=0)
        }
        if (gCurrentRowItem.attribute_name == attrname) {
            WAL_setNumberInputValue(numipID, gCurrentRowItem.attribute_value, false);
        }
        $("#" + clickBtnID).hide();
        //$("#xpos_number_ip").show(); 
        $("#" + numipID).css({"display": "inline-block"});
        $("#" + applyBtnID).show();
        $("#" + cancelBtnID).show();
        return;
    }
    if ((bNumInputApplyBtn == true) || (bNumInputCancelBtn === true)) {

        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";
        var clickBtnID = attrname + "_btn";
        var numipID = attrname + "_number_ip";
        // var value = WAL_getMaskedInputValue(numipID);          
        var rawvalue = $('#' + numipID).val();
        var symbol = $('#' + numipID).jqxNumberInput('symbol');
        var value = rawvalue + symbol;
        $("#" + numipID).hide();
        $("#" + clickBtnID).show();
        $("#" + applyBtnID).hide();

        var cancelBtnID = attrname + "_cancel_btn";
        $("#" + cancelBtnID).hide();
        //update the cloned node now   
        if (bNumInputApplyBtn == true) {
            gcurrentStyleNode.setAttribute("data-" + attrname, value);
            gRSAttrInfoList = getonlyAttributes(gcurrentStyleNode);
            updateCurrentNodeStyle(gcurrentStyleNode);
        }
        return;
    }
    var bColInputBtn = $("#" + btnID).hasClass("colorinput");
    var bColInputApplyBtn = $("#" + btnID).hasClass("colorinput_apply");
    var bColInput_cancel = $("#" + btnID).hasClass("colorinput_cancel");
    if (bColInputBtn == true) {
        var clickBtnID = btnID;
        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";

        var colipID = attrname + "_col_ip_btn";
        var ipvalue = gCurrentRowItem.attribute_value;
        if (gCurrentRowItem.attribute_name == attrname) {
            $("#" + colipID).css({'background-color': ipvalue});
        }
        $("#" + clickBtnID).hide();
        $("#" + colipID).css({"display": "inline-block"});
        $("#" + applyBtnID).show();

        var cancelBtnID = attrname + "_cancel_btn";
        $("#" + cancelBtnID).show();
        return;
    }
    if ((bColInputApplyBtn == true) || (bColInput_cancel === true)) {

        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";
        var clickBtnID = attrname + "_btn";
        var colipID = attrname + "_col_ip_btn";

        // var value = WAL_getMaskedInputValue(numipID);          
        var value = $('#' + colipID)[0.].style.backgroundColor;

        $("#" + colipID).hide();
        $("#" + clickBtnID).show();
        $("#" + applyBtnID).hide();

        var cancelBtnID = attrname + "_cancel_btn";
        $("#" + cancelBtnID).hide();

        //update the cloned node now   
        if (bColInputApplyBtn == true) {
            gcurrentStyleNode.setAttribute("data-" + attrname, value);
            gRSAttrInfoList = getonlyAttributes(gcurrentStyleNode);
            updateCurrentNodeStyle(gcurrentStyleNode);
        }
        return;
    }

    var bListInput = $("#" + btnID).hasClass("listinput");
    var bListInput_apply = $("#" + btnID).hasClass("listinput_apply");
    var bListInput_cancel = $("#" + btnID).hasClass("listinput_cancel");


    if (bListInput == true) {
        var clickBtnID = btnID;
        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";
        listipID = attrname + "_ddl";
        var ipvalue = gCurrentRowItem.attribute_value;
        var retval = $("#" + listipID).hasClass("jqx-dropdownlist");
        if (retval != true) {
            var listItem = ["None"];

            if ((attrname.toUpperCase() == "REGION") || (attrname.toUpperCase() == "STYLE")) {
                WAL_createDropdownList(listipID, '75', '22', false, listItem, "", '120', '100');
                $("#" + attrname + "_view_btn").show();
                setTimeout(function () {
                    updateRegionStyleList(listipID, attrname.toUpperCase());

                }, 100);
            } else {
                var listItem = $("#" + btnID).attr("data-params").split("#");
                WAL_createDropdownList(listipID, '75', '22', false, listItem, "", '120', '100');
            }
        }
        setTimeout(function () {
            if (gCurrentRowItem.attribute_name == attrname) {
                WAL_SetItemByValueInList(listipID, gCurrentRowItem.attribute_value, true);
            }
        }, 300);

        $("#" + clickBtnID).hide();
        $("#" + listipID).css({"display": "inline-block"});
        $("#" + applyBtnID).show();
        var cancelBtnID = attrname + "_cancel_btn";
        $("#" + cancelBtnID).show();
        return;
    }
    if ((bListInput_apply == true) || (bListInput_cancel == true)) {

        var attrname = $("#" + btnID).attr("data-attrname");
        var applyBtnID = attrname + "_apply_btn";
        var clickBtnID = attrname + "_btn";
        var listipID = attrname + "_ddl";
        if ((attrname.toUpperCase() == "REGION") || (attrname.toUpperCase() == "STYLE"))
            $(".listinput_view").hide();
        $("#" + listipID).hide();
        $("#" + clickBtnID).show();
        $("#" + applyBtnID).hide();


        var cancelBtnID = attrname + "_cancel_btn";
        $("#" + cancelBtnID).hide();
        var value = WAL_getDropdownListSelection(listipID);
        //update the cloned node now    
        if (bListInput_apply == true) {
            gcurrentStyleNode.setAttribute("data-" + attrname, value);
            gRSAttrInfoList = getonlyAttributes(gcurrentStyleNode);
            updateCurrentNodeStyle(gcurrentStyleNode);
        }
        return;
    }


    switch (btnID) {
        case "backgroundcolor_col_ip_btn"   :
        case "color_col_ip_btn":
            var targetNodeID = btnID;
            initColVal = $("#" + targetNodeID)[0].style.backgroundColor; //('stroke');		
            var pos = $('#regstyleeditordlg').position();
            var width = $('#regstyleeditordlg').width();
            pos.left = pos.left + width;
            WAL_showColorPickerWidgetAtPos('colorpickwidget', 'RegStylecallbackColorHandler', '', pos.left, pos.top, 'background-color', initColVal, targetNodeID, false);
            break;
        case 'region_view_btn':
            showRSEditorDlg("REGION", gCurrentRowItem.attribute_value, true);
            break;
        case 'style_view_btn':
            showRSEditorDlg("STYLE", gCurrentRowItem.attribute_value, true);
            break;
        default:
            break;
    }

}

function updateCurrentNodeStyle(node, bIgnoreDim = true) {
    if ((node.nodeName.toLowerCase() != "p") && (node.nodeName.toLowerCase() != "span"))
        return "";
    var refstyleStr = "";
    var pNode = 0;
    // var styleValue = getStyleAttributeListWithHTMLMapping(node);    
    if (node.nodeName.toLowerCase() === "p") {
        var parentAreaNode = node.parentNode;
        pNode = node;
        if (parentAreaNode == null) {
            alert("Parent Node Null");
            return;
        }
        var regID = node.getAttribute("data-region");
        var currRegNode = gAnalysisXMLDoc.getElementById(regID);
        var regionAttrlist = getonlyAttributes(currRegNode);
        var regionStr = "";
        for (var j = 0; j < regionAttrlist.length; j++) {
            var attrName = regionAttrlist[j][0];
            var attrValue = regionAttrlist[j][1];
            var attrObj = getHTMLAttributeNameValue(attrName, attrValue);
            if ((bIgnoreDim === true) && ((attrName.toLowerCase() == "x") || (attrName.toLowerCase() === "y") || (attrName.toLowerCase() === "width") || (attrName.toLowerCase() === "height"))) {
                attrObj = 0;
            }
            if (attrObj) {
                regionStr += (attrObj.attrName + ":" + attrObj.attrValue + ";");
            }
        }
        if (bIgnoreDim === false)
            regionStr += 'position:absolute';

        parentAreaNode.style = regionStr;

        //now getting style reference val;ue 
        var styleID = node.getAttribute("data-style");
        var currStyleNode = gAnalysisXMLDoc.getElementById(styleID);
        var styleAttrlist = getonlyAttributes(currStyleNode);

        for (var j = 0; j < styleAttrlist.length; j++) {
            var attrName = styleAttrlist[j][0];
            var attrValue = styleAttrlist[j][1];
            var attrObj = getHTMLAttributeNameValue(attrName, attrValue);
            if ((attrName.toLowerCase() == "x") || (attrName.toLowerCase() === "y") || (attrName.toLowerCase() === "width") || (attrName.toLowerCase() === "height")) {
                attrObj = 0;
            }
            if (attrObj) {
                refstyleStr += (attrObj.attrName + ":" + attrObj.attrValue + ";");
            }
        }
    }//p  

    //now update the reference to style ID   
    var Attrlist = getonlyAttributes(node);
    var inlinestyleValue = "";
    for (var j = 0; j < Attrlist.length; j++) {
        var attrName = Attrlist[j][0];
        var attrValue = Attrlist[j][1];
        var attrObj = getHTMLAttributeNameValue(attrName, attrValue);
        if ((attrName.toLowerCase() == "x") || (attrName.toLowerCase() == "y") || (attrName.toLowerCase() == "width") || (attrName.toLowerCase() == "height")) {
            attrObj = 0;
        }
        if (attrObj) {
            inlinestyleValue += (attrObj.attrName + ":" + attrObj.attrValue + ";");
        }
    }
    //styleValue += regionStr; 
    var netstylevalue = refstyleStr + inlinestyleValue;
    if (netstylevalue.length > 1) {
        node.setAttribute("style", netstylevalue);
    }

    //now tap the inline positions 
    if ((bIgnoreDim === false) && (pNode)) {
        var x = pNode.getAttribute("data-x");
        if (x)
            parentAreaNode.style.left = x;

        var y = pNode.getAttribute("data-y");
        if (y)
            parentAreaNode.style.top = y;

        var width = pNode.getAttribute("data-width");
        if (width)
            parentAreaNode.style.width = width;

        var height = pNode.getAttribute("data-height");
        if (height)
            parentAreaNode.style.height = height;
    }


    updateAttributeGrid(Attrlist);
}

function reformatCaptionText() {

    var textareaNode = $('#text_editor')[0];
    if (gCopiedPNode) {
        var previewNode = getCleanHTML(textareaNode);
        var prevPNode = textareaNode.firstElementChild;
        if (prevPNode) {
            textareaNode.replaceChild(previewNode, prevPNode);
        }
        // textareaNode.innerHTML = previewNode.outerHTML; 
    }
}


function updateRegionStyleList(ddlID, type) {

    var Nodes = gAnalysisXMLDoc.getElementsByTagName(type);
    var listItem = [];
    for (var k = 0; k < Nodes.length; k++) {
        var ID = Nodes[k].getAttribute("id");
        listItem.push(ID);
    }
    //clear drop down list 
    WAL_clearAllFromDropdownList(ddlID);
    WAL_UpdateDropDownList(ddlID, listItem);
}

function showRSEditorDlg(type, ID, bShow) {
    if (bShow == true) {
        if ((type.toUpperCase() === "REGION") || (type.toUpperCase() === "STYLE")) {
            var Node = gAnalysisXMLDoc.getElementById(ID);
            if (Node) {
                gRSAttrInfoList = [];
                gCurrentRSNodeID = ID;
                gCurrRSID = ID;
                //make a copy 
                gClonedNode = Node.cloneNode(true);
                updateNodeAttributeInfo(gClonedNode);
                $(".TOP_ROW").hide();
                $("#regstyleclosebtn").show();
                $("#regstyleokbtn").hide();
                var textEditMode = gbTextEditMode;
                WAL_showWindow("cpleditordlg", false, "");
                if (textEditMode === true)
                    gbTextEditMode = true;
                WAL_showWindow("regstyleeditordlg", true, "region_edtior_icon");
            }
        }//REGION
    } else {
        if ((type.toUpperCase() === "REGION") || (type.toUpperCase() === "STYLE")) {
            $(".TOP_ROW").show();
            $("#regstyleclosebtn").hide();
            $("#regstyleokbtn").show();
            WAL_showWindow("regstyleeditordlg", false);
            if (gbTextEditMode === false)
                return;
            InvokeCaptionEditor();
            setTimeout(function () {
                WAL_TriggerEvent("click", "CPL_Preview_btn");
            }, 250);


        }//REGION
    }
}

function checkCPL_CPSValues(text) {

    // first split the text into multiple lines
    var lineArr = text.split("|");

    var lineCount = lineArr.length;
    var cpl = 0;
    var cps = 0;
    var localMaxCPL = 0;
    var localMaxCPLIndex = -1;

    // now for each line calculate the characters 
    for (var i = 0; i < lineCount; i++) {
        // update the localMaxCPL and correspinding to local line number 
        var tempcpl = lineArr[i].length;
        localMaxCPL = Math.max(localMaxCPL, tempcpl);
        if (localMaxCPL === tempcpl)
            localMaxCPLIndex = i;

        cps += tempcpl;
        //update CPS value as well     
    }
    //now compare localmax CPL if violated then flash error
    var duration = Number(gCurrCaptionInfo.endTime) - Number(gCurrCaptionInfo.startTime);
    if (duration > 0) {
        with (Math) {
            cps = round((cps / Number(duration)));
        }
        //also compare CPS with maxCPS 
        $("#current_cps")[0].innerHTML = cps;
        $("#current_cpl")[0].innerHTML = localMaxCPL;

        validateCPLText(localMaxCPL, cps);
    }

}

function CPLEditorInit() {
    $("#text_editor").removeAttr("contenteditable");
    $("#edittext_btn").show();
    $("#savetext_btn").hide();
    //now validate the text 
    WAL_disableWidget("attributegrid", "data-jqxgrid", false, false);
    WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
    WAL_disableWidget("CPL_Preview_btn", "data-button", false, false);
    WAL_disableWidget("CPLE_okbtn", "data-button", false, false);
    WAL_disableWidget("CPLE_cancelbtn", "data-button", false, false);
    $("#add_attribute_btn").removeAttr("disabled");

}

function OnTextSelection(event) {
    var nodeID = event.currentTarget.id;
    if (nodeID == "text_editor") {
        var textSel = document.getSelection();
        var myrange = textSel.getRangeAt(0);
        if (myrange.startOffset != myrange.endOffset) {
            // WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false); 
            WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, false);
        } else
            WAL_disableWidget("attr_list_ddl", "data-jqxDropDownList", false, true);

        event.stopPropagation();
    }

}


function FilterErrorsWithMultiParam(iperrorStatus, ipactionStatus, iperrorType) {
    gCaptionInfoList = [];
    captionNodeList = gAnalysisXMLDoc.getElementsByTagName("CAPTION");
    if (captionNodeList.length < 1)
        return;
    var iperrorStatus = iperrorStatus.toUpperCase();
    var ipactionStatus = ipactionStatus.toUpperCase();
    var iperrorType = iperrorType.toUpperCase();
    var retval = false;

    if ((iperrorStatus === "ALL") && (ipactionStatus === "NONE") && (iperrorType === "NONE"))
        bFilterOn = false;
    else
        bFilterOn = true;

    for (var i = 0; i < captionNodeList.length; i++) {
        var node = captionNodeList[i];
        //trying to find value of each param as found in the node 
        var errorStatus = node.getAttribute("error_status").toUpperCase();
        var actionStatus = node.getAttribute("action_status").toUpperCase();
        var errorType;
        bAddToList = false;
        if (iperrorType != "NONE") {
            retval = IsChildNode(node, iperrorType);
            if (retval == true) {
                errorType = iperrorType;
                bAddToList = true;
            } else
                errorType = 'NONE';
        } else
            errorType = 'NONE';

        if (iperrorStatus === 'ALL')
            errorStatus = "ALL";
        if (ipactionStatus === "NONE")
            actionStatus = "NONE";

        if ((iperrorStatus === errorStatus) && (ipactionStatus === actionStatus) && (iperrorType === errorType))
            bAddToList = true;
        else
            bAddToList = false;

        if (bAddToList == true) {
            var id = node.id;
            var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time'));
            var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time'));
            var duration = node.getAttribute('duration');
            var text = "";
            var xpos = node.getAttribute("x");
            var ypos = node.getAttribute("y");
            text = getTextDatafromCaptionNode(node);
            var errstatus = node.getAttribute("error_status");
            var infoArr = [id, starttime, endtime, text, duration, errstatus, xpos, ypos, actionStatus];
            gCaptionInfoList.push(infoArr);
        }

    }//for 
    g_CaptionListSource.localdata = gCaptionInfoList;
    // $("#captiongrid").jqxGrid({ selectionmode: 'singlerow'}); 
    $('#captiongrid').jqxGrid('updatebounddata');
    setTimeout(function () {
        //update count value when filter is applied
        updaterowcountvalue();

    }, 100);
    setTimeout(function () {
        $("#captiongrid .jqx-grid-cell").css({color: gCaptionGridTextColor});
        $("#captiongrid").jqxGrid({selectionmode: 'singlerow'});
        if (gCurrentRowID != 0) {
            var index = $('#captiongrid').jqxGrid('getrowboundindexbyid', gCurrentRowID);
            $('#captiongrid').jqxGrid('selectrow', index);
            var displaylen = index + 2;
            $('#captiongrid').jqxGrid('ensurerowvisible', displaylen);
            ProcessGridSelection(index);
        }


    }, 100);

}




function isAllChecksFalse() {
    if (gErrorCheckXML) {
        var istrue = true;
        var checkNodeList = gErrorCheckXML.getElementsByTagName("CHECK");
        if (checkNodeList.length < 1)
            return;
        for (let i = 0; i < checkNodeList.length; i++) {
            var node = checkNodeList[i];
            var bCheck = node.getAttribute('check');
            if (node.id == "MISSINGTEXTCHECK") {
//                if (bCheck.toLowerCase() == 'true') {
//                    //disable missing analysis icon
//
//                    $("#re_analyse_div").addClass("disabledbutton");
//                    //$("#re_analyse_div").children().prop("disabled", true);
//                } else {
//                    //$("#re_analyse_div").children().prop("disabled", false);
//                    $("#re_analyse_div").removeClass("disabledbutton");
//                }


            } else if (node.id == "SYNCCHECK") {
                if (bCheck.toLowerCase() == 'true') {
                    //disable missing analysis icon

                    $("#auto_correct_div").removeClass("disabledbutton");
                    //$("#re_analyse_div").children().prop("disabled", true);
                } else {
                    //$("#re_analyse_div").children().prop("disabled", false);
                    $("#auto_correct_div").addClass("disabledbutton");


                }

            }

        }
        return istrue;
    }
}

//function onTextDetectionReportClick() {
//    
//    
//    dumpReport("td_captiongrid");
//    
//
//    
//
//}
//
//function translation_report(){
//    dumpReport("tt_captiongrid");
//    
//}

function dumpFileFromListcallback(respStr) {

    //false on fail
    //returns the path of the dumped file 
    var jsondata = JSON.parse(respStr);
    var respval = jsondata.response;
    if (respval == 'ERROR') {
        Msg_Notify("error:", "Somthing went Wrong", 5);

        //returns on error 
        return;
    }

    //name if file for download 
    var name = respval.split('/').pop();
    //download the file 

    //takes path and name a file to download 
    downloadfile(respval, name);
}

function OnReportClick(buttonid) {
    
    if (buttonid) {
        buttonid = '#' + buttonid;
    }
    
    //get the grid id from the button id 
    var container_div = $(buttonid).parent().siblings();
    var grid_id = container_div[1].children[0].id;
    if(grid_id){
        dumpReport(grid_id);
    }
    
    

}

function UI_errorfilterhandler(val, item) {
    var value = item.value;
    var label = item.label;
    if (value == "None") {

        //filter errors
        g_TTListSource.localdata = gTTInfoList;
        $('#tt_captiongrid').jqxGrid('updatebounddata');



    } else {
        var TTInfoList = []
          
        for (var i = 0; i < gCaptionInfoList.length; i++) {
            /* var node = captionNodeList[i]; 
             var id = node.id; 
             var starttime = ConvertTimeIntoHMSmm(node.getAttribute('start-time')); 
             var endtime = ConvertTimeIntoHMSmm(node.getAttribute('end-time')); 
             var duration = node.getAttribute('duration'); 
             var text = node.firstChild.innerHTML; 
             var infoArr = [id, starttime, endtime, text,duration]; 
             gCaptionInfoList.push(infoArr); */
            var id = gCaptionInfoList[i][0];
            var errorStatus = gCaptionInfoList[i][5];
            var startTime = gCaptionInfoList[i][1];
            var endTime = gCaptionInfoList[i][2];
            var primaryText = gCaptionInfoList[i][3];
            var TTNode = getNodeByAttributeValue(gTTXMLDoc, "CAPTION", "refid", id);
            var TTText = " ";
            var primaryCaptionid = gCaptionInfoList[i][0];
            var secondaryCaptionid = gCaptionInfoList[i][0];
            if (TTNode) {


                TTText = TTNode.firstChild.innerHTML;
                TTText = getTextDatafromCaptionNode(TTNode);
            }
            if (TTText == " ")
            {
                var info = [id, errorStatus, startTime, endTime, primaryText, TTText, primaryCaptionid, secondaryCaptionid];
                TTInfoList.push(info);

            }

        }
        g_TTListSource.localdata = TTInfoList;
        $('#tt_captiongrid').jqxGrid('updatebounddata');



    }

}
function OnCaptionreport(){
    dumpReport("captiongrid");
}


