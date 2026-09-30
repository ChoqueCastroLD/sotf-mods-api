/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Kits_Filter_Works_OnInputs */

const en_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Works on ${i?.build}`)
};

const es_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funciona en ${i?.build}`)
};

const de_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Läuft mit ${i?.build}`)
};

const fr_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fonctionne sur ${i?.build}`)
};

const it_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funziona con ${i?.build}`)
};

const nl_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werkt op ${i?.build}`)
};

const pl_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Działa na ${i?.build}`)
};

const pt_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funciona no ${i?.build}`)
};

const ru_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Работает на ${i?.build}`)
};

const sv_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fungerar på ${i?.build}`)
};

const tr_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} ile çalışıyor`)
};

const zh_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`适用于 ${i?.build}`)
};

const ja_kits_filter_works_on = /** @type {(inputs: Kits_Filter_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で動作`)
};

/**
* | output |
* | --- |
* | "Works on {build}" |
*
* @param {Kits_Filter_Works_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_works_on = /** @type {((inputs: Kits_Filter_Works_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_Works_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_works_on(inputs)
	if (locale === "de") return de_kits_filter_works_on(inputs)
	if (locale === "fr") return fr_kits_filter_works_on(inputs)
	if (locale === "it") return it_kits_filter_works_on(inputs)
	if (locale === "nl") return nl_kits_filter_works_on(inputs)
	if (locale === "pl") return pl_kits_filter_works_on(inputs)
	if (locale === "pt") return pt_kits_filter_works_on(inputs)
	if (locale === "ru") return ru_kits_filter_works_on(inputs)
	if (locale === "sv") return sv_kits_filter_works_on(inputs)
	if (locale === "tr") return tr_kits_filter_works_on(inputs)
	if (locale === "zh") return zh_kits_filter_works_on(inputs)
	if (locale === "ja") return ja_kits_filter_works_on(inputs)
	return en_kits_filter_works_on(inputs)
});
