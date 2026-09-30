/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_New_TitleInputs */

const en_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask for a mod`)
};

const es_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir un mod`)
};

const de_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einen Mod wünschen`)
};

const fr_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander un mod`)
};

const it_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi un mod`)
};

const nl_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod aanvragen`)
};

const pl_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o moda`)
};

const pt_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir um mod`)
};

const ru_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросить мод`)
};

const sv_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önska en mod`)
};

const tr_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod iste`)
};

const zh_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求模组`)
};

const ja_requests_new_title = /** @type {(inputs: Requests_New_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD をリクエスト`)
};

/**
* | output |
* | --- |
* | "Ask for a mod" |
*
* @param {Requests_New_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_new_title = /** @type {((inputs?: Requests_New_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_New_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_new_title(inputs)
	if (locale === "de") return de_requests_new_title(inputs)
	if (locale === "fr") return fr_requests_new_title(inputs)
	if (locale === "it") return it_requests_new_title(inputs)
	if (locale === "nl") return nl_requests_new_title(inputs)
	if (locale === "pl") return pl_requests_new_title(inputs)
	if (locale === "pt") return pt_requests_new_title(inputs)
	if (locale === "ru") return ru_requests_new_title(inputs)
	if (locale === "sv") return sv_requests_new_title(inputs)
	if (locale === "tr") return tr_requests_new_title(inputs)
	if (locale === "zh") return zh_requests_new_title(inputs)
	if (locale === "ja") return ja_requests_new_title(inputs)
	return en_requests_new_title(inputs)
});
