/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_SelfInputs */

const en_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is your own account: another moderator has to act on it.`)
};

const es_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es tu propia cuenta: tiene que actuar otro moderador.`)
};

const de_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist dein eigenes Konto: Ein anderer Moderator muss handeln.`)
};

const fr_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est votre propre compte : un autre modérateur doit s’en charger.`)
};

const it_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È il tuo account: deve intervenire un altro moderatore.`)
};

const nl_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is je eigen account: een andere moderator moet ingrijpen.`)
};

const pl_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To twoje własne konto: musi zadziałać inny moderator.`)
};

const pt_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta é a sua própria conta: outro moderador precisa agir.`)
};

const ru_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это ваш собственный аккаунт: действовать должен другой модератор.`)
};

const sv_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är ditt eget konto: en annan moderator måste agera.`)
};

const tr_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu senin hesabın: başka bir moderatör işlem yapmalı.`)
};

const zh_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是你自己的账号：需要由其他版主处理。`)
};

const ja_ranger_user_self = /** @type {(inputs: Ranger_User_SelfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなた自身のアカウントです。別のモデレーターが対応する必要があります。`)
};

/**
* | output |
* | --- |
* | "This is your own account: another moderator has to act on it." |
*
* @param {Ranger_User_SelfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_self = /** @type {((inputs?: Ranger_User_SelfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_SelfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_self(inputs)
	if (locale === "de") return de_ranger_user_self(inputs)
	if (locale === "fr") return fr_ranger_user_self(inputs)
	if (locale === "it") return it_ranger_user_self(inputs)
	if (locale === "nl") return nl_ranger_user_self(inputs)
	if (locale === "pl") return pl_ranger_user_self(inputs)
	if (locale === "pt") return pt_ranger_user_self(inputs)
	if (locale === "ru") return ru_ranger_user_self(inputs)
	if (locale === "sv") return sv_ranger_user_self(inputs)
	if (locale === "tr") return tr_ranger_user_self(inputs)
	if (locale === "zh") return zh_ranger_user_self(inputs)
	if (locale === "ja") return ja_ranger_user_self(inputs)
	return en_ranger_user_self(inputs)
});
