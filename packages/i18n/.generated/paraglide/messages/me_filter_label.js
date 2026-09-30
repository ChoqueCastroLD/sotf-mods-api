/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Filter_LabelInputs */

const en_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show`)
};

const es_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const de_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen`)
};

const fr_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

const it_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra`)
};

const nl_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tonen`)
};

const pl_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż`)
};

const pt_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ru_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать`)
};

const sv_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göster`)
};

const zh_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const ja_me_filter_label = /** @type {(inputs: Me_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "Show" |
*
* @param {Me_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_filter_label = /** @type {((inputs?: Me_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_filter_label(inputs)
	if (locale === "de") return de_me_filter_label(inputs)
	if (locale === "fr") return fr_me_filter_label(inputs)
	if (locale === "it") return it_me_filter_label(inputs)
	if (locale === "nl") return nl_me_filter_label(inputs)
	if (locale === "pl") return pl_me_filter_label(inputs)
	if (locale === "pt") return pt_me_filter_label(inputs)
	if (locale === "ru") return ru_me_filter_label(inputs)
	if (locale === "sv") return sv_me_filter_label(inputs)
	if (locale === "tr") return tr_me_filter_label(inputs)
	if (locale === "zh") return zh_me_filter_label(inputs)
	if (locale === "ja") return ja_me_filter_label(inputs)
	return en_me_filter_label(inputs)
});
