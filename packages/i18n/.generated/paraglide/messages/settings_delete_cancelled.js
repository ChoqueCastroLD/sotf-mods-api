/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_CancelledInputs */

const en_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deletion cancelled — welcome back`)
};

const es_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrado cancelado: bienvenido de nuevo`)
};

const de_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschung abgebrochen – willkommen zurück`)
};

const fr_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression annulée — bon retour parmi nous`)
};

const it_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminazione annullata: bentornato`)
};

const nl_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering geannuleerd — welkom terug`)
};

const pl_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anulowano usunięcie — witaj ponownie`)
};

const pt_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exclusão cancelada — que bom ter você de volta`)
};

const ru_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление отменено — с возвращением`)
};

const sv_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderingen avbruten — välkommen tillbaka`)
};

const tr_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silme iptal edildi — tekrar hoş geldin`)
};

const zh_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消删除——欢迎回来`)
};

const ja_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消しました。おかえりなさい`)
};

/**
* | output |
* | --- |
* | "Deletion cancelled — welcome back" |
*
* @param {Settings_Delete_CancelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_cancelled = /** @type {((inputs?: Settings_Delete_CancelledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_CancelledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_cancelled(inputs)
	if (locale === "de") return de_settings_delete_cancelled(inputs)
	if (locale === "fr") return fr_settings_delete_cancelled(inputs)
	if (locale === "it") return it_settings_delete_cancelled(inputs)
	if (locale === "nl") return nl_settings_delete_cancelled(inputs)
	if (locale === "pl") return pl_settings_delete_cancelled(inputs)
	if (locale === "pt") return pt_settings_delete_cancelled(inputs)
	if (locale === "ru") return ru_settings_delete_cancelled(inputs)
	if (locale === "sv") return sv_settings_delete_cancelled(inputs)
	if (locale === "tr") return tr_settings_delete_cancelled(inputs)
	if (locale === "zh") return zh_settings_delete_cancelled(inputs)
	if (locale === "ja") return ja_settings_delete_cancelled(inputs)
	return en_settings_delete_cancelled(inputs)
});
