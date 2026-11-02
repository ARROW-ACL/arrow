#!/usr/bin/env bash
# Downloads headshots from the Wix mockup into assets/people/ so the
# GitHub site doesn't depend on Wix. Run once from the repo root:
#   bash scripts/fetch-photos.sh
# Then commit the new files in assets/people/.
# Photos already in the folder are skipped.
set -euo pipefail
cd "$(dirname "$0")/../assets/people"

W="https://static.wixstatic.com/media"
# Wix serves a cropped 178px image; ask for 400px with the same crop.
get() { [ -f "$1" ] && { echo "skip $1 (already have it)"; return; }; curl -fsSL "${2//w_178,h_178/w_400,h_400}" -o "$1" && echo "ok   $1" || echo "FAIL $1"; }

get kuenze.jpg      "$W/c83162_7308a3fe8e1342e498c82da2012081ed~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/c83162_7308a3fe8e1342e498c82da2012081ed~mv2.jpg"
get kupperman.jpg   "$W/c83162_1a90ff6fc1d843aab0a60012c5f8fd82~mv2.jpg/v1/crop/x_256,y_0,w_1536,h_1536/fill/w_178,h_178,al_c,q_80/kupperman_headshot.jpg"
get baez.jpg        "$W/c83162_94fe3f9686c442c896a9198362e36bca~mv2.png/v1/crop/x_167,y_0,w_621,h_620/fill/w_178,h_178,al_c,q_85/Baez.png"
get butler.jpg      "$W/c83162_ee6fab92960e45a693f830243e100181~mv2.png/v1/crop/x_5,y_0,w_462,h_462/fill/w_178,h_178,al_c,q_85/Butler.png"
get chang.jpg       "$W/c83162_73dd0131e28b4148b27f122515146d62~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/Chang.jpg"
get ulman.jpg       "$W/c83162_1a369efef2c74d658d727e8ba55b1d5e~mv2.jpg/v1/crop/x_0,y_29,w_750,h_749/fill/w_178,h_178,al_c,q_80/Ulman.jpg"
get weaver.jpg      "$W/c83162_737b9187610242f58ed42601117978b4~mv2.jpg/v1/crop/x_0,y_5,w_240,h_240/fill/w_178,h_178,al_c,q_80/Weaver.jpg"
get hart.jpg        "$W/c83162_5ba401dea68041d4b7fd41b0c3debd77~mv2.jpg/v1/crop/x_1,y_0,w_2907,h_2907/fill/w_178,h_178,al_c,q_80/Hart.jpg"
get spang.jpg       "$W/c83162_0ffb6197f2c54c868854d7aaec4661d9~mv2.jpg/v1/crop/x_0,y_12,w_166,h_166/fill/w_178,h_178,al_c,q_80/Spang_JPG.jpg"
get collins.jpg     "$W/c83162_e59c5fef954846a5b2a787f0bd98ddbf~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/Collins.jpg"
get reiche.jpg      "$W/c83162_b93607bcf0d44020a95fab8795f1f82b~mv2.jpg/v1/crop/x_0,y_475,w_2848,h_2848/fill/w_178,h_178,al_c,q_80/Headshot.jpg"
get birchmeier.jpg  "$W/c83162_04755ab034934a65ad3debf6cdc11d42~mv2.png/v1/fill/w_178,h_178,al_c,q_85/Birchmeier_PNG.png"
get roman.jpg       "$W/c83162_67188a12b0bd41f4bc8075766534407c~mv2.jpg/v1/crop/x_0,y_5,w_240,h_240/fill/w_178,h_178,al_c,q_80/Roman.jpg"
get giampetruzzi.jpg "$W/c83162_f8d2fff2078e4b15b84da2f2afa1549c~mv2.jpg/v1/crop/x_0,y_30,w_2667,h_2667/fill/w_178,h_178,al_c,q_80/Giampetruzzi.jpg"
get harkey.jpg      "$W/c83162_545832682ed44d63aa74c8446eff4647~mv2.jpg/v1/crop/x_250,y_0,w_3712,h_3712/fill/w_178,h_178,al_c,q_80/Harkey.jpg"
get thompson.jpg    "$W/c83162_e012b3c9b2c141bc98ddcc0bb9f2f089~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/Thompson.jpg"
get walaszek.jpg    "$W/c83162_bbab45d466254b55aca8fb3d5afb061d~mv2.png/v1/crop/x_0,y_2,w_639,h_639/fill/w_178,h_178,al_c,q_85/Walaszek_PNG.png"
get lisee.jpg       "$W/c83162_48124f3e44dd4021b1ba26236372eea6~mv2.jpg/v1/crop/x_0,y_8,w_284,h_284/fill/w_178,h_178,al_c,q_80/Lisee.jpg"
get walker.jpg      "$W/c83162_45774e1831da4acea0e72c3e388140d3~mv2.jpg/v1/crop/x_129,y_0,w_1221,h_1221/fill/w_178,h_178,al_c,q_80/Landers.jpg"
get ganley.jpg      "$W/c83162_b632d99b00204ce4829be7857ff0ba25~mv2.jpg/v1/crop/x_16,y_0,w_454,h_454/fill/w_178,h_178,al_c,q_80/Ganley.jpg"
get greenberg.jpg   "$W/c83162_49fe5651ee1943e3ae75f85998886c84~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/greenberg.jpg"
get link.jpg        "$W/c83162_e04e3c0776794b498f6927ff4e8970e0~mv2.jpg/v1/crop/x_0,y_736,w_2080,h_2080/fill/w_178,h_178,al_c,q_80/Link.jpg"
get cherelstein.jpg "$W/c83162_a6c96ed487f647edb307e3053737af3e~mv2.jpg/v1/crop/x_0,y_47,w_1170,h_1170/fill/w_178,h_178,al_c,q_80/Cherelstein.jpg"
get martinez.jpg    "$W/c83162_8d4900361b4f4512858888399f3af0fc~mv2.jpg/v1/crop/x_264,y_0,w_1514,h_1512/fill/w_178,h_178,al_c,q_80/Martinez.jpg"
get ellis.jpg       "$W/c83162_301df7fc45fc4744bd711b61162a21ad~mv2.jpg/v1/crop/x_0,y_0,w_500,h_499/fill/w_178,h_178,al_c,q_80/Henry-Ellis.jpg"
get landers.jpg     "$W/c83162_e148279d56454a17af71a8d144965e5e~mv2.jpg/v1/crop/x_0,y_8,w_500,h_499/fill/w_178,h_178,al_c,q_80/Jacob-Landers.jpg"
get blatchford.jpg  "$W/c83162_ba6a9e7906924fd8a116d08bdbf5b019~mv2.jpg/v1/crop/x_0,y_135,w_1080,h_1080/fill/w_178,h_178,al_c,q_80/Blatchford_JPG.jpg"
get grindstaff.jpg  "$W/c83162_12f6304fdfda4c6a93b43133374f404c~mv2.jpg/v1/crop/x_0,y_0,w_300,h_300/fill/w_178,h_178,al_c,q_80/Grindstaff.jpg"
get farmer.jpg      "$W/c83162_eb484074649647f28d3c3a3d8bd5e99d~mv2.jpg/v1/crop/x_0,y_0,w_600,h_599/fill/w_178,h_178,al_c,q_80/Farmer.jpg"
get harrison.jpg    "$W/c83162_9eb9016b8dce42239febe779598351ba~mv2.jpg/v1/crop/x_0,y_200,w_1600,h_1600/fill/w_178,h_178,al_c,q_80/Harrison.jpg"
get ma.jpg          "$W/c83162_5212a3389cc94174b8a65362ac470611~mv2.jpg/v1/crop/x_0,y_18,w_1600,h_1596/fill/w_178,h_178,al_c,q_80/Ma.jpg"
get douthit.jpg     "$W/c83162_29a0011b37904ced8f5e0ffea79da939~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80/Douthit_jfif.jpg"
get saper.jpg       "$W/c83162_df4c8fa8fa514d6391dbca79d1078e99~mv2.jpg/v1/crop/x_0,y_349,w_2832,h_2827/fill/w_178,h_178,al_c,q_80/Saper_JPG.jpg"
get wong.jpg        "$W/c83162_4fe99f2f8dbb4afaa0bacc56a0fddafc~mv2.jpg/v1/crop/x_710,y_0,w_2840,h_2840/fill/w_178,h_178,al_c,q_80/Wong.jpg"

echo "Done. Commit the files in assets/people/."
