/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, target: NonNullable<unknown> }} Ui_Domain_Badge_ProgressInputs */

const en_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const es_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const de_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const fr_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const it_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const nl_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const pl_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const pt_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const ru_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const sv_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const tr_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const zh_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

const ja_ui_domain_badge_progress = /** @type {(inputs: Ui_Domain_Badge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.target}`)
};

/**
* | output |
* | --- |
* | "{current} / {target}" |
*
* @param {Ui_Domain_Badge_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_progress = /** @type {((inputs: Ui_Domain_Badge_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_progress(inputs)
	if (locale === "de") return de_ui_domain_badge_progress(inputs)
	if (locale === "fr") return fr_ui_domain_badge_progress(inputs)
	if (locale === "it") return it_ui_domain_badge_progress(inputs)
	if (locale === "nl") return nl_ui_domain_badge_progress(inputs)
	if (locale === "pl") return pl_ui_domain_badge_progress(inputs)
	if (locale === "pt") return pt_ui_domain_badge_progress(inputs)
	if (locale === "ru") return ru_ui_domain_badge_progress(inputs)
	if (locale === "sv") return sv_ui_domain_badge_progress(inputs)
	if (locale === "tr") return tr_ui_domain_badge_progress(inputs)
	if (locale === "zh") return zh_ui_domain_badge_progress(inputs)
	if (locale === "ja") return ja_ui_domain_badge_progress(inputs)
	return en_ui_domain_badge_progress(inputs)
});
