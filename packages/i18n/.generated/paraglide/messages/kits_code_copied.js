/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ code: NonNullable<unknown> }} Kits_Code_CopiedInputs */

const en_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code ${i?.code} copied`)
};

const es_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Código ${i?.code} copiado`)
};

const de_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code ${i?.code} kopiert`)
};

const fr_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code ${i?.code} copié`)
};

const it_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Codice ${i?.code} copiato`)
};

const nl_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code ${i?.code} gekopieerd`)
};

const pl_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skopiowano kod ${i?.code}`)
};

const pt_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Código ${i?.code} copiado`)
};

const ru_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код ${i?.code} скопирован`)
};

const sv_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Koden ${i?.code} kopierad`)
};

const tr_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.code} kodu kopyalandı`)
};

const zh_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已复制代码 ${i?.code}`)
};

const ja_kits_code_copied = /** @type {(inputs: Kits_Code_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`コード ${i?.code} をコピーしました`)
};

/**
* | output |
* | --- |
* | "Code {code} copied" |
*
* @param {Kits_Code_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_code_copied = /** @type {((inputs: Kits_Code_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Code_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_code_copied(inputs)
	if (locale === "de") return de_kits_code_copied(inputs)
	if (locale === "fr") return fr_kits_code_copied(inputs)
	if (locale === "it") return it_kits_code_copied(inputs)
	if (locale === "nl") return nl_kits_code_copied(inputs)
	if (locale === "pl") return pl_kits_code_copied(inputs)
	if (locale === "pt") return pt_kits_code_copied(inputs)
	if (locale === "ru") return ru_kits_code_copied(inputs)
	if (locale === "sv") return sv_kits_code_copied(inputs)
	if (locale === "tr") return tr_kits_code_copied(inputs)
	if (locale === "zh") return zh_kits_code_copied(inputs)
	if (locale === "ja") return ja_kits_code_copied(inputs)
	return en_kits_code_copied(inputs)
});
