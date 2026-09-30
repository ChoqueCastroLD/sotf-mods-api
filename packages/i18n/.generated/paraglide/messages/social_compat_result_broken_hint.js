/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Result_Broken_HintInputs */

const en_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It doesn’t load or it crashes.`)
};

const es_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No carga o se cuelga.`)
};

const de_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es lädt nicht oder stürzt ab.`)
};

const fr_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il ne se charge pas ou plante.`)
};

const it_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non si carica o va in crash.`)
};

const nl_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het laadt niet of crasht.`)
};

const pl_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ładuje się albo się wysypuje.`)
};

const pt_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não carrega ou trava.`)
};

const ru_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не загружается или вылетает.`)
};

const sv_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den laddas inte eller kraschar.`)
};

const tr_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklenmiyor ya da çöküyor.`)
};

const zh_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载或会崩溃。`)
};

const ja_social_compat_result_broken_hint = /** @type {(inputs: Social_Compat_Result_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込めないかクラッシュする。`)
};

/**
* | output |
* | --- |
* | "It doesn’t load or it crashes." |
*
* @param {Social_Compat_Result_Broken_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result_broken_hint = /** @type {((inputs?: Social_Compat_Result_Broken_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Result_Broken_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result_broken_hint(inputs)
	if (locale === "de") return de_social_compat_result_broken_hint(inputs)
	if (locale === "fr") return fr_social_compat_result_broken_hint(inputs)
	if (locale === "it") return it_social_compat_result_broken_hint(inputs)
	if (locale === "nl") return nl_social_compat_result_broken_hint(inputs)
	if (locale === "pl") return pl_social_compat_result_broken_hint(inputs)
	if (locale === "pt") return pt_social_compat_result_broken_hint(inputs)
	if (locale === "ru") return ru_social_compat_result_broken_hint(inputs)
	if (locale === "sv") return sv_social_compat_result_broken_hint(inputs)
	if (locale === "tr") return tr_social_compat_result_broken_hint(inputs)
	if (locale === "zh") return zh_social_compat_result_broken_hint(inputs)
	if (locale === "ja") return ja_social_compat_result_broken_hint(inputs)
	return en_social_compat_result_broken_hint(inputs)
});
