/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Me_Broken_On_CurrentInputs */

const en_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Broken on ${i?.build}`)
};

const es_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Roto en ${i?.build}`)
};

const de_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kaputt auf ${i?.build}`)
};

const fr_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cassé sur ${i?.build}`)
};

const it_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non funziona su ${i?.build}`)
};

const nl_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kapot op ${i?.build}`)
};

const pl_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nie działa na ${i?.build}`)
};

const pt_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quebrado em ${i?.build}`)
};

const ru_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не работает на ${i?.build}`)
};

const sv_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trasig på ${i?.build}`)
};

const tr_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} üzerinde bozuk`)
};

const zh_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在 ${i?.build} 上失效`)
};

const ja_me_broken_on_current = /** @type {(inputs: Me_Broken_On_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で動作しない`)
};

/**
* | output |
* | --- |
* | "Broken on {build}" |
*
* @param {Me_Broken_On_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_broken_on_current = /** @type {((inputs: Me_Broken_On_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Broken_On_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_broken_on_current(inputs)
	if (locale === "de") return de_me_broken_on_current(inputs)
	if (locale === "fr") return fr_me_broken_on_current(inputs)
	if (locale === "it") return it_me_broken_on_current(inputs)
	if (locale === "nl") return nl_me_broken_on_current(inputs)
	if (locale === "pl") return pl_me_broken_on_current(inputs)
	if (locale === "pt") return pt_me_broken_on_current(inputs)
	if (locale === "ru") return ru_me_broken_on_current(inputs)
	if (locale === "sv") return sv_me_broken_on_current(inputs)
	if (locale === "tr") return tr_me_broken_on_current(inputs)
	if (locale === "zh") return zh_me_broken_on_current(inputs)
	if (locale === "ja") return ja_me_broken_on_current(inputs)
	return en_me_broken_on_current(inputs)
});
