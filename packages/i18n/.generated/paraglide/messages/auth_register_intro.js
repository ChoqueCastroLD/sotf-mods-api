/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Register_IntroInputs */

const en_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free, forever. Takes a minute.`)
};

const es_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis para siempre. Solo lleva un minuto.`)
};

const de_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für immer kostenlos. Dauert eine Minute.`)
};

const fr_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratuit, pour toujours. Ça prend une minute.`)
};

const it_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis, per sempre. Ci vuole un minuto.`)
};

const nl_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor altijd gratis. Duurt een minuutje.`)
};

const pl_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za darmo, na zawsze. Zajmie minutę.`)
};

const pt_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grátis para sempre. Leva um minuto.`)
};

const ru_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бесплатно и навсегда. Займёт минуту.`)
};

const sv_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis för alltid. Tar en minut.`)
};

const tr_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonsuza dek ücretsiz. Bir dakika sürer.`)
};

const zh_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久免费，只需一分钟。`)
};

const ja_auth_register_intro = /** @type {(inputs: Auth_Register_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ずっと無料。1 分で完了します。`)
};

/**
* | output |
* | --- |
* | "Free, forever. Takes a minute." |
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
