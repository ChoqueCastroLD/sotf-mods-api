/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Back_To_FirstInputs */

const en_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the first page`)
};

const es_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a la primera página`)
};

const de_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur ersten Seite`)
};

const fr_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la première page`)
};

const it_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla prima pagina`)
};

const nl_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar de eerste pagina`)
};

const pl_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć na pierwszą stronę`)
};

const pt_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar à primeira página`)
};

const ru_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться на первую страницу`)
};

const sv_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till första sidan`)
};

const tr_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sayfaya dön`)
};

const zh_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回到第一页`)
};

const ja_requests_back_to_first = /** @type {(inputs: Requests_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のページへ戻る`)
};

/**
* | output |
* | --- |
* | "Back to the first page" |
*
* @param {Requests_Back_To_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_back_to_first = /** @type {((inputs?: Requests_Back_To_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Back_To_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_back_to_first(inputs)
	if (locale === "de") return de_requests_back_to_first(inputs)
	if (locale === "fr") return fr_requests_back_to_first(inputs)
	if (locale === "it") return it_requests_back_to_first(inputs)
	if (locale === "nl") return nl_requests_back_to_first(inputs)
	if (locale === "pl") return pl_requests_back_to_first(inputs)
	if (locale === "pt") return pt_requests_back_to_first(inputs)
	if (locale === "ru") return ru_requests_back_to_first(inputs)
	if (locale === "sv") return sv_requests_back_to_first(inputs)
	if (locale === "tr") return tr_requests_back_to_first(inputs)
	if (locale === "zh") return zh_requests_back_to_first(inputs)
	if (locale === "ja") return ja_requests_back_to_first(inputs)
	return en_requests_back_to_first(inputs)
});
