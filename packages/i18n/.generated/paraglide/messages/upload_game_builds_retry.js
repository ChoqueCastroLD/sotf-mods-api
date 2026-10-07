/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_RetryInputs */

const en_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_upload_game_builds_retry = /** @type {(inputs: Upload_Game_Builds_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Upload_Game_Builds_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_retry = /** @type {((inputs?: Upload_Game_Builds_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_retry(inputs)
	if (locale === "de") return de_upload_game_builds_retry(inputs)
	if (locale === "fr") return fr_upload_game_builds_retry(inputs)
	if (locale === "it") return it_upload_game_builds_retry(inputs)
	if (locale === "nl") return nl_upload_game_builds_retry(inputs)
	if (locale === "pl") return pl_upload_game_builds_retry(inputs)
	if (locale === "pt") return pt_upload_game_builds_retry(inputs)
	if (locale === "ru") return ru_upload_game_builds_retry(inputs)
	if (locale === "sv") return sv_upload_game_builds_retry(inputs)
	if (locale === "tr") return tr_upload_game_builds_retry(inputs)
	if (locale === "zh") return zh_upload_game_builds_retry(inputs)
	if (locale === "ja") return ja_upload_game_builds_retry(inputs)
	return en_upload_game_builds_retry(inputs)
});
