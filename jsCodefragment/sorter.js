/* ******Package******
 * Name: {Sorter}
 * Tags: {sorter, functional, 排序}
 * Description: 排序方法, From http://my.opera.com/GreyWyvern/blog/show.dml/1671288
 * Recommend: 樵苏
 * z1.doc, z10.doc, z17.doc, z2.doc, z23.doc, z3.doc
 * =>
 * z1.doc, z2.doc, z3.doc, z10.doc, z17.doc, z23.doc
 * usage: sorter.alphanum('z1.doc', 'z23.doc', true)
 */
$NAMESPACE['sorter'] = (function() {
    return { 
        alphanum: function(a,b,asc) {
            if (a === undefined || a === null) {
                a = "";
            }
            if (b === undefined || b === null) {
                b = "";
            }
            a = a.toString().replace(/&(lt|gt);/g, function (strMatch, p1){
                return (p1 == "lt")? "<" : ">";
            });
            a = a.replace(/<\/?[^>]+(>|$)/g, "");

            b = b.toString().replace(/&(lt|gt);/g, function (strMatch, p1){
                return (p1 == "lt")? "<" : ">";
            });
            b = b.replace(/<\/?[^>]+(>|$)/g, "");
            var aa = this.chunkify(a);
            var bb = this.chunkify(b);

            for (var x = 0; aa[x] && bb[x]; x++) {
                if (aa[x] !== bb[x]) {
                    var c = Number(aa[x]), d = Number(bb[x]);
                    if (asc) {
                        if (c == aa[x] && d == bb[x]) {
                            return c - d;
                        } else {
                            return (aa[x] > bb[x]) ? 1 : -1;
                        }
                    } else {
                        if (c == aa[x] && d == bb[x]) {
                            return d-c;//c - d;
                        } else {
                            return (aa[x] > bb[x]) ? -1 : 1; //(aa[x] > bb[x]) ? 1 : -1;
                        }
                    }
                }
            }
            return aa.length - bb.length;
        },
        chunkify: function(t) {
            var tz = [], x = 0, y = -1, n = 0, i, j;

            while (i = (j = t.charAt(x++)).charCodeAt(0)) {
                var m = (i == 45 || i == 46 || (i >=48 && i <= 57));
                if (m !== n) {
                    tz[++y] = "";
                    n = m;
                }
                tz[y] += j;
            }
            return tz;
        }
    }
})();