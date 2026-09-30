/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_New_Password_HintInputs */

const en_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least 10 characters. A few random words work great.`)
};

const es_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al menos 10 caracteres. Unas cuantas palabras al azar funcionan de maravilla.`)
};

const de_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestens 10 Zeichen. Ein paar zufällige Wörter funktionieren super.`)
};

const fr_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au moins 10 caractères. Quelques mots au hasard font parfaitement l’affaire.`)
};

const it_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Almeno 10 caratteri. Qualche parola a caso funziona benissimo.`)
};

const nl_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minstens 10 tekens. Een paar willekeurige woorden werken prima.`)
};

const pl_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co najmniej 10 znaków. Kilka losowych słów sprawdza się świetnie.`)
};

const pt_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pelo menos 10 caracteres. Algumas palavras aleatórias funcionam muito bem.`)
};

const ru_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не меньше 10 символов. Несколько случайных слов отлично подойдут.`)
};

const sv_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minst 10 tecken. Några slumpmässiga ord fungerar utmärkt.`)
};

const tr_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 10 karakter. Birkaç rastgele kelime harika iş görür.`)
};

const zh_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少 10 个字符。几个随机单词组合就很好用。`)
};

const ja_auth_field_new_password_hint = /** @type {(inputs: Auth_Field_New_Password_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10 文字以上。ランダムな単語をいくつか並べるのがおすすめです。`)
};

/**
* | output |
* | --- |
* | "At least 10 characters. A few random words work great." |
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
