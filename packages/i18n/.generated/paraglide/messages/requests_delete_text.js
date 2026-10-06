/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Delete_TextInputs */

const en_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The request and its votes will be deleted. This cannot be undone.`)
};

const es_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La petición y sus votos se eliminarán. No se puede deshacer.`)
};

const de_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Wunsch und seine Stimmen werden gelöscht. Das lässt sich nicht rückgängig machen.`)
};

const fr_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La demande et ses votes seront supprimés. Action irréversible.`)
};

const it_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La richiesta e i suoi voti verranno eliminati. Non si può annullare.`)
};

const nl_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verzoek en de stemmen worden verwijderd. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba i jej głosy zostaną usunięte. Nie można tego cofnąć.`)
};

const pt_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O pedido e seus votos serão excluídos. Isso não pode ser desfeito.`)
};

const ru_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос и его голоса будут удалены. Это нельзя отменить.`)
};

const sv_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet och dess röster raderas. Det går inte att ångra.`)
};

const tr_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek ve oyları silinecek. Bu geri alınamaz.`)
};

const zh_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求及其投票将被删除，且无法撤销。`)
};

const ja_requests_delete_text = /** @type {(inputs: Requests_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストと投票は削除され、元に戻せません。`)
};

/**
* | output |
* | --- |
* | "The request and its votes will be deleted. This cannot be undone." |
*
* @param {Requests_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_delete_text = /** @type {((inputs?: Requests_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_delete_text(inputs)
	if (locale === "de") return de_requests_delete_text(inputs)
	if (locale === "fr") return fr_requests_delete_text(inputs)
	if (locale === "it") return it_requests_delete_text(inputs)
	if (locale === "nl") return nl_requests_delete_text(inputs)
	if (locale === "pl") return pl_requests_delete_text(inputs)
	if (locale === "pt") return pt_requests_delete_text(inputs)
	if (locale === "ru") return ru_requests_delete_text(inputs)
	if (locale === "sv") return sv_requests_delete_text(inputs)
	if (locale === "tr") return tr_requests_delete_text(inputs)
	if (locale === "zh") return zh_requests_delete_text(inputs)
	if (locale === "ja") return ja_requests_delete_text(inputs)
	return en_requests_delete_text(inputs)
});
