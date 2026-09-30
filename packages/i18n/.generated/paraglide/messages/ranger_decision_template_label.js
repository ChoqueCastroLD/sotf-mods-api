/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_Template_LabelInputs */

const en_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason template`)
};

const es_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantilla de motivo`)
};

const de_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begründungsvorlage`)
};

const fr_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle de motif`)
};

const it_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modello di motivazione`)
};

const nl_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redensjabloon`)
};

const pl_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szablon uzasadnienia`)
};

const pt_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo de motivo`)
};

const ru_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблон причины`)
};

const sv_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mall för motivering`)
};

const tr_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekçe şablonu`)
};

const zh_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因模板`)
};

const ja_ranger_decision_template_label = /** @type {(inputs: Ranger_Decision_Template_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由テンプレート`)
};

/**
* | output |
* | --- |
* | "Reason template" |
*
* @param {Ranger_Decision_Template_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_template_label = /** @type {((inputs?: Ranger_Decision_Template_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Template_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_template_label(inputs)
	if (locale === "de") return de_ranger_decision_template_label(inputs)
	if (locale === "fr") return fr_ranger_decision_template_label(inputs)
	if (locale === "it") return it_ranger_decision_template_label(inputs)
	if (locale === "nl") return nl_ranger_decision_template_label(inputs)
	if (locale === "pl") return pl_ranger_decision_template_label(inputs)
	if (locale === "pt") return pt_ranger_decision_template_label(inputs)
	if (locale === "ru") return ru_ranger_decision_template_label(inputs)
	if (locale === "sv") return sv_ranger_decision_template_label(inputs)
	if (locale === "tr") return tr_ranger_decision_template_label(inputs)
	if (locale === "zh") return zh_ranger_decision_template_label(inputs)
	if (locale === "ja") return ja_ranger_decision_template_label(inputs)
	return en_ranger_decision_template_label(inputs)
});
