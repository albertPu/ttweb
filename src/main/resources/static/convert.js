function Convert(Pty, Pfm, Line, isParlay, OddsType, Spread, Paj, Selections, SelId) {
    var a;
    var select = JSON.parse(Selections);
    OddsType = isParlay ? 1 : OddsType;
    Paj = isParlay && Paj == 0 ? 2 : Paj;
    var c = 0, Price = select[SelId]["Price"], l = select.get(SelId).get("Seq");
    return Price != 0 ? Pty == 0 ? (Pfm > 0 && (Pfm == 1 && (Spread = 0), Price = this.GetSpreadOdds(Price, Spread, isParlay ? Paj : 0)), Pfm != 2 || isParlay || (a = 0, select.map(function (n) {
        n.get("SelId") != SelId && (a = this.GetSpreadOdds(n.get("Price"), Spread, 0))
    }.bind(this)), l != 0 && (Line = Line * -1), Price = this.FormatHDPOdds(Price, a, l == 0, Line)), Pfm != 3 || isParlay || (Price = this.FormatOUOdds(Price, l == 0)), isParlay || (Price = this.Floor(Price, 2)), c = this.MYtoOther(OddsType, Price), this.FloorToString(c, OddsType == 5 ? 0 : 2)) : (Pfm == 5 && (Spread = Spread > .01 ? .01 : 0, Price = this.GetSpreadOdds(Price, Spread, 0)), c = this.Floor(Price, 2), this.FloorToString(c, 2)) : ""
}

function HKOdds(n) {
    return n < 0 && (n = this.FloatDiv(-1, n), n = this.FloatDiv(this.Floor(this.FloatMul(n, 100), 0), 100)), n
}

function IndoOdds(n) {
    return n > 0 ? (n = n > .79 ? Math.floor(100 / n) / 100 : Math.ceil(100 / n) / 100, (-n).toFixed(2)) : n < -.79 ? (n = Math.round(Math.floor(Math.abs(1 / n) * 100)) / 100, n.toFixed(2)) : (n = Math.round((Math.ceil(Math.abs(1 / n) * 100) + .01) * 1) / 100, n.toFixed(2))
}

function AmericanOdds(n) {
    return this.Floor(this.FloatMul(this.IndoOdds(n), 100), 0)
}

function DecimalOdds(n) {
    return this.FloatAdd(this.HKOdds(n), 1)
}

function FloorToString(n, t) {
    var i = this.Floor(n, t);
    return i == 0 ? "" : i.toFixed(t)
}

function Floor(price, t) {
    if (n == null) return !1;
    var i = "^([-+]?[0-9]*.[0-9]{" + t + "})[0-9]*$";
    return parseFloat(price.toString().replace(new RegExp(i), function (price, t) {
        return t
    }))
}

function RoundOff(n, t) {
    var i = 1, u, r;
    return t != null && (i = Math.pow(10, t)), u = Math.abs(n), r = 1, n < 0 && (r = -1), this.FloatMul(this.FloatDiv(Math.round(this.FloatMul(u, i)), i), r)
}

function FormatOUOdds(n, t) {
    var i = n;
    return (t && n < 0 || !t && n > 0) && (i = this.Floor(n, 2)), (t && n > 0 || !t && n < 0) && (i = this.RoundOff(n, 2)), i
}

function FormatHDPOdds(price, t, i, r) {
    var u = price;
    return r > 0 && price < 0 || r < 0 && price > 0 || r == 0 && price > 0 && t > 0 && (price > t || price == t && !i) ? this.Floor(price, 2) : this.RoundOff(price, 2)
}

function GetSpreadOdds(Price, t, i) {
    var r = Price;
    return Price == 0 ? 0 : (r = this.FloatSubtraction(r, this.FloatAdd(t, this.FloatMul(.005, i))), Price > 0 && r < .01 && (r = .01), r < -1 && (r = this.FloatAdd(r, 2), r < .01 && (r = 0)), r)
}

function MYtoOther(n, t) {
    var i = t;
    switch (n) {
        case 1:
            i = this.DecimalOdds(i);
            break;
        case 2:
            i = this.HKOdds(i);
            break;
        case 3:
            i = this.IndoOdds(i);
            break;
        case 5:
            i = this.AmericanOdds(i)
    }
    return i
}

function FloatAdd(Price, t) {
    var r, u, i;
    try {
        r = Price.toString().split(".")[1].length
    } catch (f) {
        r = 0
    }
    try {
        u = t.toString().split(".")[1].length
    } catch (f) {
        u = 0
    }
    return i = Math.pow(10, Math.max(r, u)), (this.FloatMul(Price, i) + this.FloatMul(t, i)) / i
}

function FloatSubtraction(Price, t) {
    var i, r, u, f;
    try {
        i = Price.toString().split(".")[1].length
    } catch (e) {
        i = 0
    }
    try {
        r = t.toString().split(".")[1].length
    } catch (e) {
        r = 0
    }
    return u = Math.pow(10, Math.max(i, r)), f = i >= r ? i : r, ((Price * u - t * u) / u).toFixed(f)
}

function FloatMul(n, t) {
    var i = 0, r = n.toString(), u = t.toString();
    try {
        i += r.split(".")[1].length
    } catch (f) {
    }
    try {
        i += u.split(".")[1].length
    } catch (f) {
    }
    return Number(r.replace(".", "")) * Number(u.replace(".", "")) / Math.pow(10, i)
}

function FloatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (n) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (n) {
    }
    with (Math) return r1 = Number(arg1.toString().replace(".", "")), r2 = Number(arg2.toString().replace(".", "")), r1 / r2 * pow(10, t2 - t1)
}
