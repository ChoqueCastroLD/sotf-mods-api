/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Game_VersionInputs */

const en_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game version`)
};

const es_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión del juego`)
};

const de_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spielversion`)
};

const fr_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du jeu`)
};

const it_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione del gioco`)
};

const nl_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameversie`)
};

const pl_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja gry`)
};

const pt_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do jogo`)
};

const ru_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия игры`)
};

const sv_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversion`)
};

const tr_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü`)
};

const zh_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_upload_manifest_game_version = /** @type {(inputs: Upload_Manifest_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームバージョン`)
};

/**
* | output |
* | --- |
* | "Game version" |
*
* @param {Upload_Manifest_Game_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_game_version = /** @type {((inputs?: Upload_Manifest_Game_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Game_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_game_version(inputs)
	if (locale === "de") return de_upload_manifest_game_version(inputs)
	if (locale === "fr") return fr_upload_manifest_game_version(inputs)
	if (locale === "it") return it_upload_manifest_game_version(inputs)
	if (locale === "nl") return nl_upload_manifest_game_version(inputs)
	if (locale === "pl") return pl_upload_manifest_game_version(inputs)
	if (locale === "pt") return pt_upload_manifest_game_version(inputs)
	if (locale === "ru") return ru_upload_manifest_game_version(inputs)
	if (locale === "sv") return sv_upload_manifest_game_version(inputs)
	if (locale === "tr") return tr_upload_manifest_game_version(inputs)
	if (locale === "zh") return zh_upload_manifest_game_version(inputs)
	if (locale === "ja") return ja_upload_manifest_game_version(inputs)
	return en_upload_manifest_game_version(inputs)
});
