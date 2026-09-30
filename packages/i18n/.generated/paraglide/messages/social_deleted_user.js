/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Deleted_UserInputs */

const en_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted survivor`)
};

const es_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Superviviente eliminado`)
};

const de_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelöschter Überlebender`)
};

const fr_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivant supprimé`)
};

const it_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuto eliminato`)
};

const nl_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderde overlever`)
};

const pl_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty ocalały`)
};

const pt_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobrevivente excluído`)
};

const ru_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалённый выживший`)
};

const sv_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderad överlevare`)
};

const tr_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silinmiş hayatta kalan`)
};

const zh_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已注销的幸存者`)
};

const ja_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されたサバイバー`)
};

/**
* | output |
* | --- |
* | "Deleted survivor" |
*
* @param {Social_Deleted_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_deleted_user = /** @type {((inputs?: Social_Deleted_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Deleted_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_deleted_user(inputs)
	if (locale === "de") return de_social_deleted_user(inputs)
	if (locale === "fr") return fr_social_deleted_user(inputs)
	if (locale === "it") return it_social_deleted_user(inputs)
	if (locale === "nl") return nl_social_deleted_user(inputs)
	if (locale === "pl") return pl_social_deleted_user(inputs)
	if (locale === "pt") return pt_social_deleted_user(inputs)
	if (locale === "ru") return ru_social_deleted_user(inputs)
	if (locale === "sv") return sv_social_deleted_user(inputs)
	if (locale === "tr") return tr_social_deleted_user(inputs)
	if (locale === "zh") return zh_social_deleted_user(inputs)
	if (locale === "ja") return ja_social_deleted_user(inputs)
	return en_social_deleted_user(inputs)
});
