/* ******Package******
 * Name: {mixin}
 * Tags: {mixin, utility}
 * Description: mixin方法，来自arale.core-1.1
 * Recommend: 樵苏
 */
$NAMESPACE['mixin'] = function(target, src, override) {
    if (!target) {
        target = {};
    }
    for (var name in src) {
        if (src.hasOwnProperty(name)) {
            if ((target[name] == undefined) || override) {
                target[name] = src[name];
            }
        }
    }
    return target;
};