/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Verified_CreatorInputs */

const en_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified creator`)
};

const es_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador verificado`)
};

const de_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierter Ersteller`)
};

const fr_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur vérifié`)
};

const it_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore verificato`)
};

const nl_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde maker`)
};

const pl_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowany twórca`)
};

const pt_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador verificado`)
};

const ru_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный автор`)
};

const sv_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierad skapare`)
};

const tr_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış yapımcı`)
};

const zh_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已认证创作者`)
};

const ja_builds_verified_creator = /** @type {(inputs: Builds_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイター`)
};

/**
* | output |
* | --- |
* | "Verified creator" |
*
* @param {Builds_Verified_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_verified_creator = /** @type {((inputs?: Builds_Verified_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Verified_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_verified_creator(inputs)
	if (locale === "de") return de_builds_verified_creator(inputs)
	if (locale === "fr") return fr_builds_verified_creator(inputs)
	if (locale === "it") return it_builds_verified_creator(inputs)
	if (locale === "nl") return nl_builds_verified_creator(inputs)
	if (locale === "pl") return pl_builds_verified_creator(inputs)
	if (locale === "pt") return pt_builds_verified_creator(inputs)
	if (locale === "ru") return ru_builds_verified_creator(inputs)
	if (locale === "sv") return sv_builds_verified_creator(inputs)
	if (locale === "tr") return tr_builds_verified_creator(inputs)
	if (locale === "zh") return zh_builds_verified_creator(inputs)
	if (locale === "ja") return ja_builds_verified_creator(inputs)
	return en_builds_verified_creator(inputs)
});
