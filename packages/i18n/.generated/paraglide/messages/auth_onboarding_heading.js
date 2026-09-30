/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_HeadingInputs */

const en_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up camp`)
};

const es_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monta el campamento`)
};

const de_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lager aufschlagen`)
};

const fr_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez votre campement`)
};

const it_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monta il campo`)
};

const nl_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sla je kamp op`)
};

const pl_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozbij obóz`)
};

const pt_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monte acampamento`)
};

const ru_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разбейте лагерь`)
};

const sv_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slå läger`)
};

const tr_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampını kur`)
};

const zh_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安营扎寨`)
};

const ja_auth_onboarding_heading = /** @type {(inputs: Auth_Onboarding_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプの準備`)
};

/**
* | output |
* | --- |
* | "Set up camp" |
*
* @param {Auth_Onboarding_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_heading = /** @type {((inputs?: Auth_Onboarding_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_heading(inputs)
	if (locale === "de") return de_auth_onboarding_heading(inputs)
	if (locale === "fr") return fr_auth_onboarding_heading(inputs)
	if (locale === "it") return it_auth_onboarding_heading(inputs)
	if (locale === "nl") return nl_auth_onboarding_heading(inputs)
	if (locale === "pl") return pl_auth_onboarding_heading(inputs)
	if (locale === "pt") return pt_auth_onboarding_heading(inputs)
	if (locale === "ru") return ru_auth_onboarding_heading(inputs)
	if (locale === "sv") return sv_auth_onboarding_heading(inputs)
	if (locale === "tr") return tr_auth_onboarding_heading(inputs)
	if (locale === "zh") return zh_auth_onboarding_heading(inputs)
	if (locale === "ja") return ja_auth_onboarding_heading(inputs)
	return en_auth_onboarding_heading(inputs)
});
