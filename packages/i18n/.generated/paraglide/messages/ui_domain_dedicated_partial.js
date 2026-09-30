/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dedicated_PartialInputs */

const en_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partly`)
};

const es_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A medias`)
};

const de_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En partie`)
};

const it_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In parte`)
};

const nl_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deels`)
};

const pl_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em parte`)
};

const ru_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可用`)
};

const ja_ui_domain_dedicated_partial = /** @type {(inputs: Ui_Domain_Dedicated_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部だけ`)
};

/**
* | output |
* | --- |
* | "Partly" |
*
* @param {Ui_Domain_Dedicated_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dedicated_partial = /** @type {((inputs?: Ui_Domain_Dedicated_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dedicated_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dedicated_partial(inputs)
	if (locale === "de") return de_ui_domain_dedicated_partial(inputs)
	if (locale === "fr") return fr_ui_domain_dedicated_partial(inputs)
	if (locale === "it") return it_ui_domain_dedicated_partial(inputs)
	if (locale === "nl") return nl_ui_domain_dedicated_partial(inputs)
	if (locale === "pl") return pl_ui_domain_dedicated_partial(inputs)
	if (locale === "pt") return pt_ui_domain_dedicated_partial(inputs)
	if (locale === "ru") return ru_ui_domain_dedicated_partial(inputs)
	if (locale === "sv") return sv_ui_domain_dedicated_partial(inputs)
	if (locale === "tr") return tr_ui_domain_dedicated_partial(inputs)
	if (locale === "zh") return zh_ui_domain_dedicated_partial(inputs)
	if (locale === "ja") return ja_ui_domain_dedicated_partial(inputs)
	return en_ui_domain_dedicated_partial(inputs)
});
