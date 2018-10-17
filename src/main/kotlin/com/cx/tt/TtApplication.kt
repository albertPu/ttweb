package com.cx.tt

import com.cx.tt.entity.MMember
import com.cx.tt.entity.MOrders
import com.cx.tt.utils.SpringUtil
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import javax.sql.DataSource

@SpringBootApplication
class TtApplication


fun main(args: Array<String>) {
    runApplication<TtApplication>(*args)
    Database.connect(SpringUtil.getBean("DataSource") as DataSource)
    // Database.connect("jdbc:mysql://localhost/test?useSSL=false&serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull", "com.mysql.jdbc.Driver", "root", "123456")
    transaction {
        SchemaUtils.createMissingTablesAndColumns(MMember, MOrders)
    }
}






