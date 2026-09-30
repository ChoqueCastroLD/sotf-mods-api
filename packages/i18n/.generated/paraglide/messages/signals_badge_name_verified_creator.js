/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Verified_CreatorInputs */

const en_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified Creator`)
};

const es_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador verificado`)
};

const de_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierter Ersteller`)
};

const fr_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur vérifié`)
};

const it_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore verificato`)
};

const nl_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde maker`)
};

const pl_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowany twórca`)
};

const pt_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador verificado`)
};

const ru_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный автор`)
};

const sv_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierad skapare`)
};

const tr_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış Üretici`)
};

const zh_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`认证创作者`)
};

const ja_signals_badge_name_verified_creator = /** @type {(inputs: Signals_Badge_Name_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイター`)
};

/**
* | output |
* | --- |
* | "Verified Creator" |
*
* @param {Signals_Badge_Name_Verified_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_verified_creator = /** @type {((inputs?: Signals_Badge_Name_Verified_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Verified_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_verified_creator(inputs)
	if (locale === "de") return de_signals_badge_name_verified_creator(inputs)
	if (locale === "fr") return fr_signals_badge_name_verified_creator(inputs)
	if (locale === "it") return it_signals_badge_name_verified_creator(inputs)
	if (locale === "nl") return nl_signals_badge_name_verified_creator(inputs)
	if (locale === "pl") return pl_signals_badge_name_verified_creator(inputs)
	if (locale === "pt") return pt_signals_badge_name_verified_creator(inputs)
	if (locale === "ru") return ru_signals_badge_name_verified_creator(inputs)
	if (locale === "sv") return sv_signals_badge_name_verified_creator(inputs)
	if (locale === "tr") return tr_signals_badge_name_verified_creator(inputs)
	if (locale === "zh") return zh_signals_badge_name_verified_creator(inputs)
	if (locale === "ja") return ja_signals_badge_name_verified_creator(inputs)
	return en_signals_badge_name_verified_creator(inputs)
});
