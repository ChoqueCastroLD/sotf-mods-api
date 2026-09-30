/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Ranger_User_Banned_OnInputs */

const en_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Banned on ${i?.date}`)
};

const es_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baneado el ${i?.date}`)
};

const de_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gesperrt am ${i?.date}`)
};

const fr_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Banni le ${i?.date}`)
};

const it_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bannato il ${i?.date}`)
};

const nl_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verbannen op ${i?.date}`)
};

const pl_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zbanowany ${i?.date}`)
};

const pt_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Banido em ${i?.date}`)
};

const ru_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Заблокирован ${i?.date}`)
};

const sv_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bannlyst ${i?.date}`)
};

const tr_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yasaklanma: ${i?.date}`)
};

const zh_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`封禁于 ${i?.date}`)
};

const ja_ranger_user_banned_on = /** @type {(inputs: Ranger_User_Banned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に BAN`)
};

/**
* | output |
* | --- |
* | "Banned on {date}" |
*
* @param {Ranger_User_Banned_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_banned_on = /** @type {((inputs: Ranger_User_Banned_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Banned_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_banned_on(inputs)
	if (locale === "de") return de_ranger_user_banned_on(inputs)
	if (locale === "fr") return fr_ranger_user_banned_on(inputs)
	if (locale === "it") return it_ranger_user_banned_on(inputs)
	if (locale === "nl") return nl_ranger_user_banned_on(inputs)
	if (locale === "pl") return pl_ranger_user_banned_on(inputs)
	if (locale === "pt") return pt_ranger_user_banned_on(inputs)
	if (locale === "ru") return ru_ranger_user_banned_on(inputs)
	if (locale === "sv") return sv_ranger_user_banned_on(inputs)
	if (locale === "tr") return tr_ranger_user_banned_on(inputs)
	if (locale === "zh") return zh_ranger_user_banned_on(inputs)
	if (locale === "ja") return ja_ranger_user_banned_on(inputs)
	return en_ranger_user_banned_on(inputs)
});
