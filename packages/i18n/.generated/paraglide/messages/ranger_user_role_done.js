/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, role: NonNullable<unknown> }} Ranger_User_Role_DoneInputs */

const en_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is now ${i?.role}.`)
};

const es_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ahora es ${i?.role}.`)
};

const de_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist jetzt ${i?.role}.`)
};

const fr_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est maintenant ${i?.role}.`)
};

const it_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ora è ${i?.role}.`)
};

const nl_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is nu ${i?.role}.`)
};

const pl_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rola ${i?.name}: ${i?.role}.`)
};

const pt_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} agora é ${i?.role}.`)
};

const ru_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Роль ${i?.name}: ${i?.role}.`)
};

const sv_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är nu ${i?.role}.`)
};

const tr_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık ${i?.role}.`)
};

const zh_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 现在是 ${i?.role}。`)
};

const ja_ranger_user_role_done = /** @type {(inputs: Ranger_User_Role_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は ${i?.role} になりました。`)
};

/**
* | output |
* | --- |
* | "{name} is now {role}." |
*
* @param {Ranger_User_Role_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_role_done = /** @type {((inputs: Ranger_User_Role_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Role_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_role_done(inputs)
	if (locale === "de") return de_ranger_user_role_done(inputs)
	if (locale === "fr") return fr_ranger_user_role_done(inputs)
	if (locale === "it") return it_ranger_user_role_done(inputs)
	if (locale === "nl") return nl_ranger_user_role_done(inputs)
	if (locale === "pl") return pl_ranger_user_role_done(inputs)
	if (locale === "pt") return pt_ranger_user_role_done(inputs)
	if (locale === "ru") return ru_ranger_user_role_done(inputs)
	if (locale === "sv") return sv_ranger_user_role_done(inputs)
	if (locale === "tr") return tr_ranger_user_role_done(inputs)
	if (locale === "zh") return zh_ranger_user_role_done(inputs)
	if (locale === "ja") return ja_ranger_user_role_done(inputs)
	return en_ranger_user_role_done(inputs)
});
