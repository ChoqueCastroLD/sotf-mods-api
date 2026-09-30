/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Register_TitleInputs */

const en_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your account`)
};

const es_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea tu cuenta`)
};

const de_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto erstellen`)
};

const fr_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer votre compte`)
};

const it_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea il tuo account`)
};

const nl_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak je account aan`)
};

const pl_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Załóż konto`)
};

const pt_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie sua conta`)
};

const ru_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте аккаунт`)
};

const sv_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ditt konto`)
};

const tr_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabını oluştur`)
};

const zh_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建账号`)
};

const ja_auth_meta_register_title = /** @type {(inputs: Auth_Meta_Register_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを作成`)
};

/**
* | output |
* | --- |
* | "Create your account" |
*
* @param {Auth_Meta_Register_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_register_title = /** @type {((inputs?: Auth_Meta_Register_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Register_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_register_title(inputs)
	if (locale === "de") return de_auth_meta_register_title(inputs)
	if (locale === "fr") return fr_auth_meta_register_title(inputs)
	if (locale === "it") return it_auth_meta_register_title(inputs)
	if (locale === "nl") return nl_auth_meta_register_title(inputs)
	if (locale === "pl") return pl_auth_meta_register_title(inputs)
	if (locale === "pt") return pt_auth_meta_register_title(inputs)
	if (locale === "ru") return ru_auth_meta_register_title(inputs)
	if (locale === "sv") return sv_auth_meta_register_title(inputs)
	if (locale === "tr") return tr_auth_meta_register_title(inputs)
	if (locale === "zh") return zh_auth_meta_register_title(inputs)
	if (locale === "ja") return ja_auth_meta_register_title(inputs)
	return en_auth_meta_register_title(inputs)
});
