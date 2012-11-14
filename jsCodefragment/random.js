/* ******Package******
 * Name: {Random}
 * Tags: {random, color, utility}
 * Description: 各种随机处理，随机字符串，随机颜色（hex, hsb, rgb等）
 * Recommend: 樵苏, 天孝
 */
$NAMESPACE['random'] = function(){
    var cs = "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    //http://www.flickriver.com/groups/coresvivas/pool/random/
    //http://paulirish.com/2009/random-hex-color-code-snippets/
    //http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
    var rgb =  function () {
        return Math.floor(Math.random()*256)
    };
    return {
        hex: function(){
            return  '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
        },
        hsb: function(){//颜色比效鲜艳
            return "hsb(" + Math.random()  + ", 1, 1)";
        },
        rgb: function(){
            return "rgb("+ [ rgb(), rgb(), rgb() ]+")";
        },
        vivid: function(ranges) {
            if (!ranges) {
                ranges = [
                [150,256],
                [0, 190],
                [0, 30]
                ];
            }
            var g = function() {
                //select random range and remove
                var range = ranges.splice(Math.floor(Math.random()*ranges.length), 1)[0];
                //pick a random number from within the range
                return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
            }
            return "rgb(" + g() + "," + g() + "," + g() +")";
        },
        str: function(len,prefix) {
            if (!len) len = 10;
            var s = typeof prefix === "string" ? prefix : '';
            for (var i = 0; i < len; ++i) {
                var n = Math.random() * 1e6;
                s += cs.charAt(n % cs.length);
            }
            return s;
        }
    }
}

