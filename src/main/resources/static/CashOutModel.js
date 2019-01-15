define(["backbone", "common", "accountModel", "PushModel"], function (n, t, i, r) {
    var f = n.Model.extend({
        idAttribute: "TransId", initialize: function (n) {
            this.set(n.attrs);
            this.tmodel = n;
            this.tmodel.on("update", this.update.bind(this))
        }, update: function (n, t) {
            this.set(t.attrs)
        }, dispose: function () {
            this.tmodel.off("update", this.update.bind(this));
            this.off("change")
        }, CalculatePrice: function (n) {
            return u.Store ? u.Store.CalculatePrice(this.tmodel, n) : 0
        }, BuyBack: function (n, i, r) {
            var f = this.CalculatePrice(n), u;
            if (i != f) {
                r && r(1, n, i);
                return
            }
            u = {
                Gkey: this.tmodel.PriceModel.attrs.GroupKey,
                Gid: this.tmodel.PriceModel.attrs.PriceGroupNo,
                WinProb: this.tmodel.PriceModel.attrs.WinProb,
                Margin: this.tmodel.PriceModel.attrs.Margin,
                TransID: this.get("TransId"),
                Stake: n,
                Offer: i
            };
            t.SyncServer("CashOut/BuyBack", u, function (t) {
                var u = 99;
                if (t && t.ErrorCode != null) {
                    switch (t.ErrorCode) {
                        case 0:
                            u = 2;
                            break;
                        case 2:
                            u = 2;
                            break;
                        case 3:
                            u = -3;
                            break;
                        case 1:
                            u = 1;
                            break;
                        case 4:
                            u = -3;
                            break;
                        case 5:
                            u = -7;
                            break;
                        case 201:
                            u = -8;
                            break;
                        case 202:
                            u = -9;
                            break;
                        default:
                            u = t.ErrorCode
                    }
                    u == 1 && (this.tmodel.PriceModel.update({
                        WinProb: t.Data.WinProb,
                        Margin: t.Data.Margin
                    }, "noupdate"), this.tmodel.updatePayout(null, this.tmodel.PriceModel, "noupdate"))
                }
                r && r(u, n, i)
            }.bind(this))
        }, Confirm: function (n) {
            var i = {TransId: this.get("TransId"), TradeId: this.get("TradeID"), GroupNo: this.get("PriceGroupNo")};
            t.SyncServer("CashOut/Confirm", i, function (t) {
                if (t && t.ErrorCode != null) switch (t.ErrorCode) {
                    case 0:
                    case 10:
                        t.Data && this.tmodel.update({
                            Stake: t.Data.Stake,
                            Status: t.ErrorCode,
                            OrgStake: t.Data.OrgStake
                        })
                }
                n && n(t)
            }.bind(this))
        }
    }), e = n.Collection.extend({model: f}), o = n.Model.extend({
        defaults: {ticketCollection: new e}, initialize: function () {
        }, SyncData: function () {
            var n = this;
            require(["socket.io.min"], function (i) {
                window.io = i;
                t.SyncServer("CashOut/Index", null, function (t) {
                    t && n.subscribe(t.Data)
                })
            })
        }, subscribe: function (n) {
            !this.Store || this.Store.isDisposed() ? r.CreateStore("CashOut", null, function (t) {
                this.Store = t;
                this.Store.getTicketCollection().on("add", this.CollectionAdd.bind(this));
                this.Store.getTicketCollection().on("remove", this.CollectionRemove.bind(this));
                this.Store.subscribe(n)
            }.bind(this)) : this.Store.subscribe(n)
        }, CollectionAdd: function (n) {
            var t = new f(n);
            this.get("ticketCollection").add(t)
        }, CollectionRemove: function (n) {
            var t = this.get("ticketCollection").remove(n.attrs.TransId);
            t && t.dispose()
        }, unsubscribe: function () {
            this.Store && !this.Store.isDisposed() && (this.Store.dispose(), this.Store = null, this.get("ticketCollection").reset(null))
        }
    }), u = new o;
    return u
})