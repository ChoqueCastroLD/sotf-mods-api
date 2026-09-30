/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Mod_Compat_Author_TestedInputs */

const en_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tested by the creator on ${i?.build}.`)
};

const es_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Probado por el creador en ${i?.build}.`)
};

const de_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vom Ersteller auf ${i?.build} getestet.`)
};

const fr_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testé par le créateur sur ${i?.build}.`)
};

const it_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testata dal creatore su ${i?.build}.`)
};

const nl_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Getest door de maker op ${i?.build}.`)
};

const pl_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przetestowane przez twórcę na ${i?.build}.`)
};

const pt_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testado pelo criador em ${i?.build}.`)
};

const ru_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор проверил на ${i?.build}.`)
};

const sv_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testad av skaparen på ${i?.build}.`)
};

const tr_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yapımcı tarafından ${i?.build} üzerinde test edildi.`)
};

const zh_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者已在 ${i?.build} 上测试。`)
};

const ja_mod_compat_author_tested = /** @type {(inputs: Mod_Compat_Author_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者が ${i?.build} で動作確認済み。`)
};

/**
* | output |
* | --- |
* | "Tested by the creator on {build}." |
*
* @param {Mod_Compat_Author_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_author_tested = /** @type {((inputs: Mod_Compat_Author_TestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_Author_TestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_author_tested(inputs)
	if (locale === "de") return de_mod_compat_author_tested(inputs)
	if (locale === "fr") return fr_mod_compat_author_tested(inputs)
	if (locale === "it") return it_mod_compat_author_tested(inputs)
	if (locale === "nl") return nl_mod_compat_author_tested(inputs)
	if (locale === "pl") return pl_mod_compat_author_tested(inputs)
	if (locale === "pt") return pt_mod_compat_author_tested(inputs)
	if (locale === "ru") return ru_mod_compat_author_tested(inputs)
	if (locale === "sv") return sv_mod_compat_author_tested(inputs)
	if (locale === "tr") return tr_mod_compat_author_tested(inputs)
	if (locale === "zh") return zh_mod_compat_author_tested(inputs)
	if (locale === "ja") return ja_mod_compat_author_tested(inputs)
	return en_mod_compat_author_tested(inputs)
});
