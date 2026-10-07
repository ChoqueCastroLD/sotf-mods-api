/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_ClearInputs */

const en_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar todas`)
};

const de_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leeren`)
};

const fr_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout décocher`)
};

const it_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deseleziona`)
};

const nl_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить`)
};

const sv_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_upload_game_builds_clear = /** @type {(inputs: Upload_Game_Builds_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択を解除`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Upload_Game_Builds_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_clear = /** @type {((inputs?: Upload_Game_Builds_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_clear(inputs)
	if (locale === "de") return de_upload_game_builds_clear(inputs)
	if (locale === "fr") return fr_upload_game_builds_clear(inputs)
	if (locale === "it") return it_upload_game_builds_clear(inputs)
	if (locale === "nl") return nl_upload_game_builds_clear(inputs)
	if (locale === "pl") return pl_upload_game_builds_clear(inputs)
	if (locale === "pt") return pt_upload_game_builds_clear(inputs)
	if (locale === "ru") return ru_upload_game_builds_clear(inputs)
	if (locale === "sv") return sv_upload_game_builds_clear(inputs)
	if (locale === "tr") return tr_upload_game_builds_clear(inputs)
	if (locale === "zh") return zh_upload_game_builds_clear(inputs)
	if (locale === "ja") return ja_upload_game_builds_clear(inputs)
	return en_upload_game_builds_clear(inputs)
});
