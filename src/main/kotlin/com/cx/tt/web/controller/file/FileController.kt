package com.cx.tt.web.controller.file

import com.cx.tt.globe.WebException
import com.cx.tt.utils.ImageUtil
import com.cx.tt.web.controller.BaseController
import org.springframework.beans.factory.annotation.Value
import org.springframework.util.StringUtils
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import java.io.IOException

@RestController
class FileController : BaseController() {

   // @Value("\${img.location}")
    private val location: String? = null

    @PutMapping("/article/img/upload")
    fun uploadImg(@RequestParam("editormd-image-file") multipartFile: MultipartFile): Any {
        if (multipartFile.isEmpty || StringUtils.isEmpty(multipartFile.originalFilename)) {
            throw WebException("上传文件为空")
        }
        val contentType = multipartFile.contentType
        if (!contentType.contains("")) {
            throw WebException("上传类型错误")
        }
        val root_fileName = multipartFile.originalFilename
        //处理图片
        //获取路径
        var file_name: String? = null
        try {
            file_name = ImageUtil.saveImg(multipartFile, "")
            return ""
        } catch (e: IOException) {
            e.printStackTrace()
        }
        return ""
    }
}