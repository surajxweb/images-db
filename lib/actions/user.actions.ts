"use server";

import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import { revalidatePath } from "next/cache";

export async function createUser({ id, email }: { id: string; email: string }) {
  try {
    connectToDB();

    await User.create({
      userId: id,
      emailOfUser: email,
    });
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

export async function addImageToLibrary({
  userId,
  imageId,
  imageUrl,
  path,
}: {
  userId: string;
  imageId: string;
  imageUrl: string;
  path: string;
}) {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        $push: {
          userLibrary: {
            imageId: imageId,
            imageUrl: imageUrl,
          },
        },
      },
      {
        upsert: true,
      }
    );
    revalidatePath("/user/library");
    revalidatePath(path);
  } catch (e: any) {
    throw new Error(
      "Failed to push image to user library. Error: " + e.message
    );
  }
}

export async function addImageToDownloadHistory({
  userId,
  imageId,
  imageUrl,
  path,
}: {
  userId: string;
  imageId: string;
  imageUrl: string;
  path: string;
}) {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        $push: {
          downloadHistory: {
            imageId: imageId,
            imageUrl: imageUrl,
          },
        },
      },
      {
        upsert: true,
      }
    );
    revalidatePath("/user/history");
    revalidatePath(path);
  } catch (e: any) {
    throw new Error(
      "Failed to push image to user download history. Error: " + e.message
    );
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    return await User.findOne({ userId: userId });
  } catch (e: any) {
    throw new Error("User nahi mila, ye dekho: ", e);
  }
}

export async function fetchUserInString(userId: string) {
  try {
    connectToDB();
    const userInfo = await User.findOne({ userId: userId });
    console.log(userInfo);

    // Convert the user information to a JavaScript object
    const userObject = userInfo.toObject();

    return JSON.stringify(userObject); // Returning the stringified object
  } catch (e: any) {
    throw new Error("User nahi mila, ye dekho: ", e);
  }
}
