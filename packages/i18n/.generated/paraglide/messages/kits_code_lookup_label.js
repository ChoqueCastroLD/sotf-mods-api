/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Code_Lookup_LabelInputs */

const en_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have a kit code?`)
};

const es_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Tienes un código de kit?`)
};

const de_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hast du einen Kit-Code?`)
};

const fr_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez un code de kit ?`)
};

const it_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai un codice kit?`)
};

const nl_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heb je een kitcode?`)
};

const pl_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz kod zestawu?`)
};

const pt_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tem um código de kit?`)
};

const ru_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть код набора?`)
};

const sv_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Har du en kitkod?`)
};

const tr_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit kodun var mı?`)
};

const zh_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有套装代码？`)
};

const ja_kits_code_lookup_label = /** @type {(inputs: Kits_Code_Lookup_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットコードをお持ちですか？`)
};

/**
* | output |
* | --- |
* | "Have a kit code?" |
*
* @param {Kits_Code_Lookup_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_code_lookup_label = /** @type {((inputs?: Kits_Code_Lookup_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Code_Lookup_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_code_lookup_label(inputs)
	if (locale === "de") return de_kits_code_lookup_label(inputs)
	if (locale === "fr") return fr_kits_code_lookup_label(inputs)
	if (locale === "it") return it_kits_code_lookup_label(inputs)
	if (locale === "nl") return nl_kits_code_lookup_label(inputs)
	if (locale === "pl") return pl_kits_code_lookup_label(inputs)
	if (locale === "pt") return pt_kits_code_lookup_label(inputs)
	if (locale === "ru") return ru_kits_code_lookup_label(inputs)
	if (locale === "sv") return sv_kits_code_lookup_label(inputs)
	if (locale === "tr") return tr_kits_code_lookup_label(inputs)
	if (locale === "zh") return zh_kits_code_lookup_label(inputs)
	if (locale === "ja") return ja_kits_code_lookup_label(inputs)
	return en_kits_code_lookup_label(inputs)
});
