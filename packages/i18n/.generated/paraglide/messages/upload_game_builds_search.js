/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_SearchInputs */

const en_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search builds`)
};

const es_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar builds`)
};

const de_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds suchen`)
};

const fr_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher un build`)
};

const it_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca build`)
};

const nl_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds zoeken`)
};

const pl_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj buildów`)
};

const pt_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar builds`)
};

const ru_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти сборку`)
};

const sv_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök spelversion`)
};

const tr_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm ara`)
};

const zh_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索版本`)
};

const ja_upload_game_builds_search = /** @type {(inputs: Upload_Game_Builds_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドを検索`)
};

/**
* | output |
* | --- |
* | "Search builds" |
*
* @param {Upload_Game_Builds_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_search = /** @type {((inputs?: Upload_Game_Builds_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_search(inputs)
	if (locale === "de") return de_upload_game_builds_search(inputs)
	if (locale === "fr") return fr_upload_game_builds_search(inputs)
	if (locale === "it") return it_upload_game_builds_search(inputs)
	if (locale === "nl") return nl_upload_game_builds_search(inputs)
	if (locale === "pl") return pl_upload_game_builds_search(inputs)
	if (locale === "pt") return pt_upload_game_builds_search(inputs)
	if (locale === "ru") return ru_upload_game_builds_search(inputs)
	if (locale === "sv") return sv_upload_game_builds_search(inputs)
	if (locale === "tr") return tr_upload_game_builds_search(inputs)
	if (locale === "zh") return zh_upload_game_builds_search(inputs)
	if (locale === "ja") return ja_upload_game_builds_search(inputs)
	return en_upload_game_builds_search(inputs)
});
