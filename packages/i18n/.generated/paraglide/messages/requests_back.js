/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_BackInputs */

const en_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All requests`)
};

const es_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las peticiones`)
};

const de_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Wünsche`)
};

const fr_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les demandes`)
};

const it_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le richieste`)
};

const nl_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle verzoeken`)
};

const pl_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie prośby`)
};

const pt_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os pedidos`)
};

const ru_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все запросы`)
};

const sv_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla önskemål`)
};

const tr_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm istekler`)
};

const zh_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部请求`)
};

const ja_requests_back = /** @type {(inputs: Requests_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのリクエスト`)
};

/**
* | output |
* | --- |
* | "All requests" |
*
* @param {Requests_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_back = /** @type {((inputs?: Requests_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_back(inputs)
	if (locale === "de") return de_requests_back(inputs)
	if (locale === "fr") return fr_requests_back(inputs)
	if (locale === "it") return it_requests_back(inputs)
	if (locale === "nl") return nl_requests_back(inputs)
	if (locale === "pl") return pl_requests_back(inputs)
	if (locale === "pt") return pt_requests_back(inputs)
	if (locale === "ru") return ru_requests_back(inputs)
	if (locale === "sv") return sv_requests_back(inputs)
	if (locale === "tr") return tr_requests_back(inputs)
	if (locale === "zh") return zh_requests_back(inputs)
	if (locale === "ja") return ja_requests_back(inputs)
	return en_requests_back(inputs)
});
