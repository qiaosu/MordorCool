/* ******Package******
 * Name: {log}
 * Tags: {log, console, utility}
 */
$NAMESPACE['log'] = function(){
    window.console && 
    console.log && 
    console.log.apply(console, arguments);
};