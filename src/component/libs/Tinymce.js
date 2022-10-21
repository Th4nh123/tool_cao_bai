import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Tinymce() {
    const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };
    return (
        <>
            <Editor
                apiKey='0cvgyq8htwfa5cldcb7inwo3d6meev709oz5fuwnlml6q7iz'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>Text here.............</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
        </>
    );
}