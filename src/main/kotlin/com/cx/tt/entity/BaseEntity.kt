package com.cx.tt.entity

import org.jetbrains.exposed.dao.UUIDTable
import org.joda.time.DateTime
import java.util.*

open class BaseEntity : UUIDTable() {
    var createTime = datetime("createTime").default(DateTime(Date()))
    var updateTime = datetime("updateTime").default(DateTime(Date()))
}