/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_Works_HintInputs */

const en_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything I tried works.`)
};

const es_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que probé funciona.`)
};

const de_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was ich probiert habe, funktioniert.`)
};

const fr_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que j’ai essayé marche.`)
};

const it_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto quello che ho provato funziona.`)
};

const nl_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat ik probeerde werkt.`)
};

const pl_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co sprawdziłem, działa.`)
};

const pt_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que testei funciona.`)
};

const ru_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что я проверил, работает.`)
};

const sv_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt jag testade fungerar.`)
};

const tr_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denediğim her şey çalışıyor.`)
};

const zh_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我试过的功能都正常。`)
};

const ja_social_compat_result_works_hint = /** @type {(inputs: Social_Compat_Result_Works_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`試したものはすべて動く。`)
};

/**
* | output |
* | --- |
* | "Everything I tried works." |
*
* @param {Social_Compat_Result_Works_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_works_hint = /** @type {((inputs?: Social_Compat_Result_Works_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_Works_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_works_hint(inputs)
	if (locale === "de") return de_social_compat_result_works_hint(inputs)
	if (locale === "fr") return fr_social_compat_result_works_hint(inputs)
	if (locale === "it") return it_social_compat_result_works_hint(inputs)
	if (locale === "nl") return nl_social_compat_result_works_hint(inputs)
	if (locale === "pl") return pl_social_compat_result_works_hint(inputs)
	if (locale === "pt") return pt_social_compat_result_works_hint(inputs)
	if (locale === "ru") return ru_social_compat_result_works_hint(inputs)
	if (locale === "sv") return sv_social_compat_result_works_hint(inputs)
	if (locale === "tr") return tr_social_compat_result_works_hint(inputs)
	if (locale === "zh") return zh_social_compat_result_works_hint(inputs)
	if (locale === "ja") return ja_social_compat_result_works_hint(inputs)
	return en_social_compat_result_works_hint(inputs)
});
