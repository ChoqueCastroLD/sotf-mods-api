/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Code_Lookup_SubmitInputs */

const en_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open kit`)
};

const es_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir kit`)
};

const de_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit öffnen`)
};

const fr_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le kit`)
};

const it_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri kit`)
};

const nl_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit openen`)
};

const pl_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz zestaw`)
};

const pt_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir kit`)
};

const ru_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть набор`)
};

const sv_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna kit`)
};

const tr_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti aç`)
};

const zh_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开套装`)
};

const ja_kits_code_lookup_submit = /** @type {(inputs: Kits_Code_Lookup_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを開く`)
};

/**
* | output |
* | --- |
* | "Open kit" |
*
* @param {Kits_Code_Lookup_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_code_lookup_submit = /** @type {((inputs?: Kits_Code_Lookup_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Code_Lookup_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_code_lookup_submit(inputs)
	if (locale === "de") return de_kits_code_lookup_submit(inputs)
	if (locale === "fr") return fr_kits_code_lookup_submit(inputs)
	if (locale === "it") return it_kits_code_lookup_submit(inputs)
	if (locale === "nl") return nl_kits_code_lookup_submit(inputs)
	if (locale === "pl") return pl_kits_code_lookup_submit(inputs)
	if (locale === "pt") return pt_kits_code_lookup_submit(inputs)
	if (locale === "ru") return ru_kits_code_lookup_submit(inputs)
	if (locale === "sv") return sv_kits_code_lookup_submit(inputs)
	if (locale === "tr") return tr_kits_code_lookup_submit(inputs)
	if (locale === "zh") return zh_kits_code_lookup_submit(inputs)
	if (locale === "ja") return ja_kits_code_lookup_submit(inputs)
	return en_kits_code_lookup_submit(inputs)
});
