import { canisterId, createActor  } from '../../../declarations/backend'

import {  UserProfile } from '../../../declarations/backend/backend.did'

export async function login(): Promise<number> {
return await api.login();
}

// 2. Create an actor
const api = createActor(canisterId);


// 3. Call the method and handle promise correctly
(async () => {
  try {
    const result = await api.list_groups();
    console.log("Groups:", result);
  } catch (err) {
    console.error("Error calling list_groups:", err);
  }
})();


export async function getUser() {
const user = await api.get_user();
return user ?? null;
}
export async function getProfile() {
return await api.get_profile();
}
export async function updateProfile(
username?: string,
avatar?: string,
age?: number,
bio?: string
){
return await api.update_profile([username], [avatar], [age.toString()], [bio]);
}
export async function createPost(content: string, groupId: bigint) {
return await api.create_post(content, groupId);
}
export async function getPost(postId: bigint) {
return await api.get_post(postId);
}
export async function getGroupPosts(groupId: bigint) {
return await api.get_group_posts(groupId);
}export async function likePost(postId: bigint) {
return await api.like_post(postId);
}
export async function unlikePost(postId: bigint) {
return await api.unlike_post(postId);
}
export async function showLikes(postId: bigint) {
return await api.show_likes(postId);
}
export async function createGroup(name: string) {
return await api.create_group(name);
}
export async function getGroup(groupId: bigint) {
return await api.get_group(groupId);
}
export async function listGroups() {
return await api.list_groups();
}
export async function joinGroup(groupId: bigint) {
return await api.join_group(groupId);
}
export async function leaveGroup(groupId: bigint) {
return await api.leave_group(groupId);
}
export async function updateGroupProfile(groupId: bigint, profile: any) {
return await api.update_group_profile(groupId, profile);
}export async function createCarInfo(
model: string,
brand: string,
year: number,
desc: string
){
return await api.create_carinfo(model, brand, year, desc);
}
export async function getCarInfo(id: bigint) {
return await api.get_carinfo(id);
}
export async function listCarInfos() {
return await api.list_carinfos();
}
export async function updateCarInfo(
id: bigint,
model?: string,
brand?: string,
year?: number,
desc?: string
){
return await api.update_carinfo(id, [model], [brand], [year], [desc]);
}

