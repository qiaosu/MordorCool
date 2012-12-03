/* ******Package******
 * Name: {log}
 * Tags: {console.log, utility}
 * Description: console.log加强版，增加了浏览器支持判断。
 * Recommend: 天孝
 * Usage:
 * $NAMESPACE.log.enable = true; //开发环境设true，线上设false；
 * $NAMESPACE.log('xxx')
 * $NAMESPACE.log.info('xxx')
 * $NAMESPACE.log.warn('xx', 'xxx')
 * $NAMESPACE.log.error('xx', 'xx', 'xxx')
 */
$NAMESPACE['log'] = function() {
    var types = "log|info|warn|error".split("|"),
        i = 0,
        type;
    var _trace = function() {
        var args = arguments;
        if(_trace.enable && args.length) {
            var type = "log",
                cs = console;
            if(args.length >= 2 && new RegExp(types.join("|"), "i").test(args[args.length - 1])) {
                type = (args = [].slice.call(args)).pop();
            }
            if(cs && cs[type] && typeof(cs[type]) == "function") {
                cs[type].apply(cs, args);
            }
        }
    };
    while(type = types[i]) {
        _trace[type] = (function(type) {
            return function() {
                this.apply(this, [].slice.call(arguments).concat(type));
            };
        }(type));
        i++;
    }
    return _trace;
};