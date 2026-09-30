/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_ForestInputs */

const en_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forest green`)
};

const es_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verde bosque`)
};

const de_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waldgrün`)
};

const fr_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vert forêt`)
};

const it_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verde foresta`)
};

const nl_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bosgroen`)
};

const pl_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leśna zieleń`)
};

const pt_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verde floresta`)
};

const ru_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лесной зелёный`)
};

const sv_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skogsgrön`)
};

const tr_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orman yeşili`)
};

const zh_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`森林绿`)
};

const ja_jams_editor_accent_forest = /** @type {(inputs: Jams_Editor_Accent_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォレストグリーン`)
};

/**
* | output |
* | --- |
* | "Forest green" |
*
* @param {Jams_Editor_Accent_ForestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent_forest = /** @type {((inputs?: Jams_Editor_Accent_ForestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Accent_ForestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent_forest(inputs)
	if (locale === "de") return de_jams_editor_accent_forest(inputs)
	if (locale === "fr") return fr_jams_editor_accent_forest(inputs)
	if (locale === "it") return it_jams_editor_accent_forest(inputs)
	if (locale === "nl") return nl_jams_editor_accent_forest(inputs)
	if (locale === "pl") return pl_jams_editor_accent_forest(inputs)
	if (locale === "pt") return pt_jams_editor_accent_forest(inputs)
	if (locale === "ru") return ru_jams_editor_accent_forest(inputs)
	if (locale === "sv") return sv_jams_editor_accent_forest(inputs)
	if (locale === "tr") return tr_jams_editor_accent_forest(inputs)
	if (locale === "zh") return zh_jams_editor_accent_forest(inputs)
	if (locale === "ja") return ja_jams_editor_accent_forest(inputs)
	return en_jams_editor_accent_forest(inputs)
});
