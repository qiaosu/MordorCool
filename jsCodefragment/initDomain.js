/* ******Package******
 * Name: {initDomain}
 * Tags: {domain, utility}
 * Description: initDomain 初试化设置domain为主域。
 * Recommend: 董超
 */
$NAMESPACE['initDomain'] = function(){
    try{
        document.domain = document.domain.split(".").slice(-2).join(".");
    }catch(ex){}
};