/* ******Package******
 * Name: {log}
 * Tags: {log, console, utility}
 * Description: console.log加强版，增加了浏览器支持判断。
 * Recommend: 樵苏
 */
$NAMESPACE['log'] = function(){
    window.console && 
    console.log && 
    console.log.apply(console, arguments);
};