/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_DismissInputs */

const en_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
};

const es_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausblenden`)
};

const fr_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignorer`)
};

const it_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignora`)
};

const nl_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const pl_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispensar`)
};

const ru_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avfärda`)
};

const tr_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizle`)
};

const zh_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忽略`)
};

const ja_ui_dismiss = /** @type {(inputs: Ui_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Dismiss" |
*
* @param {Ui_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_dismiss = /** @type {((inputs?: Ui_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_dismiss(inputs)
	if (locale === "de") return de_ui_dismiss(inputs)
	if (locale === "fr") return fr_ui_dismiss(inputs)
	if (locale === "it") return it_ui_dismiss(inputs)
	if (locale === "nl") return nl_ui_dismiss(inputs)
	if (locale === "pl") return pl_ui_dismiss(inputs)
	if (locale === "pt") return pt_ui_dismiss(inputs)
	if (locale === "ru") return ru_ui_dismiss(inputs)
	if (locale === "sv") return sv_ui_dismiss(inputs)
	if (locale === "tr") return tr_ui_dismiss(inputs)
	if (locale === "zh") return zh_ui_dismiss(inputs)
	if (locale === "ja") return ja_ui_dismiss(inputs)
	return en_ui_dismiss(inputs)
});
