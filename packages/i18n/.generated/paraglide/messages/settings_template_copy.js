/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_CopyInputs */

const en_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

const es_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const de_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren`)
};

const fr_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier`)
};

const it_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia`)
};

const nl_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren`)
};

const pl_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj`)
};

const pt_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ru_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать`)
};

const sv_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera`)
};

const tr_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyala`)
};

const zh_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const ja_settings_template_copy = /** @type {(inputs: Settings_Template_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Settings_Template_CopyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_copy = /** @type {((inputs?: Settings_Template_CopyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_CopyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_copy(inputs)
	if (locale === "de") return de_settings_template_copy(inputs)
	if (locale === "fr") return fr_settings_template_copy(inputs)
	if (locale === "it") return it_settings_template_copy(inputs)
	if (locale === "nl") return nl_settings_template_copy(inputs)
	if (locale === "pl") return pl_settings_template_copy(inputs)
	if (locale === "pt") return pt_settings_template_copy(inputs)
	if (locale === "ru") return ru_settings_template_copy(inputs)
	if (locale === "sv") return sv_settings_template_copy(inputs)
	if (locale === "tr") return tr_settings_template_copy(inputs)
	if (locale === "zh") return zh_settings_template_copy(inputs)
	if (locale === "ja") return ja_settings_template_copy(inputs)
	return en_settings_template_copy(inputs)
});
