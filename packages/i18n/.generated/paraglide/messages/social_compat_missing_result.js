/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Missing_ResultInputs */

const en_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a result.`)
};

const es_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un resultado.`)
};

const de_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle ein Ergebnis.`)
};

const fr_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un résultat.`)
};

const it_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un risultato.`)
};

const nl_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een resultaat.`)
};

const pl_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz wynik.`)
};

const pt_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um resultado.`)
};

const ru_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите результат.`)
};

const sv_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett resultat.`)
};

const tr_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sonuç seç.`)
};

const zh_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择结果。`)
};

const ja_social_compat_missing_result = /** @type {(inputs: Social_Compat_Missing_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a result." |
*
* @param {Social_Compat_Missing_ResultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_missing_result = /** @type {((inputs?: Social_Compat_Missing_ResultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Missing_ResultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_missing_result(inputs)
	if (locale === "de") return de_social_compat_missing_result(inputs)
	if (locale === "fr") return fr_social_compat_missing_result(inputs)
	if (locale === "it") return it_social_compat_missing_result(inputs)
	if (locale === "nl") return nl_social_compat_missing_result(inputs)
	if (locale === "pl") return pl_social_compat_missing_result(inputs)
	if (locale === "pt") return pt_social_compat_missing_result(inputs)
	if (locale === "ru") return ru_social_compat_missing_result(inputs)
	if (locale === "sv") return sv_social_compat_missing_result(inputs)
	if (locale === "tr") return tr_social_compat_missing_result(inputs)
	if (locale === "zh") return zh_social_compat_missing_result(inputs)
	if (locale === "ja") return ja_social_compat_missing_result(inputs)
	return en_social_compat_missing_result(inputs)
});
