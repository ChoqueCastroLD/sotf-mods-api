/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Tabs_LabelInputs */

const en_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam sections`)
};

const es_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secciones del jam`)
};

const de_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereiche des Jams`)
};

const fr_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sections du jam`)
};

const it_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezioni del jam`)
};

const nl_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderdelen van de jam`)
};

const pl_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sekcje jamu`)
};

const pt_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seções da jam`)
};

const ru_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разделы джема`)
};

const sv_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamens avsnitt`)
};

const tr_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam bölümleri`)
};

const zh_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 分区`)
};

const ja_jams_editor_tabs_label = /** @type {(inputs: Jams_Editor_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムのセクション`)
};

/**
* | output |
* | --- |
* | "Jam sections" |
*
* @param {Jams_Editor_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tabs_label = /** @type {((inputs?: Jams_Editor_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tabs_label(inputs)
	if (locale === "de") return de_jams_editor_tabs_label(inputs)
	if (locale === "fr") return fr_jams_editor_tabs_label(inputs)
	if (locale === "it") return it_jams_editor_tabs_label(inputs)
	if (locale === "nl") return nl_jams_editor_tabs_label(inputs)
	if (locale === "pl") return pl_jams_editor_tabs_label(inputs)
	if (locale === "pt") return pt_jams_editor_tabs_label(inputs)
	if (locale === "ru") return ru_jams_editor_tabs_label(inputs)
	if (locale === "sv") return sv_jams_editor_tabs_label(inputs)
	if (locale === "tr") return tr_jams_editor_tabs_label(inputs)
	if (locale === "zh") return zh_jams_editor_tabs_label(inputs)
	if (locale === "ja") return ja_jams_editor_tabs_label(inputs)
	return en_jams_editor_tabs_label(inputs)
});
