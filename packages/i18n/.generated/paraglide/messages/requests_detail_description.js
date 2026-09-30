/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown>, title: NonNullable<unknown> }} Requests_Detail_DescriptionInputs */

const en_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod request by ${i?.author}: ${i?.title}`)
};

const es_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Petición de mod de ${i?.author}: ${i?.title}`)
};

const de_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod-Wunsch von ${i?.author}: ${i?.title}`)
};

const fr_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Demande de mod de ${i?.author} : ${i?.title}`)
};

const it_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Richiesta di mod di ${i?.author}: ${i?.title}`)
};

const nl_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modverzoek van ${i?.author}: ${i?.title}`)
};

const pl_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prośba o moda od ${i?.author}: ${i?.title}`)
};

const pt_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pedido de mod de ${i?.author}: ${i?.title}`)
};

const ru_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запрос мода от ${i?.author}: ${i?.title}`)
};

const sv_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modönskemål från ${i?.author}: ${i?.title}`)
};

const tr_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} tarafından mod isteği: ${i?.title}`)
};

const zh_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} 提出的模组请求：${i?.title}`)
};

const ja_requests_detail_description = /** @type {(inputs: Requests_Detail_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} による MOD リクエスト: ${i?.title}`)
};

/**
* | output |
* | --- |
* | "Mod request by {author}: {title}" |
*
* @param {Requests_Detail_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_detail_description = /** @type {((inputs: Requests_Detail_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Detail_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_detail_description(inputs)
	if (locale === "de") return de_requests_detail_description(inputs)
	if (locale === "fr") return fr_requests_detail_description(inputs)
	if (locale === "it") return it_requests_detail_description(inputs)
	if (locale === "nl") return nl_requests_detail_description(inputs)
	if (locale === "pl") return pl_requests_detail_description(inputs)
	if (locale === "pt") return pt_requests_detail_description(inputs)
	if (locale === "ru") return ru_requests_detail_description(inputs)
	if (locale === "sv") return sv_requests_detail_description(inputs)
	if (locale === "tr") return tr_requests_detail_description(inputs)
	if (locale === "zh") return zh_requests_detail_description(inputs)
	if (locale === "ja") return ja_requests_detail_description(inputs)
	return en_requests_detail_description(inputs)
});
