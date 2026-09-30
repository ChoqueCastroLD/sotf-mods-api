/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Empty_Filtered_TitleInputs */

const en_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No requests match`)
};

const es_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna petición coincide`)
};

const de_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine passenden Wünsche`)
};

const fr_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune demande ne correspond`)
};

const it_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna richiesta corrisponde`)
};

const nl_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen verzoeken gevonden`)
};

const pl_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących próśb`)
};

const pt_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum pedido encontrado`)
};

const ru_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не найдено`)
};

const sv_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga önskemål matchar`)
};

const tr_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen istek yok`)
};

const zh_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合的请求`)
};

const ja_requests_empty_filtered_title = /** @type {(inputs: Requests_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するリクエストはありません`)
};

/**
* | output |
* | --- |
* | "No requests match" |
*
* @param {Requests_Empty_Filtered_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_filtered_title = /** @type {((inputs?: Requests_Empty_Filtered_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_Filtered_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_filtered_title(inputs)
	if (locale === "de") return de_requests_empty_filtered_title(inputs)
	if (locale === "fr") return fr_requests_empty_filtered_title(inputs)
	if (locale === "it") return it_requests_empty_filtered_title(inputs)
	if (locale === "nl") return nl_requests_empty_filtered_title(inputs)
	if (locale === "pl") return pl_requests_empty_filtered_title(inputs)
	if (locale === "pt") return pt_requests_empty_filtered_title(inputs)
	if (locale === "ru") return ru_requests_empty_filtered_title(inputs)
	if (locale === "sv") return sv_requests_empty_filtered_title(inputs)
	if (locale === "tr") return tr_requests_empty_filtered_title(inputs)
	if (locale === "zh") return zh_requests_empty_filtered_title(inputs)
	if (locale === "ja") return ja_requests_empty_filtered_title(inputs)
	return en_requests_empty_filtered_title(inputs)
});
