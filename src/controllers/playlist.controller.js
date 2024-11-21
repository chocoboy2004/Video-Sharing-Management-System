import AsyncHandler from "../utils/AsyncHandler.js"
import HandleResponse from "../utils/HandleResponse.js"
import HandleError from "../utils/HandleResponse.js"
import Playlist from "../models/playlist.model.js"

const createPlaylist = AsyncHandler(async (req, res) => {})

const getPlaylistById = AsyncHandler(async (req, res) => {})

const getPlaylistsByTitle = AsyncHandler(async (req, res) => {})

const getAllPlaylists = AsyncHandler(async (req, res) => {})

const deletePlaylistById = AsyncHandler(async (req, res) => {})

const deleteAllPlaylists = AsyncHandler(async (req, res) => {})

const addVideoToPlaylist = AsyncHandler(async (req, res) => {})

const removeVideoFromPlaylist = AsyncHandler(async (req, res) => {})

const updatePlaylistTitle = AsyncHandler(async (req, res) => {})

const updatePlaylistDescription = AsyncHandler(async (req, res) => {})

export {
    createPlaylist,
    getPlaylistById,
    getPlaylistsByTitle,
    getAllPlaylists,
    deletePlaylistById,
    deleteAllPlaylists,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    updatePlaylistTitle,
    updatePlaylistDescription,
}