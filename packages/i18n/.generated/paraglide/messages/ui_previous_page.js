/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Previous_PageInputs */

const en_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

const es_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const de_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Précédent`)
};

const it_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precedente`)
};

const nl_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige`)
};

const pl_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednia`)
};

const pt_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const ru_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående`)
};

const tr_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki`)
};

const zh_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const ja_ui_previous_page = /** @type {(inputs: Ui_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前へ`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Ui_Previous_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_previous_page = /** @type {((inputs?: Ui_Previous_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Previous_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_previous_page(inputs)
	if (locale === "de") return de_ui_previous_page(inputs)
	if (locale === "fr") return fr_ui_previous_page(inputs)
	if (locale === "it") return it_ui_previous_page(inputs)
	if (locale === "nl") return nl_ui_previous_page(inputs)
	if (locale === "pl") return pl_ui_previous_page(inputs)
	if (locale === "pt") return pt_ui_previous_page(inputs)
	if (locale === "ru") return ru_ui_previous_page(inputs)
	if (locale === "sv") return sv_ui_previous_page(inputs)
	if (locale === "tr") return tr_ui_previous_page(inputs)
	if (locale === "zh") return zh_ui_previous_page(inputs)
	if (locale === "ja") return ja_ui_previous_page(inputs)
	return en_ui_previous_page(inputs)
});
