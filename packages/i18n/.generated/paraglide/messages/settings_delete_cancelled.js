/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_CancelledInputs */

const en_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deletion cancelled`)
};

const es_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrado cancelado`)
};

const de_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschung abgebrochen`)
};

const fr_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression annulée`)
};

const it_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminazione annullata`)
};

const nl_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering geannuleerd`)
};

const pl_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anulowano usunięcie`)
};

const pt_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exclusão cancelada`)
};

const ru_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление отменено`)
};

const sv_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderingen avbruten`)
};

const tr_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silme iptal edildi`)
};

const zh_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消删除`)
};

const ja_settings_delete_cancelled = /** @type {(inputs: Settings_Delete_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消しました`)
};

/**
* | output |
* | --- |
* | "Deletion cancelled" |
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
