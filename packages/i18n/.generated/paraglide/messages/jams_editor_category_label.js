/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_LabelInputs */

const en_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom label`)
};

const es_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiqueta personalizada`)
};

const de_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigene Bezeichnung`)
};

const fr_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libellé personnalisé`)
};

const it_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etichetta personalizzata`)
};

const nl_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigen label`)
};

const pl_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Własna etykieta`)
};

const pt_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rótulo personalizado`)
};

const ru_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Своя подпись`)
};

const sv_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Egen etikett`)
};

const tr_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel etiket`)
};

const zh_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义名称`)
};

const ja_jams_editor_category_label = /** @type {(inputs: Jams_Editor_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カスタムラベル`)
};

/**
* | output |
* | --- |
* | "Custom label" |
*
* @param {Jams_Editor_Category_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_label = /** @type {((inputs?: Jams_Editor_Category_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_label(inputs)
	if (locale === "de") return de_jams_editor_category_label(inputs)
	if (locale === "fr") return fr_jams_editor_category_label(inputs)
	if (locale === "it") return it_jams_editor_category_label(inputs)
	if (locale === "nl") return nl_jams_editor_category_label(inputs)
	if (locale === "pl") return pl_jams_editor_category_label(inputs)
	if (locale === "pt") return pt_jams_editor_category_label(inputs)
	if (locale === "ru") return ru_jams_editor_category_label(inputs)
	if (locale === "sv") return sv_jams_editor_category_label(inputs)
	if (locale === "tr") return tr_jams_editor_category_label(inputs)
	if (locale === "zh") return zh_jams_editor_category_label(inputs)
	if (locale === "ja") return ja_jams_editor_category_label(inputs)
	return en_jams_editor_category_label(inputs)
});
