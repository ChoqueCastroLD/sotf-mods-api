/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Delete_TitleInputs */

const en_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this request?`)
};

const es_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar esta petición?`)
};

const de_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Wunsch löschen?`)
};

const fr_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer cette demande ?`)
};

const it_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare questa richiesta?`)
};

const nl_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit verzoek verwijderen?`)
};

const pl_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć tę prośbę?`)
};

const pt_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este pedido?`)
};

const ru_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот запрос?`)
};

const sv_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort det här önskemålet?`)
};

const tr_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu istek silinsin mi?`)
};

const zh_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除此请求？`)
};

const ja_requests_delete_title = /** @type {(inputs: Requests_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストを削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete this request?" |
*
* @param {Requests_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_delete_title = /** @type {((inputs?: Requests_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_delete_title(inputs)
	if (locale === "de") return de_requests_delete_title(inputs)
	if (locale === "fr") return fr_requests_delete_title(inputs)
	if (locale === "it") return it_requests_delete_title(inputs)
	if (locale === "nl") return nl_requests_delete_title(inputs)
	if (locale === "pl") return pl_requests_delete_title(inputs)
	if (locale === "pt") return pt_requests_delete_title(inputs)
	if (locale === "ru") return ru_requests_delete_title(inputs)
	if (locale === "sv") return sv_requests_delete_title(inputs)
	if (locale === "tr") return tr_requests_delete_title(inputs)
	if (locale === "zh") return zh_requests_delete_title(inputs)
	if (locale === "ja") return ja_requests_delete_title(inputs)
	return en_requests_delete_title(inputs)
});
