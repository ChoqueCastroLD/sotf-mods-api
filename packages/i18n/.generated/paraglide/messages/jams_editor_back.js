/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_BackInputs */

const en_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All jams`)
};

const es_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los jams`)
};

const de_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Jams`)
};

const fr_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les jams`)
};

const it_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i jam`)
};

const nl_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle jams`)
};

const pl_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie jamy`)
};

const pt_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os jams`)
};

const ru_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все джемы`)
};

const sv_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla jams`)
};

const tr_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm jam'ler`)
};

const zh_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有 Jam`)
};

const ja_jams_editor_back = /** @type {(inputs: Jams_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのジャム`)
};

/**
* | output |
* | --- |
* | "All jams" |
*
* @param {Jams_Editor_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_back = /** @type {((inputs?: Jams_Editor_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_back(inputs)
	if (locale === "de") return de_jams_editor_back(inputs)
	if (locale === "fr") return fr_jams_editor_back(inputs)
	if (locale === "it") return it_jams_editor_back(inputs)
	if (locale === "nl") return nl_jams_editor_back(inputs)
	if (locale === "pl") return pl_jams_editor_back(inputs)
	if (locale === "pt") return pt_jams_editor_back(inputs)
	if (locale === "ru") return ru_jams_editor_back(inputs)
	if (locale === "sv") return sv_jams_editor_back(inputs)
	if (locale === "tr") return tr_jams_editor_back(inputs)
	if (locale === "zh") return zh_jams_editor_back(inputs)
	if (locale === "ja") return ja_jams_editor_back(inputs)
	return en_jams_editor_back(inputs)
});
