/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_TitleInputs */

const en_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction this user`)
};

const es_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sancionar a este usuario`)
};

const de_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Benutzer sanktionieren`)
};

const fr_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctionner cet utilisateur`)
};

const it_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanziona questo utente`)
};

const nl_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze gebruiker sanctioneren`)
};

const pl_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nałóż sankcję na tego użytkownika`)
};

const pt_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sancionar este usuário`)
};

const ru_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наложить санкцию на пользователя`)
};

const sv_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionera användaren`)
};

const tr_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kullanıcıya yaptırım uygula`)
};

const zh_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚此用户`)
};

const ja_ranger_sanction_title = /** @type {(inputs: Ranger_Sanction_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このユーザーを制裁`)
};

/**
* | output |
* | --- |
* | "Sanction this user" |
*
* @param {Ranger_Sanction_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_title = /** @type {((inputs?: Ranger_Sanction_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_title(inputs)
	if (locale === "de") return de_ranger_sanction_title(inputs)
	if (locale === "fr") return fr_ranger_sanction_title(inputs)
	if (locale === "it") return it_ranger_sanction_title(inputs)
	if (locale === "nl") return nl_ranger_sanction_title(inputs)
	if (locale === "pl") return pl_ranger_sanction_title(inputs)
	if (locale === "pt") return pt_ranger_sanction_title(inputs)
	if (locale === "ru") return ru_ranger_sanction_title(inputs)
	if (locale === "sv") return sv_ranger_sanction_title(inputs)
	if (locale === "tr") return tr_ranger_sanction_title(inputs)
	if (locale === "zh") return zh_ranger_sanction_title(inputs)
	if (locale === "ja") return ja_ranger_sanction_title(inputs)
	return en_ranger_sanction_title(inputs)
});
