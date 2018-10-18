package com.cx.tt

import com.cx.tt.entity.MMember
import com.cx.tt.entity.MOrders
import com.cx.tt.utils.SpringUtil
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer
import org.springframework.web.context.WebApplicationContext
import javax.sql.DataSource

@SpringBootApplication
class TtApplication : CommandLineRunner {


    @Autowired
    var dataSource: DataSource? = null;

    override fun run(vararg args: String?) {
        Database.connect(dataSource!!)
        transaction {
            SchemaUtils.createMissingTablesAndColumns(MMember, MOrders)
        }
    }

}

fun main(args: Array<String>) {
    runApplication<TtApplication>(*args)
    //Database.connect(SpringUtil.getBean("DataSource") as DataSource)
    // Database.connect("jdbc:mysql://localhost/test?useSSL=false&serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull", "com.mysql.jdbc.Driver", "root", "123456")

}







