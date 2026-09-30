/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Created_DoneInputs */

const en_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request posted.`)
};

const es_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición publicada.`)
};

const de_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch eingestellt.`)
};

const fr_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande publiée.`)
};

const it_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta pubblicata.`)
};

const nl_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek geplaatst.`)
};

const pl_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba opublikowana.`)
};

const pt_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido publicado.`)
};

const ru_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос опубликован.`)
};

const sv_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är upplagt.`)
};

const tr_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek yayımlandı.`)
};

const zh_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已发布。`)
};

const ja_requests_created_done = /** @type {(inputs: Requests_Created_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを投稿しました。`)
};

/**
* | output |
* | --- |
* | "Request posted." |
*
* @param {Requests_Created_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_created_done = /** @type {((inputs?: Requests_Created_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Created_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_created_done(inputs)
	if (locale === "de") return de_requests_created_done(inputs)
	if (locale === "fr") return fr_requests_created_done(inputs)
	if (locale === "it") return it_requests_created_done(inputs)
	if (locale === "nl") return nl_requests_created_done(inputs)
	if (locale === "pl") return pl_requests_created_done(inputs)
	if (locale === "pt") return pt_requests_created_done(inputs)
	if (locale === "ru") return ru_requests_created_done(inputs)
	if (locale === "sv") return sv_requests_created_done(inputs)
	if (locale === "tr") return tr_requests_created_done(inputs)
	if (locale === "zh") return zh_requests_created_done(inputs)
	if (locale === "ja") return ja_requests_created_done(inputs)
	return en_requests_created_done(inputs)
});
