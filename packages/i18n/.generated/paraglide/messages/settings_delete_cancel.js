/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_CancelInputs */

const en_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel the deletion`)
};

const es_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar el borrado`)
};

const de_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschung abbrechen`)
};

const fr_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler la suppression`)
};

const it_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla l’eliminazione`)
};

const nl_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering annuleren`)
};

const pl_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj usunięcie`)
};

const pt_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar a exclusão`)
};

const ru_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить удаление`)
};

const sv_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt raderingen`)
};

const tr_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silmeyi iptal et`)
};

const zh_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消删除`)
};

const ja_settings_delete_cancel = /** @type {(inputs: Settings_Delete_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消す`)
};

/**
* | output |
* | --- |
* | "Cancel the deletion" |
*
* @param {Settings_Delete_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_cancel = /** @type {((inputs?: Settings_Delete_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_cancel(inputs)
	if (locale === "de") return de_settings_delete_cancel(inputs)
	if (locale === "fr") return fr_settings_delete_cancel(inputs)
	if (locale === "it") return it_settings_delete_cancel(inputs)
	if (locale === "nl") return nl_settings_delete_cancel(inputs)
	if (locale === "pl") return pl_settings_delete_cancel(inputs)
	if (locale === "pt") return pt_settings_delete_cancel(inputs)
	if (locale === "ru") return ru_settings_delete_cancel(inputs)
	if (locale === "sv") return sv_settings_delete_cancel(inputs)
	if (locale === "tr") return tr_settings_delete_cancel(inputs)
	if (locale === "zh") return zh_settings_delete_cancel(inputs)
	if (locale === "ja") return ja_settings_delete_cancel(inputs)
	return en_settings_delete_cancel(inputs)
});
