/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_DeleteInputs */

const en_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete request`)
};

const es_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar petición`)
};

const de_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch löschen`)
};

const fr_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la demande`)
};

const it_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina la richiesta`)
};

const nl_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek verwijderen`)
};

const pl_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń prośbę`)
};

const pt_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir pedido`)
};

const ru_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить запрос`)
};

const sv_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort önskemålet`)
};

const tr_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteği sil`)
};

const zh_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除请求`)
};

const ja_requests_delete = /** @type {(inputs: Requests_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを削除`)
};

/**
* | output |
* | --- |
* | "Delete request" |
*
* @param {Requests_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_delete = /** @type {((inputs?: Requests_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_delete(inputs)
	if (locale === "de") return de_requests_delete(inputs)
	if (locale === "fr") return fr_requests_delete(inputs)
	if (locale === "it") return it_requests_delete(inputs)
	if (locale === "nl") return nl_requests_delete(inputs)
	if (locale === "pl") return pl_requests_delete(inputs)
	if (locale === "pt") return pt_requests_delete(inputs)
	if (locale === "ru") return ru_requests_delete(inputs)
	if (locale === "sv") return sv_requests_delete(inputs)
	if (locale === "tr") return tr_requests_delete(inputs)
	if (locale === "zh") return zh_requests_delete(inputs)
	if (locale === "ja") return ja_requests_delete(inputs)
	return en_requests_delete(inputs)
});
