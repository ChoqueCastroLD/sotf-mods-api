/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Select_PlaceholderInputs */

const en_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose…`)
};

const es_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige…`)
};

const de_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswählen…`)
};

const fr_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir…`)
};

const it_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli…`)
};

const nl_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies…`)
};

const pl_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz…`)
};

const pt_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha…`)
};

const ru_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите…`)
};

const sv_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj…`)
};

const tr_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seç…`)
};

const zh_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择…`)
};

const ja_upload_select_placeholder = /** @type {(inputs: Upload_Select_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択…`)
};

/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Upload_Select_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_select_placeholder = /** @type {((inputs?: Upload_Select_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Select_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_select_placeholder(inputs)
	if (locale === "de") return de_upload_select_placeholder(inputs)
	if (locale === "fr") return fr_upload_select_placeholder(inputs)
	if (locale === "it") return it_upload_select_placeholder(inputs)
	if (locale === "nl") return nl_upload_select_placeholder(inputs)
	if (locale === "pl") return pl_upload_select_placeholder(inputs)
	if (locale === "pt") return pt_upload_select_placeholder(inputs)
	if (locale === "ru") return ru_upload_select_placeholder(inputs)
	if (locale === "sv") return sv_upload_select_placeholder(inputs)
	if (locale === "tr") return tr_upload_select_placeholder(inputs)
	if (locale === "zh") return zh_upload_select_placeholder(inputs)
	if (locale === "ja") return ja_upload_select_placeholder(inputs)
	return en_upload_select_placeholder(inputs)
});
