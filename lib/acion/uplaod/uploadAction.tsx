// "use server";

// import * as fs from 'node:fs/promises';
// import path from 'path';
// import { revalidatePath } from 'next/cache';
// import { cookies } from 'next/headers'
// import prisma from '@/lib/prisma';
// import { decrypt } from '@/lib/session';
// import { User } from 'lucide-react';


// export async function uploadAndSaveFile(formData: FormData) {
//     console.log("step", formData.get("avatar"));
    
//     const file = formData.get("avatar") as File;
//     console.log("step1", file);
    
//     if (!file || file.size === 0) {
//         return { success: false, message: 'No file provided.' };
//     }

//     // Convert File to a Buffer
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = new Uint8Array(arrayBuffer);
//     console.log("step2", buffer);
    
//     // --- 1. Save the physical file (locally in dev, S3 in prod) ---
//     const uploadDir = path.join(process.cwd(), 'public/img/avatar');
//     const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
//     const filePath = path.join(uploadDir, filename);
//     const publicPath = `/img/avatar/${filename}`; // The path we store in the DB
//     const session = (await cookies()).get('session')?.value
//     const payload = await decrypt(session);
//     console.log("step3", session);
    
//     try {
//         await fs.mkdir(uploadDir, { recursive: true });
//         await fs.writeFile(filePath, buffer);

//         // --- 2. Save the file metadata to the database using Prisma ---
        
//         const savedFileRecord = await prisma.user.update({
//             where: {
//                 id: payload?.userId as string
//             },
//             data: {
//                 image: publicPath,
//                 // mimetype: file.type,
//                 // path: publicPath,
//             },
//         });

//         console.log(`File saved locally and database record created with ID: ${savedFileRecord.id}`);
        
//         // Refresh cached data that might display file lists
//         revalidatePath('/dashboard/files'); 

//         return { success: true, message: 'File successfully processed', fileId: savedFileRecord.id };

//     } catch (error) {
//         console.error("File processing error:", error);
//         return { success: false, message: 'An error occurred during file upload or database entry.' };
//     }
// }