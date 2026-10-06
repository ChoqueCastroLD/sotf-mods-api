/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Register_IntroInputs */

const en_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registration is free and takes a minute.`)
};

const es_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El registro es gratuito y lleva un minuto.`)
};

const de_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Registrierung ist kostenlos und dauert eine Minute.`)
};

const fr_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’inscription est gratuite et prend une minute.`)
};

const it_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La registrazione è gratuita e richiede un minuto.`)
};

const nl_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreren is gratis en duurt een minuut.`)
};

const pl_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejestracja jest bezpłatna i zajmuje minutę.`)
};

const pt_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O registro é gratuito e leva um minuto.`)
};

const ru_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Регистрация бесплатна и занимает минуту.`)
};

const sv_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det är gratis att registrera sig och tar en minut.`)
};

const tr_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ücretsizdir ve bir dakika sürer.`)
};

const zh_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册免费，只需一分钟。`)
};

const ja_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登録は無料で、1 分で完了します。`)
};

/**
* | output |
* | --- |
* | "Registration is free and takes a minute." |
*
* @param {Auth_Register_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_register_intro = /** @type {((inputs?: Auth_Register_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Register_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_register_intro(inputs)
	if (locale === "de") return de_auth_register_intro(inputs)
	if (locale === "fr") return fr_auth_register_intro(inputs)
	if (locale === "it") return it_auth_register_intro(inputs)
	if (locale === "nl") return nl_auth_register_intro(inputs)
	if (locale === "pl") return pl_auth_register_intro(inputs)
	if (locale === "pt") return pt_auth_register_intro(inputs)
	if (locale === "ru") return ru_auth_register_intro(inputs)
	if (locale === "sv") return sv_auth_register_intro(inputs)
	if (locale === "tr") return tr_auth_register_intro(inputs)
	if (locale === "zh") return zh_auth_register_intro(inputs)
	if (locale === "ja") return ja_auth_register_intro(inputs)
	return en_auth_register_intro(inputs)
});
