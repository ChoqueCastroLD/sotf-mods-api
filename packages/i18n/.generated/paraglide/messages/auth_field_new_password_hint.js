/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_New_Password_HintInputs */

const en_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least 10 characters. A long phrase is easy to remember and hard to guess.`)
};

const es_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al menos 10 caracteres. Una frase larga es fácil de recordar y difícil de adivinar.`)
};

const de_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestens 10 Zeichen. Eine lange Wortfolge ist leicht zu merken und schwer zu erraten.`)
};

const fr_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au moins 10 caractères. Une longue phrase est facile à retenir et difficile à deviner.`)
};

const it_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Almeno 10 caratteri. Una frase lunga è facile da ricordare e difficile da indovinare.`)
};

const nl_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minstens 10 tekens. Een lange zin is makkelijk te onthouden en moeilijk te raden.`)
};

const pl_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co najmniej 10 znaków. Długie zdanie łatwo zapamiętać i trudno odgadnąć.`)
};

const pt_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pelo menos 10 caracteres. Uma frase longa é fácil de lembrar e difícil de adivinhar.`)
};

const ru_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не меньше 10 символов. Длинную фразу легко запомнить и трудно угадать.`)
};

const sv_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minst 10 tecken. En lång fras är lätt att komma ihåg och svår att gissa.`)
};

const tr_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 10 karakter. Uzun bir cümleyi hatırlamak kolay, tahmin etmek zordur.`)
};

const zh_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少 10 个字符。长短语容易记住，也难以猜到。`)
};

const ja_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10 文字以上。長いフレーズは覚えやすく、推測されにくくなります。`)
};

/**
* | output |
* | --- |
* | "At least 10 characters. A long phrase is easy to remember and hard to guess." |
*
* @param {Auth_Field_New_Password_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_new_password_hint = /** @type {((inputs?: Auth_Field_New_Password_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_New_Password_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_new_password_hint(inputs)
	if (locale === "de") return de_auth_field_new_password_hint(inputs)
	if (locale === "fr") return fr_auth_field_new_password_hint(inputs)
	if (locale === "it") return it_auth_field_new_password_hint(inputs)
	if (locale === "nl") return nl_auth_field_new_password_hint(inputs)
	if (locale === "pl") return pl_auth_field_new_password_hint(inputs)
	if (locale === "pt") return pt_auth_field_new_password_hint(inputs)
	if (locale === "ru") return ru_auth_field_new_password_hint(inputs)
	if (locale === "sv") return sv_auth_field_new_password_hint(inputs)
	if (locale === "tr") return tr_auth_field_new_password_hint(inputs)
	if (locale === "zh") return zh_auth_field_new_password_hint(inputs)
	if (locale === "ja") return ja_auth_field_new_password_hint(inputs)
	return en_auth_field_new_password_hint(inputs)
});
