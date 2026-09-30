/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_CancelInputs */

const en_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_jams_admin_cancel = /** @type {(inputs: Jams_Admin_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Jams_Admin_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_cancel = /** @type {((inputs?: Jams_Admin_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_cancel(inputs)
	if (locale === "de") return de_jams_admin_cancel(inputs)
	if (locale === "fr") return fr_jams_admin_cancel(inputs)
	if (locale === "it") return it_jams_admin_cancel(inputs)
	if (locale === "nl") return nl_jams_admin_cancel(inputs)
	if (locale === "pl") return pl_jams_admin_cancel(inputs)
	if (locale === "pt") return pt_jams_admin_cancel(inputs)
	if (locale === "ru") return ru_jams_admin_cancel(inputs)
	if (locale === "sv") return sv_jams_admin_cancel(inputs)
	if (locale === "tr") return tr_jams_admin_cancel(inputs)
	if (locale === "zh") return zh_jams_admin_cancel(inputs)
	if (locale === "ja") return ja_jams_admin_cancel(inputs)
	return en_jams_admin_cancel(inputs)
});
