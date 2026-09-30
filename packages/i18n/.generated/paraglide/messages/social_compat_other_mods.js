/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Other_ModsInputs */

const en_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other mods installed`)
};

const es_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otros mods instalados`)
};

const de_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere installierte Mods`)
};

const fr_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres mods installés`)
};

const it_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre mod installate`)
};

const nl_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere geïnstalleerde mods`)
};

const pl_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne zainstalowane mody`)
};

const pt_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outros mods instalados`)
};

const ru_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие установленные моды`)
};

const sv_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra installerade moddar`)
};

const tr_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulu diğer modlar`)
};

const zh_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已安装的其他模组`)
};

const ja_social_compat_other_mods = /** @type {(inputs: Social_Compat_Other_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかに入れている MOD`)
};

/**
* | output |
* | --- |
* | "Other mods installed" |
*
* @param {Social_Compat_Other_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_other_mods = /** @type {((inputs?: Social_Compat_Other_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Other_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_other_mods(inputs)
	if (locale === "de") return de_social_compat_other_mods(inputs)
	if (locale === "fr") return fr_social_compat_other_mods(inputs)
	if (locale === "it") return it_social_compat_other_mods(inputs)
	if (locale === "nl") return nl_social_compat_other_mods(inputs)
	if (locale === "pl") return pl_social_compat_other_mods(inputs)
	if (locale === "pt") return pt_social_compat_other_mods(inputs)
	if (locale === "ru") return ru_social_compat_other_mods(inputs)
	if (locale === "sv") return sv_social_compat_other_mods(inputs)
	if (locale === "tr") return tr_social_compat_other_mods(inputs)
	if (locale === "zh") return zh_social_compat_other_mods(inputs)
	if (locale === "ja") return ja_social_compat_other_mods(inputs)
	return en_social_compat_other_mods(inputs)
});
