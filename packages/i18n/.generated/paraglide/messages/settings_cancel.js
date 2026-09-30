/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_CancelInputs */

const en_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_settings_cancel = /** @type {(inputs: Settings_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Settings_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_cancel = /** @type {((inputs?: Settings_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_cancel(inputs)
	if (locale === "de") return de_settings_cancel(inputs)
	if (locale === "fr") return fr_settings_cancel(inputs)
	if (locale === "it") return it_settings_cancel(inputs)
	if (locale === "nl") return nl_settings_cancel(inputs)
	if (locale === "pl") return pl_settings_cancel(inputs)
	if (locale === "pt") return pt_settings_cancel(inputs)
	if (locale === "ru") return ru_settings_cancel(inputs)
	if (locale === "sv") return sv_settings_cancel(inputs)
	if (locale === "tr") return tr_settings_cancel(inputs)
	if (locale === "zh") return zh_settings_cancel(inputs)
	if (locale === "ja") return ja_settings_cancel(inputs)
	return en_settings_cancel(inputs)
});
