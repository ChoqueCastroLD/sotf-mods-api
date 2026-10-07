/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Build_BreakingInputs */

const en_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaks mods`)
};

const es_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe mods`)
};

const de_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bricht Mods`)
};

const fr_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casse des mods`)
};

const it_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rompe le mod`)
};

const nl_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breekt mods`)
};

const pl_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Psuje mody`)
};

const pt_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebra mods`)
};

const ru_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ломает моды`)
};

const sv_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bryter modd`)
};

const tr_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozar`)
};

const zh_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会导致模组失效`)
};

const ja_upload_game_build_breaking = /** @type {(inputs: Upload_Game_Build_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが動かなくなる更新`)
};

/**
* | output |
* | --- |
* | "Breaks mods" |
*
* @param {Upload_Game_Build_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_build_breaking = /** @type {((inputs?: Upload_Game_Build_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Build_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_build_breaking(inputs)
	if (locale === "de") return de_upload_game_build_breaking(inputs)
	if (locale === "fr") return fr_upload_game_build_breaking(inputs)
	if (locale === "it") return it_upload_game_build_breaking(inputs)
	if (locale === "nl") return nl_upload_game_build_breaking(inputs)
	if (locale === "pl") return pl_upload_game_build_breaking(inputs)
	if (locale === "pt") return pt_upload_game_build_breaking(inputs)
	if (locale === "ru") return ru_upload_game_build_breaking(inputs)
	if (locale === "sv") return sv_upload_game_build_breaking(inputs)
	if (locale === "tr") return tr_upload_game_build_breaking(inputs)
	if (locale === "zh") return zh_upload_game_build_breaking(inputs)
	if (locale === "ja") return ja_upload_game_build_breaking(inputs)
	return en_upload_game_build_breaking(inputs)
});
