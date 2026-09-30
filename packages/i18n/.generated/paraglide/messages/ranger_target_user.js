/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_UserInputs */

const en_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

const es_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario`)
};

const de_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzer`)
};

const fr_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateur`)
};

const it_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utente`)
};

const nl_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruiker`)
};

const pl_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownik`)
};

const pt_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário`)
};

const ru_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователь`)
};

const sv_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı`)
};

const zh_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_ranger_target_user = /** @type {(inputs: Ranger_Target_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {Ranger_Target_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_user = /** @type {((inputs?: Ranger_Target_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_user(inputs)
	if (locale === "de") return de_ranger_target_user(inputs)
	if (locale === "fr") return fr_ranger_target_user(inputs)
	if (locale === "it") return it_ranger_target_user(inputs)
	if (locale === "nl") return nl_ranger_target_user(inputs)
	if (locale === "pl") return pl_ranger_target_user(inputs)
	if (locale === "pt") return pt_ranger_target_user(inputs)
	if (locale === "ru") return ru_ranger_target_user(inputs)
	if (locale === "sv") return sv_ranger_target_user(inputs)
	if (locale === "tr") return tr_ranger_target_user(inputs)
	if (locale === "zh") return zh_ranger_target_user(inputs)
	if (locale === "ja") return ja_ranger_target_user(inputs)
	return en_ranger_target_user(inputs)
});
