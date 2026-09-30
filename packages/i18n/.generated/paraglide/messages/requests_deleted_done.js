/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Deleted_DoneInputs */

const en_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request deleted.`)
};

const es_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición eliminada.`)
};

const de_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch gelöscht.`)
};

const fr_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande supprimée.`)
};

const it_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta eliminata.`)
};

const nl_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek verwijderd.`)
};

const pl_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba usunięta.`)
};

const pt_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido excluído.`)
};

const ru_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос удалён.`)
};

const sv_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är borttaget.`)
};

const tr_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek silindi.`)
};

const zh_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已删除。`)
};

const ja_requests_deleted_done = /** @type {(inputs: Requests_Deleted_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを削除しました。`)
};

/**
* | output |
* | --- |
* | "Request deleted." |
*
* @param {Requests_Deleted_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_deleted_done = /** @type {((inputs?: Requests_Deleted_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Deleted_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_deleted_done(inputs)
	if (locale === "de") return de_requests_deleted_done(inputs)
	if (locale === "fr") return fr_requests_deleted_done(inputs)
	if (locale === "it") return it_requests_deleted_done(inputs)
	if (locale === "nl") return nl_requests_deleted_done(inputs)
	if (locale === "pl") return pl_requests_deleted_done(inputs)
	if (locale === "pt") return pt_requests_deleted_done(inputs)
	if (locale === "ru") return ru_requests_deleted_done(inputs)
	if (locale === "sv") return sv_requests_deleted_done(inputs)
	if (locale === "tr") return tr_requests_deleted_done(inputs)
	if (locale === "zh") return zh_requests_deleted_done(inputs)
	if (locale === "ja") return ja_requests_deleted_done(inputs)
	return en_requests_deleted_done(inputs)
});
