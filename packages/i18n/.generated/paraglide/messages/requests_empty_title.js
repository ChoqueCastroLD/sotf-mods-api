/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Empty_TitleInputs */

const en_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No requests here yet`)
};

const es_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay peticiones`)
};

const de_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Wünsche`)
};

const fr_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune demande pour le moment`)
};

const it_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna richiesta`)
};

const nl_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen verzoeken`)
};

const pl_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak próśb`)
};

const pt_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há pedidos`)
};

const ru_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросов пока нет`)
};

const sv_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga önskemål än`)
};

const tr_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz istek yok`)
};

const zh_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还没有请求`)
};

const ja_requests_empty_title = /** @type {(inputs: Requests_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだリクエストはありません`)
};

/**
* | output |
* | --- |
* | "No requests here yet" |
*
* @param {Requests_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_title = /** @type {((inputs?: Requests_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_title(inputs)
	if (locale === "de") return de_requests_empty_title(inputs)
	if (locale === "fr") return fr_requests_empty_title(inputs)
	if (locale === "it") return it_requests_empty_title(inputs)
	if (locale === "nl") return nl_requests_empty_title(inputs)
	if (locale === "pl") return pl_requests_empty_title(inputs)
	if (locale === "pt") return pt_requests_empty_title(inputs)
	if (locale === "ru") return ru_requests_empty_title(inputs)
	if (locale === "sv") return sv_requests_empty_title(inputs)
	if (locale === "tr") return tr_requests_empty_title(inputs)
	if (locale === "zh") return zh_requests_empty_title(inputs)
	if (locale === "ja") return ja_requests_empty_title(inputs)
	return en_requests_empty_title(inputs)
});
