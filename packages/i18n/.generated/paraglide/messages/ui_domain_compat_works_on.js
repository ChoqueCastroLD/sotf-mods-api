/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Ui_Domain_Compat_Works_OnInputs */

const en_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Works on ${i?.build}`)
};

const es_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funciona en ${i?.build}`)
};

const de_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Läuft mit ${i?.build}`)
};

const fr_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fonctionne sur ${i?.build}`)
};

const it_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funziona con ${i?.build}`)
};

const nl_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werkt op ${i?.build}`)
};

const pl_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Działa na ${i?.build}`)
};

const pt_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funciona no ${i?.build}`)
};

const ru_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Работает на ${i?.build}`)
};

const sv_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fungerar på ${i?.build}`)
};

const tr_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} ile çalışıyor`)
};

const zh_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`适用于 ${i?.build}`)
};

const ja_ui_domain_compat_works_on = /** @type {(inputs: Ui_Domain_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で動作`)
};

/**
* | output |
* | --- |
* | "Works on {build}" |
*
* @param {Ui_Domain_Compat_Works_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_works_on = /** @type {((inputs: Ui_Domain_Compat_Works_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Works_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_works_on(inputs)
	if (locale === "de") return de_ui_domain_compat_works_on(inputs)
	if (locale === "fr") return fr_ui_domain_compat_works_on(inputs)
	if (locale === "it") return it_ui_domain_compat_works_on(inputs)
	if (locale === "nl") return nl_ui_domain_compat_works_on(inputs)
	if (locale === "pl") return pl_ui_domain_compat_works_on(inputs)
	if (locale === "pt") return pt_ui_domain_compat_works_on(inputs)
	if (locale === "ru") return ru_ui_domain_compat_works_on(inputs)
	if (locale === "sv") return sv_ui_domain_compat_works_on(inputs)
	if (locale === "tr") return tr_ui_domain_compat_works_on(inputs)
	if (locale === "zh") return zh_ui_domain_compat_works_on(inputs)
	if (locale === "ja") return ja_ui_domain_compat_works_on(inputs)
	return en_ui_domain_compat_works_on(inputs)
});
