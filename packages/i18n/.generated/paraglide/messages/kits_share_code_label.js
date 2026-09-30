/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_Code_LabelInputs */

const en_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit code`)
};

const es_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código del kit`)
};

const de_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit-Code`)
};

const fr_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code du kit`)
};

const it_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice kit`)
};

const nl_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitcode`)
};

const pl_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod zestawu`)
};

const pt_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código do kit`)
};

const ru_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код набора`)
};

const sv_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitkod`)
};

const tr_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit kodu`)
};

const zh_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装代码`)
};

const ja_kits_share_code_label = /** @type {(inputs: Kits_Share_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットコード`)
};

/**
* | output |
* | --- |
* | "Kit code" |
*
* @param {Kits_Share_Code_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_code_label = /** @type {((inputs?: Kits_Share_Code_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Code_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_code_label(inputs)
	if (locale === "de") return de_kits_share_code_label(inputs)
	if (locale === "fr") return fr_kits_share_code_label(inputs)
	if (locale === "it") return it_kits_share_code_label(inputs)
	if (locale === "nl") return nl_kits_share_code_label(inputs)
	if (locale === "pl") return pl_kits_share_code_label(inputs)
	if (locale === "pt") return pt_kits_share_code_label(inputs)
	if (locale === "ru") return ru_kits_share_code_label(inputs)
	if (locale === "sv") return sv_kits_share_code_label(inputs)
	if (locale === "tr") return tr_kits_share_code_label(inputs)
	if (locale === "zh") return zh_kits_share_code_label(inputs)
	if (locale === "ja") return ja_kits_share_code_label(inputs)
	return en_kits_share_code_label(inputs)
});
