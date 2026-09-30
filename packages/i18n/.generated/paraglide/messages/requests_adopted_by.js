/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Requests_Adopted_ByInputs */

const en_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`In progress by ${i?.name}`)
};

const es_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En curso por ${i?.name}`)
};

const de_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} arbeitet daran`)
};

const fr_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} s’en occupe`)
};

const it_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ci sta lavorando`)
};

const nl_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} werkt eraan`)
};

const pl_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nad tym pracuje`)
};

const pt_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está trabalhando nisso`)
};

const ru_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В работе у ${i?.name}`)
};

const sv_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} arbetar på den`)
};

const tr_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} üzerinde çalışıyor`)
};

const zh_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 正在制作`)
};

const ja_requests_adopted_by = /** @type {(inputs: Requests_Adopted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} が対応中`)
};

/**
* | output |
* | --- |
* | "In progress by {name}" |
*
* @param {Requests_Adopted_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_adopted_by = /** @type {((inputs: Requests_Adopted_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Adopted_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_adopted_by(inputs)
	if (locale === "de") return de_requests_adopted_by(inputs)
	if (locale === "fr") return fr_requests_adopted_by(inputs)
	if (locale === "it") return it_requests_adopted_by(inputs)
	if (locale === "nl") return nl_requests_adopted_by(inputs)
	if (locale === "pl") return pl_requests_adopted_by(inputs)
	if (locale === "pt") return pt_requests_adopted_by(inputs)
	if (locale === "ru") return ru_requests_adopted_by(inputs)
	if (locale === "sv") return sv_requests_adopted_by(inputs)
	if (locale === "tr") return tr_requests_adopted_by(inputs)
	if (locale === "zh") return zh_requests_adopted_by(inputs)
	if (locale === "ja") return ja_requests_adopted_by(inputs)
	return en_requests_adopted_by(inputs)
});
