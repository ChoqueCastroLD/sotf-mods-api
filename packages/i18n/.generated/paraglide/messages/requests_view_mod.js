/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_View_ModInputs */

const en_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View the mod`)
};

const es_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver el mod`)
};

const de_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ansehen`)
};

const fr_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le mod`)
};

const it_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi il mod`)
};

const nl_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk de mod`)
};

const pl_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz moda`)
};

const pt_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver o mod`)
};

const ru_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть мод`)
};

const sv_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa modden`)
};

const tr_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moda git`)
};

const zh_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看模组`)
};

const ja_requests_view_mod = /** @type {(inputs: Requests_View_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を見る`)
};

/**
* | output |
* | --- |
* | "View the mod" |
*
* @param {Requests_View_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_view_mod = /** @type {((inputs?: Requests_View_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_View_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_view_mod(inputs)
	if (locale === "de") return de_requests_view_mod(inputs)
	if (locale === "fr") return fr_requests_view_mod(inputs)
	if (locale === "it") return it_requests_view_mod(inputs)
	if (locale === "nl") return nl_requests_view_mod(inputs)
	if (locale === "pl") return pl_requests_view_mod(inputs)
	if (locale === "pt") return pt_requests_view_mod(inputs)
	if (locale === "ru") return ru_requests_view_mod(inputs)
	if (locale === "sv") return sv_requests_view_mod(inputs)
	if (locale === "tr") return tr_requests_view_mod(inputs)
	if (locale === "zh") return zh_requests_view_mod(inputs)
	if (locale === "ja") return ja_requests_view_mod(inputs)
	return en_requests_view_mod(inputs)
});
