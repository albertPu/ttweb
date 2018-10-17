package com.cx.tt.entity

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.Table
import org.joda.time.DateTime
import java.util.*

open class BaseEntity : IdTable<String>() {
    override val id: Column<EntityID<String>> = varchar("id", 64).clientDefault { UUID.randomUUID().toString() }.primaryKey().entityId()
    var createTime = datetime("createTime").default(DateTime(Date()))
    var updateTime = datetime("updateTime").default(DateTime(Date()))
}