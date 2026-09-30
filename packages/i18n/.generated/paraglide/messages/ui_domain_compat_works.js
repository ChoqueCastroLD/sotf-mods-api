/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Compat_WorksInputs */

const en_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works`)
};

const es_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne`)
};

const it_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt`)
};

const pl_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_ui_domain_compat_works = /** @type {(inputs: Ui_Domain_Compat_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作する`)
};

/**
* | output |
* | --- |
* | "Works" |
*
* @param {Ui_Domain_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_works = /** @type {((inputs?: Ui_Domain_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_works(inputs)
	if (locale === "de") return de_ui_domain_compat_works(inputs)
	if (locale === "fr") return fr_ui_domain_compat_works(inputs)
	if (locale === "it") return it_ui_domain_compat_works(inputs)
	if (locale === "nl") return nl_ui_domain_compat_works(inputs)
	if (locale === "pl") return pl_ui_domain_compat_works(inputs)
	if (locale === "pt") return pt_ui_domain_compat_works(inputs)
	if (locale === "ru") return ru_ui_domain_compat_works(inputs)
	if (locale === "sv") return sv_ui_domain_compat_works(inputs)
	if (locale === "tr") return tr_ui_domain_compat_works(inputs)
	if (locale === "zh") return zh_ui_domain_compat_works(inputs)
	if (locale === "ja") return ja_ui_domain_compat_works(inputs)
	return en_ui_domain_compat_works(inputs)
});
