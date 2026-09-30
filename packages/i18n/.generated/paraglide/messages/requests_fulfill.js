/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_FulfillInputs */

const en_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link my mod`)
};

const es_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular mi mod`)
};

const de_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meinen Mod verknüpfen`)
};

const fr_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lier mon mod`)
};

const it_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega il mio mod`)
};

const nl_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn mod koppelen`)
};

const pl_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiąż mojego moda`)
};

const pt_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular meu mod`)
};

const ru_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привязать мой мод`)
};

const sv_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla min mod`)
};

const tr_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modumu bağla`)
};

const zh_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联我的模组`)
};

const ja_requests_fulfill = /** @type {(inputs: Requests_FulfillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の MOD を紐付ける`)
};

/**
* | output |
* | --- |
* | "Link my mod" |
*
* @param {Requests_FulfillInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill = /** @type {((inputs?: Requests_FulfillInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_FulfillInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill(inputs)
	if (locale === "de") return de_requests_fulfill(inputs)
	if (locale === "fr") return fr_requests_fulfill(inputs)
	if (locale === "it") return it_requests_fulfill(inputs)
	if (locale === "nl") return nl_requests_fulfill(inputs)
	if (locale === "pl") return pl_requests_fulfill(inputs)
	if (locale === "pt") return pt_requests_fulfill(inputs)
	if (locale === "ru") return ru_requests_fulfill(inputs)
	if (locale === "sv") return sv_requests_fulfill(inputs)
	if (locale === "tr") return tr_requests_fulfill(inputs)
	if (locale === "zh") return zh_requests_fulfill(inputs)
	if (locale === "ja") return ja_requests_fulfill(inputs)
	return en_requests_fulfill(inputs)
});
