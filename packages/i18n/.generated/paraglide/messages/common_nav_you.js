/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_YouInputs */

const en_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const es_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta`)
};

const de_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const fr_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compte`)
};

const it_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const nl_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
};

const pl_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const pt_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conta`)
};

const ru_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт`)
};

const sv_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto`)
};

const tr_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap`)
};

const zh_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账户`)
};

const ja_common_nav_you = /** @type {(inputs: Common_Nav_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント`)
};

/**
* | output |
* | --- |
* | "Account" |
*
* @param {Common_Nav_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_you = /** @type {((inputs?: Common_Nav_YouInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_YouInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_you(inputs)
	if (locale === "de") return de_common_nav_you(inputs)
	if (locale === "fr") return fr_common_nav_you(inputs)
	if (locale === "it") return it_common_nav_you(inputs)
	if (locale === "nl") return nl_common_nav_you(inputs)
	if (locale === "pl") return pl_common_nav_you(inputs)
	if (locale === "pt") return pt_common_nav_you(inputs)
	if (locale === "ru") return ru_common_nav_you(inputs)
	if (locale === "sv") return sv_common_nav_you(inputs)
	if (locale === "tr") return tr_common_nav_you(inputs)
	if (locale === "zh") return zh_common_nav_you(inputs)
	if (locale === "ja") return ja_common_nav_you(inputs)
	return en_common_nav_you(inputs)
});
