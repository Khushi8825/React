        import conf from '../conf/conf.js';
        import {Client, ID, Databases, Storage, Query} from "appwrite";
        import { Permission, Role } from 'appwrite';
        export class Service{
            client = new Client();
            database;
            bucket;

            constructor(){
                this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
                this.database = new Databases(this.client);
                this.bucket = new Storage(this.client);
            }

            async createPost({title, slug, content, image, status, userId}){
                try{
                    return await this.database.createDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        ID.unique(),
                        {
                            title,
                            content,
                            image,
                            status,
                            userId,
                        }
                    )
                }catch(error){
                    console.log("Appwrite service :: createPost :: error", error);
                    return null;
                }
            }

            async updatePost(slug, {title, content, image, status}){
                try{
                    return await this.database.updateDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug,
                        {
                            title,
                            content,
                            image,
                            status
                        }

                    )
                }catch(error){
                    console.log("Appwrite service :: updatePost :: error", error);
                    return null;
                }
            }

            async deletePost(slug){
                try{
                    await this.database.deleteDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug 
                    )
                    return true;
                } catch(error){
                    console.log("Appwrite service :: deletePost :: error", error);
                    return false    
                }
            }

            async getPost(slug){
                try{
                    return await this.database.getDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug
                    )
                }catch(error){
                    console.log("Appwrite service :: getPost :: error", error);
                    return false;
                }
            }

            async getAllPost(queries = [Query.equal("status","active")]){

                try{
                    return await this.database.listDocuments(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        queries,
                    )
                }catch(error){
                    console.log("Appwrite service :: getAllPost :: error", error);
                    return false;
                }
            }

            //file upload service

            async uploadFile(file){
                try {
                    return await this.bucket.createFile(
                        conf.appwriteBucketId,
                        ID.unique(),
                        file,
                        [
                            Permission.read(Role.any())
                        ]
                    )
                } catch (error) {
                    console.log("Appwrite service :: uploadFile :: error", error);
                    return null;
                }
            }

            async deleteFile(fileId){
                try {
                    await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
                    return true;
                } catch (error) {
                    console.log("Appwrite service :: deleteFile :: error", error);
                    return false
                }
            }

            getFileView(fileId){
                return this.bucket.getFileView(
                    conf.appwriteBucketId,
                    fileId
                )
            }
        }

        const service = new Service()
        export default service