@file:Suppress("UNUSED_EXPRESSION")

package com.cx.tt.utils.extension

import com.cx.tt.globe.WebException
import org.jetbrains.exposed.sql.Query

fun Query.findOne(): Query {
    return this.limit(1, 0)
}


fun <T> Iterable<T>.firstOne(msg: String = "未知错误"): Iterable<T> {
    return when (this) {
        is List -> this.firstOne(msg)
        else -> {
            val iterator = iterator()
            if (!iterator.hasNext())
                throw WebException(msg)
            val single = iterator.next()
            if (iterator.hasNext())
                throw WebException(msg)
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