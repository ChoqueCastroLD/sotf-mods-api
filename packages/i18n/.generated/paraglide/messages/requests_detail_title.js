/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Requests_Detail_TitleInputs */

const en_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Mod request`)
};

const es_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Petición de mod`)
};

const de_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Mod-Wunsch`)
};

const fr_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Demande de mod`)
};

const it_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Richiesta di mod`)
};

const nl_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Modverzoek`)
};

const pl_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Prośba o moda`)
};

const pt_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Pedido de mod`)
};

const ru_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — запрос мода`)
};

const sv_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Modönskemål`)
};

const tr_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Mod isteği`)
};

const zh_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — 模组请求`)
};

const ja_requests_detail_title = /** @type {(inputs: Requests_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — MOD リクエスト`)
};

/**
* | output |
* | --- |
* | "{title} — Mod request" |
*
* @param {Requests_Detail_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_detail_title = /** @type {((inputs: Requests_Detail_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Detail_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_detail_title(inputs)
	if (locale === "de") return de_requests_detail_title(inputs)
	if (locale === "fr") return fr_requests_detail_title(inputs)
	if (locale === "it") return it_requests_detail_title(inputs)
	if (locale === "nl") return nl_requests_detail_title(inputs)
	if (locale === "pl") return pl_requests_detail_title(inputs)
	if (locale === "pt") return pt_requests_detail_title(inputs)
	if (locale === "ru") return ru_requests_detail_title(inputs)
	if (locale === "sv") return sv_requests_detail_title(inputs)
	if (locale === "tr") return tr_requests_detail_title(inputs)
	if (locale === "zh") return zh_requests_detail_title(inputs)
	if (locale === "ja") return ja_requests_detail_title(inputs)
	return en_requests_detail_title(inputs)
});
