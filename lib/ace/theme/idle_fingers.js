define(function(require, exports, module) {

var dom = require("../lib/dom");


    var cssText = ".ace-idle-fingers .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-idle-fingers .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-idle-fingers .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-idle-fingers .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-idle-fingers .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-idle-fingers .ace_editor .ace_printMargin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-idle-fingers .ace_scroller {\
  background-color: #323232;\
}\
\
.ace-idle-fingers .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-idle-fingers .ace_cursor {\
  border-left: 2px solid #91FF00;\
}\
\
.ace-idle-fingers .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #91FF00;\
}\
 \
.ace-idle-fingers .ace_marker-layer .ace_selection {\
  background: rgba(90, 100, 126, 0.88);\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #404040;\
}\
\
.ace-idle-fingers .ace_marker-layer .ace_active_line {\
  background: #353637;\
}\
\
       \
.ace-idle-fingers .ace_invisible {\
  color: #404040;\
}\
\
.ace-idle-fingers .ace_keyword {\
  color:#CC7833;\
}\
\
.ace-idle-fingers .ace_keyword.ace_operator {\
  \
}\
\
.ace-idle-fingers .ace_constant {\
  color:#6C99BB;\
}\
\
.ace-idle-fingers .ace_constant.ace_language {\
  \
}\
\
.ace-idle-fingers .ace_constant.ace_library {\
  \
}\
\
.ace-idle-fingers .ace_constant.ace_numeric {\
  \
}\
\
.ace-idle-fingers .ace_invalid {\
  color:#FFFFFF;\
background-color:#FF0000;\
}\
\
.ace-idle-fingers .ace_invalid.ace_illegal {\
  \
}\
\
.ace-idle-fingers .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-idle-fingers .ace_support {\
  \
}\
\
.ace-idle-fingers .ace_support.ace_function {\
  color:#B83426;\
}\
\
.ace-idle-fingers .ace_function.ace_buildin {\
  \
}\
\
.ace-idle-fingers .ace_string {\
  color:#A5C261;\
}\
\
.ace-idle-fingers .ace_string.ace_regexp {\
  color:#CCCC33;\
}\
\
.ace-idle-fingers .ace_comment {\
  font-style:italic;\
color:#BC9458;\
}\
\
.ace-idle-fingers .ace_comment.ace_doc {\
  \
}\
\
.ace-idle-fingers .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-idle-fingers .ace_variable {\
  \
}\
\
.ace-idle-fingers .ace_variable.ace_language {\
  \
}\
\
.ace-idle-fingers .ace_xml_pe {\
  \
}";
    
    // import CSS once
    dom.importCssString(cssText);
    
    return {
        cssClass: "ace-idle-fingers"
    };
})