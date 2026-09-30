/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Past_End_TextInputs */

const en_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There are fewer requests than that.`)
};

const es_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay menos peticiones que eso.`)
};

const de_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt weniger Wünsche als das.`)
};

const fr_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il y a moins de demandes que cela.`)
};

const it_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ci sono meno richieste di così.`)
};

const nl_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn minder verzoeken dan dat.`)
};

const pl_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jest mniej próśb niż tyle.`)
};

const pt_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Há menos pedidos do que isso.`)
};

const ru_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросов меньше, чем нужно для этой страницы.`)
};

const sv_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns färre önskemål än så.`)
};

const tr_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundan daha az istek var.`)
};

const zh_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求数量没有那么多。`)
};

const ja_requests_past_end_text = /** @type {(inputs: Requests_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストの数がそこまでありません。`)
};

/**
* | output |
* | --- |
* | "There are fewer requests than that." |
*
* @param {Requests_Past_End_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_past_end_text = /** @type {((inputs?: Requests_Past_End_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Past_End_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_past_end_text(inputs)
	if (locale === "de") return de_requests_past_end_text(inputs)
	if (locale === "fr") return fr_requests_past_end_text(inputs)
	if (locale === "it") return it_requests_past_end_text(inputs)
	if (locale === "nl") return nl_requests_past_end_text(inputs)
	if (locale === "pl") return pl_requests_past_end_text(inputs)
	if (locale === "pt") return pt_requests_past_end_text(inputs)
	if (locale === "ru") return ru_requests_past_end_text(inputs)
	if (locale === "sv") return sv_requests_past_end_text(inputs)
	if (locale === "tr") return tr_requests_past_end_text(inputs)
	if (locale === "zh") return zh_requests_past_end_text(inputs)
	if (locale === "ja") return ja_requests_past_end_text(inputs)
	return en_requests_past_end_text(inputs)
});
