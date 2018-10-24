package com.cx.tt.web.controller.file

import com.cx.tt.globe.WebException
import com.cx.tt.utils.ImageUtil
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.admin.FileVo
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpRequest
import org.springframework.util.StringUtils
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.net.URL
import java.util.*
import javax.servlet.http.HttpServletRequest

@RestController
class FileController : BaseController() {

    @Value("\${img.location}")
    private val location: String? = null


    @Value("\${web.host}")
    private val host: String? = null

    @PostMapping("/file/img/upload")
    fun uploadImg(@RequestParam("file") multipartFile: MultipartFile): Any {
        if (multipartFile.isEmpty || StringUtils.isEmpty(multipartFile.originalFilename)) {
            throw WebException("上传文件为空")
        }
        val contentType = multipartFile.contentType
        if (!contentType.contains("png") && !contentType.contains("jpg") && !contentType.contains("image/jpeg")) {
            throw WebException("上传类型错误")
        }
        val rootFileName = multipartFile.originalFilename
        val fileName: String?
        return try {
            val uid: String? = UUID.randomUUID().toString()
            fileName = ImageUtil.saveImg(multipartFile, location, rootFileName, uid)
            val fileVo = FileVo("$host/img/$fileName", uid)
            success(fileVo)
        } catch (e: IOException) {
            e.printStackTrace()
            success(e.printStackTrace())
        }
    }
}