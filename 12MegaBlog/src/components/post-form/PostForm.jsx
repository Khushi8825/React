
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import Service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    

    const submit = async (data) => {
        console.log("Form submitted", data); 
        if(!userData){
            console.error("user not logged in");
            return;
        }
        // const post = await Service.createPost({
        //     ...data,
        //     userId: userData.$id,
        // });
        if (post) {
            const file = data.image[0] ? await Service.uploadFile(data.image[0]) : null;
            // const fileId = file.$id;
            if (file) {
                if(post.image)
                    Service.deleteFile(post.image);
            }

            const dbPost = await Service.updatePost(post.$id, {
                ...data,
                image: file ? file.$id : post.image,
            });

            if (dbPost?.$id) {
                navigate(`/post/${dbPost.$id}`);
            } else {
                console.error("Post creation failed:", dbPost);
            }
        // } else {
        //     const file = await Service.uploadFile(data.image[0]);

        //     if (file) {
        //         const fileId = file.$id;
        //         data.image = fileId;
        //         console.log(JSON.stringify(userData));
        //         const dbPost = await Service.createPost({ ...data, userId: userData.$id });
        //         // console.log(dbPost);
        //         // const newdata = JSON.stringify(dbPost)
        //         // console.log("hello",newdata);
        //         // if (newdata) {
        //         //     navigate(`/post/${newdata.$id}`);
        //         // }
        //         if(dbPost){
        //              navigate(`/post/${dbPost.$id}`);
        //         }
        //     }
        // }
        } else {
            const file = data.image?.[0] ? await Service.uploadFile(data.image[0]): null;
            console.log("file", file);
            const {image, ...FormData} = data;
            if (file) {
                // const fileId = file.$id;
                // data.image = fileId;

                console.log("Current userData:", userData); // ✅ debug
                const dbPost = await Service.createPost({
                    ...FormData,
                    image: file ? file.$id :undefined,
                    userId: userData.$id,  // ✅ safe now
                });
                console.log(Service.getFileView(data.image[0]));
                console.log(dbPost);
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    console.error("Post creation failed:", dbPost);
                }
            }
        }

    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={Service.getFilePreview(post.image)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
