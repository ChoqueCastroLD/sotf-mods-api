/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Theme_Hidden_ShortInputs */

const en_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme: secret`)
};

const es_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema: secreto`)
};

const de_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema: geheim`)
};

const fr_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème : secret`)
};

const it_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema: segreto`)
};

const nl_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema: geheim`)
};

const pl_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat: tajemnica`)
};

const pt_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema: segredo`)
};

const ru_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема: секрет`)
};

const sv_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema: hemligt`)
};

const tr_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema: gizli`)
};

const zh_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题：保密`)
};

const ja_jams_theme_hidden_short = /** @type {(inputs: Jams_Theme_Hidden_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ：非公開`)
};

/**
* | output |
* | --- |
* | "Theme: secret" |
*
* @param {Jams_Theme_Hidden_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_theme_hidden_short = /** @type {((inputs?: Jams_Theme_Hidden_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Theme_Hidden_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_theme_hidden_short(inputs)
	if (locale === "de") return de_jams_theme_hidden_short(inputs)
	if (locale === "fr") return fr_jams_theme_hidden_short(inputs)
	if (locale === "it") return it_jams_theme_hidden_short(inputs)
	if (locale === "nl") return nl_jams_theme_hidden_short(inputs)
	if (locale === "pl") return pl_jams_theme_hidden_short(inputs)
	if (locale === "pt") return pt_jams_theme_hidden_short(inputs)
	if (locale === "ru") return ru_jams_theme_hidden_short(inputs)
	if (locale === "sv") return sv_jams_theme_hidden_short(inputs)
	if (locale === "tr") return tr_jams_theme_hidden_short(inputs)
	if (locale === "zh") return zh_jams_theme_hidden_short(inputs)
	if (locale === "ja") return ja_jams_theme_hidden_short(inputs)
	return en_jams_theme_hidden_short(inputs)
});
