define(["common", "OddsModel"], function (n, t) {
    var i = n.LanguageHelper, u = function (n, t) {
        for (var r = [], i = 0; i < n.length / 2; i++) r.push("" + parseInt(n.substr(i * 2, 2)));
        return t.format(r)
    }, e = function (n) {
        return n.replace(" X ", " {0} ").replace(" X", " {0}").replace(" Y ", " {1} ").replace(" Y", " {1}")
    }, o = [{
        BetType: [9006, 9007, 9058, 9002, 9003, 9005], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Kill_Duration"))
        }
    }, {
        BetType: ["9011:01", "9011:02", "9011:03", 9008, 9009, 9078], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Towers"))
        }
    }, {
        BetType: [9015, 9016, 9017, 9012, 9013, 9079], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Roshans"))
        }
    }, {
        BetType: [9021, 9022, 9023, 9018, 9019, 9080], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Barracks"))
        }
    }], s = [{
        BetType: [9006, 9007, 9058, 9002, 9003, 9005], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Kill_Duration"))
        }
    }, {
        BetType: ["9027:01", "9027:02", "9027:03", 9024, 9025, 9081], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Turrets"))
        }
    }, {
        BetType: [9031, 9032, 9033, 9028, 9029, 9082], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Dragons"))
        }
    }, {
        BetType: [9037, 9038, 9039, 9034, 9035, 9083], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Barrons"))
        }
    }, {
        BetType: [9043, 9044, 9045, 9040, 9041, 9084], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Inhibitors"))
        }
    }], h = [{
        BetType: [9006, 9007, 9058, 9002, 9003, 9005], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Kill_Duration"))
        }
    }, {
        BetType: ["9011:01", "9011:02", "9011:03", 9008, 9009, 9078], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Towers"))
        }
    }, {
        BetType: [9049, 9050, 9051, 9046, 9047, 9085], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Tyrants"))
        }
    }, {
        BetType: [9055, 9056, 9057, 9052, 9053, 9086], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Overlords"))
        }
    }], c = [{
        BetType: ["9068:01", "9068:16", "9062:05", "9062:10", 9059, 9060, 9061], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Rounds"))
        }
    }, {
        BetType: [9063, 9064, 9076, 9074, 9075], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_Others"))
        }
    }, {
        BetType: [9068, 9077, 9071, 9070, 9072, 9073], name: function (n) {
            return u("0" + n, i.Get("lbl_MapX_RoundBetting"))
        }
    }], r = function (t, r, f) {
        var o = {s1key: "lbl_home", s1val: "h", s2key: "lbl_away", s2val: "a"};
        return f && (o = f), {
            Name: function (r, f) {
                var o = t == 9001 ? i.Get("lbl_MapX_ML") : e(n.BettypeName.Get(t));
                return u(f, o)
            }, HasLine: r ? 1 : 99, Col: -1, Options: [{
                title: function () {
                    return i.Get(o.s1key)
                }, betTeam: o.s1val
            }, {
                title: function () {
                    return i.Get(o.s2key)
                }, betTeam: o.s2val
            }]
        }
    }, l = {1: o, 2: s, 3: c, 4: h}, a = {
        Main: {
            Title: function () {
                return i.Get("lbl_main")
            },
            BetTypeSeq: [458, 459, 4, 413, 30, 414, 405, 416, 16, 22, 448, 6, 25, 14, 2, 128, 26, 28, 24, 13, 27, 425, 171, 408, 401, 402, 403, 404]
        }, Full: {
            Title: function () {
                return i.Get("lbl_fulltime")
            },
            BetTypeSeq: [458, 607, 601, 602, 4, 413, 416, 461, 462, 460, 16, 22, 448, 6, 14, 2, 128, 25, 450, 26, 28, 13, 24, 27, 425, 408, 406, 407, 409, 171, 159, 161, 162, 144, 449, 415, 172, 451, 417, 418, 424, 419, 420, 421, 422, 423, 455, 121, 122, 603, 604, 605, 2809, 2807, 2811, 2812, 401, 402]
        }, Half: {
            Title: function () {
                return i.Get("lbl_half")
            },
            BetTypeSeq: [459, 30, 414, 405, 463, 464, 127, 126, 426, 456, 12, 184, 151, 186, 188, 146, 412, 429, 453, 410, 177, 17, 18, 140, 452, 141, 142, 133, 134, 149, 150, 147, 148, 189, 190, 445, 446, 447, 191, 185, 403, 404, 606, 608, 2808]
        }, Corners: {
            Title: function () {
                return i.Get("lbl_cornersbookings")
            }, BetTypeSeq: [206, 208, 197, 198, 195, 196, 11, 194, 207, 209, 204, 205, 200, 201, 202, 203, 2]
        }, Intervals: {
            Title: function () {
                return i.Get("lbl_intervals")
            }, BetTypeSeq: [192, 193, 194]
        }, Specials: {
            Title: function () {
                return i.Get("lbl_specials")
            }, BetTypeSeq: [135, 210, 212, 214, 213, 215, 211]
        }, Players: {
            Title: function () {
                return i.Get("lbl_players")
            }, BetTypeSeq: [217, 216]
        }, Fastmarket: {
            Title: function () {
                return i.Get("lbl_fastmarkets")
            }, BetTypeSeq: [226, 227, 221, 222, 223, 224, 225]
        }, QUARTER: {
            Title: function () {
                return i.Get("lbl_quarter")
            }, BetTypeSeq: [612, 613, 614, 615, 616, 617]
        }
    }, v = {
        1: {
            Name: function (n) {
                return n == 8 ? i.Get("lbl_Header_FTRunLine") : i.Get("lbl_Header_FTHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2: {
            Name: function (t) {
                return t == 5 || t == 2 ? i.Get("lbl_ou3_ft_oe") : n.BettypeName.Get("2")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "a"
            }]
        },
        3: {
            Name: function (n) {
                return n == 8 ? i.Get("lbl_Header_FTTotalRun") : i.Get("lbl_Header_FTOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        401: {
            Name: function () {
                return n.BettypeName.Get("401")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        461: {
            Name: function () {
                return n.BettypeName.Get("461").replace("(dec)", "")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        402: {
            Name: function () {
                return n.BettypeName.Get("402")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        462: {
            Name: function () {
                return n.BettypeName.Get("462").replace("(dec)", "")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        403: {
            Name: function () {
                return n.BettypeName.Get("403")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        463: {
            Name: function () {
                return n.BettypeName.Get("463").replace("(dec)", "")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        404: {
            Name: function () {
                return n.BettypeName.Get("404")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        464: {
            Name: function () {
                return n.BettypeName.Get("464").replace("(dec)", "")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        4: {
            Name: function () {
                return n.BettypeName.Get("4")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "10"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "20"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "21"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "30"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "31"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "32"
            }, {
                title: function () {
                    return "4-0"
                }, betTeam: "40"
            }, {
                title: function () {
                    return "4-1"
                }, betTeam: "41"
            }, {
                title: function () {
                    return "4-2"
                }, betTeam: "42"
            }, {
                title: function () {
                    return "4-3"
                }, betTeam: "43"
            }, {
                title: function () {
                    return "5-0" + i.Get("lbl_cs_up")
                }, betTeam: "50"
            }], [{
                title: function () {
                    return "0-0"
                }, betTeam: "00"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "11"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "22"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "33"
            }, {
                title: function () {
                    return "4-4"
                }, betTeam: "44"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "01"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "02"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "12"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "03"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "13"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "23"
            }, {
                title: function () {
                    return "0-4"
                }, betTeam: "04"
            }, {
                title: function () {
                    return "1-4"
                }, betTeam: "14"
            }, {
                title: function () {
                    return "2-4"
                }, betTeam: "24"
            }, {
                title: function () {
                    return "3-4"
                }, betTeam: "34"
            }, {
                title: function () {
                    return "0-5" + i.Get("lbl_cs_up")
                }, betTeam: "05"
            }]]
        },
        5: {
            Name: function () {
                return i.Get("lbl_Header_FT1X2_OU")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }]
        },
        6: {
            Name: function () {
                return n.BettypeName.Get("6")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-1"
                }, betTeam: "0-1"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2-3"
            }, {
                title: function () {
                    return "4-6"
                }, betTeam: "4-6"
            }, {
                title: function () {
                    return i.Get("lbl_7nover")
                }, betTeam: "7-over"
            }]
        },
        7: {
            Name: function (n) {
                return n == 8 ? i.Get("lbl_Header_1HRunLine") : i.Get("lbl_Header_1HHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        8: {
            Name: function (n) {
                return n == 8 ? i.Get("lbl_Header_1HTotalRun") : i.Get("lbl_Header_1HOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        11: {
            Name: function () {
                return n.BettypeName.Get("11")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-8"
                }, betTeam: "0-8"
            }, {
                title: function () {
                    return "9-11"
                }, betTeam: "9-11"
            }, {
                title: function () {
                    return i.Get("lbl_12nover")
                }, betTeam: "12-over"
            }]
        },
        12: {
            Name: function () {
                return n.BettypeName.Get("12")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "a"
            }]
        },
        13: {
            Name: function () {
                return n.BettypeName.Get("13")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home") + " " + i.Get("lbl_yes")
                }, betTeam: "hy"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " " + i.Get("lbl_strNo")
                }, betTeam: "hn"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " " + i.Get("lbl_yes")
                }, betTeam: "ay"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " " + i.Get("lbl_strNo")
                }, betTeam: "an"
            }]
        },
        14: {
            Name: function () {
                return n.BettypeName.Get("14")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_Header_HF")
                }, betTeam: "11"
            }, {
                title: function () {
                    return i.Get("lbl_Header_HL")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AF")
                }, betTeam: "21"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AL")
                }, betTeam: "22"
            }, {
                title: function () {
                    return i.Get("lbl_Header_NG")
                }, betTeam: "00"
            }]
        },
        15: {
            Name: function () {
                return i.Get("lbl_Header_1H1X2_OU")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }]
        },
        16: {
            Name: function () {
                return i.Get("lbl_B16")
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return i.Get("pop_htft_h") + i.Get("pop_htft_h")
                }, betTeam: "11"
            }, {
                title: function () {
                    return i.Get("pop_htft_h") + i.Get("pop_htft_d")
                }, betTeam: "10"
            }, {
                title: function () {
                    return i.Get("pop_htft_h") + i.Get("pop_htft_a")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("pop_htft_d") + i.Get("pop_htft_h")
                }, betTeam: "01"
            }, {
                title: function () {
                    return i.Get("pop_htft_d") + i.Get("pop_htft_d")
                }, betTeam: "00"
            }, {
                title: function () {
                    return i.Get("pop_htft_d") + i.Get("pop_htft_a")
                }, betTeam: "02"
            }, {
                title: function () {
                    return i.Get("pop_htft_a") + i.Get("pop_htft_h")
                }, betTeam: "21"
            }, {
                title: function () {
                    return i.Get("pop_htft_a") + i.Get("pop_htft_d")
                }, betTeam: "20"
            }, {
                title: function () {
                    return i.Get("pop_htft_a") + i.Get("pop_htft_a")
                }, betTeam: "22"
            }]
        },
        17: {
            Name: function () {
                return n.BettypeName.Get("17")
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        18: {
            Name: function () {
                return n.BettypeName.Get("18")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        20: {
            Name: function (n) {
                return n == 8 ? i.Get("lbl_Header_FTMoneyLine") : i.Get("lbl_moneyline")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        21: {
            Name: function (t) {
                return t == 8 ? i.Get("lbl_Header_1HMoneyLine") : n.BettypeName.Get("21")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        22: {
            Name: function () {
                return n.BettypeName.Get("22")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "x"
            }]
        },
        24: {
            Name: function () {
                return n.BettypeName.Get("24")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_Header_HoD")
                }, betTeam: "1x"
            }, {
                title: function () {
                    return i.Get("lbl_Header_HoA")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AoD")
                }, betTeam: "2x"
            }]
        },
        25: {
            Name: function () {
                return n.BettypeName.Get("25")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        26: {
            Name: function () {
                return n.BettypeName.Get("26")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("pop_b")
                }, betTeam: "b"
            }, {
                title: function () {
                    return i.Get("pop_o")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("pop_n")
                }, betTeam: "n"
            }]
        },
        419: {
            Name: function () {
                return n.BettypeName.Get("419")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("pop_neither")
                }, betTeam: "n"
            }]
        },
        420: {
            Name: function () {
                return n.BettypeName.Get("420")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("pop_neither")
                }, betTeam: "n"
            }]
        },
        421: {
            Name: function () {
                return n.BettypeName.Get("421")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("pop_neither")
                }, betTeam: "n"
            }]
        },
        422: {
            Name: function () {
                return n.BettypeName.Get("422")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("pop_neither")
                }, betTeam: "n"
            }]
        },
        423: {
            Name: function () {
                return n.BettypeName.Get("423")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("pop_neither")
                }, betTeam: "n"
            }]
        },
        27: {
            Name: function () {
                return n.BettypeName.Get("27")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        28: {
            Name: function () {
                return n.BettypeName.Get("28")
            }, HasLine: 2, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "2"
            }]
        },
        30: {
            Name: function () {
                return n.BettypeName.Get("30")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "10"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "20"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "21"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "30"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "31"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "32"
            }, {
                title: function () {
                    return "4-0" + i.Get("lbl_cs_up")
                }, betTeam: "40"
            }], [{
                title: function () {
                    return "0-0"
                }, betTeam: "00"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "11"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "22"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "33"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "01"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "02"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "12"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "03"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "13"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "23"
            }, {
                title: function () {
                    return "0-4" + i.Get("lbl_cs_up")
                }, betTeam: "04"
            }]]
        },
        121: {
            Name: function () {
                return n.BettypeName.Get("121")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }]
        },
        122: {
            Name: function () {
                return n.BettypeName.Get("122")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }]
        },
        123: {
            Name: function () {
                return n.BettypeName.Get("123")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("pop_lblnodraw")
                }, betTeam: "a"
            }]
        },
        126: {
            Name: function () {
                return n.BettypeName.Get("126")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-1"
                }, betTeam: "0-1"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2-3"
            }, {
                title: function () {
                    return i.Get("lbl_4cornernover")
                }, betTeam: "4-over"
            }]
        },
        127: {
            Name: function () {
                return n.BettypeName.Get("127")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_Header_HF")
                }, betTeam: "11"
            }, {
                title: function () {
                    return i.Get("lbl_Header_HL")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AF")
                }, betTeam: "21"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AL")
                }, betTeam: "22"
            }, {
                title: function () {
                    return i.Get("lbl_Header_NG")
                }, betTeam: "00"
            }]
        },
        429: {
            Name: function () {
                return n.BettypeName.Get("429")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("lbl_3goalnover")
                }, betTeam: "3-over"
            }]
        },
        425: {
            Name: function () {
                return n.BettypeName.Get("425")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        418: {
            Name: function () {
                return n.BettypeName.Get("418")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + "&" + i.Get("lbl_over")
                }, betTeam: "yo"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + "&" + i.Get("lbl_under")
                }, betTeam: "yu"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "&" + i.Get("lbl_over")
                }, betTeam: "no"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "&" + i.Get("lbl_under")
                }, betTeam: "nu"
            }]
        },
        172: {
            Name: function () {
                return n.BettypeName.Get("172")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + "/" + i.Get("lbl_home")
                }, betTeam: "hh"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + "/" + i.Get("lbl_home")
                }, betTeam: "dh"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/" + i.Get("lbl_home")
                }, betTeam: "ah"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "/" + i.Get("lbl_away")
                }, betTeam: "ha"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + "/" + i.Get("lbl_away")
                }, betTeam: "da"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/" + i.Get("lbl_away")
                }, betTeam: "aa"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "no"
            }]
        },
        445: {
            Name: function () {
                return n.BettypeName.Get("445")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_yes")
                }, betTeam: "yy"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_yes")
                }, betTeam: "ny"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_strNo")
                }, betTeam: "yn"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_strNo")
                }, betTeam: "nn"
            }]
        },
        446: {
            Name: function () {
                return n.BettypeName.Get("446")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_yes")
                }, betTeam: "yy"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_yes")
                }, betTeam: "ny"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_strNo")
                }, betTeam: "yn"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_strNo")
                }, betTeam: "nn"
            }]
        },
        447: {
            Name: function () {
                return n.BettypeName.Get("447")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_yes")
                }, betTeam: "yy"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_yes")
                }, betTeam: "ny"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + "/" + i.Get("lbl_strNo")
                }, betTeam: "yn"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + "/" + i.Get("lbl_strNo")
                }, betTeam: "nn"
            }]
        },
        448: {
            Name: function () {
                return n.BettypeName.Get("448")
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("pop_n")
                }, betTeam: "ng"
            }]
        },
        449: {
            Name: function () {
                return n.BettypeName.Get("449")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_over")
                }, betTeam: "1xo"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_under")
                }, betTeam: "1xu"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_away") + " & " + i.Get("lbl_over")
                }, betTeam: "12o"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_away") + " & " + i.Get("lbl_under")
                }, betTeam: "12u"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_over")
                }, betTeam: "2xo"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_under")
                }, betTeam: "2xu"
            }]
        },
        450: {
            Name: function () {
                return n.BettypeName.Get("450")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_odd") + " & " + i.Get("lbl_over")
                }, betTeam: "oo"
            }, {
                title: function () {
                    return i.Get("lbl_odd") + " & " + i.Get("lbl_under")
                }, betTeam: "ou"
            }, {
                title: function () {
                    return i.Get("lbl_even") + " & " + i.Get("lbl_over")
                }, betTeam: "eo"
            }, {
                title: function () {
                    return i.Get("lbl_even") + " & " + i.Get("lbl_under")
                }, betTeam: "eu"
            }]
        },
        451: {
            Name: function () {
                return n.BettypeName.Get("451")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + " & " + i.Get("lbl_home") + " / " + i.Get("lbl_draw")
                }, betTeam: "y1x"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + " & " + i.Get("lbl_home") + " / " + i.Get("lbl_away")
                }, betTeam: "y12"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + " & " + i.Get("lbl_away") + " / " + i.Get("lbl_draw")
                }, betTeam: "y2x"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " & " + i.Get("lbl_home") + " / " + i.Get("lbl_draw")
                }, betTeam: "n1x"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " & " + i.Get("lbl_home") + " / " + i.Get("lbl_away")
                }, betTeam: "n12"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " & " + i.Get("lbl_away") + " / " + i.Get("lbl_draw")
                }, betTeam: "n2x"
            }]
        },
        452: {
            Name: function () {
                return n.BettypeName.Get("452")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }]
        },
        453: {
            Name: function () {
                return n.BettypeName.Get("453")
            }, HasLine: 2, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "2"
            }]
        },
        454: {
            Name: function () {
                return n.BettypeName.Get("454")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_home")
                }, betTeam: "1xh"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_away") + " & " + i.Get("lbl_home")
                }, betTeam: "12h"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_home")
                }, betTeam: "2xh"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_away")
                }, betTeam: "1xa"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_away") + " & " + i.Get("lbl_away")
                }, betTeam: "12a"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_draw") + " & " + i.Get("lbl_away")
                }, betTeam: "2xa"
            }, {
                title: function () {
                    return i.Get("pop_n")
                }, betTeam: "ng"
            }]
        },
        455: {
            Name: function () {
                return n.BettypeName.Get("455")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return "00:01-10:00"
                }, betTeam: "1-10"
            }, {
                title: function () {
                    return "10:01-20:00"
                }, betTeam: "11-20"
            }, {
                title: function () {
                    return "20:01-30:00"
                }, betTeam: "21-30"
            }, {
                title: function () {
                    return "30:01-40:00"
                }, betTeam: "31-40"
            }, {
                title: function () {
                    return "40:01-50:00"
                }, betTeam: "41-50"
            }, {
                title: function () {
                    return "50:01-60:00"
                }, betTeam: "51-60"
            }, {
                title: function () {
                    return "60:01-70:00"
                }, betTeam: "61-70"
            }, {
                title: function () {
                    return "70:01-80:00"
                }, betTeam: "71-80"
            }, {
                title: function () {
                    return "80:01-FT"
                }, betTeam: "81-90"
            }, {
                title: function () {
                    return i.Get("bet455_ng")
                }, betTeam: "ng"
            }]
        },
        456: {
            Name: function () {
                return n.BettypeName.Get("456")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_home")
                }, betTeam: "yh"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_home")
                }, betTeam: "nh"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_away")
                }, betTeam: "ya"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_away")
                }, betTeam: "na"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_draw")
                }, betTeam: "yd"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_draw")
                }, betTeam: "nd"
            }]
        },
        457: {
            Name: function () {
                return n.BettypeName.Get("457")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_over")
                }, betTeam: "yo"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_over")
                }, betTeam: "no"
            }, {
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_under")
                }, betTeam: "yu"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_under")
                }, betTeam: "nu"
            }]
        },
        458: {
            Name: function () {
                return n.BettypeName.Get("458")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("bet458_1")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("bet458_x")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("bet458_2")
                }, betTeam: "2"
            }]
        },
        459: {
            Name: function () {
                return n.BettypeName.Get("459")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("bet459_1")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("bet459_x")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("bet459_2")
                }, betTeam: "2"
            }]
        },
        460: {
            Name: function () {
                return n.BettypeName.Get("460")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        424: {
            Name: function () {
                return n.BettypeName.Get("424")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_Shot")
                }, betTeam: "s"
            }, {
                title: function () {
                    return i.Get("lbl_FM_FreeKick")
                }, betTeam: "fk"
            }], [{
                title: function () {
                    return i.Get("lbl_header")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_OwnGoal")
                }, betTeam: "og"
            }], [{
                title: function () {
                    return i.Get("odds_penalty")
                }, betTeam: "p"
            }, {
                title: function () {
                    return i.Get("lbl_fglg_nogoal")
                }, betTeam: "ng"
            }]]
        },
        128: {
            Name: function () {
                return n.BettypeName.Get("128")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_odd") + " / " + i.Get("lbl_odd")
                }, betTeam: "oo"
            }, {
                title: function () {
                    return i.Get("lbl_odd") + " / " + i.Get("lbl_even")
                }, betTeam: "oe"
            }, {
                title: function () {
                    return i.Get("lbl_even") + " / " + i.Get("lbl_odd")
                }, betTeam: "eo"
            }, {
                title: function () {
                    return i.Get("lbl_even") + " / " + i.Get("lbl_even")
                }, betTeam: "ee"
            }]
        },
        133: {
            Name: function () {
                return n.BettypeName.Get("133")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        134: {
            Name: function () {
                return n.BettypeName.Get("134")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        135: {
            Name: function () {
                return n.BettypeName.Get("135")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        140: {
            Name: function () {
                return n.BettypeName.Get("140")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("lbl_tie")
                }, betTeam: "tie"
            }]
        },
        141: {
            Name: function () {
                return n.BettypeName.Get("141")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("lbl_tie")
                }, betTeam: "tie"
            }]
        },
        142: {
            Name: function () {
                return n.BettypeName.Get("142")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_firsthalf")
                }, betTeam: "1h"
            }, {
                title: function () {
                    return i.Get("lbl_secondhalf")
                }, betTeam: "2h"
            }, {
                title: function () {
                    return i.Get("lbl_tie")
                }, betTeam: "tie"
            }]
        },
        143: {
            Name: function () {
                return n.BettypeName.Get("143")
            }, HasLine: 0, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_over")
                }, betTeam: "ho"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_under")
                }, betTeam: "hu"
            }], [{
                title: function () {
                    return i.Get("lbl_draw") + " / " + i.Get("lbl_over")
                }, betTeam: "do"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + " / " + i.Get("lbl_under")
                }, betTeam: "du"
            }], [{
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_over")
                }, betTeam: "ao"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_under")
                }, betTeam: "au"
            }]]
        },
        144: {
            Name: function () {
                return n.BettypeName.Get("144")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_over")
                }, betTeam: "ho"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " / " + i.Get("lbl_under")
                }, betTeam: "hu"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_over")
                }, betTeam: "ao"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " / " + i.Get("lbl_under")
                }, betTeam: "au"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + " / " + i.Get("lbl_over")
                }, betTeam: "do"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + " / " + i.Get("lbl_under")
                }, betTeam: "du"
            }]
        },
        417: {
            Name: function () {
                return n.BettypeName.Get("417")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_home")
                }, betTeam: "yh"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_home")
                }, betTeam: "nh"
            }], [{
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_draw")
                }, betTeam: "yd"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_draw")
                }, betTeam: "nd"
            }], [{
                title: function () {
                    return i.Get("lbl_yes") + " / " + i.Get("lbl_away")
                }, betTeam: "ya"
            }, {
                title: function () {
                    return i.Get("lbl_strNo") + " / " + i.Get("lbl_away")
                }, betTeam: "na"
            }]]
        },
        426: {
            Name: function () {
                return n.BettypeName.Get("426")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_towbyg").format([i.Get("lbl_home"), "1"])
                }, betTeam: "h1"
            }, {
                title: function () {
                    return i.Get("lbl_towbygs").format([i.Get("lbl_home"), "2"])
                }, betTeam: "h2+"
            }, {
                title: function () {
                    return i.Get("lbl_S_Draw")
                }, betTeam: "d"
            }], [{
                title: function () {
                    return i.Get("lbl_towbyg").format([i.Get("lbl_away"), "1"])
                }, betTeam: "a1"
            }, {
                title: function () {
                    return i.Get("lbl_towbygs").format([i.Get("lbl_away"), "2"])
                }, betTeam: "a2+"
            }, {
                title: function () {
                    return i.Get("lbl_fglg_nogoal")
                }, betTeam: "ng"
            }]]
        },
        145: {
            Name: function () {
                return n.BettypeName.Get("145")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        146: {
            Name: function () {
                return n.BettypeName.Get("146")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        147: {
            Name: function () {
                return n.BettypeName.Get("147")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        148: {
            Name: function () {
                return n.BettypeName.Get("148")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        149: {
            Name: function () {
                return n.BettypeName.Get("149")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        150: {
            Name: function () {
                return n.BettypeName.Get("150")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        151: {
            Name: function () {
                return n.BettypeName.Get("151")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home") + " " + i.Get("lbl_or") + " " + i.Get("lbl_draw")
                }, betTeam: "1x"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " " + i.Get("lbl_or") + " " + i.Get("lbl_away")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " " + i.Get("lbl_or") + " " + i.Get("lbl_draw")
                }, betTeam: "2x"
            }]
        },
        153: {
            Name: function (t) {
                return t == 5 ? i.Get("lbl_game_hdp") : n.BettypeName.Get("153")
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        154: {
            Name: function () {
                return n.BettypeName.Get("154")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        155: {
            Name: function () {
                return n.BettypeName.Get("155")
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        156: {
            Name: function () {
                return n.BettypeName.Get("156")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        159: {
            Name: function () {
                return n.BettypeName.Get("159")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "3"
                }, betTeam: "g3"
            }, {
                title: function () {
                    return i.Get("lbl_6goalnover")
                }, betTeam: "g6"
            }], [{
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "4"
                }, betTeam: "g4"
            },], [{
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return "5"
                }, betTeam: "g5"
            }]]
        },
        161: {
            Name: function () {
                return n.BettypeName.Get("161")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return i.Get("lbl_3goalnover")
                }, betTeam: "g3"
            }]
        },
        162: {
            Name: function () {
                return n.BettypeName.Get("162")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return i.Get("lbl_3goalnover")
                }, betTeam: "g3"
            }]
        },
        164: {
            Name: function () {
                return n.BettypeName.Get("164")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }]
        },
        167: {
            Name: function () {
                return n.BettypeName.Get("167")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }]
        },
        168: {
            Name: function () {
                return n.BettypeName.Get("168")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        169: {
            Name: function () {
                return n.BettypeName.Get("169")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1-15"
                }, betTeam: "1-15"
            }, {
                title: function () {
                    return "16-30"
                }, betTeam: "16-30"
            }, {
                title: function () {
                    return "31-45"
                }, betTeam: "31-45"
            }, {
                title: function () {
                    return "46-60"
                }, betTeam: "46-60"
            }, {
                title: function () {
                    return "61-75"
                }, betTeam: "61-75"
            }, {
                title: function () {
                    return "76-90"
                }, betTeam: "76-90"
            }]
        },
        170: {
            Name: function () {
                return n.BettypeName.Get("170")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("pop_b")
                }, betTeam: "b"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "n"
            }]
        },
        171: {
            Name: function () {
                return n.BettypeName.Get("171")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_home"), "1", i.Get("lbl_Goal").format([""])])
                }, betTeam: "h1"
            }, {
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_home"), "2", i.Get("lbl_Goals").format([""])])
                }, betTeam: "h2"
            }, {
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_home"), "3", i.Get("lbl_cs_up") + i.Get("lbl_Goals").format([""])])
                }, betTeam: "h3"
            }, {
                title: function () {
                    return i.Get("lbl_S_Draw")
                }, betTeam: "d"
            }], [{
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_away"), "1", i.Get("lbl_Goal").format([""])])
                }, betTeam: "a1"
            }, {
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_away"), "2", i.Get("lbl_Goals").format([""])])
                }, betTeam: "a2"
            }, {
                title: function () {
                    return i.Get("lbl_ToWinBy").format([i.Get("lbl_away"), "3", i.Get("lbl_cs_up") + i.Get("lbl_Goals").format([""])])
                }, betTeam: "a3"
            }, {
                title: function () {
                    return i.Get("pop_n")
                }, betTeam: "ng"
            }]]
        },
        172: {
            Name: function () {
                return n.BettypeName.Get("172")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + "/" + i.Get("lbl_home")
                }, betTeam: "hh"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + "/" + i.Get("lbl_home")
                }, betTeam: "dh"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/" + i.Get("lbl_home")
                }, betTeam: "ah"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "/" + i.Get("lbl_away")
                }, betTeam: "ha"
            }, {
                title: function () {
                    return i.Get("lbl_draw") + "/" + i.Get("lbl_away")
                }, betTeam: "da"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/" + i.Get("lbl_away")
                }, betTeam: "aa"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "no"
            }]
        },
        173: {
            Name: function () {
                return n.BettypeName.Get("173")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        174: {
            Name: function () {
                return n.BettypeName.Get("174")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        175: {
            Name: function () {
                return n.BettypeName.Get("175")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + "/RT"
                }, betTeam: "hr"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "/ET"
                }, betTeam: "he"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "/PEN"
                }, betTeam: "hp"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/RT"
                }, betTeam: "ar"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/ET"
                }, betTeam: "ae"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "/PEN"
                }, betTeam: "ap"
            }]
        },
        176: {
            Name: function () {
                return n.BettypeName.Get("176")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "2"
            }]
        },
        177: {
            Name: function () {
                return n.BettypeName.Get("177")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }]
        },
        179: {
            Name: function () {
                return n.BettypeName.Get("179")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return "3"
                }, betTeam: "g3"
            }, {
                title: function () {
                    return "4&" + i.Get("lbl_over")
                }, betTeam: "g4"
            }]
        },
        180: {
            Name: function () {
                return n.BettypeName.Get("180")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "x"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "2"
            }]
        },
        181: {
            Name: function () {
                return n.BettypeName.Get("181")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return "3&" + i.Get("lbl_over")
                }, betTeam: "g3"
            }]
        },
        182: {
            Name: function () {
                return n.BettypeName.Get("182")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "g2"
            }, {
                title: function () {
                    return "3&" + i.Get("lbl_over")
                }, betTeam: "g3"
            }]
        },
        184: {
            Name: function () {
                return n.BettypeName.Get("184")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "e"
            }]
        },
        185: {
            Name: function () {
                return n.BettypeName.Get("185")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        186: {
            Name: function () {
                return n.BettypeName.Get("186")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_Header_HoD")
                }, betTeam: "hd"
            }, {
                title: function () {
                    return i.Get("lbl_Header_HoA")
                }, betTeam: "ha"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AoD")
                }, betTeam: "da"
            }]
        },
        187: {
            Name: function () {
                return n.BettypeName.Get("187")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "g0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "g1"
            }, {
                title: function () {
                    return i.Get("lbl_2nover")
                }, betTeam: "g2"
            }]
        },
        188: {
            Name: function () {
                return n.BettypeName.Get("188")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        189: {
            Name: function () {
                return n.BettypeName.Get("189")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        190: {
            Name: function () {
                return n.BettypeName.Get("190")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        191: {
            Name: function () {
                return n.BettypeName.Get("191")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        192: {
            Name: function () {
                return n.BettypeName.Get("192")
            }, HasLine: 99, Col: 5, Options: [{
                title: function () {
                    return "1-10"
                }, betTeam: "1-10"
            }, {
                title: function () {
                    return "11-20"
                }, betTeam: "11-20"
            }, {
                title: function () {
                    return "21-30"
                }, betTeam: "21-30"
            }, {
                title: function () {
                    return "31-40"
                }, betTeam: "31-40"
            }, {
                title: function () {
                    return "41-50"
                }, betTeam: "41-50"
            }, {
                title: function () {
                    return "51-60"
                }, betTeam: "51-60"
            }, {
                title: function () {
                    return "61-70"
                }, betTeam: "61-70"
            }, {
                title: function () {
                    return "71-80"
                }, betTeam: "71-80"
            }, {
                title: function () {
                    return "81-90"
                }, betTeam: "81-90"
            }]
        },
        193: {
            Name: function () {
                return n.BettypeName.Get("193")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1-15"
                }, betTeam: "1-15"
            }, {
                title: function () {
                    return "16-30"
                }, betTeam: "16-30"
            }, {
                title: function () {
                    return "31-45"
                }, betTeam: "31-45"
            }, {
                title: function () {
                    return "46-60"
                }, betTeam: "46-60"
            }, {
                title: function () {
                    return "61-75"
                }, betTeam: "61-75"
            }, {
                title: function () {
                    return "76-90"
                }, betTeam: "76-90"
            }]
        },
        194: {
            Name: function () {
                return n.BettypeName.Get("194")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "e"
            }]
        },
        195: {
            Name: function () {
                return n.BettypeName.Get("195")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-2"
                }, betTeam: "0-2"
            }, {
                title: function () {
                    return "3-4"
                }, betTeam: "3-4"
            }, {
                title: function () {
                    return "5-6"
                }, betTeam: "5-6"
            }, {
                title: function () {
                    return i.Get("lbl_7cornernover")
                }, betTeam: "7-over"
            }]
        },
        196: {
            Name: function () {
                return n.BettypeName.Get("196")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-2"
                }, betTeam: "0-2"
            }, {
                title: function () {
                    return "3-4"
                }, betTeam: "3-4"
            }, {
                title: function () {
                    return "5-6"
                }, betTeam: "5-6"
            }, {
                title: function () {
                    return i.Get("lbl_7cornernover")
                }, betTeam: "7-over"
            }]
        },
        197: {
            Name: function () {
                return n.BettypeName.Get("197")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        198: {
            Name: function () {
                return n.BettypeName.Get("198")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        200: {
            Name: function () {
                return n.BettypeName.Get("200")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-1"
                }, betTeam: "0-1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "3"
                }, betTeam: "3"
            }, {
                title: function () {
                    return i.Get("lbl_4cornernover")
                }, betTeam: "4-over"
            }]
        },
        201: {
            Name: function () {
                return n.BettypeName.Get("201")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-1"
                }, betTeam: "0-1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "3"
                }, betTeam: "3"
            }, {
                title: function () {
                    return i.Get("lbl_4cornernover")
                }, betTeam: "4-over"
            }]
        },
        202: {
            Name: function () {
                return n.BettypeName.Get("202")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0-4"
                }, betTeam: "0-4"
            }, {
                title: function () {
                    return "5-6"
                }, betTeam: "5-6"
            }, {
                title: function () {
                    return i.Get("lbl_7cornernover")
                }, betTeam: "7-over"
            }]
        },
        203: {
            Name: function () {
                return n.BettypeName.Get("203")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "e"
            }]
        },
        204: {
            Name: function () {
                return n.BettypeName.Get("204")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        205: {
            Name: function () {
                return n.BettypeName.Get("204")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        206: {
            Name: function () {
                return n.BettypeName.Get("206")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "n"
            }]
        },
        207: {
            Name: function () {
                return n.BettypeName.Get("207")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "n"
            }]
        },
        208: {
            Name: function () {
                return n.BettypeName.Get("208")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "n"
            }]
        },
        209: {
            Name: function () {
                return n.BettypeName.Get("209")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }, {
                title: function () {
                    return i.Get("lbl_none")
                }, betTeam: "n"
            }]
        },
        210: {
            Name: function () {
                return n.BettypeName.Get("210")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        211: {
            Name: function () {
                return n.BettypeName.Get("211")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        212: {
            Name: function () {
                return n.BettypeName.Get("212")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        213: {
            Name: function () {
                return n.BettypeName.Get("213")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        214: {
            Name: function () {
                return n.BettypeName.Get("214")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        215: {
            Name: function () {
                return n.BettypeName.Get("215")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_yes")
                }, betTeam: "y"
            }, {
                title: function () {
                    return i.Get("lbl_strNo")
                }, betTeam: "n"
            }]
        },
        81: {
            Name: function () {
                return i.Get("lbl_81")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        82: {
            Name: function () {
                return i.Get("lbl_82")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        83: {
            Name: function () {
                return i.Get("lbl_83")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "a"
            }]
        },
        84: {
            Name: function () {
                return i.Get("lbl_84")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "a"
            }]
        },
        85: {
            Name: function () {
                return i.Get("lbl_85")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        86: {
            Name: function () {
                return t.get("market") == "l" ? i.Get("lbl_86") : i.Get("lbl_ou3_ft_oe")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "a"
            }]
        },
        87: {
            Name: function () {
                return i.Get("lbl_87")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_High")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_Low")
                }, betTeam: "a"
            }]
        },
        88: {
            Name: function () {
                return i.Get("lbl_88")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_warrior_2nd")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_warrior_3rd")
                }, betTeam: "a"
            }]
        },
        89: {
            Name: function () {
                return i.Get("lbl_89") + " [" + i.Get("lbl_89info") + "]"
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_OO")
                }, betTeam: "11"
            }, {
                title: function () {
                    return i.Get("lbl_OE2")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_UO")
                }, betTeam: "21"
            }, {
                title: function () {
                    return i.Get("lbl_UE")
                }, betTeam: "22"
            }]
        },
        1206: {
            Name: function () {
                return n.BettypeName.Get("1206")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "3"
                }, betTeam: "3"
            }, {
                title: function () {
                    return "4 " + i.Get("lbl_Goals")
                }, betTeam: "4"
            }]
        },
        1204: {
            Name: function () {
                return n.BettypeName.Get("1204")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "10"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "20"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "21"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "30"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "31"
            }, {
                title: function () {
                    return "4-0"
                }, betTeam: "40"
            }], [{
                title: function () {
                    return "0-0"
                }, betTeam: "00"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "11"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "22"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "01"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "02"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "12"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "03"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "13"
            }, {
                title: function () {
                    return "0-4"
                }, betTeam: "04"
            }]]
        },
        1235: {
            Name: function () {
                return n.BettypeName.Get("1235")
            }, HasLine: 99, Col: 4, Options: [{
                title: function () {
                    return i.Get("lbl_VTScrollBetWin") + "-0"
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_VTScrollBetWin") + "-15"
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("lbl_VTScrollBetWin") + "-30"
                }, betTeam: "3"
            }, {
                title: function () {
                    return i.Get("lbl_VTScrollBetWin") + "-40"
                }, betTeam: "4"
            }, {
                title: function () {
                    return "0-" + i.Get("lbl_VTScrollBetWin")
                }, betTeam: "5"
            }, {
                title: function () {
                    return "15-" + i.Get("lbl_VTScrollBetWin")
                }, betTeam: "6"
            }, {
                title: function () {
                    return "30-" + i.Get("lbl_VTScrollBetWin")
                }, betTeam: "7"
            }, {
                title: function () {
                    return "40-" + i.Get("lbl_VTScrollBetWin")
                }, betTeam: "8"
            }]
        },
        1236: {
            Name: function () {
                return n.BettypeName.Get("1236")
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return "4 " + i.Get("lbl_points")
                }, betTeam: "4"
            }, {
                title: function () {
                    return "5 " + i.Get("lbl_points")
                }, betTeam: "5"
            }, {
                title: function () {
                    return "6 " + i.Get("lbl_points")
                }, betTeam: "6"
            }, {
                title: function () {
                    return "8 " + i.Get("lbl_points")
                }, betTeam: "8"
            }, {
                title: function () {
                    return "10 " + i.Get("lbl_points")
                }, betTeam: "10"
            }, {
                title: function () {
                    return "12 " + i.Get("lbl_points")
                }, betTeam: "12"
            }]
        },
        1201: {
            Name: function () {
                return i.Get("lbl_Header_FTHDP_OU")
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        1203: {
            Name: function () {
                return i.Get("lbl_Header_FTOU_OU")
            }, HasLine: 0, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        1205: {
            Name: function () {
                return i.Get("lbl_Header_FT1X2_OU")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }]
        },
        1224: {
            Name: function () {
                return n.BettypeName.Get("24")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_Header_HoD")
                }, betTeam: "1x"
            }, {
                title: function () {
                    return i.Get("lbl_Header_HoA")
                }, betTeam: "12"
            }, {
                title: function () {
                    return i.Get("lbl_Header_AoD")
                }, betTeam: "2x"
            }]
        },
        1206: {
            Name: function () {
                return n.BettypeName.Get("1206")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0 " + i.Get("lbl_Goals").format([""])
                }, betTeam: "0"
            }, {
                title: function () {
                    return "1 " + i.Get("lbl_Goals").format([""])
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2 " + i.Get("lbl_Goals").format([""])
                }, betTeam: "2"
            }, {
                title: function () {
                    return "3 " + i.Get("lbl_Goals").format([""])
                }, betTeam: "3"
            }, {
                title: function () {
                    return "4 " + i.Get("lbl_Goals").format([""])
                }, betTeam: "4"
            }]
        },
        412: {
            Name: function () {
                return n.BettypeName.Get("412")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return "0"
                }, betTeam: "0"
            }, {
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("lbl_3goalnover")
                }, betTeam: "3-over"
            }]
        },
        1220: {
            Name: function () {
                return i.Get("lbl_moneyline")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        152: {
            Name: function () {
                return n.BettypeName.Get("152")
            }, HasLine: 99, Col: -3, Options: []
        },
        416: {
            Name: function () {
                return n.BettypeName.Get("152")
            }, HasLine: 99, Col: -3, Options: []
        },
        301: {
            Name: function () {
                return i.Get("lbl_Header_FTHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        302: {
            Name: function () {
                return i.Get("lbl_Header_FTOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        303: {
            Name: function () {
                return i.Get("lbl_Header_1HHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        304: {
            Name: function () {
                return i.Get("lbl_Header_1HOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "a"
            }]
        },
        501: {
            Name: function () {
                return n.BettypeName.Get("501")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        405: {
            Name: function () {
                return n.BettypeName.Get("405")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "1:0"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "2:0"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "2:1"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "3:0"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "3:1"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "3:2"
            },], [{
                title: function () {
                    return "0-0"
                }, betTeam: "0:0"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "1:1"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "2:2"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "3:3"
            }, {
                title: function () {
                    return "AOS"
                }, betTeam: "aos"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "0:1"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "0:2"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "1:2"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "0:3"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "1:3"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2:3"
            }]]
        },
        413: {
            Name: function () {
                return n.BettypeName.Get("4")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "1:0"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "2:0"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "2:1"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "3:0"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "3:1"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "3:2"
            }, {
                title: function () {
                    return "4-0"
                }, betTeam: "4:0"
            }, {
                title: function () {
                    return "4-1"
                }, betTeam: "4:1"
            }, {
                title: function () {
                    return "4-2"
                }, betTeam: "4:2"
            }, {
                title: function () {
                    return "4-3"
                }, betTeam: "4:3"
            }], [{
                title: function () {
                    return "0-0"
                }, betTeam: "0:0"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "1:1"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "2:2"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "3:3"
            }, {
                title: function () {
                    return "4-4"
                }, betTeam: "4:4"
            }, {
                title: function () {
                    return "AOS"
                }, betTeam: "aos"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "0:1"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "0:2"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "1:2"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "0:3"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "1:3"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2:3"
            }, {
                title: function () {
                    return "0-4"
                }, betTeam: "0:4"
            }, {
                title: function () {
                    return "1-4"
                }, betTeam: "1:4"
            }, {
                title: function () {
                    return "2-4"
                }, betTeam: "2:4"
            }, {
                title: function () {
                    return "3-4"
                }, betTeam: "3:4"
            },]]
        },
        414: {
            Name: function () {
                return n.BettypeName.Get("30")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "1:0"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "2:0"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "2:1"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "3:0"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "3:1"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "3:2"
            },], [{
                title: function () {
                    return "0-0"
                }, betTeam: "0:0"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "1:1"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "2:2"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "3:3"
            }, {
                title: function () {
                    return "AOS"
                }, betTeam: "aos"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "0:1"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "0:2"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "1:2"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "0:3"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "1:3"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2:3"
            }]]
        },
        221: {
            Name: function (t) {
                return n.BettypeName.Get("221") + " (" + f(t.get("Line"), 1) + ")"
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("GoalYes")
                }, betTeam: "2", SLine: "hdp1"
            }, {
                title: function () {
                    return i.Get("GoalNo")
                }, betTeam: "-2", SLine: "hdp1"
            }, {
                title: function () {
                    return i.Get("CornerYes")
                }, betTeam: "4", SLine: "hdp2"
            }, {
                title: function () {
                    return i.Get("CornerNo")
                }, betTeam: "-4", SLine: "hdp2"
            }, {
                title: function () {
                    return i.Get("GoalKickYes")
                }, betTeam: "16", SLine: "hdp4"
            }, {
                title: function () {
                    return i.Get("GoalKickNo")
                }, betTeam: "-16", SLine: "hdp4"
            }, {
                title: function () {
                    return i.Get("FreeKickYes")
                }, betTeam: "8", SLine: "hdp3"
            }, {
                title: function () {
                    return i.Get("FreeKickNo")
                }, betTeam: "-8", SLine: "hdp3"
            }, {
                title: function () {
                    return i.Get("ThrowInYes")
                }, betTeam: "32", SLine: "hdp5"
            }, {
                title: function () {
                    return i.Get("ThrowInNo")
                }, betTeam: "-32", SLine: "hdp5"
            }]
        },
        222: {
            Name: function (t) {
                return n.BettypeName.Get("222") + " (" + f(t.get("Line"), 5) + ")"
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("GoalYes")
                }, betTeam: "2", SLine: "hdp1"
            }, {
                title: function () {
                    return i.Get("GoalNo")
                }, betTeam: "-2", SLine: "hdp1"
            }, {
                title: function () {
                    return i.Get("CornerYes")
                }, betTeam: "4", SLine: "hdp2"
            }, {
                title: function () {
                    return i.Get("CornerNo")
                }, betTeam: "-4", SLine: "hdp2"
            }, {
                title: function () {
                    return i.Get("PenaltyYes")
                }, betTeam: "128", SLine: "hdp3"
            }, {
                title: function () {
                    return ""
                }
            }, {
                title: function () {
                    return i.Get("GoalKickYes")
                }, betTeam: "16", SLine: "hdp5"
            }, {
                title: function () {
                    return i.Get("GoalKickNo")
                }, betTeam: "-16", SLine: "hdp5"
            }, {
                title: function () {
                    return i.Get("FreeKickYes")
                }, betTeam: "8", SLine: "hdp4"
            }, {
                title: function () {
                    return i.Get("FreeKickNo")
                }, betTeam: "-8", SLine: "hdp4"
            }, {
                title: function () {
                    return i.Get("ThrowInYes")
                }, betTeam: "32", SLine: "hdp6"
            }, {
                title: function () {
                    return i.Get("ThrowInNo")
                }, betTeam: "-32", SLine: "hdp6"
            }]
        },
        223: {
            Name: function (t) {
                return n.BettypeName.Get("223") + " (" + f(t.get("Line"), 1) + ")"
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return i.Get("Goal")
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("Corner")
                }, betTeam: "4"
            }, {
                title: function () {
                    return i.Get("GoalKick")
                }, betTeam: "16"
            }, {
                title: function () {
                    return i.Get("FreeKick")
                }, betTeam: "8"
            }, {
                title: function () {
                    return i.Get("ThrowIn")
                }, betTeam: "32"
            }, {
                title: function () {
                    return i.Get("None")
                }, betTeam: "1"
            }]
        },
        224: {
            Name: function (t) {
                return n.BettypeName.Get("224") + " (" + f(t.get("Line"), 5) + ")"
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return i.Get("Goal")
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("Corner")
                }, betTeam: "4"
            }, {
                title: function () {
                    return i.Get("Penalty")
                }, betTeam: "128"
            }, {
                title: function () {
                    return i.Get("Booking")
                }, betTeam: "64"
            }, {
                title: function () {
                    return i.Get("None")
                }, betTeam: "1"
            }]
        },
        225: {
            Name: function (t) {
                return n.BettypeName.Get("225") + "-" + i.Get("lbl_bettype225_info") + " (" + f(t.get("Line"), 1) + ")"
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("SetPieceYes")
                }, betTeam: "44"
            }, {
                title: function () {
                    return i.Get("SetPieceNo")
                }, betTeam: "1"
            }]
        },
        226: {
            Name: function (t) {
                return n.BettypeName.Get("226") + " (" + f(t.get("Line"), 1) + ")"
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_226Choice26")
                }, betTeam: "26", colSpan: 2
            }, {
                title: function () {
                    return null
                }
            }, {
                title: function () {
                    return i.Get("lbl_226Choice36")
                }, betTeam: "36"
            }, {
                title: function () {
                    return i.Get("lbl_226Choice1")
                }, betTeam: "1"
            },]
        },
        227: {
            Name: function (t) {
                return n.BettypeName.Get("227") + " (" + f(t.get("Line"), 5) + ")"
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_227Choice194")
                }, betTeam: "194", colSpan: 2
            }, {
                title: function () {
                    return
                }
            }, {
                title: function () {
                    return i.Get("lbl_227Choice4")
                }, betTeam: "4"
            }, {
                title: function () {
                    return i.Get("lbl_227Choice1")
                }, betTeam: "1"
            }]
        },
        609: {
            Name: function (n, t) {
                var u = i.Get("btype_609"), r = parseInt(t);
                return u.format(["" + r, i.Get("st_" + r)])
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        610: {
            Name: function (n, t) {
                var u = i.Get("btype_610"), r = parseInt(t);
                return u.format(["" + r, i.Get("st_" + r)])
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        611: {
            Name: function (n, t) {
                var u = i.Get("btype_611"), r = parseInt(t);
                return u.format(["" + r, i.Get("st_" + r)])
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_odd")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_even")
                }, betTeam: "e"
            }]
        },
        612: {
            Name: function (t) {
                var u = parseInt(t.get("Resourceid")), r;
                return r = i.get("Lang") == "zh-TW" || i.get("Lang") == "zh-CN" || i.get("Lang") == "zh-CHS" ? n.BettypeName.Get("612").replace(" X ", "{0}") : n.BettypeName.Get("612").replace("X", "{0}"), r.format(["" + u])
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        613: {
            Name: function (n, t) {
                var r = parseInt(t.substr(0, 2)), u = i.Get("btype613");
                return u.format(["" + r, i.Get("st_" + r)])
            }, HasLine: 99, Col: -2, RidSeq: "613:{0}10,613:{0}15,613:{0}20", Options: [{
                title: function (n) {
                    return i.Get("lbl_home") + " " + n.substr(2, 2)
                }, betTeam: "h"
            }, {
                title: function (n) {
                    return i.Get("lbl_away") + " " + n.substr(2, 2)
                }, betTeam: "a"
            }]
        },
        614: {
            Name: function (t) {
                var r;
                return r = i.get("Lang") == "zh-TW" || i.get("Lang") == "zh-CN" || i.get("Lang") == "zh-CHS" ? n.BettypeName.Get("614").replace(" X ", "{0}") : n.BettypeName.Get("614").replace("X", "{0}"), r.format(["" + parseInt(t.get("Resourceid"))])
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_home") + " 1-4"
                }, betTeam: "H1-4"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 5-8"
                }, betTeam: "H5-8"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 9+"
                }, betTeam: "H9+"
            }], [{
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "D"
            }], [{
                title: function () {
                    return i.Get("lbl_away") + " 1-4"
                }, betTeam: "A1-4"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 5-8"
                }, betTeam: "A5-8"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 9+"
                }, betTeam: "A9+"
            }]]
        },
        615: {
            Name: function (t) {
                var r;
                return r = i.get("Lang") == "zh-TW" || i.get("Lang") == "zh-CN" || i.get("Lang") == "zh-CHS" ? n.BettypeName.Get("615").replace(" X ", "{0}") : n.BettypeName.Get("615").replace("X", "{0}"), r.format(["" + parseInt(t.get("Resourceid"))])
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        616: {
            Name: function (t) {
                var r;
                return r = i.get("Lang") == "zh-TW" || i.get("Lang") == "zh-CN" || i.get("Lang") == "zh-CHS" ? n.BettypeName.Get("616").replace(" X ", "{0}") : n.BettypeName.Get("616").replace("X", "{0}"), r.format(["" + parseInt(t.get("Resourceid"))])
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        617: {
            Name: function (t) {
                var r;
                return r = i.get("Lang") == "zh-TW" || i.get("Lang") == "zh-CN" || i.get("Lang") == "zh-CHS" ? n.BettypeName.Get("617").replace(" X ", "{0}") : n.BettypeName.Get("617").replace("X", "{0}"), r.format(["" + parseInt(t.get("Resourceid"))])
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        606: {
            Name: function () {
                return i.Get("btype_606")
            }, HasLine: 99, Col: -2, RidSeq: "606:25,606:30,606:35", Options: [{
                title: function (n) {
                    return i.Get("lbl_home") + " " + n.substr(0, 2)
                }, betTeam: "h"
            }, {
                title: function (n) {
                    return i.Get("lbl_away") + " " + n.substr(0, 2)
                }, betTeam: "a"
            }]
        },
        607: {
            Name: function () {
                return i.Get("btype_607")
            }, HasLine: 99, Col: -2, RidSeq: "607:25,607:30,607:35", Options: [{
                title: function (n) {
                    return i.Get("lbl_home") + " " + n.substr(0, 2)
                }, betTeam: "h"
            }, {
                title: function (n) {
                    return i.Get("lbl_away") + " " + n.substr(0, 2)
                }, betTeam: "a"
            }]
        },
        601: {
            Name: function () {
                return n.BettypeName.Get("601")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_home") + " 1-2"
                }, betTeam: "H1-2"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 3-6"
                }, betTeam: "H3-6"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 7-9"
                }, betTeam: "H7-9"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 10-13"
                }, betTeam: "H10-13"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 14-16"
                }, betTeam: "H14-16"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 17-20"
                }, betTeam: "H17-20"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 21+"
                }, betTeam: "H21+"
            }], [{
                title: function () {
                    return i.Get("lbl_away") + " 1-2"
                }, betTeam: "A1-2"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 3-6"
                }, betTeam: "A3-6"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 7-9"
                }, betTeam: "A7-9"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 10-13"
                }, betTeam: "A10-13"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 14-16"
                }, betTeam: "A14-16"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 17-20"
                }, betTeam: "A17-20"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 21+"
                }, betTeam: "A21+"
            }]]
        },
        602: {
            Name: function () {
                return n.BettypeName.Get("602")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_home") + " 1-5"
                }, betTeam: "H1-5"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 6-10"
                }, betTeam: "H6-10"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 11-15"
                }, betTeam: "H11-15"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 16-20"
                }, betTeam: "H16-20"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 21-25"
                }, betTeam: "H21-25"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 26+"
                }, betTeam: "H26+"
            }], [{
                title: function () {
                    return i.Get("lbl_away") + " 1-5"
                }, betTeam: "A1-5"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 6-10"
                }, betTeam: "A6-10"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 11-15"
                }, betTeam: "A11-15"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 16-20"
                }, betTeam: "A16-20"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 21-25"
                }, betTeam: "A21-25"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 26+"
                }, betTeam: "A26+"
            }]]
        },
        608: {
            Name: function () {
                return n.BettypeName.Get("608")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return i.Get("lbl_home") + " 1-5"
                }, betTeam: "H1-5"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 6-10"
                }, betTeam: "H6-10"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 11-15"
                }, betTeam: "H11-15"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 16-20"
                }, betTeam: "H16-20"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 21-25"
                }, betTeam: "H21-25"
            }, {
                title: function () {
                    return i.Get("lbl_home") + " 26+"
                }, betTeam: "H26+"
            }], [{
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "D"
            }], [{
                title: function () {
                    return i.Get("lbl_away") + " 1-5"
                }, betTeam: "A1-5"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 6-10"
                }, betTeam: "A6-10"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 11-15"
                }, betTeam: "A11-15"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 16-20"
                }, betTeam: "A16-20"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 21-25"
                }, betTeam: "A21-25"
            }, {
                title: function () {
                    return i.Get("lbl_away") + " 26+"
                }, betTeam: "A26+"
            }]]
        },
        603: {
            Name: function () {
                return n.BettypeName.Get("603")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        604: {
            Name: function () {
                return n.BettypeName.Get("604")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        605: {
            Name: function () {
                return n.BettypeName.Get("605")
            }, HasLine: 99, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2705: {
            Name: function () {
                return i.Get("lbl_Header_FTHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2703: {
            Name: function () {
                return i.Get("lbl_Header_FTOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        2701: {
            Name: function () {
                return i.Get("lbl_Header_FT1X2_OU")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }]
        },
        2706: {
            Name: function () {
                return i.Get("lbl_Header_1HHDP_OU")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2704: {
            Name: function () {
                return i.Get("lbl_Header_1HOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        2702: {
            Name: function () {
                return i.Get("lbl_Header_1H1X2_OU")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return "1"
                }, betTeam: "1"
            }, {
                title: function () {
                    return "2"
                }, betTeam: "2"
            }, {
                title: function () {
                    return "X"
                }, betTeam: "x"
            }]
        },
        2707: {
            Name: function () {
                return n.BettypeName.Get("4")
            }, HasLine: 99, Col: -1, Options: [[{
                title: function () {
                    return "1-0"
                }, betTeam: "1:0"
            }, {
                title: function () {
                    return "2-0"
                }, betTeam: "2:0"
            }, {
                title: function () {
                    return "2-1"
                }, betTeam: "2:1"
            }, {
                title: function () {
                    return "3-0"
                }, betTeam: "3:0"
            }, {
                title: function () {
                    return "3-1"
                }, betTeam: "3:1"
            }, {
                title: function () {
                    return "3-2"
                }, betTeam: "3:2"
            }], [{
                title: function () {
                    return "0-0"
                }, betTeam: "0:0"
            }, {
                title: function () {
                    return "1-1"
                }, betTeam: "1:1"
            }, {
                title: function () {
                    return "2-2"
                }, betTeam: "2:2"
            }, {
                title: function () {
                    return "3-3"
                }, betTeam: "3:3"
            }, {
                title: function () {
                    return "AOS"
                }, betTeam: "aos"
            }], [{
                title: function () {
                    return "0-1"
                }, betTeam: "0:1"
            }, {
                title: function () {
                    return "0-2"
                }, betTeam: "0:2"
            }, {
                title: function () {
                    return "1-2"
                }, betTeam: "1:2"
            }, {
                title: function () {
                    return "0-3"
                }, betTeam: "0:3"
            }, {
                title: function () {
                    return "1-3"
                }, betTeam: "1:3"
            }, {
                title: function () {
                    return "2-3"
                }, betTeam: "2:3"
            }]]
        },
        2801: {
            Name: function () {
                return n.BettypeName.Get("2801")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2802: {
            Name: function () {
                return n.BettypeName.Get("2802")
            }, HasLine: 99, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "1"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "2"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "x"
            }]
        },
        2803: {
            Name: function () {
                return i.Get("lbl_Header_FTOU_OU")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        2804: {
            Name: function () {
                return n.BettypeName.Get("2804")
            }, HasLine: 0, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        2805: {
            Name: function () {
                return i.Get("lbl_Header_FTHDP_OU")
            }, HasLine: 1, Col: 0, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2806: {
            Name: function () {
                return n.BettypeName.Get("2806")
            }, HasLine: 1, Col: -1, Options: [{
                title: function () {
                    return i.Get("lbl_home")
                }, betTeam: "h"
            }, {
                title: function () {
                    return i.Get("lbl_away")
                }, betTeam: "a"
            }]
        },
        2807: {
            Name: function () {
                return n.BettypeName.Get("2807")
            }, HasLine: 99, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;1-5"
                }, betTeam: "H1-5"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;1-5"
                }, betTeam: "A1-5"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;6-10"
                }, betTeam: "H6-10"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;6-10"
                }, betTeam: "A6-10"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;11+"
                }, betTeam: "H11+"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;11+"
                }, betTeam: "A11+"
            }]
        },
        2808: {
            Name: function () {
                return n.BettypeName.Get("2808")
            }, HasLine: 99, Col: 3, Options: [{
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;1-5"
                }, betTeam: "H1-5"
            }, {
                title: function () {
                    return i.Get("lbl_draw")
                }, betTeam: "D"
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;1-5"
                }, betTeam: "A1-5"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;6-10"
                }, betTeam: "H6-10"
            }, {
                title: function () {
                    return ""
                }
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;6-10"
                }, betTeam: "A6-10"
            }, {
                title: function () {
                    return i.Get("lbl_home") + "&nbsp;11+"
                }, betTeam: "H11+"
            }, {
                title: function () {
                    return ""
                }
            }, {
                title: function () {
                    return i.Get("lbl_away") + "&nbsp;11+"
                }, betTeam: "A11+"
            }]
        },
        2809: {
            Name: function () {
                return i.Get("lbl_2809")
            }, HasLine: 99, Col: -2, RidSeq: "2809:20,2809:40,2809:60", Options: [{
                title: function (n) {
                    return i.Get("lbl_home") + " " + n.substr(0, 2)
                }, betTeam: "h"
            }, {
                title: function (n) {
                    return i.Get("lbl_away") + " " + n.substr(0, 2)
                }, betTeam: "a"
            }]
        },
        2811: {
            Name: function () {
                return n.BettypeName.Get("2811")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        2812: {
            Name: function () {
                return n.BettypeName.Get("2812")
            }, HasLine: 0, Col: 2, Options: [{
                title: function () {
                    return i.Get("lbl_over")
                }, betTeam: "o"
            }, {
                title: function () {
                    return i.Get("lbl_under")
                }, betTeam: "u"
            }]
        },
        9001: r("9001"),
        9002: r("9002", !0),
        9003: r("9003", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9005: r("9005", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9006: r("9006"),
        9007: r("9007"),
        9008: r("9008", !0),
        9009: r("9009", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9011: r("9011"),
        9012: r("9012", !0),
        9013: r("9013", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9015: r("9015"),
        9016: r("9016"),
        9017: r("9017"),
        9018: r("9018", !0),
        9019: r("9019", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9021: r("9021"),
        9022: r("9022"),
        9023: r("9023"),
        9024: r("9024", !0),
        9025: r("9025", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9027: r("9027"),
        9028: r("9028", !0),
        9029: r("9029", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9031: r("9031"),
        9032: r("9032"),
        9033: r("9033"),
        9034: r("9034", !0),
        9035: r("9035", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9037: r("9037"),
        9038: r("9038"),
        9039: r("9039"),
        9040: r("9040", !0),
        9041: r("9041", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9043: r("9043"),
        9044: r("9044"),
        9045: r("9045"),
        9046: r("9046", !0),
        9047: r("9047", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9049: r("9049"),
        9050: r("9050"),
        9051: r("9051"),
        9052: r("9052", !0),
        9053: r("9053", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9055: r("9055"),
        9056: r("9056"),
        9057: r("9057"),
        9058: r("9058", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9059: r("9059", !0),
        9060: r("9060", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9061: r("9061", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9062: r("9062"),
        9063: r("9063"),
        9064: r("9064"),
        9067: r("9067"),
        9068: r("9068"),
        9070: r("9070", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9071: r("9071", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9072: r("9072"),
        9073: r("9073", !1, {s1key: "lbl_yes", s1val: "y", s2key: "lbl_no", s2val: "n"}),
        9074: r("9074", !0, {s1key: "lbl_over", s1val: "o", s2key: "lbl_under", s2val: "u"}),
        9075: r("9075", !1, {s1key: "lbl_yes", s1val: "y", s2key: "lbl_no", s2val: "n"}),
        9076: r("9076", !0),
        9077: r("9077", !0),
        9078: r("9078", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9079: r("9079", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9080: r("9080", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9081: r("9081", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9082: r("9082", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9083: r("9083", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9084: r("9084", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9085: r("9085", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"}),
        9086: r("9086", !1, {s1key: "lbl_odd", s1val: "o", s2key: "lbl_even", s2val: "e"})
    }, f = function (n, t) {
        var u = "{0}:00 - {1}:59", i, r;
        return t == 0 && (u = "{0}:00"), i = "0" + n.toString(), t = t + n - 1, r = "0" + t.toString(), u.format([i.substring(i.length - 2), r.substring(r.length - 2)])
    };
    return {
        CategorySeq: ["Main", "Full", "Half", "Corners", "Intervals", "Specials", "Players", "Fastmarket", "QUARTER"],
        CategorySetting: a,
        BetTypeSetting: v,
        FastMarketTimerList: f,
        CategorySort: [0, 1, 2, 7, 3, 4, 5, 6, 8],
        EsportSport: l
    }
})