/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Cancel_FailedInputs */

const en_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t cancel the deletion`)
};

const es_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido cancelar el borrado`)
};

const de_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Löschung konnte nicht abgebrochen werden`)
};

const fr_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’annuler la suppression`)
};

const it_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile annullare l’eliminazione`)
};

const nl_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De verwijdering kon niet worden geannuleerd`)
};

const pl_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się anulować usunięcia`)
};

const pt_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível cancelar a exclusão`)
};

const ru_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отменить удаление`)
};

const sv_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att avbryta raderingen`)
};

const tr_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silme iptal edilemedi`)
};

const zh_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法取消删除`)
};

const ja_settings_delete_cancel_failed = /** @type {(inputs: Settings_Delete_Cancel_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消せませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t cancel the deletion" |
*
* @param {Settings_Delete_Cancel_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_cancel_failed = /** @type {((inputs?: Settings_Delete_Cancel_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Cancel_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_cancel_failed(inputs)
	if (locale === "de") return de_settings_delete_cancel_failed(inputs)
	if (locale === "fr") return fr_settings_delete_cancel_failed(inputs)
	if (locale === "it") return it_settings_delete_cancel_failed(inputs)
	if (locale === "nl") return nl_settings_delete_cancel_failed(inputs)
	if (locale === "pl") return pl_settings_delete_cancel_failed(inputs)
	if (locale === "pt") return pt_settings_delete_cancel_failed(inputs)
	if (locale === "ru") return ru_settings_delete_cancel_failed(inputs)
	if (locale === "sv") return sv_settings_delete_cancel_failed(inputs)
	if (locale === "tr") return tr_settings_delete_cancel_failed(inputs)
	if (locale === "zh") return zh_settings_delete_cancel_failed(inputs)
	if (locale === "ja") return ja_settings_delete_cancel_failed(inputs)
	return en_settings_delete_cancel_failed(inputs)
});
