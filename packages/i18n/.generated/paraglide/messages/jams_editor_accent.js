/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_AccentInputs */

const en_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accent colour`)
};

const es_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Color de acento`)
};

const de_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akzentfarbe`)
};

const fr_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couleur d'accent`)
};

const it_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colore d'accento`)
};

const nl_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accentkleur`)
};

const pl_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolor akcentu`)
};

const pt_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cor de destaque`)
};

const ru_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Акцентный цвет`)
};

const sv_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accentfärg`)
};

const tr_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vurgu rengi`)
};

const zh_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`强调色`)
};

const ja_jams_editor_accent = /** @type {(inputs: Jams_Editor_AccentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクセントカラー`)
};

/**
* | output |
* | --- |
* | "Accent colour" |
*
* @param {Jams_Editor_AccentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent = /** @type {((inputs?: Jams_Editor_AccentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_AccentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent(inputs)
	if (locale === "de") return de_jams_editor_accent(inputs)
	if (locale === "fr") return fr_jams_editor_accent(inputs)
	if (locale === "it") return it_jams_editor_accent(inputs)
	if (locale === "nl") return nl_jams_editor_accent(inputs)
	if (locale === "pl") return pl_jams_editor_accent(inputs)
	if (locale === "pt") return pt_jams_editor_accent(inputs)
	if (locale === "ru") return ru_jams_editor_accent(inputs)
	if (locale === "sv") return sv_jams_editor_accent(inputs)
	if (locale === "tr") return tr_jams_editor_accent(inputs)
	if (locale === "zh") return zh_jams_editor_accent(inputs)
	if (locale === "ja") return ja_jams_editor_accent(inputs)
	return en_jams_editor_accent(inputs)
});
