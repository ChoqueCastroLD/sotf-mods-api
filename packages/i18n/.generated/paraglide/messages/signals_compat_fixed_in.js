/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Signals_Compat_Fixed_InInputs */

const en_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your field report on ${i?.mod} is fixed in ${i?.version}`)
};

const es_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu informe de campo sobre ${i?.mod} está arreglado en ${i?.version}`)
};

const de_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Feldbericht zu ${i?.mod} ist in ${i?.version} behoben`)
};

const fr_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre rapport de terrain sur ${i?.mod} est corrigé dans ${i?.version}`)
};

const it_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo rapporto sul campo su ${i?.mod} è stato risolto in ${i?.version}`)
};

const nl_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je veldrapport over ${i?.mod} is opgelost in ${i?.version}`)
};

const pl_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój raport terenowy o ${i?.mod} został naprawiony w ${i?.version}`)
};

const pt_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu relatório de campo sobre ${i?.mod} foi corrigido em ${i?.version}`)
};

const ru_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проблема из вашего полевого отчёта о ${i?.mod} исправлена в ${i?.version}`)
};

const sv_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din fältrapport om ${i?.mod} är åtgärdad i ${i?.version}`)
};

const tr_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} hakkındaki saha raporun ${i?.version} sürümünde düzeltildi`)
};

const zh_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你关于 ${i?.mod} 的实地报告已在 ${i?.version} 中修复`)
};

const ja_signals_compat_fixed_in = /** @type {(inputs: Signals_Compat_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} についてのあなたの現地レポートは ${i?.version} で修正されました`)
};

/**
* | output |
* | --- |
* | "Your field report on {mod} is fixed in {version}" |
*
* @param {Signals_Compat_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_compat_fixed_in = /** @type {((inputs: Signals_Compat_Fixed_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_Fixed_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_compat_fixed_in(inputs)
	if (locale === "de") return de_signals_compat_fixed_in(inputs)
	if (locale === "fr") return fr_signals_compat_fixed_in(inputs)
	if (locale === "it") return it_signals_compat_fixed_in(inputs)
	if (locale === "nl") return nl_signals_compat_fixed_in(inputs)
	if (locale === "pl") return pl_signals_compat_fixed_in(inputs)
	if (locale === "pt") return pt_signals_compat_fixed_in(inputs)
	if (locale === "ru") return ru_signals_compat_fixed_in(inputs)
	if (locale === "sv") return sv_signals_compat_fixed_in(inputs)
	if (locale === "tr") return tr_signals_compat_fixed_in(inputs)
	if (locale === "zh") return zh_signals_compat_fixed_in(inputs)
	if (locale === "ja") return ja_signals_compat_fixed_in(inputs)
	return en_signals_compat_fixed_in(inputs)
});
