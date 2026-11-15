/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Comment_OwnerInputs */

const en_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack author`)
};

const es_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor del modpack`)
};

const de_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor des Modpacks`)
};

const fr_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur du modpack`)
};

const it_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore del modpack`)
};

const nl_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker van de modpack`)
};

const pl_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor modpacka`)
};

const pt_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor do modpack`)
};

const ru_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор модпака`)
};

const sv_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaketets skapare`)
};

const tr_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketinin yazarı`)
};

const zh_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包作者`)
};

const ja_modpacks_comment_owner = /** @type {(inputs: Modpacks_Comment_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックの作者`)
};

/**
* | output |
* | --- |
* | "Modpack author" |
*
* @param {Modpacks_Comment_OwnerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_comment_owner = /** @type {((inputs?: Modpacks_Comment_OwnerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Comment_OwnerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_comment_owner(inputs)
	if (locale === "de") return de_modpacks_comment_owner(inputs)
	if (locale === "fr") return fr_modpacks_comment_owner(inputs)
	if (locale === "it") return it_modpacks_comment_owner(inputs)
	if (locale === "nl") return nl_modpacks_comment_owner(inputs)
	if (locale === "pl") return pl_modpacks_comment_owner(inputs)
	if (locale === "pt") return pt_modpacks_comment_owner(inputs)
	if (locale === "ru") return ru_modpacks_comment_owner(inputs)
	if (locale === "sv") return sv_modpacks_comment_owner(inputs)
	if (locale === "tr") return tr_modpacks_comment_owner(inputs)
	if (locale === "zh") return zh_modpacks_comment_owner(inputs)
	if (locale === "ja") return ja_modpacks_comment_owner(inputs)
	return en_modpacks_comment_owner(inputs)
});
