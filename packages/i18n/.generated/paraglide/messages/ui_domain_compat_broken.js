/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Compat_BrokenInputs */

const en_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto`)
};

const de_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé`)
};

const it_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado`)
};

const ru_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig`)
};

const tr_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可用`)
};

const ja_ui_domain_compat_broken = /** @type {(inputs: Ui_Domain_Compat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しない`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Ui_Domain_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_broken = /** @type {((inputs?: Ui_Domain_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_broken(inputs)
	if (locale === "de") return de_ui_domain_compat_broken(inputs)
	if (locale === "fr") return fr_ui_domain_compat_broken(inputs)
	if (locale === "it") return it_ui_domain_compat_broken(inputs)
	if (locale === "nl") return nl_ui_domain_compat_broken(inputs)
	if (locale === "pl") return pl_ui_domain_compat_broken(inputs)
	if (locale === "pt") return pt_ui_domain_compat_broken(inputs)
	if (locale === "ru") return ru_ui_domain_compat_broken(inputs)
	if (locale === "sv") return sv_ui_domain_compat_broken(inputs)
	if (locale === "tr") return tr_ui_domain_compat_broken(inputs)
	if (locale === "zh") return zh_ui_domain_compat_broken(inputs)
	if (locale === "ja") return ja_ui_domain_compat_broken(inputs)
	return en_ui_domain_compat_broken(inputs)
});
