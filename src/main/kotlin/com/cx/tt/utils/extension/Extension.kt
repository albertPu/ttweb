@file:Suppress("UNUSED_EXPRESSION")

package com.cx.tt.utils.extension

import com.cx.tt.globe.WebException
import org.jetbrains.exposed.sql.Query
import java.text.SimpleDateFormat
import java.util.*

fun Query.findOne(): Query {
    return this.limit(1, 0)
}

fun String.createOrderNo(): String {
    val df = SimpleDateFormat("yyyyMMddHHmm")
    val calendar = Calendar.getInstance()
    val dateName = df.format(calendar.time)
    val x: Int = ((Math.random() * 9 + 1) * 100000).toInt()
    val random_order = x.toString()
    return dateName + random_order
}

fun <T> Iterable<T>.firstOrThrow(msg: String = "未知错误"): T? {
    return when (this) {
        is List -> {
            if (isEmpty())
                throw WebException(msg)
            else
                this[0]
        }
        else -> {
            val iterator = iterator()
            if (!iterator.hasNext())
                throw WebException(msg)
            iterator.next()
        }
    }
}

fun <T> Iterable<T>.firstOne(msg: String = "未知错误"): Iterable<T> {
    return when (this) {
        is List -> this.firstOne(msg)
        else -> {
            val iterator = iterator()
            if (!iterator.hasNext())
                throw WebException(msg)
            else
                this
        }
    }
}

fun <T> Iterable<T>.isNull(msg: String = "未知错误"): Boolean {
    when (this) {
        is List -> {
            when (size) {
                0 -> true
                else -> throw WebException(msg)
            }
        }
        else -> {
            val iterator = iterator()
            if (!iterator.hasNext())
                true
            if (iterator.hasNext())
                throw WebException(msg)
        }
    }
    return false
}

fun <T> List<T>.firstOne(msg: String): Iterable<T> {
    return when (size) {
        0 -> throw WebException(msg)
        1 -> this
        else -> throw WebException(msg)
    }
}