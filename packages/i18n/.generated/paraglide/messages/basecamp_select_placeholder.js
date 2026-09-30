/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Select_PlaceholderInputs */

const en_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose…`)
};

const es_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige…`)
};

const de_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswählen…`)
};

const fr_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir…`)
};

const it_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli…`)
};

const nl_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies…`)
};

const pl_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz…`)
};

const pt_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha…`)
};

const ru_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите…`)
};

const sv_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj…`)
};

const tr_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seç…`)
};

const zh_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择…`)
};

const ja_basecamp_select_placeholder = /** @type {(inputs: Basecamp_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択…`)
};

/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Basecamp_Select_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_select_placeholder = /** @type {((inputs?: Basecamp_Select_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Select_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_select_placeholder(inputs)
	if (locale === "de") return de_basecamp_select_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_select_placeholder(inputs)
	if (locale === "it") return it_basecamp_select_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_select_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_select_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_select_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_select_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_select_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_select_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_select_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_select_placeholder(inputs)
	return en_basecamp_select_placeholder(inputs)
});
