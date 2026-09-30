/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Requests_Asked_OnInputs */

const en_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Asked ${i?.date}`)
};

const es_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pedida el ${i?.date}`)
};

const de_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gewünscht am ${i?.date}`)
};

const fr_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Demandée le ${i?.date}`)
};

const it_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Richiesta il ${i?.date}`)
};

const nl_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gevraagd op ${i?.date}`)
};

const pl_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano ${i?.date}`)
};

const pt_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pedido em ${i?.date}`)
};

const ru_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запрос от ${i?.date}`)
};

const sv_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önskades ${i?.date}`)
};

const tr_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde istendi`)
};

const zh_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`提出于 ${i?.date}`)
};

const ja_requests_asked_on = /** @type {(inputs: Requests_Asked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に投稿`)
};

/**
* | output |
* | --- |
* | "Asked {date}" |
*
* @param {Requests_Asked_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_asked_on = /** @type {((inputs: Requests_Asked_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Asked_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_asked_on(inputs)
	if (locale === "de") return de_requests_asked_on(inputs)
	if (locale === "fr") return fr_requests_asked_on(inputs)
	if (locale === "it") return it_requests_asked_on(inputs)
	if (locale === "nl") return nl_requests_asked_on(inputs)
	if (locale === "pl") return pl_requests_asked_on(inputs)
	if (locale === "pt") return pt_requests_asked_on(inputs)
	if (locale === "ru") return ru_requests_asked_on(inputs)
	if (locale === "sv") return sv_requests_asked_on(inputs)
	if (locale === "tr") return tr_requests_asked_on(inputs)
	if (locale === "zh") return zh_requests_asked_on(inputs)
	if (locale === "ja") return ja_requests_asked_on(inputs)
	return en_requests_asked_on(inputs)
});
