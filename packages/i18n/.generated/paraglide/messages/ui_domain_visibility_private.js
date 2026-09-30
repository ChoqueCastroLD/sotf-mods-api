/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Visibility_PrivateInputs */

const en_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private`)
};

const es_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const de_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const fr_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const it_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privato`)
};

const nl_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé`)
};

const pl_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatny`)
};

const pt_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privado`)
};

const ru_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрытый`)
};

const sv_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat`)
};

const tr_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`私密`)
};

const ja_ui_domain_visibility_private = /** @type {(inputs: Ui_Domain_Visibility_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開`)
};

/**
* | output |
* | --- |
* | "Private" |
*
* @param {Ui_Domain_Visibility_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_visibility_private = /** @type {((inputs?: Ui_Domain_Visibility_PrivateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Visibility_PrivateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_visibility_private(inputs)
	if (locale === "de") return de_ui_domain_visibility_private(inputs)
	if (locale === "fr") return fr_ui_domain_visibility_private(inputs)
	if (locale === "it") return it_ui_domain_visibility_private(inputs)
	if (locale === "nl") return nl_ui_domain_visibility_private(inputs)
	if (locale === "pl") return pl_ui_domain_visibility_private(inputs)
	if (locale === "pt") return pt_ui_domain_visibility_private(inputs)
	if (locale === "ru") return ru_ui_domain_visibility_private(inputs)
	if (locale === "sv") return sv_ui_domain_visibility_private(inputs)
	if (locale === "tr") return tr_ui_domain_visibility_private(inputs)
	if (locale === "zh") return zh_ui_domain_visibility_private(inputs)
	if (locale === "ja") return ja_ui_domain_visibility_private(inputs)
	return en_ui_domain_visibility_private(inputs)
});
