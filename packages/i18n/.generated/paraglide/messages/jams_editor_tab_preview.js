/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Tab_PreviewInputs */

const en_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

const es_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa`)
};

const de_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau`)
};

const fr_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu public`)
};

const it_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima`)
};

const nl_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld`)
};

const pl_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd`)
};

const pt_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévia`)
};

const ru_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр`)
};

const sv_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning`)
};

const tr_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme`)
};

const zh_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const ja_jams_editor_tab_preview = /** @type {(inputs: Jams_Editor_Tab_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビュー`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Jams_Editor_Tab_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tab_preview = /** @type {((inputs?: Jams_Editor_Tab_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Tab_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tab_preview(inputs)
	if (locale === "de") return de_jams_editor_tab_preview(inputs)
	if (locale === "fr") return fr_jams_editor_tab_preview(inputs)
	if (locale === "it") return it_jams_editor_tab_preview(inputs)
	if (locale === "nl") return nl_jams_editor_tab_preview(inputs)
	if (locale === "pl") return pl_jams_editor_tab_preview(inputs)
	if (locale === "pt") return pt_jams_editor_tab_preview(inputs)
	if (locale === "ru") return ru_jams_editor_tab_preview(inputs)
	if (locale === "sv") return sv_jams_editor_tab_preview(inputs)
	if (locale === "tr") return tr_jams_editor_tab_preview(inputs)
	if (locale === "zh") return zh_jams_editor_tab_preview(inputs)
	if (locale === "ja") return ja_jams_editor_tab_preview(inputs)
	return en_jams_editor_tab_preview(inputs)
});
