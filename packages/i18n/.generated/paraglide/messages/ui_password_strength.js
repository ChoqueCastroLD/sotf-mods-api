/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ level: NonNullable<unknown> }} Ui_Password_StrengthInputs */

const en_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Password strength: ${i?.level}`)
};

const es_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seguridad de la contraseña: ${i?.level}`)
};

const de_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passwortstärke: ${i?.level}`)
};

const fr_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Robustesse du mot de passe : ${i?.level}`)
};

const it_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sicurezza della password: ${i?.level}`)
};

const nl_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wachtwoordsterkte: ${i?.level}`)
};

const pl_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Siła hasła: ${i?.level}`)
};

const pt_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Força da senha: ${i?.level}`)
};

const ru_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Надёжность пароля: ${i?.level}`)
};

const sv_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lösenordsstyrka: ${i?.level}`)
};

const tr_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Şifre gücü: ${i?.level}`)
};

const zh_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`密码强度：${i?.level}`)
};

const ja_ui_password_strength = /** @type {(inputs: Ui_Password_StrengthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`パスワードの強度: ${i?.level}`)
};

/**
* | output |
* | --- |
* | "Password strength: {level}" |
*
* @param {Ui_Password_StrengthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_password_strength = /** @type {((inputs: Ui_Password_StrengthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_StrengthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_password_strength(inputs)
	if (locale === "de") return de_ui_password_strength(inputs)
	if (locale === "fr") return fr_ui_password_strength(inputs)
	if (locale === "it") return it_ui_password_strength(inputs)
	if (locale === "nl") return nl_ui_password_strength(inputs)
	if (locale === "pl") return pl_ui_password_strength(inputs)
	if (locale === "pt") return pt_ui_password_strength(inputs)
	if (locale === "ru") return ru_ui_password_strength(inputs)
	if (locale === "sv") return sv_ui_password_strength(inputs)
	if (locale === "tr") return tr_ui_password_strength(inputs)
	if (locale === "zh") return zh_ui_password_strength(inputs)
	if (locale === "ja") return ja_ui_password_strength(inputs)
	return en_ui_password_strength(inputs)
});
