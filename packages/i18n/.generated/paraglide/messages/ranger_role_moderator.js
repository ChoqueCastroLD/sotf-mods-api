/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Role_ModeratorInputs */

const en_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const es_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const de_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const fr_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modérateur`)
};

const it_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatore`)
};

const nl_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pl_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pt_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const ru_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор`)
};

const sv_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const tr_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatör`)
};

const zh_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主`)
};

const ja_ranger_role_moderator = /** @type {(inputs: Ranger_Role_ModeratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーター`)
};

/**
* | output |
* | --- |
* | "Moderator" |
*
* @param {Ranger_Role_ModeratorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_role_moderator = /** @type {((inputs?: Ranger_Role_ModeratorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Role_ModeratorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_role_moderator(inputs)
	if (locale === "de") return de_ranger_role_moderator(inputs)
	if (locale === "fr") return fr_ranger_role_moderator(inputs)
	if (locale === "it") return it_ranger_role_moderator(inputs)
	if (locale === "nl") return nl_ranger_role_moderator(inputs)
	if (locale === "pl") return pl_ranger_role_moderator(inputs)
	if (locale === "pt") return pt_ranger_role_moderator(inputs)
	if (locale === "ru") return ru_ranger_role_moderator(inputs)
	if (locale === "sv") return sv_ranger_role_moderator(inputs)
	if (locale === "tr") return tr_ranger_role_moderator(inputs)
	if (locale === "zh") return zh_ranger_role_moderator(inputs)
	if (locale === "ja") return ja_ranger_role_moderator(inputs)
	return en_ranger_role_moderator(inputs)
});
