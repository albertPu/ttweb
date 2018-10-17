package com.cx.tt

import com.cx.tt.entity.MMember
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.joda.time.DateTime
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import java.lang.reflect.Member

@RunWith(SpringRunner::class)
@SpringBootTest
class TtApplicationTests {

    @Test
    fun contextLoads() {

        val now = DateTime.now()
        println(now.toString())

    }

}
