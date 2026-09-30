/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_SavedInputs */

const en_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request updated.`)
};

const es_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición actualizada.`)
};

const de_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch aktualisiert.`)
};

const fr_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande mise à jour.`)
};

const it_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta aggiornata.`)
};

const nl_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek bijgewerkt.`)
};

const pl_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba zaktualizowana.`)
};

const pt_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido atualizado.`)
};

const ru_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос обновлён.`)
};

const sv_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är uppdaterat.`)
};

const tr_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek güncellendi.`)
};

const zh_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已更新。`)
};

const ja_requests_saved = /** @type {(inputs: Requests_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを更新しました。`)
};

/**
* | output |
* | --- |
* | "Request updated." |
*
* @param {Requests_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_saved = /** @type {((inputs?: Requests_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_saved(inputs)
	if (locale === "de") return de_requests_saved(inputs)
	if (locale === "fr") return fr_requests_saved(inputs)
	if (locale === "it") return it_requests_saved(inputs)
	if (locale === "nl") return nl_requests_saved(inputs)
	if (locale === "pl") return pl_requests_saved(inputs)
	if (locale === "pt") return pt_requests_saved(inputs)
	if (locale === "ru") return ru_requests_saved(inputs)
	if (locale === "sv") return sv_requests_saved(inputs)
	if (locale === "tr") return tr_requests_saved(inputs)
	if (locale === "zh") return zh_requests_saved(inputs)
	if (locale === "ja") return ja_requests_saved(inputs)
	return en_requests_saved(inputs)
});
