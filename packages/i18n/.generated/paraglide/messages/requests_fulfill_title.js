/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_TitleInputs */

const en_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link the mod that fulfils this request`)
};

const es_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincula el mod que cumple esta petición`)
};

const de_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verknüpfe den Mod, der diesen Wunsch erfüllt`)
};

const fr_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liez le mod qui répond à cette demande`)
};

const it_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega il mod che soddisfa questa richiesta`)
};

const nl_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppel de mod die dit verzoek vervult`)
};

const pl_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiąż moda, który realizuje tę prośbę`)
};

const pt_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincule o mod que atende este pedido`)
};

const ru_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привяжите мод, выполняющий этот запрос`)
};

const sv_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla modden som uppfyller önskemålet`)
};

const tr_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu isteği karşılayan modu bağlayın`)
};

const zh_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联完成此请求的模组`)
};

const ja_requests_fulfill_title = /** @type {(inputs: Requests_Fulfill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストを満たす MOD を紐付ける`)
};

/**
* | output |
* | --- |
* | "Link the mod that fulfils this request" |
*
* @param {Requests_Fulfill_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_title = /** @type {((inputs?: Requests_Fulfill_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_title(inputs)
	if (locale === "de") return de_requests_fulfill_title(inputs)
	if (locale === "fr") return fr_requests_fulfill_title(inputs)
	if (locale === "it") return it_requests_fulfill_title(inputs)
	if (locale === "nl") return nl_requests_fulfill_title(inputs)
	if (locale === "pl") return pl_requests_fulfill_title(inputs)
	if (locale === "pt") return pt_requests_fulfill_title(inputs)
	if (locale === "ru") return ru_requests_fulfill_title(inputs)
	if (locale === "sv") return sv_requests_fulfill_title(inputs)
	if (locale === "tr") return tr_requests_fulfill_title(inputs)
	if (locale === "zh") return zh_requests_fulfill_title(inputs)
	if (locale === "ja") return ja_requests_fulfill_title(inputs)
	return en_requests_fulfill_title(inputs)
});
