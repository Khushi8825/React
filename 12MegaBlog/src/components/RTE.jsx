import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        {/* <Editor apiKey='8zc0pualkn4sg9j61y8dak0a9vwx8qpz43dy688luh8cqmo8'/> */}

        <Controller
        name={name || "content"}
        control = {control}
        render={({field: {onChange}}) => (
        <Editor
          apiKey='8zc0pualkn4sg9j61y8dak0a9vwx8qpz43dy688luh8cqmo8'
          // value = {value}
          initialValue={defaultValue}
          init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
              ],
              toolbar:
              "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          }}
          onEditorChange={onChange}
        />
        )}/>
    </div>
  )
}

export default RTE