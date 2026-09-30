/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Badge_AuthorInputs */

const en_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requester`)
};

const es_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor de la petición`)
};

const de_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wünschende:r`)
};

const fr_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demandeur`)
};

const it_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiedente`)
};

const nl_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aanvrager`)
};

const pl_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor prośby`)
};

const pt_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor do pedido`)
};

const ru_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор запроса`)
};

const sv_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskare`)
};

const tr_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek sahibi`)
};

const zh_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求者`)
};

const ja_requests_badge_author = /** @type {(inputs: Requests_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト投稿者`)
};

/**
* | output |
* | --- |
* | "Requester" |
*
* @param {Requests_Badge_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_badge_author = /** @type {((inputs?: Requests_Badge_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Badge_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_badge_author(inputs)
	if (locale === "de") return de_requests_badge_author(inputs)
	if (locale === "fr") return fr_requests_badge_author(inputs)
	if (locale === "it") return it_requests_badge_author(inputs)
	if (locale === "nl") return nl_requests_badge_author(inputs)
	if (locale === "pl") return pl_requests_badge_author(inputs)
	if (locale === "pt") return pt_requests_badge_author(inputs)
	if (locale === "ru") return ru_requests_badge_author(inputs)
	if (locale === "sv") return sv_requests_badge_author(inputs)
	if (locale === "tr") return tr_requests_badge_author(inputs)
	if (locale === "zh") return zh_requests_badge_author(inputs)
	if (locale === "ja") return ja_requests_badge_author(inputs)
	return en_requests_badge_author(inputs)
});
