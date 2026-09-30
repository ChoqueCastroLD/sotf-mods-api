/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Ui_Domain_Comment_Bug_Fixed_InInputs */

const en_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fixed in v${i?.version}`)
};

const es_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arreglado en la v${i?.version}`)
};

const de_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Behoben in v${i?.version}`)
};

const fr_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corrigé dans la v${i?.version}`)
};

const it_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corretto nella v${i?.version}`)
};

const nl_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verholpen in v${i?.version}`)
};

const pl_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Naprawiono w v${i?.version}`)
};

const pt_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corrigido na v${i?.version}`)
};

const ru_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Исправлено в v${i?.version}`)
};

const sv_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärdat i v${i?.version}`)
};

const tr_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} sürümünde düzeltildi`)
};

const zh_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已在 v${i?.version} 修复`)
};

const ja_ui_domain_comment_bug_fixed_in = /** @type {(inputs: Ui_Domain_Comment_Bug_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} で修正済み`)
};

/**
* | output |
* | --- |
* | "Fixed in v{version}" |
*
* @param {Ui_Domain_Comment_Bug_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_bug_fixed_in = /** @type {((inputs: Ui_Domain_Comment_Bug_Fixed_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Bug_Fixed_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "de") return de_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "fr") return fr_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "it") return it_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "nl") return nl_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "pl") return pl_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "pt") return pt_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "ru") return ru_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "sv") return sv_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "tr") return tr_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "zh") return zh_ui_domain_comment_bug_fixed_in(inputs)
	if (locale === "ja") return ja_ui_domain_comment_bug_fixed_in(inputs)
	return en_ui_domain_comment_bug_fixed_in(inputs)
});
