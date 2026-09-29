/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Next_PageInputs */

const en_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

const es_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const de_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivant`)
};

const it_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successiva`)
};

const nl_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende`)
};

const pl_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następna`)
};

const pt_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima`)
};

const ru_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вперёд`)
};

const sv_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa`)
};

const tr_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki`)
};

const zh_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const ja_ui_next_page = /** @type {(inputs: Ui_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次へ`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Ui_Next_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_next_page = /** @type {((inputs?: Ui_Next_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Next_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_next_page(inputs)
	if (locale === "de") return de_ui_next_page(inputs)
	if (locale === "fr") return fr_ui_next_page(inputs)
	if (locale === "it") return it_ui_next_page(inputs)
	if (locale === "nl") return nl_ui_next_page(inputs)
	if (locale === "pl") return pl_ui_next_page(inputs)
	if (locale === "pt") return pt_ui_next_page(inputs)
	if (locale === "ru") return ru_ui_next_page(inputs)
	if (locale === "sv") return sv_ui_next_page(inputs)
	if (locale === "tr") return tr_ui_next_page(inputs)
	if (locale === "zh") return zh_ui_next_page(inputs)
	if (locale === "ja") return ja_ui_next_page(inputs)
	return en_ui_next_page(inputs)
});
