class Area {
    circle(r){
        var area = Math.PI * r * r;
        return area;
    }
    square(a){
        var area = a * a;
        return area;
    }
    rectangle(l, w){
        var area = w * l;
        return area;
    }
    triangle(b, h){
        var area = (b * h) /2;
        return area;
    }
}

module.exports = Area;